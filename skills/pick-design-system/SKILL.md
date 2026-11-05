---
name: pick-design-system
description: Choose the best design systems for a product idea from the AI-Ready Design Systems catalog, then build the product with the chosen one. Use when the user asks which design system / UI library / component library to use, wants the "top 3 design systems" for an app idea, or asks to build UI "with a good design system".
---

# Pick a design system, then build with it

The catalog is published at **https://kindavishal.github.io/ai-ready-design-systems/** (entry point `llms.txt`, data `catalog.json`). If you are inside the catalog repository, read `site/llms.txt` and `site/catalog.json` locally instead.

## 1. Understand the product
From the user's idea (and the current codebase, if there is one) work out:
- platform(s): web, iOS, Android, cross-platform, desktop
- stack: the existing framework from `package.json`, `pubspec.yaml`, `*.xcodeproj`, `build.gradle`, `*.csproj`; if there is no project yet, you may recommend a stack
- build setup: is there a bundler, or must it run as plain HTML from a CDN? Is Tailwind in use?
- product shape: app-dashboard, saas-app, marketing-site, content-site, forms-flows, mobile-app, chat-ai, ecommerce
- product type and audience: dashboard, consumer, e-commerce, AI chat, government, internal tool, marketing…
- brand: use as-is, light theming, or fully custom
- constraints: accessibility level, density, license, Tailwind yes/no

Ask at most 3 short questions, and only if the answer would change the recommendation.

## 2. Choose
1. Fetch `catalog.json` and filter by platform and framework (`vanilla` = no framework).
2. Match the build setup: no bundler → `install.noBuild: true`; no Tailwind → drop `install.requires` containing `tailwind`.
3. Drop `brandLocked` systems (unless the user is that brand), `government` ones (unless public sector) and `*-ecosystem` ones (unless building in that ecosystem).
4. Rank by fit (`productShapes`, `tags`, `bestFor`, styling), then `tier`, `aiReadiness`, `popularity`. Keep one system per `family`.
5. Fetch the `page` of the top 4–5 and check "Consider an alternative if". If `buildGuide.outdated` is true, plan to confirm setup in the system's own llms.txt or MCP server.
4. Reply with the **top 3**: why each fits, its main trade-off, its AI-readiness score and its page link. Name your pick. Mention combinations where they apply (for example chat UI from AI Elements or assistant-ui on top of shadcn/ui).

## 3. Build (after the user picks, or right away if asked)
1. Follow the system page's **Install** and **Setup** for the detected framework.
2. If an MCP server is listed, add it to the session. Install any agent skills shipped in the package (`install.shippedSkills`), and read the system's `llms.txt`. Trust these over memory.
3. Apply the brand once through the theme/tokens API.
4. Work through the page's **Build checklist**: app shell, screens from existing components, all states, accessibility, dark mode, responsive.
5. Run the app and verify every screen.
