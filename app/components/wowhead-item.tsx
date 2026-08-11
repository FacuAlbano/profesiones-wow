import type { MaterialEntry } from "~/lib/guide-types";
import type { WowheadGame } from "~/lib/wowhead";
import { WowheadEntityLink } from "~/components/wowhead-entity";

type WowheadItemProps = {
  materialKey: string;
  materials: Record<string, MaterialEntry>;
  quantity?: number;
  className?: string;
  showIcon?: boolean;
  game?: WowheadGame;
};

/**
 * Material u objeto de un registro de guía → entidad Wowhead.
 */
export function WowheadItem({
  materialKey,
  materials,
  quantity,
  className,
  showIcon = true,
  game = "tbc",
}: WowheadItemProps) {
  const mat = materials[materialKey];
  if (!mat) return null;

  const label = quantity != null ? `${quantity}x ${mat.name}` : mat.name;

  return (
    <WowheadEntityLink
      entity={{ tipo: "material", id: mat.itemId, juego: game }}
      icon={showIcon ? mat.icon : undefined}
      title={mat.name}
      className={className}
    >
      {label}
    </WowheadEntityLink>
  );
}
