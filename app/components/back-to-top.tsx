import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "~/components/ui/button";

const SCROLL_THRESHOLD = 400;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <Button
      type="button"
      size="icon"
      variant="default"
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className="glow-on-hover fixed z-50 h-12 w-12 min-h-[48px] min-w-[48px] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 sm:bottom-6 sm:right-6 sm:h-11 sm:w-11 sm:min-h-0 sm:min-w-0"
      style={{
        bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))",
        right: "calc(1rem + env(safe-area-inset-right, 0px))",
      }}
    >
      <ChevronUp className="size-5" />
    </Button>
  );
}
