import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FALLBACK_ROUTES } from "@/lib/fallback-data";

export default function RouteViewPage({ params }: { params: { id: string } }) {
  const route = FALLBACK_ROUTES.find((r) => r.id === params.id) ?? FALLBACK_ROUTES[0];
  return (
    <div className="space-y-6 font-mono text-xs">
      <Link href="/" className="inline-flex items-center text-brand hover:underline">
        <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to Board
      </Link>
      <div className="bg-white border border-border rounded-lg p-6">
        <h1 className="text-xl font-display font-bold text-text">{route.name}</h1>
        <p className="text-text-muted mt-1">Corridor Telemetry: {route.region} ({route.seaOrLand.toUpperCase()})</p>
      </div>
    </div>
  );
}
