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
        "Guías de profesiones de World of Warcraft en español. The War Within y más.",
    },
  ];
}

export default function HomePage() {
  return (
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
        <h3 className="title-underline-faction font-heading mb-3 text-base font-medium uppercase tracking-wider text-muted-foreground sm:mb-4 sm:text-xl">
          Expansiones
        </h3>
        <ul className="grid grid-cols-1 gap-2 xs:gap-3 sm:grid-cols-2">
          {EXPANSIONS.map((exp) => (
            <li key={exp.slug}>
              <Link to={`/expansion/${exp.slug}`} className="block link-faction min-h-[44px]">
                <Card className="card-faction h-full transition-all duration-200">
                  <CardContent className="flex flex-nowrap items-center gap-3 p-3 text-card-foreground xs:gap-4 xs:p-4 sm:p-5">
                    <img
                      src={exp.logo}
                      alt=""
                      className="h-12 w-12 shrink-0 object-contain"
                    />
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
  );
}
