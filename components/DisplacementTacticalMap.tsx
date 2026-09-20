'use client';

import React, { useState } from 'react';
import { Compass, ExternalLink, ShieldCheck, Anchor, MapPin, Users } from 'lucide-react';

export interface RouteCorridor {
  id: string;
  name: string;
  region: string;
  seaOrLand: 'Sea' | 'Land';
  origin: string;
  destination: string;
  latStart: number;
  lngStart: number;
  latEnd: number;
  lngEnd: number;
  documentedArrivals2026: number;
  documentedDeathsFloor: number;
  agencyCitation: string;
  sourceUrl: string;
}

export const MONITORED_ROUTES: RouteCorridor[] = [
  {
    id: 'central-med',
    name: 'Central Mediterranean Maritime Corridor',
    region: 'North Africa → Southern Italy',
    seaOrLand: 'Sea',
    origin: 'Libya / Tunisia',
    destination: 'Lampedusa / Sicily (Italy)',
    latStart: 32.88,
    lngStart: 13.19,
    latEnd: 35.50,
    lngEnd: 12.60,
    documentedArrivals2026: 48500,
    documentedDeathsFloor: 1280,
    agencyCitation: 'IOM Missing Migrants Project & UNHCR',
    sourceUrl: 'https://missingmigrants.iom.int/'
  },
  {
    id: 'eastern-med',
    name: 'Eastern Mediterranean Aegean Corridor',
    region: 'Middle East → Greece',
    seaOrLand: 'Sea',
    origin: 'Turkey Coast',
    destination: 'Lesvos / Chios (Greece)',
    latStart: 38.42,
    lngStart: 27.14,
    latEnd: 39.10,
    lngEnd: 26.55,
    documentedArrivals2026: 22400,
    documentedDeathsFloor: 195,
    agencyCitation: 'UNHCR Operational Data Portal',
    sourceUrl: 'https://data.unhcr.org/'
  },
  {
    id: 'atlantic-canary',
    name: 'Western African Atlantic Route',
    region: 'West Africa → Canary Islands',
    seaOrLand: 'Sea',
    origin: 'Senegal / Mauritania',
    destination: 'El Hierro / Tenerife (Spain)',
    latStart: 16.03,
    lngStart: -16.50,
    latEnd: 28.29,
    lngEnd: -16.62,
    documentedArrivals2026: 28100,
    documentedDeathsFloor: 980,
    agencyCitation: 'IOM DTM & Spanish Interior Ministry',
    sourceUrl: 'https://dtm.iom.int/'
  },
  {
    id: 'darien-gap',
    name: 'Darién Gap Continental Transit Corridor',
    region: 'South America → Central America',
    seaOrLand: 'Land',
    origin: 'Necoclí (Colombia)',
    destination: 'Bajo Chiquito (Panama)',
    latStart: 8.42,
    lngStart: -76.78,
    latEnd: 8.25,
    lngEnd: -77.53,
    documentedArrivals2026: 184000,
    documentedDeathsFloor: 210,
    agencyCitation: 'Senafront (Panama) & UNHCR',
    sourceUrl: 'https://www.unhcr.org/'
  },
  {
    id: 'sudan-chad',
    name: 'Darfur Cross-Border Conflict Displacement Corridor',
    region: 'East Africa / Sahel',
    seaOrLand: 'Land',
    origin: 'El Geneina (Sudan)',
    destination: 'Adré (Chad)',
    latStart: 13.45,
    lngStart: 22.45,
    latEnd: 13.46,
    lngEnd: 22.20,
    documentedArrivals2026: 720000,
    documentedDeathsFloor: 450,
    agencyCitation: 'UNHCR Emergency Sitrep & OCHA HDX',
    sourceUrl: 'https://data.humdata.org/'
  }
];

export function DisplacementTacticalMap() {
  const [selectedRoute, setSelectedRoute] = useState<RouteCorridor>(MONITORED_ROUTES[0]);

  // Equirectangular projection
  const project = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * 100;
    const y = ((85 - lat) / 145) * 100;
    return {
      x: Math.max(4, Math.min(96, x)),
      y: Math.max(6, Math.min(94, y))
    };
  };

  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm space-y-0">
      <div className="bg-bg-subtle border-b border-border p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-display font-bold text-sm text-text flex items-center gap-2">
              <span>Global Displacement Corridors & Movement Telemetry</span>
              <span className="bg-purple-50 text-purple-800 text-[10px] font-mono px-2 py-0.5 rounded border border-purple-200">
                Stock vs Flow Isolated
              </span>
            </h3>
            <p className="text-xs text-text-muted">Documented arrivals, cross-border movements, and minimum documented mortality floors</p>
          </div>
        </div>

        <span className="text-xs font-mono bg-white border border-border px-2.5 py-1 rounded text-text-muted">
          Deaths are a documented floor, never an exhaustive total
        </span>
      </div>

      {/* SVG Canvas */}
      <div className="relative w-full h-[360px] sm:h-[420px] bg-[#EBF3FD]/40 border-b border-border overflow-hidden select-none">
        <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
          {/* World Continents Background */}
          <g fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1">
            <path d="M120 70 L280 60 L320 120 L260 200 L180 230 L130 180 Z" />
            <path d="M260 250 L340 270 L330 380 L280 430 L250 350 Z" />
            <path d="M480 80 L560 70 L580 140 L500 170 L460 140 Z" />
            <path d="M480 190 L580 190 L600 320 L530 380 L470 270 Z" />
            <path d="M590 70 L850 80 L880 200 L760 260 L620 190 Z" />
            <path d="M780 320 L880 320 L870 400 L770 390 Z" />
          </g>

          {/* Render Route Vectors */}
          {MONITORED_ROUTES.map((r) => {
            const start = project(r.latStart, r.lngStart);
            const end = project(r.latEnd, r.lngEnd);
            const isSel = selectedRoute.id === r.id;

            // Map percent to 1000x500 svg coordinates
            const x1 = (start.x / 100) * 1000;
            const y1 = (start.y / 100) * 500;
            const x2 = (end.x / 100) * 1000;
            const y2 = (end.y / 100) * 500;

            return (
              <g key={r.id}>
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={isSel ? "#0E63C4" : "#94A3B8"}
                  strokeWidth={isSel ? 3.5 : 2}
                  strokeDasharray={r.seaOrLand === 'Sea' ? "4,4" : "none"}
                />
              </g>
            );
          })}
        </svg>

        {/* Route Endpoint Pins */}
        {MONITORED_ROUTES.map((r) => {
          const pt = project(r.latEnd, r.lngEnd);
          const isSel = selectedRoute.id === r.id;

          return (
            <div
              key={r.id}
              onClick={() => setSelectedRoute(r)}
              style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
            >
              <div className={`p-1.5 rounded-full shadow-md transition-transform group-hover:scale-125 ${
                isSel ? 'bg-brand text-white ring-4 ring-blue-200' : 'bg-slate-700 text-white'
              }`}>
                {r.seaOrLand === 'Sea' ? <Anchor className="w-3.5 h-3.5" /> : <MapPin className="w-3.5 h-3.5" />}
              </div>

              <div className="opacity-0 group-hover:opacity-100 pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 bg-text text-white p-2.5 rounded-lg text-[10px] font-mono shadow-xl transition-opacity z-30">
                <div className="font-bold text-white text-[11px] truncate">{r.name}</div>
                <div className="text-slate-300">{r.region}</div>
                <div className="text-blue-300 font-bold mt-1">2026 Flow: {r.documentedArrivals2026.toLocaleString()} recorded</div>
                <div className="text-red-300 font-bold">Documented Mortality: ≥ {r.documentedDeathsFloor.toLocaleString()} (Floor)</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Corridor Dossier */}
      <div className="p-5 bg-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-blue-50 text-blue-800 border border-blue-200">
              {selectedRoute.seaOrLand.toUpperCase()} CORRIDOR
            </span>
            <span className="text-xs font-mono text-text-muted">
              {selectedRoute.origin} ➔ {selectedRoute.destination}
            </span>
          </div>

          <h4 className="text-lg font-bold font-display text-text">{selectedRoute.name}</h4>
          <p className="text-xs text-text-muted font-mono">
            Documented Flow: <strong className="text-text">{selectedRoute.documentedArrivals2026.toLocaleString()}</strong> arrivals · Documented Mortality Floor: <strong className="text-danger">≥ {selectedRoute.documentedDeathsFloor.toLocaleString()}</strong> documented lives lost (minimum floor)
          </p>
        </div>

        <div className="flex items-center space-x-3 self-stretch md:self-auto justify-between md:justify-end border-t md:border-t-0 pt-3 md:pt-0 border-border">
          <a
            href={selectedRoute.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-bg-subtle border border-border hover:border-brand/40 text-xs font-mono text-brand font-medium hover:underline shadow-xs"
          >
            <span>{selectedRoute.agencyCitation}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
