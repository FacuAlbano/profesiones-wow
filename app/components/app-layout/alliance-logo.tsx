import { cn } from "~/lib/utils";

const LOGO_SRC = "/images/logo-alianza.png";

/** Logo Alianza (león). Imagen desde public/images/logo-alianza.png */
export function AllianceLogo({
  className,
  standalone,
}: {
  className?: string;
  standalone?: boolean;
}) {
  return (
    <img
      src={LOGO_SRC}
      alt="Alianza"
      className={cn("size-8 sm:size-9 object-contain", className)}
      width={36}
      height={36}
    />
  );
}
