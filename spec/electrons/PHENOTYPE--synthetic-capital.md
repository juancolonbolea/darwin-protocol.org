---
type: electron
atom: REWARD
audience: [management, staff]
orbit: 1
language: llm
status: ACTIVE
last_updated: 2026-04-11
owns: Synthetic vs live capital. Two-phase mountain. Capped vs uncapped. Option-theoretic model. Risk framework.
chain_step: 3
source: knowledge/MARKET_RISK_FRAMEWORK.md (primary), Jarrod meeting 1 Apr 2026
cross_refs:
  - atom: DEVELOP
    why: "Booster is part of the developing trader's progression"
  - atom: PROTOCOL
    why: "Synthetic = zero-sum proving ground, overflow = trust-minting against external market"
  - electron: PHENOTYPE--matching-engine
    why: "Booster/PA/DarwinIA flow feeds through the CCP matching engine"
  - electron: PHENOTYPE--risk-engine
    why: "Hedging model depends on the 6.5% VaR guarantee produced by the risk engine upstream"
  - electron: PHENOTYPE--booster-mechanics
    why: "Booster-specific pricing and HWM mechanics"
protocol_component: [Matching Engine, Options Layer]
protocol_layer: Machine
protocol_piece: Economy
---

# Synthetic Capital — The Two-Phase Mountain

## The two phases

The developing trader's mountain has two distinct phases of capital:

### Phase 1: Synthetic capital (zero-sum inside the system)

Boosters, PAs, and DarwinIA provide synthetic capital — simulated investment that behaves like real capital but is funded by the community itself (subscriber premiums + internal matching surplus).

- **Capped**: maximum leverage limited by the number of payers into the cash account
- **Zero-sum inside**: winners are funded by current losers. When a user is underwater, the community profits (their premium goes to the community pocket). This is structurally a "pony scheme" — but a transparent one where all terms are public and the Quote attests results.
- **Purpose**: proving ground. Demonstrates edge before real capital is at risk.

flow_mechanics:
  otm: "OTM synthetic = zero replication flow, zero external execution. The allocation is a paper contract — no positions, no trades, no flow through Book 100. Premium (if any) is collected. Zero cost."
  itm: "ITM synthetic triggers hedge trades (delta × 15% × notional). Hedge flow enters the spread capture book (Book 100) and is matched at BookIMR. Unmatched portion goes to external LP (cost + NOP). Perf fee obligation crystallises."
  transition: "OTM→ITM migration triggers hedge flow generation. Mass OTM→ITM (trending market) = iceberg scenario — hedge flow surges, directional concentration drags BookIMR down, NOP spikes."

### Phase 2: Live/overflow capital (uncapped external)

When a developing trader crosses the high water mark — beats the spread, demonstrates edge — they become a Member. The community is now at risk because it must pay hedge costs against the external market, covered by the premium charged.

- **Uncapped**: can attract infinite outside investor capital because it's backed by proven, attested edge
- **Real trades**: overflow to external market where edge is tested against real counterparties
- **Trust-minting**: every profitable overflow trade mints trust (INDX). This IS the trust chain in action.

## The transition (THE GATE)

The only way to move from synthetic to live is to **beat the spread** — beat the community-as-market-maker. The spread IS the selection threshold.

Internal matching means the community doesn't incur transaction costs when users trade against each other — value transmission without extraction. When a user breaks through the HWM, they've proven edge sufficient to justify external hedging costs.

## Option-theoretic model

Darwinex writes short calls on every synthetic allocation:

```
Synthetic allocation = Short call
Strike = HWM (or base value)
Notional = 15% × allocation
Payoff = max(0, DARWIN return - strike) × 0.15 × notional
```

Asymmetry: Darwinex participates in losses (hedging cost at 100%) without participating in gains (performance fee = 15% of upside only).

## Steady-state distribution

| Category | % of book | Delta | Behaviour |
|----------|-----------|-------|-----------|
| OTM (underwater) | ~75% | <0.5 | Community profits. Premium accumulates. |
| ITM (above HWM) | ~15% | >0.5 | Members. Community at risk. Hedge costs active. |
| ATM (near HWM) | ~10% | ≈0.5 | Maximum gamma. Transition zone. |

**Steady-state condition:** float income (premiums from OTM) >> performance fee payouts (to ITM members). The 75/15/10 distribution is the system's equilibrium.

## The emergence risk (e < 0 scenario)

When a strong trend hits popular assets (Gold, EURUSD, S&P 500), three failures occur simultaneously:

1. **Iceberg emerges** — OTM positions migrate to ITM en masse. 75% OTM → much less.
2. **IMR collapses** — correlated positions don't net. IMR drops from >50% to 10-20%.
3. **Balance sheet explodes** — external hedge volume spikes, variation margin surges.

**Worked example:** €60M book, Gold +20%. 200 DARWINs, 40 heavily Gold-exposed. Delta surge from 0.53 → 0.95. Net cost: ~€317K in one month (€240K performance fees + €76K gamma/hedge P&L + €5K execution - €3.7K premium offset).

**Defence stack:** (1) Internal matching (IMR>50%), (2) INDX/Long Book as gamma hedge, (3) IM protocol network (20% success fee on investor capital) as revenue hedge, (4) subscription + premium recycling as cash flow hedge, (5) intertemporal diversification as structural buffer.

## Book size and products

Gross synthetic notional: €518.4M (April 2026). Boosters: €173.7M (1,920 DARWINs). DarwinIA: €227.9M (5,927). PAs: €116.7M (1,167). ~80% of the book is OTM at any given time.

| Product | Premium | Tenor | HWM | Notional |
|---------|---------|-------|-----|----------|
| Booster | €125–€930 | 3/6/12m | Quarterly | 15% × €50K–€200K |
| DarwinIA Silver | €0 (gifted) | 3m | Monthly (ratchet) | 15% × €30K–€100K |
| DarwinIA Gold | €0 (gifted) | 6m | Monthly (ratchet) | 15% × €100K–€500K |
| Permanent Allocation | €175–€1,295 (one-time) | Indefinite | Quarterly | 15% × €100K (±20%) |

DarwinIA cost budget: ~€100K/month from piranha spread rescue (€10/month × ~10,000 subscribers).

## Data sources

- **PRODX (DB 3):** `bc_challenge_participation` (lifecycle), `bc_allocation_position` (capital over time), `bc_competition_ranking` (DarwinIA rankings), `dx_trader_pfee_payment` (payouts)
- **DuckDB (DB 181):** `all_fees` (pre-joined fee data), `bc_life_time_value_periods` (LTV)
- **Labs MCP:** PA/Booster status, allocation amounts
- **Data Portal MCP:** trade-level INDX data, commissions
