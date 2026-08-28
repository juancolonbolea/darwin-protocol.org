---
type: electron
atom: DEVELOP
orbit: 1
audience: [management, staff]
language: llm
status: ACTIVE
last_updated: 2026-04-12
owns: Edge-minting pipeline. Five member actions. INDX funnel KPIs. Credibility rate. Causal chain direction.
chain_step: 2
source: knowledge/_archive/INDX_CREDIBILITY_PIPELINE.md (primary), Jarrod meeting 1 Apr 2026
cross_refs:
  - atom: PROTOCOL
    why: "Credibility rate = e = the north star"
  - atom: DEVELOP
    why: "Member actions = how developing traders contribute to the pipeline"
  - electron: PHENOTYPE--risk-engine
    why: "Risk engine standardises DARWINs (6.5% VaR) — prerequisite for DETECT step in the pipeline"
  - electron: PHENOTYPE--matching-engine
    why: "Matching is a consequence of the pipeline, not the cause"
protocol_component: [Trust Signal]
protocol_layer: Application
protocol_piece: Meritocracy
---

# INDX Pipeline — Edge Minting

## The causal chain (get this right)

**CORRECT direction:**
SOURCE winners → DEVELOP winners → DETECT edge (risk engine) → COMBINE uncorrelated winners → INDX beats market → CREDIBILITY (trust compound rate) → more trust → more members → more flow → more matching → more spread rescue.

**WRONG direction (the old framing):**
Optimize matching → more spread → INDX grows.

**The point:** Winners are the chicken. Credibility (INDX beating the market) is the egg. Everything else — matching, spread rescue, flow — is a CONSEQUENCE of having winners, not a cause. The most important metric is the rate at which the meritocracy is minting trust against the outside market, as reflected by the INDX.

If INDX beats market: trust grows → more AuM → more capital → more winners attracted → more diversity → INDX beats MORE → credibility compounds.

If INDX does NOT beat: no credibility → trust stalls → members leave → flow drops → no matching → no spread rescue → no operational surplus → no rewards → winners leave → INDX drops further.

## Five member actions (the pipeline)

Every participant in the DARWIN economy performs one or more of these actions. Detection is NOT a member action — the Risk Engine detects edge (the DARWIN Quote). Members don't detect; the math does.

| Action | What | Who |
|--------|------|-----|
| **SOURCE** | Bring edge into the economy | Referrers, partners, marketing |
| **DEVELOP** | Accelerate edge (teach, coach, tools, nudging) | Educators, 49x engine, community |
| **CONTRIBUTE** | Produce ΔQuote (trade, signals, track record) | Developing traders |
| **PROCESS** | ΔQuote → Confidence (analyse, allocate, assemble uncorrelated winners) | Analysts, portfolio managers, algorithms |
| **COMPOUND** | Produce Confidence (allocate capital, deploy INDX, match credibility with outside confidence) | Investors, the venue |

All → **REWARD** (INDX minted).

**Formula for every action:** How much `ΔQuote × Outside Confidence` did your action produce?

## Processing — what matters for INDX

For INDX = ΔQuote × Outside Confidence, what matters:
- Which DARWINs have genuine edge (quote going up)?
- Which are uncorrelated (<0.7)?
- What weights maximize collective edge while minimizing risk?
- When to rebalance (for ALPHA, not matching efficiency)?

What does NOT matter (directly): matching rate, spread rescued, member count. These matter for BUSINESS (revenue, cost, growth) but are CONSEQUENCES, not inputs to edge.

## INDX Funnel KPIs (edge-minting, not flow/matching)

| KPI | What it measures | Pipeline action |
|-----|-----------------|-----------------|
| Edge sourced | New DARWINs entering the economy | SOURCE |
| Edge developed | Existing DARWINs improving (quote accelerating) | DEVELOP |
| Edge contributed | DARWINs with persistent edge (quote going up) | CONTRIBUTE |
| Edge processed | Uncorrelated combination improves INDX over individual (diversity premium) | PROCESS |
| Edge compounded | Capital deployed behind credibility; outside confidence attracted | COMPOUND |
| **INDX minted (credibility rate)** | **ΔQuote × Outside Confidence = MASTER KPI** | ALL |
| Edge persistence | How long does DARWIN edge last before decay? Rebalancing signal. | CONTRIBUTE |
| Edge correlation | Avg pairwise correlation among INDX DARWINs. Lower = more minting power. | PROCESS |

## Funnel conversion KPIs

| Transition | What | Gate |
|-----------|------|------|
| Prospect → User | Acquisition | Sign up + subscribe |
| **User → Member** | **THE GATE** | **First INDX mint. "Until all it takes is merit."** |
| Member → Owner | Capital deployment | Deploying INDX as capital (shareholder path) |

Current conversion: ~1% (Subscriber → INDX). This is a feature, not a bug — the meritocratic gate ensures only proven edge mints trust.

The difficulty of tapping into this meritocratic edge should INCREASE as the system becomes more successful. The bar rises.

## INDX formula

```
DARWIN e^X:
  e = edge minted (credibility rate = ΔQuote × Outside Confidence)
  ^X = community (trust stock)
  e^X = edge compounded through community = INDX
```

## Data sources

- **Labs MCP:** INDX AUM, returns, DARWIN OHLC, scores, allocations
- **DuckDB (DB 181):** `all_fees`, `return_eom`, `darwin_fund_stats`, `investments_eom`
- **PRODX (DB 3):** `dx_trader_pfee_payment` (THE GATE), `dx_pfees_estimated`, `fi_darwin`
- **S3:** `s3://prodx-data-lake/data/trader_pfees_estimated_historic/` (monthly PFee estimated, Sergio building since Dec 2025)
