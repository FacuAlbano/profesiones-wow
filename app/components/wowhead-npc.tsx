import { cn } from "~/lib/utils";
import { wowheadNpcUrl } from "~/lib/wowhead";
import type { NpcEntry } from "~/lib/guide-types";
import type { NpcKey } from "~/lib/alchemy-tbc-npcs";
import { ALCHEMY_TBC_NPCS } from "~/lib/alchemy-tbc-npcs";

type WowheadNpcProps = {
  /** Clave del NPC en el registro de NPCs */
  npcKey: string;
  className?: string;
  /** Registro de NPCs (por defecto: Alquimia TBC). Usar en otras guías. */
  npcs?: Record<string, NpcEntry>;
  /** Juego para enlace Wowhead */
  game?: "tbc" | "classic";
};

/**
 * Enlace a Wowhead (español) con el nombre del NPC en español (MX).
 */
export function WowheadNpc({ npcKey, className, npcs = ALCHEMY_TBC_NPCS, game = "tbc" }: WowheadNpcProps) {
  const npc = npcs[npcKey] ?? (ALCHEMY_TBC_NPCS as Record<string, NpcEntry>)[npcKey];
  if (!npc) return null;

  const href = wowheadNpcUrl(npc.npcId, game);

  const label = npc.location ? `${npc.name} ${npc.location}` : npc.name;

  return (
    <a
      href={href}
      rel="nofollow"
      target="_blank"
      className={cn("no-icon link-faction", className)}
      title={label}
    >
      {label}
    </a>
  );
}
