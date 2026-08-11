import { Link } from "react-router";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import { ProfessionIcon } from "~/components/profession-icon";
import { PROFESSIONS } from "~/lib/constants";

interface TBCContentProps {
  expansionSlug: string;
}

/** Profesiones con guía de nivelado 1-375 en TBC (slug → nombre en español) */
const TBC_LEVELING_PROFS = [
  { slug: "alchemy", name: "Alquimia" },
  { slug: "blacksmithing", name: "Herrería" },
  { slug: "enchanting", name: "Encantamiento" },
  { slug: "engineering", name: "Ingeniería" },
  { slug: "jewelcrafting", name: "Joyería" },
  { slug: "leatherworking", name: "Peletería" },
  { slug: "tailoring", name: "Sastrería" },
  { slug: "herbalism", name: "Herboristería" },
  { slug: "mining", name: "Minería" },
  { slug: "skinning", name: "Desuello" },
  { slug: "cooking", name: "Cocina" },
  { slug: "fishing", name: "Pesca" },
] as const;

/** Especializaciones TBC (slug en nuestra lista) */
const TBC_SPEC_SLUGS = ["alchemy", "blacksmithing", "engineering", "leatherworking", "tailoring"] as const;

/** Guías de farming Terrallende: { name, slug } para enlaces a las guías */
const FARMING_HERBS = [
  { name: "Hierba vil", slug: "hierba-vil" },
  { name: "Gloria de ensueño", slug: "gloria-de-ensueño" },
  { name: "Terocono", slug: "terocono" },
  { name: "Velo andrajoso", slug: "velo-andrajoso" },
  { name: "Vid pesadilla", slug: "vid-pesadilla" },
  { name: "Flor del Vacío", slug: "flor-del-vacio" },
];
const FARMING_MOTES = [
  { name: "Mota de fuego", slug: "mota-fuego" },
  { name: "Mota de agua", slug: "mota-agua" },
  { name: "Mota de tierra", slug: "mota-tierra" },
  { name: "Mota de aire", slug: "mota-aire" },
  { name: "Mota de sombra", slug: "mota-sombra" },
  { name: "Mota de vida", slug: "mota-vida" },
  { name: "Mota de maná", slug: "mota-mana" },
];
const FARMING_ORES_CLOTH = [
  { name: "Mineral de hierro vil", slug: "mineral-hierro-vil" },
  { name: "Mineral de adamantita", slug: "mineral-adamantita" },
  { name: "Tela de tejido abisal", slug: "tela-tejido-abisal" },
  { name: "Cuero de nudillo", slug: "cuero-nudillo" },
];

/** Clásico: minerales y cueros */
const CLASSIC_ORES = [
  { name: "Mineral de cobre", slug: "mineral-cobre" },
  { name: "Mineral de estaño", slug: "mineral-estano" },
  { name: "Mineral de hierro", slug: "mineral-hierro" },
  { name: "Mineral de mitril", slug: "mineral-mitril" },
  { name: "Mineral de torio", slug: "mineral-torio" },
];
const CLASSIC_LEATHERS = [
  { name: "Cuero ligero", slug: "cuero-ligero" },
  { name: "Cuero medio", slug: "cuero-medio" },
  { name: "Cuero pesado", slug: "cuero-pesado" },
  { name: "Cuero grueso", slug: "cuero-grueso" },
  { name: "Cuero resistente", slug: "cuero-resistente" },
];

export function TBCContent({ expansionSlug }: TBCContentProps) {
  return (
    <>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
        Guías de nivelado de profesiones para TBC Classic y reinos del Aniversario, del 1 al 375.
        Cada guía te muestra cómo subir usando los materiales más baratos y las mejores rutas.
        También encontrarás guías de recolección de materiales de Terrallende.
      </p>
      <Separator className="separator-faction my-6 sm:my-8" />

      {/* Nivelado 1-375 */}
      <section className="mb-10">
        <h2 className="title-underline-faction font-heading mb-4 text-lg font-semibold text-foreground sm:text-xl">
          Nivelado de profesiones 1-375
        </h2>
        <ul className="grid grid-cols-2 gap-2 xs:grid-cols-3 sm:gap-3 md:grid-cols-4">
          {TBC_LEVELING_PROFS.map(({ slug, name }) => (
            <li key={slug}>
              <Link
                to={`/expansion/${expansionSlug}/profesion/${slug}`}
                className="block link-faction min-h-[44px]"
              >
                <Card className="card-faction h-full transition-all duration-200">
                  <CardContent className="flex items-center gap-2 p-3 text-card-foreground">
                    <ProfessionIcon slug={slug} className="size-6" />
                    <span className="font-medium text-sm">{name}</span>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
          <li>
            <Card className="card-faction h-full cursor-pointer border-dashed">
              <CardContent className="flex items-center gap-2 p-3 text-card-foreground">
                <ProfessionIcon slug="fishing-cooking" className="size-6" />
                <span className="font-medium text-sm">Pesca + Cocina</span>
              </CardContent>
            </Card>
          </li>
          <li>
            <Card className="card-faction h-full cursor-pointer border-dashed">
              <CardContent className="flex items-center gap-2 p-3 text-card-foreground">
                <ProfessionIcon slug="first-aid" className="size-6" />
                <span className="font-medium text-sm">Primeros auxilios</span>
              </CardContent>
            </Card>
          </li>
          <li>
            <Card className="card-faction h-full cursor-pointer border-dashed">
              <CardContent className="flex items-center gap-2 p-3 text-card-foreground">
                <ProfessionIcon slug="lockpicking" className="size-6" />
                <span className="font-medium text-sm">Ganzúa</span>
              </CardContent>
            </Card>
          </li>
        </ul>
      </section>

      {/* Especializaciones */}
      <section className="mb-10">
        <h2 className="title-underline-faction font-heading mb-3 text-lg font-semibold text-foreground sm:text-xl">
          Especializaciones
        </h2>
        <div className="flex flex-wrap gap-2">
          {TBC_SPEC_SLUGS.map((slug) => (
            <Link
              key={slug}
              to={`/expansion/${expansionSlug}/profesion/${slug}`}
              className="link-faction"
            >
              <Badge variant="secondary" className="text-xs font-medium sm:text-sm">
                {PROFESSIONS.find((p) => p.slug === slug)?.name ?? slug}
              </Badge>
            </Link>
          ))}
        </div>
      </section>

      <Separator className="separator-faction my-8" />

      {/* Guías de recolección */}
      <section className="mb-10">
        <h2 className="title-underline-faction font-heading mb-4 text-lg font-semibold text-foreground sm:text-xl">
          Guías de recolección
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <Card className="card-faction border border-border">
            <CardContent className="p-4">
              <h3 className="mb-3 font-semibold text-foreground text-sm uppercase tracking-wider">
                Hierbas
              </h3>
              <ul className="space-y-1.5 text-sm text-card-foreground">
                {FARMING_HERBS.map((item) => (
                  <li key={item.slug} className="flex items-center gap-2">
                    <span className="size-1.5 shrink-0 rounded-full bg-primary/60" />
                    <Link
                      to={`/expansion/${expansionSlug}/farming/${item.slug}`}
                      className="link-faction hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="card-faction border border-border">
            <CardContent className="p-4">
              <h3 className="mb-3 font-semibold text-foreground text-sm uppercase tracking-wider">
                Motas
              </h3>
              <ul className="space-y-1.5 text-sm text-card-foreground">
                {FARMING_MOTES.map((item) => (
                  <li key={item.slug} className="flex items-center gap-2">
                    <span className="size-1.5 shrink-0 rounded-full bg-primary/60" />
                    <Link
                      to={`/expansion/${expansionSlug}/farming/${item.slug}`}
                      className="link-faction hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="card-faction border border-border">
            <CardContent className="p-4">
              <h3 className="mb-3 font-semibold text-foreground text-sm uppercase tracking-wider">
                Minerales y tela
              </h3>
              <ul className="space-y-1.5 text-sm text-card-foreground">
                {FARMING_ORES_CLOTH.map((item) => (
                  <li key={item.slug} className="flex items-center gap-2">
                    <span className="size-1.5 shrink-0 rounded-full bg-primary/60" />
                    <Link
                      to={`/expansion/${expansionSlug}/farming/${item.slug}`}
                      className="link-faction hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Clásico */}
      <section>
        <h2 className="title-underline-faction font-heading mb-4 text-lg font-semibold text-foreground sm:text-xl">
          Clásico
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card className="card-faction border border-border">
            <CardContent className="p-4">
              <h3 className="mb-3 font-semibold text-foreground text-sm uppercase tracking-wider">
                Minerales
              </h3>
              <ul className="space-y-1.5 text-sm text-card-foreground">
                {CLASSIC_ORES.map((item) => (
                  <li key={item.slug} className="flex items-center gap-2">
                    <span className="size-1.5 shrink-0 rounded-full bg-primary/60" />
                    <Link
                      to={`/expansion/${expansionSlug}/farming/${item.slug}`}
                      className="link-faction hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="card-faction border border-border">
            <CardContent className="p-4">
              <h3 className="mb-3 font-semibold text-foreground text-sm uppercase tracking-wider">
                Cueros
              </h3>
              <ul className="space-y-1.5 text-sm text-card-foreground">
                {CLASSIC_LEATHERS.map((item) => (
                  <li key={item.slug} className="flex items-center gap-2">
                    <span className="size-1.5 shrink-0 rounded-full bg-primary/60" />
                    <Link
                      to={`/expansion/${expansionSlug}/farming/${item.slug}`}
                      className="link-faction hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
