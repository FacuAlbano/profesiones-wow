import { Link } from "react-router";
import type { Route } from "./+types/guia._index";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { EXPANSIONS } from "~/lib/constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Índice de guías | Profesiones WoW - eldonqu" },
    { name: "description", content: "Todas las guías de profesiones de World of Warcraft en español." },
  ];
}

/** Enlaces a guías del mirror (ruta relativa al mirror). Misma estructura que wow-professions. */
const GUIA_SECTIONS = [
  {
    title: "Por expansión",
    description: "Guías por expansión y profesión (nivelado, especializaciones).",
    links: EXPANSIONS.map((e) => ({ label: e.name, to: `/expansion/${e.slug}` })),
  },
  {
    title: "Guías generales",
    description: "Resúmenes y guías transversales.",
    links: [
      { label: "Resumen profesiones BfA", to: "/guia/guides/battle-for-azeroth-professions-overview/index.html" },
      { label: "Fabricar legendarias Shadowlands", to: "/guia/guides/crafting-shadowlands-legendary/index.html" },
      { label: "Desbloquear Void Focus", to: "/guia/guides/void-focus-how-to-unlock/index.html" },
    ],
  },
  {
    title: "Farming y recolección",
    description: "Guías de farmeo de materiales.",
    links: [
      { label: "Hierbas", to: "/guia/farming/herbs/index.html" },
      { label: "Cómo obtener Expulsom", to: "/guia/farming/how-to-get-expulsom/index.html" },
      { label: "Sightless Eye", to: "/guia/farming/sightless-eye-farming/index.html" },
    ],
  },
  {
    title: "Classic / WotLK / Cataclysm",
    description: "Nivelado y tablas por expansión clásica.",
    links: [
      { label: "Cataclysm — nivelado y tablas", to: "/guia/cataclysm/alchemy-leveling-guide-cataclysm-classic/index.html" },
      { label: "WotLK — nivelado y especializaciones", to: "/guia/wotlk/alchemy-leveling-guide-wotlk-classic/index.html" },
      { label: "Tablas desencantar WotLK", to: "/guia/wotlk/disenchanting-tables-wotlk-classic/index.html" },
      { label: "Tablas prospectar WotLK", to: "/guia/wotlk/prospecting-table-wotlk-classic/index.html" },
    ],
  },
];

export default function GuiaIndexPage() {
  return (
    <div className="min-h-0 flex-1 overflow-y-auto px-3 py-6 sm:px-6 sm:py-8" data-main-scroll>
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 flex flex-wrap items-center gap-2 sm:mb-6">
          <Button variant="link" size="sm" asChild>
            <Link to="/" className="text-muted-foreground link-faction">
              ← Inicio
            </Link>
          </Button>
        </div>
        <h1 className="title-faction text-2xl font-semibold leading-tight xs:text-3xl sm:text-4xl">
          Índice de guías
        </h1>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Misma estructura que wow-professions: todas las guías en español (tras ejecutar copy + translate).
        </p>
        <Separator className="separator-faction my-6 sm:my-8" />

        <div className="space-y-10">
          {GUIA_SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="title-underline-faction font-heading mb-2 text-lg font-semibold text-foreground sm:text-xl">
                {section.title}
              </h2>
              <p className="mb-4 text-sm text-muted-foreground">{section.description}</p>
              <ul className="grid gap-2 xs:grid-cols-2 sm:grid-cols-3">
                {section.links.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="block link-faction min-h-[44px]">
                      <Card className="card-faction h-full transition-all duration-200">
                        <CardContent className="flex items-center p-3 text-card-foreground sm:p-4">
                          <span className="text-sm font-medium">{item.label}</span>
                        </CardContent>
                      </Card>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
