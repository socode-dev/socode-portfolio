type SEOProps = {
  title?: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const SITE_NAME = "SOCODE";
const DEFAULT_TITLE = "SOCODE - Samuel | Frontend Engineer";
const DEFAULT_IMAGE = "/og-image.jpg";
const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://socode.vercel.app").replace(/\/$/, "");
const TWITTER_CREATOR = "@socodedev";

function toAbsoluteUrl(value: string) {
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
}

function formatTitle(title?: string) {
  if (!title) {
    return DEFAULT_TITLE;
  }

  return title.includes("SOCODE") || title.includes("Samuel")
    ? title
    : `${title} | Samuel - Frontend Engineer`;
}

export function SEO({
  title,
  description,
  keywords = [],
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  noIndex = false,
  jsonLd,
}: SEOProps) {
  const pageTitle = formatTitle(title);
  const canonicalUrl = toAbsoluteUrl(path);
  const imageUrl = toAbsoluteUrl(image);
  const robots = noIndex ? "noindex, nofollow" : "index, follow";

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywords.length ? <meta name="keywords" content={keywords.join(", ")} /> : null}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content={TWITTER_CREATOR} />

      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
    </>
  );
}
