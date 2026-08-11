import { useState } from "react";
import { cn } from "~/lib/utils";
import { wowheadItemUrl, wowheadIconUrl } from "~/lib/wowhead";
import type { MaterialEntry } from "~/lib/guide-types";
import type { MaterialKey } from "~/lib/alchemy-tbc-materials";
import { ALCHEMY_TBC_MATERIALS } from "~/lib/alchemy-tbc-materials";

type WowheadItemProps = {
  /** Clave del material en el registro de materiales */
  materialKey: string;
  /** Cantidad opcional (ej. 65x) */
  quantity?: number;
  /** Clases CSS para el enlace */
  className?: string;
  /** Mostrar icono (desde Zamimg) */
  showIcon?: boolean;
  /** Registro de materiales (por defecto: Alquimia TBC). Usar en otras guías (ej. Herboristería). */
  materials?: Record<string, MaterialEntry>;
  /** Juego para enlace Wowhead (tbc / classic) */
  game?: "tbc" | "classic";
};

/**
 * Enlace a Wowhead (español) con el nombre del material en español (MX).
 * El icono se carga desde wow.zamimg.com.
 */
export function WowheadItem({ materialKey, quantity, className, showIcon = true, materials = ALCHEMY_TBC_MATERIALS, game = "tbc" }: WowheadItemProps) {
  const mat = materials[materialKey] ?? (ALCHEMY_TBC_MATERIALS as Record<string, MaterialEntry>)[materialKey];
  if (!mat) return null;

  const [iconError, setIconError] = useState(false);
  const href = wowheadItemUrl(mat.itemId, game);
  const label = quantity != null ? `${quantity}x ${mat.name}` : mat.name;
  const iconSrc = wowheadIconUrl(mat.icon);

  return (
    <a
      href={href}
      rel="nofollow"
      target="_blank"
      className={cn("no-icon link-faction inline-flex items-center gap-1.5", className)}
      title={mat.name}
    >
      {showIcon && !iconError && (
        <img
          src={iconSrc}
          alt=""
          className="size-5 shrink-0 object-contain align-middle"
          width={20}
          height={20}
          onError={() => setIconError(true)}
        />
      )}
      {label}
    </a>
  );
}
