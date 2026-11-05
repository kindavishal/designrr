# Stack Overflow Stacks

> Developer and community content sites with plain CSS classes, light/dark/high-contrast themes.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **65/100** |
| Maintainer | Stack Overflow (org-backed) |
| Brand-locked | **yes**: Stack Overflow brand identity (themeable, but recognisably Stack Overflow). |
| Platforms | web |
| Frameworks | any, vanilla |
| Styling | css |
| Install | CDN link or npm; no build step needed |
| Good for | community, content, devtools |
| Dark mode / RTL | yes / not detected |
| Package size (unpacked) | 1.7k KB |
| License | MIT |
| GitHub stars | 682 |
| npm weekly downloads | 8.6k (`@stackoverflow/stacks` 3.0.2) |
| Last activity | 2026-11-05 |
| Docs | https://stackoverflow.design |
| Source | https://github.com/StackExchange/Stacks |

## AI resources (use these first)
- **llms.txt:** https://stackoverflow.design/llms.txt
- **llms-full.txt:** https://stackoverflow.design/llms-full.txt
- MCP server: none found
- **Design tokens:** https://github.com/StackExchange/Stacks/blob/HEAD/packages/stacks-email/src/lib/tokens.ts
- **Agent/contributor docs in repo:** https://github.com/StackExchange/Stacks/blob/HEAD/packages/stacks-docs/CLAUDE.md

## Consider an alternative if
- you are not that brand. Stack Overflow brand identity (themeable, but recognisably Stack Overflow).

_Generated guide (no hand-written guide yet). Prefer the official llms.txt / MCP server for exact setup._

## Install
No build step needed. From the CDN (pinned to the current release):
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@stackoverflow/stacks@3.0.2/dist/css/stacks.min.css">
<script src="https://cdn.jsdelivr.net/npm/@stackoverflow/stacks@3.0.2/dist/js/stacks.min.js"></script>
```
Check the docs for the recommended files: https://stackoverflow.design
```bash
npm install @stackoverflow/stacks
```
Then follow the framework setup in the official getting-started guide: https://stackoverflow.design

## Agent tips
- Read https://stackoverflow.design/llms.txt first. It indexes the official docs in markdown.
- Design tokens live in the repo (e.g. `packages/stacks-email/src/lib/tokens.ts`). Map brand colours and type onto these rather than hard-coding values.
- Use the system's own layout, form and feedback components before adding third-party UI libraries.

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
| Official MCP server (agent can query components/docs live) | 0/20 |
| llms.txt on the docs site | 15/15 |
| llms-full.txt (whole docs as one markdown file) | 5/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 5/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via npm, orgBacked.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/stacks.md_
