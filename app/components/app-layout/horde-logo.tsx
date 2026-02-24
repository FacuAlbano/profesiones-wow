import { cn } from "~/lib/utils";

const LOGO_SRC = "/images/logo-horda.png";

/** Logo Horda. Imagen desde public/images/logo-horda.png */
export function HordeLogo({
  className,
  standalone,
}: {
  className?: string;
  standalone?: boolean;
}) {
  return (
    <img
      src={LOGO_SRC}
      alt="Horda"
      className={cn("size-8 sm:size-9 object-contain", className)}
      width={36}
      height={36}
    />
  );
}
