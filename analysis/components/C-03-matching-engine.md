---
component: "3 — Matching Engine"
spec_commit: 6f8ea84
axiom_basis: v13 proposal (analysis/axiom-stress/SYNTHESIS.md §2)
trust_class: NEEDS_REFERENCE_IMPL
coverage: PARTIAL
---

## Purpose

The ★ operator: each cycle ingests normalised risk-adjusted intents, nets opposing conviction against one mutualised counterparty, sizes to capacity, strips identity, routes only the residual outward, where outcome prices it, and posts per-provider certification.

## Interface

**Inputs** — per-provider normalised intents from 1 (direction, instrument, risk-scaled size); per-strategy capacity λᵢ from 6 or governance; the cycle window; external quotes and fills.

**Outputs** — internal fills, pro-rata; the residual order vector; per-cycle ±ΔINDX postings with per-provider attribution to 4; telemetry (match rate, residual volume/direction/outcome) as the A9 audit surface.

**Invariants** — the mutualised counterparty holds the only internal resting order; the operator is never counterparty to member flow nor trades on aggregate flow; each intent belongs to one cycle, each posting to that cycle's commit; netted + routed + journalled = the vector sum of admitted intents.

## Enacts

A4 (surplus below the friction removed, to a per-dimension capacity); A9 structurally — no internal resting orders, nothing to extract with; A5; T12, T14, T20; T64 (cycle length is the match lever). F4 is the failure mode; F7, why capping sits at ingress.

## Must not know

Individual intent beyond the cycle that nets it: no identity→position map survives the abstract step, no per-member order history past attribution; aggregate direction before commit, by any party including the operator. Residual composition beyond the granularity and lag that preserve the capacity disclosed (A13).

## Conformance requirements

1. SHALL net all admitted intents internally before any external routing; no member-placed resting order SHALL exist.
2. SHALL route only the residual; unrouted residual SHALL be journalled as a counterparty book position, never discarded.
3. Each cycle's postings SHALL commit atomically across normalise → match → size → abstract → route → certify, no partial commit externally visible. (Here, not 4: only this component defines the cycle; 4 owns posting durability.)
4. Aggregation SHALL meet a stated minimum-cohort size and anti-differencing threshold: no routed or published aggregate reconstructible to one member's intent, and bounded consecutive-cycle differencing.
5. Capacity λᵢ SHALL be applied at ingress, not post-netting; an order cut by a limit enters at the cut size. Post-netting truncation breaks attribution and hides residual.
6. Operator and affiliates SHALL NOT take the other side of member flow or trade on aggregate flow; audited via published residual volume, direction and outcome at the disclosure lag.
7. Cycle length SHALL be declared and uniform within a cycle; no per-member timing privilege.
8. Attribution SHALL be per-tranche (absorbed vs residual), computed inside the same atomic cycle.

## Depends on / depended on by

Depends on 1, on 6 or governance for λ, on 5b for telemetry. Depended on by 4, 5, 6, 8.

## Openness

A9 requires openness: an unauditable engine cannot prove it does not extract, so netting identity, capacity rule, cycle boundary, attribution and commit protocol SHALL be public. A13 closes state, not rules: live book state, pre-commit residual and routing schedule stay shut — publishing them hands the pump's conviction to the counterparties it deploys against (F7). A reference implementation is needed for what no spec states — the anti-differencing layer and priority ordering.

## Existing coverage

Specified across `spec/REWARD.md` §2–§3, `spec/PROTOCOL.md` §6/§6.1 and §11 row 3, `spec/CONSTITUTION.md` A4/A9/T64/F4/F7, `spec/electrons/PHENOTYPE--matching-engine.md`: sole-resting-counterparty rule, tranche split, match rate, attribution, double-entry postings.

Gaps: cycle length undefined — the lever is named, the value is not (SHALL 7); sizing rule undefined — λᵢ has no formula (SHALL 5); intra-cycle priority ordering unspecified — a fairness surface A9 does not reach; cohort floor and noise parameters unquantified (SHALL 4); no operating-cost term, so A4's non-positive marginal pairing is untestable.
