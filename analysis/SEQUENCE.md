---
pass: 3 — build sequencing
spec_commit: 6f8ea84
axiom_basis: v13
inputs: components/components.json, components/ARCHITECTURE.md
date: 2026-08-28
status: PROPOSAL
---

# Build sequence — what gets built, by whom, in what order, and why

Ordering is by **dependency** (an interface contract precedes every component that consumes it), then by **trust exposure** (stranger-buildable work first, so the community has something to build while reference implementations are prepared), then by **blocking artefacts** (the maintainer parameters that gate everything). Tranches are an order, not a schedule.

## Tranche 0 — Maintainer artefacts (Darwinex only)

Nothing downstream is conformance-testable until these exist. They are numbers and schemas that describe the live system; only its operators can state them. None is secret.

| Order | Artefact | Why first |
|---|---|---|
| 0.1 | **M12 Record schema** + **M3 A13 granularity/lag** | Every component's inputs are another component's outputs; without record formats and the disclosure boundary, parallel work diverges immediately. |
| 0.2 | **M1 Risk-engine parameter set + golden vectors** | The Quote is the input to 2, 3, 4, 5, 6. Two honest implementations currently disagree, so A8 is not testable. |
| 0.3 | **M2 Cycle length** + **M4 surplus definition** + **M6 attribution rule** | The settlement ledger (the audit surface for A5 and A9) cannot close a cycle without them. |
| 0.4 | **M5 INDX composition rule** (deterministic — ruling Q9) | The flagship stranger-buildable component has nothing to replay until the rule is public. |
| 0.5 | **M10 field dictionary + attribution schema**, **M7 λ rule**, **M8 cohort/noise**, **M9 premium map**, **M11 β estimator** | Gate tranches 3–4. |

Rulings Q6–Q9 (ARCHITECTURE §5) belong here too: each is a one-line decision that unblocks a component.

## Tranche 1 — Conformance suites and formalisation (community, no data needed)

| Unit | What | Why now |
|---|---|---|
| 1.1 | Conformance test suite per component from the numbered SHALLs in `components/C-*.md`, parameterised by M1–M12 as fixtures | Stranger-buildable by construction; forces every SHALL to become a real requirement; the fixtures become the acceptance test for tranche 0. Start with 4 and 5. |
| 1.2 | Lean 4 formalisation of **v13** (primitives, 10 axioms, core theorems) | Depends only on `spec/CONSTITUTION.md`; runs in parallel with everything. |
| 1.3 | Cross-validation script: spec ↔ site ↔ Lean axiom/theorem IDs and counts | Cheap; keeps the three from drifting during the v13 transition. |

## Tranche 2 — Stranger-buildable components (community builds, maintainers review)

| Order | Component | Deliverable | Why this before that |
|---|---|---|---|
| 2.1 | **4 Settlement Layer** | Reference ledger: double-entry per cycle, atomic commit, retention (I2) and ceiling (I3) checks, trial-balance statement; fixtures from M2/M4/M6 | The ledger is the audit surface for A5 and A9. Build the auditor before the audited. |
| 2.2 | **5 Trust Signal (INDX)** | Pure-function reference implementation + the test vectors listed in C-05 (golden replay, permutation, tie-break, gate-zeroing, cap binding, late attestation, mid-cycle crash, parameter versioning, sub-minimum cohort, override rejection) | Needs M5; consumes 4's ledger. The component whose replayability *is* its credibility. |
| 2.3 | **7 Prediction Market** (product, optional) | Demo market on the published series with a third-party-settleable proposition schema; allocation wire cut (Q8) | The operational test of A13: if an outsider cannot settle from public data, publication was cosmetic. |

## Tranche 3 — Reference implementations (maintainers), then community extension

| Order | Component | Maintainer ships | Community then builds |
|---|---|---|---|
| 3.1 | **1 Risk Engine** | Parameterised reference + golden vectors (M1) | Independent re-implementations; robustness estimators (F6); half-life publication (F7); orthogonal-axes measurement (F9). Becomes STRANGER_BUILDABLE on M1. |
| 3.2 | **2 Attestation** | The boundary construction (M3 + M8 anti-differencing), chain choice, two-contract executable schema | Verifier tooling (hash-chain, signature, replay) — ordinary engineering; alternative chain back-ends. |
| 3.3 | **8 Open Protocol Layer** | Field dictionary golden messages, attribution fixture (sum-to-cycle), g(ε) measured | Client libraries per interface; broker-rail node reference; dashboard state machine; conformance harness for third-party nodes. |

## Tranche 4 — Rules-open, state-closed components

| Order | Component | Maintainer ships | Community builds |
|---|---|---|---|
| 4.1 | **3 Matching Engine** | Reference pump: netting, residual-only routing, atomic cycle, ingress capping, per-tranche attribution, priority ordering; the anti-differencing layer. Live state stays closed (A13, F7). | Simulator against synthetic intents; conformance harness proving SHALL 1–8 on the public telemetry (residual volume/direction/outcome at the disclosure lag); alternative priority-ordering proposals. |
| 4.2 | **6 Options Layer** | Reconciled tier table and premium map (M9, ruling Q6); pool balance sheet stays closed | Pricing/payoff/escrow library as a pure function; payoff calculators; conformance suite for requirement 1–7. |

Matching comes last among the core components because its closed surface is defined by the A13 boundary (tranche 3.2) and its audit surface is the ledger (tranche 2.1): both must exist before a third party can check that the engine does not extract.

## Never open

| Surface | Reason |
|---|---|
| The dataset corpus (5b) | Opening it erases the inside/outside non-rivalry asymmetry (T51) and breaches the disclosure boundary for members who never consented (A13). The *interface* — schema, access rules, cohort floor, provenance, governance procedure — is open and belongs in tranche 0/1. |
| Live state: book, pre-commit residual, routing schedule (3); inventory and hedge book (6) | Publishing hands the pump's conviction to the counterparties it routes against (F7); aggregate flow information must not leave any interface (A9). |

## The why-chain in one paragraph

Schemas before code, because every component's input is another's output and unformatted parallel work diverges. Parameters before conformance, because a test needs values — but suites can be written parameterised, so the community starts before the parameters land. Ledger and signal before engine, because A9 makes the audit surface the precondition for trusting the audited: build the auditor first. Boundary before matching, because the engine's closed surface is only definable once A13's granularity and lag are set. Corpus never, because the asymmetry it protects is the protocol's moat and its members' consent. Everything else is a rule, and rules are published.

## What this replaces

`COMPONENTS.md` at the repository root was a task list written before the decomposition. It should now be regenerated from this sequence: one work unit per row above, each pointing at its card, its blocking artefacts, and its tranche.
