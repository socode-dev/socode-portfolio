import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const TITLE = "About";

const DESCRIPTION = "About Samuel - a self-taught frontend engineer focused on React, TypeScript, and AI-powered products.";

const KEYWORDS = ["about Samuel", "frontend engineer bio", "self-taught developer"];

const About = () => {

  return (
    <div className="space-y-8">

      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta name="keywords" content={KEYWORDS.join(", ")} />

      <header className="space-y-3">
        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          About
        </div>
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Frontend Engineer who enjoys building real products.
        </h1>
        <p className="max-w-3xl text-balance text-base text-muted-foreground sm:text-lg">
          I'm Samuel - a frontend engineer focused on React, TypeScript and building things that actually feel good to use.
        </p>
      </header>

      <Card>
        <CardContent className="flex flex-col items-start gap-6 p-6 sm:flex-row sm:items-center">
          <img
            src={profilePhoto}
            alt="Samuel"
            width={128}
            height={128}
            loading="lazy"
            className="profile-photo h-28 w-28 shrink-0 rounded-full border border-border object-center shadow-soft"
          />
          <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3">
            <Stat label="Role" value="Frontend Engineer" />
            <Stat label="Primary stack" value="React · TypeScript" />
            <Stat label="Currently exploring" value="AI-powered software" />
          </div>
        </CardContent>
      </Card>

      <section className="space-y-3 rounded-xl border border-border bg-card p-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          A little more
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            I'm self-taught. I started coding in early 2024, no CS degree, no bootcamp. My background is in History and International Studies, which is not the path most people expect for a frontend engineer.
          </p>
          <p>
            That non-traditional route shaped how I think. I build from the user's perspective first, not from what the technology can do. Features earn their place by being useful, not by being impressive.
          </p>
          <p>
            I care about architecture because I've felt the cost of bad decisions. I've rebuilt things. I've thrown away code. That's where opinions come from, not from blog posts, but from cleaning up after my own mistakes.
          </p>
          <p>
            Right now I'm evolving{" "}
            <span className="font-medium text-foreground">SmartBudget</span> and while also exploring the intersection of frontend engineering and AI-powered products, not just adding AI features for the sake of it, but thinking about where AI should and shouldn't own decisions in a product.
          </p>
          <p>
            I learn best by shipping. I pick a real problem, ship a small version, and improve from there. That's still how I plan to keep building.
          </p>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 text-base font-medium">{value}</div>
    </div>
  );
}

export default About;