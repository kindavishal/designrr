# GOV.UK Design System

> Public services and form-heavy transactional flows where accessibility and plain language matter most.

| | |
|---|---|
| Tier | **solid** |
| AI-readiness | **10/100** |
| Maintainer | UK Government (GDS) (org-backed) |
| Platforms | web |
| Frameworks | any, nunjucks |
| Styling | css |
| Install | npm package with a bundler (Vite, Next.js, …) (requires: bundler) |
| Good for | government, public-service, accessibility-critical, forms; shapes: forms-flows, content-site |
| Dark mode / RTL | not detected / not detected |
| Package size (unpacked) | 5.9k KB |
| License | MIT |
| GitHub stars | 1.5k |
| npm weekly downloads | 272.6k (`govuk-frontend` 6.6.0) |
| Last activity | 2026-11-02 |
| Docs | https://design-system.service.gov.uk |
| Source | https://github.com/alphagov/govuk-frontend |

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found

## Consider an alternative if
- you are building a commercial or non-government product. Government systems are designed (and sometimes licensed) for public services.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.
- you rely on agent tooling. This system has few machine-readable resources.
- you copy the build guide verbatim. It was written for v5; the latest release is 6.6.0, so confirm commands in the official llms.txt or MCP server.

_Hand-written guide, written 2026-11-05 for v5; latest release 6.6.0._

## Install
```bash
npm install govuk-frontend
```
Use the Nunjucks macros (`{{ govukButton({ text: "Continue" }) }}`) or copy the HTML from each component page. Prototype Kit for rapid prototyping: `npx govuk-prototype-kit create`.

## Agent tips
- Follow the **patterns** (question pages, check answers, confirmation) — they encode tested UX for transactional services.
- Brand customisation is intentionally not supported for GOV.UK services; for non-GOV.UK products use the government system of your own country, or USWDS (more themeable).

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
| Typed component API (TypeScript / Swift / Kotlin / Dart / C#) | 0/10 |
| Registry / CLI install of component source (e.g. shadcn registry) | 0/10 |
| Agent docs: skills shipped in the package, or AGENTS.md / CLAUDE.md / cursor rules in the repo | 0/5 |
| Storybook / live, inspectable examples | 0/5 |
| Figma Code Connect (design ↔ code mapping) | 0/5 |
| Accessibility guidance shipped with the source | 5/5 |
| Dedicated documentation site | 5/5 |

Quality gate: activity **active**; traction via stars, npm, orgBacked. Notes: AI-readiness 10 < 45.

_Data refreshed 2026-11-05. Agent-readable source: https://kindavishal.github.io/ai-ready-design-systems/systems/govuk-frontend.md_
