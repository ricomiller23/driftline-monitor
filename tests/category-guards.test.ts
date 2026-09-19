import { describe, it, expect } from "vitest";
import { sumCategoriesGuard, assertStockFlowSeparation, createAttributedTotal, formatDocumentedDeaths, DefinitionMismatchError } from "../lib/category";
import { GLOBAL_DISPLACEMENT_FIGURES } from "../lib/fallback-data";

describe("DRIFTLINE — Category & Stock/Flow Invariant Tests", () => {
  it("strictly blocks direct arithmetic summing across distinct population categories", () => {
    expect(() => sumCategoriesGuard(["refugees", "idps"])).toThrow(DefinitionMismatchError);
  });

  it("strictly partitions stock and flow figures on separate axes", () => {
    expect(() => assertStockFlowSeparation("stock", "flow")).toThrow(DefinitionMismatchError);
    expect(() => assertStockFlowSeparation("stock", "stock")).not.toThrow();
  });

  it("enforces attributed total denominator rule where sum matches total", () => {
    const stockItems = GLOBAL_DISPLACEMENT_FIGURES.filter(f => f.valueType === "stock");
    const result = createAttributedTotal(stockItems.map(s => ({ category: s.populationCategory, value: s.value })));
    
    expect(result.total).toBe(125700000);
    expect(result.components.length).toBe(4);
    const recomputed = result.components.reduce((acc, c) => acc + c.value, 0);
    expect(recomputed).toBe(result.total);
  });

  it("verifies deaths are qualified as a documented minimum floor", () => {
    const formatted = formatDocumentedDeaths(18);
    expect(formatted.isFloor).toBe(true);
    expect(formatted.label).toContain("At least 18 documented deaths");
  });
});
