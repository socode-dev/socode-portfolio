import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const statusStyles: Record<string, string> = {
  "in-progress":
    "bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30",
  shipped:
    "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30",
  archived: "bg-muted text-muted-foreground border border-border",
  concept: "bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/30",
};

const ProjectThumbnail = ({project}: {project: Project}) => {
    
    return (
        <Link
            to={`/projects/${project.slug}`}
            className="relative block h-40 w-full border-b border-border"
            style={{ backgroundImage: project.thumbnail }}
        >
            {project.image ? (
                <img src={project.image} alt={`${project.title} thumbnail`} className="h-10/12 w-2/3 mx-auto absolute top-[50%] translate-y-[-50%] inset-0 bg-linear-to-t from-black/30 to-transparent brightness-80 rounded-lg" />
            ) : (
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
            )}

            <div className="absolute left-3 top-3">
                <span
                    className={cn("backdrop-blur-md shadow-md rounded-full px-2 py-0.5 text-[10px] font-medium capitalize", statusStyles[project.status])}
                >
                    {project.status === "production-iterating" ? project.status.replace("-", " • ") : project.status.replace("-", " ")}
                </span>
            </div>
        </Link>
    )
}

const ProjectDetail = ({project}: {project: Project}) => {

    return (
        <div className="flex flex-1 flex-col space-y-3 p-4">
            <Link to={`/projects/${project.slug}`} className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-semibold tracking-tight group-hover:text-primary">{project.title}</h3>
                    
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
                </div>
                                    
                <p className="line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
            </Link>
                            
            <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 4).map((t) => (
                    <Badge key={t} variant="outline" className="h-5 px-1.5 font-mono text-[10px]">{t}</Badge>
                ))}

                {project.technologies.length > 4 &&
                    <Badge variant="outline" className="h-5 px-1.5 font-mono text-[10px]">+{project.technologies.length - 4}</Badge>
                }
            </div>
                            
            <div className="w-full flex justify-between items-center gap-4 border-t border-border pt-3">
                <div className="flex flex-wrap gap-1.5">
                    {project.github &&
                        <Button asChild size="sm" variant="outline" className="h-7 px-2 text-xs">
                            <a href={project.github} target="_blank" rel="noreferrer">
                                <FaGithub className="h-3.5 w-3.5" /> GitHub
                            </a>
                        </Button>
                    }

                    {project.liveDemo &&
                        <Button asChild size="sm" variant="outline" className="h-7 px-2 text-xs">
                            <a href={project.liveDemo} target="_blank" rel="noreferrer">
                                <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                            </a>
                        </Button>
                    }
                                            
                    {project.documentation &&
                        <Button asChild size="sm" variant="outline" className="h-7 px-2 text-xs">
                            <a href={project.documentation} target="_blank" rel="noreferrer">
                                <FileText className="h-3.5 w-3.5" /> Docs 
                            </a>
                        </Button>
                    }
                </div>
                
                <Link
                    to={`/projects/${project.slug}`}
                    className="font-medium w-fit text-xs text-primary hover:underline"
                >View details →</Link>
            </div>
            
        </div>
    )
}

const ProjectCard = ({paged}: {paged: Project[]}) => {

    if(paged.length === 0) {
        return (
            <Card>
                <CardContent className="p-10 text-center text-sm text-muted-foreground">No projects match your search.</CardContent>
            </Card>
        )
    }

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {paged.map((p, i) => {

                return (
                    <motion.div
                        key={p.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.04 }}
                    >
                        <Card className="relative group flex h-full flex-col overflow-hidden border-border shadow-soft transition hover:-translate-y-0.5 hover:border-primary/40">
                        
                            <ProjectThumbnail project={p} />

                            <ProjectDetail project={p} />
                        </Card>
                    </motion.div>
                );
            })}
        </div>
    )
}

export default ProjectCard;