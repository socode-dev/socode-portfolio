import { useMemo, useState } from "react";
import { projects } from "@/data/projects/main";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProjectCard from "./components/ProjectCard";
import Pagination from "./components/Pagination";

const PER_PAGE = 6;

const TITLE ="Projects";

const DESCRIPTION = "Selected work by Samuel - SmartBudget, SkillSync, GTStore, XtremeFit and other React, TypeScript and AI-powered projects.";

const KEYWORDS = ["Samuel projects", "React projects", "case studies", "frontend portfolio"];

const Projects = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    
    if (!q) return projects;
    
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q)),
    );
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const paged = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  return (
    <div className="space-y-6">
      
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta name="keywords" content={KEYWORDS.join(", ")} />

      <Header filtered={filtered}/>

      <SearchBar query={query} setPage={setPage} setQuery={setQuery} />

      <ProjectCard paged={paged} />

      <Pagination totalPages={totalPages} safePage={safePage} setPage={setPage} />
    </div>
  );
}

export default Projects;