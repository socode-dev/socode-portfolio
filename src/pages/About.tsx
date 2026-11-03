import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";
import { SEO } from "@/components/shared/SEO";

const TITLE = "About";

const DESCRIPTION = "Meet Samuel, a frontend engineer specializing in React and TypeScript, building intuitive, reliable web applications.";

const KEYWORDS = ["about Samuel", "frontend engineer bio", "typescript frontend engineer"];

const About = () => {

  return (
    <div className="space-y-8">

      <SEO title={TITLE} description={DESCRIPTION} keywords={KEYWORDS} path="/about" />

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
            <Stat label="Interests" value="Product Engineering · Applied AI" />
          </div>
        </CardContent>
      </Card>

      <section className="space-y-3 rounded-xl border border-border bg-card p-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          A little more
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            My journey into frontend engineering started in early 2024. With a background in History and International Studies, I took a self-directed path into software development, learning by building real applications and solving problems along the way.
          </p>
          <p>
            That journey shaped how I think. I build from the user's perspective first, not just from what the technology can do. Features earn their place by being useful, not by being impressive.
          </p>
          <p>
            I've built production applications involving complex interfaces, state management, API integrations, and automated testing. I've also rebuilt features, reconsidered architectural decisions, and learned firsthand why maintainability matters beyond simply getting something to work.
          </p>
          <p>
            Right now I'm continuing to develop{" "}
            <span className="font-medium text-foreground">Vydra</span>
            , a personal financial management platform, while exploring how frontend engineering and AI can work together to create better product experiences.
          </p>
          <p>
            I learn best by shipping. I pick a real problem, build a working solution, learn from the outcome, and improve from there. That's how I intend to keep building.
          </p>
        </div>
      </section>
    </div>
  );
}

const Stat = ({ label, value }: { label: string; value: string }) => {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 text-base font-medium">{value}</div>
    </div>
  );
}

export default About;
