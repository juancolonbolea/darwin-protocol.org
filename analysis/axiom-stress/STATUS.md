# Pass 1 — Axiom stress test — status

spec_commit: 6f8ea84

| Step | State |
|---|---|
| Map: cards A1 A2 A3 A4 A5 A7 A8 A9 A10 A13 A14 A15 A16 | done — 0 INDEPENDENT, 3 DERIVABLE (A10 A16 A13), 10 UNDERSPECIFIED |
| Verify: refute A10 A16 A13; defend A2 A7; adjudicate A15↔A16 cycle → verify/*.md | done — A10 stands, A16 stands, A13 OVERTURNED (independent), A2/A8 modified, A7 modified, A15+A16 both demote |
| Reduce: SYNTHESIS.md (minimal axiom set, restatements, open questions) | done — 13 → 10 proposed (A10, A15, A16 demoted); 5 maintainer decisions Q1–Q5 |

Resume rule: a card file present with frontmatter = done. Missing = re-run that unit only.
