---
writtenFor: "6"
written: 2026-11-05
verifiedAgainst: https://frontend.design-system.service.gov.uk/import-css/
---
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
