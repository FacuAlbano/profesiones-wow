import { useEffect, useState } from "react";
import { extractMirrorMainContent } from "~/lib/extract-mirror-content";

interface MirrorGuideContentProps {
  /** URL absoluta de la guía en el mirror (ej. /guides-mirror/guides/bfa-tailoring/index.html) */
  mirrorUrl: string;
}

const BASE_ES = "/guides-mirror-es";
const BASE_EN = "/guides-mirror";

/**
 * Carga el HTML del mirror (primero versión española si existe, si no la inglesa),
 * extrae solo el contenido principal y lo muestra con los estilos de la app.
 */
export function MirrorGuideContent({ mirrorUrl }: MirrorGuideContentProps) {
  const [html, setHtml] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const mirrorPath = mirrorUrl.startsWith(BASE_EN)
    ? mirrorUrl.slice(BASE_EN.length).replace(/^\//, "")
    : mirrorUrl.replace(/^\//, "");
  const urlEs = `${BASE_ES}/${mirrorPath}`;
  const urlApiEs = `/api/guide-es/${mirrorPath}`;

  useEffect(() => {
    let cancelled = false;
    setError(null);
    setHtml(null);

    const tryFetch = (url: string) =>
      fetch(url).then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      });

    tryFetch(urlEs)
      .then((text) => {
        if (cancelled) return;
        setHtml(extractMirrorMainContent(text, BASE_ES));
      })
      .catch(() => {
        if (cancelled) return;
        return tryFetch(urlApiEs)
          .then((text) => {
            if (cancelled) return;
            setHtml(extractMirrorMainContent(text, "/guides-mirror-es"));
          })
          .catch(() => {
            if (cancelled) return;
            return tryFetch(mirrorUrl).then((text) => {
              if (cancelled) return;
              setHtml(extractMirrorMainContent(text, BASE_EN));
            });
          });
      })
      .catch(() => {
        if (!cancelled) setError("Error al cargar la guía");
      });

    return () => { cancelled = true; };
  }, [mirrorUrl, urlEs, urlApiEs]);

  if (error) {
    return (
      <div className="rounded-md border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive">
        No se pudo cargar la guía: {error}. Puedes abrirla directamente{" "}
        <a href={mirrorUrl} target="_blank" rel="noopener noreferrer" className="underline">
          aquí
        </a>
        .
      </div>
    );
  }

  if (!html) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center text-muted-foreground">
        Cargando guía…
      </div>
    );
  }

  return (
    <div
      className="guide-content font-sans text-foreground"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
