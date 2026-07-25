import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Compass } from "lucide-react";

const NotFound = () =>  {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <div className="max-w-md space-y-4 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-xl border border-border bg-card shadow-soft">
          <Compass className="h-6 w-6 text-primary" />
        </div>
        <div className="space-y-2">
          <div className="font-mono text-xs text-muted-foreground">404 · route not found</div>
          <h1 className="text-2xl font-semibold tracking-tight">This page isn't part of the workspace.</h1>
          <p className="text-sm text-muted-foreground">
            The URL might be old or mistyped. Use the command palette or head back to the dashboard.
          </p>
        </div>
        <div className="flex justify-center gap-2 pt-2">
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" /> Back to dashboard
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/projects">Browse projects</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;