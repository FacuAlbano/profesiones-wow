import { Link } from "react-router";
import type { Route } from "./+types/fuentes";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Acerca de / Fuentes | eldonqu" },
    {
      name: "description",
      content:
        "De dónde salen las guías de Profesiones WoW: adaptación editorial, Wowhead y contenido provisional.",
    },
  ];
}

export default function FuentesPage() {
  return (
    <div className="min-h-0 w-full flex-1 overflow-y-auto px-3 py-8 sm:px-6 sm:py-12" data-main-scroll>
      <article className="mx-auto w-full max-w-2xl animate-in fade-in duration-300">
        <Button variant="link" size="sm" asChild className="mb-4 min-h-[44px] px-0 sm:min-h-0">
          <Link to="/" className="text-muted-foreground link-faction">
            ← Inicio
          </Link>
        </Button>
        <h1 className="title-faction text-3xl font-semibold leading-tight sm:text-4xl">
          Acerca de / Fuentes
        </h1>
        <p className="mt-3 text-muted-foreground">
          Profesiones WoW reúne guías de profesiones en español para jugadores hispanohablantes.
        </p>

        <Separator className="separator-faction my-8" />

        <section className="space-y-3 text-sm leading-relaxed sm:text-base">
          <h2 className="font-heading text-xl font-semibold text-foreground">Adaptación editorial</h2>
          <p className="text-muted-foreground">
            Las guías nativas se escriben por adaptación editorial: nos inspiramos en la comunidad y
            en fuentes públicas, y las reescribimos en español (con <em>vos</em>). No copiamos
            texto ni diseño de un sitio en particular.
          </p>
        </section>

        <section className="mt-8 space-y-3 text-sm leading-relaxed sm:text-base">
          <h2 className="font-heading text-xl font-semibold text-foreground">Wowhead</h2>
          <p className="text-muted-foreground">
            Materiales, objetos, recetas, NPCs y otras entidades enlazan a{" "}
            <a
              href="https://es.wowhead.com"
              target="_blank"
              rel="noreferrer noopener"
              className="link-faction underline underline-offset-2"
            >
              Wowhead en español
            </a>
            . Los nombres de entidades siguen esa fuente; los tooltips usan su script oficial.
          </p>
        </section>

        <section className="mt-8 space-y-3 text-sm leading-relaxed sm:text-base">
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Contenido provisional
          </h2>
          <p className="text-muted-foreground">
            Donde todavía no hay guía nativa podés ver contenido provisional (espejado), marcado
            con un aviso. Ese material no es la voz definitiva del sitio.
          </p>
        </section>
      </article>
    </div>
  );
}
