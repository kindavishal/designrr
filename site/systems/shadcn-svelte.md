# shadcn-svelte

> shadcn/ui's own-the-source model for SvelteKit apps on Tailwind.

| | |
|---|---|
| Tier | **recommended** |
| AI-readiness | **60/100** |
| Maintainer | Community |
| Platforms | web |
| Frameworks | svelte |
| Styling | tailwind |
| Install | CLI copies component source into your repo (requires: tailwind, bundler) |
| Good for | saas, startup-mvp, dashboard |
| Dark mode / RTL | yes / yes |
| Package size (unpacked) | 918 KB |
| License | MIT |
| GitHub stars | 9.2k |
| npm weekly downloads | 0 (`shadcn-svelte` 1.8.0) |
| Last activity | 2026-11-03 |
| Docs | https://www.shadcn-svelte.com |
| Source | https://github.com/huntabyte/shadcn-svelte |
| Same family | [shadcn/ui](shadcn-ui.md), [shadcn-vue](shadcn-vue.md), [Zard UI (shadcn for Angular)](zardui.md), [shadcn_ui (Flutter)](shadcn-flutter-ui.md), [Spartan (shadcn for Angular)](spartan.md), [React Native Reusables](rn-reusables.md) |

## AI resources (use these first)
- **llms.txt:** https://www.shadcn-svelte.com/llms.txt
- MCP server: none found
- **Theming tokens:** CSS variables theming, same model as shadcn/ui
- **Agent/contributor docs in repo:** https://github.com/huntabyte/shadcn-svelte/blob/HEAD/skills/shadcn-svelte/SKILL.md

## Consider an alternative if
- the project does not use (or cannot add) Tailwind CSS.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.

_Hand-written guide, written 2026-11-05 for v1; latest release 1.8.0._

## Install
```bash
npx shadcn-svelte@latest init
npx shadcn-svelte@latest add button card dialog
```

## How it works
Same model as shadcn/ui: source copied into `$lib/components/ui`, built on Bits UI + Tailwind, themed with CSS variables in `app.css`.

## Agent tips
- `https://www.shadcn-svelte.com/llms.txt`. Use Svelte 5 runes syntax — older examples use Svelte 4.

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
| Machine-readable design tokens in the repo | 15/15 |
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 10/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 10/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 5/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 0/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/shadcn-svelte.md_
