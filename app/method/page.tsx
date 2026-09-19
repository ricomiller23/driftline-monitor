export default function MethodPage() {
  return (
    <div className="space-y-6 max-w-4xl font-mono text-xs leading-relaxed">
      <div className="bg-bg-subtle border border-border rounded-lg p-5">
        <h1 className="text-xl font-display font-bold text-text">Displacement Definitions & Guard Rail Rules</h1>
        <p className="text-text-muted mt-1">
          Four common distortions in migration reporting and how DRIFTLINE structurally prevents them.
        </p>
      </div>

      <div className="bg-white border border-border rounded-lg p-6 space-y-4">
        <h2 className="text-sm font-display font-bold text-text uppercase">1. Stock vs Flow Disambiguation</h2>
        <p className="text-text-muted">
          A <em>stock</em> figure measures the number of displaced persons at a specific calendar date (e.g. 117.8 million at year-end 2025). A <em>flow</em> figure measures individuals moving across an interval (e.g. 14.7 million returnees over 2025). Adding stocks to flows or plotting them on the same axis is blocked by type-system invariants.
        </p>

        <h2 className="text-sm font-display font-bold text-text uppercase mt-4">2. Category Integrity</h2>
        <p className="text-text-muted">
          UNHCR counts refugees, asylum-seekers, internally displaced people (IDPs), and others in need of international protection as distinct legal classes. Collapsing them into a generic &quot;refugees&quot; bucket is legally and empirically false. Any total must expose its exact components.
        </p>

        <h2 className="text-sm font-display font-bold text-text uppercase mt-4">3. Deaths in Transit as a Minimum Floor</h2>
        <p className="text-text-muted">
          Data published by the IOM Missing Migrants Project reflects verified, documented cases where bodies or survivors corroborate fatalities. Because countless shipwrecks and wilderness deaths leave no survivors, published death tolls are permanently labelled as a <strong>documented minimum floor</strong>, never an absolute count.
        </p>

        <h2 className="text-sm font-display font-bold text-text uppercase mt-4">4. Person-First Editorial Policy</h2>
        <p className="text-text-muted">
          All copy adheres strictly to person-first guidelines (&quot;people displaced&quot;, &quot;people who migrated&quot;). Sensationalised terms such as &quot;flood&quot;, &quot;swarm&quot;, &quot;surge&quot;, or &quot;illegal&quot; are forbidden across all code and database fields.
        </p>
      </div>
    </div>
  );
}
