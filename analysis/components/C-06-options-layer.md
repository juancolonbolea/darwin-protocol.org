---
component: "6 — Options Layer"
spec_commit: 6f8ea84
axiom_basis: v13 proposal (analysis/axiom-stress/SYNTHESIS.md §2)
trust_class: NEEDS_REFERENCE_IMPL
coverage: PARTIAL
---

## Purpose

A member stakes a premium on their own edge for amplified allocation: the venue writes a short call on their certified performance, struck at their high-water mark. Willingness to pay is conviction the estimator cannot produce: the variation intake. Below the strike the premium is retained and redeployed; above it the member graduates toward real allocation. Stakes are in the earning token; sustained graduation converts to the ownership token.

## Interface

**Inputs.** Stake (tier → premium, tenor, notional) under the uniform contract; certified Quote series and HWM from 2; capacity envelope from 3; governance-set tier table, eligibility threshold, take-rate ceiling.

**Outputs.** Amplified allocation instruction to 3 (notional, weights, direction) — no external flow out-of-the-money, delta-scaled hedge in-the-money. Postings to 4: premium, float, settlement, residual to a reinvestment vector. Conviction signal published for 5 and 7.

**Invariants.** One tier table, premium function and payoff rule for everyone, not indexed to certified quality (A3); payoff public, computable before purchase, deterministic in the attested path; premium disposition posted each cycle, margin bounded by the take-rate ceiling (A9); postings counter-posted in 4.

## Enacts

A3 — published terms, never negotiated. A5 — expired premia retained, redeployed. A2/A8 — one Quote judges all members. A1, F5 — admits edge the estimator misses, and A4 caps it. T41, Proof 13 — venue, rules, escrow; challenge data improves the estimator.

## Must not know

Members' live positions during the term (A13 — pricing sees only the attested series). Aggregate book state, netting identity or flow imbalance from 3 (A9): hedges go out, book state never returns as a pricing input. Member wealth or standing (A3); per-member hedging intent is not retained.

## Conformance requirements

1. SHALL publish tier table, premium function, payoff rule and eligibility threshold before any sale, applied identically to every eligible member.
2. SHALL price from published inputs only — series statistics, tenor, strike, tier — never identity, wealth or standing.
3. SHALL strike at the attested HWM, settle deterministically from that path, and post premium, float and settlement to 4 atomically.
4. SHALL refuse purchases beyond 3's capacity envelope by a published rule, not discretion, and emit no external flow while out-of-the-money.
5. SHALL publish per cycle premia, payouts and the residual's reinvestment vector.
6. The writer SHALL NOT take the other side of member flow nor read aggregate book state.
7. The premium→amplification map SHALL be a published monotone function.

## Depends on / depended on by

Depends on 1 (volatility normalisation), 2 (Quote, HWM), 3 (capacity, hedging), 4 (escrow, postings), governance. Depended on by 5, 5b, 7.

## Openness

Pricing, payoff and escrow are pure functions of published inputs, which A3 and A13 require public: a stranger can build the mechanism. Not stranger-suppliable — the pool's balance sheet and the buyer-cohort calibration, which needs the venue's history; hence NEEDS_REFERENCE_IMPL. Live inventory and hedge book stay closed, since publishing them exposes aggregate flow (A9).

## Existing coverage

Specified: pricing models, tier/tenor/HWM/notional tables, delta hedging, constitutional frame (A3, T41, Proof 13, F5). Gaps:

- **Premium→allocation map unspecified** — discrete rungs, a stacking cap, two inconsistent tables. Nothing to test against.
- **A3 tension, flagged.** Purchase is gated behind prior selection stages, which also make premia cheaper — terms indexed to certified quality, which v13 A3 forbids. It holds only if the gate is eligibility, not a term; adjudicate. A harder gate weakens the F5 answer.
- **Premium split** fixed by fiat, unreconciled to the take-rate ceiling — absent requirement 5, indistinguishable from a hidden take.
- **Denomination conflict** — constitution token-denominated, pricing fiat; no escrow or return rule for a staked token.
- **Buyer-cohort calibration** unpublished, so pricing is not reproducible.
