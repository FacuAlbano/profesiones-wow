import { Link, useOutletContext } from "react-router";
import type { Route } from "./+types/expansion.$slug._index";
import { EXPANSION_NAMES, PROFESSIONS } from "~/lib/constants";
import { ProfessionIcon } from "~/components/profession-icon";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { TBCContent } from "~/components/expansion-tbc-content";

export function meta({ matches }: Route.MetaArgs) {
  const layoutMatch = matches.find((m) => (m as { id?: string }).id?.includes("expansion.$slug") && !(m as { id?: string }).id?.includes("profesion"));
  const layoutData = layoutMatch?.data as { slug?: string; name?: string } | undefined;
  const slug = layoutData?.slug ?? "";
  const name = layoutData?.name ?? EXPANSION_NAMES[slug as keyof typeof EXPANSION_NAMES] ?? slug;
  const isTBC = slug === "the-burning-crusade";
  const description = isTBC
    ? "Guías de nivelado 1-375, especializaciones y recolección en Terrallende para TBC Classic y Aniversario en español."
    : `Guías de profesiones de ${name} en español.`;
  return [
    { title: `Guías ${name} | Profesiones WoW - eldonqu` },
    { name: "description", content: description },
  ];
}

type ExpansionContext = { slug: string; name: string; logo: string | null };

export default function ExpansionIndexPage() {
  const { slug, name: displayName, logo } = useOutletContext<ExpansionContext>();
  const isTBC = slug === "the-burning-crusade";

  return (
    <div className="min-h-0 min-w-0 flex-1 overflow-y-auto overflow-x-hidden" data-main-scroll>
      <div className="mx-auto w-full max-w-5xl px-3 py-6 sm:px-6 sm:py-8">
      <div className="mb-4 flex flex-wrap items-center gap-2 sm:mb-6 sm:gap-4">
        <Button variant="link" size="sm" asChild className="min-h-[44px] shrink-0 sm:min-h-0">
          <Link to="/" className="text-muted-foreground link-faction">
            ← Inicio
          </Link>
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        {logo && (
          <img src={logo} alt="" className="h-12 w-12 shrink-0 object-contain" />
        )}
        <h1 className="title-faction min-w-0 flex-1 text-2xl font-semibold leading-tight xs:text-3xl sm:text-4xl md:text-5xl">
          {displayName}
        </h1>
      </div>

      {isTBC ? (
        <TBCContent expansionSlug={slug} />
      ) : (
        <>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Guías de nivelado y especializaciones por profesión. (Contenido en
            construcción.)
          </p>
          <Separator className="separator-faction my-4 sm:my-6" />
          <ul className="mt-6 grid grid-cols-1 gap-2 xs:gap-3 sm:grid-cols-2 sm:mt-8 md:grid-cols-3">
            {PROFESSIONS.map((prof) => (
              <li key={prof.slug}>
                <Link
                  to={`/expansion/${slug}/profesion/${prof.slug}`}
                  className="block link-faction min-h-[44px]"
                >
                  <Card className="card-faction h-full transition-all duration-200">
                    <CardContent className="flex items-center gap-3 p-3 xs:p-4 text-card-foreground">
                      <ProfessionIcon slug={prof.slug} className="size-8" />
                      <span className="font-medium text-sm sm:text-base">{prof.name}</span>
                    </CardContent>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
      </div>
    </div>
  );
}
