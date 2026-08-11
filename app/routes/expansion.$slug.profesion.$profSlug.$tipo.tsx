import { useLoaderData } from "react-router";
import type { Route } from "./+types/expansion.$slug.profesion.$profSlug.$tipo";
import { ProfessionGuidePage } from "~/components/guides/profession-guide-page";
import { EXPANSION_NAMES } from "~/lib/constants";
import { PROFESSIONS } from "~/lib/constants";
import { loadProfessionGuidePage } from "~/lib/profession-guide-loader";
import { GUIDE_TIPO_LABELS, parseGuideTipo } from "~/lib/resolve-profession-guide";

export function meta({ params }: Route.MetaArgs) {
  const expansionName = EXPANSION_NAMES[params.slug as keyof typeof EXPANSION_NAMES] ?? params.slug;
  const profession = PROFESSIONS.find((p) => p.slug === params.profSlug);
  const tipo = parseGuideTipo(params.tipo);
  const tipoLabel = tipo ? GUIDE_TIPO_LABELS[tipo] : params.tipo;
  const title = profession
    ? `${profession.name} · ${tipoLabel} · ${expansionName} | eldonqu`
    : "Profesión | eldonqu";
  return [
    { title },
    {
      name: "description",
      content: `${tipoLabel} de ${profession?.name ?? params.profSlug} para ${expansionName}.`,
    },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  return loadProfessionGuidePage({
    slug: params.slug,
    profSlug: params.profSlug,
    tipo: params.tipo,
  });
}

export default function ProfessionTipoPage() {
  const data = useLoaderData<typeof loader>();
  return <ProfessionGuidePage {...data} />;
}
