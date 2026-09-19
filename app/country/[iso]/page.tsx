import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GLOBAL_DISPLACEMENT_FIGURES } from "@/lib/fallback-data";

export default function CountryViewPage({ params }: { params: { iso: string } }) {
  return (
    <div className="space-y-6 font-mono text-xs">
      <Link href="/" className="inline-flex items-center text-brand hover:underline">
        <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to Surveillance Board
      </Link>
      <div className="bg-white border border-border rounded-lg p-6">
        <h1 className="text-xl font-display font-bold text-text">Country Dossier: {params.iso.toUpperCase()}</h1>
        <p className="text-text-muted mt-1">Multi-agency displacement telemetry and legal categorization.</p>
      </div>
    </div>
  );
}
