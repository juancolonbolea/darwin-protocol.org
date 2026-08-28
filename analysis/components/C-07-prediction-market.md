---
component: "7 — Prediction Market"
spec_commit: 6f8ea84
axiom_basis: v13 proposal (analysis/axiom-stress/SYNTHESIS.md §2)
trust_class: STRANGER_BUILDABLE
coverage: MISSING
verdict: PRODUCT (on 5 + 6) — promotes to component only if its price is wired into allocation
---

## Purpose

A venue where anyone stakes on propositions about future values of the protocol's published series — will this provider's certified score exceed q at horizon h. The estimator (A2) scores what happened; a staked market prices what is expected, aggregating dispersed belief no backward-looking estimator holds. Its output is a forward selection prior. It exists only because A13 already publishes an un-gated, machine-adjudicable record: the oracle problem is solved upstream, leaving arithmetic plus an escrow.

## Interface

**Inputs** — public certified-score and composite series with timestamps and revisions; stakes; a proposition schema; an escrow.
**Outputs** — a price (probability) per proposition; an aggregated forward score per provider; a calibration series; payouts; structured claims.
**Invariants** — settlement is a pure function of the published record, reproducible by any reader; no standing counterparty; uniform terms and proposition space; prices, stakes, resolutions and calibration published at the underlying's granularity and lag; no proposition resolves on a quantity its own price determines.

## Enacts

A13: a market a stranger can settle tests whether results are truly public and un-gated — if an outsider cannot adjudicate from the published series alone, publication was cosmetic. A3, by one contract over one proposition space. A9, by forbidding operator counterparty and use of flow information. It consumes A2 and A8.

## Must not know

Resting orders or member intent inside the book; pre-publication values of any certified quantity; pending composition or sizing decisions; the link between a stake and a trading account; anything netting destroyed.

## Conformance requirements

1. Each proposition SHALL name resolution source, horizon and settling revision, and SHALL be settleable by a third party from public data alone.
2. No operator, and no party holding a residual claim on the venue, SHALL take a side.
3. No participant with non-public knowledge of pending allocation, composition or scoring changes SHALL trade the affected proposition.
4. Terms, fees and proposition access SHALL be uniform — no tiered feed, no negotiated entry.
5. Prices, volumes, resolutions and a calibration score SHALL be published un-gated within the disclosure lag.
6. Propositions SHALL NOT be self-referential; a price MAY inform allocation only via a published, rate-limited rule under a capacity cap (F7).
7. Venue revenue SHALL be a rail fee retained per A5, never counterparty P&L.

## Depends on / depended on by

Depends on 5 (series, composition interface), 1 (estimator), 2 (tamper-evident record), 8 (un-gated publication); optionally 6 for structured payoffs, 4 if stakes settle in protocol units. Depended on by nothing today.

## Openness

The most stranger-buildable thing in the protocol. Every input is public by A13, the oracle is the published record, settlement is arithmetic, and every axiom obligation on it is negative (the SHALLs above). No reference implementation is needed; a maintainer's build holds no informational advantage over an outsider's. Which venue permissions a jurisdiction requires is out of scope for the spec.

## Existing coverage

None. The nearest formalism is the challenge-marketplace theorem — venue, rules, escrow, score as judge, revenue as rail — this component's degenerate one-sided case, as are fixed-tier staking challenges. Missing: proposition schema, resolution rule, calibration duty, reflexivity bound, insider rule.

## Verdict

Product. No v13 axiom requires it, no theorem depends on it, it consumes only public outputs of 5 and 1 — an application on 5 + 6. It becomes a component the moment its price is wired into composition weights (5) or sizing (3): a price that moves capital is a selection mechanism, force S, inheriting every invariant above. Keep the wire cut until calibration is proven and the F7 bound specified. The funding-marketplace gap is distinct: it prices risk capacity and sits in the allocation path.
