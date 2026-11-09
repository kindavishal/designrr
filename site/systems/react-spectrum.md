# React Spectrum / React Aria

> Accessibility- and i18n-focused React: React Aria for custom-branded systems, React Spectrum S2 for Adobe-style tools.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **90/100** |
| Maintainer | Adobe (org-backed) |
| Platforms | web |
| Frameworks | react |
| Styling | headless (headless) |
| Install | CLI copies component source into your repo (requires: bundler) |
| Good for | enterprise, accessibility-critical, creative-tools, custom-brand |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 6.8k KB |
| License | Apache-2.0 |
| Last activity | 2026-11-06 |
| Docs | https://react-spectrum.adobe.com |
| Source | https://github.com/adobe/react-spectrum |

## Public usage & feedback
Numbers as reported by each source on 2026-11-09; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 16.0k | GitHub API (adobe/react-spectrum) |
| GitHub forks | 1.6k | GitHub API |
| Contributors (incl. anonymous) | 551 | GitHub API |
| Issues closed / open | 3.2k / 544 (85% closed) | GitHub API |
| npm weekly downloads | 9.0M | npm (`react-aria-components` 1.22.1) |

## AI resources (use these first)
- **llms.txt:** https://react-spectrum.adobe.com/llms.txt
- **MCP server:**
  - npm package `@react-aria/mcp`
    ```json
    {"mcpServers":{"react-spectrum":{"command":"npx","args":["-y","@react-aria/mcp"]}}}
    ```
- **Copy-the-source CLI:** documented at https://react-aria.adobe.com/getting-started.md
- **Design tokens:** https://github.com/adobe/react-spectrum/blob/HEAD/packages/@react-spectrum/s2/style/tokens.ts
- **Agent/contributor docs in repo:** https://github.com/adobe/react-spectrum/blob/HEAD/AGENTS.md

## Consider an alternative if
- you want a finished visual style out of the box. This is headless; you supply all styling.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Hand-written guide for v1, checked against https://react-aria.adobe.com/getting-started.md on 2026-11-05; latest release 1.22.1._

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

## Build checklist (any system)
1. **Install & provider:** follow the install section exactly for the detected framework and version.
2. **Brand → tokens:** set primary/neutral colours, radius, font family and density through the system's theme/tokens API, once, at the root. No hard-coded hex values in components.
3. **App shell first:** build navigation, header and page layout from the system's shell/layout components.
4. **Screens from components:** map each screen of the product idea to existing components and patterns (tables, forms, dialogs, empty states). Only write a custom component when nothing fits, and build it from the system's primitives and tokens.
5. **States:** loading, empty, error and success states for every data view, using the system's skeleton/alert/toast components.
6. **Accessibility:** keep the system's semantics (labels, roles, focus management); check keyboard navigation and colour contrast after theming.
7. **Dark mode & responsiveness:** enable the system's colour-scheme support; check at phone and desktop widths.
8. **Verify:** run the app, click through every screen, fix console errors and type errors.

## Score breakdown
| Capability | Points |
|---|---|
| Official MCP server (agent can query components/docs live) | 20/20 |
| llms.txt on the docs site | 15/15 |
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 10/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-09. Agent-readable source: https://designrr.vercel.app/systems/react-spectrum.md_
