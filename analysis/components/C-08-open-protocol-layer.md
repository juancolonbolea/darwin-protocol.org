---
component: "8 — Open Protocol Layer"
spec_commit: 6f8ea84
axiom_basis: v13 proposal (analysis/axiom-stress/SYNTHESIS.md §2)
trust_class: NEEDS_REFERENCE_IMPL
coverage: PARTIAL
---

## Purpose

Not a mechanism — the set of entry points. It exposes components 1–6 as terms a stranger binds to without negotiating, and is the only surface where A3 uniformity, A14 standing and the A13 boundary are externally observable. Making the four disclosure axes settable at the join is what renders T57 operational.

## Interface

| Interface | Inputs | Outputs |
|---|---|---|
| Member/provider ingestion | identity, signals, disclosure vector *d* | signed terms, attested disclosure level |
| Sourcing rails | campaign → sign-up → account → first flow | per-sourcer attribution chain, reward basis |
| Processor API | boundary-conformant dataset view, model or job | score, stake settlement |
| Broker rails (third-party nodes) | orders, give-ups, roster, margin | fills, net position, rail-usage record |
| Public feeds (A13 boundary) | query over certified results | un-gated series, attestation receipts |
| Field I/O (5000+ range) | provider id, quote, settlement type, IMR flag, cycle id | execution, attribution messages |
| Attribution output | cycle close | per-provider settled contribution, reconciled to trust stock |
| Dashboard | member id | ladder state, IMR share, score panel |

**Invariants.** (1) One contract, one entry-cost vector, every entry point; no negotiated terms, capital minimum, underwriting discretion, or terms indexed to certified quality (A3). (2) Binding confers standing and residual claim, not contingent on external power (A14). (3) Certified results cross un-gated; IP encrypted; live process never; granularity and lag preserve the disclosed edge's capacity (A13). (4) No aggregate flow information leaves any interface (A9).

## Enacts

A3 — uniformity is enforceable only where entry happens. A14 — standing granted at the join. A13 — the boundary is this layer's output filter. T57/Proof 18 — four axes, one call. T30 — methods open, dataset retained. T58 — the dual view closes disclosure→score→allocation.

## Must not know

Counterparty identity behind member flow; aggregate net flow or book state on any read path, the operator's included; per-member decomposition of a netted aggregate; raw payloads and positions; and, when selecting terms, whether the applicant is large or incumbent.

## Conformance requirements

1. SHALL publish one contract per interface; reject per-counterparty variation.
2. SHALL admit any applicant meeting the published entry-cost vector.
3. SHALL serve certified-result feeds with no gate, fee or identity-keyed rate ladder.
4. SHALL NOT emit live process state, open positions or raw payloads.
5. SHALL emit one attribution record per provider per cycle, summing to the cycle total.
6. SHALL refuse output whose cohort size or lag permits differencing one member out.
7. SHALL attest a disclosure level before pricing surplus share against it.
8. SHALL version the field dictionary append-only.
9. Third-party nodes SHALL sign both contracts and SHALL NOT internalise member flow.

## Depends on / depended on by

Wraps 1 (entry gate), 2 (receipts), 3 (broker rails), 4 (attribution), 5 + 5b (feeds, dataset), 6 (capital axis). Nothing internal depends on it — outermost layer; 7 attaches here when built.

## Openness

Interface specs are the canonical stranger-buildable artefact: an interface a stranger cannot implement unasked is not open, and A3 uniformity is unverifiable while terms stay unpublished. Contracts, dictionary, feed and attribution schemas SHALL be public. Three also need a maintainer reference implementation: the field dictionary (wire conformance settles only against a running counterparty — ship golden messages), the attribution schema (a fixture proving sum-to-cycle), and g(ε), measured not declared. Closed: matching parameters, risk internals, book state (A9, A13).

## Existing coverage

Specified: the disclosure gradient and its bijection; four opening stages sequenced on internal-matching sufficiency; sourcing-rail attribution; processor scoring with staking; six attested tags. Gaps: **no field I/O spec** (six tags of a whole range; no message flows, no conformance suite); **no attribution schema** (fields, reconciliation rule, cohort floor — §11 marks both); dashboard scaffold, no state machine; no published contract or entry-cost vector, so A3 uniformity is externally uncheckable; broker rails framed as role-shedding, not interface.
