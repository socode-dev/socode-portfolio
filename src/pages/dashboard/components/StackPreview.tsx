import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Layers } from "lucide-react";
import { Link } from "react-router";
import { stack } from "@/data/stack";

const StackPreview = () => {

    const techStack = stack.filter((current) => 
        current.title === "Frontend" ||
        current.title === "State & UI" ||
        current.title === "Backend / BaaS" ||
        current.title === "Tools & Testing"
    )
    .map(s => ({title: s.title, skills: s.skills.slice(0, 4)}));

    return (
        <Card 
        className="col-span-full"
        >
        <CardContent className="space-y-4 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Layers className="h-3.5 w-3.5" /> Tech stack
            </div>
            <Button asChild size="sm" variant="ghost" className="h-7">
              <Link to="/skills">
                Full breakdown <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {techStack.map((s) => (
              <div
                key={s.title}
                className="rounded-lg border border-border bg-surface-2 p-3"
              >
                <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  {s.title}
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {s.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="h-5 px-1.5 font-mono text-[10px]">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
}

export default StackPreview;