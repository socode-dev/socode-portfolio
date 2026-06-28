import type { Article } from "@/types/article";

// Eagerly load every markdown file in src/content/articles.
// To add a new article: drop a new `.md` file in that folder — no other code changes needed.
const modules = import.meta.glob("../content/articles/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(raw: string): { data: Record<string, string | string[]>; body: string } {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const data: Record<string, string | string[]> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value: string | string[] = line.slice(idx + 1).trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^['"]|['"]$/g, ""))
        .filter(Boolean);
    } else {
      value = value.replace(/^['"]|['"]$/g, "");
    }
    data[key] = value;
  }
  return { data, body: match[2] };
}

function estimateReadingTime(body: string): string {
  const words = body.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

export const articles: Article[] = Object.entries(modules)
  .map(([path, raw]) => {
    const slug = path.split("/").pop()!.replace(/\.md$/, "");
    const { data, body } = parseFrontmatter(raw);
    return {
      slug,
      title: (data.title as string) || slug,
      summary: (data.summary as string) || "",
      date: (data.date as string) || "",
      readingTime: (data.readingTime as string) || estimateReadingTime(body),
      tags: Array.isArray(data.tags) ? data.tags : [],
      content: body,
    } satisfies Article;
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
