import { Link, useLoaderData } from "react-router";
import type { Route } from "./+types/expansion.$slug.profesion.$profSlug";
import { EXPANSION_SLUGS } from "~/lib/constants";
import { PROFESSIONS } from "~/lib/constants";

const EXPANSION_NAMES: Record<string, string> = {
  "the-war-within": "The War Within",
  midnight: "Midnight",
};

export function meta({ params }: Route.MetaArgs) {
  const expansionName = EXPANSION_NAMES[params.slug] ?? params.slug;
  const profession = PROFESSIONS.find((p) => p.slug === params.profSlug);
  const title = profession
    ? `${profession.name} - ${expansionName} | eldonqu`
    : `Profesión | eldonqu`;
  return [{ title }, { name: "description", content: `Guía de ${profession?.name ?? params.profSlug} para ${expansionName}.` }];
}

export function loader({ params }: Route.LoaderArgs) {
  if (!EXPANSION_SLUGS.includes(params.slug as (typeof EXPANSION_SLUGS)[number])) {
    throw new Response("Expansión no encontrada", { status: 404 });
  }
  const profession = PROFESSIONS.find((p) => p.slug === params.profSlug);
  return {
    slug: params.slug,
    profSlug: params.profSlug,
    expansionName: EXPANSION_NAMES[params.slug] ?? params.slug,
    professionName: profession?.name ?? params.profSlug,
  };
}

export default function ProfessionPage() {
  const { slug, expansionName, professionName } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950/90 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 flex items-center gap-4">
          <Link to="/" className="text-stone-500 hover:text-stone-300 transition text-sm">
            ← Inicio
          </Link>
          <Link
            to={`/expansion/${slug}`}
            className="text-stone-500 hover:text-stone-300 transition text-sm"
          >
            ← {expansionName}
          </Link>
          <h1 className="text-lg font-semibold text-amber-400 sm:text-xl">
            {professionName}
          </h1>
        </div>
      </header>

      <main className="flex-1 mx-auto w-full max-w-5xl px-4 py-8 sm:px-6">
        <p className="text-stone-400">
          Guía de nivelado y especializaciones. (Contenido en construcción; aquí irán imágenes y enlaces a Wowhead.)
        </p>
      </main>
    </div>
  );
}
