import { Link, useLoaderData } from "react-router";
import type { Route } from "./+types/expansion.$slug.profesion.$profSlug";
import { EXPANSION_SLUGS, EXPANSION_NAMES, type ExpansionSlug, type ProfessionSlug } from "~/lib/constants";
import { PROFESSIONS } from "~/lib/constants";
import { GuideIndex } from "~/components/guide-index";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/tabs";
import { AlchemyTBCGuide, ALCHEMY_TBC_INDEX } from "~/components/guides/alchemy-tbc-guide";
import { HerbalismTBCGuide, HERBALISM_TBC_INDEX } from "~/components/guides/herbalism-tbc-guide";
import { ShadowlandsTailoringGuide, SHADOWLANDS_TAILORING_INDEX } from "~/components/guides/shadowlands-tailoring-guide";
import { MirrorGuideContent } from "~/components/mirror-guide-content";
import { guideMirrorUrl, hasNativeGuide } from "~/lib/guide-mirror-paths";

export function meta({ params }: Route.MetaArgs) {
  const expansionName = EXPANSION_NAMES[params.slug as keyof typeof EXPANSION_NAMES] ?? params.slug;
  const profession = PROFESSIONS.find((p) => p.slug === params.profSlug);
  const title = profession
    ? `${profession.name} - ${expansionName} | eldonqu`
    : "Profesión | eldonqu";
  return [
    { title },
    {
      name: "description",
      content: `Guía de ${profession?.name ?? params.profSlug} para ${expansionName}.`,
    },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  if (
    !EXPANSION_SLUGS.includes(params.slug as (typeof EXPANSION_SLUGS)[number])
  ) {
    throw new Response("Expansión no encontrada", { status: 404 });
  }
  const profession = PROFESSIONS.find((p) => p.slug === params.profSlug);
  return {
    slug: params.slug,
    profSlug: params.profSlug,
    expansionName: EXPANSION_NAMES[params.slug as keyof typeof EXPANSION_NAMES] ?? params.slug,
    professionName: profession?.name ?? params.profSlug,
  };
}

const DEFAULT_INDEX = [
  { id: "nivelado", label: "Nivelado" },
  { id: "especializaciones", label: "Especializaciones" },
  { id: "recetas", label: "Recetas clave" },
];

export default function ProfessionPage() {
  const { slug, profSlug, expansionName, professionName } =
    useLoaderData<typeof loader>();

  const isNative = hasNativeGuide(slug as ExpansionSlug, profSlug as ProfessionSlug);
  const mirrorUrl = guideMirrorUrl(slug as ExpansionSlug, profSlug as ProfessionSlug);
  const isTBCAlchemy = slug === "the-burning-crusade" && profSlug === "alchemy";
  const isTBCHerbalism = slug === "the-burning-crusade" && profSlug === "herbalism";
  const isSLTailoring = slug === "shadowlands" && profSlug === "tailoring";
  const indexSections = isTBCAlchemy
    ? ALCHEMY_TBC_INDEX
    : isTBCHerbalism
      ? HERBALISM_TBC_INDEX
      : isSLTailoring
        ? SHADOWLANDS_TAILORING_INDEX
        : DEFAULT_INDEX;

  return (
    <div className="flex min-h-0 w-full flex-1">
      {/* Contenido scrolleable */}
      <div
        className="min-h-0 min-w-0 flex-1 overflow-y-auto overflow-x-hidden px-3 py-6 sm:px-6 sm:py-8"
        data-main-scroll
      >
        <div className="mx-auto w-full max-w-5xl">
          <div className="mb-4 flex flex-wrap items-center gap-2 sm:mb-6 sm:gap-4">
            <Button variant="link" size="sm" asChild className="min-h-[44px] shrink-0 sm:min-h-0">
              <Link to="/" className="text-muted-foreground link-faction">
                ← Inicio
              </Link>
            </Button>
            <Button variant="link" size="sm" asChild className="min-h-[44px] shrink-0 sm:min-h-0">
              <Link
                to={`/expansion/${slug}`}
                className="text-muted-foreground link-faction"
              >
                ← {expansionName}
              </Link>
            </Button>
          </div>
          <h1 className="title-faction text-2xl font-semibold leading-tight xs:text-3xl sm:text-4xl md:text-5xl">
            {professionName}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            {isTBCAlchemy
              ? "Guía de nivelado 1-375 para TBC Classic. Lista de compras, instructores y pasos por rangos."
              : isTBCHerbalism
                ? "Guía de nivelado 1-375 para TBC Classic. Instructores y rutas por rangos de herboristería."
                : isSLTailoring
                  ? "Resumen de Sastrería en Shadowlands: instructor, materiales, bases legendarias, armaduras y bolsas en español."
                  : mirrorUrl
                    ? "Guía integrada con los estilos de la app. Contenido original en inglés; las guías en español se irán añadiendo progresivamente."
                    : "Guía de nivelado y especializaciones. (Contenido en construcción.)"}
          </p>
          <Separator className="separator-faction my-4 sm:my-6" />

          <div className="mt-6 sm:mt-8">
            {isTBCAlchemy ? (
              <AlchemyTBCGuide />
            ) : isTBCHerbalism ? (
              <HerbalismTBCGuide />
            ) : isSLTailoring ? (
              <ShadowlandsTailoringGuide />
            ) : mirrorUrl ? (
              <MirrorGuideContent mirrorUrl={mirrorUrl} />
            ) : (
              <Tabs defaultValue="nivelado" className="w-full">
                <TabsList variant="default" className="mb-4 flex w-full min-w-0 overflow-x-auto overflow-y-hidden py-1 scrollbar-none [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden sm:w-auto sm:overflow-visible">
                  <TabsTrigger value="nivelado" className="shrink-0 px-2 text-xs sm:px-3 sm:text-sm">Nivelado</TabsTrigger>
                  <TabsTrigger value="especializaciones" className="shrink-0 px-2 text-xs sm:px-3 sm:text-sm">Especializaciones</TabsTrigger>
                  <TabsTrigger value="recetas" className="shrink-0 px-2 text-xs sm:px-3 sm:text-sm">Recetas clave</TabsTrigger>
                </TabsList>
                <TabsContent value="nivelado" id="nivelado" className="scroll-mt-20 sm:scroll-mt-24">
                  <h2 className="title-underline-faction font-heading text-xl font-semibold text-foreground sm:text-2xl md:text-3xl">
                    Nivelado
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Sección en construcción.
                  </p>
                  <div className="state-recommended mt-4 flex flex-wrap items-center gap-2 rounded-md px-3 py-2 text-sm">
                    <Badge variant="secondary" className="shrink-0">
                      Recomendado
                    </Badge>
                    <span>
                      Cuando tengas recetas, aquí irán materiales recomendados con este estilo.
                    </span>
                  </div>
                </TabsContent>
                <TabsContent value="especializaciones" id="especializaciones" className="scroll-mt-20 sm:scroll-mt-24">
                  <h2 className="title-underline-faction font-heading text-xl font-semibold text-foreground sm:text-2xl md:text-3xl">
                    Especializaciones
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Sección en construcción.
                  </p>
                </TabsContent>
                <TabsContent value="recetas" id="recetas" className="scroll-mt-20 sm:scroll-mt-24">
                  <h2 className="title-underline-faction font-heading text-xl font-semibold text-foreground sm:text-2xl md:text-3xl">
                    Recetas clave
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Sección en construcción.
                  </p>
                </TabsContent>
              </Tabs>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar derecha: índice "En esta guía" (igual que sidebar izquierda) */}
      <aside
        className="z-30 hidden w-56 shrink-0 flex-col self-stretch border-l border-border bg-card shadow-sm transition-colors duration-500 lg:flex"
        aria-label="En esta guía"
      >
        <nav className="sidebar-nav flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden p-4">
          <GuideIndex sections={indexSections} variant="sidebar" className="w-full" />
        </nav>
      </aside>
    </div>
  );
}
