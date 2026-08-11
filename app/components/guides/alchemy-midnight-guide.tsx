import type { ComponentProps } from "react";
import { Link } from "react-router";
import { TomTomMacro } from "~/components/guides/tomtom-macro";
import { Card, CardContent } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { WowheadEntityLink } from "~/components/wowhead-entity";
import { WowheadItem as WowheadItemBase } from "~/components/wowhead-item";
import { WowheadNpc as WowheadNpcBase } from "~/components/wowhead-npc";
import { ALCHEMY_MIDNIGHT_MATERIALS } from "~/lib/alchemy-midnight-materials";
import { ALCHEMY_MIDNIGHT_NPCS } from "~/lib/alchemy-midnight-npcs";

const CAMBERON_TOMTOM = "/way #2393 47 52.1 Camberon";

function WowheadItem(
  props: Omit<ComponentProps<typeof WowheadItemBase>, "materials" | "game">,
) {
  return (
    <WowheadItemBase
      materials={ALCHEMY_MIDNIGHT_MATERIALS}
      game="midnight"
      {...props}
    />
  );
}

function WowheadNpc(props: Omit<ComponentProps<typeof WowheadNpcBase>, "npcs" | "game">) {
  return <WowheadNpcBase npcs={ALCHEMY_MIDNIGHT_NPCS} game="midnight" {...props} />;
}

function RecipeLink({ spellId, name }: { spellId: number; name: string }) {
  return (
    <WowheadEntityLink entity={{ tipo: "receta", id: spellId, juego: "midnight" }}>
      {name}
    </WowheadEntityLink>
  );
}

function RacialLink({ spellId, name }: { spellId: number; name: string }) {
  return (
    <WowheadEntityLink entity={{ tipo: "habilidad", id: spellId, juego: "midnight" }}>
      {name}
    </WowheadEntityLink>
  );
}

const FACTION_TRAINERS = [
  { id: "horda", label: "Horda", trainer: "camberon", vendor: "melaris" },
  { id: "alianza", label: "Alianza", trainer: "camberon", vendor: "melaris" },
] as const;

export const ALCHEMY_MIDNIGHT_INDEX = [
  { id: "intro", label: "Introducción" },
  { id: "instructores", label: "Entrenador y vendedor" },
  { id: "lista-compras", label: "Lista de compras" },
  { id: "1-20", label: "1-20" },
  { id: "waypoints", label: "TomTom y pin" },
  { id: "raciales", label: "Raciales" },
  { id: "cruces", label: "Otras guías" },
];

export function AlchemyMidnightGuide() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <section id="intro" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Subida de nivel de Alquimia en Midnight
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Esta guía te muestra cómo subir Alquimia de Midnight del 1 al 100 por la ruta más
          barata y rápida. El esqueleto ya tiene la anatomía completa; los rangos del 20 al
          tope se van a ir cerrando después.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Alquimia va de la mano con Herboristería: si farmeás las hierbas vos, te ahorrás
          muchísimo en la casa de subastas. Si no tenés Herboristería, comprá el lote de la
          lista de compras de una.
        </p>
      </section>

      <Separator className="separator-faction" />

      <section id="instructores" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Entrenador y vendedor
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          En Midnight Horda y Alianza aprenden Alquimia en el mismo lugar: Ciudad de
          Lunargenta. El entrenador y el vendedor de suministros están juntos.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {FACTION_TRAINERS.map((faction) => (
            <Card key={faction.id} className="card-faction border border-border">
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                  {faction.label}
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-card-foreground">
                  <li>
                    Entrenador: <WowheadNpc npcKey={faction.trainer} />
                  </li>
                  <li>
                    Vendedor: <WowheadNpc npcKey={faction.vendor} />
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="separator-faction" />

      <section id="lista-compras" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Lista de compras
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Materiales del rango publicado (1-20). La calidad no importa para subir: comprá
          lo más barato. No hay precios de oro acá porque cambian todo el tiempo.
        </p>
        <Card className="card-faction mt-4 border border-border">
          <CardContent className="p-4">
            <ul className="space-y-1 text-sm text-card-foreground">
              <li>
                <WowheadItem materialKey="tranquilityBloom" quantity={36} />
              </li>
              <li>
                <WowheadItem materialKey="sunglassVial" quantity={30} /> — lo vende{" "}
                <WowheadNpc npcKey="melaris" />
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator className="separator-faction" />

      <section id="1-20" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          1-20
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Este es el rango representativo del esqueleto. Visitá a <WowheadNpc npcKey="camberon" />{" "}
          y aprendé Alquimia de Midnight antes de craftear.
        </p>
        <ul className="mt-4 space-y-3 text-sm text-card-foreground">
          <li>
            <strong>1-7:</strong> 6x{" "}
            <RecipeLink spellId={1230866} name="Poción de sanación de Lunargenta" /> — 36{" "}
            <WowheadItem materialKey="tranquilityBloom" />, 30{" "}
            <WowheadItem materialKey="sunglassVial" />.
          </li>
          <li>
            <strong>7-20:</strong> 10x{" "}
            <RecipeLink spellId={1233129} name="Reciclar pociones" /> sobre las{" "}
            <RecipeLink spellId={1230866} name="Poción de sanación de Lunargenta" /> que
            acabás de hacer.
          </li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Los rangos 20-100 se publican cuando cerremos recetas y cantidades. Mientras tanto
          podés seguir con la ruta del entrenador y la caldera de Camberon.
        </p>
      </section>

      <Separator className="separator-faction" />

      <section id="waypoints" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          TomTom y pin
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Copiá el macro, pegalo en el chat y usá <code className="text-foreground">/ttpaste</code>{" "}
          con TomTom para marcar a Camberon.
        </p>
        <div className="mt-4">
          <TomTomMacro macro={CAMBERON_TOMTOM} />
        </div>
      </section>

      <Separator className="separator-faction" />

      <section id="raciales" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Raciales
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Los goblin tienen +5 de Alquimia con{" "}
          <RacialLink spellId={69045} name="Es cuestión de química" />. Los kul tiranos tienen
          +2 en todas las profesiones con <RacialLink spellId={291442} name="Factótum" />. Ese
          skill extra deja las recetas naranjas más tiempo y te puede ahorrar crafts.
        </p>
      </section>

      <Separator className="separator-faction" />

      <section id="cruces" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Otras guías
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La Subida de nivel es la ruta 1→tope. Estos otros tipos todavía están en
          construcción o como contenido provisional:
        </p>
        <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-card-foreground">
          <li>
            <Link
              to="/expansion/midnight/profesion/alchemy/recetas-y-conocimiento"
              className="link-faction"
            >
              Recetas y conocimiento
            </Link>
          </li>
          <li>
            <Link
              to="/expansion/midnight/profesion/alchemy/especializaciones"
              className="link-faction"
            >
              Especializaciones
            </Link>
          </li>
          <li>
            <Link to="/expansion/midnight/profesion/alchemy/farming" className="link-faction">
              Farming
            </Link>
          </li>
          <li>
            <Link to="/expansion/midnight/profesion/herbalism" className="link-faction">
              Herboristería en Midnight
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
