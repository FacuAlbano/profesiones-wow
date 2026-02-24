import * as React from "react";
import type { Faction } from "~/lib/theme";

const FactionContext = React.createContext<{
  faction: Faction;
  setFaction: (f: Faction) => void;
} | null>(null);

export function FactionProvider({
  children,
  initialFaction,
}: {
  children: React.ReactNode;
  initialFaction: Faction;
}) {
  const [faction, setFactionState] = React.useState<Faction>(initialFaction);

  const setFaction = React.useCallback((f: Faction) => {
    setFactionState(f);
  }, []);

  return (
    <FactionContext.Provider value={{ faction, setFaction }}>
      {children}
    </FactionContext.Provider>
  );
}

export function useFaction() {
  const ctx = React.useContext(FactionContext);
  if (!ctx) throw new Error("useFaction must be used within FactionProvider");
  return ctx;
}
