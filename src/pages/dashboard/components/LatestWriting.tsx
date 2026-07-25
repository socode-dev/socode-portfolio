import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { articles } from "@/data/articles";
import { ArrowRight, ArrowUpRight, BookOpen } from "lucide-react";
import { Link } from "react-router";

const LatestWriting = () => {
    const topArticles = articles.slice(0, 3);

    return (
        <Card>
            <CardContent className="space-y-3 p-4 sm:p-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                        <BookOpen className="h-3.5 w-3.5" /> Latest writing
                    </div>
                    
                    <Button asChild size="sm" variant="ghost" className="h-7">
                
                        <Link to="/articles">
                        All <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                    </Button>
                </div>
            
                <ul className="space-y-2">
                    {topArticles.map((a) => (
                        <li key={a.slug}>
                            <Link
                                to={`/articles/${a.slug}`}
                                className="group block rounded-md border border-border bg-surface-2 p-2.5 transition hover:border-primary/40"
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <span className="line-clamp-1 text-sm font-medium group-hover:text-primary">
                                        {a.title}
                                    </span>
                                    
                                    <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground transition group-hover:text-primary" />
                                </div>
                                
                                <p className="mt-0.5 line-clamp-2 text-[11px] text-muted-foreground">
                                {a.summary}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

export default LatestWriting;