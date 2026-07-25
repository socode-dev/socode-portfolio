import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { Link } from "react-router";
import RESUME from "@/assets/my-resume.pdf";

const STACK = ["React", "TypeScript", "Tailwind CSS", "Firebase", "Vercel Serverless Functions", "AI"];

const Hero = () => {

    return(
        <motion.section
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
      >
        <div className="pointer-events-none absolute inset-0 z-0 grid-bg-sm opacity-50 grid-fade" />
        <div className="pointer-events-none absolute inset-0 z-0 mesh-bg opacity-80" />
        <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <Badge variant="secondary" className="gap-1.5">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Open to frontend engineering opportunites
            </Badge>

            <h1 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Samuel {`>`} Frontend Engineer building{" "}
              <span className="bg-clip-text text-transparent gradient-primary">
                thoughtful React products
              </span>{" "}
              with practical AI integration.
            </h1>
            
            <p className="text-sm text-muted-foreground sm:text-base">
              I believe software should be predictable first, intelligent second. Build systems you can trust, then use AI to make them easier to understand. I'm currently evolving{" "}
              <Link to="/projects/smartbudget" className="font-medium text-foreground hover:text-primary">
                SmartBudget
              </Link>
              , a deterministic financial intelligence platform built on that principle.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <Button asChild size="sm">
                <Link to="/projects">
                  See projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline">
                <a href={RESUME} target="_blank" rel="noreferrer">
                  <FileText className="h-4 w-4" /> View Resume
                </a>
              </Button>
              <Button asChild size="sm" variant="ghost">
                <Link to="/contact">
                  <Mail className="h-4 w-4" /> Contact
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              {STACK.map((s) => (
                <Badge key={s} variant="outline" className="h-5 px-1.5 text-[10px] font-mono">
                  {s}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    )
}

export default Hero;