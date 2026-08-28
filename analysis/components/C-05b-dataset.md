---
component: "5b — Dataset (P5 substrate)"
spec_commit: 6f8ea84
axiom_basis: v13 proposal (analysis/axiom-stress/SYNTHESIS.md §2)
trust_class: NEVER_OPEN
coverage: PARTIAL
---
## Purpose

The member-owned raw substrate — ticks, quotes, fills, risk-adjusted histories — governed as a commons, consumed only through derivations. A monotone stock, not a product: the vehicle by which trust returns as edge. Without it e^X degenerates to e×X.

## Interface

**Inputs** — member and venue records: tick and quote streams, order and fill events, position and margin snapshots; attested outputs from 2, binding each record to a provenance root at the ownership transition; match and netting records from 3; postings from 4.

**Outputs** — governed access, never bulk copies: record schemas and estimator input contracts; aggregate-only query surfaces with cohort floors and noise; versioned, reproducible training sets for 1 and 5; matching-pattern aggregates for 3; the inheritance corpus at published granularity and lag.

**Invariants** — I1 a raw record is owned by its originator until attested; commons rights attach to the attested record and its derivatives, never to un-granted raw. I2 inside, no derived good is exclusive to any member or class. I3 outside, every export past the boundary passes the granularity-and-lag filter. I4 append-only; corrections are new records. I5 every derived artefact resolves to its record set and estimator version. I6 return to contribution exceeds cost at the margin: this commons fails by under-contribution, not over-extraction.

## Enacts

The α-loop theorem (trust→edge) — under v13 a theorem, not an axiom arm: the confidence axiom keeps only β, so its "trust begets edge" citation is stale. Also merit-estimability (the substrate is the estimator's finite sample), commensurability, the disclosure boundary, non-rivalry duality, provision-commons governance, and open-method protection: the substrate, not the method, is irreplicable.

## Must not know

Cleartext strategy logic. Any identity re-linkable from an aggregate or export across the disclosure boundary. Live un-lagged positioning of an identified member outside sealed computation. Raw records not granted by their owner. Aggregate flow information reaching a party able to take the other side.

## Conformance requirements

1. A published, versioned schema SHALL define every field, unit and clock; undocumented fields SHALL NOT be stored.
2. Every record SHALL carry owner identifier, attestation status and provenance root; un-attested records SHALL be readable only by the owner and explicit grantees.
3. Query surfaces SHALL return aggregates over a minimum cohort with bounded noise, under a per-consumer budget and member-visible audit log; no composition of permitted queries SHALL recover an individual.
4. Training sets SHALL be content-addressed and reproducible from record set plus estimator version.
5. Retention SHALL meet the estimator's minimum window; erasing an owner's raw SHALL NOT invalidate published attestations — supersede instead.
6. Exports SHALL be labelled with granularity and lag, and SHALL NOT be finer than the published boundary.
7. Access rules, cohort floor and retention horizon SHALL change only by published collective-choice procedure, with graduated sanctions and appeal.

## Depends on / depended on by

Depends on 2, 3, 4, 1. Depended on by 1, 3, 5, 8.

## Openness

Split verdict. The interface — schemas, access rules, cohort and noise parameters, provenance format, governance procedure — is stranger-buildable and should be published. The corpus cannot be: open-sourcing it erases the inside/outside rivalry asymmetry and breaches the disclosure boundary for members who never consented.

## Existing coverage

Covered: the primitive definition, five dataset→edge channels, the collapse test, commons scoring. Absent: no record schema is published (the one per-member schema in the spec is a commercial reporting model); nothing specifies access control, provenance, retention or query budgets. "Non-portable, protocol-owned" is never reconciled with member ownership before attestation, nor with the open-data posture; and the wording is ambiguous between operator-owned and member-owned, which decides who sets the boundary.
