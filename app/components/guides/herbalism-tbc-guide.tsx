import { Link } from "react-router";
import { Card, CardContent } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import type { ComponentProps } from "react";
import { TomTomMacro } from "~/components/guides/tomtom-macro";
import { WowheadEntityLink } from "~/components/wowhead-entity";
import { WowheadItem as WowheadItemBase } from "~/components/wowhead-item";
import { WowheadNpc as WowheadNpcBase } from "~/components/wowhead-npc";
import { ALCHEMY_TBC_MATERIALS } from "~/lib/alchemy-tbc-materials";
import { HERBALISM_TBC_NPCS } from "~/lib/herbalism-tbc-npcs";

function WowheadItem(
  props: Omit<ComponentProps<typeof WowheadItemBase>, "materials" | "game">,
) {
  return <WowheadItemBase materials={ALCHEMY_TBC_MATERIALS} game="tbc" {...props} />;
}

function WowheadNpc(props: Omit<ComponentProps<typeof WowheadNpcBase>, "npcs" | "game">) {
  return <WowheadNpcBase npcs={HERBALISM_TBC_NPCS} game="tbc" {...props} />;
}

/** Secciones para el índice de la guía Herboristería TBC */
export const HERBALISM_TBC_INDEX = [
  { id: "intro", label: "Introducción" },
  { id: "instructores", label: "Entrenador" },
  { id: "lista-compras", label: "Lista de compras" },
  { id: "1-70", label: "1-70" },
  { id: "70-115", label: "70-115" },
  { id: "115-170", label: "115-170" },
  { id: "170-205", label: "170-205" },
  { id: "205-230", label: "205-230" },
  { id: "230-270", label: "230-270" },
  { id: "270-300", label: "270-300" },
  { id: "300-375", label: "300-375" },
  { id: "waypoints", label: "TomTom y pin" },
  { id: "raciales", label: "Raciales" },
  { id: "cruces", label: "Otras guías" },
];

export function HerbalismTBCGuide() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <section id="intro" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Subida de nivel de Herboristería en The Burning Crusade
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Esta guía te lleva Herboristería de The Burning Crusade del 1 al 375 recolectando
          de las zonas de inicio a Terrallende. Alquimia es la pareja natural: lo que farmeás
          acá se gasta en la{" "}
          <Link to="/expansion/the-burning-crusade/profesion/alchemy" className="link-faction">
            Subida de Alquimia
          </Link>
          . Esta ruta prioriza subir rápido, así que a veces no es la mejor para combinar con Alquimia.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Activá el rastreo de hierbas en el minimapa.
        </p>
      </section>

      <Separator className="separator-faction" />

      <section id="instructores" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Instructores de herboristería
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Para ser aprendiz de herborista necesitás hablar con un instructor. Preguntale a un
          guardia en cualquier ciudad por Herboristería y te marca una bandera roja en el mapa.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Card className="card-faction border border-border">
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                Instructores clásicos (1-300)
              </h3>
              <p className="mt-2 text-sm font-medium text-card-foreground">Alianza:</p>
              <ul className="mt-0.5 list-inside list-disc text-sm text-muted-foreground">
                <li><WowheadNpc npcKey="reynaStonebranch" /></li>
                <li><WowheadNpc npcKey="tannysa" /></li>
                <li><WowheadNpc npcKey="firodrenMooncaller" /></li>
                <li><WowheadNpc npcKey="herbalistPomeroy" /></li>
                <li><WowheadNpc npcKey="malorneBladeleaf" /></li>
                <li><WowheadNpc npcKey="kaliHealtouch" /></li>
                <li><WowheadNpc npcKey="cylaniaRootstalker" /></li>
                <li><WowheadNpc npcKey="telurinonMoonshadow" /></li>
                <li><WowheadNpc npcKey="brantJasperbloom" /></li>
                <li><WowheadNpc npcKey="almaJainrose" /></li>
                <li><WowheadNpc npcKey="cemmorhan" /></li>
              </ul>
              <p className="mt-2 text-sm font-medium text-card-foreground">Horda:</p>
              <ul className="mt-0.5 list-inside list-disc text-sm text-muted-foreground">
                <li><WowheadNpc npcKey="jandi" /></li>
                <li><WowheadNpc npcKey="marthaAlliestar" /></li>
                <li><WowheadNpc npcKey="kominWinterhoof" /></li>
                <li><WowheadNpc npcKey="faruza" /></li>
                <li><WowheadNpc npcKey="mishiki" /></li>
                <li><WowheadNpc npcKey="angrun" /></li>
                <li><WowheadNpc npcKey="aranaeVenomblood" /></li>
                <li><WowheadNpc npcKey="botanistNathera" /></li>
              </ul>
            </CardContent>
          </Card>
          <Card className="card-faction border border-border">
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                Instructores TBC (300-375)
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Aprendé Herboristería de Terrallende con los instructores maestros en la
                Península del Fuego Infernal. (Requiere nivel 50 y Herboristería 275.)
              </p>
              <ul className="mt-2 space-y-1 text-sm text-card-foreground">
                <li><strong>Horda:</strong> <WowheadNpc npcKey="ruakStronghorn" /> — en Thrallmar, en la torre grande colina arriba. /way 52.2, 36.3</li>
                <li><strong>Alianza:</strong> <WowheadNpc npcKey="rorelien" /> — en Bastión del Honor, primera planta de la torre de magos. /way 53.6, 65.8</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="separator-faction" />

      <section id="lista-compras" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Lista de compras
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          No hace falta lote de casa de subastas. La habilidad sale de los nodos. Una hoz la
          vende el vendedor de herboristería al lado del entrenador si no tenés herramienta.
        </p>
      </section>

      <Separator className="separator-faction" />

      <section id="nivelado" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Nivelado Herboristería
        </h2>

        <div id="1-70" className="scroll-mt-24 mt-4">
          <h3 className="guide-division font-semibold text-lg">1 - 70</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Cualquier zona de inicio tiene muchas hierbas; da igual cuál elijas. Hierbas en estas zonas: <WowheadItem materialKey="peacebloom" />, <WowheadItem materialKey="silverleaf" />, <WowheadItem materialKey="earthroot" />.
          </p>
        </div>

        <div id="70-115" className="scroll-mt-24 mt-6">
          <h3 className="guide-division font-semibold text-lg">70 - 115</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Aprendé Oficial de herboristería con tu instructor. Hierbas en estas zonas: <WowheadItem materialKey="mageroyal" />, <WowheadItem materialKey="briarthorn" />, <WowheadItem materialKey="stranglekelp" />. La alga estranguladora requiere herboristería 85.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Zonas recomendadas: Los Baldíos, Bosque de Argénteos, Loch Modan, Costa Oscura.
          </p>
        </div>

        <div id="115-170" className="scroll-mt-24 mt-6">
          <h3 className="guide-division font-semibold text-lg">115 - 170</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Visitá a tu instructor al llegar a 150. Hierbas: <WowheadItem materialKey="bruiseweed" />, <WowheadItem materialKey="wildSteelbloom" />, <WowheadItem materialKey="stranglekelp" />, <WowheadItem materialKey="kingsblood" />, <WowheadItem materialKey="liferoot" />. Sangrerregia requiere 125 y vidarraíz 150.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Zonas: Laderas de Trabalomas, Los Humedales, Montañas Filospada.
          </p>
        </div>

        <div id="170-205" className="scroll-mt-24 mt-6">
          <h3 className="guide-division font-semibold text-lg">170 - 205</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Hierbas en estas zonas: <WowheadItem materialKey="kingsblood" />, <WowheadItem materialKey="liferoot" />, <WowheadItem materialKey="fadeleaf" />, <WowheadItem materialKey="goldthorn" />, <WowheadItem materialKey="khadgarWhisker" />. El mostacho de Khadgar requiere herboristería 185.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Zonas: Vega de Tuercespina, Tierras Altas de Arathi.
          </p>
        </div>

        <div id="205-230" className="scroll-mt-24 mt-6">
          <h3 className="guide-division font-semibold text-lg">205 - 230</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Visitá a tu instructor y aprendé Artesano de herboristería. Hierbas: <WowheadItem materialKey="purpleLotus" />, <WowheadItem materialKey="firebloom" />.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Zonas: Tanaris, Garganta de Fuego.
          </p>
        </div>

        <div id="230-270" className="scroll-mt-24 mt-6">
          <h3 className="guide-division font-semibold text-lg">230 - 270</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Tierras Altas del Interior: <WowheadItem materialKey="sungrass" />, <WowheadItem materialKey="purpleLotus" />, <WowheadItem materialKey="ghostMushroom" />, <WowheadItem materialKey="goldenSansam" />. El champiñón fantasma se recoge con herboristería 245; en el mapa suele haber una cueva marcada con X.
          </p>
        </div>

        <div id="270-300" className="scroll-mt-24 mt-6">
          <h3 className="guide-division font-semibold text-lg">270 - 300</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Frondavil: <WowheadItem materialKey="sungrass" />, <WowheadItem materialKey="gromsblood" />, <WowheadItem materialKey="goldenSansam" />, <WowheadItem materialKey="dreamfoil" />, <WowheadItem materialKey="mountainSilversage" />, <WowheadItem materialKey="plaguebloom" />.
          </p>
        </div>

        <div id="300-375" className="scroll-mt-24 mt-6">
          <h3 className="guide-division font-semibold text-lg">
            The Burning Crusade (300-375)
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Aprendé Herboristería de Terrallende con los instructores maestros en la Península
            del Fuego Infernal (nivel 50 y Herboristería 275).
          </p>
          <ul className="mt-1 list-inside list-disc text-sm text-muted-foreground">
            <li><strong>Horda:</strong> <WowheadNpc npcKey="ruakStronghorn" /></li>
            <li><strong>Alianza:</strong> <WowheadNpc npcKey="rorelien" /></li>
          </ul>

          <h4 className="guide-division mt-4 font-semibold text-base">300 - 315</h4>
          <p className="mt-1 text-sm text-card-foreground">
            Recomendado subir los primeros 15 puntos en la Península del Fuego Infernal hasta poder recoger <WowheadItem materialKey="dreamingGlory" />. Si sos bajo nivel, es probable que llegues a 375 solo recogiendo hierbas mientras hacés misiones; estas rutas sirven sobre todo a nivel 70 con montura voladora.
          </p>

          <h4 className="guide-division mt-4 font-semibold text-base">315 - 325</h4>
          <p className="mt-1 text-sm text-card-foreground">
            Podés seguir hasta 325 en la Península del Fuego Infernal, pero es mejor Nagrand o Montañas Filospada para conseguir más hierbas de Terrallende.
          </p>

          <h4 className="guide-division mt-4 font-semibold text-base">325 - 350</h4>
          <p className="mt-1 text-sm text-card-foreground">
            <WowheadItem materialKey="felweed" /> y <WowheadItem materialKey="dreamingGlory" /> dan puntos hasta 375, así que podés quedarte en las zonas anteriores. Bosque de Terokkar es otra opción.
          </p>

          <h4 className="guide-division mt-4 font-semibold text-base">350 - 375</h4>
          <p className="mt-1 text-sm text-card-foreground">
            Recomendado hacer los últimos 25 puntos en Tormenta Abisal; si hay mucha competencia
            podés quedarte en cualquiera de las zonas anteriores. Todas las hierbas de
            Terrallende dan puntos hasta 375.
          </p>
        </div>
      </section>

      <Separator className="separator-faction" />

      <section id="waypoints" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          TomTom y pin
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Copiá el macro, pegalo en el chat y usá /ttpaste con TomTom para marcar a Ruak
          (Horda) y a Rorelien (Alianza).
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <TomTomMacro macro={"/way #1944 52.2 36.3 Ruak Cuernoforte\n/way #1944 53.6 65.8 Rorelien"} />
          <span className="rounded-full border border-dashed border-border px-3 py-1.5 text-xs text-muted-foreground">
            Pin del mapa: próximamente
          </span>
        </div>
      </section>

      <Separator className="separator-faction" />

      <section id="raciales" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">Raciales</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Los tauren tienen bonus de Herboristería con{" "}
          <WowheadEntityLink entity={{ tipo: "habilidad", id: 20552, juego: "tbc" }}>
            Cultivo
          </WowheadEntityLink>
          . Esa habilidad extra deja los nodos naranjas más tiempo.
        </p>
      </section>

      <Separator className="separator-faction" />

      <section id="cruces" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Otras guías
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La Subida de nivel es la ruta 1→tope. Estos otros tipos todavía están en construcción
          o como contenido provisional:
        </p>
        <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-card-foreground">
          <li>
            <Link
              to="/expansion/the-burning-crusade/profesion/herbalism/recetas-y-conocimiento"
              className="link-faction"
            >
              Recetas y conocimiento
            </Link>
          </li>
          <li>
            <Link
              to="/expansion/the-burning-crusade/profesion/herbalism/especializaciones"
              className="link-faction"
            >
              Especializaciones
            </Link>
          </li>
          <li>
            <Link
              to="/expansion/the-burning-crusade/profesion/herbalism/farming"
              className="link-faction"
            >
              Farming
            </Link>
          </li>
          <li>
            <Link to="/expansion/the-burning-crusade/profesion/alchemy" className="link-faction">
              Alquimia en The Burning Crusade
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
