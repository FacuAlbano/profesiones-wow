import { useEffect } from "react";
import { useFaction } from "~/lib/faction-context";
import { getFaction, initFaction, setFaction } from "~/lib/theme";
import type { Faction } from "~/lib/theme";
import { AllianceLogo } from "~/components/app-layout/alliance-logo";
import { HordeLogo } from "~/components/app-layout/horde-logo";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

/** Sonido opcional "clang" al elegir facción (Web Audio API, sin archivos). */
function playFactionSound() {
  if (typeof window === "undefined") return;
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(180, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.08);
    osc.type = "sine";
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.12);
  } catch {
    /* ignore */
  }
}

export function FactionSelector() {
  const { faction, setFaction: setCtxFaction } = useFaction();

  useEffect(() => {
    initFaction();
    setCtxFaction(getFaction());
  }, [setCtxFaction]);

  const choose = (next: Faction) => {
    if (next === faction) return;
    setFaction(next);
    setCtxFaction(next);
    playFactionSound();
  };

  return (
    <div className="flex items-center gap-2">
      <span className="hidden text-sm font-medium opacity-90 sm:inline">
        Elegí tu facción
      </span>
      <div
        className="flex rounded-lg p-0.5"
        role="group"
        aria-label="Elegir facción"
      >
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => choose("alliance")}
          aria-label="Modo Alianza"
          aria-pressed={faction === "alliance"}
          title="Modo Alianza"
          className={cn(
            "min-h-[44px] min-w-[44px] size-9 border p-2 transition-all duration-300 hover:scale-105 sm:min-h-0 sm:min-w-0 sm:size-10",
            "focus-visible:ring-[#d4af37] focus-visible:ring-offset-header",
            faction === "alliance"
              ? "border-[#d4af37]/70 !bg-[#0f172a]"
              : "border-[#1e3a8a]/50 !bg-[#1e3a8a]/40 hover:border-[#d4af37]/50"
          )}
        >
          <AllianceLogo standalone className="size-7 sm:size-8" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => choose("horde")}
          aria-label="Modo Horda"
          aria-pressed={faction === "horde"}
          title="Modo Horda"
          className={cn(
            "min-h-[44px] min-w-[44px] size-9 border p-2 transition-all duration-300 hover:scale-105 sm:min-h-0 sm:min-w-0 sm:size-10",
            "focus-visible:ring-[#dc2626] focus-visible:ring-offset-header",
            faction === "horde"
              ? "border-[#dc2626]/80 !bg-[#7f1d1d]"
              : "border-[#7f1d1d]/50 !bg-[#7f1d1d]/40 hover:border-[#dc2626]/60"
          )}
        >
          <HordeLogo standalone className="size-7 sm:size-8" />
        </Button>
      </div>
    </div>
  );
}
