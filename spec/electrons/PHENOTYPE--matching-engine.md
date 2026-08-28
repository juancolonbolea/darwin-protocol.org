---
type: electron
atom: REWARD
audience: [management, staff]
orbit: 1
language: llm
status: ACTIVE
last_updated: 2026-04-11
owns: CCP/the internal book mechanics. NOP limits. Partial matching. Flow vs stock attribution. Internal matching rate. Empirical IMR by segment + trade size (Q1 2026 XCore data).
chain_step: 4
source: knowledge/CCP_MATCHING_ENGINE.md (primary), Jarrod meeting 1 Apr 2026
defers_to: "[[CCP_MATCHING_ENGINE]]"
cross_refs:
  - atom: DEVELOP
    why: "Membership fee funds the rails the matching engine runs on"
  - atom: PROTOCOL
    why: "Internal matching = friction elimination = surplus source"
  - electron: PHENOTYPE--risk-engine
    why: "Risk engine is upstream — manufactures the standardised DARWIN before it reaches the internal book"
  - electron: PHENOTYPE--synthetic-capital
    why: "Booster/PA/DarwinIA flow feeds through this matching engine"
  - knowledge: "[[DATA_ACCESS]]"
    why: "Canonical data source reference — field-level inventory of all queryable sources"
protocol_component: [Matching Engine]
protocol_layer: Machine
protocol_piece: Economy
---

# Matching Engine — CCP / the internal book

Detailed matching engine mechanics live in [[CCP_MATCHING_ENGINE]].
This electron is retained as a loading index entry and wikilink target.

> The DARWIN economy develops and distills edge on the DARWIN rails, which mint trust. Trust begets both edge — via the collective insight in the dataset — and confidence. Both compound across every edge development vector via the economy that developed them.

## Architecture

User-agnostic mutualised market maker. The CCP (Central Counterparty) operates per-instrument NOP (Net Open Position) limits — not per-member. Risk boundaries trigger overflow to external market.

**Mutualized monopoly (constitutional rule):** The CCP is the sole resting counterparty inside the internal book. No member may place limit orders internally — all member orders are market orders. This ensures all internal spread capture is mutualized, prevents private extraction at the microstructure level, and preserves user-agnosticism. Limit orders are permitted only in the overflow book, facing the external market.

the internal book = the total aggregate volume across ALL investors in a DARWIN. One signal from a DARWIN generates one trade to the internal book. Post-execution, volume is allocated pro-rata to individual investors.

## How matching works

Every trade to the internal book is split into tranches:

1. **Absorbed tranche** — matched internally against opposing flow already in the book. Spread saved. No external execution cost. This IS the symbiosis.
2. **Overflow tranche** — exceeds book capacity or no opposing flow. Routed to external market (LPs). Spread paid. This IS the trust test against the outside market.

The split is path-dependent: it depends on the book's current NOP state when the trade arrives. Priority ordering determines which trades get absorbed first.

**Partial matching is the norm.** A single trade may be partially absorbed and partially overflowed. The ratio is the tranche split.

## Two revenue streams

| Stream | Source | Mechanic |
|--------|--------|----------|
| **Flow (delta)** | Per-trade | CCP captures ~35% [[DATA_SOURCES#imr_platform]] × spread on absorbed tranches. Overflow pays full external bid/ask. |
| **Stock (NOP)** | Per-day carry | CCP transfers 95%+ of NOP to external market. Retained 5% = netting value kept. Overnight financing accrues on retained NOP. |

## Key metrics

- **Monthly volume:** ~22BN notional (as of Jan 2026)
- **Internal matching rate (IMR):** ~35% platform-wide (~7-8BN/month matched internally) [[DATA_SOURCES#imr_platform]]
- **NOP transfer:** 95%+ to market (CCP retains ~5% as netting value)
- **IMR formula:** `IMR_j = 1 - (|Net_j| / Gross_j)` per instrument j. IMR=100% (perfectly balanced), IMR=0% (all one direction)
- **BookIMR:**
  - definition: "System-wide aggregate IMR across all instruments and all flow sources entering the internal book. BookIMR = 1 − (|aggregate net position| / aggregate gross flow)."
  - current_value: "≈35% platform-wide (Q1 2026) [[DATA_SOURCES#imr_platform]]"
  - note: "BookIMR is a system-level metric, not per-DARWIN. It depends on the directional diversity of the total flow pool. In balanced markets (diverse DARWINs), BookIMR is higher. During trends (e.g., gold Q1 2026), directional concentration drags BookIMR down. Hedge flow from ITM synthetic allocations enters the internal book and is matched at BookIMR like all other flow."
  - used_by: "[[PROP_BOOK_CAPITAL_DEPLOYMENT]] ROSC formula"
- **Circuit breakers:** IMR <30% = escalate. IMR <15% = halt new allocations.

### Empirical IMR by segment and trade size (Q1 2026, XCore)

> Validated 9 Apr 2026. The ~35% platform-wide IMR masks massive variation by flow source.
> Full data + BU P&L impact in [[PHENOTYPE--pl-data-sources]] § "CRITICAL: Internalization Rate".

**IMR by connector (Q1 2026, $76.2B total):**

| Flow source | Volume | % total | IMR | % of all internalization |
|-------------|--------|---------|-----|------------------------|
| Retail traders (MT4+MT5) | $18.7B | 24.6% | **67.9%** | **44.4%** |
| Investors (darwinex_inv_real) | $51.9B | 68.2% | **27.5%** | 49.9% |
| Darwinia synthetic (inv_real_fut) | $3.6B | 4.8% | **45.0%** | 5.7% |
| Boosters/AUM (inv_real_aum) | $1.8B | 2.4% | **0.0%** | 0% |

**IMR by trade size (March 2026) — confirms smaller tickets internalize far more:**

| Size bucket | Retail IMR | Investor IMR |
|-------------|-----------|-------------|
| <5K | 81.0% | 69.3% |
| 5K-50K | 78.4% | 64.5% |
| 50K-100K | 68.1% | 45.1% |
| 100K-500K | 54.6% | 27.6% |
| 500K+ | 32.9% | 10.9% |

**Three compounding effects:** (a) retail trades are smaller → higher IMR, (b) at same size, retail is more directionally diverse → higher IMR, (c) investor volume concentrated in 100K+ where IMR is 11-28%.

### IMR collapse in trending markets → synthetic book cost inflation

IMR is not just a matching efficiency metric — it directly drives the cost of the synthetic book's gamma scalping hedge (see [[MARKET_RISK_FRAMEWORK]] § Operational Hedging Model).

| Market regime | IMR behavior | Effect on synthetic book |
|---|---|---|
| **Mean-reverting** | Opposing DARWIN positions net internally → high IMR | Gamma scalping rebalances are cheap (most flow matched internally, low commissions to LPs). NOP contained. |
| **Trending** (e.g. gold rally Q1 2026) | One-directional flow → IMR collapses toward 0% on trending asset | Each rebalance trade goes external → commissions spike. NOP swells → balance sheet consumed. Cost compounds because gamma peaks at ATM (max rebalancing frequency during OTM→ITM migration). |

The three compounding effects above (small/diverse → high IMR) work IN REVERSE during trends: large, correlated, one-directional investor flow has IMR as low as 0% (Boosters/AUM) to 11% (500K+ investor trades). This is the cost channel that makes the iceberg emergence scenario (MARKET_RISK_FRAMEWORK § Iceberg Dynamics) mechanically inevitable in strong trends.

**eX network implication:** Each broker node brings independent retail flow (small, diverse, high-IMR). More nodes = more netting opportunity for the ENTIRE network. This is the empirical proof for the e×X → e^X scaling thesis applied to matching.

## What matching IS (broadened definition)

Matching extends beyond trade flow. The DARWIN economy matches ALL participants who contribute to developing and compounding edge:

| Match type | What's matched | Friction eliminated |
|-----------|---------------|-------------------|
| Trade flow | Buyer ↔ seller inside book | External spread |
| Edge ↔ confidence | Trader track record ↔ investor capital | Information asymmetry |
| Student ↔ educator | Learning demand ↔ teaching supply | Discovery cost |
| Signal ↔ processing | Raw strategy ↔ risk adjustment | Processing cost |
| Track record ↔ attestation | Trading ↔ Risk Engine verification | Trust verification cost |

Every match eliminates friction between parties who would otherwise pay a middleman or go without. Total "spread" = total friction cost of absence of trust across ALL matching dimensions.

## INDX replication mechanics

DARWIN execution: 1 signal → 1 trade to the internal book (total volume all investors). Post-execution: volume allocated pro-rata to individual investors. Risk management generates ~1 net adjustment trade/minute across all DARWINs.

**No intra-INDX netting** — DARWINs A and B generate separate trades. Matching happens at the CCP level across ALL flow (DARWIN, booster, broker, overlay), not between individual DARWINs.

Matching cannot be measured from a single source. It requires the complete the internal book trade log across ALL sources.

## Attribution

**Flow attribution (per-tranche, proportional):** Each trade splits into absorbed/overflow tranches. Per-user value = absorbed tranches × spread saved vs overflow tranches × spread leaked.

**NOP attribution (path-dependent):** For each user: how much did their position reduce or increase the book's NOP over time? Integrate over time. Users whose positions reduce NOP are net value creators (internal liquidity providers).

**The piranha paradox:** Identical P&L can have opposite system value. Piranha A: negative flow attribution (costs CCP spread) but positive NOP attribution (reduces book exposure). Piranha B: vice versa. Partial matching tranche ratios identify which piranhas are structural internal liquidity providers.

## Principal component decomposition

FX positions decompose to currency components. Example: +100K EURUSD = +100K EUR, -100K USD. System-wide: aggregate components across all traders. Trending market (USD weak) → all long USD pairs → 0% IMR at instrument level. But at component level, USD legs partially net → IMR partially recovers. Component-level IMR catches netting invisible at instrument level.

## Data sources

- **DuckDB (DB 181):** `operations_volume` (daily volume by instrument, `volumebbook`/`volumenobbook`), `primexm_operations` (with markup), `investors_bulk_order_details` (PrimeXM→DARWIN bridge)
- **PrimeXM (DB 65):** `deal`, `leg` (per-fill, `b_book` field: 0=A-book, 1=B-book), `order`. 34 distinct providers; `darwinex_maker` = internal.
- **Labs MCP:** DARWIN OHLC, portfolio allocations

## Strategic direction (15 Apr 2026)

**IMR trajectory is the quantitative measure of the meritocratic mission.** Every percentage point of internal matching = Main Street trading reclaimed from Wall Street extraction. Today 35%. Direction of travel: 70%+ as member + product diversity grows. 100% is ideological (practically insular; overflow provides price discovery). Optimal is probably 70–85%.

**Own matching engine — no limit orders.** PrimeXM + Rival (Arb-owned) are positioned as Protocol REDISTRIBUTORS short-term (infrastructure members — see [[OPEN-SOURCE-STRATEGY]]), but the long-term strategic move is our own matching engine with two design principles:

1. **Own the engine** — defends against CME / exchange absorption as the DARWIN network scales. They will try to buy or fight us; own infrastructure is the defensive asset.
2. **No limit orders** — keeps HFT / extractors out by design. Limit order books favour sophisticated participants who cherry-pick fills at the expense of market-order takers. Market-orders-only = symmetric pricing for all participants. **Meritocratic execution architecture.**

See [[SETTLEMENT-ARCHITECTURE]] §8 (IMR mission measure) + §11 (own engine strategic defense).
