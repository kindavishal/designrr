---
writtenFor: "1"
written: 2026-11-05
---
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
