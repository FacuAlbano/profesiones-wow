import { useState, type ReactNode } from "react";
import { cn } from "~/lib/utils";
import { wowheadEntity, wowheadIconUrl, type WowheadEntity } from "~/lib/wowhead";

type WowheadEntityLinkProps = {
  entity: WowheadEntity;
  children: ReactNode;
  className?: string;
  icon?: string;
  title?: string;
};

/**
 * Enlace genérico a Wowhead ES con tooltip oficial (power.js).
 */
export function WowheadEntityLink({
  entity,
  children,
  className,
  icon,
  title,
}: WowheadEntityLinkProps) {
  const link = wowheadEntity(entity);
  const [iconError, setIconError] = useState(false);
  const iconSrc = icon ? wowheadIconUrl(icon) : null;

  return (
    <a
      href={link.href}
      data-wowhead={link.dataWowhead}
      rel="nofollow"
      target="_blank"
      title={title}
      className={cn("no-icon link-faction inline-flex items-center gap-1.5", className)}
    >
      {iconSrc && !iconError && (
        <img
          src={iconSrc}
          alt=""
          className="size-5 shrink-0 object-contain align-middle"
          width={20}
          height={20}
          onError={() => setIconError(true)}
        />
      )}
      {children}
    </a>
  );
}
