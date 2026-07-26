import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProjectBySlug } from "@/data/projects/main";
import NotFound from "@/pages/NotFound";
import { SEO } from "@/components/shared/SEO";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h2>
      <div className="space-y-2 text-sm leading-relaxed text-foreground/90">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((f) => (
        <li key={f} className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          {f}
        </li>
      ))}
    </ul>
  );
}

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <NotFound />;

  const isFinished = project.status === "shipped";

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-8"
    >
      <SEO
        title={`${project.title} Case Study`}
        description={project.description}
        keywords={[project.title, ...project.technologies]}
        path={`/projects/${project.slug}`}
        image={project.image}
      />

      <div>
        <Button asChild variant="ghost" size="sm" className="-ml-2 h-8 text-muted-foreground">
          <Link to="/projects">
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>
        </Button>
      </div>

      <header className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
        <div className="pointer-events-none absolute inset-0 z-0 grid-bg-sm opacity-40 grid-fade" />

          <div className="relative h-56 w-full" style={{ backgroundImage: project.thumbnail }}>
            <img src={project.image} alt={`${project.title} thumbnail`} loading="lazy" className="h-10/12 w-2/3 max-w-90 mx-auto absolute top-[50%] translate-y-[-50%] inset-0 bg-linear-to-t from-black/30 to-transparent brightness-80 rounded-lg" />
          </div>

        <div className="space-y-4 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="capitalize">
              {project.status.replace("-", " ")}
            </Badge>
          </div>

          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.title}
          </h1>

          <p className="max-w-3xl text-balance text-base text-muted-foreground sm:text-lg">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((t) => (
              <Badge key={t} variant="outline" className="font-mono text-[11px]">
                {t}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            {project.github ? (
              <Button asChild size="sm" variant={isFinished ? "default" : "outline"}>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </Button>
            ) : null}
            {project.liveDemo ? (
              <Button asChild size="sm" variant="outline">
                <a href={project.liveDemo} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              </Button>
            ) : null}
            {project.documentation ? (
              <Button asChild size="sm" variant="outline">
                <a href={project.documentation} target="_blank" rel="noreferrer">
                  <FileText className="h-4 w-4" /> Documentation
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <Section title="Summary">
            <p>{project.summary}</p>
          </Section>
          {!!project.highlights &&
            <Section title="Highlights">
              <BulletList items={project.highlights} />
            </Section>
          }
          {!!project.challenges &&
            <Section title="Challenges">
              <BulletList items={project.challenges} />
            </Section>
          }
          {!!project.lessonsLearned &&
            <Section title="Lessons learned">
              <BulletList items={project.lessonsLearned} />
            </Section>
          }
        </div>

        <aside className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Project meta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status</span>
                <span className="capitalize">{project.status === "production-iterating" ? project.status.replace("-", " • ") : project.status.replace("-", " ")}</span>
              </div>
              <Separator />
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">Slug</span>
                <span className="truncate font-mono text-xs">{project.slug}</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Tech stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <Badge key={t} variant="outline" className="font-mono text-[11px]">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </motion.article>
  );
}

export default ProjectDetail;
