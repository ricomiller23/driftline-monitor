export class DefinitionMismatchError extends Error {
  constructor(message: string) {
    super(`[DRIFTLINE DEFINITION VIOLATION] ${message}`);
    this.name = "DefinitionMismatchError";
  }
}

export type PopulationCategory =
  | "refugees"
  | "asylum_seekers"
  | "idps"
  | "returnees"
  | "stateless"
  | "others_in_need_of_protection"
  | "unaccompanied_minors";

export type ValueType = "stock" | "flow";

export const CATEGORY_LABELS: Record<PopulationCategory, string> = {
  refugees: "Refugees (Under UNHCR/UNRWA mandate)",
  asylum_seekers: "Asylum-Seekers (Pending adjudication)",
  idps: "Internally Displaced Persons (IDPs)",
  returnees: "Returnees (Voluntary repatriations)",
  stateless: "Stateless Persons",
  others_in_need_of_protection: "Others in Need of International Protection",
  unaccompanied_minors: "Unaccompanied or Separated Children",
};

/**
 * CATEGORY INTEGRITY GUARD:
 * Summing across different population categories without an explicit component list throws!
 */
export function sumCategoriesGuard(categories: PopulationCategory[]): never {
  const unique = new Set(categories);
  if (unique.size > 1) {
    throw new DefinitionMismatchError(
      `Direct summation across distinct population categories [${Array.from(unique).join(", ")}] is prohibited. Categories must be stated with full component breakdowns.`
    );
  }
  throw new DefinitionMismatchError("Category validation required.");
}

/**
 * STOCK VS FLOW GUARD:
 * Stock (point in time) and Flow (period movement) cannot be combined or compared on a single axis.
 */
export function assertStockFlowSeparation(typeA: ValueType, typeB: ValueType): void {
  if (typeA !== typeB) {
    throw new DefinitionMismatchError(
      `Cannot combine Stock (${typeA}) and Flow (${typeB}). A stock is a point-in-time census/estimate; a flow is cumulative movement across a timeframe.`
    );
  }
}

/**
 * TOTAL DENOMINATOR RULE:
 * Any displayed total must carry its component list, and the sum must strictly equal the total.
 */
export function createAttributedTotal(components: { category: PopulationCategory; value: number }[]): {
  total: number;
  components: { category: PopulationCategory; label: string; value: number }[];
} {
  const total = components.reduce((acc, c) => acc + c.value, 0);
  return {
    total,
    components: components.map(c => ({
      category: c.category,
      label: CATEGORY_LABELS[c.category],
      value: c.value,
    }))
  };
}

/**
 * DEATHS AS A FLOOR RULE:
 * Mortality in transit is always qualified as a documented floor, never a closed total.
 */
export function formatDocumentedDeaths(count: number): { label: string; isFloor: boolean } {
  return {
    label: `At least ${count.toLocaleString()} documented deaths`,
    isFloor: true,
  };
}
