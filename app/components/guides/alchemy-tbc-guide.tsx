import { Link } from "react-router";
import { Card, CardContent } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { WowheadItem } from "~/components/wowhead-item";
import { WowheadNpc } from "~/components/wowhead-npc";

/** Secciones para el índice de la guía (igual que wow-professions: Table of Contents) */
export const ALCHEMY_TBC_INDEX = [
  { id: "lista-compras", label: "Lista de compras" },
  { id: "instructores", label: "Instructores de alquimia" },
  { id: "1-140", label: "1-140" },
  { id: "140-210", label: "140-210" },
  { id: "210-300", label: "210-300" },
  { id: "300-375", label: "300-375" },
];

export function AlchemyTBCGuide() {
  return (
    <div className="space-y-8">
      {/* Título principal (H1 equivalente) */}
      <section id="intro" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Guía de nivelado Alquimia TBC Classic 1-375
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Esta guía de Alquimia para TBC Classic te muestra la forma más rápida de subir la profesión del 1 al 375 en Burning Crusade Classic. Recomendamos subir Alquimia y Herboristería a la vez para ahorrar mucho oro si puedes farmear las hierbas necesarias. Echa un vistazo a la guía de Herboristería TBC Classic si quieres subir Herboristería.
        </p>
      </section>

      <Separator className="separator-faction" />

      {/* Lista de compras - igual que Shopping List */}
      <section id="lista-compras" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Lista de compras
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          En la guía se usan muchas recetas amarillas, así que no ganarás puntos en cada elaboración. Añadí 10-20 hierbas de más en la mayoría, pero si tienes mala suerte puede que necesites alguna más.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Card className="card-faction border border-border">
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                Clásico (1 - 300)
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-card-foreground">
                <li><WowheadItem materialKey="peacebloom" quantity={65} /></li>
                <li><WowheadItem materialKey="silverleaf" quantity={65} /></li>
                <li><WowheadItem materialKey="emptyVial" quantity={85} /></li>
                <li><WowheadItem materialKey="briarthorn" quantity={100} /></li>
                <li><WowheadItem materialKey="bruiseweed" quantity={35} /></li>
                <li><WowheadItem materialKey="leadedVial" quantity={105} /></li>
                <li><WowheadItem materialKey="mageroyal" quantity={20} /></li>
                <li><WowheadItem materialKey="stranglekelp" quantity={50} /></li>
                <li><WowheadItem materialKey="liferoot" quantity={35} /></li>
                <li><WowheadItem materialKey="kingsblood" quantity={35} /></li>
                <li><WowheadItem materialKey="goldthorn" quantity={35} /></li>
                <li><WowheadItem materialKey="wildSteelbloom" quantity={5} /></li>
                <li><WowheadItem materialKey="sungrass" quantity={75} /></li>
                <li><WowheadItem materialKey="khadgarWhisker" quantity={15} /></li>
                <li><WowheadItem materialKey="crystalVial" quantity={120} /></li>
                <li><WowheadItem materialKey="arthasTears" quantity={45} /></li>
                <li><WowheadItem materialKey="blindweed" quantity={60} /></li>
                <li><WowheadItem materialKey="goldenSansam" quantity={75} /></li>
                <li><WowheadItem materialKey="mountainSilversage" quantity={20} /></li>
              </ul>
            </CardContent>
          </Card>
          <Card className="card-faction border border-border">
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                TBC (300 - 375)
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-card-foreground">
                <li><WowheadItem materialKey="imbuedVial" quantity={105} /></li>
                <li><WowheadItem materialKey="felweed" quantity={40} /> — Solo necesitarás 30 si haces pociones clásicas los primeros niveles. (lee más en 300)</li>
                <li>15 <WowheadItem materialKey="goldenSansam" /> / 15 <WowheadItem materialKey="dreamfoil" /> / 15 <WowheadItem materialKey="mountainSilversage" /> (solo necesitas 15 de uno)</li>
                <li><WowheadItem materialKey="goldenSansam" quantity={30} /></li>
                <li><WowheadItem materialKey="terocone" quantity={5} /></li>
                <li><WowheadItem materialKey="dreamingGlory" quantity={100} /></li>
                <li><WowheadItem materialKey="netherbloom" quantity={10} /></li>
                <li><WowheadItem materialKey="nightmareVine" quantity={40} /></li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="separator-faction" />

      {/* Instructores - igual que Alchemy Trainers */}
      <section id="instructores" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Instructores de alquimia
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Puedes aprender Alquimia con cualquiera de los NPC indicados. También puedes preguntar a un guardia en cualquier ciudad por el instructor de Alquimia y se marcará con una bandera roja en el mapa.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Card className="card-faction border border-border">
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">Instructores clásicos (1-300)</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                En Burning Crusade Classic puedes aprender Oficial, Experto y Artesano de Alquimia en cualquier ciudad. Ya no hace falta visitar instructores distintos.
              </p>
              <p className="mt-2 text-sm font-medium text-card-foreground">Horda:</p>
              <ul className="mt-0.5 list-inside list-disc text-sm text-muted-foreground">
                <li><WowheadNpc npcKey="camberon" /></li>
                <li><WowheadNpc npcKey="benaWinterhoof" /></li>
                <li><WowheadNpc npcKey="herbertHalsey" /></li>
                <li><WowheadNpc npcKey="yelmak" /></li>
              </ul>
              <p className="mt-2 text-sm font-medium text-card-foreground">Alianza:</p>
              <ul className="mt-0.5 list-inside list-disc text-sm text-muted-foreground">
                <li><WowheadNpc npcKey="lucc" /></li>
                <li><WowheadNpc npcKey="ainethil" /></li>
                <li><WowheadNpc npcKey="lilyssiaNightbreeze" /></li>
                <li><WowheadNpc npcKey="tallyBerryfizz" /></li>
              </ul>
            </CardContent>
          </Card>
          <Card className="card-faction border border-border">
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">Instructores TBC (300-375)</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Puedes aprender la nueva Alquimia TBC con los instructores Maestros en Terrallende.
              </p>
              <ul className="mt-2 space-y-1 text-sm text-card-foreground">
                <li><strong>Ambas facciones:</strong> <WowheadNpc npcKey="lorokeem" /></li>
                <li><strong>Horda:</strong> <WowheadNpc npcKey="apothecaryAntonivich" /></li>
                <li><strong>Alianza:</strong> <WowheadNpc npcKey="alchemistGribble" /></li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="separator-faction" />

      {/* Nivelado Alquimia TBC - Leveling TBC Alchemy */}
      <section id="nivelado" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Nivelado Alquimia TBC
        </h2>

        {/* 1-60 */}
        <div id="1-140" className="scroll-mt-24 mt-4">
          <p className="font-medium text-card-foreground">1 - 60</p>
          <p className="mt-1 text-sm text-muted-foreground">
            65x Poción de sanación menor — 65 <WowheadItem materialKey="peacebloom" />, 65 <WowheadItem materialKey="silverleaf" />, 65 <WowheadItem materialKey="emptyVial" />. Las necesitarás después, así que guárdalas todas.
          </p>
        </div>

        {/* Oficial de alquimia - Journeyman */}
        <div className="mt-6">
          <h3 className="guide-division font-semibold text-lg">Oficial de alquimia</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">Visita a tu instructor y aprende Oficial de alquimia. (Requiere nivel 10)</p>
          <ul className="mt-2 space-y-1 text-sm text-card-foreground">
            <li><strong>60 - 110:</strong> 65x Poción de sanación inferior — 65 Poción de sanación menor, 65 <WowheadItem materialKey="briarthorn" /></li>
            <li><strong>110 - 140:</strong> 35x Poción de sanación — 35 <WowheadItem materialKey="bruiseweed" />, 35 <WowheadItem materialKey="briarthorn" />, 35 <WowheadItem materialKey="leadedVial" /></li>
          </ul>
        </div>
      </section>

      <Separator className="separator-faction" />

      {/* Experto de alquimia - Expert Alchemy */}
      <section id="140-210" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Experto de alquimia
        </h2>
        <p className="mt-2 text-xs text-muted-foreground">Visita a tu instructor y aprende Experto de alquimia. (Requiere nivel 20)</p>
        <h3 className="guide-division mt-4 font-semibold text-base">140 - 210</h3>
        <ul className="mt-2 space-y-3 text-sm text-card-foreground">
          <li>
            <strong>140 - 155:</strong> 20x Poción de maná inferior — 20 <WowheadItem materialKey="mageroyal" />, 20 <WowheadItem materialKey="stranglekelp" />, 20 <WowheadItem materialKey="emptyVial" />.
            <p className="mt-1 text-muted-foreground">La receta será amarilla los últimos 10 puntos, así que puede que tengas que hacer algunas de más.</p>
            <p className="mt-1 text-muted-foreground">Haz Aceite de Fuego si no tienes alga estranguladora o si el <WowheadItem materialKey="firefinSnapper" /> es barato. También puedes seguir haciendo más Poción de sanación.</p>
          </li>
          <li>
            <strong>155 - 185:</strong> 35x Poción de sanación superior — 35 <WowheadItem materialKey="liferoot" />, 35 <WowheadItem materialKey="kingsblood" />, 35 <WowheadItem materialKey="leadedVial" />.
            <p className="mt-1 text-muted-foreground">Si hiciste Aceite de Fuego, puedes usarlo para Elixir de poder de Fuego.</p>
          </li>
          <li>
            <strong>185 - 210:</strong> 30x Elixir de agilidad — 30 <WowheadItem materialKey="stranglekelp" />, 30 <WowheadItem materialKey="goldthorn" />, 30 <WowheadItem materialKey="leadedVial" />.
            <p className="mt-1 text-muted-foreground">Si no tienes tanto espina de oro, haz Poción de maná o Poción de invisibilidad inferior hasta alrededor de 195.</p>
            <p className="mt-1 text-muted-foreground">Si no tienes nada de espina de oro, puedes hacer Poción de Protección contra la Naturaleza entre 190-215. Receta: poción de Protección contra la Naturaleza se vende en varios vendedores. Es un objeto de suministro limitado, así que puede tardar en reaparecer si alguien la compra antes que tú.</p>
          </li>
        </ul>
      </section>

      <Separator className="separator-faction" />

      {/* Artesano de alquimia - Artisan Alchemy */}
      <section id="210-300" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Artesano de alquimia
        </h2>
        <p className="mt-2 text-xs text-muted-foreground">Visita a tu instructor y aprende Artesano de alquimia. (Requiere nivel 35)</p>
        <h3 className="guide-division mt-4 font-semibold text-base">210 - 300</h3>
        <ul className="mt-2 space-y-2 text-sm text-card-foreground">
          <li><strong>210 - 215:</strong> 5x Elixir de defensa superior — 5 <WowheadItem materialKey="wildSteelbloom" />, 5 <WowheadItem materialKey="goldthorn" />, 5 <WowheadItem materialKey="leadedVial" /></li>
          <li><strong>215 - 230:</strong> 15x Poción de sanación excelente — 15 <WowheadItem materialKey="sungrass" />, 15 <WowheadItem materialKey="khadgarWhisker" />, 15 <WowheadItem materialKey="crystalVial" /></li>
          <li><strong>230 - 265:</strong> 45x Elixir de detección de no-muertos — 45 <WowheadItem materialKey="arthasTears" />, 45 <WowheadItem materialKey="crystalVial" /></li>
          <li><strong>265 - 285:</strong> 30x Poción de maná excelente — 60 <WowheadItem materialKey="sungrass" />, 60 <WowheadItem materialKey="blindweed" />, 30 <WowheadItem materialKey="crystalVial" /></li>
          <li><strong>285 - 300:</strong> 20x Poción de sanación sublime — 40 <WowheadItem materialKey="goldenSansam" />, 20 <WowheadItem materialKey="mountainSilversage" />, 20 <WowheadItem materialKey="crystalVial" /></li>
        </ul>
      </section>

      <Separator className="separator-faction" />

      {/* Burning Crusade Classic (300-375) */}
      <section id="300-375" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Burning Crusade Classic (300-375)
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Puedes aprender la nueva Alquimia TBC con los instructores Maestros en Terrallende.
        </p>
        <ul className="mt-1 list-inside list-disc text-sm text-muted-foreground">
          <li>Ambas facciones: <WowheadNpc npcKey="lorokeem" /></li>
          <li>Horda: <WowheadNpc npcKey="apothecaryAntonivich" /></li>
          <li>Alianza: <WowheadNpc npcKey="alchemistGribble" /></li>
        </ul>

        {/* 300 - 315 */}
        <div className="mt-6">
          <h3 className="guide-division font-semibold text-base">300 - 315</h3>
          <p className="mt-1 text-sm text-card-foreground">Haz 15 de una de estas opciones:</p>
          <ul className="mt-2 space-y-1 text-sm text-card-foreground">
            <li>15x Elixir de acometida — 15 <WowheadItem materialKey="mountainSilversage" />, 15 <WowheadItem materialKey="felweed" /></li>
            <li>15x Elixir de adepto — 15 <WowheadItem materialKey="dreamfoil" />, 15 <WowheadItem materialKey="felweed" /></li>
            <li>15x Poción de sanación volátil — 15 <WowheadItem materialKey="goldenSansam" />, 15 <WowheadItem materialKey="felweed" /></li>
          </ul>
          <h4 className="mt-4 font-semibold text-foreground text-sm">Recetas alternativas:</h4>
          <p className="mt-1 text-xs text-muted-foreground">
            Si encuentras hierbas clásicas baratas, puedes hacer unas pociones clásicas más. Pero solo recomiendo hacerlas hasta 315 hasta que puedas aprender Elixir de poder de sanación. Es una poción mucho más útil que los jugadores usarán en TBC en las raids, así que no estarás desperdiciando oro en pociones casi inútiles.
          </p>
          <p className="mt-2 text-sm text-card-foreground">Estas son las pociones que puedes hacer:</p>
          <ul className="mt-1 space-y-1 text-sm text-card-foreground">
            <li>17x Poción de Protección contra lo Arcano superior — 17 <WowheadItem materialKey="dreamDust" />, 17 <WowheadItem materialKey="dreamfoil" /></li>
            <li>17x Poción de Protección contra el Fuego superior — 17 <WowheadItem materialKey="elementalFire" />, 17 <WowheadItem materialKey="dreamfoil" /></li>
            <li>20x Elixir Arcano superior — 60 <WowheadItem materialKey="dreamfoil" />, 20 <WowheadItem materialKey="mountainSilversage" /></li>
            <li>17x Poción de maná sublime — 51 <WowheadItem materialKey="dreamfoil" />, 34 <WowheadItem materialKey="icecap" /></li>
          </ul>
        </div>

        {/* 315 - 330 */}
        <div className="mt-6">
          <h3 className="guide-division font-semibold text-base">315 - 330</h3>
          <p className="mt-1 text-sm text-card-foreground">25x Elixir de poder de sanación — 25 <WowheadItem materialKey="goldenSansam" />, 25 <WowheadItem materialKey="dreamingGlory" /></p>
        </div>

        {/* Especializaciones de alquimia */}
        <div className="mt-6">
          <h3 className="guide-division font-semibold text-base">Especializaciones de alquimia</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Al llegar a 325 de Alquimia y nivel 68, puedes iniciar una misión para aprender una de las tres especializaciones: Poción, Elixir o Transmutación.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Para más información sobre cómo elegir especialización, consulta la guía:
          </p>
          <a
            href="https://www.wow-professions.com/tbc/alchemy-specializations-tbc-classic"
            rel="nofollow noopener noreferrer"
            target="_blank"
            className="no-icon link-faction text-sm"
          >
            Ver guía de especializaciones en inglés
          </a>
        </div>

        {/* 330 - 335 */}
        <div className="mt-6">
          <h3 className="guide-division font-semibold text-base">330 - 335</h3>
          <p className="mt-1 text-sm text-card-foreground">5x Elixir de sabiduría draénica — 5 <WowheadItem materialKey="terocone" />, 5 <WowheadItem materialKey="felweed" /></p>
          <p className="mt-1 text-xs text-muted-foreground">Haz Poción de alquimista loco si tienes mucho <WowheadItem materialKey="ragveil" />.</p>
        </div>

        {/* 335 - 340 */}
        <div className="mt-6">
          <h3 className="guide-division font-semibold text-base">335 - 340</h3>
          <p className="mt-1 text-sm text-card-foreground">5x Superpoción de sanación — 10 <WowheadItem materialKey="netherbloom" />, 5 <WowheadItem materialKey="felweed" /></p>
          <p className="mt-1 text-xs text-muted-foreground">Haz la receta anterior 5 veces más si no tienes flor abisal.</p>
        </div>

        {/* 340 - 355 */}
        <div className="mt-6">
          <h3 className="guide-division font-semibold text-base">340 - 355</h3>
          <p className="mt-1 text-sm text-card-foreground">15x Superpoción de maná — 30 <WowheadItem materialKey="dreamingGlory" />, 15 <WowheadItem materialKey="felweed" /></p>
          <p className="mt-1 text-xs text-muted-foreground">Receta: superpoción de maná — <WowheadNpc npcKey="dagaRamba" /> y <WowheadNpc npcKey="haalrun" />.</p>
          <p className="mt-2 text-sm font-medium text-card-foreground">IMPORTANTE: Los jugadores de la Horda también deben comprar la Receta: poción de letargo sin sueños sublime porque la necesitarás en el siguiente paso.</p>
        </div>

        {/* 355 - 375 */}
        <div className="mt-6">
          <h3 className="guide-division font-semibold text-base">355 - 375</h3>
          <p className="mt-1 text-sm text-card-foreground">40x Poción de letargo sin sueños sublime — 40 <WowheadItem materialKey="dreamingGlory" />, 40 <WowheadItem materialKey="nightmareVine" /></p>
          <p className="mt-1 text-xs text-muted-foreground">Receta: poción de letargo sin sueños sublime — <WowheadNpc npcKey="dagaRamba" /> y <WowheadNpc npcKey="leeliLonghaggle" />.</p>
          <p className="mt-2 text-xs text-muted-foreground">La receta será verde los últimos 3 puntos, así que puede que tengas que hacer más.</p>
          <h4 className="mt-4 font-semibold text-foreground text-sm">Receta alternativa:</h4>
          <p className="mt-1 text-sm text-card-foreground">40x Elixir de poder de las Sombras sublime — 40 <WowheadItem materialKey="ancientLichen" />, 40 <WowheadItem materialKey="nightmareVine" /></p>
          <p className="mt-2 text-xs text-muted-foreground">
            Esta poción es mucho mejor si puedes comprar la receta. Sacerdotes de la Sombra y Brujos usan Elixir de poder de las Sombras sublime en raids, así que puedes venderlas fácilmente en la Casa de Subastas. La receta la vende <WowheadNpc npcKey="nakodu" />. Necesitarás reputación Reverenciado con Baja Ciudad para comprarla.
          </p>
        </div>

        {/* Congratulations */}
        <p className="mt-8 text-sm text-muted-foreground">
          ¡Enhorabuena por llegar a 375! Si crees que hay partes que se pueden mejorar o encuentras erratas, errores o cantidades de materiales incorrectas, envíanos feedback.
        </p>

        {/* Volver arriba */}
        <p className="mt-4">
          <Link to="#intro" className="no-icon link-faction text-sm">
            ↑ Volver arriba
          </Link>
        </p>
      </section>
    </div>
  );
}
