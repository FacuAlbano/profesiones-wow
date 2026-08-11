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
  const isOnProfessionPage = pathname.includes("/profesion/");

  return (
    <aside
      className="z-30 hidden w-56 shrink-0 flex-col self-stretch border-r border-border bg-card shadow-sm transition-colors duration-500 md:flex"
      aria-label="Navegación"
    >
      <nav className="sidebar-nav flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto overflow-x-hidden p-4">
        <Button variant="ghost" size="sm" className={navLinkClass(isHome)} asChild>
          <Link to="/">Inicio</Link>
        </Button>

        {/* Página de inicio: solo Expansiones */}
        {!isOnExpansion && (
          <>
            <Separator className="my-3" />
            <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Expansiones
            </p>
            <ul className="space-y-1">
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
          </>
        )}

        {/* Dentro de una expansión: solo Profesiones */}
        {isOnExpansion && expansionSlug && (
          <>
            <Separator className="my-3" />
            <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Profesiones
            </p>
            <ul className="space-y-1">
              {PROFESSIONS.map((prof) => {
                const href = `/expansion/${expansionSlug}/profesion/${prof.slug}`;
                const active = pathname === href || pathname.startsWith(`${href}/`);
                return (
                  <li key={prof.slug}>
                    <Button variant="ghost" size="sm" className={navLinkClass(active)} asChild>
                      <Link to={href} className="truncate">
                        {prof.name}
                      </Link>
                    </Button>
                  </li>
                );
              })}
            </ul>
          </>
        )}
        <Separator className="my-3" />
        <Button
          variant="ghost"
          size="sm"
          className={navLinkClass(pathname === "/fuentes")}
          asChild
        >
          <Link to="/fuentes">Acerca de / Fuentes</Link>
        </Button>
      </nav>
    </aside>
  );
}
