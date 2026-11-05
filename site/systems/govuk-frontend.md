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
| Last activity | 2026-11-02 |
| Docs | https://design-system.service.gov.uk |
| Source | https://github.com/alphagov/govuk-frontend |

## Public usage & feedback
Numbers as reported by each source on 2026-11-05; nothing is estimated.

| Signal | Value | Source |
|---|---|---|
| GitHub stars | 1.5k | GitHub API (alphagov/govuk-frontend) |
| GitHub forks | 380 | GitHub API |
| Contributors (incl. anonymous) | 109 | GitHub API |
| Issues closed / open | 1.8k / 434 (80% closed) | GitHub API |
| npm weekly downloads | 247.9k | npm (`govuk-frontend` 6.6.0) |

## AI resources (use these first)
- llms.txt: not published
- MCP server: none found

## Consider an alternative if
- you are building a commercial or non-government product. Government systems are designed (and sometimes licensed) for public services.
- you need a no-build page (plain HTML from a CDN). This needs a bundler.
- you rely on agent tooling. This system has few machine-readable resources.

_Hand-written guide for v6, checked against https://frontend.design-system.service.gov.uk/import-css/ on 2026-11-05; latest release 6.6.0._

## Install
```bash
npm install govuk-frontend
```
For quick prototypes, the GOV.UK Prototype Kit is the supported route: `npx govuk-prototype-kit create my-prototype`.

## Setup
CSS, either precompiled or from Sass (needs Dart Sass 1.79+):
```scss
@use "node_modules/govuk-frontend/dist/govuk" as *;
```
or `<link rel="stylesheet" href="/assets/govuk-frontend.min.css">` after copying it from `node_modules/govuk-frontend/dist/govuk/`.

JavaScript, before `</body>`:
```html
<script type="module" src="/assets/govuk-frontend.min.js"></script>
<script type="module">
  import { initAll } from '/assets/govuk-frontend.min.js'
  initAll()
</script>
```
Markup: use the Nunjucks macros (`{{ govukButton({ text: "Continue" }) }}`) or copy the HTML from each component page.

## Agent tips
- v6 uses the GOV.UK brand colours and the new type scale; `govuk-body-xs` and `govuk-!-font-size-14` are gone.
- Follow the **patterns** (question pages, check answers, confirmation): they encode tested UX for transactional services.
- GOV.UK services can't change the brand. For a non-GOV.UK product use your own country's government system, or USWDS, which is more themeable.

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
