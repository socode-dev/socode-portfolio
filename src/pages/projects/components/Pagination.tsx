import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

interface Props {
    totalPages: number;
    safePage: number;
    setPage: Dispatch<SetStateAction<number>>
}

const Pagination = ({totalPages, safePage, setPage}: Props) => {
    if(totalPages <= 1) return null;

    return (
        <nav className="flex items-center justify-between rounded-lg border border-border bg-card p-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={safePage === 1}
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </Button>
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <Button
                key={n}
                size="sm"
                variant={n === safePage ? "default" : "ghost"}
                className="h-8 w-8 p-0 text-xs"
                onClick={() => setPage(n)}
              >
                {n}
              </Button>
            ))}
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={safePage === totalPages}
          >
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        </nav>
    )
}

export default Pagination;