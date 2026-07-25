import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects/main";
import { stack } from "@/data/stack";
import { FolderKanban, Layers, Rocket, Sparkles } from "lucide-react";

const QuickStat = () => {
  const tech = stack.map(s => {
    if(s.title !== "Currently Learning") {
      return s.skills.join(", ")
    }
  }).filter(Boolean).flatMap(s => s?.split(",").map(s => s.trim()))

  const shipped = projects.filter((p) => p.status === "shipped" || p.status === "production-iterating").length;
  
  const inProgress = projects.filter((p) => p.status === "in-progress").length;

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {[
        { label: "Projects", value: projects.length, icon: FolderKanban },
        { label: "Shipped", value: shipped, icon: Rocket },
        { label: "In progress", value: inProgress, icon: Sparkles },
        { label: "Technologies", value: tech.length, icon: Layers },
      ].map((s) => (
          <Card key={s.label}>
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
                <div className="mt-1 text-2xl font-semibold tracking-tight">{s.value}</div>
              </div>
              <s.icon className="h-5 w-5 text-primary/70" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
}

export default QuickStat;