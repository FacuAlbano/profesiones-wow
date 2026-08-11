import { Link, useLocation } from "react-router";
import { cn } from "~/lib/utils";
import { FactionSelector } from "~/components/faction-selector";
import { AllianceLogo } from "./alliance-logo";
import { HordeLogo } from "./horde-logo";
import { Sidebar } from "./sidebar";
import { BackToTop } from "~/components/back-to-top";
import { useFaction } from "~/lib/faction-context";
import { Button } from "~/components/ui/button";

interface AppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const NAV_ITEMS = [
  { path: "/expansion/midnight", label: "Midnight" },
  { path: "/expansion/the-war-within", label: "The War Within" },
  { path: "/expansion/classic", label: "Classic" },
  { path: "/expansion/the-burning-crusade", label: "TBC" },
  { path: "/expansion/mists-of-pandaria", label: "MoP" },
  { path: "/guia", label: "Guías" },
  { path: "/", label: "Inicio" },
];

export function AppLayout({ children, className }: AppLayoutProps) {
  const { faction } = useFaction();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div
      className={cn(
        "flex h-screen flex-col overflow-hidden bg-background text-foreground transition-colors duration-500",
        className
      )}
    >
      <header className="z-50 shrink-0 border-b border-border bg-header text-header-foreground shadow-sm transition-colors duration-500 pt-[env(safe-area-inset-top)]">
        <div className="mx-auto flex h-14 min-h-[3.5rem] max-w-full items-center justify-between gap-2 px-3 py-2 sm:gap-4 sm:px-6 sm:py-0">
          <Link
            to="/"
            className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center gap-2 rounded-lg transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-h-0 sm:min-w-0 sm:justify-start"
          >
            <div className="relative flex items-center justify-center shrink-0">
              {faction === "horde" ? (
                <HordeLogo className="size-8 drop-shadow-[0_0_2px_rgba(0,0,0,0.8)] sm:size-9" />
              ) : (
                <AllianceLogo className="size-8 drop-shadow-[0_0_1px_rgba(0,0,0,0.6)] sm:size-9" />
              )}
            </div>
            <div className="hidden text-left sm:block">
              <span className="font-semibold tracking-tight">
                Profesiones WoW
              </span>
              <span className="ml-1.5 block text-xs opacity-85">
                eldonqu
              </span>
            </div>
          </Link>

          <nav className="flex min-w-0 flex-1 items-center justify-end gap-0.5 overflow-x-auto overflow-y-hidden py-1 scrollbar-none sm:flex-initial sm:overflow-visible [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                asChild
                className={cn(
                  "min-h-[44px] shrink-0 px-2.5 text-header-foreground hover:bg-white/5 hover:text-[var(--header-fg-hover)] sm:min-h-0 sm:px-3",
                  isActive(item.path) && "bg-white/10"
                )}
              >
                <Link to={item.path}>{item.label}</Link>
              </Button>
            ))}
          </nav>

          <div className="flex shrink-0 items-center">
            <FactionSelector />
          </div>
        </div>
      </header>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden md:flex-row">
        <Sidebar />
        <main className="flex min-h-0 min-w-0 flex-1 overflow-hidden">
          {children}
        </main>
      </div>

      <footer className="shrink-0 border-t border-border bg-muted/50 px-3 py-4 text-center text-sm text-muted-foreground transition-colors duration-500 sm:px-6 sm:py-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
        <p>
          Inspirado en la comunidad y fuentes públicas ·{" "}
          <Link to="/fuentes" className="text-primary underline decoration-primary/50 underline-offset-2 hover:decoration-primary link-faction">
            Acerca de / Fuentes
          </Link>
          {" "}· eldonqu
        </p>
      </footer>

      <BackToTop />
    </div>
  );
}
