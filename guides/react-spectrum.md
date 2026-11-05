---
writtenFor: "1"
written: 2026-11-05
verifiedAgainst: https://react-aria.adobe.com/getting-started.md
---
## Install
```bash
npm install react-aria-components     # React Aria: unstyled, accessible; bring your own styles
npm install @react-spectrum/s2        # React Spectrum S2: Adobe's styled components
```

## Setup
- **React Aria Components:** no provider. Start from the official vanilla-CSS or Tailwind examples (copy, download as ZIP, or install with the shadcn CLI from each example), or download a Storybook starter kit.
- **React Spectrum S2:** styling uses build-time style macros, so follow the bundler setup for your tool (Parcel, Vite, webpack, Next.js, React Router, Rollup, ESBuild) in the S2 getting-started guide.

## When to choose which
- **React Aria:** a custom brand that needs best-in-class accessibility and internationalisation (date pickers, comboboxes, drag and drop, tables).
- **React Spectrum S2:** Adobe-style creative and pro tools.

## Agent tips
- MCP servers: `npx @react-aria/mcp@latest` (React Aria) and `npx @react-spectrum/mcp@latest` (S2).
- Agent skills: `npx skills add https://react-aria.adobe.com` or `npx skills add https://react-spectrum.adobe.com`.
- LLM docs: `https://react-aria.adobe.com/llms.txt` and `https://react-spectrum.adobe.com/llms.txt` (every page has a `.md` version).
