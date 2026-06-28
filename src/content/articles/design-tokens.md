---
title: Design Tokens, the Boring-on-Purpose Way
summary: Tokens aren't a design system. They're the contract between design and code. Keep them flat, semantic, and theme-aware — and the rest takes care of itself.
date: 2026-03-09
tags: [design-systems, css, tailwind]
---

# Design Tokens, the Boring-on-Purpose Way

A design token is just a named value. The hard part isn't the format — it's deciding **what to name**.

## Two layers, never one

Split tokens into:

- **Primitives** — `--blue-500`, `--gray-900`. Raw values, never used in components.
- **Semantic** — `--color-primary`, `--color-background`. The ones components consume.

```css
:root {
  /* primitives */
  --blue-500: oklch(0.62 0.18 265);
  --gray-50:  oklch(0.98 0 0);
  --gray-900: oklch(0.18 0 0);

  /* semantic — what components reference */
  --color-primary: var(--blue-500);
  --color-background: var(--gray-50);
  --color-foreground: var(--gray-900);
}

.dark {
  --color-background: var(--gray-900);
  --color-foreground: var(--gray-50);
}
```

This is what makes dark mode a 4-line diff instead of a refactor.

## Components only see the semantic layer

```tsx
// ✅ Themeable
<button className="bg-primary text-primary-foreground">Save</button>

// ❌ Locks you to one theme
<button className="bg-blue-500 text-white">Save</button>
```

## A token isn't a value — it's a promise

The promise is: *"this name means the same thing everywhere, forever."* Break that promise and the whole system rots.

Keep the list short. Add tokens reluctantly. Boring tokens are the goal.
