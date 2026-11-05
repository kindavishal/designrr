---
writtenFor: "0.15"
written: 2026-11-05
verifiedAgainst: https://www.assistant-ui.com/docs/installation.md
---
## Install
```bash
npx assistant-ui@latest create     # new app (templates: see the CLI reference)
npx assistant-ui@latest init       # add to an existing project
```
Add your model provider's API key to `.env` and run `npm run dev`. Components can also come from the shadcn CLI through the `@assistant-ui` registry in `components.json`.

## What you get
Composable primitives (Thread, Composer, Message, ActionBar) with runtimes for the AI SDK, LangGraph and custom backends; streaming, attachments and tool-call UIs.

## Agent tips
- Hosted MCP server (docs and examples, nothing to install): `https://www.assistant-ui.com/mcp` (streamable HTTP).
- Agent skills: `npx skills add assistant-ui/skills`. LLM docs: `https://www.assistant-ui.com/llms.txt`.
- Styling follows shadcn/ui, so use it with a shadcn base for the rest of the app.
