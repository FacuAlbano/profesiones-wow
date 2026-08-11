import type { ComponentProps, ReactNode } from "react";
import { Link } from "react-router";
import { TomTomMacro } from "~/components/guides/tomtom-macro";
import { Card, CardContent } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { WowheadEntityLink } from "~/components/wowhead-entity";
import { WowheadItem as WowheadItemBase } from "~/components/wowhead-item";
import { WowheadNpc as WowheadNpcBase } from "~/components/wowhead-npc";
import type { GuideIndexSection } from "~/lib/guide-types";
import { TWW_SUBIDA_MATERIALS } from "~/lib/tww-subida-materials";
import { TWW_SUBIDA_NPCS } from "~/lib/tww-subida-npcs";
import type { TwwSubidaSpec } from "~/lib/tww-subida-types";

function WowheadItem(
  props: Omit<ComponentProps<typeof WowheadItemBase>, "materials" | "game">,
) {
  return (
    <WowheadItemBase
      materials={TWW_SUBIDA_MATERIALS}
      game="the-war-within"
      {...props}
    />
  );
}

function WowheadNpc(props: Omit<ComponentProps<typeof WowheadNpcBase>, "npcs" | "game">) {
  return <WowheadNpcBase npcs={TWW_SUBIDA_NPCS} game="the-war-within" {...props} />;
}

const RICH_TOKEN = /\{(r|i|n|h):([^}]+)\}/g;

function renderRichText(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(RICH_TOKEN.source, "g");
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    const [, kind, payload] = match;
    if (kind === "r" || kind === "h") {
      const [id, name] = payload.split("|");
      const tipo = kind === "r" ? "receta" : "habilidad";
      nodes.push(
        <WowheadEntityLink
          key={`${kind}-${id}-${match.index}`}
          entity={{ tipo, id: Number(id), juego: "the-war-within" }}
        >
          {name}
        </WowheadEntityLink>,
      );
    } else if (kind === "i") {
      const [materialKey, quantity] = payload.split(":");
      nodes.push(
        <WowheadItem
          key={`${materialKey}-${match.index}`}
          materialKey={materialKey}
          quantity={quantity ? Number(quantity) : undefined}
        />,
      );
    } else {
      nodes.push(<WowheadNpc key={`${payload}-${match.index}`} npcKey={payload} />);
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) {
    nodes.push(text.slice(last));
  }
  return nodes;
}

const FACTIONS = [
  { id: "horda", label: "Horda" },
  { id: "alianza", label: "Alianza" },
] as const;

export function twwSubidaIndex(spec: TwwSubidaSpec): GuideIndexSection[] {
  return [
    { id: "intro", label: "Introducción" },
    { id: "instructores", label: spec.vendorKey ? "Entrenador y vendedor" : "Entrenador" },
    { id: "lista-compras", label: "Lista de compras" },
    ...spec.ranges.map((range) => {
      const id = `${range.from}-${range.to}`;
      return { id, label: id };
    }),
    { id: "waypoints", label: "TomTom y pin" },
    { id: "raciales", label: "Raciales" },
    { id: "cruces", label: "Otras guías" },
  ];
}

export function TwwSubidaGuide({ spec }: { spec: TwwSubidaSpec }) {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <section id="intro" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          {spec.title}
        </h2>
        {spec.intro.map((paragraph) => (
          <p
            key={paragraph}
            className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {renderRichText(paragraph)}
          </p>
        ))}
      </section>

      <Separator className="separator-faction" />

      <section id="instructores" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          {spec.vendorKey ? "Entrenador y vendedor" : "Entrenador"}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">{renderRichText(spec.trainerNote)}</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {FACTIONS.map((faction) => (
            <Card key={faction.id} className="card-faction border border-border">
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                  {faction.label}
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-card-foreground">
                  <li>
                    Entrenador: <WowheadNpc npcKey={spec.trainerKey} />
                  </li>
                  {spec.vendorKey ? (
                    <li>
                      Vendedor: <WowheadNpc npcKey={spec.vendorKey} />
                    </li>
                  ) : null}
                  {spec.extraNpcs?.map((npc) => (
                    <li key={npc.key}>
                      {npc.role}: <WowheadNpc npcKey={npc.key} />
                    </li>
                  ))}
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
        <p className="mt-2 text-sm text-muted-foreground">{renderRichText(spec.shoppingNote)}</p>
        {spec.shopping.length > 0 ? (
          <Card className="card-faction mt-4 border border-border">
            <CardContent className="p-4">
              <ul className="space-y-1 text-sm text-card-foreground">
                {spec.shopping.map((item) => (
                  <li key={item.materialKey}>
                    <WowheadItem materialKey={item.materialKey} quantity={item.quantity} />
                    {item.vendorKey ? (
                      <>
                        {" "}
                        — lo vende <WowheadNpc npcKey={item.vendorKey} />
                      </>
                    ) : null}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ) : null}
      </section>

      {spec.ranges.map((range) => {
        const id = `${range.from}-${range.to}`;
        return (
          <div key={id}>
            <Separator className="separator-faction" />
            <section id={id} className="scroll-mt-24">
              <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
                {id}
              </h2>
              {range.intro ? (
                <p className="mt-2 text-sm text-muted-foreground">{renderRichText(range.intro)}</p>
              ) : null}
              <ul className="mt-4 space-y-3 text-sm text-card-foreground">
                {range.steps.map((step) => (
                  <li key={`${id}-${step.title ?? step.text}`}>
                    {step.title ? <strong>{step.title}: </strong> : null}
                    {renderRichText(step.text)}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        );
      })}

      <Separator className="separator-faction" />

      <section id="waypoints" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">
          TomTom y pin
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">{renderRichText(spec.tomtomNote)}</p>
        <div className="mt-4">
          {spec.tomtom ? (
            <TomTomMacro macro={spec.tomtom} />
          ) : (
            <span className="rounded-full border border-dashed border-border px-3 py-1.5 text-xs text-muted-foreground">
              Pin del mapa: próximamente
            </span>
          )}
        </div>
      </section>

      <Separator className="separator-faction" />

      <section id="raciales" className="scroll-mt-24">
        <h2 className="guide-division font-heading text-xl font-semibold sm:text-2xl">Raciales</h2>
        <p className="mt-2 text-sm text-muted-foreground">{renderRichText(spec.racials)}</p>
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
              to={`/expansion/the-war-within/profesion/${spec.slug}/recetas-y-conocimiento`}
              className="link-faction"
            >
              Recetas y conocimiento
            </Link>
          </li>
          <li>
            <Link
              to={`/expansion/the-war-within/profesion/${spec.slug}/especializaciones`}
              className="link-faction"
            >
              Especializaciones
            </Link>
          </li>
          <li>
            <Link
              to={`/expansion/the-war-within/profesion/${spec.slug}/farming`}
              className="link-faction"
            >
              Farming
            </Link>
          </li>
          <li>
            <Link
              to={`/expansion/the-war-within/profesion/${spec.pairing.slug}`}
              className="link-faction"
            >
              {spec.pairing.name}
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
