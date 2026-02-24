import { Link } from "react-router";
import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Profesiones WoW - Guías en español | eldonqu" },
    {
      name: "description",
      content:
        "Guías de profesiones de World of Warcraft en español. The War Within y más.",
    },
  ];
}

/** Expansiones disponibles (rutas y títulos). Se irán añadiendo guías por expansión. */
const EXPANSIONS = [
  { slug: "the-war-within", name: "The War Within", short: "TWW" },
  { slug: "midnight", name: "Midnight", short: "Midnight" },
  // Futuro: Classic Era, TBC, MoP, etc.
] as const;

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 border-b border-stone-800 bg-stone-950/90 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
          <h1 className="text-lg font-semibold text-amber-400 sm:text-xl">
            Profesiones WoW
          </h1>
          <p className="mt-0.5 text-sm text-stone-500">Guías en español · eldonqu</p>
        </div>
      </header>

      <main className="flex-1 mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
        <section className="text-center py-12 sm:py-16">
          <h2 className="text-3xl font-bold text-stone-100 sm:text-4xl">
            Página de profesiones de eldonqu
          </h2>
          <p className="mt-4 text-stone-400 max-w-xl mx-auto">
            Guías de profesiones de World of Warcraft en español. Elige una expansión para ver nivelado y especializaciones.
          </p>
        </section>

        <section className="mt-10">
          <h3 className="text-sm font-medium uppercase tracking-wider text-stone-500 mb-4">
            Expansiones
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {EXPANSIONS.map((exp) => (
              <li key={exp.slug}>
                <Link
                  to={`/expansion/${exp.slug}`}
                  className="block rounded-xl border border-stone-800 bg-stone-900/50 p-5 transition hover:border-amber-600/50 hover:bg-stone-900"
                >
                  <span className="font-semibold text-stone-200">{exp.name}</span>
                  <span className="ml-2 text-xs text-stone-500">({exp.short})</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-16 pt-8 border-t border-stone-800 text-center text-sm text-stone-500">
          Guías basadas en{" "}
          <a
            href="https://www.wow-professions.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-amber-500 hover:underline"
          >
            wow-professions.com
          </a>{" "}
          · Traducidas y adaptadas al español · eldonqu
        </footer>
      </main>
    </div>
  );
}
