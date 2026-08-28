---
type: electron
atom: DEVELOP
audience: [management, staff]
orbit: 2
language: llm
status: ACTIVE
last_updated: 2026-04-03
owns: |
  Sourcing rails architecture. Ad server model (corrected: sourcing members, NOT investors).
  Academy model. Hackathon spec summary. INDX funnel → BU ownership mapping.
  Per-member funnel instances. CFW/Adrian connection. Regulatory clarity table.
  Candidate Inversion #14 (sourcing inversion).
source:
  - 260403-darwin-sourcing-rails-per-member-funnel.md
  - 260403-ad-server-open-stack-member-campaigns.md
  - 260403-ad-server-take-rate-darwin-economy.md
  - 260403-ad-server-hackathon-spec.md
  - sessions/260403-consolidated.md §5, §9
cross_refs:
  - atom: DEVELOP
    why: "Sourcing rails = new rail type parallel to trading rails"
  - electron: PHENOTYPE--business-units
    why: "Ad server components map to specific BUs"
  - electron: GENOTYPE--linear-network
    why: "Sourcing rails = T28 applied to knowledge matching dimension"
  - electron: NICHE--referral-mechanics
    why: "Referral mechanics = the reward model for sourcing"
  - file: INDX_FUNNEL
    why: "The funnel that produces sourcing members — sourcing rails = the infrastructure layer"
  - atom: DEVELOP
    why: "Self-selection (A3) constrains who can be sourced — quality gate"
  - electron: GENOTYPE--vbm
    why: "Sourcing = Source vector in S/D/S allocation"
derived_from: [T24, T28, A4, A13, A3]
protocol_component: [Open Protocol Layer]
protocol_layer: Application
protocol_piece: Method
---

# Sourcing Rails — Distributed Member Acquisition

> One sourcing funnel per sourcing member on sourcing rails. Same 1:N → M:N pattern as trading rails. [[CONSTITUTION]] applied to a new rail type.

## Strategic Reframe

| Convention | Inversion (Candidate #14) |
|-----------|--------------------------|
| Company spends money on marketing to acquire users | Members spend effort on sourcing, using venue tools, rewarded by INDX outcome |
| Centralized CAC | Distributed sourcing — individual selfishness (academy grows brand) → social trust (quality members enter economy) |

Grounding: [[CONSTITUTION]] (transparency inversion applied to sourcing). The invisible hand: each academy maximizes its own reputation; the system gets quality member growth.

## ⚠️ Critical Correction

- **WRONG:** Academies sourcing investors (REGULATED — need permission, MiFID implications)
- **RIGHT:** Academies sourcing STUDENTS/MEMBERS using ad server infrastructure

Academies source **members** who then trade, build Quotes, and eventually attract investors through their own track records. The academy never touches investor sourcing.

## Architecture: Per-Member Funnel Instances

The INDX funnel is NOT one funnel — it is **N funnels**, one per sourcing member:

| Trading rails | Sourcing rails |
|--------------|----------------|
| 1 DARWIN per manager | 1 sourcing funnel per academy/sourcer |
| Manager rents trading infrastructure | Academy rents sourcing infrastructure |
| Linear value = trading returns (keeps) | Linear value = reputation + INDX reward (keeps) |
| Network value = flow matching density | Network value = quality N growth |
| 1:N (one manager → N investors) | 1:N (one academy → N students) |

## Academy Model

### What an academy does

1. Academy has external business (YouTube, Telegram, courses, community)
2. Sources students onto Darwinex rails using ad server tools
3. Students trade → generate Quotes → some mint INDX
4. Academy gets INDX-denominated reward proportional to graduates' INDX minted + matching density contribution
5. Darwinex centrally acquires new users, funnels toward academies with proven INDX → lead gen for academy
6. Academy's external business grows → sources more → cycle repeats

### Reward model

| Reward component | Basis | Grounding |
|-----------------|-------|-----------|
| INDX contribution | Members sourced who mint INDX | [[CONSTITUTION]] linear value for sourcer |
| Matching density | Flow from sourced members feeds matching | [[CONSTITUTION]] network value (venue captures) |

**Not cash extracted from recruits.** Reward comes from system surplus, denominated in INDX. Structurally different from MLM: recruit mints real value; reward is INDX-denominated; single-event, venue-decided.

## Ad Server Infrastructure (Hackathon Spec)

### Layer 1: Darwinex builds (pre-hackathon)

| Component | BU owner | Function |
|-----------|----------|----------|
| Identity Linkage API (FOUNDATIONAL) | Data Rails | Full attribution: campaign click → sign-up → account → trading → Quote → INDX mint |
| Ad Server Core (Revive on Adkins) | Data Rails | Self-hosted, multi-tenant, member campaigns |
| Compliance Template Library | Retail Broker | Pre-approved copy/disclaimers per jurisdiction |
| Reward Calculation Engine | Matching Rails | Per-academy reward based on INDX minted + matching density |

### Layer 2: Hackathon builds

| Component | Prize |
|-----------|-------|
| Campaign Builder (self-serve) | Grand Prize €15-25K |
| Analytics Dashboard (real-time tracking) | Grand Prize €15-25K |
| Landing Page Generator | Component €3-5K |
| Social Media Integration Kit | Component €2-3K |
| Compliance Checker | Bounty €3-5K |
| Referral Network Visualization | Bounty €500-1K |

- **Total budget:** €35-55K (within S7.2 Kaggle experiment €100K allocation)
- **Implementation partner:** Adrian
- **Timeline:** Pre-hackathon build (4-6 weeks) → Hackathon (6-8 weeks) → Judging (2 weeks) → Integration (4 weeks) → Pilot with 10-20 academies (8 weeks)

## Regulatory Clarity

| Activity | Regulatory status | Why |
|----------|------------------|-----|
| Academy sourcing members | **UNREGULATED** | Education, not financial advice |
| Academy sourcing investors | **REGULATED** ⛔ | Investment advice — requires authorization |
| Ad server for member campaigns | **UNREGULATED** | Advertising infrastructure |
| INDX-denominated rewards | **UNREGULATED** | Internal currency, not securities |
| Referral rewards (cash-denominated) | **⚠️ CAUTION** | May trigger regulated referral rules per jurisdiction |

## INDX Funnel → BU Ownership

Full funnel model including messaging layer, KPIs, crystallization stage, and multi-path development: [[INDX_FUNNEL]].

| Funnel stage | BU owner | What happens | Handoff |
|-------------|----------|-------------|---------|
| Discovery + Crystallization | Cross-BU (sourcing rails) | Content arms members; crystallized members carry discovery | Loop: crystallization output → discovery input |
| Activation (Prospect → User) | Retail Broker | KYC, onboarding, referral attribution | User sign-up → Data Rails |
| Development (User → Developing) | Data Rails | Quote computation, credibility scoring, comparative advantage discovery | Quote gate → Matching Rails |
| Qualification (Developing → Member) | Matching Rails | Matching, INDX construction, meritocratic gate | INDX mint → Prop |
| Circulation | Prop | Capital allocation, reinvestment | Feeds VBM waterfall |

Per-sourcer tracking: each academy gets attribution across the full chain. G2 GSheet needs per-sourcer column.

## See Also

- [[REWARD]] — parent atom
- [[PHENOTYPE--business-units]] — BU architecture the ad server maps onto
- [[GENOTYPE--linear-network]] — T28 economics (sourcing = T28 on knowledge dimension)
- [[NICHE--referral-mechanics]] — referral reward mechanics (INDX-denominated)
- [[DEVELOP]] — self-selection (A3) as quality gate on sourcing
- [[GENOTYPE--vbm]] — sourcing = Source vector in S/D/S allocation

---

*Created 3 Apr 2026. Sourcing rails = T24 applied to member acquisition. Distributed, meritocratic, INDX-rewarded.*
