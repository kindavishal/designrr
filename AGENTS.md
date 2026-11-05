# Agent instructions

This repository builds the **AI-Ready Design Systems** catalog. There are two ways to work here.

## Using the catalog (choosing a design system or building with one)
Read `site/llms.txt` and follow its "How to use this" section. The skill in `skills/pick-design-system/SKILL.md` describes the same workflow.

## Maintaining the catalog
- Pipeline: `npm run all` (harvest → enrich → score → build). Node ≥ 20, zero dependencies. Needs a GitHub token (`GITHUB_TOKEN`, or `gh auth login`).
- Structural facts go in `curation/seed.json` / `curation/seed-community.json`. Editorial facts (bestFor, families, brand locks, product shapes, install overrides) go in `curation/editorial.json`. Never edit `data/` or `site/` by hand; both are generated.
- New candidates appear in `data/raw/review-queue.json`. Promote real design systems or component libraries to `seed-community.json`. Add the rest to `curation/curation.json` → `exclude` with a `category: detail` reason. Review each repo individually; never reject the queue in bulk.
- Hand-written build guides go in `guides/<slug>.md`, with frontmatter `writtenFor` (major version) and `written` (date), and the sections Install, Setup, Theme it to a brand, Agent tips. Use `{{version}}` instead of hard-coded versions. Only use commands you have verified against the official docs, ideally the system's own llms.txt or shipped skills.
- Run `npm run validate` before committing.
- The human-facing pages use Web Awesome (see `scripts/templates.mjs`). Follow its design skill: theme classes on `<html>`, `<wa-page>` for page frames, layout utilities and `--wa-*` tokens only (no hex, no px), and never self-close custom elements.
- Change thresholds only in `POLICY` (`scripts/score.mjs`), and update `METHODOLOGY.md` to match.
