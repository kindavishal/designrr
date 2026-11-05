## Install
```bash
npm i -D @spartan-ng/cli
ng g @spartan-ng/cli:init
ng g @spartan-ng/cli:ui button       # adds helm (styled) + brain (headless) parts
```

## How it works
shadcn model for Angular: `brain` = accessible headless primitives (npm), `helm` = Tailwind-styled source copied into your repo.

## Agent tips
- MCP server: `@spartan-ng/mcp`. Theme with the same CSS variables model as shadcn/ui.
