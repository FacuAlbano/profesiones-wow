import type { NpcEntry } from "~/lib/guide-types";
import type { WowheadGame } from "~/lib/wowhead";
import { WowheadEntityLink } from "~/components/wowhead-entity";

type WowheadNpcProps = {
  npcKey: string;
  npcs: Record<string, NpcEntry>;
  className?: string;
  game?: WowheadGame;
};

/**
 * NPC de un registro de guía → entidad Wowhead.
 */
export function WowheadNpc({ npcKey, npcs, className, game = "tbc" }: WowheadNpcProps) {
  const npc = npcs[npcKey];
  if (!npc) return null;

  const label = npc.location ? `${npc.name} ${npc.location}` : npc.name;

  return (
    <WowheadEntityLink
      entity={{ tipo: "npc", id: npc.npcId, juego: game }}
      title={label}
      className={className}
    >
      {label}
    </WowheadEntityLink>
  );
}
