---
pass: 1 — axiom stress test
spec_commit: 6f8ea84
date: 2026-08-28
method: 13 adversarial derivation attempts (one per active axiom) → 6 refutation/defence checks → one reduce
result: 13 active axioms → 10 proposed; 3 demoted to vocabulary or component spec; 7 restated; 0 unchanged
status: PROPOSAL — awaiting maintainer ratification before any change to spec/
---

# Axiom stress test — synthesis

## 1. Headline

No axiom was found to be simply redundant and no axiom survived unchanged. The recurring defect is not redundancy — it is **bundling**: ten of thirteen axioms fuse (i) a restatement of a primitive, (ii) a mechanism or implementation clause, (iii) a governance parameter, and (iv) one irreducible claim — and in most cases the irreducible claim is *not the one the text foregrounds*. The v7 demotions (A6, A11, A12) removed whole axioms. The next revision should remove **clauses**.

| Verdict (map) | Count | After verify |
|---|---|---|
| INDEPENDENT | 0 | — |
| DERIVABLE | 3 (A10, A13, A16) | A10 stands · A16 stands · **A13 overturned → independent** |
| UNDERSPECIFIED | 10 | A2/A8 and A7 modified into clean restatements; A15 adjudicated to demote with A16; rest stand as split/restate |

Calibration note: the map step over-called derivability at roughly one in three; the UNDERSPECIFIED verdicts were robust under defence. Treat "split / restate" as high confidence and "demote" as medium until a second verify.

## 2. Proposed axiom set (v13 candidate)

Ten axioms. Numbering kept for traceability; renumber only when the constitution is cut.

| # | Name | Proposed statement | Grounded in | Change |
|---|---|---|---|---|
| A1 | Access allocates | Where information asymmetry is structural and unevenly distributed, allocation converges on access rather than contribution, and the advantage is self-reproducing. | P0, P6 | Restated as a law. The dominance-magnitude and cross-domain claims move to a new empirical anchor E2 beside T42, with a measurement and a falsifier. |
| A2 | Merit is estimable | A protocol-computable estimator of one agent's contribution exists, separating it from luck, beta and access at finite sample, and informative when the agent knows it is computed. | P1, P6 | Restated to the per-agent validity core. "Externally validated" deleted (T42 proves it; keeping it makes T42 analytic). Requires stripping "certified by the protocol" from P1. |
| A3 | Uniform terms | One contract, offered to every prospective provider. Entry is not gated by negotiated terms, discretionary underwriting, capital minimum or prior standing, and terms are not indexed to certified quality. Uniformity constrains the venue; it asserts nothing about who enters. | P6, A1 | Screening demoted into T53. "Totality" dropped. The entry-cost vector becomes a governance parameter bounded below by fraud deterrence, above by variation supply. |
| A4 | Matching creates surplus | Matching over the five dimensions removes P0 friction at a cost below the friction removed, up to a per-dimension capacity beyond which marginal pairings are non-positive. The dimensions are separable. | P0, P4 | Clauses restating P0/P4 dropped. Scaling in N moves to a density lemma that T2, T26 and T29 cite. Reconcile with the surplus-primitive demotion in the audit trail. |
| A5 | Retention | Rescued surplus is retained and redeployed into trust-minting capacity, not distributed or held. Where marginal trust return ≥ 1 and e > 0, each cycle yields more than it consumes. Allocation across vectors is governance. | P3, A4 | Retention is the axiom (the directive complement of A9's prohibition). Vectors become definition; the argmax becomes governance under T21. Add a ¬A5 failure theorem (surplus rebated or idle → linear S-curve). |
| A7 | Trust begets confidence (β) | Quotes aggregate into INDX; outsiders observe collective proof and allocate capital. Formally β > 0 in dK/dt = g(C, dC/dt) + β·T — positive feedback on the trust stock, distinct from g. β = 0 without A8. The axiom does not bound β; the capacity ceiling is imposed at the A8/T57 layer and F7 states the consequence when it is not. α is T56. | P2, P3, A8 | Restated to the magnitude claim. ΔC → ΔK corrected in the A7 row and Proof 1 step 2. Proof 17 step 1 wording repaired (capital inflow, not provider inflow). |
| A8 | Merit is commensurable | Per-agent estimates admit a common ordering across heterogeneous agents. Not implied by validity. | P1, P2, A2 | Restated to the cross-agent claim. Independence becomes a corollary of A9 + P6; algorithmic determinism becomes a governance parameter. Requires stripping the enabling clause from P2. |
| A9 | No counterparty extraction | No party, the operator included, may take the other side of member flow or trade on aggregate flow information. | P4, P6 | The CCP mechanics move to the component layer; the "exactly two destinations" clause moves to governance under T21. Re-assigned to force C. |
| A13 | Disclosure boundary | Certified results are public and un-gated; strategy IP is encrypted; the live process is private. The boundary is set at a granularity and lag that preserves the capacity of the edge disclosed. | P0 (data), A2, A3 | Verify overturned the derivability verdict: A2's "publicly attested" does not entail un-gated access, A3 presupposes IP encryption, and T30 is an application of A13 (published methods) not a contradiction (live process). Closing "selfishness → social trust" sentence cut — it is T11 verbatim. |
| A14 | Standing | Members hold governance standing and the residual claim on the venue; obligations to members are not contingent on external power. | P6, A3 | "Not on the menu" demoted to a theorem of A4 + A9 + netting. The standing claim is the irreducible half and is the sole support of F8. |

**Demoted**

| # | Disposition | Where the content goes |
|---|---|---|
| A10 | Definition, not axiom | "Trust-flow" → vocabulary. Reinvestment content is already A5. Propagation force = A7 + T9 (same shape as Inheritance = A5 + T56). |
| A15 | Not a conservation law | Netting and its mandatoriness are double-entry bookkeeping from A9 + A4. Composition-infeasibility is a cohort-size/anti-differencing requirement, not conservation (the pump's own ε-noise layer would be redundant if aggregation were cryptographic-equivalent). → pump component spec. |
| A16 | Implementation property | The only axiom grounded on a theorem (T42). Cited by no theorem. → pump component spec: "each cycle's postings SHALL commit atomically; no partial commit externally visible." |

**Candidate not added.** A10's residue — *accrued trust stock is redeployable as allocative capital* — is irreducible and currently unstated, but no proof needs it once Proof 9 / T35 are re-typed (trust is a stock; the proofs consume `= e` from A5, not A10's `≥ e`). Revisit after that repair; add only if a derivation then fails.

## 3. Cross-cutting findings

These are visible only across cards; no single audit could see them.

1. **Primitives are doing axiom work.** P1's "certified by the protocol" makes A2 analytic; P2's enabling clause ("without comparability, K = 0") makes A8 analytic. Every earlier circularity finding traces to these two clauses. Fix at the primitive layer or the axioms stay analytic however they are restated.
2. **Mechanism leaks into the constitution.** CCP-as-sole-counterparty (A9), the ★-pump transform list (A15), atomic commit (A16), determinism (A8), "two destinations" (A5/A9), the five-dimension enumeration (A4). All implementation. The constitution needs a layer beneath it — **component conformance specs** — and the demoted clauses are that layer's first entries. Pass 2 starts from exactly these.
3. **Normative content lives in three places, not one.** §0 says P6 is the only normative primitive. A9's residue (the venue binds against its own governors — the demutualisation path) and A14's standing claim are commitments P6 does not yield: P6 orders reward, not control. Amend §0 to say so rather than widen P6. Honesty over elegance.
4. **The Rothschild–Stiglitz citation cuts against A3.** RS is *menu* screening; a single uniform contract is RS's pooling contract, cream-skimmable by a rival offering tiered terms. Either drop the citation or invert it: cite RS as the reason the protocol must state a no-rival-venue assumption — which is a real strategic exposure worth naming.
5. **Load has concentrated.** After restatement, β (A7) roots both halves of the recurrence, since α = T56 derives from A7. The whole e^X claim rests on one behavioural axiom (A7) and one estimator axiom (A2). That is acceptable — but it means credibility with outsiders is decided by the empirical anchor programme: T42, the proposed E2 for A1, and a published β estimator. Making β measurable is the single highest-value follow-up.
6. **The inversion method is not axiomatic.** A13 and A14 are both "the method applied to a P0 dimension". Only the residue that the method cannot produce (the disclosure boundary; standing) is axiomatic. The data inversion is already rendered as primitive-plus-theorem; the intent inversion should be rendered the same way.

## 4. Repairs list (mechanical — one PR against `spec/`)

| Area | Repair |
|---|---|
| Primitives | P1: strip "certified by the protocol". P2: strip the enabling clause. |
| §0 | Amend "P6 is the only normative primitive" → P6 plus two structural commitments (A9, A14). |
| A7 / proofs | A7 row and Proof 1 step 2: ΔC → ΔK. Proof 17 step 1: capital inflow, not member inflow. |
| Typing | T35 "P3 = flow" contradicts §I/§IX (trust is a stock). Proof 9 steps 3→4 convert believed ≥ e into realised = e without warrant — re-derive from A5. |
| Citations | T54: A8 → A2 + A8. T44: A15 + A16 → P5 + component spec. T43 shared-mechanism step re-sourced. T33, T47/T56: add A8. T53 axiom row: add A8. F6, F9 → A2 + A8. T57 dependency list: bookkeeping drift. |
| Re-grounding | T64 ← A4, T18, T5. Stock-Flow Conservation ← A9 + A4 + T42 + accounting. T5 dependency list: A5 not required. |
| Force map | S drops A15/A16. A9 → force C. Propagation = A7 + T9. |
| Dangling refs | The governing-synthesis document cites A16 by name (§11 region) → rewrite to the component requirement. Reconcile "double-entry" vs "triple-entry" wording. |
| Site | A13 page claims it grounds T1 — false against the dependency graph; fix. Axiom pages for A10/A15/A16 → status "demoted, v13 proposal". |
| New | Empirical anchor E2 (A1 dominance claim) with measurement + falsifier. ¬A5 failure theorem. Density lemma for A4. β estimator definition. |

## 5. Decisions reserved for the maintainer

| # | Question | Recommendation |
|---|---|---|
| Q1 | Accept A15/A16 → component spec? (Both are v12 additions framed as a conservation law.) | Yes. The adjudication shows the conservation *is* double-entry from A9 + A4, and the ε-noise layer refutes "cryptographic-equivalent". Nothing collapses. |
| Q2 | Add the redeployability axiom from A10's residue? | Not now. Repair Proof 9 / T35 typing first; add only if a derivation then fails. |
| Q3 | §0: widen P6, or admit A9/A14 as structural normative commitments? | Admit. Widening P6 to cover control would make it do the work of three claims. |
| Q4 | A3's RS citation: drop or invert? | Invert — state the no-rival-venue assumption explicitly. |
| Q5 | Should the v13 cut renumber (A1–A10) or keep gaps? | Keep gaps through the community review window; renumber at the cut. |

## 6. What this feeds

- **Pass 2 (component decomposition)** starts from §3.2: every demoted mechanism clause is a conformance requirement looking for its component.
- **The open-source posture**: this file is the first artefact contributors should attack. The v13 set is a proposal, not a decree; the cards show the reasoning and the places it might be wrong.
- **Lean 4 (C-05)**: formalise the v13 candidate, not v12 — formalising a set known to contain three analytic axioms wastes the compiler.

Cards: `A1.md` … `A16.md`; refutations and defences: `verify/`.
