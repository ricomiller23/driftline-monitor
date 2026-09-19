import { GLOBAL_DISPLACEMENT_FIGURES } from "@/lib/fallback-data";

export default function ComparePage() {
  const stock = GLOBAL_DISPLACEMENT_FIGURES.filter((f) => f.valueType === "stock");
  const flow = GLOBAL_DISPLACEMENT_FIGURES.filter((f) => f.valueType === "flow");

  return (
    <div className="space-y-6 font-mono text-xs">
      <div className="bg-bg-subtle border border-border rounded-lg p-5">
        <h1 className="text-xl font-display font-bold text-text">Stock vs. Flow Comparative Partition</h1>
        <p className="text-text-muted mt-1">
          A stock is a snapshot count at a moment in time (e.g. 117.8M forcibly displaced). A flow is a count of movement over a period (e.g. 14.7M returns during 2025). They answer different questions and are strictly partitioned.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-border rounded-lg p-5 space-y-3">
          <div className="flex justify-between items-center border-b border-border pb-2">
            <h2 className="text-sm font-bold text-text uppercase">Stock Figures (Census / Registry)</h2>
            <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 font-bold">STOCK</span>
          </div>
          <div className="space-y-2">
            {stock.map((s) => (
              <div key={s.id} className="p-3 bg-bg-subtle rounded flex justify-between items-center">
                <div>
                  <strong className="text-text block">{s.populationCategory.toUpperCase()}</strong>
                  <span className="text-text-muted text-[11px]">{s.authorityName}</span>
                </div>
                <span className="font-bold text-text num-tabular text-sm">{(s.value / 1000000).toFixed(1)}M</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-border rounded-lg p-5 space-y-3">
          <div className="flex justify-between items-center border-b border-border pb-2">
            <h2 className="text-sm font-bold text-text uppercase">Flow Figures (Period Movements)</h2>
            <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold">FLOW</span>
          </div>
          <div className="space-y-2">
            {flow.map((f) => (
              <div key={f.id} className="p-3 bg-bg-subtle rounded flex justify-between items-center">
                <div>
                  <strong className="text-text block">{f.populationCategory.toUpperCase()}</strong>
                  <span className="text-text-muted text-[11px]">{f.authorityName}</span>
                </div>
                <span className="font-bold text-emerald-700 num-tabular text-sm">{(f.value / 1000000).toFixed(1)}M</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
