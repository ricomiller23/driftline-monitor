# DRIFTLINE
## Global Displacement, Migration & Border Monitor

A light-theme, always-fresh public data dashboard tracking global displacement stocks, flows, and transit corridors with strict UNHCR category isolation.

### Core Invariants
1. **Stock vs Flow Isolated:** Point-in-time census figures and interval movement flows cannot be combined.
2. **Category Integrity:** Closed enum categories (refugees, asylum-seekers, IDPs, returnees) are never collapsed.
3. **Total Denominator Rule:** Any displayed total must carry its complete component list whose sum strictly matches.
4. **Deaths as Floor:** Mortality in transit is always presented as a verified minimum floor.
5. **Person-First Language:** Respectful, neutral framing throughout.
