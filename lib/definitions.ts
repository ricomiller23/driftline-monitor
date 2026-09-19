import { PopulationCategory, ValueType } from "./category";

export interface DisplacementFigure {
  id: string;
  sourceId: string;
  authorityName: string;
  country: string;
  iso3166: string;
  admin1?: string;
  populationCategory: PopulationCategory;
  valueType: ValueType;
  value: number;
  valueLower?: number;
  valueUpper?: number;
  isEstimate: boolean;
  asOfDate: string;
  publishedAt: string;
  documentUrl: string;
  isSeed: boolean;
}

export interface Route {
  id: string;
  name: string;
  region: string;
  originCountries: string[];
  destinationCountries: string[];
  seaOrLand: "sea" | "land" | "mixed";
}

export interface Movement {
  id: string;
  routeId: string;
  routeName: string;
  sourceId: string;
  periodStart: string;
  periodEnd: string;
  detections?: number;
  arrivals?: number;
  returns?: number;
  interceptions?: number;
  isEstimate: boolean;
  documentUrl: string;
}

export interface Incident {
  id: string;
  routeId?: string;
  routeName?: string;
  sourceId: string;
  occurredAt: string;
  kind: "death" | "rescue" | "interception" | "shipwreck" | "pushback_reported";
  deaths?: number;
  missing?: number;
  locationDescription: string;
  documentUrl: string;
}

export interface PolicyChange {
  id: string;
  country: string;
  announcedAt: string;
  effectiveAt?: string;
  summary: string;
  documentUrl: string;
}
