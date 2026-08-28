# Open work units

Derived from `analysis/SEQUENCE.md` (build order) and `analysis/components/` (one card per protocol component). Claim a unit by opening an issue titled "Claiming W-nn". Units marked **maintainer** need artefacts only the protocol's operators can supply; everything else is buildable from the published spec.

Protocol components are numbered 1–8 as in `spec/PROTOCOL.md` §11; work units are numbered W-nn.

| Unit | Tranche | Work | Component card | Blocked by | Who |
|---|---|---|---|---|---|
| W-01 | 0 | Publish the record schema, provenance root format, access-control and retention rules | C-05b | — | maintainer (M12) |
| W-02 | 0 | Set the disclosure-boundary parameter: granularity and lag (A13) | C-02 | — | maintainer (M3) |
| W-03 | 0 | Publish the risk-engine numeric parameter set + golden test vectors | C-01 | — | maintainer (M1) |
| W-04 | 0 | Publish cycle length + selection procedure; the operational definition of surplus; the joint-output attribution rule | C-03, C-04 | — | maintainer (M2, M4, M6) |
| W-05 | 0 | Publish the deterministic INDX composition rule (ruling Q9) | C-05 | — | maintainer (M5) |
| W-06 | 0 | Field dictionary + message flows + golden messages; attribution output schema + sum-to-cycle fixture; λ sizing rule; cohort floor / noise budget; reconciled tier table + premium map; β estimator | C-08, C-03, C-05b, C-06, C-05 | — | maintainer (M7–M11) |
| W-07 | 1 | Conformance test suite for the Settlement Layer from C-04's SHALLs, parameterised by M2/M4/M6 | C-04 | — | community |
| W-08 | 1 | Conformance test suite for the Trust Signal from C-05's SHALLs and test-vector list | C-05 | — | community |
| W-09 | 1 | Conformance test suites for components 1, 2, 3, 6, 8 from their SHALLs | C-01, C-02, C-03, C-06, C-08 | — | community |
| W-10 | 1 | Lean 4 formalisation of v13: primitives, 10 axioms, core flywheel theorems T1–T4 | `spec/CONSTITUTION.md` | — | community |
| W-11 | 1 | Cross-validation script: spec ↔ site ↔ Lean IDs and counts | all | — | community |
| W-12 | 2 | Reference Settlement ledger: double-entry per cycle, atomic commit, retention and ceiling checks, trial-balance statement | C-04 | W-04 | community |
| W-13 | 2 | Reference INDX composition: pure function + C-05 test vectors | C-05 | W-05, W-12 | community |
| W-14 | 2 | Demo prediction market on the published series with third-party-settleable propositions; allocation wire cut (ruling Q8) | C-07 | W-13 | community |
| W-15 | 3 | Independent risk-engine re-implementations against golden vectors; robustness estimators (F6), half-life publication (F7), orthogonal axes (F9) | C-01 | W-03 | community after maintainer reference |
| W-16 | 3 | Attestation verifier tooling: hash-chain, signatures, replay; alternative chain back-ends | C-02 | W-02 | community after maintainer boundary construction |
| W-17 | 3 | Client libraries per Open Protocol interface; broker-rail node reference; dashboard state machine; third-party-node conformance harness | C-08 | W-06 | community after maintainer golden messages |
| W-18 | 4 | Matching-engine simulator against synthetic intents; conformance harness on public telemetry; priority-ordering proposals | C-03 | W-04, W-06, W-02 | community after maintainer reference pump |
| W-19 | 4 | Options pricing / payoff / escrow library as a pure function; payoff calculators | C-06 | W-06, ruling Q6 | community |
| W-20 | any | Migrate `spec/electrons/*` into site pages; ES translation; whitepaper PDF build; glossary reconciliation | — | — | community |

Never open: the dataset corpus (5b) and live state surfaces (book, residual, routing schedule, inventory, hedge book). Rules are always published — see `analysis/components/ARCHITECTURE.md` §1.

Done: migration of primitives, axioms, theorems and proofs into site pages (28-Aug-2026).
