import { Outlet, Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  FolderKanban,
  User,
  Wrench,
  Mail,
  Settings as SettingsIcon,
  Command as CommandIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { useCommandPalette } from "@/components/shared/CommandPalette";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const nav = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Projects", url: "/projects", icon: FolderKanban },
  { title: "About", url: "/about", icon: User },
  { title: "Skills", url: "/skills", icon: Wrench },
  { title: "Contact", url: "/contact", icon: Mail },
];

function Brand() {

  return (
    <Link to="/" className="flex items-center gap-2.5 py-0.5">
      <div className="grid h-8 w-8 place-items-center rounded-lg gradient-primary shadow-soft px-2">
        <span className="font-mono text-[11px] font-bold tracking-tight text-white">{"</>"}</span>
      </div>

        <span className="font-mono text-sm font-semibold tracking-tight">SOCODE</span>
    </Link>
  );
}

function AppSidebar() {
  const location = useLocation();
  const isActive = (url: string) =>
    url === "/" ? location.pathname === "/" : location.pathname.startsWith(url);

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border">
        <Brand />
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {nav.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)} tooltip={item.title}>
                    <Link to={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/settings")} tooltip="Settings">
                  <Link to="/settings">
                    <SettingsIcon className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-1.5 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:gap-0 group-data-[collapsible=icon]:px-0">
          <img
            src={profilePhoto}
            alt="Samuel"
            loading="lazy"
            className="profile-photo h-7 min-w-7 rounded-full border border-sidebar-border object-fill"
          />
          
          <div className="flex min-w-0 flex-col leading-tight group-data-[collapsible=icon]:hidden">
            <span className="truncate text-xs font-medium">Samuel</span>
            <span className="truncate text-[10px] text-muted-foreground">Frontend Engineer</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

function Topbar() {
  const { open } = useCommandPalette();

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-2 border-b border-border glass px-3 sm:px-4">
      <SidebarTrigger className="-ml-1" />
      
      <div className="hidden items-center gap-1.5 text-xs text-muted-foreground md:flex">
        <span>Workspace</span>
        <span className="opacity-50">/</span>
        <span className="text-foreground">Samuel</span>
      </div>
      
      <div className="ml-auto flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => open()}
          className="hidden h-8 gap-2 px-2.5 text-xs text-muted-foreground sm:flex"
        >
          <CommandIcon className="h-3.5 w-3.5" />
          <span>Search workspace…</span>
          <kbd className="ml-2 rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-mono">
            ⌘K
          </kbd>
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => open()}
          className="h-8 w-8 sm:hidden"
          aria-label="Open command palette"
        >
          <CommandIcon className="h-4 w-4" />
        </Button>
        
        <ThemeToggle />
        
        <Button asChild size="sm" className="h-8">
          <Link to="/contact">Hire me</Link>
        </Button>
      </div>
    </header>
  );
}

export function AppShell() {
  return (
    <SidebarProvider>
      <div className="flex min-h-svh w-full bg-background">
        <AppSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar />
          
          <main className="relative flex-1">
            <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-60 mask-[linear-gradient(to_bottom,black,transparent_85%)]" />
            
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-105 mesh-bg opacity-70" />
            <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
