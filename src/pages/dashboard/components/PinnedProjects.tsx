import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getPinnedProjects } from "@/data/projects/main";
import { ArrowRight, ArrowUpRight, Code2 } from "lucide-react";
import { Link } from "react-router";

const PinnedProjects = () => {
    const pinned = getPinnedProjects();

    return (
        <Card className="lg:col-span-2">
          <CardContent className="space-y-3 p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <Code2 className="h-3.5 w-3.5" /> Pinned projects
              </div>
              <Button asChild size="sm" variant="ghost" className="h-7">
                <Link to="/projects">
                  All <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {pinned.map((p) => (
                <Link
                  key={p.id}
                  to={`/projects/${p.slug}`}
                  className="group rounded-lg border border-border bg-surface-2 p-3 transition hover:border-primary/40 hover:bg-surface-3"
                >
                  <div className="mb-2 h-14 w-full rounded-md border border-borde" style={{ backgroundImage: p.thumbnail }} />
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-sm font-medium">{p.title}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition group-hover:text-primary" />
                  </div>
                  <p className="mt-0.5 line-clamp-2 text-[11px] text-muted-foreground">
                    {p.description}
                  </p>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
    )
} 

export default PinnedProjects;