import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, User } from "lucide-react";
import { Link } from "react-router";

const AboutSnapshot = () => {

    return (
        <Card>
          <CardContent className="space-y-3 p-4 sm:p-5">
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <User className="h-3.5 w-3.5" /> About snapshot
            </div>
            <p className="text-sm leading-relaxed text-foreground/90">
              Frontend engineer focused on React, TypeScript and product thinking. I build interfaces
              that feel like tools, and I'm particularly interested in the boundary between
              deterministic systems and AI.
            </p>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Currently evolving SmartBudget.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Comfortable owning frontend architecture end-to-end, from UI systems to how AI gets contrained inside a product.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                Learning in public, building, shipping, iterating.
              </li>
            </ul>
            <Button asChild size="sm" variant="ghost" className="h-7 px-2">
              <Link to="/about">
                More about me <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
    )
}

export default AboutSnapshot;