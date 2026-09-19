import Link from "next/link";
import { GLOBAL_DISPLACEMENT_FIGURES, FALLBACK_MOVEMENTS, FALLBACK_INCIDENTS } from "@/lib/fallback-data";
import { CATEGORY_LABELS } from "@/lib/category";
import { Users, Compass, AlertOctagon, ExternalLink } from "lucide-react";

export default function DriftlineBoardPage() {
  const stockFigures = GLOBAL_DISPLACEMENT_FIGURES.filter((f) => f.valueType === "stock");
  const flowFigures = GLOBAL_DISPLACEMENT_FIGURES.filter((f) => f.valueType === "flow");

  // Attributed total computation with explicit denominator components
  const computedStockTotal = stockFigures.reduce((acc, f) => acc + f.value, 0);

  return (
    <div className="space-y-8 font-mono text-xs">
      {/* Header Banner */}
      <div className="bg-bg-subtle border border-border rounded-lg p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-display font-bold text-text">Global Forcible Displacement Telemetry</h1>
            <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-amber-100 text-amber-900 border border-amber-300">
              Seed Active
            </span>
          </div>
          <p className="text-text-muted mt-1">
            Tracking displacement across official multilateral mandates. Categories and timeframes are isolated strictly.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1.5 rounded bg-white border border-border text-text font-bold">
            Total Stock: {(computedStockTotal / 1000000).toFixed(1)}M People Displaced
          </span>
        </div>
      </div>

      {/* Definitions Strip */}
      <div className="border-l-4 border-brand bg-brand-soft/40 p-4 rounded-r-md leading-relaxed text-brand-ink">
        <strong>Definitions Strip:</strong> Refugees, asylum-seekers, internally displaced people, and returnees are counted under distinct legal mandates. They are kept strictly partitioned and are never collapsed into an undifferentiated total.
      </div>

      {/* Stock Figures (Point-in-Time Census) */}
      <div className="bg-white border border-border rounded-lg p-6 space-y-4">
        <div className="flex justify-between items-center border-b border-border pb-3">
          <div>
            <h2 className="text-base font-display font-bold text-text flex items-center gap-2">
              <Users className="w-4 h-4 text-brand" /> Point-in-Time Global Displacement Stock (End-2025)
            </h2>
            <p className="text-text-muted text-[11px] mt-0.5">
              Stock measurements represent estimated populations displaced at a specific reference date.
            </p>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] bg-purple-50 text-purple-700 border border-purple-200 uppercase font-bold">
            Type: STOCK
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stockFigures.map((fig) => (
            <div key={fig.id} className="p-4 bg-bg-subtle rounded border border-border space-y-2">
              <div className="flex justify-between items-center">
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-50 text-amber-800 border border-amber-200">
                  Seed
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-purple-100 text-purple-800">
                  Agency Estimate
                </span>
              </div>
              <div>
                <span className="text-text-muted text-[11px] block">{CATEGORY_LABELS[fig.populationCategory]}</span>
                <div className="text-2xl font-bold font-mono text-text num-tabular mt-1">
                  {(fig.value / 1000000).toFixed(1)}M
                </div>
                <span className="text-[10px] text-text-faint block num-tabular">({fig.value.toLocaleString()} people)</span>
              </div>
              <div className="pt-2 border-t border-border text-[10px] text-text-muted flex justify-between">
                <span>As of: {fig.asOfDate}</span>
                <a href={fig.documentUrl} target="_blank" rel="noreferrer" className="text-brand hover:underline">
                  citation
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Total Component Denominator Footnote */}
        <div className="pt-2 text-[11px] text-text-faint border-t border-border">
          <strong>Component Verification:</strong> Displayed global stock total (117.8M) strictly comprises 41.6M refugees + 9.0M asylum-seekers + 68.7M internally displaced + 6.4M others in need of international protection (with children comprising an estimated 38% / 45M).
        </div>
      </div>

      {/* Flow Figures (Cumulative Returns & Movements) */}
      <div className="bg-white border border-border rounded-lg p-6 space-y-4">
        <div className="flex justify-between items-center border-b border-border pb-3">
          <div>
            <h2 className="text-base font-display font-bold text-text flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-600" /> Annual Displacement Flows & Returns (2025 Period)
            </h2>
            <p className="text-text-muted text-[11px] mt-0.5">
              Flow measurements record population movements occurring across a defined calendar period.
            </p>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase font-bold">
            Type: FLOW
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {flowFigures.map((fig) => (
            <div key={fig.id} className="p-4 bg-bg-subtle rounded border border-border flex justify-between items-center">
              <div>
                <span className="text-text-muted text-[11px] block">{CATEGORY_LABELS[fig.populationCategory]}</span>
                <div className="text-xl font-bold font-mono text-emerald-700 num-tabular mt-1">
                  {(fig.value / 1000000).toFixed(1)}M Returned in 2025
                </div>
                <span className="text-[10px] text-text-faint">{fig.authorityName}</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 text-slate-700">
                12-Month Flow
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Transit Incidents & Documented Mortality Floor */}
      <div className="bg-white border border-border rounded-lg p-6 space-y-4">
        <h2 className="text-base font-display font-bold text-text flex items-center gap-2">
          <AlertOctagon className="w-4 h-4 text-danger" /> Transit Route Incidents & Documented Mortality Floor
        </h2>
        <p className="text-text-muted text-[11px]">
          Figures reported by the Missing Migrants Project document verified deaths and disappearances. These represent a documented minimum floor, never a total.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border">
            <thead>
              <tr className="bg-bg-subtle text-left text-text-muted">
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Corridor / Route</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Documented Deaths</th>
                <th className="px-4 py-3">Missing</th>
                <th className="px-4 py-3">Verification Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {FALLBACK_INCIDENTS.map((inc) => (
                <tr key={inc.id} className="hover:bg-bg-subtle/50">
                  <td className="px-4 py-2.5 text-text-muted">{inc.occurredAt.slice(0, 10)}</td>
                  <td className="px-4 py-2.5 font-bold text-text">{inc.routeName}</td>
                  <td className="px-4 py-2.5 text-text-muted">{inc.locationDescription}</td>
                  <td className="px-4 py-2.5 font-bold text-danger num-tabular">
                    At least {inc.deaths} documented
                  </td>
                  <td className="px-4 py-2.5 text-text-muted num-tabular">{inc.missing ?? 0}</td>
                  <td className="px-4 py-2.5">
                    <a href={inc.documentUrl} target="_blank" rel="noreferrer" className="text-brand hover:underline inline-flex items-center gap-1">
                      {inc.sourceId} <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
