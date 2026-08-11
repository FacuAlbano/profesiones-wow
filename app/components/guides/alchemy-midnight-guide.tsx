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
import {
  ALCHEMY_MIDNIGHT_RANGES,
  ALCHEMY_MIDNIGHT_SHOPPING,
} from "~/lib/alchemy-midnight-route";

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
  ...ALCHEMY_MIDNIGHT_RANGES.map((range) => {
    const id = `${range.from}-${range.to}`;
    return { id, label: id };
  }),
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
          Esta guía te lleva Alquimia de Midnight del 1 al 100 por la ruta más barata que
          podemos estimar hoy. Las cantidades son aproximadas: varias recetas se ponen
          amarillas o verdes, así que llevá un poco de más.
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
          Lunargenta. El entrenador y el vendedor de suministros están juntos. La caldera de
          Camberon, al lado, es donde investigás recetas que el entrenador no te enseña.
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
          Lote estimado para la ruta completa 1-100, usando{" "}
          <RecipeLink spellId={1230869} name="Potencial de luz" /> del 50 al tope. La calidad
          no importa para subir: comprá lo más barato. No hay precios de oro acá porque
          cambian todo el tiempo.
        </p>
        <Card className="card-faction mt-4 border border-border">
          <CardContent className="p-4">
            <ul className="space-y-1 text-sm text-card-foreground">
              {ALCHEMY_MIDNIGHT_SHOPPING.map((item) => (
                <li key={item.materialKey}>
                  <WowheadItem materialKey={item.materialKey} quantity={item.quantity} />
                  {item.materialKey === "sunglassVial" ? (
                    <>
                      {" "}
                      — lo vende <WowheadNpc npcKey="melaris" />
                    </>
                  ) : null}
                </li>
              ))}
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
          Visitá a <WowheadNpc npcKey="camberon" /> y aprendé Alquimia de Midnight antes de
          elaborar.
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
            acabás de hacer. Así juntás <WowheadItem materialKey="stabilizedDerivate" /> para
            la caldera.
          </li>
        </ul>
      </section>

      <Separator className="separator-faction" />

      <section id="20-27" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          20-27
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          En la caldera de Camberon investigá{" "}
          <RecipeLink spellId={1230861} name="Piedra filosofal primigenia" /> y{" "}
          <RecipeLink spellId={1230865} name="Poción de maná imbuida de Luz" />. Después
          elaborá las recetas de abajo: la primera de cada una da un extra de habilidad y te
          empuja este tramo.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-card-foreground">
          <li>
            5x <RecipeLink spellId={1230868} name="Suero refrescante" /> — 40{" "}
            <WowheadItem materialKey="tranquilityBloom" />, 15{" "}
            <WowheadItem materialKey="sanguithorn" />, 25{" "}
            <WowheadItem materialKey="sunglassVial" />. La{" "}
            <RecipeLink spellId={1230861} name="Piedra filosofal primigenia" /> se come los
            cinco.
          </li>
          <li>
            1x <RecipeLink spellId={1230865} name="Poción de maná imbuida de Luz" /> — 8{" "}
            <WowheadItem materialKey="tranquilityBloom" />, 3{" "}
            <WowheadItem materialKey="manaLily" />, 5{" "}
            <WowheadItem materialKey="sunglassVial" />
          </li>
          <li>
            1x <RecipeLink spellId={1230861} name="Piedra filosofal primigenia" /> — 2{" "}
            <WowheadItem materialKey="stabilizedDerivate" />, 2{" "}
            <WowheadItem materialKey="moteOfLight" />, 5{" "}
            <RecipeLink spellId={1230868} name="Suero refrescante" />
          </li>
          <li>
            1x <RecipeLink spellId={1230887} name="Transmutar: mota de magia salvaje" /> — 10{" "}
            <WowheadItem materialKey="moteOfLight" />, 2{" "}
            <WowheadItem materialKey="stabilizedDerivate" />
          </li>
          <li>
            1x <RecipeLink spellId={1230855} name="Flora compuesta" /> — 4{" "}
            <WowheadItem materialKey="moteOfWildMagic" />, 4{" "}
            <WowheadItem materialKey="moteOfPrimalEnergy" />, 6{" "}
            <WowheadItem materialKey="tranquilityBloom" />, 4{" "}
            <WowheadItem materialKey="argentleaf" />
          </li>
          <li>
            1x <RecipeLink spellId={1230886} name="Tónico de iluminación" /> — 3{" "}
            <WowheadItem materialKey="tranquilityBloom" />, 5{" "}
            <WowheadItem materialKey="sunglassVial" />
          </li>
          <li>
            1x <RecipeLink spellId={1230854} name="Extracto entrópico" /> — 3{" "}
            <WowheadItem materialKey="tranquilityBloom" />, 5{" "}
            <WowheadItem materialKey="sunglassVial" />
          </li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          A 25 de habilidad se te abre la primera especialización. Si querés gastar puntos ya,
          andá
          a{" "}
          <Link
            to="/expansion/midnight/profesion/alchemy/especializaciones"
            className="link-faction"
          >
            Especializaciones
          </Link>
          ; para llegar al tope no hace falta elegir un árbol concreto.
        </p>
      </section>

      <Separator className="separator-faction" />

      <section id="27-50" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          27-50
        </h2>
        <ul className="mt-4 space-y-3 text-sm text-card-foreground">
          <li>
            <strong>27-32:</strong> 8x <RecipeLink spellId={1230854} name="Extracto entrópico" />{" "}
            — 24 <WowheadItem materialKey="tranquilityBloom" />, 40{" "}
            <WowheadItem materialKey="sunglassVial" />. Llegar justo a 32 es una estimación:
            si te quedás un poco antes, seguí.
          </li>
          <li>
            <strong>32-50:</strong> 30x{" "}
            <RecipeLink spellId={1230866} name="Poción de sanación de Lunargenta" /> — 180{" "}
            <WowheadItem materialKey="tranquilityBloom" />, 150{" "}
            <WowheadItem materialKey="sunglassVial" />. Acá la receta se pone amarilla, así
            que puede que no toques 50. No pasa nada: el siguiente tramo te lleva al tope
            igual.
          </li>
        </ul>
      </section>

      <Separator className="separator-faction" />

      <section id="50-100" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          50-100
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Del 50 al tope podés subir con pociones, frascos o transmutaciones. La ruta
          recomendada es pociones: es la más predecible y te deja un consumible útil.
        </p>

        <h3 className="guide-division mt-5 font-semibold text-base">Pociones (recomendada)</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Investigá <RecipeLink spellId={1230869} name="Potencial de luz" /> en la caldera
          (cuesta Arrojo de alquimista artesano) y elaborala hasta 100. Pociones y
          transmutaciones dan 1 de habilidad por elaboración: amarillo cerca de 80 y verde cerca
          de 90.
          Calculá unas 80 elaboraciones y un par de más si tenés mala suerte.
        </p>
        <p className="mt-2 text-sm text-card-foreground">
          ~80x <RecipeLink spellId={1230869} name="Potencial de luz" /> — 80{" "}
          <WowheadItem materialKey="moteOfLight" />, 640{" "}
          <WowheadItem materialKey="tranquilityBloom" />, 240{" "}
          <WowheadItem materialKey="azeroot" />, 240{" "}
          <WowheadItem materialKey="argentleaf" />, 400{" "}
          <WowheadItem materialKey="sunglassVial" />.
        </p>

        <h3 className="guide-division mt-6 font-semibold text-base">Frascos</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Si ya desbloqueaste el árbol de frascos, podés spamear uno solo hasta el tope. Dan
          2 de habilidad por elaboración hasta ~90, después se ponen amarillos y verdes. Es más
          caro,
          pero el producto se vende mejor.
        </p>
        <ul className="mt-3 space-y-2 text-sm text-card-foreground">
          <li>
            ~45x <RecipeLink spellId={1230876} name="Frasco de los Magistri" /> — 45{" "}
            <WowheadItem materialKey="nocturnalLotus" />, 90{" "}
            <WowheadItem materialKey="moteOfPureVoid" />, 360{" "}
            <WowheadItem materialKey="sanguithorn" />, 270{" "}
            <WowheadItem materialKey="manaLily" />
          </li>
          <li>
            ~45x <RecipeLink spellId={1230877} name="Frasco de los Caballeros de sangre" /> — 45{" "}
            <WowheadItem materialKey="nocturnalLotus" />, 90{" "}
            <WowheadItem materialKey="moteOfWildMagic" />, 270{" "}
            <WowheadItem materialKey="sanguithorn" />, 360{" "}
            <WowheadItem materialKey="argentleaf" />
          </li>
          <li>
            ~45x <RecipeLink spellId={1230878} name="Frasco del Sol Devastado" /> — 45{" "}
            <WowheadItem materialKey="nocturnalLotus" />, 90{" "}
            <WowheadItem materialKey="moteOfPrimalEnergy" />, 360{" "}
            <WowheadItem materialKey="azeroot" />, 270{" "}
            <WowheadItem materialKey="argentleaf" />
          </li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          <RecipeLink spellId={1230875} name="Frasco de resistencia thalassiana" /> sale del
          árbol de frascos. Los otros tres se investigan en la caldera después de elaborar{" "}
          <RecipeLink spellId={1230875} name="Frasco de resistencia thalassiana" /> u otros
          frascos de Midnight.
        </p>

        <h3 className="guide-division mt-6 font-semibold text-base">Transmutaciones</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          <RecipeLink spellId={1230893} name="Banco de gemas" />,{" "}
          <RecipeLink spellId={1230892} name="Ramo de hierbas" /> y{" "}
          <RecipeLink spellId={1230891} name="Caja de piedras" /> dan habilidad hasta 100 y
          devuelven materiales. Elegí según precios de la casa de subastas: no hay una
          ganadora fija todavía.
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
          +2 en todas las profesiones con <RacialLink spellId={291442} name="Factótum" />. Esa
          habilidad extra deja las recetas naranjas más tiempo y te puede ahorrar
          elaboraciones.
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
