export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-subtle mt-16 py-8 text-xs text-text-muted font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p>
            <strong>DRIFTLINE</strong> — Who is displaced, where, and who is counting — in the agencies' own categories.
          </p>
          <div className="flex items-center space-x-3 text-[11px]">
            <span>Light Theme Invariant</span>
            <span>•</span>
            <span>Stock vs Flow Isolated</span>
            <span>•</span>
            <span>Deaths as Documented Floor</span>
          </div>
        </div>
        <p className="text-text-faint text-[11px] leading-relaxed">
          <strong>Mandatory Neutrality & Person-First Statement:</strong> The product reports displacement and policy. It does not endorse policy positions or recommend action. Person-first language is strictly enforced (&quot;people displaced by conflict&quot;, &quot;people who migrated&quot;). Documented deaths in transit represent minimum verified floors from forensic documentation, not comprehensive mortality totals.
        </p>
      </div>
    </footer>
  );
}
