---
writtenFor: "1"
written: 2026-11-05
verifiedAgainst: https://ai-sdk.dev/elements/llms.txt
---
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
