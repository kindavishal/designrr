# assistant-ui

> Production AI chat UIs in React with streaming, attachments and tool UIs.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **90/100** |
| Maintainer | assistant-ui |
| Platforms | web |
| Frameworks | react |
| Styling | tailwind |
| Install | CLI copies component source into your repo (requires: tailwind, bundler) |
| Good for | ai-app, chat; shapes: chat-ai |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 2.8k KB |
| License | MIT |
| GitHub stars | 13.0k |
| npm weekly downloads | 2.9M (`@assistant-ui/react` 0.15.32) |
| Last activity | 2026-11-04 |
| Docs | https://www.assistant-ui.com |
| Source | https://github.com/assistant-ui/assistant-ui |

## AI resources (use these first)
- **llms.txt:** https://www.assistant-ui.com/llms.txt
- **llms-full.txt:** https://www.assistant-ui.com/llms-full.txt
- **MCP server:**
  - in-repo package: https://github.com/assistant-ui/assistant-ui/tree/HEAD/apps/docs (see its README for setup)
- **Design tokens:** https://github.com/assistant-ui/assistant-ui/blob/HEAD/packages/variants/src/server/tokens.ts
- **Agent/contributor docs in repo:** https://github.com/assistant-ui/assistant-ui/blob/HEAD/AGENTS.md

## Consider an alternative if
- the project does not use (or cannot add) Tailwind CSS.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Hand-written guide for v0.11, written 2026-11-05; latest release 0.15.32._

## Install
```bash
npx assistant-ui@latest create     # new app
npx assistant-ui@latest init       # existing shadcn/ui app
```

## What you get
Composable primitives (Thread, Composer, Message, ActionBar) with runtimes for the AI SDK, LangGraph, Mastra or a custom backend; streaming, attachments, tool-call UIs.

## Agent tips
- Styled defaults follow shadcn/ui theming; use with a shadcn base for the rest of the app.

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
| llms-full.txt (whole docs as one markdown file) | 5/5 |
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 10/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/assistant-ui.md_
