---
component: "1 — Risk Engine"
spec_commit: 6f8ea84
axiom_basis: v13 proposal (analysis/axiom-stress/SYNTHESIS.md §2)
trust_class: NEEDS_REFERENCE_IMPL
coverage: PARTIAL
---

## Purpose

The Risk Engine normalises each agent's raw trading record into a return series on one shared risk scale: it removes leverage, instrument choice and sizing, then re-expresses the residual at one target risk, making unlike books orderable on identical terms.

## Interface

**Inputs.** Per-agent trade records (instrument, direction, size, entry/exit timestamps, price, costs); account mark-to-market equity; price series per instrument and anchor; a versioned parameter set (anchor, target VaR, band, windows, confidence level, correlation ceiling).

**Outputs.** Per-agent D-Leverage (account MtM volatility ÷ anchor volatility); risk-adjusted positions including tagged engine-generated trades; the VaR-scaled investor-side equity and return series — the Quote; risk attributes and the pairwise correlation matrix.

**Invariants.** Determinism — same inputs and version, same output; genesis replay reproduces every published Quote point. Identity-independence — invariant under permutation of agent identifiers; no per-agent parameters. Causality — output at t uses only data ≤ t. Scale invariance — scaling all sizes by k leaves the series unchanged. Conservation — adjustments rescale exposure, never create return absent from the record.

## Enacts

- **A2 (merit is estimable)** — the engine *is* the protocol-computable estimator; normalisation removes leverage and beta terms that would otherwise read as contribution.
- **A8 (merit is commensurable)** — one target risk for all agents turns a per-agent measurement into a cross-agent ordering. Its independence clause lands here (A9 + P6), its determinism clause as requirement 1 — neither is an axiom.
- **A3 (uniform terms)** — one normalisation, applied identically, indexed to nothing.

## Must not know

Strategy source, parameters or forward intent — only executed records (A13). Any counterparty to member flow, the netting result, or the book's aggregate directional exposure (A9). Allocator identity, capital behind an agent, or the revenue consequence of its own output — independence from the operator's revenue binds as hard as from the provider. Tenure, entry cost, standing (A3).

## Conformance requirements

1. SHALL be deterministic: same records, prices and version → same output; every published point replayable.
2. SHALL publish method, parameters and version; changes apply prospectively, never restating prior Quotes.
3. SHALL apply one parameter set to all agents; no agent-specific overrides.
4. SHALL tag engine-generated trades distinguishably from agent-initiated ones in every output and audit record.
5. SHALL keep realised risk inside the declared band, adjusting nothing while inside it.
6. SHALL use breakdown-robust estimators to a stated adversarial-provider fraction (F6).
7. SHALL cap per-agent capacity and publish an edge half-life (F7).
8. SHALL measure on published orthogonal axes, not one scalar objective (F9).
9. SHALL emit per point the inputs and version sufficient for third-party recomputation.

## Depends on / depended on by

Depends on 5b. Depended on by 2, 3, 4, 5, 6, 7; external-benchmark verification SHALL reuse this risk adjustment unchanged.

## Openness

Nothing needs closing: A13 privatises the live process and agent IP, not the method; the estimator is credible only if recomputable. Yet a stranger cannot build it from the spec alone. The spec fixes the shape — anchor-relative leverage, historical-simulation VaR, a 6.5% monthly target, a 3.2–6.4% band — and omits every number needed to reproduce a Quote: confidence level, horizon scaling, volatility estimator and window, simulation lookback, adjustment trigger and sizing, upward-scaling cap, correlation estimator. Two honest implementations would disagree; A8's commensurability is not conformance-testable. A parameterised reference plus golden test vectors would make this STRANGER_BUILDABLE, no axiom changing.

## Existing coverage

`spec/DEVELOP.md` §3; `spec/electrons/PHENOTYPE--risk-engine.md`; `spec/CONSTITUTION.md` A2/A8 and F6/F7/F9; `src/content/docs/about/mechanism.mdx` §2. `spec/PROTOCOL.md` §11 rates this Full — document presence, not implementability; conformance-layer coverage is PARTIAL. Gaps: the numbers above; adjustment-trade audit schema; diagnostic attributes cited but unpublished; independence from operator revenue, asserted nowhere.
