---
component: "4 — Settlement Layer"
spec_commit: 6f8ea84
axiom_basis: v13 proposal (analysis/axiom-stress/SYNTHESIS.md §2)
trust_class: STRANGER_BUILDABLE
coverage: PARTIAL
---

## Purpose

The per-cycle accounting organ: it converts matching into posted trust stock under conservation of merit. Each cycle it posts a signed ΔINDX per provider under double-entry from the netted result and attested outcome, then routes the cycle's surplus into reinvestment vectors. It holds no discretion: every ratio is a published governance parameter.

## Interface

**Inputs.** From 3: netted book, internal-match savings, routed residual, cycle boundary. From 2: attested per-provider records — the bilateral certification sign and value-chain contribution events. From governance: cycle length, share anchors, take-rate ceiling, vector weights.

**Outputs.** Balanced journal entries per provider per cycle; INDX balances after mint and destruction; per-vector allocation instructions; an un-gated cycle statement with trial balance and realised take-rate.

**Invariants.** I1 debits = credits per cycle, every ΔINDX countered. I2 retention: all surplus assigned to a vector in-cycle, none distributed or idle. I3 realised take-rate ≤ ceiling, excess reinjected same cycle. I4 the cycle commits whole or not at all. I5 closing stock = opening + flow − destructions. I6 every posted unit traces to an attested contribution.

## Enacts

A5 — I2/I3 make retention testable. A9 — no operator position or spread line, audited by the ledger. T21 — vector weights are inputs; allocation stays a governance surface. T42 — the bilateral sign triggers mint or destroy. T44 — attribution across value-chain steps × matching dimensions. T35 and Stock-Flow Conservation — flow integrates into stock, re-grounded as A9 + A4 + T42 + accounting; the demoted atomic-commit clause is I4.

## Must not know

Pre-netting composition or any individual's intent — it sees the netted result only, retaining no order-level detail beyond what attribution needs. Strategy IP and the live process. Aggregate flow direction before commit.

## Conformance requirements

1. SHALL post a signed ΔINDX per provider per cycle, sign matching the attestation, with a counter-entry.
2. Postings SHALL commit atomically per cycle; no partial commit externally visible.
3. SHALL close each cycle with a zero-netting trial balance, published un-gated, and SHALL be replayable from identical inputs.
4. SHALL assign all computed surplus to declared vectors in-cycle.
5. SHALL post take-rate excess over the ceiling to reinjection channels in-cycle.
6. SHALL read shares from a published record; SHALL NOT hardcode or index them to certified quality.
7. Postings lacking an attested record SHALL fail the cycle.
8. SHALL record destruction paths as first-class entries, not adjustments.
9. SHALL NOT accrue a position or spread line to the operator.

## Depends on / depended on by

Depends on 3 (netting output, cycle boundary) and 2 (attested records, sign). Feeds 5, 5b, 6, 7, 8.

## Openness

Stranger-buildable: every mechanism is bookkeeping — double-entry, atomic commit, retention and ceiling checks — needing no private data. Closing it would break the axioms it enacts: an unauditable ledger is where extraction hides. Parameter values are governance, published as inputs; conformance stays testable from cycle statements.

## Existing coverage

spec/REWARD.md §7–§8, spec/PROTOCOL.md §5 and §6.1; A5, A9, T21, T35, T42, T44, plus Stock-Flow Conservation and Take-rate Ceiling. The three application electrons document accounting practice and its attribution distortions, not a ledger spec.

**Gaps.** (1) "Surplus" is never operationally defined — no measurement basis, cost base, or boundary against working capital, so I2 is untestable. (2) No joint-output attribution rule: T44 attributes at every step and T59 makes the share continuous in originality, but nothing splits a cycle's surplus across several contributors to one output, so postings double-count or leave residue (I6 fails). (3) Cycle length lacks a selection rule; ledger arity is unsettled (double- versus triple-entry); the matrix says Full, these tests say Partial.
