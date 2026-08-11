import { Link } from "react-router";
import { GuideIndex } from "~/components/guide-index";
import { ProfessionIcon } from "~/components/profession-icon";
import { NATIVE_GUIDE_VIEWS } from "~/components/guides/native-guide-views";
import { MirrorGuideContent } from "~/components/mirror-guide-content";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import {
  GUIDE_TIPOS,
  GUIDE_TIPO_LABELS,
  type ProfessionPageResolution,
} from "~/lib/resolve-profession-guide";

type ProfessionGuidePageProps = {
  slug: string;
  profSlug: string;
  expansionName: string;
  professionName: string;
  page: ProfessionPageResolution;
};

export function ProfessionGuidePage({
  slug,
  profSlug,
  expansionName,
  professionName,
  page,
}: ProfessionGuidePageProps) {
  const nativeView = page.nativeId ? NATIVE_GUIDE_VIEWS[page.nativeId] : undefined;
  const NativeGuide = nativeView?.Guide;
  const tipoLabel = GUIDE_TIPO_LABELS[page.tipo];
  const summary =
    nativeView?.summary ??
    (page.kind === "provisional"
      ? "Contenido provisional en inglés, integrado al sitio. Las guías nativas en español se irán sumando."
      : `${tipoLabel} de ${professionName} en ${expansionName}. En construcción.`);

  return (
    <div className="flex min-h-0 w-full flex-1">
      <div
        className="min-h-0 min-w-0 flex-1 overflow-y-auto overflow-x-hidden px-3 py-6 sm:px-6 sm:py-8"
        data-main-scroll
      >
        <div className="mx-auto w-full max-w-5xl">
          <div className="mb-4 flex flex-wrap items-center gap-2 sm:mb-6 sm:gap-4">
            <Button variant="link" size="sm" asChild className="min-h-[44px] shrink-0 sm:min-h-0">
              <Link to="/" className="text-muted-foreground link-faction">
                ← Inicio
              </Link>
            </Button>
            <Button variant="link" size="sm" asChild className="min-h-[44px] shrink-0 sm:min-h-0">
              <Link to={`/expansion/${slug}`} className="text-muted-foreground link-faction">
                ← {expansionName}
              </Link>
            </Button>
          </div>

          <h1 className="title-faction flex items-center gap-3 text-2xl font-semibold leading-tight xs:text-3xl sm:text-4xl md:text-5xl">
            <ProfessionIcon slug={profSlug} className="size-9 sm:size-11" />
            {professionName}
          </h1>
          <p className="mt-1 text-sm font-medium text-primary sm:text-base">{tipoLabel}</p>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">{summary}</p>

          <nav
            aria-label="Tipo de guía"
            className="mt-5 flex gap-2 overflow-x-auto pb-1 scrollbar-none [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {GUIDE_TIPOS.map((tipo) => {
              const href =
                tipo === "subida-de-nivel"
                  ? `/expansion/${slug}/profesion/${profSlug}`
                  : `/expansion/${slug}/profesion/${profSlug}/${tipo}`;
              const active = tipo === page.tipo;
              return (
                <Link
                  key={tipo}
                  to={href}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 sm:text-sm ${
                    active
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted text-muted-foreground hover:-translate-y-0.5 hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  {GUIDE_TIPO_LABELS[tipo]}
                </Link>
              );
            })}
          </nav>

          {page.kind === "provisional" ? (
            <div
              role="status"
              className="mt-5 flex flex-wrap items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-foreground animate-in fade-in slide-in-from-top-1 duration-300"
            >
              <Badge variant="secondary" className="shrink-0">
                Contenido provisional
              </Badge>
              <p className="min-w-0 flex-1 text-muted-foreground">
                Este texto todavía no es una guía nativa. Está espejado de fuentes públicas; lo
                vamos a reescribir en español.
              </p>
            </div>
          ) : null}

          <Separator className="separator-faction my-4 sm:my-6" />

          <div className="mt-6 sm:mt-8">
            {page.kind === "nativa" && NativeGuide ? (
              <>
                <NativeGuide />
                <GuideAttribution />
              </>
            ) : page.kind === "provisional" && page.mirrorUrl ? (
              <MirrorGuideContent mirrorUrl={page.mirrorUrl} />
            ) : (
              <section className="rounded-xl border border-border bg-card/60 px-4 py-10 text-center sm:px-8">
                <h2 className="title-underline-faction font-heading text-xl font-semibold text-foreground sm:text-2xl">
                  {tipoLabel}
                </h2>
                <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                  Esta sección está en construcción. La Subida de nivel de esta profesión puede
                  estar disponible mientras tanto.
                </p>
              </section>
            )}
          </div>
        </div>
      </div>

      {nativeView ? (
        <aside
          className="z-30 hidden w-56 shrink-0 flex-col self-stretch border-l border-border bg-card shadow-sm transition-colors duration-500 lg:flex"
          aria-label="En esta guía"
        >
          <nav className="sidebar-nav flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden p-4">
            <GuideIndex sections={nativeView.index} variant="sidebar" className="w-full" />
          </nav>
        </aside>
      ) : null}
    </div>
  );
}

function GuideAttribution() {
  return (
    <p className="mt-10 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground sm:text-sm">
      Inspirado en la comunidad y en fuentes públicas. Las entidades enlazan a Wowhead en español.{" "}
      <Link to="/fuentes" className="link-faction underline underline-offset-2">
        Acerca de / Fuentes
      </Link>
      .
    </p>
  );
}
