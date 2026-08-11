import { redirect } from "react-router";
import {
  EXPANSION_NAMES,
  EXPANSION_SLUGS,
  PROFESSIONS,
  type ExpansionSlug,
  type ProfessionSlug,
} from "~/lib/constants";
import { classicHubRedirectPath } from "~/lib/classic-hub";
import { parseGuideTipo, resolveProfessionGuide } from "~/lib/resolve-profession-guide";

export function loadProfessionGuidePage(params: {
  slug: string;
  profSlug: string;
  tipo?: string;
}) {
  const classicRedirect = classicHubRedirectPath(
    params.slug,
    params.profSlug,
    params.tipo,
  );
  if (classicRedirect) {
    throw redirect(classicRedirect);
  }
  if (!EXPANSION_SLUGS.includes(params.slug as ExpansionSlug)) {
    throw new Response("Expansión no encontrada", { status: 404 });
  }
  if (params.tipo === "subida-de-nivel") {
    throw redirect(`/expansion/${params.slug}/profesion/${params.profSlug}`);
  }

  const tipo = parseGuideTipo(params.tipo);
  if (tipo === null) {
    throw new Response("Tipo de guía no encontrado", { status: 404 });
  }

  const profession = PROFESSIONS.find((p) => p.slug === params.profSlug);
  const page = resolveProfessionGuide(
    params.slug as ExpansionSlug,
    params.profSlug as ProfessionSlug,
    tipo,
  );

  return {
    slug: params.slug,
    profSlug: params.profSlug,
    expansionName: EXPANSION_NAMES[params.slug as keyof typeof EXPANSION_NAMES] ?? params.slug,
    professionName: profession?.name ?? params.profSlug,
    page,
  };
}
