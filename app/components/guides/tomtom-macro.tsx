import { useState } from "react";
import { Button } from "~/components/ui/button";

type TomTomMacroProps = {
  macro: string;
};

/**
 * Macro TomTom copiable. El pin del mapa del sitio puede quedar en “próximamente”.
 */
export function TomTomMacro({ macro }: TomTomMacroProps) {
  const [copied, setCopied] = useState(false);

  async function copyMacro() {
    try {
      await navigator.clipboard.writeText(macro);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="space-y-3">
      <div className="overflow-x-auto rounded-lg border border-border bg-muted/40 p-3">
        <pre className="font-mono text-xs leading-relaxed text-foreground sm:text-sm">
          {macro}
        </pre>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button type="button" size="sm" onClick={copyMacro} className="min-h-[44px] sm:min-h-0">
          {copied ? "Copiado" : "Copiar TomTom"}
        </Button>
        <span className="rounded-full border border-dashed border-border px-3 py-1.5 text-xs text-muted-foreground">
          Pin del mapa: próximamente
        </span>
      </div>
    </div>
  );
}
