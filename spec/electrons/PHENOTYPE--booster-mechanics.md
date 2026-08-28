---
type: electron
atom: REWARD
audience: [staff]
orbit: 2
language: llm
status: ACTIVE
last_updated: 2026-04-16
owns: Booster/PA/DarwinIA pricing. Premium economics. HWM mechanics. Delta hedging. Emergence risk parameters.
chain_step: 3
source: knowledge/MARKET_RISK_FRAMEWORK.md (pricing + hedging), knowledge/_archive/MEMBER_TAXONOMY.md (enjoyment model), Jarrod meeting 1 Apr 2026
cross_refs:
  - atom: DEVELOP
    why: "Booster = first synthetic capital step for developing trader"
  - electron: PHENOTYPE--synthetic-capital
    why: "Parent context: two-phase mountain and option model"
  - electron: PHENOTYPE--risk-engine
    why: "Booster pricing uses Black-Scholes on VaR-normalised vol — 6.5% guarantee comes from the risk engine"
  - electron: PHENOTYPE--matching-engine
    why: "Booster flow feeds through CCP matching engine"
protocol_component: [Options Layer]
protocol_layer: Application
protocol_piece: Economy
---

# Booster Mechanics — Synthetic Capital Products

## Boosters challenge INDX — evolutionary role in trust-flow reinvestment

Boosters and INDX are two selection pressures operating on the same population. INDX selects top-down (algorithmic, backward-looking). Boosters select bottom-up (market mechanism, forward-looking conviction). The tension between them IS the meritocracy's immune system.

### V→S→I→P+C mapping

| Stage | INDX role | Booster role |
|---|---|---|
| **Variation (V)** | Constrains — evaluates existing universe only | EXPANDS — providers who wouldn't pass INDX's filter enter with capital at risk |
| **Selection (S)** | Algorithmic, backward-looking | Market mechanism, forward-looking (willingness to pay = conviction signal) |
| **Inheritance (I)** | Successful providers keep allocation | Successful Booster providers GRADUATE to INDX — proving ground before inheritance |
| **Propagation (P)** | 75% of perf fees flow to providers | Failed Booster premia RECYCLE through Prop → reinvestment → better rails |
| **Conservation (C)** | Trust stock persists in PB account | Nothing wasted — success enriches INDX universe, failure funds system improvement |

### The open loop

Without Boosters, INDX is a closed loop — it can only discover what its model already knows how to look for. With Boosters, providers who believe they have edge BUT don't fit INDX's model can PROVE it with capital at risk. Successful Booster providers are anomalies that force INDX methodology revision. Boosters are experiments that challenge the theory.

### The 25/75 ratio inversion

| Flow | Split | Direction |
|------|-------|-----------|
| INDX perf fees | 75% to providers, 25% to platform | Trust flows OUT to proven edge creators |
| Booster premia | 25% to Zero, 75% to Prop | Trust flows IN from edge aspirants |

Same ratio, opposite direction. Boosters are the ENTRANCE FEE to the trust economy. INDX is the DIVIDEND from membership. Pay to prove → prove to earn → earn to compound → compound to propagate.

### Reframing Prop's role

Prop isn't just writing options. Prop is the gatekeeper of the trust economy's intake valve. The 75% float is RISK CAPITAL that the system deploys to test new entrants. The "expected payout" isn't a cost — it's the price of discovering new edge. The margin is a byproduct of selection efficiency.

### Earn then Boost — process-based, not outcome-based (20 Apr)

Current model rewards the RESULT only: pay premium → synthetic capital → beat HWM → payout. The new model rewards DEVELOPMENT: earn the right to capital through demonstrated process, then boost what you earned.

**Funnel gate sequence (no skipping):** Silver (free, V=try) → Gold (free, S=prove) → **Earned Booster** (paid, I=amplify) → INDX (real capital, I=inherit).

The V→S→I phases are separated by gates, not collapsed into a single premium-for-outcome swap:
- Silver: free entry, earn INDX through perks (Variation)
- Gold: free, algorithmic selection against peers (Selection)
- Earned Booster: only those who cleared Silver + Gold can buy — pre-selected pool makes premiums CHEAPER, Prop risk LOWER
- INDX: sustained earned Booster performance → real capital allocation (Inheritance)

**What this kills:** adverse selection. Earning IS the selection — by the time a provider boosts, the system already knows they have edge. Drift gap narrows, Booster pricing improves, Prop margin maintained.

**What this differentiates:** every competitor rewards outcome; Darwinex rewards process. Outcome follows, but the economics track development. Canonical: [[DARWIN_ECONOMY_V01]] §10. The V→S phase separation (Silver = V, Gold = S gate, Earned Booster = I amplification) maps directly to the forces-channels-actions closed loop in [[DARWIN_ECONOMY_V01]] §10.1; the Normalisation Principle ([[CONSTITUTION]] Named Principles) is why the gate is a normalised performance filter, not a score. The Silver→Gold→Earned Booster→INDX funnel is the merit-driven **upward graduation path** of the DWX↔INDX currency boundary — each stage burns V (effort) and mints selection evidence, culminating in INDX mint at first qualifying cycle. See [[DARWIN_ECONOMY_V01]] §10.2.

### The DarwinIA bridge — three selection mechanisms

| Mechanism | Selection type | Who pays | BU | V→S→I→P stage |
|-----------|---------------|----------|-----|----------------|
| Silver DarwinIA | Algorithmic competition | System (free to provider) | Zero (CAC) | **Variation** — cast the net wide |
| Gold DarwinIA | Algorithmic competition, higher bar | System (free to provider) | Exchange (selection pipeline R&D) | **Selection** — 6-month proving ground |
| Boosters | Self-selection (conviction) | Provider (premium) | Prop (float) | **Selection** — parallel, market-driven |
| INDX allocation | Algorithmic + proven track record | Investor capital (AuM) | Exchange | **Inheritance** — real capital flows to proven edge |

Silver = scholarship for promising talent (Variation). Gold = fellowship for near-proven edge (Selection). Boosters = self-funded residency (parallel Selection). INDX = tenure (Inheritance).

Gold is NOT Silver-but-bigger. Gold is Exchange's R&D pipeline — its investment in the next generation of INDX providers, funded by the 25% platform share of perf fees.

---

## How it works for the member

When a developing trader buys a Booster, they are purchasing synthetic capital — simulated investment that behaves like real capital. The community writes a short call option on their performance.

**Underwater (below HWM):** The community profits. The premium the member paid goes straight into the community pocket. The community is the market maker — it bet against the trader and won. No external hedging required.

**Above HWM (proven edge):** The member becomes a Member. The community is now at risk — it must pay the hedge costs against the external market. The premium charged for the Booster covers this hedging cost. Internal matching (members trading against each other) means the community doesn't incur transaction costs — value transmission without extraction.

## Product pricing

### Booster (Vanilla Call)

| Tier | Premium | Tenor | HWM | Notional (15% × allocation) |
|------|---------|-------|-----|---------------------------|
| €50K | ~€125-175/month | 3/6/12 months | Quarterly | €7,500 |
| €100K | ~€250-350/month | 3/6/12 months | Quarterly | €15,000 |
| €200K | ~€500-930/month | 3/6/12 months | Quarterly | €30,000 |

Black-Scholes pricing. VaR-normalised annual vol ≈ 22.5% (σ_monthly ≈ 6.5% by construction).

Example €50K Booster at different vols:
- 15% annual vol → 1.85% premium (€139/month)
- 20% vol → 2.33% (€175/month)
- 25% vol → 2.90% (€218/month)

### DarwinIA (Cliquet/Ratchet Option)

| Tier | Premium | Tenor | HWM | Notional |
|------|---------|-------|-----|----------|
| Silver | €0 (gifted) | 3 months | Monthly ratchet | 15% × €30K-€100K |
| Gold | €0 (gifted) | 6 months | Monthly ratchet | 15% × €100K-€500K |

Premium = €0 because funded by piranha spread rescue. Cost budget: €10/month × ~10,000 subscribers = €100K/month.

More expensive than vanilla (HWM ratchets up after each sub-period gain — strike can never go down). Lower effective delta. Gamma choppier (discrete HWM events).

### Permanent Allocation (Perpetual Option)

| Premium | Tenor | HWM | Notional |
|---------|-------|-----|----------|
| €175-€1,295 (one-time) | Indefinite | Quarterly | 15% × €100K (scales ±20% with performance) |

Amortise premium over effective duration (avg retention ~2.5 years). Duration risk = longest tail (high performers hold 5+ years, premium may be insufficient).

## Delta hedging

```
Hedge_i = Δ × 0.15 × N × w_i × d_i
```

Where: Δ = call delta, 0.15 = fee factor, N = notional, w_i = component weight, d_i = direction.

Multi-product delta adjustment by tenor: Silver (T=0.25), Gold (T=0.5), 12m Booster (T=1.0), PA (T=2.5).

**Portfolio netting:** Compute hedge per DARWIN per component → aggregate across ALL DARWINs → net long/short → execute net. Low correlation (<0.7 for INDX, <0.95 for DarwinIA) = offsetting positions. Net hedge volume << gross.

## Circuit breakers

| Signal | Threshold | Action |
|--------|-----------|--------|
| IMR per instrument | <30% | Escalate to risk committee |
| IMR per instrument | <15% | Halt new allocations |
| Gamma hedge coverage | <0.2 | Escalate |
| Gamma hedge coverage | >0.5 | Normal operations |

Gamma hedge coverage = INDX notional on ITM traders / synthetic notional on ITM traders. Can never reach 1.0 (synthetic includes pre-INDX traders by design).

## Physical-measure pricing — expected payoff model (Javi, Apr 2026)

Source: `bs_negative_drift.py` (Javi → Martí → Juan, 16 Apr 2026).

The risk-neutral BS above prices what a hedgeable option COSTS. But Boosters are not traded on a liquid market — there's no arbitrage-free pricing requirement. What Prop needs is: **what do we EXPECT to pay out?**

This model uses the **physical measure** — real-world drift, not risk-neutral. Calculates E[max(S_T - K, 0)] under actual probabilities.

### Key difference: negative drift as carry

Most providers drift slightly negative over time (Quote decays). The model captures this:
- `monthly_mean_return = -0.001616` (average across providers)
- Converted to annual carry: `q = -12 × ln(1 + monthly_mean)` ≈ 0.0194
- Forward is BELOW spot: the expected Quote at maturity is lower than today

This negative drift is structural — it means ATM Boosters are slightly OTM in expectation.

### Model parameters — DARWIN-specific mapping

| BS parameter | Booster equivalent | Value (baseline) | Source |
|---|---|---|---|
| Spot (S) | Provider's current DARWIN Quote | 100 (normalised) | Risk Engine |
| Strike (K) | HWM at Booster purchase | 100 (ATM) | Booster contract |
| Vol (σ) | Annualised Quote volatility | 12.7% | Historical Quote data |
| Drift | Monthly mean return → annual carry (q) | -0.16%/mo → q ≈ 1.94% | Historical Quote data |
| Risk-free (r) | 0 | 0% | Internal product, no market rate |
| Maturity (T) | Booster duration | 0.25 / 0.5 / 1.0 / 3.0 years | Contract |

**Vol discrepancy note:** Risk-neutral model uses 22.5% (D-Leverage normalised target σ). Physical model uses 12.7% (measured Quote vol). Difference: D-Leverage TARGETS ~6.5%/mo but actual realised vol is lower. Use measured vol for expected payoff; use target vol for worst-case pricing.

### Expected payoff table (ATM, vol=12.7%, drift=-0.16%/mo)

| Tenor | Forward | Expected payout (call) | Put value | d1 | d2 |
|-------|---------|----------------------|-----------|-------|-------|
| 3M | 99.52 | 2.29 | 2.78 | -0.045 | -0.108 |
| 6M | 99.03 | 3.10 | 4.07 | -0.063 | -0.153 |
| 1Y | 98.08 | 4.11 | 6.03 | -0.089 | -0.216 |
| 3Y | 94.34 | 5.98 | 11.63 | -0.155 | -0.375 |

Put > Call for all tenors (negative drift). Forward below spot at all maturities.

### Margin economics — Zero (prescriber) vs Prop (market maker)

**Premium split (Juan CAPS, 16 Apr):** 25% Zero / 75% Prop.

Example: €200K Booster, 1Y, premium = €1,295/month = €15,540/year.

| Flow | Amount | BU | P&L treatment |
|------|--------|-----|---------------|
| Premium to Zero (25%) | €3,885/yr | Zero | Immediate revenue (distribution fee) |
| Premium to Prop (75%) | €11,655/yr | Prop | Float (balance sheet until cycle resolves) |
| Expected payout | €200K × (4.11/100) × 20% perf fee = €1,644 | Prop | Expected cost (option payoff × perf fee rate) |
| SC on synthetic | TBD — from `sc_pnl_by_connector` filter | Prop | Revenue (spread capture on Prop-funded flow) |
| Swap hedge cost | TBD — from `swap_market` | Prop | Cost (LP hedging on overflow) |

**Prop's full Booster margin per cycle:**
```
  Premium float received (75%)
+ Spread capture on synthetic trade (SC attribution)
+ Interest on undeployed float
- Expected payout (BS call price × allocation × perf_fee_rate)
- Swap hedge cost (overflow portion)
= Net Booster cycle P&L
```

### Adverse selection warning

The -0.16%/mo drift is the POPULATION average. Providers who BUY Boosters self-select — they believe in their edge. If Booster buyers have:
- Better drift (e.g., 0% or +0.1%/mo) → call price rises → Prop margin shrinks
- Lower vol (more consistent) → call price falls → Prop margin grows

**Calibration requirement:** Run BS on the subset of providers WHO BOUGHT BOOSTERS, not the full population. Historical Booster buyer performance vs population is the key data point for pricing accuracy.

### Drift gap as selection efficiency metric (hidden relationship, 17 Apr)

The spread between population drift (-0.16%/mo) and Booster-buyer drift (TBD — measure) IS the quantitative signal for how well the Booster mechanism selects edge:
- If buyer drift ≈ population drift → Boosters aren't selecting (random entry)
- If buyer drift >> population drift → mechanism IS selecting (conviction signal works)
- The drift gap × 75% float = the price Prop pays for discovering new edge

**Test:** Run BS with Booster-buyer-only parameters vs population parameters. The call price difference = the adverse selection premium = the cost of selection efficiency. The 75% Prop float is sized to cover this premium while leaving margin for reinvestment.

Corollary: Prop's margin is NOT arbitrary profit. It's the price the trust economy pays for its selection mechanism. If the drift gap narrows (mechanism stops selecting), Booster pricing needs recalibration.

### Dual uncertainty: σ × ε (hidden relationship, 17 Apr)

BS model: σ (performance uncertainty) → Booster price.
Open Trust: ε (information uncertainty) → data value.

Both are chosen by the participant. Both affect their value to the system. A member with LOW σ (consistent returns) and HIGH ε (transparent/open) is the most valuable: predictable edge, openly shared. HIGH σ + LOW ε (volatile and secretive) is least valuable.

Combined uncertainty product: σ × (1/ε) = member's total uncertainty cost. Lower = more valuable. This unifies the pricing of performance risk (Javi's BS model) with information risk (Open Trust disclosure gradient) into a single framework. The Protocol prices BOTH types of uncertainty through the same settlement mechanism.

### Spread capture attribution on synthetic (new, 16 Apr)

Prop-funded trades (Booster/PA/Permanent hedge accounts) generate spread capture when matched internally. Currently lumped into Exchange "internalisation" line.

**Proposed attribution (pending Juan confirmation):**

| Flow source | SC credited to | Rationale |
|---|---|---|
| Retail traders | Retail Broker | Their clients generated the flow |
| INDX father (1000023632) | Exchange | INDX is Exchange's product |
| Booster hedge (1000024479, 1000024948) | Prop | Prop funded the trade |
| PA/Permanent hedge (1000024535) | Prop | Prop funded the trade |
| Gold DarwinIA hedge (1000024266) | Exchange | Gold = Exchange R&D (INDX selection pipeline) |
| Silver DarwinIA hedge (1000024966+) | Zero | Silver = Zero CAC |

Data source: `sc_pnl_by_connector` (TOPS spread_attribution DB), filterable by connector_account.

---

## Data sources

- **PRODX (DB 3):** `bc_challenge_participation` (purchase lifecycle), `bc_allocation_position` (capital tracking), `bc_competition_ranking` (DarwinIA rankings)
- **DuckDB (DB 181):** `all_fees` (pre-joined fee data)
- **Labs MCP:** `get_total_permanent_allocation_amount` (€114.6M), `get_darwins_with_active_permanent_allocations` (1,146), `get_darwins_with_active_boosters` (1,714)
