import { Card, CardContent } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { wowheadItemUrl, wowheadSpellUrl, wowheadNpcUrl } from "~/lib/wowhead";

/** Secciones para el índice de la guía */
export const SHADOWLANDS_TAILORING_INDEX = [
  { id: "intro", label: "Introducción" },
  { id: "instructor", label: "Ubicación del instructor" },
  { id: "recetas", label: "Obtener recetas" },
  { id: "materiales", label: "Materiales" },
  { id: "legendarias", label: "Bases legendarias" },
  { id: "reactivos", label: "Reactivos opcionales" },
  { id: "armaduras", label: "Armaduras de tela" },
  { id: "bolsas", label: "Bolsas" },
  { id: "otros", label: "Otros objetos" },
];

function ItemLink({
  itemId,
  name,
  game = "shadowlands" as const,
}: {
  itemId: number;
  name: string;
  game?: "shadowlands";
}) {
  return (
    <a
      href={wowheadItemUrl(itemId, game)}
      rel="nofollow"
      target="_blank"
      className="no-icon link-faction"
    >
      {name}
    </a>
  );
}

function SpellLink({ spellId, name }: { spellId: number; name: string }) {
  return (
    <a
      href={wowheadSpellUrl(spellId, "shadowlands")}
      rel="nofollow"
      target="_blank"
      className="no-icon link-faction"
    >
      {name}
    </a>
  );
}

function NpcLink({ npcId, name }: { npcId: number; name: string }) {
  return (
    <a
      href={wowheadNpcUrl(npcId, "shadowlands")}
      rel="nofollow"
      target="_blank"
      className="no-icon link-faction"
    >
      {name}
    </a>
  );
}

export function ShadowlandsTailoringGuide() {
  return (
    <div className="space-y-8">
      <section id="intro" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Guía de Sastrería en Shadowlands
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Esta guía resume todas las novedades y cambios de Sastrería en World of Warcraft Shadowlands:
          nuevas armaduras, bolsas, telas y armaduras legendarias.
        </p>
      </section>

      <Separator className="separator-faction" />

      <section id="instructor" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Ubicación del instructor de Sastrería
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Puedes aprender Sastrería de Shadowlands con{" "}
          <NpcLink npcId={156681} name="Costurero Au'phes" /> en Oribos, en la Sala de las Formas (coordenadas: 45.2, 31.6).
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Oribos es la ciudad principal de las Tierras Sombrías para ambas facciones. Llegarás allí al terminar las misiones de introducción, así que puedes aprender las recetas antes de salir a hacer misiones.
        </p>
      </section>

      <Separator className="separator-faction" />

      <section id="recetas" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Obtener recetas
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          En Shadowlands la mayoría de las recetas tienen un solo rango y puedes aprenderlas con el instructor. Así es más fácil subir profesiones sin tener que farmear reputación para rangos superiores.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Solo hay 3 recetas que no se aprenden del instructor:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>
            <ItemLink itemId={180781} name="Patrón: sombrero de fiesta rosa" /> — drop aleatorio del mundo.
          </li>
          <li>
            <ItemLink itemId={183101} name="Patrón: capa de encaje sombrío" /> — requiere reputación Honrado con el Ejército Inmortal.
          </li>
          <li>
            <ItemLink itemId={183870} name="Receta: marca del artesano II" /> — requiere reputación Cordial con Ve'nari.
          </li>
        </ul>
      </section>

      <Separator className="separator-faction" />

      <section id="materiales" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Materiales
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Como en BfA, hay una tela común y una rara. Ambas salen de todos los humanoides de las zonas de Shadowlands.
        </p>
        <ul className="mt-3 space-y-1.5 text-sm text-card-foreground">
          <li><ItemLink itemId={173202} name="Tela sombría" /> — tela común.</li>
          <li><ItemLink itemId={173204} name="Seda sin luz" /> — tela rara.</li>
          <li><ItemLink itemId={172439} name="Seda sin luz encantada" /> — la crean los encantadores.</li>
          <li><ItemLink itemId={177062} name="Hilo de penumbra" /> — lo vende <NpcLink npcId={156696} name="Distribuidor Au'tem" /> cerca del instructor.</li>
          <li><ItemLink itemId={178787} name="Fragmento orbóreo" /> — lo vende <NpcLink npcId={156696} name="Distribuidor Au'tem" /> cerca del instructor.</li>
        </ul>
      </section>

      <Separator className="separator-faction" />

      <section id="legendarias" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Crear bases legendarias de Sastrería
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Crear tu propia armadura legendaria es una de las novedades de Shadowlands. Las legendarias necesitan 4 componentes; uno es la base (recipiente rúnico) que define la ranura y el nivel de objeto. Esas bases las fabrican Sastrería y Joyería.
        </p>
        <h3 className="mt-4 font-semibold text-foreground text-base">
          Cómo aprender las recetas de bases
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Al llegar a 100 en Sastrería de Shadowlands, el Runero te ofrecerá la misión{" "}
          <a href="https://es.wowhead.com/shadowlands/quest=62799" target="_blank" rel="nofollow" className="no-icon link-faction">Los recipientes del hilo</a>.
          Consulta la guía de fabricación de equipo legendario en Shadowlands para desbloquear al Runero.
        </p>
        <h3 className="mt-4 font-semibold text-foreground text-base">
          Lista de bases de Sastrería
        </h3>
        <ul className="mt-2 grid gap-1 text-sm text-card-foreground sm:grid-cols-2">
          <li><ItemLink itemId={173245} name="Caperuza de velo lúgubre" /></li>
          <li><ItemLink itemId={173247} name="Espaldares de velo lúgubre" /></li>
          <li><ItemLink itemId={173241} name="Toga de velo lúgubre" /></li>
          <li><ItemLink itemId={173249} name="Brazales de velo lúgubre" /></li>
          <li><ItemLink itemId={173244} name="Mitones de velo lúgubre" /></li>
          <li><ItemLink itemId={173248} name="Cinturón de velo lúgubre" /></li>
          <li><ItemLink itemId={173246} name="Pantalones de velo lúgubre" /></li>
          <li><ItemLink itemId={173243} name="Sandalias de velo lúgubre" /></li>
        </ul>
        <h3 className="mt-4 font-semibold text-foreground text-base">
          Cómo fabricar bases de mayor nivel de objeto
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Cada base tiene cuatro rangos, cada uno con su barra de experiencia. Ganas experiencia al fabricar una base; al llenar la barra aprendes el siguiente rango. Fabricar un rango superior da más experiencia. Los rangos superiores piden muchos más materiales (un rango 4 suele costar unas 4 veces más que un rango 1).
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="guide-table w-full min-w-[280px] text-sm">
            <thead>
              <tr>
                <th className="text-left">Rango (nivel de objeto)</th>
                <th className="text-center">PE / fabricación</th>
                <th className="text-center">PE total para el siguiente</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="text-center">Rango 1 (190)</td><td className="text-center">25</td><td className="text-center">75</td></tr>
              <tr><td className="text-center">Rango 2 (210)</td><td className="text-center">50</td><td className="text-center">150</td></tr>
              <tr><td className="text-center">Rango 3 (225)</td><td className="text-center">75</td><td className="text-center">225</td></tr>
              <tr><td className="text-center">Rango 4 (235)</td><td className="text-center">—</td><td className="text-center">—</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <Separator className="separator-faction" />

      <section id="reactivos" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Reactivos opcionales
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Estos reactivos cambian el nivel de objeto de una armadura o arma fabricada (también puedes bajarlo usando un reactivo de nivel inferior). Las 3 opciones siguientes solo sirven para objetos de Shadowlands. Las 8 profesiones de fabricación pueden crearlos; no son exclusivos de Sastrería.
        </p>
        <ul className="mt-3 space-y-1 text-sm text-card-foreground">
          <li><SpellLink spellId={343659} name="Marca del artesano novato" /></li>
          <li><SpellLink spellId={343204} name="Marca del artesano I" /></li>
          <li><SpellLink spellId={343202} name="Marca del artesano II" /></li>
        </ul>
      </section>

      <Separator className="separator-faction" />

      <section id="armaduras" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Armaduras de tela
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Set de armadura de tela sombría (nivel 50+). Las piezas del set Encaje sombrío tienen nivel de objeto 151 y requieren nivel 60.
        </p>
        <Card className="card-faction mt-4 border border-border">
          <CardContent className="p-4">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
              Tela sombría
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-card-foreground">
              <li><SpellLink spellId={310877} name="Brazales de tela sombría" /> — nivel 50, objeto 100</li>
              <li><SpellLink spellId={310869} name="Sandalias de tela sombría" /> — nivel 50, objeto 100</li>
              <li><SpellLink spellId={310874} name="Pantalones de tela sombría" /> — nivel 52, objeto 100</li>
              <li><SpellLink spellId={310876} name="Cinturón de tela sombría" /> — nivel 52, objeto 100</li>
              <li><SpellLink spellId={310872} name="Mitones de tela sombría" /> — nivel 54, objeto 111</li>
              <li><SpellLink spellId={310873} name="Caperuza de tela sombría" /> — nivel 54, objeto 111</li>
              <li><SpellLink spellId={310871} name="Capa de tela sombría" /> — nivel 54, objeto 111</li>
              <li><SpellLink spellId={310870} name="Toga de tela sombría" /> — nivel 57, objeto 129</li>
              <li><SpellLink spellId={310875} name="Espaldares de tela sombría" /> — nivel 57, objeto 129</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="card-faction mt-4 border border-border">
          <CardContent className="p-4">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
              Encaje sombrío (nivel 60, objeto 151)
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-card-foreground">
              <li><SpellLink spellId={310904} name="Puños de encaje sombrío" /></li>
              <li><SpellLink spellId={310896} name="Vendas de pies de encaje sombrío" /></li>
              <li><SpellLink spellId={310903} name="Cordón de encaje sombrío" /></li>
              <li><SpellLink spellId={310899} name="Manoplas de encaje sombrío" /></li>
              <li><SpellLink spellId={310898} name="Capa de encaje sombrío" /></li>
              <li><SpellLink spellId={310900} name="Capucha de encaje sombrío" /></li>
              <li><SpellLink spellId={310897} name="Túnica de encaje sombrío" /></li>
              <li><SpellLink spellId={310901} name="Pantalones de encaje sombrío" /></li>
              <li><SpellLink spellId={310902} name="Manto de encaje sombrío" /></li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator className="separator-faction" />

      <section id="bolsas" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Bolsas
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Hay dos bolsas nuevas, como en BfA: la <SpellLink spellId={345985} name="Bolsa de tela sombría" /> tiene 30 espacios y la <SpellLink spellId={345986} name="Faltriquera de seda sin luz" /> tiene 32.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="guide-table w-full min-w-[320px] text-sm">
            <thead>
              <tr>
                <th className="text-left">Objeto</th>
                <th className="text-left">Materiales</th>
                <th className="text-center">Sastrería</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><SpellLink spellId={345985} name="Bolsa de tela sombría" /></td>
                <td>20× <ItemLink itemId={173202} name="Tela sombría" />, 15× <ItemLink itemId={177062} name="Hilo de penumbra" /></td>
                <td className="text-center">15</td>
              </tr>
              <tr>
                <td><SpellLink spellId={345986} name="Faltriquera de seda sin luz" /></td>
                <td>15× <ItemLink itemId={173204} name="Seda sin luz" />, 25× <ItemLink itemId={177062} name="Hilo de penumbra" /></td>
                <td className="text-center">65</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Separator className="separator-faction" />

      <section id="otros" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          Otros objetos
        </h2>
        <ul className="mt-3 space-y-1 text-sm text-card-foreground">
          <li><SpellLink spellId={334499} name="Sombrero de fiesta rosa" /> — sombrero de transfiguración.</li>
          <li><SpellLink spellId={310924} name="Venda de tela sombría" /> — venda que cura 2240 de daño en 8 s.</li>
          <li><SpellLink spellId={310923} name="Venda de tela sombría pesada" /> — venda que cura 3520 de daño en 8 s.</li>
        </ul>
      </section>
    </div>
  );
}
