import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useNavigate } from "react-router";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  LayoutDashboard,
  FolderKanban,
  BookOpen,
  User,
  Wrench,
  Mail,
  Settings as SettingsIcon,
  Moon,
  Sun,
} from "lucide-react";
import {FaGithub as Github, FaLinkedin as Linkedin} from "react-icons/fa"
import { useTheme } from "next-themes";
import { projects } from "@/data/projects/main";
import { articles } from "@/data/articles";

interface PaletteCtx {
  open: () => void;
  close: () => void;
}

const Ctx = createContext<PaletteCtx | null>(null);

export function useCommandPalette() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCommandPalette must be used inside CommandPaletteProvider");
  return ctx;
}

export function CommandPaletteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { setTheme } = useTheme();

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const go = useCallback(
    (to: string) => {
      setIsOpen(false);
      navigate(to);
    },
    [navigate],
  );

  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <Ctx.Provider value={value}>
      {children}
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Search workspace, projects, actions…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigate">
            <CommandItem onSelect={() => go("/")}>
              <LayoutDashboard className="h-4 w-4" /> Dashboard
            </CommandItem>
            <CommandItem onSelect={() => go("/projects")}>
              <FolderKanban className="h-4 w-4" /> Projects
            </CommandItem>
            {/* <CommandItem onSelect={() => go("/articles")}>
              <BookOpen className="h-4 w-4" /> Articles
            </CommandItem> */}
            <CommandItem onSelect={() => go("/about")}>
              <User className="h-4 w-4" /> About
            </CommandItem>
            <CommandItem onSelect={() => go("/skills")}>
              <Wrench className="h-4 w-4" /> Skills
            </CommandItem>
            <CommandItem onSelect={() => go("/contact")}>
              <Mail className="h-4 w-4" /> Contact
            </CommandItem>
            <CommandItem onSelect={() => go("/settings")}>
              <SettingsIcon className="h-4 w-4" /> Settings
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Projects">
            {projects.map((p) => (
              <CommandItem key={p.id} onSelect={() => go(`/projects/${p.slug}`)}>
                <FolderKanban className="h-4 w-4" />
                <span>{p.title}</span>
                <span className="ml-auto text-xs text-muted-foreground capitalize">{p.status === "production-iterating" ? p.status.replace("-", " • ") : p.status.replace("-", " ")}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          {/* <CommandGroup heading="Articles">
            {articles.map((a) => (
              <CommandItem key={a.slug} onSelect={() => go(`/articles/${a.slug}`)}>
                <BookOpen className="h-4 w-4" />
                <span>{a.title}</span>
                <span className="ml-auto text-xs text-muted-foreground">{a.readingTime}</span>
              </CommandItem>
            ))}
          </CommandGroup> */}
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => { setTheme("light"); setIsOpen(false); }}>
              <Sun className="h-4 w-4" /> Switch to light
            </CommandItem>
            <CommandItem onSelect={() => { setTheme("dark"); setIsOpen(false); }}>
              <Moon className="h-4 w-4" /> Switch to dark
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="External">
            <CommandItem onSelect={() => { window.open("https://github.com/socode-dev/", "_blank"); setIsOpen(false); }}>
              <Github className="h-4 w-4" /> Open GitHub
            </CommandItem>
            <CommandItem onSelect={() => { window.open("https://linkedin.com/in/samuel-frontend-engineer", "_blank"); setIsOpen(false); }}>
              <Linkedin className="h-4 w-4" /> Open LinkedIn
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </Ctx.Provider>
  );
}