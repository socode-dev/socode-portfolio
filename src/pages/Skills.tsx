import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {stack} from "@/data/stack"

const TITLE = "Skills";

const DESCRIPTION ="Samuel's toolkit - React, TypeScript, Tailwind, Firebase, OpenAI API, Vercel, and more.";

const KEYWORDS = ["React skills", "TypeScript", "Tailwind", "Firebase", "OpenAI"];

const Skills = () => {
  return (
    <div className="space-y-8">
      
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta name="keywords" content={KEYWORDS.join(", ")} />

      <header className="space-y-3">
        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Skills
        </div>
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          A focused toolkit, not a buzzword list.
        </h1>
        <p className="max-w-3xl text-base text-muted-foreground">
          These are the tools and topics I actually use and study right now.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {stack.map((s, idx) => {
          const Icon = s.icon;

          return <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.04 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-accent text-accent-foreground">
                    <Icon className="h-4 w-4" />
                  </span>
                  {s.title}
                </div>
                <p className="pt-1 text-sm text-muted-foreground">{s.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {s.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="font-mono text-[11px]">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          })}
      </div>
    </div>
  );
}

export default Skills;