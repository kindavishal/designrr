# Agent instructions

This repository builds the **AI-Ready Design Systems** catalog. There are two ways to work here.

## Using the catalog (choosing a design system or building with one)
Read `site/llms.txt` and follow its "How to use this" section. The skill in `skills/pick-design-system/SKILL.md` describes the same workflow.

## Maintaining the catalog
- Pipeline: `npm run all` (harvest → enrich → score → build). Node ≥ 20, zero dependencies. Needs a GitHub token (`GITHUB_TOKEN`, or `gh auth login`).
- Add or modify systems only in `curation/seed.json` / `curation/seed-community.json`. Never edit `data/` or `site/` by hand; both are generated.
- New candidates appear in `data/raw/review-queue.json`. Promote real design systems or component libraries to `seed-community.json`; add the rest to `curation/curation.json` → `exclude`.
- Hand-written build guides go in `guides/<slug>.md` (sections: Install, Setup, Theme it to a brand, Agent tips). Only use commands you have verified against the official docs.
- Change thresholds only in `POLICY` (`scripts/score.mjs`), and update `METHODOLOGY.md` to match.
