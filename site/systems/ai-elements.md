# AI Elements

> Chat, agent and AI-assistant interfaces (messages, prompt input, reasoning, tool calls) on shadcn/ui + AI SDK.

| | |
|---|---|
| Tier | **solid** |
| AI-readiness | **30/100** |
| Maintainer | Vercel (org-backed) |
| Platforms | web |
| Frameworks | react |
| Styling | tailwind |
| Install | CLI copies component source into your repo (requires: tailwind, bundler) |
| Good for | ai-app, chat, saas; shapes: chat-ai |
| Dark mode / RTL | yes / not detected |
| Package size (unpacked) | 9 KB |
| License | NOASSERTION |
| GitHub stars | 2.5k |
| npm weekly downloads | 152.3k (`ai-elements` 1.9.1) |
| Last activity | 2026-10-14 |
| Docs | https://ai-sdk.dev/elements |
| Source | https://github.com/vercel/ai-elements |
| Same family | [AI Elements Vue](ai-elements-vue.md) |

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found
- **Agent/contributor docs in repo:** https://github.com/vercel/ai-elements/blob/HEAD/.claude/CLAUDE.md

## Consider an alternative if
- the project does not use (or cannot add) Tailwind CSS.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Hand-written guide, written 2026-11-05 for v1; latest release 1.9.1._

## Install
```bash
npx ai-elements@latest            # or: npx shadcn@latest add https://registry.ai-sdk.dev/all.json
```
Requires a shadcn/ui setup (Tailwind + CSS variables) and the Vercel AI SDK (`npm install ai @ai-sdk/react`).

## What you get
`Conversation`, `Message`, `PromptInput`, `Response` (streaming markdown), `Reasoning`, `Tool`, `Sources`, `CodeBlock`, `Suggestion`, … as owned source in your repo.

## Agent tips
- Pair with `useChat` from `@ai-sdk/react`; components accept the AI SDK's message parts directly.
- Pick this *with* a base system (usually shadcn/ui), not instead of one.

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
| llms.txt on the docs site | 0/15 |
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 0/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 10/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 0/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked. Notes: AI-readiness 30 < 45.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/ai-elements.md_
