---
type: electron
atom: PROTOCOL
audience: [management]
orbit: 2
language: llm
status: ACTIVE
last_updated: 2026-04-03
owns: |
  Legal entity map: TSV holding → TTT/FCA → Sapiens/CNMV → TGL/Seychelles → Technologies/IAR.
  Ownership chain. Cap table (31 shareholders, 3 groups). SHA governance thresholds.
  BU-to-entity mapping. Arb partnership cap table restructuring. WASP cost basis.
source:
  - knowledge/CAP_TABLE.md
  - 260110 Shareholder Strategy/output/260116_GROUP_STRUCTURE.md
cross_refs:
  - electron: PHENOTYPE--business-units
    why: "Each BU maps to a legal entity; entity structure constrains BU independence"
  - satellite: REGULATORY-ARCHITECTURE
    why: "Licenses held per entity determine which BU activities are legally possible"
  - electron: PHENOTYPE--prop-bu
    why: "Prop capital deployed through TTT balance sheet"
  - electron: GENOTYPE--vbm
    why: "Transfer pricing flows between BU entities feed VBM waterfall"
  - atom: PROTOCOL
    why: "Group structure must enable symbiotic model, not extractive ownership"
  - atom: DEVELOP
    why: "Arb partnership restructures cap table → replaces deadwood with contributing partner"
derived_from: [A9, T27, A3]
protocol_component: [Settlement Layer]
protocol_layer: Application
protocol_piece: Protocol
---

# Group Structure — The Legal Entity Map

> Tradeslide Ventures Limited holds four operating entities. Each maps to a BU. The cap table has three groups: Founders+Team (35%), Syndicate (25%), Deadwood (40%). Arb partnership targets replacing Deadwood with a contributing exchange member.

## Abbreviation Key

| Abbreviation | Entity | Role |
|---|---|---|
| **TSV** | Tradeslide Ventures Limited (UK 07998591) | HoldCo. 100% owns all operating entities. DWX lives here. |
| **TSTT** | Tradeslide Trading Tech Ltd (FCA FRN 586466) | UK RegCo. Dealing on own account + PM. INDX economy lives here. |
| **TTL** | Tradeslide Technologies Ltd (FCA FRN 1005483, IAR of TSTT) | UK TechCo. darwinexzero.com worldwide. |
| **Sapiens** | Sapiens Markets EU SdV, S.A. (CNMV #311) | Legacy EU RegCo. darwinex.com/eu/. Shutting down (CNMV fine). |
| **TS Europe** | Tradeslide Europe Ltd (CySEC CIF, pre-approved 2 Mar 2026) | Future EU RegCo. Matched principal + PM. NO dealing on own account. Replaces Sapiens. |
| **TGL** | Tradeslide Global Ltd (FSA Seychelles) | Non-EU/DeFi broker. |

## Legal Entity Hierarchy

```
TSV — Tradeslide Ventures Limited (UK 07998591) — HoldCo
│   DWX token (equity/security) lives here
│
├── TSTT — Tradeslide Trading Tech Ltd — FCA FRN 586466
│   │   https://register.fca.org.uk/s/firm?id=001b000000NMcTBAA1
│   │   Retails via https://www.darwinex.com/ (outside EU)
│   │   INDX economy lives here (matching engine, challenges, prop, MM)
│   ├── Matching Rails (dealing as principal, PM, TRS, hedging)
│   ├── Prop (dealing on own account, CCP capital)
│   └── Market Making (facing members + 3rd parties)
│
├── Sapiens — Sapiens Markets EU SdV, S.A. — CNMV #311
│   │   https://www.cnmv.es/Portal/Consultas/ESI/ESIS?nif=A10537348
│   │   Retails via https://www.darwinex.com/eu/ (EU)
│   └── EU Retail Broker — SHUTTING DOWN (CNMV fine, €1.048M total)
│
├── TS Europe — Tradeslide Europe Ltd — CySEC CIF (pre-approved 2 Mar 2026)
│   │   Replaces Sapiens for EU retail
│   │   Matched principal + PM — NO dealing on own account
│   └── EU Distribution Node (pass-through to TSTT, risk-flat)
│
├── TGL — Tradeslide Global Ltd — FSA Seychelles
│   └── Non-EU/DeFi Broker
│
└── TTL — Tradeslide Technologies Ltd — FCA FRN 1005483 (IAR of TSTT)
    │   https://register.fca.org.uk/s/firm?id=0014G00003DUpqUQAT
    │   Offers https://www.darwinexzero.com/ worldwide
    └── Data Rails (Zero — SaaS, education, unregulated)
```

## BU → Entity Mapping

| BU | Entity | License | Regulatory Status |
|----|--------|---------|-------------------|
| **Data Rails** | TTL (Tradeslide Technologies) | IAR of TSTT / None own | UNREGULATED |
| **Matching Rails** | TSTT | FCA — dealing as principal + PM | REGULATED |
| **Prop + Market Making** | TSTT | FCA — dealing on own account | REGULATED |
| **EU Retail Broker (legacy)** | Sapiens | CNMV — dealing + PM + client money | SHUTTING DOWN |
| **EU Distribution (future)** | TS Europe | CySEC — matched principal + PM. NO dealing on own account | PRE-APPROVED |
| **Non-EU/DeFi Broker** | TGL | FSA Seychelles | REGULATED |
| **HoldCo / DWX** | TSV | Not regulated (UK company law) | UNREGULATED |

## Token → Entity Mapping

| Token | Entity | Why |
|---|---|---|
| **INDX** (utility, flow, e×X) | **TSTT** | Matching engine, challenge escrow, prop, MM all require dealing on own account (FCA). INDX economy operates through TSTT's regulated infrastructure. |
| **DWX** (security, stock, e^X) | **TSV** | DWX = equity in the holding company. Cap table (27,751 shares, SHA). INDX→DWX conversion = earning into TSV ownership. |

### Critical distinction: TS Europe CANNOT host INDX
TS Europe carries matched principal + PM but NO dealing on own account. It is a distribution node — passes orders to TSTT, bears no market risk. It cannot run a prop book, cannot market-make, cannot operate the matching engine. INDX must live where dealing on own account exists = TSTT.

## Cap Table Summary

### Share Structure

| Metric | Value |
|--------|-------|
| Total fully diluted shares | 27,751 |
| Last round price (2021) | EUR 657/share |
| Post-money valuation (2021) | EUR 18.18M |
| Total capital raised (all rounds) | ~EUR 9.13M |
| Share class | All A Ordinary (B converted Jun 2019) |

### Ownership Groups

| Group | Undiluted % | Fully Diluted % | Parties | Board Seats |
|-------|-----------|----------------|---------|-------------|
| **Founders + Team** | 33.74% | 35.35% | 14 | 2 (Javier, Juan) |
| **Syndicate** | 25.38% | 24.76% | 11 | 2 (Stefan, Jaime) + 1 (Ignacio SA) |
| **Deadwood** | 40.88% | 40.03% | 7 | 0 |
| **Effective control** | **59.12%** | **60.11%** | F+S combined | 5/5 seats |

### Top 5 Shareholders (Fully Diluted)

| Party | % FD | Group | WASP (EUR) |
|-------|------|-------|------------|
| Pinorena Capital OU | 19.52% | Deadwood | 590.11 |
| Javier Colon Bolea | 10.36% | Founders | 121.97 |
| Bipicol AG | 7.95% | Founders | 249.88 |
| Ideon Financial Solutions SL | 7.56% | Deadwood | 219.93 |
| Talayape SL | 6.01% | Deadwood | 412.58 |

### Colón Family Aggregate: 31.16% FD

## SHA Governance — Key Thresholds

| Threshold | Requirement | Practical Impact |
|-----------|-------------|-----------------|
| **66% of directors** (Special Directors Resolution) | Share transfers, contracts >EUR 100K, acquisitions | Achievable: Founders (2) + Syndicate (2) = 4/5 |
| **85% of shares** (Special Shareholders Resolution) | New share issuance, director changes | **Pinorena (19.52%) can VETO** |
| **ROFR (30 days)** | Any share sale triggers right of first refusal | Any shareholder can step in |
| **2/3 of shares** | Unsubscribed new shares to third party | ~33.4% needed to block |

## Arb Partnership — Cap Table Restructuring

### Strategic Logic

| Problem | Solution |
|---------|----------|
| 40% deadwood shareholders — optionality + blocking power, zero contribution | Arb acquires 25% via secondary buyback from Deadwood |
| No upfront cash available | Funded by Arb operational savings (EUR 800K-1.2M/18mo est.) |
| Pinorena SHA breach (non-compete Art. 2.7.5) | Pricing leverage for buyback at discount |

### Target Post-Deal (Scenario C: Arb + Small Cleanup)

| Group | Shares | % |
|-------|--------|---|
| Founders + Team | 9,811 | 36.08% |
| Syndicate | 6,853 | 25.20% |
| **Arb** | **6,798** | **25.00%** |
| Ideon + Talayape (residual Deadwood) | 3,756 | 13.81% |

### Arb = Contribution, Not Extraction

Arb contributes: clearing infrastructure, FCM access, member-rate fees, OMS (Rival), exchange connectivity. In return: 25% ownership + matching engine flow access. This IS [[CONSTITUTION]] applied to equity: no private extraction, contribution determines ownership.

## Pinorena Leverage Points

| Factor | Detail |
|--------|--------|
| SHA breach | Non-compete Art. 2.7.5 — representative was Director, breached while on board |
| Cost basis | EUR 3.19M at EUR 590.11/share — underwater at any price below 590 |
| At EUR 526 (Arb haircut) | ~11% loss vs cost basis |
| Veto power | 85% threshold for new issuance — Pinorena blocks |
| Workaround | Secondary purchase (ROFR, no 85% trigger) preferred over new issuance |

## 2030 Vision: Entity Architecture

### 2×3 Matrix (from Group Structure doc)

| | Lead Gen: 1→N | Matching | Lead Gen: M→1 |
|---|---|---|---|
| **Darwinex Group** | Zero (Technologies) | Matching Engine (TTT) | Darwinex PM (TTT) |
| **Exchange Members** | Brokers, Educators, Tech | Flow routing | Quants, Partners |

**Regulatory principle:** Zero (top-left) = NONE. Matching Engine = TBD (possibly MTF/OTF). Darwinex PM = MiFID PM license. Exchange Members = their own licenses per jurisdiction.

## Issuance History Highlights

| Round | Date | Price/Share | Cumulative Shares | Note |
|-------|------|-------------|-------------------|------|
| 1 | Mar 2012 | EUR 1 | 3,000 | Founding |
| 9 | May 2017 | EUR 472 | 21,761 | **Down-round** (from 650) |
| 10 | 2021 | EUR 657 | 27,676 | Last round — EUR 18.18M post-money |

---

*Created 3 Apr 2026. Sources: CAP_TABLE.md, 260116_GROUP_STRUCTURE.md, SHAREHOLDER_AGREEMENT references.*
