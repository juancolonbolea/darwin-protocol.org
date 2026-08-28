---
language: dual
type: electron
atom: INDX
audience: [management, staff]
orbit: 2
status: ACTIVE
date: 2026-04-13
owns: |
  Institutional confidence: how external allocators evaluate, enter, and operate
  within the DARWIN system. Three tiers (Allocator/Fund/Strategic). DD checklist.
  Four-book model. Swap→managed account transition. Give-up architecture.
  Ripple partnership. Exchange Rails. Strategy factory. Investor journey phases.
  AMC/GentTwo mechanics. Competitive positioning. Distribution channels.
merged_from:
  - PHENOTYPE--investor-journey.md (merged 13 Apr 2026)
  - PHENOTYPE--institutional-investor-model.md (merged 13 Apr 2026)
  - PHENOTYPE--institutional-architecture.md (merged 13 Apr 2026)
cross_refs:
  - electron: PHENOTYPE--current-state
    why: "Current state grounds every institutional claim"
  - electron: PHENOTYPE--matching-engine
    why: "INDX construction mechanics = what the allocator buys"
  - electron: PHENOTYPE--business-units
    why: "4 BU architecture = the SoP story investors see"
  - electron: PHENOTYPE--group-structure
    why: "Legal structure for operational DD"
  - electron: GENOTYPE--vbm
    why: "VBM trust waterfall = the reinvestment story"
  - electron: PHENOTYPE--indx-pipeline
    why: "Pipeline from DARWIN to INDX = core product"
  - satellite: PROTOCOL-NETWORK
    why: "Exchange Rails = multi-node expansion of matching"
  - file: CIF_DEAL_FRAMEWORK
    why: "CIF separation enables broker node model"
  - file: ADDRESS_BOOK
    why: "Investor contacts, pipeline tracking"
protocol_component: [Trust Signal, Settlement Layer]
protocol_layer: Application
protocol_piece: Method
---

# Institutional Confidence

> How external confidence (the X circle) evaluates, enters, and operates within the DARWIN system.
> Three files merged: the allocator's perspective, the investor-facing operating model, and the execution/distribution infrastructure.

---

## LLM_SECTION

### identity

Consolidation: "How external confidence (the X circle) evaluates, enters, and operates within the DARWIN system. Three files merged: the allocator's perspective (investor-journey), the investor-facing operating model (institutional-investor-model), and the execution/distribution infrastructure (institutional-architecture). Covers the full chain from discovery to scale: investor segments, due diligence, pitch, economics, architecture, partnerships, and distribution."

### investor_segments

Three tiers of institutional interest, each with different product needs:

| Segment | Profile | AuM Range | Model | Example |
|---------|---------|-----------|-------|---------|
| **Tier 1: Allocator** | Multi-manager allocator, quantitative, vol-targeting | $50M-500M | SMA at their PB, give-up model | First New York (250-300M, 150 traders) |
| **Tier 2: Fund/FoF** | Fund of funds, quant fund, family office | $5M-50M | SMA at Darwinex PB (Ripple) or co-managed | White Bay, Fasanara Open Quant (2M invested) |
| **Tier 3: Strategic** | Broker, exchange, infrastructure partner | N/A | JV, strategic deal, distribution node | Arb, Waton, potential CIF buyer |

**Key insight from FNY call:** The most sophisticated allocators (Millennium/Citadel-style) already understand backbooks, netting risk, and signal-based allocation. They DON'T need the concept explained — they need the operational detail.

### product_offering

THE LARGEST GAP RIGHT NOW IS THAT I) A LOT OF THE VOLUME TRADED IN CFDS (LESS LIQUIDITY/EXECUTINO)

| Component               | Description                                                                                                                               | Status                                               |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| **Allocation Platform** | Web-based trading terminal for traders. Filter, backtest, construct portfolios, set buy/sell limits/stops. "Spotify for trading traders." | EXISTS — retail-grade, needs institutional skin      |
| **Manager Universe**    | ~400 filtered from 13K. Predictive indicators, risk scores, capacity badges, strategy classification.                                     | EXISTS                                               |
| **Risk Engine**         | Real-time VaR normalization, position sizing, strategy drift detection, individual stop losses (8% drawdown), hedging meta-strategies     | EXISTS                                               |
| **Analytics / DD Data** | Full tick-by-tick mark-to-market, trade-level history, position duration, leverage, grid detection, behavioral flags                      | EXISTS                                               |
| **Execution**           | 45ms signal-to-trade. VWAP allocation. Net exposure only.                                                                                 | EXISTS — redirect from PrimeXM to FCM needed         |
| **Reporting**           | Daily PnL, attribution per manager, risk exposure, capacity utilization                                                                   | EXISTS (basic) — needs institutional-grade packaging |
| **IP Protection**       | Underlying positions not disclosed to investors. Investor faces the DARWIN (assetized trader), not the trades.                            | EXISTS                                               |
| **SMA Structure**       | Multi-manager consolidated in single SMA. Per-manager attribution within SMA.                                                             | EXISTS, BUT ONLY ON DARWINEX BROKER                  |

**The pitch in one line:** "We assetize 13,000 traders and give you a terminal to trade them."

### indx_as_amc

```yaml
product_name: INDX
wrapper: GentTwo AMC (Actively Managed Certificate)
isin: CH1403552396
asset_class: multi-manager systematic/discretionary hybrid — alternative investments
strategy_type: |
  Confidence-weighted portfolio of independently risk-adjusted trader track records.
  Net overflow of an internal matching engine that filters N independent strategies
  through risk adjustment, netting, and meritocratic selection.
return_profile:
  target: absolute return, uncorrelated to traditional beta
  historical: ~20% net (needs confirmation from Martí)
  sharpe: ~1.42 (needs confirmation)
  drawdown: needs data — max drawdown, average drawdown, recovery time
  benchmark: no official benchmark — could use HFRX or CTA indices
capacity:
  individual_strategy_cap: bounded by each DARWIN's instrument/timeframe capacity
  collective_capacity: |
    Aggregate capacity is separate from (and larger than) sum of individual capacities.
    N independent strategies across different instruments/timeframes produce collective
    returns with their own capacity ceiling. As N grows, capacity grows.
  current_aum: est. €15-25M (needs confirmation)
  target_capacity: TBD — needs capacity study (Martí)
liquidity:
  subscription: daily (AMC structure)
  redemption: daily (AMC structure, subject to AMC terms)
  notice_period: TBD (check GentTwo OAT)
fees:
  management_fee: TBD (check current AMC terms)
  performance_fee: TBD (check current AMC terms)
  hwm: TBD
  hurdle: TBD
regulatory:
  product_issuer: GentTwo AG (Switzerland, FINMA supervised)
  investment_manager: Tradeslide Trading Tech Ltd (UK, FCA FRN 586466)
  portfolio_management: FCA-authorized (TTT)
  custodian: TBD (GentTwo uses partner banks — check)
  auditor: HW Fisher (TTT), GentTwo's auditor for AMC
  admin: GentTwo provides AMC admin
```

```yaml
amc:
  issuer: GentTwo AG (Zurich, Switzerland)
  supervision: FINMA (Swiss Financial Market Supervisory Authority)
  isin: CH1403552396
  product_type: Actively Managed Certificate (AMC)
  how_it_works: |
    1. GentTwo issues the certificate
    2. TTT (FCA) acts as investment manager — makes allocation decisions
    3. Underlying: portfolio of DARWINs (TRS/CFD positions on TTT books)
    4. NAV calculated daily based on DARWIN Quotes + allocations
    5. Investor buys/sells the certificate through their bank/broker
    6. GentTwo handles issuance, admin, price publication
    7. Super Global handles distribution to European banks (price notifications flowing as of 3 Apr 2026)

oat:
  definition: Order Acceptance Template — defines the terms for each AMC
  status: |
    Assigned to Juan + Javier G + Cian + AMC team (31 Mar, thread 19d43e9f3a2729e3).
    REQUIRES PROMPT APPROVAL. Blocking secondary market transactions.
  content: |
    - Fee structure (management + performance)
    - Minimum investment
    - Subscription/redemption terms
    - Investment universe and restrictions
    - Risk limits
    
super_global:
  role: Distribution partner for European banks
  status: Price notifications flowing (3 Apr, thread 19d52fec8838ceea)
  implication: INDX AMC is now visible to bank advisors in Europe
  
connection_to_indx: |
  The AMC is the INSTITUTIONAL WRAPPER for INDX.
  Retail investors access DARWINs directly on the platform.
  Institutional investors access the aggregate (INDX) via the AMC.
  The AMC is NOT INDX — it's a certificate whose value tracks INDX.
  Two products, one underlying engine.
```

### investor_journey

```
DISCOVERY → INTRO CALL → DEEP DIVE → DD → PILOT → SCALE → STRATEGIC
```

| Phase | What happens | Who from DX | Duration |
|-------|-------------|-------------|----------|
| **1. Discovery** | Introduction via channel (Claudia, Ripple Cap Intro, direct, conference) | Juan | — |
| **2. Intro Call** | Platform overview, risk engine, track record, AuM, model explanation. Demo of Exchange. | Juan | 45-60 min |
| **3. Deep Dive** | Quant team meeting. Detailed risk methodology, execution, matching, capacity, strategy classification. | Juan + Javier + Martí | 60-90 min |
| **4. DD** | Full data room access. Tick-by-tick data. Historical returns. Compliance docs. Regulatory status. | Martí + Cian | 2-4 weeks |
| **5. Pilot** | Small allocation ($1-5M). SMA setup. Investor chooses: on-balance-sheet (swap) or off-balance-sheet (give-up to their FCM). | Javier (PM) + Jesús (ops) | 1-3 months |
| **6. Scale** | Increase allocation. Add strategies. Refine manager selection. Quarterly reviews. | Javier + Juan (QBRs) |Ongoing |
| **7. Strategic** | JV, strategic investment, distribution partnership, co-branded product | Juan + Board | As it develops |

**Current pipeline status (9 Apr 2026):**

| Investor | Phase | Next Step |
|----------|-------|-----------|
| First New York | 2 → 3 | Second meeting with Donald + Danny (quant team) |
| White Bay | 2 → 3 | Updated deck + DD call with Martí |
| Fasanara Open Quant | 5 (active) | Ongoing allocation (2M, ~15M notional) |
| Boothbay | 2 (stale) | Claudia follow-up + 6 Qs answered |

### operational_model_daily

Day-to-day workflow once an investor is allocated:

```
┌─────────────────────────────────────────────────────────┐
│ INVESTOR'S PRIME BROKER (their FCM)                     │
│  └─ SMA account(s)                                      │
│      └─ Positions allocated via give-up                  │
└─────────────────────────┬───────────────────────────────┘
                          │ give-up instructions (post-trade)
                          │
┌─────────────────────────┴───────────────────────────────┐
│ DARWINEX / TTT (Portfolio Manager)                       │
│                                                          │
│  Signal Pipeline:                                        │
│  13K traders → Risk Engine → 250 managers → INDX/basket │
│                                                          │
│  Execution:                                              │
│  FIX orders → Executing Broker (Arb/Ripple)              │
│  → Exchange (CME/Eurex/ICE)                              │
│  → Post-trade allocation → Give-up to investor FCMs      │
│                                                          │
│  Matching Engine:                                        │
│  All four books (CFD + DARWIN + INDX + Prop) net first  │
│  Only net exposure goes to market                        │
│  IMR ~76% for retail book, lower for institutional       │
│                                                          │
│  Reporting:                                              │
│  End-of-day file → investor clears at their FCM          │
│  Daily attribution report per manager                    │
│  Monthly performance + risk report                       │
└─────────────────────────────────────────────────────────┘
```

**The end-of-day file model (what FNY asked for):**
1. Darwinex executes trades during the day via executing broker
2. Post-trade: positions allocated across investor SMAs
3. End-of-day: file delivered to each investor's FCM for clearing
4. Investor sees positions on their books, at their FCM
5. Zero counterparty risk to Darwinex
6. Investor uses Darwinex platform for monitoring, DD, allocation decisions

### dd_checklist

| DD Category | Question | Answer / Status |
|-------------|----------|-----------------|
| **Track record** | How long? | INDX live since [CHECK — est. 2019-2020]. 5+ years track record. Individual DARWINs have 10+ year records (platform since 2012). |
| **Track record** | Net of all fees? | YES — Quote is net of execution costs. INDX return is net of underlying costs. AMC layer adds AMC fees on top. Need to present NET OF ALL FEES to allocators. |
| **Track record** | Max drawdown? | **NEEDS DATA FROM MARTÍ** — critical for DD. |
| **Track record** | Sharpe ratio? | ~1.42 (from INDX project notes) — **NEEDS CONFIRMATION** |
| **Track record** | Calmar ratio? | **NEEDS CALCULATION** |
| **Strategy** | What does INDX actually DO? | Selects and weights N independent traders based on risk-adjusted performance (Quote), allocates confidence (capital) proportionally, rebalances based on real-time edge measurement. |
| **Strategy** | Discretionary vs systematic? | **Hybrid.** Selection criteria (Quote, risk metrics) are systematic. Weight allocation has discretionary overlay. Individual managers are mix of discretionary and systematic. **THIS IS CLAUDIA'S Q1 — needs precise answer.** |
| **Strategy** | How many managers? | **NEEDS DATA** — active DARWINs in INDX composition. |
| **Strategy** | Manager turnover? | **NEEDS DATA** — how often do DARWINs enter/exit INDX? |
| **Risk** | VaR methodology? | Risk Engine normalizes all DARWINs to uniform risk level (VaR-adjusted). INDX portfolio has own VaR limit. **Get specifics from Martí.** |
| **Risk** | Drawdown limits? | **NEEDS DATA** — does INDX have a hard drawdown limit? |
| **Risk** | Position limits? | Each DARWIN is risk-normalized. INDX has concentration limits per DARWIN. **Get specifics.** |
| **Risk** | Correlation management? | Selection favors uncorrelated edge. Netting engine naturally reduces correlation exposure. **Quantify with data.** |
| **Operational** | Custodian? | GentTwo partner bank (Switzerland). **Get specific bank name.** |
| **Operational** | Admin? | GentTwo AG |
| **Operational** | Auditor? | HW Fisher (TTT). GentTwo has own auditor. |
| **Operational** | Legal structure? | AMC (Actively Managed Certificate) issued under Swiss law by GentTwo. Investment decisions by TTT (FCA). |
| **Operational** | Key person risk? | Martí Castany (Head of Risk) manages INDX allocation. Risk Engine is systematic. Risk: what if Martí leaves? Answer: system is algorithmic, not discretionary. |
| **Capacity** | How much before alpha decays? | **CRITICAL UNKNOWN.** Individual DARWIN capacity is bounded. Collective capacity needs study. Estimate: €100-500M before meaningful decay? **NEEDS RESEARCH.** |
| **Fees** | Management + performance? | **GET CURRENT AMC FEE SCHEDULE** |
| **Fees** | HWM/hurdle? | **CHECK AMC TERMS** |
| **Liquidity** | Subscription/redemption? | Daily (AMC). But practical constraints may apply at scale. |
| **Regulatory** | Where regulated? | TTT = FCA (UK). AMC = Swiss (GentTwo/FINMA supervised). Underlying trading = FCA + CNMV + FSA Seychelles. |
| **Regulatory** | Investor eligibility? | Professional/institutional investors only (AMC). **CHECK if GentTwo allows QIB/Accredited under certain conditions.** |

### the_pitch

```yaml
elevator_30s: |
  INDX is a meritocratic multi-manager portfolio built on the world's largest
  independently risk-adjusted trader track record database. 100,000+ verified
  track records. ~5+ years live performance. The system selects, risk-adjusts,
  and allocates to proven edge — automatically. No discretionary bias. No style
  drift. The portfolio improves as the database grows.

differentiation:
  vs_multi_manager_funds: |
    Traditional multi-manager: fund of funds, manager selection by due diligence
    team, quarterly rebalancing, style drift risk, key person risk.
    INDX: systematic selection from 100K+ verified track records, continuous
    risk monitoring, automatic rebalancing, no style drift (system enforces it),
    no key person (algorithm selects).
    
  vs_cta_indices: |
    CTA indices aggregate reported returns. No verification. Survivorship bias.
    Selection bias. No risk adjustment across managers.
    INDX: every return is independently risk-adjusted at arm's length, computed
    from actual trades, no self-reporting, no survivorship bias (dead DARWINs
    remain in the record).

  vs_numerai: |
    Numerai: crowdsourced signals for a single equity L/S hedge fund. NMR token
    inflation. Centralized fund management. Narrow asset class.
    INDX: multi-asset (FX, indices, commodities, equities), multi-strategy,
    multi-timeframe. No token inflation. Transparent track records.

  the_one_line: |
    "You're not buying a fund manager's judgment. You're buying a share of a
    meritocratic economy that selects and compounds edge from 100,000 independent
    track records."

t28_translated: |
  For institutional investors, the T28 frame becomes:
  "Every trader on the platform keeps their performance (linear return).
  The platform captures the diversification benefit (network return) and
  reinvests it into better risk models, richer data, and more traders.
  You, the allocator, access the compounding aggregate through INDX."
```

### four_books

| Book | What | Current hedge destination | Matching benefit |
|------|------|--------------------------|------------------|
| **1. CFDs** | Market making to B2C brokers. CIF + partners STP to TTT. TTT = principal. | Saxo (PoP) — spread + commission | HIGH (IMR ~76% small tickets) |
| **2. DARWINs** | The Exchange. Individual investors allocate to single DARWINs. TTT = principal. | Saxo (PoP) | MODERATE (block flow, some netting) |
| **3. INDX** | Institutional special case. ~200 DARWINs, substantial blocks. TTT = principal. High NOP, low benefit. | Saxo (PoP) — FULL spread, no matching | ZERO (bypasses matching engine) |
| **4. Prop** | Hedging synthetic book (Boosters) + reinvesting captured spread (25% venue share). TTT's own capital. | Saxo (PoP) | Captures spread from matching |

All four flows enter the matching engine (except INDX in current model). Internal matching saves spread → accrues to prop book. Overflow goes to Saxo. Target: overflow goes to futures exchange via FCM.

### swap_vs_managed_account

| | DARWIN as Swap (current) | DARWIN as Managed Account (target) |
|---|---|---|
| Legal instrument | Bilateral CFD/swap issued by TTT | Futures held at investor's own FCM |
| Investor faces | TTT (counterparty risk) | Exchange CCP via their FCM (no counterparty risk) |
| TTT's role | Issuer + hedger (dealing as principal) | Portfolio manager (managing investments) |
| Balance sheet | Every investor = TTT NOP + capital | Zero TTT exposure on investor positions |
| Capacity | Capped by TTT equity (~€290K regulatory capital) | Uncapped (investor capital at their own FCMs) |
| Institutional acceptance | Low ("you're my counterparty") | High (standard managed account, same as any CTA) |
| Scalability | Linear (more AuM = more capital needed = dilution) | Platform (more AuM = more PM fees, zero capital) |

Both models run simultaneously. Same DARWIN engine, same FIX output, same VWAP allocation, same matching engine. Different legal wrapper at the last mile.

#### offboarding_boundary

For investor with AuM = A on TTT balance sheet:
- Cost of capital: A × margin% × 15%/yr (~0.75% of A at 5% margin)
- Management fee: 1.2% of A
- Net margin before hedging: ~0.45% of A
- Hedging eats most of this for non-matched flow

Give-up overhead: fixed per trade, not per $ AuM. Above a threshold, offboarding ALWAYS wins.

**Boundary: ~$1-5M per investor** (constrained by FCM account minimums, not economics).

| Tier | AuM | Model | Where |
|------|-----|-------|-------|
| Retail (<$1M) | Small, high volume | DARWIN as swap | TTT balance sheet. CIF partner distributes. The game. Premiums. Flow data. |
| Mid ($1-5M) | Boundary zone | Case by case | Offboard if FCM accepts. Otherwise swap. |
| Institutional (>$5M) | Large, scalable | DARWIN as managed account | Give-up to own FCM or Ripple Prime. Zero TTT balance sheet. Pure PM fee. |
| INDX (any size) | Always | Off balance sheet | Give-up or Ripple Cap Intro. Never on TTT. |

#### why_invisible_until_now

Cost of capital at 15% was not factored into INDX P&L. Capital wasn't the binding constraint. Now it is on two axes:
- **Liquidity** — solvable with TTCA (Title Transfer Collateral Arrangement)
- **Equity** — NOT solvable by issuing capital (dilutes AND doesn't fix counterparty risk)

The give-up model is the only solution that fixes BOTH the capital constraint AND the counterparty risk objection.

### economics

#### INDX on balance sheet ($45M AuM, 15% CoE)

| Revenue | Amount | Notes |
|---------|--------|-------|
| Management fee (1.2%) | ~$540K/yr | |
| Performance fee (20% above HWM) | $0-900K/yr | Variable. Zero in flat years. |
| Internalization | ~$0 | INDX bypasses matching |
| **Total revenue** | **$540K-1.44M/yr** | |

| Cost | Amount | Notes |
|------|--------|-------|
| Cost of capital (NOP × 15%) | $800K-2M+/yr | Need Jesús for exact NOP |
| Hedging cost (full spread, no matching) | $100-500K/yr | Need Pablo for turnover + Saxo spread |
| **Total cost** | **$900K-2.5M/yr** | |

**In a flat year: LOSS of $360K-2M. In a good year: breakeven at best.**

Off balance sheet: same revenue, zero capital cost, zero hedging cost. **Swing: +$1-3M/year.**

At $200M AuM (target): revenue $6.4M/yr, balance sheet cost IMPOSSIBLE to absorb → managed account is the ONLY path.

#### Fee structure per investor tier

| Revenue Line | Tier 1 (>$50M) | Tier 2 ($5-50M) | Notes |
|-------------|----------------|-----------------|-------|
| Management fee | 1.0-1.2% | 1.2% | Negotiable for large tickets |
| Performance fee | 15-20% above HWM | 20% | Standard for Tier 1 |
| Trader payout | 15% of investor profits | 15% | Fixed — non-negotiable |
| Platform net | 5% perf fee + mgmt fee | 5% perf + 1.2% mgmt | |

**Cost structure (off balance sheet):**
- Zero capital cost (investor's FCM holds positions)
- Zero hedging spread (futures at exchange, not OTC)
- Give-up fee per trade (small, fixed)
- Platform ops (risk engine, matching, reporting)

**vs on balance sheet (current):**
- Capital cost: 0.75% of AuM (margin × 15% CoE)
- Hedging: full spread to Saxo
- Regulatory capital consumption

**Swing per $100M AuM: +$750K-3M/year by going off balance sheet.**

#### balance_sheet_steady_state

| Item | On TTT | Notes |
|------|--------|-------|
| CFD hedge margin (Flows 1+2 overflow) | $5-15M | After internal matching. Need Pablo data. |
| Prop book margin (synthetic hedge + spread capture) | $2-5M | TTT own capital at work |
| FCA regulatory capital | ~€290K + potential uplift | Nacho to confirm |
| Rounding swaps | <$500K | Negligible, self-netting |
| **INDX** | **$0** | **Off balance sheet** |
| **Investor positions** | **$0** | **At investor FCMs** |
| **Total** | **~$7-20M** | **Down from current (INDX NOP freed)** |

Cost of capital at 15%: $1-3M/yr. Compare to INDX currently consuming (Jesús has the number) → significant net saving.

### market_facing_stack

The output end of the INDX funnel. All signal compounding decisions already made. This is what faces the exchange:

1. **Matching engine** — internal netting across ALL four books. Adding strategies increases IMR. Cross-strategy netting (DARWIN A long EUR in INDX, DARWIN B short EUR in thematic basket → net before exchange). Unique advantage no single-strategy CTA has.
2. **Position optimizer** — net position → instrument selection (standard vs micro futures). Cross-strategy aggregation. Roll scheduling.
3. **OMS** — FIX orders to executing broker. Execution algos (TWAP/VWAP for large orders). THIS IS WHAT RIVAL PROVIDES.
4. **EMS** — FIX → executing broker (Arb/Ripple). Fill confirmation. Multi-venue routing (CME, Eurex, ICE).
5. **Post-trade allocation** — split fills across TTT book / strategy vehicles. Generate give-up instructions per investor FCM. Rounding (micros + cash adjustment).
6. **Reconciliation + margin** — daily reco (DARWIN system ↔ FCM ↔ investor accounts). Real-time margin monitoring.

#### party_map

Five roles in the institutional futures chain:

| Role | Who | What |
|------|-----|------|
| Portfolio Manager | Darwinex TTT | Signals, risk management, DARWIN selection, INDX construction. FCA: dealing as principal + managing investments. |
| Executing Broker | Arb (member rates) or Ripple Prime (cost+$0.50) | Fills orders on exchange. Gives up to carrying FCM. |
| Clearing/Carrying FCM | Ripple Prime (registered FCM, CME clearing member since Jan 2024) | Clears, carries positions, custody, margin, RLUSD. |
| CCP | CME Clearing / LCH | Trade guarantee. Novation. Margin collection. |
| Investor FCMs | Boothbay's FCM, White Bay's FCM, etc. | Receive give-up of allocated positions. Hold on investor's books. |

Arb and Ripple are NOT mutually exclusive. Standard FIA three-way give-up agreements connect them:
- Arb executes at member rates → gives up to Ripple (clearing FCM)
- Ripple clears, carries, provides PB services + Cap Intro balance sheet

#### three_configurations

| Config | Execution | Clearing/PB | Cap Intro | Pros | Cons |
|--------|-----------|-------------|-----------|------|------|
| A: Arb + Ripple | Arb (member rates) | Ripple (FCM + PB) | Ripple balance sheet | Cheapest execution + full PB | Two intermediaries, give-up fee |
| B: Ripple only | Ripple (cost+$0.50) | Ripple | Ripple balance sheet | Simplest. One relationship. | Higher execution cost |
| C: Arb only | Arb (member rates) | Arb's FCM network | No Cap Intro | Cheapest | No PB, no RLUSD, no Cap Intro |

Recommendation: Start with Config B (fastest to market). Optimize to Config A when volume justifies the give-up complexity.

### strategy_factory

INDX is instance #1. The give-up infrastructure serves ANY strategy:

| Type | Example | Token hierarchy level |
|------|---------|----------------------|
| Individual DARWIN | "TopTrader_EUR" | L0: DARWIN Quote |
| Thematic basket | "Momentum DARWINs" | L1: Community Token |
| INDX (flagship) | Protocol aggregate, ~200 DARWINs | L2: INDX |
| Signal processor output | Meta-strategy on DARWIN signals | L1-L2 |
| Community-created | Future: when platform opens | L1 |

Build give-up infrastructure once for INDX. Replicate at near-zero marginal cost. Each new strategy adds flow to matching engine → higher IMR → cheaper execution for all.

### exchange_rails

#### exchange_rails_use_case

**The pitch to prime brokers / broker nodes:**

A PB (Clear Street, Ripple, any FCM) runs a white-label Darwin Exchange for their clients:

1. PB's clients pick DARWINs from the 13K universe via the allocation platform
2. Each client gets a single managed account (SMA) with all selected DARWINs
3. Darwin matching engine internalizes flow within the PB's client base (target: 76%+ IMR)
4. Only NET overflow → PB executes on exchange (CME/Eurex) via their own FCM
5. Clients' positions stay at the PB — zero counterparty risk to Darwinex

**Why the PB says yes:**
- Captures spread on ~76% of internalized flow (new revenue stream)
- Offers clients access to 13K certified managers (differentiation from other PBs)
- Reduces exchange costs for clients (better execution = stickier clients)
- The more clients on the node, the higher the IMR, the better for everyone
- Darwinex provides the brain (matching + risk + selection). PB provides the body (clearing + custody + balance sheet).

**Why this takes CME partially out of the equation:**
- At 76% IMR: only 24% of flow reaches the exchange
- The matched 76%: ZERO exchange fees, ZERO clearing fees, spread captured by the PB
- At scale across multiple PB nodes: cross-node matching further reduces exchange flow
- CME remains essential for price discovery + overflow — but ceases to be the primary execution venue

**Federated matching (future — connects to tokenization S2):**
```
PB Node A (Clear Street) ──→ internal matching (76%+)
                                    │ NET overflow
PB Node B (Ripple) ──────→ internal matching (76%+)
                                    │ NET overflow
                              CROSS-NODE MATCHING
                                    │ TOTAL NET
                              EXCHANGE (CME/Eurex)
```
Cross-node settlement via INDX token on-chain = the utility token use case for Ignacio (10 Apr call).

#### clear_street_as_exchange_rails_partner

**Clear Street** ($12B valuation, 700+ clients, FCM: CME/ICE/NODAL, cloud-native) is a direct candidate for Exchange Rails partner — and the connection is already warm:

- **Gregory Neuman** (White Bay) = family office of **Erie Cohen**, Clear Street founder
- Call 8 Apr: Gregory proposed Clear Street integration. Juan described DX as "capital marketplace software or SMA engine, matching buy-side and sell-side using Clear Street's balance sheet for netting"
- Gregory checking Clear Street UK rollout — geographic overlap with TTT FCA
- Clear Street targets emerging managers frustrated with legacy PBs (IB) — exact DX audience overlap

**Clear Street vs Ripple Prime (complementary, not exclusive):**

| | Clear Street | Ripple Prime |
|---|---|---|
| Focus | Traditional (equities, options, futures, FI) | Multi-asset (digital + traditional) |
| FCM | CME, ICE US, NODAL | CME (+ Coinbase via Nodal Clear) |
| Scale | 700+ clients, $16B balances | $3T+ cleared |
| Crypto | Expanding (Mar 2026) | Core strength (RLUSD) |
| Geography | US + UK rollout pending | US + global |
| Connection | Gregory (founder's family office) — warm | Ryan + Mike — in architecture electron |
| eX role | FCM + PB + 700 client distribution | FCM + PB + Cap Intro + RLUSD settlement |

Both could run Exchange Rails nodes simultaneously. Different client bases, additive matching pools.

#### dual_rails

The DARWIN Protocol decomposes into two infrastructure layers — two sets of rails:

| Rail | Name | Function | What it does |
|------|------|----------|--------------|
| **DARWIN Rails** | Develop Edge | Talent factory | Signal ingestion (13K traders), risk engine (VaR normalization, drift detection), track record certification (Quote), manager selection (predictive indicators, AI overlay), development funnel (prospect → member → supermember) |
| **Exchange Rails (eX)** | Match (Edge, Capital, Flow) | Matching + distribution | Matching engine (internal netting across ALL flow), execution (FIX to exchange, NET only), post-trade allocation (VWAP across SMAs), give-up (to investor FCMs), white-label Exchange instances for broker/PB nodes, settlement (INDX token for cross-node) |

**DARWIN Rails → develop your Edge. Exchange Rails → capitalize your Edge.**

A broker node runs BOTH:
- DARWIN Rails: Access to 13K trader universe, risk engine, selection tools
- eX Rails: Matching engine instance, execution via their FCM, give-up to their clients

They're separable. A PB might only want eX (bring their own managers). A development platform might only want DARWIN Rails (use their own execution). Together = full Protocol.

### ripple_partnership

Arb = tactical (cheaper execution, swappable). Ripple = strategic (structural, co-built).

| Darwinex provides | Ripple provides |
|---|---|
| Strategy origination (100K dataset, DARWIN selection, risk engine) | Balance sheet (faces investors as counterparty in Cap Intro) |
| Risk management (Quote, INDX construction, N strategies) | Clearing + custody (CME member, multi-asset, multi-FCM) |
| Signal processing (matching engine, position optimizer) | RLUSD settlement + DeFi distribution |
| Retail-facing distribution (the game, CIF partner, Tier 1 investors) | Institutional distribution (300+ clients, funds, allocators) |
| The PM brain | The PM body |

Symbiotic: investors too small for Ripple stay on Darwinex (swap model). Investors too large for Darwinex move to Ripple (Cap Intro). Darwinex = Ripple's retail extension. Ripple = Darwinex's institutional extension.

### distribution_channels

| Channel | Source | Type | Pipeline Status |
|---------|--------|------|-----------------|
| **Claudia Quintela** | Vibe Advisors | Compliance + investor intros | Active — FNY, White Bay, Boothbay routed |
| **Ripple Cap Intro** | Ripple Prime | FCM + Cap Intro balance sheet | Strategic — 300+ clients, funds, allocators |
| **Clear Street** | Gregory Neuman (Erie Cohen's family office) | FCM + PB + 700 clients | Warm — integration proposed 8 Apr. UK rollout pending. Founder's FO already exploring. |
| **Direct outreach** | Conferences, referrals | Juan + team | Ad hoc |
| **Exchange Rails (eX) nodes** | PBs, FCMs, broker nodes | White-label Darwin Exchange | Target model — PB runs own Exchange, matching internalizes 76%+ of flow. See §exchange_rails_use_case in PHENOTYPE--institutional-architecture.md |
| **Open Trust / leaderboard** | Platform organic | Self-serve (Tier 3 entry) | Future — when give-up infra is live |

**Claudia pipeline is the immediate channel.** She routes allocators, we handle from intro call onwards. Clear Street (via Gregory/Erie Cohen) and Ripple are the strategic eX Rails candidates — both are FCMs with large client bases that would benefit from running a white-label Darwin Exchange. Broker nodes (post-CIF) are the scale play.

### competitive_positioning

| Competitor | What they do | Why Darwinex wins |
|-----------|-------------|-------------------|
| **Span Cedar** | IB-based tracker marketplace | Failed as institutional platform (FNY tried). No risk engine, no matching, no IP protection. |
| **Interactive Brokers** | Self-directed platform | Amazing infra, terrible management. Every decision by one person. No risk normalization, no portfolio construction. |
| **Traditional CTA** | Single-manager, single-strategy | Darwinex = 250 managers, netting benefit, sentiment overlay, capacity management. Multi-strategy CTA at fraction of cost. |
| **Prop firms (FTMO etc.)** | Talent identification | No investment product. Funding-fee model. No institutional distribution. Track record portability problem. |
| **Copy trading (eToro, ZuluTrade)** | Retail social trading | No risk engine, no IP protection, no institutional wrapper, no matching benefit. |

**Unique advantages:**
1. Risk engine (real-time, arm's length, 10 years development)
2. Matching engine (76% IMR, exponential in N participants) — THE MOAT. Adding institutional flow increases matching for everyone (retail + institutional). Network effect.
3. 13K trader sentiment data (retail market sentiment as alpha source)
4. IP protection (positions encrypted, investor trades the DARWIN not the positions)
5. Capacity management (badges, estimated degradation per $ added)
6. Full tick-by-tick DD data without position disclosure
7. Scalable: give-up infra built once, replicable per strategy at zero marginal cost
8. Exchange Rails (eX): PBs run white-label Exchanges, internalizing 76%+ of flow. Each node adds to the network. Takes CME partially out of the equation.

### claudias_6_questions

| # | Question | Answer | Confidence | Source Needed |
|---|----------|--------|-----------|---------------|
| 1 | **INDX allocation/selection process — discretionary vs systematic?** | **Hybrid.** Selection of DARWINs into INDX is primarily systematic (Quote-based ranking, risk metrics, minimum track record length, diversification constraints). Weight allocation has a discretionary element (Martí/risk team can adjust for regime, capacity, correlation). Rebalancing triggers are systematic. | ⚠️ Medium — needs Martí validation | Martí confirmation of selection rules |
| 2 | **Split between discretionary and systematic managers?** | **Unknown precisely.** DARWINs include both discretionary traders (majority) and systematic/algo traders. Platform doesn't formally classify. Estimate: 60-70% discretionary, 30-40% systematic. Within INDX composition, this may differ. | ⚠️ Low — needs data | Labs MCP: strategy type classification per DARWIN in INDX |
| 3 | **Managed account mechanics — can investor choose their broker?** | **Not in the current structure.** INDX is an AMC issued by GentTwo. Investor buys the certificate through their broker/bank. Underlying execution is handled by TTT (FCA). Investor does NOT have a managed account — they have a certificate. If the investor wants a MANAGED ACCOUNT (SMA), that's a different product (not currently offered at scale). | ✅ High | AMC terms |
| 4 | **Margin requirements for typical managed account?** | **Not applicable for AMC.** The certificate is fully funded (investor buys at NAV). If the question is about UNDERLYING margin (what TTT posts for hedging), this is an operational detail: TTT posts margin with its prime broker for the residual overflow that isn't internally matched. Margin = ~20-30% of notional for FX CFDs (varies by instrument). | ⚠️ Medium — "managed account" may mean different things to investor | Clarify what Boothbay/White Bay mean by "managed account" |
| 5 | **Portfolio turnover?** | **High at the DARWIN level** (active traders, daily turnover). **Low at the INDX composition level** (DARWINs don't churn rapidly; INDX rebalancing is periodic, not continuous). **Needs quantification:** transactions per day per million of AuM. | ⚠️ Low — needs data | Labs MCP: INDX rebalancing frequency + underlying DARWIN average daily turnover |
| 6 | **Can investor pick a sub-bucket? Min AUM threshold?** | **Not currently.** INDX is a single portfolio. No sub-strategy buckets (e.g., "FX only" or "systematic only"). The framework envisions this as a future possibility (T28 signal processor rows, INDX composition customization). **Minimum AUM:** AMC minimum investment = **CHECK GentTwo OAT** (likely €100K-500K for institutional). | ⚠️ Medium | GentTwo OAT + product roadmap |

### open_questions

Merged from all three source files, deduplicated:

- [ ] FCM account minimums: what's the minimum SMA size at Ripple? At FNY's PB?
- [ ] Give-up agreement template: does FIA standard cover our multi-manager allocation model?
- [ ] Institutional reporting format: what do allocators like FNY expect? (GIPS? Custom?)
- [ ] Regulatory wrapper: is TTT's PM license sufficient, or do we need additional permissions for give-up model?
- [ ] Pricing for Tier 1: should we offer volume discounts on management fee?
- [ ] Allocation platform UX: what needs to change from retail to institutional skin?
- [ ] Compliance documentation: what does DD pack look like? (Form ADV equivalent, track record verification, risk methodology whitepaper)
- [ ] Timeline to first institutional SMA-at-PB trade: depends on give-up infrastructure (see §dev_requirements)
- [ ] NFA CTA registration for US allocators? AIFMD thresholds?
- [ ] FCA capital requirements for futures clearing activity?
- [ ] TTCA (Title Transfer Collateral Arrangement) feasibility for liquidity constraint?

#### data_gaps_blocking_quantification

| Data | Owner | Blocks |
|------|-------|--------|
| INDX NOP on TTT balance sheet | Jesús | Exact cost of capital, saving from offboarding |
| FCA capital consumed by INDX | Jesús/Nacho | Regulatory drag |
| All overflow volume (monthly notional by instrument) | Pablo (20d overdue!) | Hedging cost, exchange fee projection |
| Saxo spread + commission on overflow | Pablo | Current hedge cost baseline |
| INDX management + performance fee collected (actual) | Jesús | Actual INDX revenue |
| INDX share of internal matching (if any) | Pablo | Internalization benefit |
| Current $20BN/month instrument breakdown | Pablo | Futures contract mapping |

### dev_requirements

Phase 1 shrinks because the DARWIN engine ALREADY outputs FIX and ALREADY allocates at VWAP:

| Component | Status | Effort |
|-----------|--------|--------|
| FIX gateway | EXISTS (→ PrimeXM). Redirect to FCM. | 2-4 wks testing/cert |
| Order aggregation | EXISTS (DARWIN engine) | 0 |
| VWAP allocation | EXISTS (DARWIN engine) | 0 |
| **Give-up instruction output** | **NEW** — translate internal allocation → external give-up per FCM | 4-6 wks |
| **External reconciliation** | **NEW** — match DARWIN system ↔ external FCM reports | 4-6 wks |
| **Margin monitoring** | **NEW** — real-time for external accounts | 2-4 wks |
| Rounding engine | NEW | 1-2 wks |
| **Phase 1 total** | | **2-4 months** |

Phase 2 (Rival replaces PrimeXM): 6-12 months, overlapping.

First institutional trade on futures: **~3 months from green light.**

### conversations_needed

| Party | Topic | Priority |
|-------|-------|----------|
| Ripple Prime (Ryan + Mike) | Sign futures agreement. Pitch Cap Intro / strategy factory. RLUSD as margin. Carrying fee terms. | NOW |
| Arb (Adam + Rob) | Commercial proposals (pending). Execution rates for give-up. Rival tech call with Miguel (decouple from equity). | NOW |
| Miguel | Show market-facing stack. FIX redirect feasibility. Phase 1 timeline. Rival call with Rob. | Before off-site |
| Nacho | "Managing investments" covers N strategies + give-up? NFA CTA for US? AIFMD thresholds? FCA capital for futures? | Before off-site |
| Gregory Neuman / Clear Street | eX Rails pitch. Clear Street UK rollout status? Integration proposal follow-up. Share R&D credentials. | After Ignacio (10 Apr) |
| Jesús | INDX NOP, capital consumed, actual fee revenue, Saxo costs. | Needs Pablo data first |
| Pablo | Volume distribution, instrument breakdown, IMR by instrument, Saxo costs. 20 DAYS OVERDUE. | URGENT |

### conversation_angle_notes

**For investor conversations (FNY, White Bay, Boothbay, future):**
- Frame the matching engine as VALUE to the investor: "your execution costs drop because our matching engine internalizes 76%+ of flow before reaching the exchange"
- Frame single managed account as CAPITAL EFFICIENCY: "cross-margining across 250 managers in one account vs 250 separate accounts"
- Frame the network effect: "the more allocators on the exchange, the better the matching for everyone — including you"

**For prime broker conversations (Clear Street, Ripple, future):**
- Lead with eX Rails pitch: "run your own Darwin Exchange. Your clients get 13K traders. Our matching engine internalizes the flow. You capture the spread."
- Emphasize: this is NEW REVENUE for the PB (spread capture on matched flow + technology licensing)
- Emphasize: this makes the PB's clients STICKIER (better execution, unique product)
- Clear Street specific: "Gregory already proposed this integration. We're describing it as Exchange Rails."
- Ripple specific: "you're already our strategic partner. eX makes your 300 clients into a matching pool."

---

## HUMAN_SECTION

### Institutional Confidence — Merged Electron

This electron consolidates three previously separate files: the allocator's perspective (investor-journey), the investor-facing operating model (institutional-investor-model), and the execution/distribution infrastructure (institutional-architecture). Together they cover the full chain from discovery to scale for institutional capital entering the DARWIN system.

**Three investor tiers define the product surface.** Tier 1 allocators ($50M+, like First New York) want SMAs at their own prime broker via give-up. Tier 2 funds ($5-50M, like White Bay and Fasanara) use SMAs at Darwinex's PB (Ripple) or co-managed structures. Tier 3 strategic partners (brokers, exchanges) pursue JVs and distribution deals. The product for all of them: a terminal for trading traders — 13K independently risk-adjusted track records, filtered to ~400, with real-time risk normalization, IP protection, and consolidated SMA execution.

**The core economic transition is from swap to managed account.** A DARWIN today is a bilateral swap issued by TTT against its own balance sheet, fully hedged. At 15% cost of equity, hosting INDX ($45M AuM) on TTT's balance sheet is structurally loss-making: revenue $540K-1.4M/yr vs cost $900K-2.5M/yr. The managed account / give-up model eliminates the balance sheet cost entirely — same revenue, zero capital cost, zero hedging cost. The swing is +$1-3M/year. At $200M target AuM, the on-balance-sheet model is impossible. Off balance sheet is the only path.

**The four-book model** (CFDs, DARWINs, INDX, Prop) shows why: INDX currently bypasses the matching engine, gets zero internalization benefit, and pays full spread to Saxo. Moving INDX off balance sheet frees NOP, removes counterparty risk (the #1 institutional objection), and uncaps capacity.

**Current pipeline (as of 9 Apr 2026):** First New York (phase 2 to 3, second meeting with quant team scheduled), White Bay (phase 2 to 3, updated deck and DD call with Marti), Fasanara Open Quant (phase 5, active with 2M allocated at ~15M notional), Boothbay (phase 2, stale, needs Claudia follow-up and Claudia's 6 questions answered).

**Ripple Prime is the strategic partner** — Darwinex provides the PM brain (signals, risk management, strategy factory), Ripple provides the PM body (balance sheet, clearing, custody, 300+ client distribution via Cap Intro). Arb provides cheaper execution but is tactical and swappable. Clear Street ($12B valuation, 700+ clients) is the Exchange Rails candidate — Gregory Neuman (founder's family office) proposed integration on 8 Apr. Both Ripple and Clear Street could run Exchange Rails nodes simultaneously with different client bases and additive matching pools.

**Exchange Rails (eX)** is the scale play: PBs run white-label Darwin Exchanges for their clients, matching internalizes 76%+ of flow within each node, only net overflow hits the exchange. Each node adds flow to the network. DARWIN Rails develop edge; Exchange Rails capitalize it. They are separable — a PB might want only eX, a development platform only DARWIN Rails.

**Dev timeline to first institutional futures trade: 2-4 months.** The DARWIN engine already outputs FIX and allocates at VWAP. New builds: give-up instruction output (4-6 wks), external reconciliation (4-6 wks), margin monitoring (2-4 wks).

**Competitive gap confirmed.** FNY tried Span Cedar and Interactive Brokers — both failed. Nobody does institutional-grade retail talent aggregation with risk normalization, matching, IP protection, and give-up execution. Darwinex is building the category.

**Claudia Quintela is the most productive distribution channel** — she routed FNY, White Bay, and Boothbay. Her pipeline plus Ripple's Cap Intro plus Clear Street's 700 clients form the three concurrent distribution paths.

**The INDX AMC (GentTwo, ISIN CH1403552396)** is the current institutional wrapper. Swiss-issued, FCA-managed, daily liquidity. Super Global distributes price notifications to European banks (live since 3 Apr 2026). The OAT (Order Acceptance Template) is blocking secondary market transactions and requires prompt approval.

---

## See Also

- [[PHENOTYPE--current-state]] — honest assessment grounding every claim
- [[PHENOTYPE--matching-engine]] — INDX construction mechanics
- [[PHENOTYPE--group-structure]] — legal structure for operational DD
- [[PHENOTYPE--business-units]] — 4 BU architecture
- [[GENOTYPE--vbm]] — VBM trust waterfall
- [[BOARD_DECK_FRAMEWORK]] — internal deck (DO NOT share with investors)
- [[CIF_DEAL_FRAMEWORK]] — CIF separation enables broker node model
- [[DELIVERABLES]] — Claudia pipeline tracking

---

*Merged 13 Apr 2026 from PHENOTYPE--investor-journey.md, PHENOTYPE--institutional-investor-model.md, PHENOTYPE--institutional-architecture.md. The file to review before every institutional investor meeting.*
