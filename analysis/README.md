# Analysis — the protocol audited against itself

This folder holds the adversarial passes run over `spec/`. Transparency (A13) applies to the protocol's own reasoning: the audit of the axioms is public, the cards are public, the method is public so anyone can re-run it.

Method: **map → verify → reduce**. One agent per unit writes a bounded card; a second agent tries to refute any non-trivial verdict; a human-attended reduce step reads only the cards and writes the synthesis. The corpus is never loaded whole — the cards are the working memory.

| Pass | Unit | Output |
|---|---|---|
| 1 — Axiom stress test | each active axiom | `axiom-stress/A{n}.md` cards → `axiom-stress/SYNTHESIS.md` |
| 2 — Component decomposition | each cell of the §11 architecture map + electrons | `components/C-*.md` cards → `components/ARCHITECTURE.md`, `components.json` |
| 3 — Build sequencing | `components.json` | `SEQUENCE.md` |

Every card records the `spec/` commit it was written against. A card against a stale commit is stale.
