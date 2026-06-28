---
title: A Pragmatic Guide to React Performance
summary: Most React performance work is wasted on the wrong things. Here's the short list that actually moves the needle in production apps.
date: 2026-05-28
tags: [react, performance]
---

# A Pragmatic Guide to React Performance

Before reaching for `memo`, `useMemo` or `useCallback`, **measure**. Most slow React apps are slow for one of three reasons:

1. They re-render large trees on every keystroke
2. They ship too much JavaScript
3. They block the main thread with synchronous work

## Step 1 — find the actual bottleneck

Open the React DevTools profiler and record an interaction. If a render takes < 16ms, leave it alone.

```tsx
import { Profiler } from "react";

<Profiler id="dashboard" onRender={(id, phase, actual) => {
  if (actual > 16) console.warn(`[${id}] ${phase} ${actual.toFixed(1)}ms`);
}}>
  <Dashboard />
</Profiler>
```

## Step 2 — narrow the re-render surface

Co-locate state with the component that owns it. A controlled input at the top of your app will re-render *the whole app* on every keystroke.

```tsx
// ❌ State at the root
function App() {
  const [q, setQ] = useState("");
  return <><SearchBar q={q} setQ={setQ} /><HugeTree /></>;
}

// ✅ State next to the consumer
function SearchBar() {
  const [q, setQ] = useState("");
  return <input value={q} onChange={(e) => setQ(e.target.value)} />;
}
```

## Step 3 — only then, memoize

`memo` is most useful for **list items** with stable props. Don't sprinkle it everywhere — it adds equality checks of its own.

| Tool          | Use when                          |
| ------------- | --------------------------------- |
| `memo`        | Expensive child, stable props     |
| `useMemo`     | Expensive computation, same deps  |
| `useCallback` | Callback passed to a memo'd child |

## Bonus: ship less JavaScript

A 50ms render is irrelevant if your bundle takes 4s to parse on a mid-range Android. Route-split, lazy-load, and audit your dependencies.
