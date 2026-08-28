# Card schemas

## Axiom stress card (`axiom-stress/A{n}.md`)

```
---
axiom: A7
spec_commit: <sha>
verdict: INDEPENDENT | DERIVABLE | UNDERSPECIFIED
confidence: high | medium | low
---
## Statement (as in spec)
## Derivation attempt
Strongest attempt to derive it from the other axioms + primitives. Show the chain or show exactly where it fails.
## Hidden assumptions
What the axiom quietly relies on that is not stated (empirical, behavioural, normative).
## Load
Theorems that depend on it; what collapses if it is dropped or weakened.
## Recommendation
Keep / merge into Ax / split / restate (with proposed text).
```
Cap: 400 words. No wikilinks. No internal document names.

## Component card (`components/C-{nn}-{slug}.md`)

```
---
component: "3 — Matching Engine"
spec_commit: <sha>
axiom_basis: v13 proposal (analysis/axiom-stress/SYNTHESIS.md §2)
trust_class: STRANGER_BUILDABLE | NEEDS_REFERENCE_IMPL | NEVER_OPEN
coverage: FULL | PARTIAL | MISSING
---
## Purpose (one paragraph)
## Interface
Inputs · Outputs · Invariants (what must hold across every call/cycle)
## Enacts
Which v13 axioms / theorems this component makes true, and how.
## Must not know
Information this component is forbidden to observe or retain (A13 boundary, A9 flow information, netting identity).
## Conformance requirements
Numbered SHALL statements a third-party implementation must pass. Include the demoted mechanism clauses that belong here.
## Depends on / depended on by
Other components by number.
## Openness
Why this trust_class: what a stranger can build from the spec alone; what needs a reference implementation from the maintainers; what must stay closed and why (cite the axiom).
## Existing coverage
Which spec/ files and electrons already specify it; the gaps.
```
Cap: 600 words. No wikilinks. No internal document names, deal, partner, board or regulator content.
