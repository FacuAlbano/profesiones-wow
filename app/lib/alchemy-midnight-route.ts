export type SubidaRange = {
  from: number;
  to: number;
};

export type ShoppingItem = {
  materialKey: string;
  quantity: number;
};

/** Tope de Alquimia en Midnight. */
export const MIDNIGHT_ALCHEMY_CAP = 100;

export const ALCHEMY_MIDNIGHT_RANGES: readonly SubidaRange[] = [
  { from: 1, to: 20 },
  { from: 20, to: 27 },
  { from: 27, to: 50 },
  { from: 50, to: 100 },
];

/**
 * Lista de compras de la ruta 1→tope (ruta recomendada de pociones en 50-100).
 * Sin precios: las cantidades son estimadas y dejan holgura para recetas amarillas.
 */
export const ALCHEMY_MIDNIGHT_SHOPPING: readonly ShoppingItem[] = [
  { materialKey: "tranquilityBloom", quantity: 940 },
  { materialKey: "sanguithorn", quantity: 15 },
  { materialKey: "moteOfLight", quantity: 92 },
  { materialKey: "moteOfWildMagic", quantity: 4 },
  { materialKey: "argentleaf", quantity: 244 },
  { materialKey: "moteOfPrimalEnergy", quantity: 4 },
  { materialKey: "manaLily", quantity: 3 },
  { materialKey: "azeroot", quantity: 240 },
  { materialKey: "sunglassVial", quantity: 660 },
];

export function subidaRangeCoverage(ranges: readonly SubidaRange[]) {
  const sorted = [...ranges].sort((a, b) => a.from - b.from || a.to - b.to);
  if (sorted.length === 0) {
    return { start: null, end: null, gaps: [{ from: 1, to: MIDNIGHT_ALCHEMY_CAP }] };
  }

  const gaps: SubidaRange[] = [];
  for (let i = 1; i < sorted.length; i++) {
    const prev = sorted[i - 1];
    const next = sorted[i];
    if (next.from > prev.to) {
      gaps.push({ from: prev.to, to: next.from });
    }
  }

  return {
    start: sorted[0].from,
    end: sorted[sorted.length - 1].to,
    gaps,
  };
}
