---
title: Choosing a State Management Strategy in 2026
summary: A practical decision framework for picking between local state, context, Zustand, Redux Toolkit and server state — without overengineering.
date: 2026-06-12
tags: [react, architecture, state]
---

# Choosing a State Management Strategy in 2026

Most React apps don't need Redux. Most React apps also don't need *no* state library. The trick is matching the tool to the shape of the state.

## The four kinds of state

There are really only four:

1. **Local UI state** — a toggle, an input, a hover.
2. **Shared UI state** — a theme, a sidebar, a modal stack.
3. **Server state** — anything that lives in a database.
4. **URL state** — filters, pagination, the current route.

```ts
type StateKind = "local" | "shared" | "server" | "url";

function pickTool(kind: StateKind) {
  switch (kind) {
    case "local":  return "useState";
    case "shared": return "Context or Zustand";
    case "server": return "TanStack Query";
    case "url":    return "the router";
  }
}
```

## Why this matters

Putting server state into Redux is the #1 cause of bloated React codebases I see in code reviews. You end up reimplementing caching, deduping and revalidation — badly.

> Rule of thumb: if a piece of state can become stale, it belongs in a server state library.

## When Zustand wins

Zustand is the right tool when:

- The state is **shared across distant components**
- You want **selectors** to avoid re-renders
- You don't want a provider tree

```ts
import { create } from "zustand";

interface UIStore {
  sidebarOpen: boolean;
  toggle: () => void;
}

export const useUI = create<UIStore>((set) => ({
  sidebarOpen: true,
  toggle: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
}));
```

## Closing thought

Reach for the smallest tool that fits. You can always grow.
