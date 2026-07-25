import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

const Header = ({filtered}: {filtered: Project[]}) => {

    return (
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Projects</div>

                <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">Selected work</h1>
                
                <p className="mt-1 max-w-2xl text-sm text-muted-foreground">Every project below is something I built or am actively building. No fillers.</p>
            </div>
            
            <div className="flex items-center gap-2">
                <Badge variant="outline" className="h-7 px-2 text-xs">
                    {filtered.length} {filtered.length === 1 ? "project" : "projects"}
                </Badge>
            </div>
        </header>
    )
}

export default Header;