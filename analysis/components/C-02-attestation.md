---
component: "2 — Attestation / Blockchain layer"
spec_commit: 6f8ea84
axiom_basis: v13 proposal (analysis/axiom-stress/SYNTHESIS.md §2)
trust_class: NEEDS_REFERENCE_IMPL
coverage: PARTIAL
---

## Purpose

Turns the risk engine's per-cycle output into a record no party — the operator included — can alter after the fact, published at the boundary A13 fixes: results public and un-gated, strategy IP encrypted, live process private. A13 made mechanical. It attests attribution, never custodies principal, and is verifiable by a reader who trusts no one.

## Interface

**Inputs.** From 1: risk-normalised Quote per provider per cycle and the risk state behind it. From 3/4: match and settlement events — fill, internal-vs-overflow flag, cycle id, per-provider attribution. Identities: provider and allocator signing keys, pseudonymous by default. Each member's elected disclosure level across data, noise, timing, capital.

**Outputs.** Attested Quote records: signed, hash-chained, carrying quote, cycle id, disclosure level. The public series at A13 granularity and lag, append-only. Hash commitments for off-record computation. Two signed streams: Signal (submitted → attested → fee routed), Allocation (committed → matched → attributed).

**Invariants.** Append-only — corrections are new events citing their predecessor, never edits. Non-repudiable — every record signed by the party it binds, operator included. The boundary is never crossed, by one record or by differencing a series. Cycles commit whole or not at all.

## Enacts

**A13** entire — the component *is* the boundary. **A2**: "publicly attested" made operative, so the estimate is third-party falsifiable. **A8**: a common record format is what orders heterogeneous agents. **A9**: operator postings sit on the members' record, so extraction is visible. Carries A16's atomic commit and A3's un-gated access.

## Must not know

Raw signal payloads below the elected level; unredacted messages; strategy position state and in-flight intent; client capital and margin balances; any aggregate net-flow view usable for trading (A9); the netting identity.

## Conformance requirements

1. Every record SHALL carry a verifiable signature, a cycle id, and its predecessor's hash; committed records SHALL be immutable, corrections appended.
2. Each cycle SHALL commit atomically, no partial commit externally visible.
3. Published series SHALL be reproducible from committed inputs without privileged access.
4. Access SHALL NOT be conditioned on identity, fee, membership, latency or rate tier.
5. Publication SHALL be no finer than the elected granularity, no earlier than the elected lag; level changes SHALL be attested, never retroactive.
6. Rule 5 SHALL hold against differencing: no query sequence SHALL reconstruct a below-boundary quantity.
7. Off-record computation SHALL be hash-committed before use; forbidden inputs SHALL NOT be retained recoverably.

## Depends on / depended on by

Depends on **1** — no attested estimator, nothing to attest — and on **3**/**4** for match and settlement events. Depended on by **5**: the mint trigger reads attested ΔQuote, so without 2 the trust signal is an operator assertion. Also by **6**, **7**, **8**.

## Openness

Verification is stranger-buildable: hash-chained logs, signatures, commitments and replay are ordinary engineering, and rules 1–4, 7 suffice. The boundary is not. A13's granularity/lag parameter is undefined. An implementer must pick one, and both errors are fatal: too fine destroys the disclosed edge's capacity, too coarse defeats A2. Rule 6 has no stated construction. Neither is secret, so NEVER_OPEN is wrong; both need a reference implementation plus a ratified parameter, so STRANGER_BUILDABLE is dishonest.

## Existing coverage

`spec/electrons/PHENOTYPE--blockchain-attestation.md` is the substantive spec: attested classes, disclosure axes, on/off-record split, the two contracts. `spec/electrons/PHENOTYPE--open-trust-roadmap.md` sequences the opening. `spec/PROTOCOL.md` §11 rates it **Partial**. `spec/INDX.md` §1 and `spec/CONSTITUTION.md` (A13, T30, Proof 8) supply the axiom.

**Gaps.** (1) **Granularity/lag is defined nowhere** — the corpus's only figures are the member-elected timing axis, a disclosure *choice*, not the protocol boundary. The axiom's restatement names the parameter and leaves it unset. Blocking. (2) **Chain choice unspecified** — engineering awaits chain selection: no consensus model, finality assumption or cost model. (3) No anti-differencing construction. (4) The two contracts are a table, not an executable schema, and the field dictionary covers only the attestation subset.
