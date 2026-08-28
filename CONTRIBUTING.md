# Contributing to the DARWIN Protocol

## Principles

1. **The spec is the source of truth.** `spec/PROTOCOL.md` and `spec/CONSTITUTION.md` govern. Site pages, code and diagrams derive from them, never the other way round.
2. **Axioms change by proposal, not by pull request.** A change to a primitive or axiom (`spec/CONSTITUTION.md` §I–§II) must be opened as an issue tagged `axiom-proposal` with: the axiom, the proposed text, which theorems it affects, and why. Theorem and proof contributions that follow from existing axioms are ordinary PRs.
3. **Show the derivation.** Every claim in the spec is derived from stated axioms. A contribution that adds a claim adds its derivation.
4. **Transparency over polish.** A rough, correct, traceable contribution beats a polished one with hidden reasoning.

## How to contribute

1. Pick a component from `COMPONENTS.md` (or propose a new one via issue).
2. Open an issue saying you are claiming it, so work is not duplicated.
3. Fork, branch (`component/<id>-<slug>`), do the work.
4. Open a PR referencing the issue. Explain what was derived from where.
5. A maintainer reviews for consistency with the spec. Merged work is credited in the site's contributors page.

## Style

- Markdown / MDX. Pipe tables. `[[wikilinks]]` inside `spec/`; normal relative links inside the site.
- Maths in KaTeX (`$…$`, `$$…$$`).
- English. The vocabulary in `spec/CONSTITUTION.md` and the site glossary is normative — reuse the terms, don't coin synonyms.

## License of contributions

By contributing you agree your contribution is licensed under the repository's licenses: Apache-2.0 for code, CC BY-SA 4.0 for protocol content.
