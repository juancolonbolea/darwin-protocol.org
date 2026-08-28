---
type: electron
atom: REWARD
audience: [management, staff]
orbit: 2
language: llm
status: ACTIVE
last_updated: 2026-04-11
owns: |
  4 BU architecture: Zero (TTL), Exchange (TSTT), Prop (TSV), Retail Broker (→CIF).
  ORGANIZING PRINCIPLE: market risk. Exchange=flat, Prop=directional.
  Revenue mapping (FY2024, confirmed 8 Apr). Broker transfer model (85% intro rev).
  Arm's length tests. Regulatory mapping. Comparable multiples. Sum-of-parts.
  Two-level BU model (4 infrastructure + N micro-BUs).
  Team: Pablo=dealing desk→Exchange, Martí=Labs→Prop, Jesús=CFO→all.
  Slack: #business-units-pl (C0ARE3KEL59). GSheet: 1bHAhrZrFAIttWQrlwurWM2r0faLclm9dzCvEgEgxKVI.
source:
  - 260403-three-business-units-final.md
  - 260403-darwin-rails-split.md
  - 260403-bu-valuation-restatement.md
  - sessions/260403-consolidated.md §2, §4
  - sessions/260408-daily.md (BU P&L restatement session — market risk principle, transfer model)
  - GSheet 1bHAhrZrFAIttWQrlwurWM2r0faLclm9dzCvEgEgxKVI (BU P&L 7-tab model)
cross_refs:
  - atom: REWARD
    why: "BUs are the operational incarnation of axiom clusters"
  - atom: REWARD
    why: "VBM framework operates on BU-level P&Ls"
  - electron: GENOTYPE--vbm
    why: "Transfer pricing flows between BUs feed VBM waterfall"
  - electron: GENOTYPE--linear-network
    why: "Two-level BU model = T28 applied to infrastructure"
  - electron: PHENOTYPE--dataset
    why: "Data Rails houses the dataset (P5)"
  - electron: PHENOTYPE--matching-engine
    why: "Matching Rails houses the CCP (A4, A9)"
  - electron: PHENOTYPE--prop-bu
    why: "Prop detail — dual identity, capital sources"
  - electron: PHENOTYPE--pl-data-sources
    why: "Every P&L line traced to MCP tool, Metabase table, or Coda invoice"
  - file: INDX_FUNNEL
    why: "Funnel stages map to BU ownership — circular model with messaging + KPIs"
  - electron: PHENOTYPE--sourcing-rails
    why: "Sourcing Rails maps to Source vector and Retail Broker"
  - atom: DEVELOP
    why: "Retail Broker = first community node, operationalizes A3"
  - knowledge: "[[DATA_ACCESS]]"
    why: "Canonical data source reference — field-level inventory of all queryable sources"
derived_from: [T24, A4, A9, P5, A3, T27]
protocol_component: [Settlement Layer]
protocol_layer: Application
protocol_piece: Economy
---

# 4 BU Architecture — The Operational Map

> Darwinex decomposes into four business units. The organizing principle is **market risk**: Exchange = flat book (no direction), Prop = directional book (carries positions). Zero = no book. Retail Broker = the thing that transfers.
>
> **Customer-flow principle (6 Apr):** The org should look towards the *client*, not towards the CTO. Structure along the lines of customer flow, not in cross-sections. The system has three inputs (trading signals, personal data, money) and two outputs (payments, trades). Everything becomes simpler when structured this way.

## BU Definitions

| BU | Entity | Function | Axiom grounding | Regulatory |
|----|--------|----------|-----------------|------------|
| **Zero** ("The Eye") | TTL | Subscriptions (€45/mo + upsells), Quote scoring, certification, introductions | [[CONSTITUTION]], [[CONSTITUTION]], [[CONSTITUTION]] | UNREGULATED |
| **Exchange** ("The Hand") | TSTT | Matches flow (FLAT), constructs INDX, PM, earns spread on internalized flow | [[CONSTITUTION]], [[CONSTITUTION]], [[CONSTITUTION]], [[CONSTITUTION]] | REGULATED (dealing + PM) |
| **Prop** (Capital & Risk) | TSV | All DIRECTIONAL risk. Carries synthetic book (Boosters), long prop, hedging/ALM | [[CONSTITUTION]], [[CONSTITUTION]], [[CONSTITUTION]] | REGULATED (own account) |
| **Retail Broker** (→ CIF transfer) | Sapiens→TS Europe | Client-facing distribution. KYC, custody, local regulation | [[CONSTITUTION]], [[CONSTITUTION]] | REGULATED (investment firm) |

**Four BUs = four forces.** The BU architecture maps 1:1 to the evolutionary forces:

| BU | Force | What it powers | Playbook |
|---|---|---|---|
| **Zero** (TTL) | **Variation** | Creates conditions for edge to exist. Subscription, Quote, certification. | Linux |
| **Exchange** (TSTT) | **Selection** | Lets merit determine allocation. Matching, spread, INDX construction. | Visa |
| **Prop** (TSV) | **Inheritance** | Compounds trust across generations. Sovereign capital, institutional memory. The gravitational centre. | Berkshire |
| **Retail Broker** (→ CIF) | **Propagation** | Extends trust outward. Client-facing distribution, network nodes. | F1 (DtS) |

Conservation (P6) governs from above all four — the Purpose Lock ensures BU architecture serves merit, not extraction. See [[CONSTITUTION]] §Force-Axiom Mapping, [[PROTOCOL]] §1.

### The Market Risk Dividing Line (confirmed 8 Apr 2026)

- **Exchange = flat.** Earns spread on matched flow. No directional position. Pablo's domain: maximize internalization rate, minimize overflow cost.
- **Prop = directional.** Short synthetic (Booster liabilities), long book (prop positions). All hedging/ALM P&L. Martí's domain: minimize hedging cost, maximize overflow P&L.
- Test: does this line item carry market risk? No → Exchange or Zero. Yes → Prop. Client-facing → Broker.

### BU Axiom Validation Rule

If a BU doesn't map to axioms → it shouldn't exist. If an axiom doesn't map to a BU → either cross-cutting principle ([[CONSTITUTION]], [[CONSTITUTION]]) or operational gap.

### Protocol Org — three engineering functions (20 Apr)

The "core of the company" cuts across BU lines. Engineering is organized by Protocol component, not by business line:

| Function | Builds | Protocol components | BU home | V→S→I→P |
|---|---|---|---|---|
| **Protocol Engineering** | Matching engine, OMS, settlement | #3 Matching + #4 Settlement | Exchange | S (Selection) |
| **Data & Intelligence** | Risk engine, INDX selection, dataset mining | #1 Risk Engine + #5 Trust Signal | Exchange | S + I (Selection + Inheritance) |
| **Platform & APIs** | Trading terminal, FIX I/O, Signal API, member broker SDK | #8 Open Protocol | Zero | P (Propagation) |

**The core = Exchange + Zero engineering = the Protocol.** Prop is a balance-sheet function (no dedicated engineering). Retail Broker is a member-relationship function (no engineering post-CIF transfer). Deck 2→3 bridge: every Deck 2 diagnosis maps to a hire/build in one of these three functions — this org IS Deck 3. Canonical: [[DARWIN_ECONOMY_V01]] §10. Protocol Engineering + Data & Intelligence functions = Process-channel-funded (★-center pump refinement). Platform & APIs = Develop-channel-funded (V-supply tools). See [[DARWIN_ECONOMY_V01]] §10.1 (forces ↔ channels) and §10.2 (Capital-vs-Merit Separation).

## Revenue Mapping (FY2024, confirmed 8 Apr 2026)

| Line Item | BU | FY2024 (€K) | Principle |
|-----------|-----|------------|-----------|
| Commissions | Retail Broker | 1,893 | Client-facing charge |
| Interest (Swap) | Retail Broker | 1,790 | Client position financing |
| Markup | Retail Broker | 1,577 | Client spread |
| Interest on Client Funds | Retail Broker | 1,146 | Segregated client money |
| DZ Subs + Upsells (ex-Boosters) | Zero | ~2,683 | Subscription, no capital at risk |
| Internalization | Exchange | 1,295 | Spread capture, FLAT matched book |
| Perf Fees / Cost of Signals | Exchange | 56 | 20% HWM on managed portfolios |
| Management Fees | Exchange | 497 | 1.2% AuM portfolio management |
| Services Income | Exchange | 16 | Certificate/AMC income |
| Boosters (from DZ line) | Prop | ~1,322 | Short synthetic = DIRECTIONAL |
| B-book P&L | Prop | 0 | Warehoused flow = DIRECTIONAL |
| Others Gains / Losses | Prop | 238 | Hedging, ALM, prop = DIRECTIONAL |
| **TOTAL** | | **~12,511** | |

| BU | Revenue (€K) | % of total |
|----|-------------|------------|
| Retail Broker | 6,405 | 51% |
| Zero | 2,683 | 21% |
| Exchange | 1,863 | 15% |
| Prop | 1,559 | 12% |

## Broker Transfer Model (confirmed 8 Apr 2026)

**The target operating model: transfer the retail broker to a CIF partner.**

Post-transfer, Darwinex:
- Keeps 85% of all revenue from clients Zero introduces (intro fees)
- Sets pricing (markup, client interest terms = ours to decide)
- Sheds ALL broker costs (compliance, KYC, CASS, client money, MT4/5 licenses, support)
- Exchange earns 15% spread capture on non-Darwinex-acquired flow from partner brokers

**Post-transfer economics (FY2024 basis):**

| | Today | Post-Transfer |
|--|-------|--------------|
| Revenue | €12.5M | €11.5M (stays + 85% intro) |
| Costs | €13.3M | €8.0M (broker costs shed) |
| **Operating Profit** | **-€0.8M** | **+€3.5M** |

The group swings from loss-making to €3.5M OP by shedding €5.2M of broker costs and giving up only 15% of broker revenue (€0.96M).

**The strategic question:** At what level of non-retail revenue can we execute the transfer? Answer: the transfer ITSELF makes the group profitable — no additional Exchange/Prop growth needed on FY2024 numbers. Growth in Exchange AuM (mgmt + perf fees) and Prop (Boosters) provides additional margin of safety.

## Arm's Length Independence Tests

| BU pair | Test question | Result |
|---------|--------------|--------|
| Data Rails ↔ Matching Rails | Would Data Rails sell data to external matching engines? | **PASS** (API) |
| Data Rails ↔ Retail Broker | Would Data Rails serve external brokers? | **PASS** (data licensing) |
| Matching Rails ↔ Prop | Would Prop trade on third-party exchange? | **PASS** (already does — street hedging) |
| Matching Rails ↔ Retail Broker | Would Broker use third-party matching? | **PASS** ([[CONSTITUTION]] protocol network model proves this) |
| Data Rails ↔ Prop | Would Prop buy data from third-party? | **PASS** (market data feeds) |
| Prop ↔ Retail Broker | Would Broker route to third-party market maker? | **PASS** (standard brokerage) |

All 6 pairs: **PASS**. Sum-of-parts story holds.

## Comparable Multiples

| BU | Comp set | Multiple basis | Range |
|----|----------|---------------|-------|
| Data Rails | MSCI (14x), S&P Global (9x), LSEG (5.6x), FactSet (3.8-6.7x) | Revenue | 5-14x |
| Matching Rails | CME (21-25x), ICE (15-17x), Euronext (11-14x), CBOE (17-19x) | EBITDA | 14-25x |
| Prop | Citadel Securities model (high ROE, captive flow) | Earnings | 3-5x |
| Retail Broker | IG Group (5.2x), Plus500 (6-8x), CMC Markets (6.9x) | EBITDA | 5-8x |

## Sum-of-Parts vs Consolidated Valuation

| Method | Value range | Multiple basis |
|--------|------------|---------------|
| **Sum-of-parts (4 BU)** | **€60-114M** | Each BU at own comps |
| Consolidated (blended) | €44-74M | 3-5x revenue as "fintech broker" |
| **Delta** | **+€16-40M** | Platform components at platform multiples, not broker |

Implied BU values:

| BU | Implied value |
|----|---------------|
| Data Rails | €33-66M |
| Matching Rails | €13-20M |
| Prop | €5-10M |
| Retail Broker | €9-18M |

Status: ILLUSTRATIVE — BU-level profitability needed for EBITDA multiples (awaiting CFO data per §12 of consolidated session).

## Regulatory Mapping

| BU | Regulated? | License type | Domicile constraint |
|----|-----------|-------------|---------------------|
| Data Rails | **NO** | Not required (data/analytics = unregulated) | Flexible — low-cost, high-talent jurisdiction |
| Matching Rails | **YES** | Dealing on own account + portfolio management | FCA/CNMV/equivalent required |
| Prop | **YES** | Own account dealing (subset of Matching Rails) | Same regulated entity or separate |
| Retail Broker | **YES** | Investment firm (MiFID II) | Per-jurisdiction |

Data Rails as unregulated entity = highest strategic optionality. Potential EU BMR applicability if INDX qualifies as benchmark — lighter than dealing.

## Two-Level BU Model

| Level | Count | What | Role |
|-------|-------|------|------|
| **Infrastructure BUs** | 4 (fixed) | Data Rails, Matching Rails, Prop, Retail Broker | The OS — what Darwinex owns and operates |
| **Member micro-BUs** | N (growing) | Each DARWIN, each sourcing funnel, each signal processor | The programs — what members rent and run on the OS |

One-liner: **"Darwinex is an operating system that runs N meritocratic micro-businesses on shared rails. Each keeps what it earns. We capture and reinvest the network effect."**

Grounding: [[CONSTITUTION]] (economics — linear/network split), [[CONSTITUTION]] (architecture — protocol network multiplier), T21 (split — member keeps, venue reinvests).

## Transfer Pricing Relationships

| From → To | What flows | Price mechanism |
|-----------|-----------|----------------|
| Data Rails → Matching Rails | Quote attestations, credibility ratings, signal quality | % of AUM fees or per-signal license | <!-- SCORE: "Quote scores" renamed to "Quote attestations" — Quote is normalisation output, not a ranking score -->
| Data Rails → Retail Broker | Trader risk-adjustment outputs, gamification, content | Platform fee or revenue share | <!-- SCORE: verify "Trader scoring" — if this is IA outputs used for gamification it may be intentional ranking -->
| Matching Rails → Prop | Flow routing (internalized vs externalized) | Spread share or per-trade fee |
| Matching Rails → Retail Broker | Execution services (order routing, settlement) | Per-trade fee or bps on notional |
| Retail Broker → Data Rails | Client flow data (anonymized) | Data licensing fee or bundled |

Transfer pricing boundaries = INDX funnel handoff points.

## INDX Funnel → BU Ownership

| Funnel stage | BU owner | S/D/S vector | Handoff boundary |
|-------------|----------|-------------|-----------------|
| Awareness → Prospect → User | Retail Broker | Source | User sign-up → Data Rails |
| User → Developing | Data Rails | Develop | Quote gate → Matching Rails |
| Developing → Member → INDX mint | Matching Rails | Develop → Compound | INDX mint → Prop |
| Circulation (capital allocation) | Prop | Compound | Capital deployment decision |

## Gross Margin Attribution — BU P&L Caveats

> The gross margin ETL (`dx_margin_user_incomes`) is the primary data source for BU-level revenue.
> Full methodology + 10 allocation methods documented in [[PHENOTYPE--pl-data-sources]].
> **When restating revenue by BU, bear these in mind:**

| Revenue line | BU | Attribution method | Caveat for BU restatement |
|-------------|-----|-------------------|--------------------------|
| Markup | Broker | Volume pro-rata by instrument | NOT direct per user — overstates low-spread, understates high-spread. "Pendiente de método nuevo directo." |
| Internalization | Exchange | Volume pro-rata (new=global, old=per instrument) | Two methods summed permanently. Special override for user 328800. |
| Swap income | Broker | 3:1 netting weight (net vs market) | Weight is a policy assumption, not calibrated. Affects trader/investor split → BU split. |
| Interest on funds | Broker | Equity proportional, by regulated company | Dual users get 50/50 split regardless of actual equity by role. Only CNMV+FCA in ETL — SYC/other manual. |
| Darwinia flow (matching revenue from DarwinIA trades) | Exchange | Proportional to darwins in competition | Since Sept 2025, no longer actual wallet payment. Redistributed. DarwinIA FLOW revenue stays with Exchange (flow goes through the internal book). DarwinIA allocation COST is split: Silver → Zero BU (user acquisition/CAC = Variation); Gold → Exchange R&D (INDX selection pipeline = Selection). Revised 16 Apr — Gold feeds INDX directly, Exchange funds its own pipeline from retained perf fee surplus (25%). |
| B-book | Prop | Global volume share | Lost instrument granularity since Apr 2023. Currently ~zero anyway. |
| MetaQuotes cost | Shared | Equal per active trader | Since Sept 2025. Before: volume-proportional. Policy change, not cost-driver change. |

**Bottom line:** For BU P&L, the _direct_ concepts (commission, pfees, mfees, inactivity_fee) are clean. The _proportional_ concepts (markup, internalization, swap, infrastructure costs) carry allocation assumptions. Revenue totals are reliable; per-user/per-BU splits are approximations.

### CIF Transfer — Internalization Dependency (validated 9 Apr 2026)

Empirical data from XCore (Q1 2026) shows retail traders have 67.9% IMR vs investors at 26.1% and Boosters at 0%. Retail generates 24.6% of volume but **44.4% of all internalized volume**. Three effects compound: (a) retail trades are smaller, (b) more directionally diverse, (c) concentrated in high-IMR size buckets.

**Risk mitigated by design:** CIF transfer preserves flow routing — Exchange becomes the **liquidity provider to partner brokers**. Retail flow continues through Darwinex matching engine regardless of who the client-facing broker is. This is the eX (Exchange Rails) architecture: partner brokers as nodes, each bringing diverse retail flow.

**Growth implication:** More broker nodes = more independent retail flow = **higher aggregate IMR for everyone** (network effect). The CIF transfer doesn't degrade internalization — it potentially *improves* it by adding flow diversity from multiple broker sources.

See [[PHENOTYPE--pl-data-sources]] § "CRITICAL: Internalization Rate Varies 0-81%" for full data.

## See Also

- [[REWARD]] — parent atom (chain steps this BU architecture operationalizes)
- [[GENOTYPE--vbm]] — VBM framework operating on BU-level P&Ls
- [[GENOTYPE--linear-network]] — T28 economics underlying the two-level model
- [[PHENOTYPE--prop-bu]] — deep-dive on Prop BU
- [[PHENOTYPE--sourcing-rails]] — sourcing rails as BU infrastructure
- [[DEVELOP]] — Retail Broker = first community node, operationalizing [[CONSTITUTION]]
- [[CONSTITUTION]] — formal axiom structure grounding each BU

---

*Created 3 Apr 2026. Updated 8 Apr 2026: BU names finalized (Zero/Exchange/Prop/Broker), market risk organizing principle confirmed, revenue mapping corrected (B-book→Prop), broker transfer model added with post-transfer economics. Updated 9 Apr 2026: Added gross margin attribution caveats table for BU P&L restatement (source: Confluence "Gross Margin Darwinex Classic" technical review).*
