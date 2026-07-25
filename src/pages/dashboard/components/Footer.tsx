import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {

    return (
        <Card>
        <CardContent className="flex flex-col items-start justify-between gap-3 p-4 sm:flex-row sm:items-center sm:p-5">
          <div className="flex items-center gap-2 text-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Want the full picture?</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button asChild size="sm" variant="outline">
              <Link to="/about">About me</Link>
            </Button>
            <Button asChild size="sm" variant="outline">
              <Link to="/skills">Skills</Link>
            </Button>
            <Button asChild size="sm" variant="outline">
              <a href="https://github.com/socode-dev" target="_blank" rel="noreferrer">
                <FaGithub className="h-4 w-4" /> GitHub
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
}

export default Footer;