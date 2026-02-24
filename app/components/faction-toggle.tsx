import { useEffect } from "react";
import { getFaction, initFaction, toggleFaction } from "~/lib/theme";
import { useFaction } from "~/lib/faction-context";
import { cn } from "~/lib/utils";

function ShieldIcon() {
  return (
    <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

export function FactionToggle() {
  const { faction, setFaction } = useFaction();

  useEffect(() => {
    initFaction();
    setFaction(getFaction());
  }, [setFaction]);

  const handleToggle = () => {
    const next = toggleFaction();
    setFaction(next);
  };

  const isHorde = faction === "horde";

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isHorde ? "Cambiar a Modo Alianza" : "Cambiar a Modo Horda"}
      title={isHorde ? "Modo Alianza" : "Modo Horda"}
      className={cn(
        "flex items-center gap-2 rounded-lg border border-primary bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors duration-200 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      )}
    >
      {isHorde ? (
        <>
          <ShieldIcon />
          <span className="hidden sm:inline">Modo Alianza</span>
        </>
      ) : (
        <>
          <FlameIcon />
          <span className="hidden sm:inline">Modo Horda</span>
        </>
      )}
    </button>
  );
}
