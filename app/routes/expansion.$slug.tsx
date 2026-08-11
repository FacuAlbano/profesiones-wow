import { Outlet, useLoaderData } from "react-router";
import type { Route } from "./+types/expansion.$slug";
import { EXPANSION_SLUGS, EXPANSIONS, EXPANSION_NAMES } from "~/lib/constants";

export function loader({ params }: Route.LoaderArgs) {
  const slug = params.slug;
  if (!EXPANSION_SLUGS.includes(slug as (typeof EXPANSION_SLUGS)[number])) {
    throw new Response("Expansión no encontrada", { status: 404 });
  }
  const expansion = EXPANSIONS.find((e) => e.slug === slug);
  return {
    slug,
    name: expansion?.name ?? EXPANSION_NAMES[slug as keyof typeof EXPANSION_NAMES] ?? slug,
    logo: expansion?.logo ?? null,
  };
}

export default function ExpansionLayout() {
  const data = useLoaderData<typeof loader>();
  return <Outlet context={data} />;
}
