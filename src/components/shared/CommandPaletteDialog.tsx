import { useCallback } from "react";
import { useTheme } from "next-themes";
import { useNavigate } from "react-router";
import {
  FolderKanban,
  LayoutDashboard,
  Mail,
  Moon,
  Settings as SettingsIcon,
  Sun,
  User,
  Wrench,
} from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { projects } from "@/data/projects/main";

type CommandPaletteDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const CommandPaletteDialog = ({ open, onOpenChange }: CommandPaletteDialogProps) => {
  const navigate = useNavigate();
  const { setTheme } = useTheme();

  const go = useCallback(
    (to: string) => {
      onOpenChange(false);
      navigate(to);
    },
    [navigate, onOpenChange],
  );

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search workspace, projects, actions..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigate">
          <CommandItem onSelect={() => go("/")}>
            <LayoutDashboard className="h-4 w-4" /> Dashboard
          </CommandItem>
          <CommandItem onSelect={() => go("/projects")}>
            <FolderKanban className="h-4 w-4" /> Projects
          </CommandItem>
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
              <span className="ml-auto text-xs text-muted-foreground capitalize">
                {p.status === "production-iterating"
                  ? p.status.replace("-", " - ")
                  : p.status.replace("-", " ")}
              </span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Theme">
          <CommandItem
            onSelect={() => {
              setTheme("light");
              onOpenChange(false);
            }}
          >
            <Sun className="h-4 w-4" /> Switch to light
          </CommandItem>
          <CommandItem
            onSelect={() => {
              setTheme("dark");
              onOpenChange(false);
            }}
          >
            <Moon className="h-4 w-4" /> Switch to dark
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="External">
          <CommandItem
            onSelect={() => {
              window.open("https://github.com/socode-dev/", "_blank");
              onOpenChange(false);
            }}
          >
            <Github className="h-4 w-4" /> Open GitHub
          </CommandItem>
          <CommandItem
            onSelect={() => {
              window.open("https://linkedin.com/in/samuel-frontend-engineer", "_blank");
              onOpenChange(false);
            }}
          >
            <Linkedin className="h-4 w-4" /> Open LinkedIn
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default CommandPaletteDialog;
