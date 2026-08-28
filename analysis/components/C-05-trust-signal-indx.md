---
component: "5 — Trust Signal (INDX)"
spec_commit: 6f8ea84
axiom_basis: v13 proposal (analysis/axiom-stress/SYNTHESIS.md §2)
trust_class: STRANGER_BUILDABLE
coverage: PARTIAL
---

## Purpose

Trust Signal composes certified per-agent estimates into one publicly attested collective series and mints the per-cycle reward denominated in it. A7 asserts that observing that series moves capital (β > 0); A8 makes composing it possible at all, since a collective metric presupposes a common ordering over heterogeneous agents. The minted unit circulates as reward, stake, payment, prize and gateway to ownership.

## Interface

**Inputs** — commensurable Quote series with attestation digests (1 + 2); attested cycle ledger (4); versioned public parameter set (exponents, thresholds, correlation cap, capacity ceilings, cadence); cycle index.

**Outputs** — constituent set with weights; per-cycle mint; series point; replay manifest.

**Invariants** — (i) pure function of public inputs, no hidden state, no clock beyond the cycle index; (ii) permutation-invariant, depending only on the A8 ordering, never arrival order or identity; (iii) operator discretion not representable, not merely unused; (iv) the gate is binary and multiplicative, zeroing a failing agent rather than down-weighting; (v) no mid-cycle parameter change; (vi) append-only series.

## Enacts

A8 — the ordering is the only admissible input. A7 — the series is the observable carrying β. A3 — eligibility indexed to estimates and thresholds, not standing. A5 — the mint denominates retention. A13 — results public and un-gated.

## Must not know

Constituent positions, strategy internals, live process (A13). Provider identity, domicile, capital, standing (A3). Netting identity or aggregate flow direction (A9) — composition must not be tuneable to who is on which side. Allocator-specific demand, which would fit the signal to a buyer.

## Conformance requirements

1. Constituents, weights and value SHALL be reproducible bit-for-bit from published inputs.
2. Ties SHALL break on a published total order (attestation digest), never insertion order.
3. Eligibility SHALL depend only on commensurable estimates and published thresholds.
4. A failing gate SHALL zero that constituent's contribution.
5. Parameter changes SHALL be versioned and published a full cycle before taking effect.
6. Discretionary override SHALL be rejected by the implementation, not logged.
7. Each cycle's postings SHALL commit atomically; no partial composition externally visible.
8. Restatement SHALL be a new versioned record.
9. Every published point SHALL carry parameter version and input digest.
10. Series, constituent set and matched external capital flow SHALL publish at a cadence sufficient to estimate β.

**Reference test vectors:** golden replay; permutation identity; tie-break; gate-zeroing despite top score; correlation-cap and capacity-ceiling binding; late attestation excluded, not retro-included; mid-cycle crash yielding no partial point; parameter change effective only from the announced cycle; sub-minimum cohort; injected override rejected.

## Depends on / depended on by

Depends on 1, 2, 4, 5b. Depended on by 6, 7, 8; feeds 3 via capacity.

## Openness

Flagship STRANGER_BUILDABLE: a side-effect-free function from published inputs to a published number, holding no privileged data and no counterparty role. Its credibility is that anyone can replay it, so secrecy here is a defect, not a moat. Only 1 and 2 need reference implementations; closed inputs stay closed upstream.

## Existing coverage

spec/PROTOCOL.md §11 row 5 rates this Full; the doctrine is, the rule is not. spec/INDX.md §2 gives Φ's shape (power-weighted four dimensions behind a binary gate), §4 commensurability, §5/§9 the IMR and dataset channels; spec/CONSTITUTION.md T58 fixes the dimensions by duality; spec/electrons/PHENOTYPE--indx-pipeline.md adds funnel KPIs and flags correlation and rebalance timing.

**Gaps.** (1) The composition rule appears nowhere in spec/: exponents, originality measurement and its path-dependence, thresholds, correlation cap, capacity treatment and rebalance trigger are all open, held in a satellite referenced but absent. (2) Practice is hybrid — selection systematic, weighting discretionary — contradicting invariant (iii); the conformance blocker. (3) β is unmeasurable from published data; without an estimator separating β·T from g(C, dC/dt), A7's magnitude claim is unfalsifiable and this output cannot be externally validated.
