import { NextResponse } from "next/server";
import { GLOBAL_DISPLACEMENT_FIGURES, FALLBACK_MOVEMENTS, FALLBACK_INCIDENTS } from "@/lib/fallback-data";

export async function GET() {
  return NextResponse.json({
    figures: GLOBAL_DISPLACEMENT_FIGURES,
    movements: FALLBACK_MOVEMENTS,
    incidents: FALLBACK_INCIDENTS,
    asOf: new Date().toISOString()
  });
}
