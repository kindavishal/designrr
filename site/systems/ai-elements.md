# AI Elements

> Chat, agent and AI-assistant interfaces (messages, prompt input, reasoning, tool calls) on shadcn/ui + AI SDK.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **45/100** |
| Maintainer | Vercel (org-backed) |
| Platforms | web |
| Frameworks | react |
| Styling | tailwind |
| Install | CLI copies component source into your repo (requires: tailwind, bundler) |
| Good for | ai-app, chat, saas; shapes: chat-ai |
| Dark mode / RTL | yes / not detected |
| Package size (unpacked) | 9 KB |
| License | NOASSERTION |
| Last activity | 2026-10-14 |
| Docs | https://ai-sdk.dev/elements |
| Source | https://github.com/vercel/ai-elements |
| Same family | [AI Elements Vue](ai-elements-vue.md) |

## Public usage & feedback
Numbers as reported by each source on 2026-11-09; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 2.5k | GitHub API (vercel/ai-elements) |
| GitHub forks | 293 | GitHub API |
| Contributors (incl. anonymous) | 62 | GitHub API |
| Issues closed / open | 164 / 50 (77% closed) | GitHub API |
| npm weekly downloads | 133.4k | npm (`ai-elements` 1.9.1) |

## AI resources (use these first)
- **llms.txt:** https://ai-sdk.dev/llms.txt
- MCP server: none found
- **Copy-the-source CLI:** documented at https://ai-sdk.dev/elements/llms.txt
- **Agent/contributor docs in repo:** https://github.com/vercel/ai-elements/blob/HEAD/.claude/CLAUDE.md

## Consider an alternative if
- the project does not use (or cannot add) Tailwind CSS.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Hand-written guide for v1, checked against https://ai-sdk.dev/elements/llms.txt on 2026-11-05; latest release 1.9.1._

## Install
Prerequisites: React 19, Tailwind CSS 4, shadcn/ui (set up automatically if missing) and the AI SDK (`npm i ai @ai-sdk/react zod`).
```bash
npx ai-elements@latest                      # pick components interactively
npx ai-elements@latest add message
# or via the shadcn CLI: npx shadcn@latest add @ai-elements/message
```

## What you get
Composable chat and agent UI as source in your repo: `Message` / `MessageContent` / `MessageResponse` (streaming Markdown), prompt input, reasoning, tool calls, sources, code blocks and more, aware of AI SDK streaming states.

## Agent tips
- Pair with `useChat` from `@ai-sdk/react`; components take AI SDK message types (`UIMessage`).
- Choose it alongside a base system (usually shadcn/ui), not instead of one.
- Unstyled components usually mean the shadcn/ui Tailwind 4 setup (globals.css) is missing.

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
| llms-full.txt (whole docs as one markdown file) | 0/5 |
| Machine-readable design tokens in the repo | 0/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 10/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 0/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked.

_Data refreshed 2026-11-09. Agent-readable source: https://designrr.vercel.app/systems/ai-elements.md_
