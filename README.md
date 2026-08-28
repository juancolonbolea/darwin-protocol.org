# DARWIN Protocol — open blueprint

**We mint trust. We own what we mint.**

This repository is the open-source blueprint of the DARWIN Protocol: the trust-minting protocol and matching engine behind [Darwinex](https://www.darwinex.com). It contains three things:

| Folder | What it is | Status |
|---|---|---|
| `spec/` | The canonical protocol specification — `PROTOCOL.md` (governing synthesis), `CONSTITUTION.md` (7 primitives · 11 active axioms (v14) · 74 theorems · 21 proofs), `DEVELOP.md`, `REWARD.md`, `INDX.md`, `MANIFEST.md`, and `electrons/` (component-level pieces) | Complete, authoritative |
| `src/content/docs/` | The public site [darwin-protocol.org](https://darwin-protocol.org) (Astro + Starlight), which renders the spec for members, researchers and builders | Scaffolded; most `specification/` pages are still stubs awaiting migration from `spec/` |
| `analysis/` | The audits the spec is revised from — one card per axiom, refutations and defences, and the synthesis that ratified each change | Open to contributors |

Everything derives from `spec/PROTOCOL.md`. Start there (§1 The Name → §2 The Problem → §3 The Three Inversions), then `spec/CONSTITUTION.md` for the formal axioms and proofs.

The axiom set is at v14. It is the output of `analysis/axiom-stress/SYNTHESIS.md` — an adversarial audit that attempted to derive each active axiom from the others, then refuted and defended every verdict. Thirteen active axioms became ten at v13: A10 demoted to vocabulary, A15 and A16 demoted to conformance requirements on the matching and settlement components, and every surviving axiom restated. v14 adopts A17 (attestation without custody) in restated form, taking the set to **11 active axioms (v14)**.

## Why open

The protocol is built on transparency (A13). A trust-minting mechanism that hides its own rules cannot be trusted. So the rules are public, and the work of building them out is open to the community that the protocol serves.

## Contributing

The protocol is decomposed into components that can be built, verified or extended independently. See [`COMPONENTS.md`](COMPONENTS.md) for the list of open components and [`CONTRIBUTING.md`](CONTRIBUTING.md) for how to claim one.

## Running the site locally

```bash
npm install
npm run dev
```

## Notes on `spec/`

- Files use `[[wikilinks]]`. Links to files inside `spec/` resolve; links to other internal Darwinex documents (e.g. `[[VOCABULARY]]`, `[[SETTLEMENT-ARCHITECTURE]]`) do not yet — publishing those is itself an open component.
- Version markers inside each file are the source of truth for that file.

## License

- Code (site, tooling, any future reference implementations): [Apache License 2.0](LICENSE)
- Protocol content (`spec/`, `src/content/`, `public/infographics/`): [Creative Commons Attribution-ShareAlike 4.0](LICENSE-CONTENT)

Derivatives of the protocol text must stay open under the same terms.
