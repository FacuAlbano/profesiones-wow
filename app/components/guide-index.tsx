import { cn } from "~/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export type GuideSection = { id: string; label: string };

export interface GuideIndexProps {
  sections: GuideSection[];
  className?: string;
  /** En "sidebar" se integra en la barra lateral (sin Card, mismo estilo que la nav izquierda) */
  variant?: "card" | "sidebar";
}

/**
 * Índice de una guía: enlaces de ancla para navegación rápida.
 * Usar en páginas de profesión con id en cada sección (ej. id="nivelado").
 */
export function GuideIndex({ sections, className, variant = "card" }: GuideIndexProps) {
  if (sections.length === 0) return null;

  const title = (
    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
      En esta guía
    </p>
  );
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (variant !== "sidebar") return;
    const scrollEl = document.querySelector("[data-main-scroll]");
    const target = document.getElementById(id);
    if (scrollEl && target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navContent = (
    <nav aria-label="Índice de la guía">
      <ul className="space-y-1">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => handleAnchorClick(e, id)}
              className="flex min-h-[44px] items-center rounded-md px-2 py-1.5 text-sm text-card-foreground transition-colors link-faction"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

  if (variant === "sidebar") {
    return (
      <div className={cn("flex flex-col gap-2", className)}>
        {title}
        <Separator className="my-0" />
        <div className="pt-0">{navContent}</div>
      </div>
    );
  }

  return (
    <Card className={cn(className)}>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <Separator className="mb-2" />
      <CardContent className="pt-0">
        {navContent}
      </CardContent>
    </Card>
  );
}
