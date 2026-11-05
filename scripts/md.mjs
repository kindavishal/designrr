// Minimal Markdown -> HTML for the pages this repo generates (headings, paragraphs, lists, tables,
// blockquotes, fenced code, inline code, bold, italics, links, bare URLs). Input is our own trusted output,
// but everything is still escaped. Returns { html, headings }.
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const slugifyHeading = (s) => s.toLowerCase().replace(/<[^>]+>/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function inline(text) {
  const codes = [];
  let s = text.replace(/`([^`]+)`/g, (_, c) => `\u0000${codes.push(c) - 1}\u0000`);
  s = esc(s);
  s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+|[^)\s]+)\)/g, (_, t, u) => `<a href="${u}">${t}</a>`);
  s = s.replace(/(^|[\s(])(https?:\/\/[^\s<)]+[^\s<).,;:])/g, (_, pre, u) => `${pre}<a href="${u}">${u}</a>`);
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/(^|[\s(])_([^_]+)_(?=[\s).,;:]|$)/g, '$1<em>$2</em>');
  return s.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${esc(codes[Number(i)])}</code>`);
}

export function renderMarkdown(md) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  const headings = [];
  let i = 0;
  const para = [];
  const flush = () => { if (para.length) { out.push(`<p>${inline(para.join(' '))}</p>`); para.length = 0; } };
  while (i < lines.length) {
    const line = lines[i];
    const fence = line.match(/^(\s*)```(\w*)/);
    if (fence) {
      flush();
      const indent = fence[1].length;
      const lang = fence[2] || '';
      const body = [];
      i++;
      while (i < lines.length && !/^\s*```\s*$/.test(lines[i])) { body.push(lines[i].slice(Math.min(indent, lines[i].search(/\S|$/)))); i++; }
      i++;
      const code = body.join('\n');
      out.push(`<div class="code-block"><pre><code${lang ? ` data-lang="${esc(lang)}"` : ''}>${esc(code)}</code></pre><wa-copy-button value="${esc(code)}" class="code-copy"></wa-copy-button></div>`);
      continue;
    }
    const h = line.match(/^(#{1,4})\s+(.*)$/);
    if (h) {
      flush();
      const level = h[1].length;
      const id = slugifyHeading(h[2]);
      if (level === 2) headings.push({ id, text: h[2].replace(/[*`_]/g, '') });
      out.push(`<h${level} id="${id}">${inline(h[2])}</h${level}>`);
      i++; continue;
    }
    if (/^\|.*\|\s*$/.test(line)) {
      flush();
      const rows = [];
      while (i < lines.length && /^\|.*\|\s*$/.test(lines[i])) { rows.push(lines[i]); i++; }
      const cells = (r) => r.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
      const [head, sep, ...body] = rows;
      const hasHead = sep && /^[\s|:-]+$/.test(sep);
      const headCells = cells(head);
      const bodyRows = hasHead ? body : rows.slice(1);
      const showHead = hasHead && headCells.some(Boolean);
      out.push(`<table>${showHead ? `<thead><tr>${headCells.map((c) => `<th>${inline(c)}</th>`).join('')}</tr></thead>` : ''}<tbody>${bodyRows.map((r) => `<tr>${cells(r).map((c, j) => (j === 0 && !showHead ? `<th scope="row">${inline(c)}</th>` : `<td>${inline(c)}</td>`)).join('')}</tr>`).join('')}</tbody></table>`);
      continue;
    }
    if (/^>\s?/.test(line)) {
      flush();
      const q = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) { q.push(lines[i].replace(/^>\s?/, '')); i++; }
      out.push(`<blockquote><p>${inline(q.join(' '))}</p></blockquote>`);
      continue;
    }
    const li = line.match(/^(\s*)([-*]|\d+\.)\s+(.*)$/);
    if (li) {
      flush();
      const ordered = /\d/.test(li[2]);
      const items = [];
      while (i < lines.length) {
        const m = lines[i].match(/^(\s*)([-*]|\d+\.)\s+(.*)$/);
        if (m && m[1].length === li[1].length) { items.push([m[3]]); i++; continue; }
        // Continuation lines (nested bullets, indented code) stay inside the current item.
        if (items.length && /^\s{2,}\S/.test(lines[i])) { items[items.length - 1].push(lines[i]); i++; continue; }
        break;
      }
      out.push(`<${ordered ? 'ol' : 'ul'}>${items.map(([first, ...rest]) => `<li>${inline(first)}${rest.length ? renderMarkdown(rest.map((r) => r.replace(/^\s{2,4}/, '')).join('\n')).html : ''}</li>`).join('')}</${ordered ? 'ol' : 'ul'}>`);
      continue;
    }
    if (!line.trim()) { flush(); i++; continue; }
    para.push(line.trim());
    i++;
  }
  flush();
  return { html: out.join('\n'), headings };
}
