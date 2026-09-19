"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, RefreshCw } from "lucide-react";
import { useRefreshOnOpen } from "@/lib/freshness";

export function Navbar() {
  const pathname = usePathname();
  const { isStale, refresh } = useRefreshOnOpen();

  return (
    <header className="border-b border-border bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-md bg-brand flex items-center justify-center text-white font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-extrabold text-lg text-text tracking-tight">DRIFT<span className="text-brand">LINE</span></span>
                <span className="hidden md:inline-block ml-2 text-xs font-mono text-text-muted px-1.5 py-0.5 rounded bg-bg-subtle border border-border">MIGRATION·DISPLACEMENT</span>
              </div>
            </Link>
          </div>

          <nav className="flex items-center space-x-1 sm:space-x-4 text-sm font-medium">
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-md transition-colors ${
                pathname === "/" ? "bg-brand-soft text-brand font-semibold" : "text-text-muted hover:text-text hover:bg-bg-subtle"
              }`}
            >
              Surveillance Board
            </Link>
            <Link
              href="/compare"
              className={`px-3 py-1.5 rounded-md transition-colors ${
                pathname === "/compare" ? "bg-brand-soft text-brand font-semibold" : "text-text-muted hover:text-text hover:bg-bg-subtle"
              }`}
            >
              Stock vs Flow
            </Link>
            <Link
              href="/method"
              className={`px-3 py-1.5 rounded-md transition-colors ${
                pathname === "/method" ? "bg-brand-soft text-brand font-semibold" : "text-text-muted hover:text-text hover:bg-bg-subtle"
              }`}
            >
              Definitions & Method
            </Link>
            <Link
              href="/archive"
              className={`px-3 py-1.5 rounded-md transition-colors ${
                pathname === "/archive" ? "bg-brand-soft text-brand font-semibold" : "text-text-muted hover:text-text hover:bg-bg-subtle"
              }`}
            >
              Archive
            </Link>
            <Link
              href="/admin"
              className={`px-3 py-1.5 rounded-md transition-colors ${
                pathname === "/admin" ? "bg-brand-soft text-brand font-semibold" : "text-text-muted hover:text-text hover:bg-bg-subtle"
              }`}
            >
              Admin
            </Link>

            <div className="h-4 w-px bg-border mx-1" />

            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-live mr-1.5 animate-pulse" />
                LIVE
              </span>
              {isStale && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono bg-amber-50 text-amber-700 border border-amber-200">
                  STALE
                </span>
              )}
              <button
                onClick={() => refresh()}
                className="p-1.5 text-text-muted hover:text-brand hover:bg-bg-subtle rounded-md transition-colors"
                title="Refresh Displacement Telemetry"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
