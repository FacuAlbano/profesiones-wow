import { Link, useLocation } from "react-router";
import { cn } from "~/lib/utils";
import { EXPANSIONS } from "~/lib/constants";
import { PROFESSIONS } from "~/lib/constants";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

const navLinkClass = (active: boolean) =>
  cn(
    "w-full justify-start rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 link-faction",
    active
      ? "border-l-2 border-primary bg-primary/15 pl-2.5 text-primary"
      : "text-card-foreground hover:-translate-y-0.5 hover:bg-muted"
  );

export function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  const isHome = pathname === "/";
  const expansionMatch = pathname.match(/^\/expansion\/([^/]+)/);
  const expansionSlug = expansionMatch?.[1] ?? null;
  const isOnExpansion = expansionSlug && EXPANSIONS.some((e) => e.slug === expansionSlug);

  return (
    <aside
      className="sticky top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-56 shrink-0 flex-col border-r border-border bg-card shadow-sm transition-colors duration-500 md:flex"
      aria-label="Navegación"
    >
      <nav className="flex flex-col gap-1 overflow-y-auto p-3">
        <Button variant="ghost" size="sm" className={navLinkClass(isHome)} asChild>
          <Link to="/">Inicio</Link>
        </Button>

        <Separator className="my-2" />
        <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Expansiones
        </p>
        <ul className="mt-1 space-y-0.5">
          {EXPANSIONS.map((exp) => {
            const href = `/expansion/${exp.slug}`;
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={exp.slug}>
                <Button variant="ghost" size="sm" className={navLinkClass(active)} asChild>
                  <Link to={href} className="truncate">
                    {exp.name}
                  </Link>
                </Button>
              </li>
            );
          })}
        </ul>

        {isOnExpansion && expansionSlug && (
          <>
            <Separator className="my-2" />
            <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Profesiones
            </p>
            <ul className="mt-1 space-y-0.5">
              {PROFESSIONS.map((prof) => {
                const href = `/expansion/${expansionSlug}/profesion/${prof.slug}`;
                const active = pathname === href;
                return (
                  <li key={prof.slug}>
                    <Button variant="ghost" size="sm" className={navLinkClass(active)} asChild>
                      <Link to={href}>{prof.name}</Link>
                    </Button>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </nav>
    </aside>
  );
}
