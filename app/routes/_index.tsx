import { Link } from "react-router";
import type { Route } from "./+types/_index";
import {
  Card,
  CardContent,
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { EXPANSIONS } from "~/lib/constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Profesiones WoW - Guías en español | eldonqu" },
    {
      name: "description",
      content:
        "Guías de profesiones de World of Warcraft en español. La Guerra Interior y más.",
    },
  ];
}

export default function HomePage() {
  return (
    <div className="min-h-0 min-w-0 flex-1 overflow-y-auto overflow-x-hidden" data-main-scroll>
      <div className="mx-auto w-full max-w-5xl px-3 py-6 sm:px-6 sm:py-10">
      <section className="py-8 text-center sm:py-12 md:py-16">
        <h2 className="title-hero font-heading text-2xl font-semibold leading-tight xs:text-3xl sm:text-4xl md:text-5xl">
          Página de profesiones de eldonqu
        </h2>
        <p className="mx-auto mt-3 max-w-xl px-1 text-sm text-muted-foreground sm:mt-4 sm:text-base">
          Guías de profesiones de World of Warcraft en español. Elige una
          expansión para ver nivelado y especializaciones.
        </p>
      </section>

      <Separator className="separator-faction my-6 sm:my-8" />

      <section className="mt-6 sm:mt-10">
        <Link to="/guia" className="link-faction mb-4 inline-block">
          <Card className="card-faction w-fit border-primary/30 transition-all duration-200 hover:border-primary/60">
            <CardContent className="flex items-center gap-3 p-4 text-card-foreground">
              <span className="font-semibold">📚 Índice de guías</span>
              <span className="text-sm text-muted-foreground">— Todas las guías del mirror en español</span>
            </CardContent>
          </Card>
        </Link>
        <h3 className="title-underline-faction font-heading mb-3 text-base font-medium uppercase tracking-wider text-muted-foreground sm:mb-4 sm:text-xl">
          Expansiones
        </h3>
        <ul className="grid grid-cols-1 gap-2 xs:gap-3 sm:grid-cols-2">
          {EXPANSIONS.map((exp) => (
            <li key={exp.slug}>
              <Link to={`/expansion/${exp.slug}`} className="block link-faction min-h-[44px]">
                <Card className="card-faction h-full transition-all duration-200">
                  <CardContent className="flex flex-nowrap items-center gap-3 p-3 text-card-foreground xs:gap-4 xs:p-4 sm:p-5">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt=""
                        className="h-12 w-12 shrink-0 object-contain"
                      />
                    )}
                    <span className="min-w-0 truncate font-semibold text-sm xs:text-base">
                      {exp.name}
                    </span>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      ({exp.short})
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      </div>
    </div>
  );
}
