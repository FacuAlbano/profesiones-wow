import { Link, useLoaderData } from "react-router";
import type { Route } from "./+types/guia.$";
import { Button } from "~/components/ui/button";
import { MirrorGuideContent } from "~/components/mirror-guide-content";

const BASE = "/guides-mirror";

export function meta({ params }: Route.MetaArgs) {
  const path = params["*"] ?? "";
  const title = path ? `Guía | eldonqu` : "Guías | eldonqu";
  return [{ title }, { name: "description", content: "Guías de profesiones WoW en español." }];
}

export function loader({ params }: Route.LoaderArgs) {
  const path = params["*"] ?? "";
  const mirrorUrl = path ? `${BASE}/${path}` : null;
  return { mirrorUrl, path };
}

export default function GuiaPage() {
  const { mirrorUrl, path } = useLoaderData<typeof loader>();

  if (!path || !mirrorUrl) {
    return (
      <div className="min-h-0 flex-1 overflow-y-auto px-3 py-6 sm:px-6 sm:py-8" data-main-scroll>
        <div className="mx-auto max-w-5xl">
          <Button variant="link" size="sm" asChild>
            <Link to="/guia" className="text-muted-foreground link-faction">
              ← Índice de guías
            </Link>
          </Button>
          <p className="mt-4 text-muted-foreground">Indica una ruta de guía (ej. /guia/guides/bfa-tailoring/index.html).</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-3 py-6 sm:px-6 sm:py-8" data-main-scroll>
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 flex flex-wrap items-center gap-2 sm:mb-6">
          <Button variant="link" size="sm" asChild className="min-h-[44px] shrink-0 sm:min-h-0">
            <Link to="/" className="text-muted-foreground link-faction">
              ← Inicio
            </Link>
          </Button>
          <Button variant="link" size="sm" asChild className="min-h-[44px] shrink-0 sm:min-h-0">
            <Link to="/guia" className="text-muted-foreground link-faction">
              ← Índice de guías
            </Link>
          </Button>
        </div>
        <MirrorGuideContent mirrorUrl={mirrorUrl} />
      </div>
    </div>
  );
}
