import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

interface Props {
    query: string;
    setQuery: Dispatch<SetStateAction<string>>;
    setPage: Dispatch<SetStateAction<number>>;
}

const SearchBar = ({query, setQuery, setPage}: Props) => {

    return (
        <div className="rounded-xl border border-border bg-card p-3 shadow-soft">
            <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                
                <Input
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setPage(1);
                    }}
                    placeholder="Search by title, technology or description…"
                    className="h-9 pl-9"
                  />
            </div>
        </div>
    )
}

export default SearchBar;