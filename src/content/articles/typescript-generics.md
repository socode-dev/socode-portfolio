---
title: TypeScript Generics That Earn Their Keep
summary: Generics aren't there to look clever. They're there to encode relationships the compiler should check for you. A few patterns I reach for weekly.
date: 2026-04-18
tags: [typescript, patterns]
---

# TypeScript Generics That Earn Their Keep

A good generic captures a **relationship** between inputs and outputs. If you can replace the generic with `any` and nothing breaks, the generic isn't doing work.

## Pattern 1 — the typed fetcher

```ts
async function getJSON<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json() as Promise<T>;
}

const user = await getJSON<{ id: string; name: string }>("/api/me");
```

The generic links the call site to the return type — no `as` at the consumer.

## Pattern 2 — keyof for safe property access

```ts
function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

const names = pluck([{ id: 1, name: "Ada" }], "name"); // string[]
```

Try passing `"missing"` — the compiler stops you before runtime does.

## Pattern 3 — discriminated unions + generics

```ts
type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

function ok<T>(value: T): Result<T> { return { ok: true, value }; }
function err<E>(error: E): Result<never, E> { return { ok: false, error }; }
```

This pattern replaces most of the `try/catch` noise in business logic.

## When to stop

If your generic has more than two type parameters, or you need `infer` to read it, take a step back. There's almost always a simpler shape.
