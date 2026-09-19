import { NextResponse } from "next/server";
import { DRIFTLINE_SOURCES } from "@/lib/fallback-data";

export async function GET() {
  return NextResponse.json({
    status: "healthy",
    sourcesCount: DRIFTLINE_SOURCES.length,
    activeSources: DRIFTLINE_SOURCES.filter(s => s.enabled).length
  });
}
