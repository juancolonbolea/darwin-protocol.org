# Open components

The DARWIN Protocol is decomposed into components that can be built independently. Each row is a unit of work a contributor can claim (open an issue: "Claiming C-xx").

| ID | Component | Source in `spec/` | Deliverable | Skills |
|---|---|---|---|---|
| ~~C-01~~ | Migrate primitives P1–P8 into site pages | `CONSTITUTION.md` §I | `src/content/docs/specification/primitives/*.mdx` populated, stubs removed | Markdown, close reading |
| ~~C-02~~ | Migrate axioms A1–A14 into site pages | `CONSTITUTION.md` §II | `specification/axioms/**/*.mdx` populated | Markdown, close reading |
| ~~C-03~~ | Migrate theorems T1–T28 groups into site pages | `CONSTITUTION.md` §III | `specification/theorems/*.mdx` populated | Markdown, maths |
| ~~C-04~~ | Migrate proofs 1–6 into site pages | `CONSTITUTION.md` §IV | `specification/proofs/*.mdx` populated, KaTeX-rendered | Maths, KaTeX |
| C-05 | Lean 4 formalisation of primitives + axioms | `CONSTITUTION.md` §I–§II | `lean/` package that compiles; `specification/lean4.mdx` documents it | Lean 4, formal methods |
| C-06 | Lean 4 proofs of the core flywheel theorems (T1–T4) | `CONSTITUTION.md` §III–§IV | Compiling proofs depending on C-05 | Lean 4 |
| C-07 | Cross-validation page: spec ↔ Lean ↔ site consistency check | all of `spec/` | `specification/cross-validation.mdx` + a script that diffs axiom counts/IDs across the three | Scripting |
| C-08 | Trust-equation explorer | `PROTOCOL.md` §6, `INDX.md` | Interactive component (dT/dt = (dC/dt)·K + C·(dK/dt)) embeddable in the site | JS/TS, Astro |
| C-09 | INDX composition rule — reference implementation | `INDX.md`, `electrons/INDX-COMPOSITION-RULE.md` | Pure function + tests reproducing the selection rule from the spec | Python or TS, testing |
| C-10 | Glossary reconciliation | `CONSTITUTION.md` vocabulary, `resources/glossary.mdx` | One glossary; every term in the spec appears with the same definition | Editing |
| C-11 | Electrons → site | `spec/electrons/*` (genotype / phenotype / niche pieces) | One site page per electron under a new `components/` section | Markdown |
| C-12 | Whitepaper PDF build | `PROTOCOL.md`, `CONSTITUTION.md` | Reproducible build (pandoc/typst) producing the PDF promised in `resources/downloads.mdx` | Pandoc/Typst, CI |
| C-13 | Translations (ES first) | all site content | `src/content/docs/es/**` | Bilingual |
| C-14 | Publish referenced internal docs | dangling `[[wikilinks]]` in `spec/` (e.g. VOCABULARY, SETTLEMENT-ARCHITECTURE) | Maintainer-gated: scrub + add to `spec/` | Maintainers only |

Struck-through components are done (C-01–C-04 landed 28-Aug-2026; reviewing those pages against `spec/` for drift is welcome as an ordinary PR). Components are ordered roughly by dependency: C-05–C-07 make the "compiler-verified" claim true; C-08–C-12 are builds on top.
