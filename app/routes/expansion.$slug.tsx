import { Link, useLoaderData } from "react-router";
import type { Route } from "./+types/expansion.$slug";
import { EXPANSION_SLUGS } from "~/lib/constants";
import { PROFESSIONS } from "~/lib/constants";

const EXPANSION_NAMES: Record<string, string> = {
  "the-war-within": "The War Within",
  midnight: "Midnight",
};

export function meta({ params }: Route.MetaArgs) {
  const name = EXPANSION_NAMES[params.slug] ?? params.slug;
  return [
    { title: `Guías ${name} | Profesiones WoW - eldonqu` },
    { name: "description", content: `Guías de profesiones de ${name} en español.` },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  const slug = params.slug;
  if (!EXPANSION_SLUGS.includes(slug as (typeof EXPANSION_SLUGS)[number])) {
    throw new Response("Expansión no encontrada", { status: 404 });
  }
  return { slug, name: EXPANSION_NAMES[slug] ?? slug };
}

export default function ExpansionPage() {
  const { slug, name: displayName } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950/90 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 flex items-center gap-4">
          <Link
            to="/"
            className="text-stone-500 hover:text-stone-300 transition text-sm"
          >
            ← Inicio
          </Link>
          <h1 className="text-lg font-semibold text-amber-400 sm:text-xl">
            {displayName}
          </h1>
        </div>
      </header>

      <main className="flex-1 mx-auto w-full max-w-5xl px-4 py-8 sm:px-6">
        <p className="text-stone-400 mb-8">
          Guías de nivelado y especializaciones por profesión. (Contenido en construcción.)
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {PROFESSIONS.map((prof) => (
            <li key={prof.slug}>
              <Link
                to={`/expansion/${slug}/profesion/${prof.slug}`}
                className="block rounded-xl border border-stone-800 bg-stone-900/50 p-4 transition hover:border-amber-600/50 hover:bg-stone-900"
              >
                <span className="font-medium text-stone-200">{prof.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
