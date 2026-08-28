# Pass 2 — Component decomposition — status

spec_commit: 6f8ea84 · axiom basis: v13 proposal (axiom-stress/SYNTHESIS.md §2)

| Step | State |
|---|---|
| Map: 9 component cards (1 Risk Engine · 2 Attestation · 3 Matching Engine · 4 Settlement · 5 Trust Signal INDX · 5b Dataset · 6 Options Layer · 7 Prediction Market · 8 Open Protocol Layer) | done — 2 STRANGER_BUILDABLE (4, 5; 7 as product), 5 NEEDS_REFERENCE_IMPL (1, 2, 3, 6, 8), 1 NEVER_OPEN corpus (5b) |
| Reduce: ARCHITECTURE.md + components.json (interfaces, dependency edges, trust classes) | done — principle "rules open, state closed"; 5 cross-cutting invariants with owners; 12 maintainer artefacts M1–M12; rulings Q6–Q9 |
| Pass 3: SEQUENCE.md (topological order × trust exposure) | done — tranches 0–4 + never-open; ../SEQUENCE.md |
