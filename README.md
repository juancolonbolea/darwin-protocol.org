# DARWIN Protocol — open blueprint

**We mint trust. We own what we mint.**

This repository is the open-source blueprint of the DARWIN Protocol: the trust-minting protocol and matching engine behind [Darwinex](https://www.darwinex.com). It contains two things:

| Folder | What it is | Status |
|---|---|---|
| `spec/` | The canonical protocol specification — `PROTOCOL.md` (governing synthesis), `CONSTITUTION.md` (7 primitives · 13 axioms · 70 theorems · 21 proofs), `DEVELOP.md`, `REWARD.md`, `INDX.md`, `MANIFEST.md`, and `electrons/` (component-level pieces) | Complete, authoritative |
| `src/content/docs/` | The public site [darwin-protocol.org](https://darwin-protocol.org) (Astro + Starlight), which renders the spec for members, researchers and builders | Scaffolded; most `specification/` pages are still stubs awaiting migration from `spec/` |

Everything derives from `spec/PROTOCOL.md`. Start there (§1 The Name → §2 The Problem → §3 The Three Inversions), then `spec/CONSTITUTION.md` for the formal axioms and proofs.

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
