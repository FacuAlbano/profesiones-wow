import { cn } from "~/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export type GuideSection = { id: string; label: string };

interface GuideIndexProps {
  sections: GuideSection[];
  className?: string;
}

/**
 * Índice de una guía: enlaces de ancla para navegación rápida.
 * Usar en páginas de profesión con id en cada sección (ej. id="nivelado").
 */
export function GuideIndex({ sections, className }: GuideIndexProps) {
  if (sections.length === 0) return null;

  return (
    <Card className={cn(className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          En esta guía
        </CardTitle>
      </CardHeader>
      <Separator className="mb-2" />
      <CardContent className="pt-0">
        <nav aria-label="Índice de la guía">
          <ul className="space-y-1">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="flex min-h-[44px] items-center rounded-md px-2 py-1.5 text-sm text-card-foreground transition-colors link-faction"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </CardContent>
    </Card>
  );
}
