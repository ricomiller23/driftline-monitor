import { DisplacementFigure, Route, Movement, Incident } from "./definitions";

export const GLOBAL_DISPLACEMENT_FIGURES: DisplacementFigure[] = [
  // End-2025 Stock Figures (UNHCR Global Trends / Refugee Data Finder)
  {
    id: "fig-global-refugees-2025",
    sourceId: "unhcr-stats",
    authorityName: "UNHCR Refugee Data Finder",
    country: "Global Total",
    iso3166: "WLD",
    populationCategory: "refugees",
    valueType: "stock",
    value: 41600000,
    isEstimate: true,
    asOfDate: "2025-12-31",
    publishedAt: "2026-06-18T00:00:00Z",
    documentUrl: "https://www.unhcr.org/refugee-statistics",
    isSeed: true
  },
  {
    id: "fig-global-asylum-seekers-2025",
    sourceId: "unhcr-stats",
    authorityName: "UNHCR Refugee Data Finder",
    country: "Global Total",
    iso3166: "WLD",
    populationCategory: "asylum_seekers",
    valueType: "stock",
    value: 9000000,
    isEstimate: true,
    asOfDate: "2025-12-31",
    publishedAt: "2026-06-18T00:00:00Z",
    documentUrl: "https://www.unhcr.org/refugee-statistics",
    isSeed: true
  },
  {
    id: "fig-global-idps-2025",
    sourceId: "idmc",
    authorityName: "IDMC / UNHCR Joint IDP Registry",
    country: "Global Total",
    iso3166: "WLD",
    populationCategory: "idps",
    valueType: "stock",
    value: 68700000,
    isEstimate: true,
    asOfDate: "2025-12-31",
    publishedAt: "2026-05-14T00:00:00Z",
    documentUrl: "https://www.internal-displacement.org/",
    isSeed: true
  },
  {
    id: "fig-global-others-2025",
    sourceId: "unhcr-stats",
    authorityName: "UNHCR Refugee Data Finder",
    country: "Global Total",
    iso3166: "WLD",
    populationCategory: "others_in_need_of_protection",
    valueType: "stock",
    value: 6400000,
    isEstimate: true,
    asOfDate: "2025-12-31",
    publishedAt: "2026-06-18T00:00:00Z",
    documentUrl: "https://www.unhcr.org/refugee-statistics",
    isSeed: true
  },
  // Flow Figures: Returns in 2025
  {
    id: "fig-global-refugee-returns-2025",
    sourceId: "unhcr-trends",
    authorityName: "UNHCR Global Trends (UN News Release)",
    country: "Global Total",
    iso3166: "WLD",
    populationCategory: "returnees",
    valueType: "flow",
    value: 4400000,
    isEstimate: true,
    asOfDate: "2025-12-31",
    publishedAt: "2026-06-18T00:00:00Z",
    documentUrl: "https://www.unhcr.org/global-trends",
    isSeed: true
  },
  {
    id: "fig-global-idp-returns-2025",
    sourceId: "unhcr-trends",
    authorityName: "UNHCR Global Trends",
    country: "Global Total",
    iso3166: "WLD",
    populationCategory: "returnees",
    valueType: "flow",
    value: 10300000,
    isEstimate: true,
    asOfDate: "2025-12-31",
    publishedAt: "2026-06-18T00:00:00Z",
    documentUrl: "https://www.unhcr.org/global-trends",
    isSeed: true
  }
];

export const FALLBACK_ROUTES: Route[] = [
  {
    id: "route-c-med",
    name: "Central Mediterranean Sea Route",
    region: "Mediterranean",
    originCountries: ["Libya", "Tunisia", "Algeria"],
    destinationCountries: ["Italy", "Malta"],
    seaOrLand: "sea"
  },
  {
    id: "route-darien",
    name: "Darién Gap Jungle Corridor",
    region: "Americas",
    originCountries: ["Colombia", "Venezuela", "Haiti", "Ecuador"],
    destinationCountries: ["Panama"],
    seaOrLand: "land"
  },
  {
    id: "route-w-balkans",
    name: "Western Balkan Land Corridor",
    region: "Europe",
    originCountries: ["Syria", "Afghanistan", "Turkey"],
    destinationCountries: ["Hungary", "Croatia", "Slovenia"],
    seaOrLand: "land"
  }
];

export const FALLBACK_MOVEMENTS: Movement[] = [
  {
    id: "mov-cmed-2026",
    routeId: "route-c-med",
    routeName: "Central Mediterranean Sea Route",
    sourceId: "frontex",
    periodStart: "2026-01-01",
    periodEnd: "2026-08-31",
    detections: 42150,
    arrivals: 38900,
    interceptions: 14200,
    isEstimate: false,
    documentUrl: "https://www.frontex.europa.eu/"
  },
  {
    id: "mov-darien-2026",
    routeId: "route-darien",
    routeName: "Darién Gap Jungle Corridor",
    sourceId: "iom-dtm",
    periodStart: "2026-01-01",
    periodEnd: "2026-08-31",
    arrivals: 238400,
    isEstimate: true,
    documentUrl: "https://dtm.iom.int/"
  }
];

export const FALLBACK_INCIDENTS: Incident[] = [
  {
    id: "inc-cmed-2026-08",
    routeId: "route-c-med",
    routeName: "Central Mediterranean Sea Route",
    sourceId: "missing-migrants",
    occurredAt: "2026-08-22T06:00:00Z",
    kind: "shipwreck",
    deaths: 18,
    missing: 34,
    locationDescription: "Off the coast of Sfax, Tunisia",
    documentUrl: "https://missingmigrants.iom.int/"
  },
  {
    id: "inc-darien-2026-07",
    routeId: "route-darien",
    routeName: "Darién Gap Jungle Corridor",
    sourceId: "missing-migrants",
    occurredAt: "2026-07-15T12:00:00Z",
    kind: "death",
    deaths: 8,
    missing: 2,
    locationDescription: "Tuqueza river crossing, Darién province",
    documentUrl: "https://missingmigrants.iom.int/"
  }
];

export const DRIFTLINE_SOURCES = [
  { id: "unhcr-stats", name: "UNHCR Refugee Data Finder API", tier: "A", kind: "api", url: "https://www.unhcr.org/refugee-statistics", cadence: "quarterly", enabled: true, licenceNote: "UN Open Data Terms" },
  { id: "unhcr-glance", name: "UNHCR Figures at a Glance", tier: "A", kind: "html", url: "https://www.unhcr.org/about-unhcr/overview/figures-glance", cadence: "quarterly", enabled: true, licenceNote: "UNHCR Public Information" },
  { id: "unhcr-midyear", name: "UNHCR Mid-Year Trends", tier: "A", kind: "html", url: "https://www.unhcr.org/mid-year-trends", cadence: "annual", enabled: true, licenceNote: "UNHCR Public Report" },
  { id: "unhcr-opdata", name: "UNHCR Operational Data Portal", tier: "A", kind: "api", url: "https://data.unhcr.org/", cadence: "daily", enabled: true, licenceNote: "UNHCR Data License" },
  { id: "unhcr-trends", name: "UNHCR Global Trends Report", tier: "A", kind: "html", url: "https://www.unhcr.org/global-trends", cadence: "annual", enabled: true, licenceNote: "UNHCR Official Flagship" },
  { id: "iom-dtm", name: "IOM Displacement Tracking Matrix (DTM)", tier: "A", kind: "api", url: "https://dtm.iom.int/", cadence: "varies", enabled: true, licenceNote: "IOM Data Protection Guidelines" },
  { id: "missing-migrants", name: "IOM Missing Migrants Project", tier: "A", kind: "api", url: "https://missingmigrants.iom.int/", cadence: "realtime", enabled: true, licenceNote: "Open Data Commons PDDL" },
  { id: "idmc", name: "Internal Displacement Monitoring Centre (IDMC)", tier: "A", kind: "api", url: "https://www.internal-displacement.org/", cadence: "quarterly", enabled: true, licenceNote: "NRC / IDMC Open Access" },
  { id: "unocha-hdx", name: "UN OCHA Humanitarian Data Exchange", tier: "A", kind: "api", url: "https://data.humdata.org/", cadence: "daily", enabled: true, licenceNote: "Creative Commons / HDX" },
  { id: "reliefweb", name: "ReliefWeb API (Displacement)", tier: "B", kind: "api", url: "https://api.reliefweb.int/v1/reports", cadence: "realtime", enabled: true, licenceNote: "UN OCHA Open Data Terms" },
  { id: "unrwa", name: "UNRWA Registration Statistical Bulletin", tier: "A", kind: "html", url: "https://www.unrwa.org/", cadence: "weekly", enabled: true, licenceNote: "UNRWA Mandate" },
  { id: "frontex", name: "Frontex Border Detections", tier: "B", kind: "html", url: "https://www.frontex.europa.eu/", cadence: "monthly", enabled: true, licenceNote: "European Union Open Data" },
  { id: "eurostat-asylum", name: "Eurostat Asylum & Managed Migration", tier: "B", kind: "api", url: "https://ec.europa.eu/eurostat/api/dissemination/", cadence: "monthly", enabled: true, licenceNote: "Eurostat Data Policy" },
  { id: "mpi", name: "Migration Policy Institute Research", tier: "B", kind: "html", url: "https://www.migrationpolicy.org/", cadence: "weekly", enabled: true, licenceNote: "Research Attribution" },
  { id: "icrc", name: "ICRC Movement Restoring Family Links", tier: "B", kind: "rss", url: "https://www.icrc.org/", cadence: "realtime", enabled: true, licenceNote: "ICRC Public Material" },
  { id: "un-news-mig", name: "UN News Migration Beat", tier: "B", kind: "rss", url: "https://news.un.org/feed/subscribe/en/news/all/rss.xml", cadence: "daily", enabled: true, licenceNote: "UN News Terms of Use" }
];
