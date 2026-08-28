---
type: constitution
language: dual
status: ACTIVE
version: 12
date: 2026-04-20
owns: |
  Formal logical structure of Darwinex. 7 primitives (P0-P6), 13 axioms,
  70 active theorems (61 positive + 9 failure), 21 proofs. 4 named principles.
  Force-axiom mapping (temporal view): V/S/I/P + Conservation.
  Dependency graph. Cross-validation matrix. Notation reconciliation.
  Value-rootedness: every conclusion is conditional on P6.
  T42 is the load-bearing empirical anchor (bilateral extension v12).
  Narrative synthesis lives in [[PROTOCOL]]. This file is the formal appendix.
supersedes: "CONSTITUTION v10 (19 Apr 2026)"
cross_refs:
  - PROTOCOL
  - DEVELOP
  - REWARD
  - INDX
  - VOCABULARY
  - CCP_MATCHING_ENGINE
  - BOARD_DECK_FRAMEWORK
audit_trail: |
  v12.1 (20 Apr): Take-rate Ceiling (Patagonia Constraint) added as 4th Named Principle. Cascade: SETTLEMENT-ARCHITECTURE §6, REWARD §7, PROTOCOL §6 + §6.1, darwin-protocol-org-spec Monetary System, INDX_FUNNEL §4.5, PHENOTYPE--booster-mechanics updated with v12.1 sharpenings.
  v12 (20 Apr): A15 Intent Conservation + A16 Atomic Cycle (2 new axioms). T42 bilateral extension. T61 promoted from candidate. T64 Patience Lever (new theorem). 3 Named Principles (Normalisation, Stock-Flow Conservation, Capital-vs-Merit Separation). 13 axioms, 70 theorems (61 positive + 9 failure), 21 proofs.
  v11 (19 Apr): T58 (Open-Trust ↔ INDX duality), T59 (continuous irreplaceability), T60 (control-loop convergence). Proofs 19-21 added. T42 elevated as load-bearing empirical anchor. P6 value-rootedness made explicit. IMR "phase transition" language softened to inflection/amplification (no new axiom). 68 theorems (59 positive + 9 failure), 21 proofs.
  v10 (19 Apr): A7 demoted to β-only axiom. A7α → T56 (Trust-to-Edge Aggregation, T47 specialisation). T57 added (Open Trust as V/S/I/P operational interface). F6-F9 added (adversarial/external failure class: Dataset Poisoning, Reflexivity, Regulatory Weaponisation, Strategy Convergence). Proofs 17-18 added. 65 theorems (56 positive + 9 failure).
  v9 (14 Apr): Force-axiom mapping (temporal view). F5 (Stagnation). 59 theorems. Spiral + force-pair refs to [[PROTOCOL]].
  v8b (12 Apr): Protocol Chain synthesis, ten-triad, IMR-split, Nobel mapping. Narrative moved to [[PROTOCOL]].
  v7 (11 Apr): Deep audit hardening. A6→A7, A11→A5, P7 demoted. A8 RESTORED. F1-F4 failure theorems.
  v6 (10 Apr): P0 added. Causal chain formalized. v5 (7 Apr): A1 generalized. T42-T46. Proofs 14-16.
  v4 (6 Apr): T35-T40 (Protocol Transition). Proofs 9-12. v3 (5 Apr): T29-T34. Proofs 7-8.
protocol_layer: Logical
protocol_piece: Protocol
protocol_component: []
cross_cutting: true
---

## LLM_SECTION

# The Darwinex Constitution — v12

> 7 primitives. 13 axioms. 70 active theorems (61 positive + 9 failure). 21 proofs. 4 named principles. Audit-hardened 11 Apr 2026. Force-axiom mapping 14 Apr 2026. A7 β-only + T56/T57 + F6-F9 risk theorems 19 Apr 2026. T58–T60 + T42 anchor + P6 value-root 19 Apr 2026. v12 (20 Apr): A15 Intent Conservation + A16 Atomic Cycle. T42 bilateral extension. T61 promoted. T64 Patience Lever. 3 Named Principles. DARWIN_ECONOMY §10.0/§10.1/§10.2. v12.1 (20 Apr): Take-rate Ceiling (Patagonia Constraint) added as 4th Named Principle.
> Narrative synthesis (Protocol Chain, ten-triad unification, trust equation, IMR-split, identity): [[PROTOCOL]].
> This file is the formal appendix proving logical consistency.

---

## 0. VALUE-ROOTEDNESS (CONDITIONAL)

> **Identity, at the limit — Self-allocating humanity. Collective insight, persisting.** Every payment is two humans acknowledging each other's value contribution; P6 is the fitness function applied to the payment graph's acknowledgement structure. Canonical statement: [[VOCABULARY]] §Mission.

The framework has exactly one normative primitive: **P6 (Merit) — contribution should determine reward.** Rendered against the acknowledgement atom: acknowledgements should reflect value contribution, nothing else. V, S, I, P and their underlying axioms (A1–A14 excluding C-flagged ones) are descriptive: they characterise how selection-driven systems evolve wherever P0 (information asymmetry) creates selection pressure. C / P6 is the chosen fitness function — a value commitment, not an empirical claim.

**The conditional.** *If P6, then {T1 … T60, F1 … F9}.* Without P6 the theorems still hold as descriptive claims about selection dynamics — the flywheel still self-accelerates, trust still accrues to edge, e^X is still algebraic — but they carry no normative force. "The protocol evolves toward merit-determined allocation" is only a *good thing* if one accepts P6. Anyone who rejects P6 rejects the framework's conclusions in the same breath.

This is not a hidden weakness; it is the framework's owned value-root. The protocol does not smuggle values. Every downstream structure — routing legitimacy, INDX scoring, 15/85/75 distribution, Open Trust's economic self-evolution — is conditional on P6 and transparent about being so.

---

## I. PRIMITIVES — Undefined Terms (7)

Accepted without proof. Each genuinely irreducible. Ordered by causality: P0 → P1 → P2 → P3 → (loop). P7 (Inversion) demoted as primitive v7, recognized as protocol operation v8b (see [[PROTOCOL]] §3). **v8 (12 Apr 2026):** P0 regrounded from "Mistrust" to "Information Asymmetry" — three named dimensions (credibility, intent, data) each mapped to a resolving primitive. Trust (P3) reframed as residual of resolved asymmetry. Ten-triad unification table. See §Primitive Audit Trail for rationale.

| # | Primitive | Type | Verb | Circle | Irreducibility test | Grounding |
|---|-----------|------|------|--------|---------------------|-----------|
| **P0** | **Information Asymmetry** | Cost | — | **Non-overlap area** | The ground truth: the spread is the cost of one party knowing more than another. **Three dimensions:** (1) **Credibility asymmetry** — "is this merit real?" Resolved by P1 (certification). Individual-level. (2) **Intent asymmetry** — "what are others doing?" Resolved by P4 (mutualized matching). Community-level. (3) **Data asymmetry** — "what information exists?" Resolved by P5 (open dataset). Society-level. Each dimension maps to a resolving primitive, a level of agency, and a type of capital: human (e), social (★), financial (X). Mistrust is the human experience of information asymmetry; the mechanism is information-theoretic. Trust (P3) is the residual — what remains when asymmetry is removed, not something built. Geometric form: non-overlap area of three circles, each representing an information domain. IMR = information symmetry metric. P0→0 = concentric = full information symmetry = zero friction. Cannot be derived — it is the problem the system exists to solve. **H-framing:** P0 is humanity's information asymmetry about itself — the opaque structure of the payment graph before it is made legible. | [[PROTOCOL]], [[BOARD_DECK_FRAMEWORK]] §0 |
| **P1** | **Credibility (e)** | Stock (Rate: dC/dt) | **Develop** | **e circle** | Earned by producing edge. Certified by the protocol. Accumulated in the Quote. Cannot derive from trust or confidence alone — requires actual performance against the market. | [[DEVELOP]] |
| **P2** | **Confidence (K)** | Flow → Stock (AuM) | **Honour** | **X circle** | Bestowed by allocating capital to certified credibility. Forward-looking bet based on observed P1. Given, not taken. Must be honoured. **Enabling condition:** confidence is rational ONLY when certified edge is expressed as a comparable instrument (risk-normalised DARWINs at uniform 6.5% VaR — see A8). Without comparability, K = 0 identically. Cannot derive from credibility alone — requires an external act of trust AND an investable comparison surface. | [[REWARD]] Step 3, [[PHENOTYPE--risk-engine]] |
| **P3** | **Trust (INDX)** | Stock (C × K) | **Accrue** | **e∩X overlap** | The RESIDUAL of resolved information asymmetry — what remains when credibility, intent, and data asymmetries are removed. Minted when credibility (P1) meets confidence (P2). INDX = ΔQuote × Outside Confidence = information impact (new information created × information acted upon). INDX velocity (dT/dt) = rate of information asymmetry resolution. Attributed back to source. Compounds. Cannot derive from credibility or confidence alone — requires the PRODUCT of both. Trust is not built; it is REVEALED by removing P0's three barriers. | [[VOCABULARY]], [[BOARD_DECK_FRAMEWORK]] §0 |
| **P4** | **Matching** | Process (by-product) | — | **★ circle** | The verb the system performs — five dimensions (flow, knowledge, capital, community, tool). A welcome by-product of community activity, NOT the goal. Cause: develop P1 + honour P2. Effect: opposing flows match. | [[CCP_MATCHING_ENGINE]] |
| **P5** | **The Dataset** | Stock asset | — | **e×★ bridge** | 12 years, 100K certified track records, matching patterns, risk-adjusted histories. Vehicle for P3→P1 feedback (trust→edge). Non-portable, protocol-owned. | [[PHENOTYPE--dataset]] |
| **P6** | **Merit** | Ordering principle (NORMATIVE) | — | **Gravity** | **The only normative primitive.** A philosophical commitment, not an empirical observation: contribution SHOULD determine reward. The framework CHOOSES this. The anti-P0: where P0 says information IS asymmetric (descriptive), P6 says information SHOULD BE symmetric (normative). "Allocate by merit" = "allocate based on symmetric information about quality." P6 is the normative inverse of P0. Merit is the gravity that pulls circles into concentricity. Cannot be derived — it is the ethical foundation. **H-framing:** P6 on P0 is humanity's self-allocation function evaluated on its own information asymmetry — the protocol is the operator that moves P0 toward resolution under P6. **TRANSITION NOTE:** During transition, capital determines reward (shareholders extract proportional to capital, not contribution). P6 becomes fully true at DWX:INDX = 1 (T36). Before that, P6 is aspirational — the same honest framing as A9. | [[PROTOCOL]], [[DEVELOP]] |
| **~~P7~~** | ~~**Inversion**~~ | ~~Generative method~~ | — | ~~Meta~~ | **DEMOTED v7 as primitive. RECOGNIZED v8b as protocol operation.** State convention → invert → test for coherence. Demoted because it's not a thing the system HAS — it's what the system DOES. The method that produced the axioms IS the method the protocol runs continuously: A13 inverts credibility asymmetry, A14 inverts intent asymmetry, P5+T30 inverts data asymmetry. Three inversions, one method, operating every tick. The DARWIN Protocol = P7 applied operationally to each dimension of P0. See [[PROTOCOL]] §3 (Three Inversions). Subsumes former A15. | ~~[[VOCABULARY]]~~ |

### The Causal Chain (from P0)

```
P0 (Information asymmetry)  Three dimensions: credibility, intent, data
        ↓
P1 (Credibility)             Resolves CREDIBILITY asymmetry: certify edge → Quote
                              CREATES information (individual level, human capital)
        ↓
A8 (Standardisation)         TRANSLATES quality info → allocation info (the membrane)
        ↓
P2 (Confidence)              Allocation on symmetric information → rational
        ↓
P4 (Matching, by-product)    Resolves INTENT asymmetry: mutualized matching hides individual intent
                              PROTECTS information (community level, social capital)
        ↓
P5 (Dataset, open)           Resolves DATA asymmetry: information commons
                              LIBERATES information (society level, financial capital matched)
        ↓
P3 (Trust = P1 × P2)        RESIDUAL: what remains when asymmetry removed.
                              INDX = ΔQuote × Outside Confidence = information impact.
        ↓
P3 → P1 (α loop)            More trust → more data → less credibility asymmetry
P3 → P2 (β loop)            More trust → more proof → less confidence gap
        ↓
P0 falls                     All three asymmetries shrink → spread narrows → circles converge
        ↓
Surplus reinvested           Rescued asymmetry cost → funds more P1 development → more P3
        ↓
e^X                          Double recurrence (α, β > 0): information non-rivalrous inside,
                              rivalrous outside → ratio grows super-linearly
        ↓
Cascade                      Protocol applies to any market with information asymmetry
```

<!-- Ten-triad unification, trust equation, IMR-split, identity, temporal identity: see [[PROTOCOL]] §6-§8 -->

### Primitive Audit Trail (v6 renumbering)

| v6 # | v5 # | Change | Reason |
|-------|-------|--------|--------|
| P0 | — (v6), Mistrust (v6-v7) | **REGROUNDED v8 (12 Apr 2026):** "Mistrust" → "Information Asymmetry." Mistrust is the human experience; information asymmetry is the mechanism. Three named dimensions (credibility, intent, data) each mapped to resolving primitive (P1, P4, P5), level (individual, community, society), capital type (human, social, financial), and circle (e, ★, X). Trust (P3) reframed as residual of resolved asymmetry. Subsumes the v6 formulation — "friction between parties who cannot verify merit" IS credibility asymmetry, but it's only ONE of three dimensions. |
| P1 | P1 | Enriched | Same concept (Edge), enriched with verb (Develop) and stock/rate typing (Credibility). |
| P2 | P3 | Renumbered P3→P2 | Causal order: credibility (P1) begets confidence (P2) before trust (P3) is minted. |
| P3 | P2 | Renumbered P2→P3 | Causal order: trust (P3) is the PRODUCT of P1 × P2, so it comes last. |
| P4 | P4 | Reframed | Same concept (Matching), reframed as by-product not goal. |
| P5 | P6 | Renumbered P6→P5 | Sequential numbering after P4. Same concept (Dataset). |
| P6 | P7 | Renumbered P7→P6 | Sequential numbering. Same concept (Merit). Added: anti-P0 relationship. |
| ~~P7~~ | P8 | **DEMOTED v7 as primitive, RECOGNIZED v8b as protocol operation** | Not a primitive of the system — the OPERATION of the system. The method (state→invert→test) IS the DARWIN Protocol running continuously: A13 inverts credibility asymmetry, A14 inverts intent asymmetry, P5+T30 inverts data asymmetry. Three applications, one method. See [[PROTOCOL]] §3. |
| — | P5 | Stays demoted | Surplus derivable from P4. |

---

## II. AXIOMS — Foundational Claims (11)

Independent. Cannot be derived from other axioms or prior theorems. Each grounded in primitives P0-P6.

### Existential Axioms (why the system exists)

| # | Axiom | Statement | Grounded in | Circle | Atom |
|---|-------|-----------|-------------|--------|------|
| **A1** | **Markets are decided by access, not merit** | Allocation of capital, work, and ownership is decided less by contribution than by access. Trading is the first instance. Labor and capital markets follow the same pattern. **v8:** Access IS information asymmetry made structural — those with better data, faster machines, or privileged flow access allocate more. "Access, not merit" = "information advantage, not contribution." P6 (merit) is the normative inverse of P0 (information asymmetry): what IS (asymmetric) vs what SHOULD BE (symmetric). | P0+P6 | **Outer void** | [[PROTOCOL]] |
| **A2** | **Merit can be certified** | The protocol certifies contribution at every touchpoint — independently measured, publicly attested, externally validated by the market, and attributed across the full value chain. The Quote is an instance. INDX attribution is the general case. Certification goes both ways: to capital ("this edge is proven") and to edge ("this protocol enforces fair measurement and reward"). **The certification pipeline includes manufacturing:** the risk engine (A8) transforms raw strategy into a standardised, investable DARWIN — the Quote is meaningful BECAUSE the instrument is risk-normalised. Certification without manufacturing = grading incomparable exams. | P1+P6 | **e** | [[DEVELOP]], [[PHENOTYPE--risk-engine]] |
| **A3** | **Fair terms make self-selection total** | Same deal for everyone. Fee gates tourists. Publication gates frauds. What remains: developing traders. **v8b: A3 IS Rothschild-Stiglitz screening** — uniform terms are not naivete but mechanism design. The same contract creates differential incentives: skilled traders find participation profitable (E[allocation] - signal_cost > outside_option), tourists find it unprofitable (poor results + fee + exposure > zero allocation). Self-selection without the platform needing to observe quality ex ante. The four signal cost dimensions (time, fee, drawdown, publication) all satisfy the Spence single-crossing condition (dc/dθ < 0: lower cost for higher quality). See T53. | P6+P1 | **e edge** | [[DEVELOP]] |

### Structural Axioms (how the system works)

| # | Axiom | Statement | Grounded in | Circle | Atom |
|---|-------|-----------|-------------|--------|------|
| **A4** | **Matching eliminates friction across five dimensions** | Any pairing that removes friction creates surplus. Five dimensions: flow, knowledge, capital, community, tool. Matching is a by-product of community activity (P4), not the goal. The friction eliminated IS the cost of mistrust (P0). | P0+P4 | **★** | [[REWARD]] |
| **A5** | **Surplus reinvested compounds trust via three vectors** | Surplus (rescued mistrust cost) → reinvested wherever it mints the most trust → more trust → more surplus. When e > 0, each cycle produces more surplus than it consumes. **Three reinvestment vectors:** Compound (organic at rate e), Source (new members → matching density), Develop (improve edge rate + rails). Absorbs former A11 — the three-vector decomposition is A5's mechanism, not an independent claim. | P0+P3+P2 | **★→e,X** | [[REWARD]], [[INDX]] |
| **~~A6~~** | ~~**Collective credibility attracts confidence**~~ | **DEMOTED v7.** Absorbed into A7 (β-loop). A6 states that "individual Quotes aggregate and outsiders observe → award capital." This IS A7's β channel: trust begets confidence via visible proof. Not independent. | ~~P1+P2~~ | — | — |
| **A7** | **Trust begets confidence (β-loop)** | Trust → confidence (via proof/INDX): the β-loop. **β mechanism (absorbs A6):** individual Quotes aggregate into INDX; outsiders observe collective proof → award capital (ΔC). The external half of the trust differential equation — the irreducible behavioural assumption that proven, comparable, transparent edge rationally attracts capital. **β precondition:** β = 0 without standardisation (A8). Outsiders cannot rationally allocate to incomparable instruments. The risk engine is what makes the β-loop physically possible. **α-loop (trust → edge) is no longer axiomatic:** aggregate-level α is proven as **T56** (Trust-to-Edge Aggregation), specialising T47's G16 resolution. Only β remains axiom. | P3+P1+P2+A8 | **e∩X→X (β)** | [[INDX]] |
| **A8** | **Investability requires independent, algorithmic standardisation** | Credibility (P1) can only attract confidence (P2) when expressed as a comparable instrument manufactured by a trusted, independent process. **v8 information interpretation: A8 is an INFORMATION TRANSLATOR** — converts quality information (raw edge, idiosyncratic, incomparable) into allocation information (comparable, investable, rational). Without A8: quality information exists but can't be used for allocation. K = 0. A8 is why the flow reversal works: ideas (certified edge) can move to money (capital) only when they're translated into a form capital can act on. **Three structural features** make this work: (1) **CCP faces investors** — Darwinex (TSTT) is the centralised counterparty. The investor trusts the institution, not the trader. This is a trust architecture. (2) **Arm's length from providers** — the risk engine operates independently of the signal provider. The trader cannot game the manufacturing of their DARWIN. (3) **Algorithmic, not discretionary** — deterministic process (D-Leverage normalisation via EURUSD anchor, engine-generated trades at inception + every minute, VaR scaling to 6.5% = S&P 500 equivalent). Every adjustment is auditable. No human judgment in the loop. These three features create the comparison surface: any DARWIN can be evaluated against any other. Without independent standardisation, K = 0 — confidence has no rational basis. **Dependency:** A8's credibility rests on A9 (venue integrity). If A9 fails, the standardiser is biased → A8 loses trust → β = 0 (F4 cascades to F2). **Coupling:** the α-loop strengthens A8 (more data → better risk engine calibration → more precise standardisation → more confidence). A8 is the membrane between the e and X circles. **v8b Holmström enrichment:** A8 satisfies the informativeness principle — the risk engine should include every signal statistically informative about trader quality conditional on other signals. The DARWIN Quote is NOT a sufficient statistic (two traders with identical Quotes may have different drawdown/leverage/correlation profiles), which validates multi-dimensional scoring (D-Score, R-Score, etc.) as theoretically optimal. A8+A9 jointly approximate the Holmström first-best by making trader actions observable (see T54). **Career concerns (Holmström 1982):** the published track record creates implicit incentives beyond the fee structure — traders know the market continuously updates its quality assessment from the Quote. This amplifier operates independently of the explicit 75/25 split. **RESTORED v7** with new content (old A8 was demoted to T5 in v4 — different claim). | P1+P2+P4+A9 | **e→X membrane** | [[PHENOTYPE--risk-engine]], [[DEVELOP]] |
| **A9** | **No private extraction inside the venue** | CCP is sole resting counterparty inside Book 100. No member limit orders internally. All internal surplus mutualized. The mutualised market maker IS Main Street. **Fiscal identity of A5 (19 Apr):** A9 is also the **budget constraint of insight compounding.** The spread rescued from intermediaries + the venue share has exactly two destinations — dataset acquisition (reduce P0) and processor funding (intent-change detectors). Private extraction → money leaks out of data acquisition → insight quality stagnates → allocation quality degrades → P0 reopens → compounding stalls. A market maker inside the venue would be a tax on the compounding rate itself. Structural absence of intermediary rent is not moral preference — it is what makes welfare compound. **v8 information interpretation: A9 is an INFORMATION FIREWALL** — prevents intent asymmetry from being recreated inside. Extraction IS information exploitation (using information others don't have to profit at their expense). A9 guarantees: no one acts on aggregate flow information, no privileged counterparty information, no extraction from internal dynamics knowledge. A9 maintains the non-rivalry boundary (T51): information stays non-rivalrous inside. If A9 fails: information becomes rivalrous inside → e^X collapses to e×X → F4. **TRANSITION NOTE (v7):** Constitutional — describes endgame. During transition: sovereign capital (prop book) operates inside the venue as a bridge function, with arm's-length separation from TSTT. At endgame (T39): prop IS the venue — resolution by identity, not by rule. | P4+P6 | **★ constraint** | [[REWARD]], [[PHENOTYPE--prop-bu]] |
| **A10** | **Trust-flow is confidence-loaded allocation** | Trust-flow = allocating trust stock (P3) confident it will yield further trust at rate ≥ e. Not a metric — the act. | P3+P2 | **X→e∩X** | [[INDX]] |
| **~~A11~~** | ~~**Confidence reinvests into three vectors**~~ | **DEMOTED v7.** Absorbed into A5. The three-vector decomposition (Compound, Source, Develop) is A5's mechanism — how surplus gets reinvested — not an independent axiom. The ratio across vectors is a governance parameter (T21), not structural. | ~~P2+P3~~ | — | — |
| **~~A12~~** | ~~**The three-party split is a confidence allocation**~~ | **DEMOTED 6 Apr.** Derivable from A11+A5. The RATIO (75/25) is a governance parameter, not a law of nature. G12 resolved. | — | — | — |
| **A13** | **Transparency inversion** | Results public, IP encrypted, process proprietary. Individual selfishness → social trust. **IS the credibility inversion rendered as protocol rule** — the method (P7) applied to credibility asymmetry: convention (performance hidden) → inversion (results public, certified, comparable) → test (does trust emerge? yes — adverse selection resolved). A13 is how the protocol inverts A_c. Grounded in P1+P6. Resolves Akerlof's adverse selection: the DARWIN Quote is a DIRECT quality signal (not a proxy like education in Spence), eliminating market-for-lemons dynamics. | P1+P6 | **e mechanism** | [[TRANSPARENCY-INVERSION]] |
| **A14** | **Power inversion** | Individuals at the table, not on the menu. The venue IS the union. **IS the intent inversion rendered as governance rule** — the method (P7) applied to intent asymmetry: convention (individual intent exploited by privileged counterparties) → inversion (intent protected by mutualized matching, CCP sole counterparty) → test (does trust emerge? yes — moral hazard resolved). A14 is how the protocol inverts A_i. Grounded in P4+P6. Resolves Holmström's moral hazard: full observability via the risk engine satisfies the informativeness principle — no hidden actions possible. | P4+P6 | **★ mechanism** | [[POWER-INVERSION]] |
| **A15** | **Intent Conservation** | The ★-center pump preserves aggregate risk-adjusted directional intent across its transforms (normalise → match → size → abstract → route → certify). Individual identity is destroyed through netting (cryptographic-equivalent privacy via aggregation; composition infeasible to decompose from aggregate). Aggregate intent (vector sum of all members' risk-adjusted signals) is the conserved invariant that external markets certify. Posited as conservation law (not derivable from merit axioms without circularity), analogous to energy conservation in physics. **Consequences (theorem-derivable from A15):** netting is mandatory; external venues are subcontracted crystallisers not competitors; composition-infeasibility is structural (not a privacy feature added on top); double-entry INDX accounting is well-defined because the conserved quantity permits balanced journaling. | P4+A9 | **★ pump** | [[DARWIN_ECONOMY_V01]] §10.1 |
| **A16** | **Atomic Cycle** | Each processing cycle in the ★-center pump is one atomic transaction: signal ingested → normalise → match → size → abstract → route → certify → ±ΔINDX posted per provider. The cycle commits as a single operation or not at all; partial commits are structurally impossible. Atomicity is what enables double-entry INDX accounting without reconciliation gaps and what makes the routing graph update per-cycle rather than per-tick. Couples to A15 (Intent Conservation — the conserved quantity is defined per atomic cycle) and T42 (External Validation — certification is the atomic commit trigger). Without atomicity, per-provider attribution breaks and double-entry collapses. | A15+T42 | **★ pump** | [[DARWIN_ECONOMY_V01]] §10.0 |

### Axiom Audit Trail

| Former # | Disposition | Reason |
|----------|-------------|--------|
| **A6** | **DEMOTED → absorbed into A7 (11 Apr)** | A6 (collective credibility attracts confidence) IS A7's β-loop. Not independent. |
| **A8** | **DEMOTED → T5 (v4), then RESTORED v7 with new content** | Old A8 (e^X literal) derivable from A7+P5 → demoted to T5. New A8 (investability requires standardisation) is genuinely irreducible — the risk engine creates the comparison surface that enables K > 0. Different claim, same number. |
| **A11** | **DEMOTED → absorbed into A5 (11 Apr)** | Three-vector decomposition is A5's mechanism, not independent claim. Ratio is governance (T21). |
| **A12** | **DEMOTED → design parameter (6 Apr)** | Derivable from A11+A5. Ratio (75/25) is governance choice, not structural. G12 resolved. |
| **old A15 (pre-v12)** | **MERGED → P7(Inversion), then P7 demoted (11 Apr)** | "The method is reproducible" = property of inversion method. Now meta-method, not axiom or primitive. A15 number re-used in v12 for Intent Conservation (new content, unrelated to old A15). |
| **old P5(Surplus)** | **DEMOTED → derived (6 Apr)** | Derivable from P4 (Matching produces surplus). G11 resolved. |
| **T4** | **ABSORBED → T11 (6 Apr)** | Same derivation (A2+A7+A13), same conclusion. T4 = T11 applied to INDX. G13 resolved. |
| **A7α** | **DEMOTED → theorem T56 (19 Apr 2026)** | Aggregate-level α-loop (trust→edge via dataset) proven in T47 as specialisation of `A7β+A4+P5+T18+A13+T11+T34+A2`. No independent axiomatic content remaining. A7 retained as β-only axiom (rational allocation of capital to proven, comparable, transparent edge — irreducible behavioural assumption). |

### Force-Axiom Mapping (Temporal View)

> The Existential/Structural/Architectural grouping above is the **logical view** — why each axiom exists and how it functions. The force mapping below is the **temporal view** — which evolutionary force each axiom powers. Both are valid and coexist as orthogonal lenses. The spiral ([[PROTOCOL]] §1) unifies them: each V→S→I→P cycle tightens the three circles.

| Force | Type | Axioms | What it governs | Without it |
|---|---|---|---|---|
| **V** (Variation) | Spatial: individual | A1, A2, A3, A13 | Create conditions for edge to exist. Open access, certify merit, self-select, publish. | F5: Stagnation — nothing to select from |
| **S** (Selection) | Spatial: community | A4, A8, A9, A14 | Let merit determine allocation. Match, standardise, protect intent, invert power. | F4: ★-Collapse — variation without direction |
| **I** (Inheritance) | Temporal: compounds | A5, T56 | Compound trust across generations. Reinvest surplus, trust begets edge via aggregated dataset (T56). | F1: α-Collapse — each generation starts at zero |
| **P** (Propagation) | Spatial: society | A7, A10 | Trust attracts confidence from outside. Proof → capital → more trust. **Operationally: liquidity funnel from densest-matching core outward to the frontier, where prospects graduate into active savers, borrowers, insight-providers and insight-seekers — trust-gradient diffusion across humanity.** | F2: β-Collapse — internal ceiling |
| **C** (Conservation) | Normative: preserves | A1 (negation), P6 | Preserve the fitness function. Merit, not extraction, determines outcomes. | Extraction — compounding serves the wrong people |

**Notes:**
- **A7 (β-only) powers Propagation; T56 bridges V/S→I.** The former "hinge axiom" is now a split structure: A7 remains axiom for β (trust→confidence via proof), but α (trust→edge via dataset) is the theorem T56, specialising T47's aggregate-level derivation. The double recurrence persists as `A7 + T56`; what was one axiom spanning two forces is now one axiom + one theorem each powering its own force. Without A7 (β) the system develops edge nobody funds; without T56 (α) growth is additive, not exponential.
- **A8 is the membrane** between internal forces (V/S/I) and external force (P). Without standardisation, credibility cannot cross the boundary to attract confidence. K = 0.
- **Trust equation decomposition into force-pairs:** Term 1: (dC/dt)·K = V+S (new edge × existing trust) = internal engine. Term 2: C·(dK/dt) = I+P (existing edge × new confidence) = compounding engine. See [[PROTOCOL]] §6.
- **Axiom distribution reflects operational maturity:** V and S have 4 axioms each (built — the cage funded these). I and P have 2 each (growth edge — what the cage blocked). The CIF transfer releases I and P.
- **One failure mode per operational force:** F1 = I fails, F2 = P fails, F4 = S fails, F5 = V fails. F3 = all fail simultaneously (death spiral).

---

## III. THEOREMS — Derived Claims (68 active: 59 positive + 9 failure)

### Core Flywheel (T1-T4)

| # | Theorem | Derived from | Status |
|---|---------|-------------|--------|
| **T1** | The flywheel self-accelerates | A1+A2+A4+A5+A7 | ✅ |
| **T2** | Internal matching rate rises with N | A4+T1 | ✅ |
| **T3** | The community becomes the market | T2+A5 | ✅ |
| **~~T4~~** | ~~INDX is the lie detector~~ **ABSORBED into T11 (6 Apr).** T4 is T11 applied to INDX specifically. Same derivation (A2+A7+A13), same conclusion. G13 resolved. | ~~A2+A7+A13~~ | → T11 |

### Exponential Cluster (T5-T10)

| # | Theorem | Derived from | Status |
|---|---------|-------------|--------|
| **T5** | e^X is algebraically literal | A7+P5+A5 | ✅ (absorbs former A8) |
| **T6** | The dataset is the trust→edge vehicle — **dual function:** (1) the α-vehicle (trust→edge via 5 channels), (2) the risk engine's training corpus (better data → sharper risk adjustment → more precise D-Leverage → better DARWINs → A8 strengthened). The dataset serves BOTH the edge loop AND the confidence enabler. | A7+P5+A8 | ✅ |
| **T7** | e = platform effect, X = network effect | A7+T2+A4 | ✅ |
| **T8** | Three panels feed X — **presupposes A8:** all three panels (members, investors, overflow profits) can only feed X when DARWINs are risk-normalised and comparable. Members contribute flow to matchable instruments. Investors allocate to a valid comparison surface. Overflow profits prove edge against external benchmarks. All three require standardised DARWINs. | A7+A5+T2+A8 | ✅ |
| **T9** | Trust-flow is the reinvestment act | A10+A5 | ✅ |
| **T10** | The e inflection = dataset goes real-time | A7+P5+T3 | ✅ |

### Inversion Theorems (T11-T14)

| # | Theorem | Derived from | Status |
|---|---------|-------------|--------|
| **T11** | Transparency turns selfishness into social trust | A2+A7+A13 | ✅ |
| **T12** | Power inversion organizes individuals off the menu | A4+A9+A14 | ✅ |
| **T13** | Both inversions together create compounding trust | T11+T12 | ✅ |
| **T14** | Competition between market makers is a BUG in mutualized systems | A9+T12 | ✅ |

### S-Curve & Lifecycle (T15-T17)

| # | Theorem | Derived from | Status |
|---|---------|-------------|--------|
| **T15** | Front-loading is compensation for early conviction | A5+T1 | ✅ |
| **T16** | The S-curve is prescribed, not just described | A5+T15 | ✅ |
| **T17** | **"Wherever it reduces P0 the most"** = three-vector allocation. Target the P0 vector that is LARGEST and CLOSEST to the IMR inflection — the matching-density amplification regime where α-loop reinvestment begins to dominate external flow. "Mints the most trust" = "reduces P0 the most" = "the vector closest to inflection." Each vector that inflects funds the next (→ T46 Waterfall). No formal density-threshold theorem is claimed; empirical anchoring is queued under T42 (see [[PHENOTYPE--t42-verification]]). | A5+P0 | ✅ |

### Extraction & Corruption (T18-T22)

| # | Theorem | Derived from | Status |
|---|---------|-------------|--------|
| **T18** | The 98% are the filtering mechanism | A4+T2 | ✅ |
| **T19** | Deadwood shareholders are stock-level extraction | A9+T15+A7 | ✅ |
| **T20** | Three extraction levels must all be closed | A9+T19+T12 | ✅ |
| **T21** | **The allocation decision is a governance surface** — at the corporate level: Holding's reinvestment cascade (①Rails/Method ②Exchange working capital ③Prop). At DWX:INDX = 1 (T36), this governance belongs to members. The allocation decision determines the S-curve trajectory (T16) and therefore the DWX:INDX convergence rate (T36). Propagated 6 Apr 2026 via T35-T40 chain. | T17+T20 | ✅ |
| **T22** | Mutualized monopoly is structurally aligned with endgame | A9+T3 | ✅ |

### Structural (T23-T26)

| # | Theorem | Derived from | Status |
|---|---------|-------------|--------|
| **T23** | The knowledge system IS the system | P6+A2 | ✅ |
| **T24** | Rails (1:N) / Exchange (M:N) / Method | A4+T7 | ✅ |
| **T25** | Contribution score = three-vector weighting | T19+A5+T20 | ✅ |
| **T26** | Collective edge capacity exceeds sum of individual | A4+T2+T18 | ✅ |

### New (3 Apr 2026)

| # | Theorem | Derived from | Status |
|---|---------|-------------|--------|
| **T27** | **Protocol Network Corollary** — the exchange is a protocol connecting autonomous community nodes on shared rails. Each node = sub-prop. Protocol value = Π(matching dims) × N(nodes). Internet topology, not franchise. Each level replicates the level above (Arb→Darwinex→communities→individuals). | T24+A4+T2+A13 | ✅ |
| **T28** | **Linear-Network Decomposition** — every participant creates linear value (keeps) and network value (venue captures, reinvests). Same formula for ALL participant types. | A4+A5+A13+T7 | ✅ |

### New (5 Apr 2026)

| # | Theorem | Derived from | Status |
|---|---------|-------------|--------|
| **T29** | **Moat Dimensionality** — moat = Π(3 participant types: M signal × K infra × N capital) × Π(5 matching dims). Any zero in any factor = zero moat replication. 3×5=15 matching vectors; competitor must fill all simultaneously. | A4+T2+T7+T28 | ✅ |
| **T30** | **Open-Source Protection** — open-sourcing methods accelerates dataset moat (P5) without weakening it. Methods are platform-specific; dataset is the trust→edge vehicle (T6), not the methods. Discoverable via inversion method (state "methods proprietary" → invert → test: open strengthens). | T6+A13+P5 | ✅ |
| **T31** | **Certification Externality** — "DARWIN Exchange Member" badge creates positive externality: each new badge increases value of every existing badge. Badge = A13 applied at node level. | A2+A7+A13+T27 | ✅ |
| **T32** | **Regulatory Architecture (normative design theorem)** — the architecture SHOULD concentrate regulatory obligations where capital flows (flow matching) and structurally separate all other matching dimensions as unregulated periphery. This minimizes compliance surface, contains contagion risk (regulated core failure doesn't take down periphery), and maximizes growth velocity on the periphery (no licensing barrier to knowledge/community/tool matching). Capital efficiency: regulated capital reserved for flow; unregulated dimensions grow on operational surplus alone. If a peripheral activity reaches a scale or risk profile that requires regulation, it enters the core — structural separation makes this clean. **Not empirical (G14 resolved 12 Apr):** this is a design choice grounded in P6 (merit ordering = minimize barriers) + A4 (dimensions are independently regulable) + A9 (venue integrity in the core). | P4+A9+A2+P6 | ✅ |
| **T33** | **Nested Meritocracy** — token hierarchy: DARWIN→Community→INDX→DWX. Selection at every level. Communities that outperform INDX get absorbed into it (dynamic selection). Regulatory scope escalates with aggregation level. | A2+A7+T11+T27+P6 | ✅ |
| **T34** | **Trust Ownership** — trust minted by the protocol is protocol property (Signal Provider Agreement §12). Edge (P1) is portable; trust (P3) is not. Member who leaves forfeits attested trust (it remains in P5). Asymmetric switching cost: leaving costs accumulated trust, joining costs nothing. The protocol is a trust gravity well. | P3+P5+A9+A13 | ✅ |

### Protocol Transition & Endgame (6 Apr 2026)

| # | Theorem | Derived from | Status |
|---|---------|-------------|--------|
| **T35** | **Stock/Flow Duality** — protocol value exists simultaneously as participation flow (INDX = e×X, earned per period) and ownership stock (DWX = e^X, NPV of all future flows). The ratio DWX/INDX = growth premium on protocol ownership. Flow is linear in trust stock. Stock reflects compounding of all flows. The primitive types (P1=rate, P2=stock, P3=flow) manifest at the token level as: INDX captures the rate applied to stock (e×X), DWX captures the compounding stock itself (e^X). **Recursive principle (12 Apr):** This duality recurs at every level — tokens (INDX/DWX), economy (members transacting / shareholders reinvesting), output (overflow / internal matching), split (75% / 25%), BU (DARWIN / eXchange), scoring (T25 contribution types / A5 reinvestment vectors), governance (member deal / T21 surface), progression (Player→Pro / Partner), regulation (PM / securities). T36 convergence = all these layers merge. | P1+P2+P3+T5+T9 | ✅ |
| **T36** | **Ownership S-Curve (DWX:INDX Convergence)** — the DWX:INDX exchange rate traces a declining curve from ∞ (founding, no flow yet) to 1 (maturity, protocol fully mutualized). Shape = inverse of the adoption S-curve (T16). At convergence: ownership premium = 0, earning INDX IS owning DWX, protocol = members. "Returns markets to members" = DWX:INDX → 1. The S-curve is not just prescribed (T16) — it is PRICED into the exchange rate between the two tokens. | T35+T16+T3 | ✅ |
| **T37** | **Self-Reinforcing Ownership Transfer** — INDX→DWX conversion (members buying ownership with earned participation) is positive-sum: increased alignment → increased edge contribution → increased INDX generation → increased DWX value. Each conversion strengthens the protocol. Ownership transfer accelerates protocol value; it does not dilute it. The flywheel (T1) applies to the ownership layer, not just the trust layer. | T35+A5+A7+T1 | ✅ |
| **T38** | **Progressive Shedding** — transition from company (e×X corporate structure) to protocol (e^X corporate structure) requires progressive externalization of balance-sheet-heavy activities to natural partner-buyers for whom each activity is core business. The company retains permanently: method (IP), PM permission (brain revenue), sovereign capital (prop), rail economics (protocol revenue). Each partner that joins adds flow to the matching engine, increasing IMR for all. The shedding IS the protocol transition — not a cost-cutting exercise but a phase change. | T27+T24+T28+A5 | ✅ |
| **T39** | **Endgame Entity** (CAPSTONE) — the steady-state entity is a member-owned prop fund that owns a trust-minting protocol. At DWX:INDX = 1: no client money (externalized), no balance-sheet-heavy operations (partnered out), sovereign capital only (prop book), revenue = rail rental + PM fees + netting surplus. Isomorphic to T3 ("community becomes the market") applied to corporate structure. Isomorphic to P6 ("merit") applied to ownership. The founding team's exit and the mission's completion are the SAME event: DWX:INDX → 1. | T36+T38+T34+P6+T3 | ✅ |
| **T40** | **Shareholder Exit Mechanism** — shareholders' optimal exit is during the e^X phase when DWX:INDX premium is declining but substantial. Members buy DWX with earned INDX. No external exit event (IPO, PE, trade sale) required — the INDX:DWX market IS the exit. Front-loading (T15) is repaid via DWX appreciation during the e^X phase. Deadwood shareholders (T19) are resolved by convergence: at DWX:INDX = 1, non-contributing holders have no premium to extract. | T36+T15+T37+T19 | ✅ |
| **T41** | **Challenge Marketplace** — Boosters reframed as member-settled P2P challenges. Protocol provides venue + rules (Quote as judge) + escrow. Community pool market-makes for members' challenges. Quote settles all disputes (A2). All value returns to members minus mediation fee. Revenue = rail (not product). Zero balance sheet. Self-reinforcing: challenges fund attestation (Method), attestation enables challenges. Collectively: the community challenges the outside market — INDX beating benchmarks IS the proof. Closes product-level extraction (T20 fully resolved at all three levels). DarwinIA becomes one template in a general challenge mechanism. INDX-denominated throughout (utility, not security). | A2+A4+A9+T34+P6 | ✅ |

### Certification & Attribution (7 Apr 2026)

| # | Theorem | Derived from | Status |
|---|---------|-------------|--------|
| **T42** | **External Validation** — internal certification (Quote) becomes credible only through external market validation. Overflow that beats the external market IS the certification event. Internal matching rescues surplus (economic). External overflow mints trust (certification). Without external validation, internal Quotes are self-referential. With it, Quotes are PROVEN edge. INDX beating benchmarks is not just performance — it is the protocol's credibility proof. Members contribute edge. Market contributes trust. Protocol re-distributes. **Bilateral extension (v12):** T42's oracle is **bilateral**. External market certifies BOTH minting (positive) AND destruction (negative) of trust-stock. Per-cycle per-provider ledger entries: +ΔINDX on positive certification (beats benchmark); −ΔINDX on negative certification (underperforms benchmark). INDX stock is double-entry. T42 as "load-bearing empirical anchor" covers both directions — the extraction-rate measurement is two-sided. A persistently-negative T42 doesn't just show the pump stopped pumping; it shows the meritocracy is destroying prior trust stock. See [[DARWIN_ECONOMY_V01]] §10.2 (INDX destruction paths). | A2+A4+A7+A13 | ✅ |
| **T43** | **Two-Way Certification** — the protocol certifies in both directions simultaneously. To capital: "this edge is proven" (Quote as authorization signal — replaces human due diligence). To edge: "this protocol enforces fair measurement and reward" (INDX funnel as smart contract — cradle-to-grave attribution). Both certifications use the same mechanism (independent measurement, public attestation, external validation). Two-way certification is a necessary condition for the flywheel: without edge→capital cert, no allocation enters; without protocol→edge cert, no edge enters. The INDX funnel documents every interaction since prospect first heard about the community — making it possible to attribute contribution from source. | A2+A14+A3+T34 | ✅ |
| **T44** | **Value Chain Certification** — the protocol certifies contribution at every step of the value chain: sourcing (who brought this member?), developing (how did their edge improve?), processing (how did their flow contribute to matching?), compounding (how did trust compound from their contribution?). INDX is not a reward — it is ATTRIBUTED CERTIFICATION of contribution. Each unit of INDX is traceable to specific contributions across the full lifecycle. This makes INDX functionally a utility token (certifies what you DID, not what you HOLD) and structurally the attribution mechanism for the entire economy. The five matching dimensions (A4) × the value chain steps create a certification surface: at every intersection, the protocol measures, attests, and attributes. | A2+A4+P5+P6+T43 | ✅ |
| **T45** | **The Bidirectional Conduit** — the INDX funnel is not unidirectional (prospect → owner). It is a bidirectional matching surface: personal merit flows in, social reward flows back. At every step of the value chain, A4 operates: merit matched with reward. The funnel IS the conduit between Main Street savings and Main Street investment. e = the rate of justice. e > 0 = justice compounding. e^X = justice compounded by society. "Returning markets to the people" = T3 + T45 at civilizational scale. **v8 information interpretation:** T45 IS the information circulation (T50 applied at macro scale). Information flows UP (individual creates → community aggregates → society liberates). Value flows DOWN (societal efficiency → community moat → individual returns). The funnel is the conduit not just of merit and reward but of information and sovereignty. | A4+A7+T2+T3+P6+T44 | ✅ |
| **T47** | **Network Credibility Theorem (G16 Resolution — Aggregate α Derivation; canonical source for T56)** — aggregate α (trust → credibility) is derivable, not empirical. TWO structural channels: (1) **Network α (boundary):** trust attracts confidence (A7, β) → new members bring flow (A4) → flow enriches dataset (P5) → richer dataset improves selection (T18) → aggregate credibility improves. (2) **Marketplace α (internal):** trust makes within-marketplace transactions individually rational (INDX accrual, credibility building) while outside transactions are costly (no INDX, signals dishonesty — A13+T11). This channels ALL trust-facilitated activity through the measurement system → measurement density increases → more attributed data (A2) → better selection (T18) → aggregate credibility improves. Individual α (does a trader actually get better from using the tools?) remains empirical but is NOT required for aggregate e^X. INDX improves because SELECTION improves, even if no individual improves. G16 resolved for the aggregate. T56 (v10) packages this as the canonical α-theorem. | A7+A4+P5+T18+A13+T11+T34+A2 | ✅ |
| **T46** | **The Waterfall (Asset Class Cascade)** — the protocol's growth path is recursive: (1) achieve critical IMR in one asset class, (2) statistically significant edge demonstrated → extraction eliminated for that class, (3) trust-flow surplus from that class REDEPLOYED to attack the next class (A5 applied at asset level: Compound current, Source new, Develop new rails). Each class that falls generates the surplus to attack the next. Cross-asset netting (T2 extended) means adding a class INCREASES IMR for ALL existing classes — multiplicative, not additive. The waterfall IS T16 (the prescribed S-curve) applied at the portfolio-of-classes scale. T21 (the governance surface) determines which class to attack next. At each step, the Wall breaks. **v8 information interpretation:** information is non-rivalrous ACROSS asset classes, not just across participants (T51 extended). FX data enriches index matching; index data enriches commodity matching. Cross-asset netting = cross-domain information aggregation. The waterfall is the protocol cascading across information domains — wherever information asymmetry creates spread, the protocol applies. | T2+T3+T16+T21+A5+T45 | ✅ |

### Organizational Extraction (12 Apr 2026)

| # | Theorem | Derived from | Status |
|---|---------|-------------|--------|
| **T48** | **Organizational Extraction Test** — any organizational layer (BU, role, partner, process, feature) that net-consumes trust stock — consuming surplus without minting or protecting trust at any level — is extraction. The protocol identifies and progressively removes such layers. **General test:** if we remove this layer, does trust minting go up, down, or stay the same? If up or same → extraction. If down → productive. **Nuance:** layers that PROTECT trust (compliance, regulatory legitimacy, risk management) are not extraction even though they don't directly mint trust — they prevent F4 (venue failure). The test is NET contribution to the trust stock, not direct minting alone. **Applications:** T38 (progressive shedding) is T48 applied to corporate structure over time. Hiring decisions, partnership evaluation, product features, process design — all testable against T48. "Does this layer mint trust, protect trust, or extract?" | A5+T20+P6 | ✅ |

### Information Architecture (12 Apr 2026 — v8 regrounding)

| # | Theorem | Derived from | Status |
|---|---------|-------------|--------|
| **T49** | **Star Factory** — the exchange amplifies individual success into collective acquisition. Member brokers develop talent (human capital); the exchange certifies and publishes their success (A13: results public, A2: merit certified); public success stories lower the broker's CAC and attract more talent. **Stronger than talent markets:** T34 (trust ownership) means reputation is protocol-owned — stars can leave, but their certified track record stays. In sports, players take their reputation when they transfer clubs. In the DARWIN exchange, the Quote stays. The star factory is more powerful than any talent market because the value is non-portable. **The exchange IS the lens (LUPA):** broker provides fuel (talent), exchange focuses attention (certification + leaderboard + Darwinia), star is the ignition point, community grows from the heat. | A2+A13+T31+T34+P1 | ✅ |
| **T50** | **Information Lifecycle** — information passes through three stages: (1) CREATE at the individual level (P1: certify edge, develop credibility = human capital production), (2) PROTECT at the community level (P4: mutualized matching hides intent, aggregates into collective intelligence = social capital formation), (3) LIBERATE at the societal level (P5: open source dataset, cascade protocol = financial capital matched efficiently). The lifecycle maps to PLAY→EARN→OWN, to the three spread mechanics (develop→rescue→extract), and to the three circles (e→★→X). The causal order is necessary: uncertified information can't be protected; unprotected information can't be liberated. Each stage resolves one dimension of P0 (credibility→intent→data asymmetry). | P0+P1+P4+P5+T45 | ✅ |
| **T51** | **Non-Rivalry Duality** — information is non-rivalrous INSIDE the community (my edge doesn't diminish yours; N members → O(N²) matching pairs; each member's information is purely additive) but rivalrous AGAINST outside (aggregate edge diminishes external MMs' advantage; more members → more adverse selection for external flow; each member's contribution to the aggregate hurts outsiders). The combination produces e^X: each new member ADDS to the inside (non-rivalrous, super-linear) while EXTRACTING from outside (rivalrous, adverse selection). This is the physical explanation for T5: e^X arises because information has different rivalry properties inside vs outside the community. A9 maintains the boundary: prevents insiders from exploiting each other (which would make information rivalrous inside → linear growth). | P0+A4+A9+T5+T2 | ✅ |
| **T52** | **Trust as Residual** — trust (P3) is not produced; it is REVEALED by removing information asymmetry. T = T_max − A, where A decomposes into A_c (credibility) + A_i (intent) + A_d (data). dT/dt = −dA/dt. Each primitive that resolves an asymmetry dimension (P1→A_c, P4→A_i, P5→A_d) drives trust growth by removal, not construction. This inverts conventional trust-building: instead of adding reputation/guarantees/relationships, the protocol removes the barriers that prevent trust from being the natural equilibrium. When all three asymmetries are fully resolved (P0→0), trust is maximal — not because trust was built to maximum, but because all obstacles were removed. | P0+P1+P4+P5+P3 | ✅ |

### Nobel Cross-Check (v8b — Akerlof/Spence/Holmström/Ostrom)

| # | Theorem | Derived from | Status |
|---|---------|-------------|--------|
| **T53** | **Market Existence (Akerlof-Spence)** — Without P1, the market for edge allocation fails to exist. Akerlof unraveling: investors cannot observe quality → price based on expected average → skilled traders withdraw (average price undervalues them) → average quality falls → price falls further → only tourists remain → market collapses. P1 (certification via DARWIN Quote) prevents unraveling by converting quality from a private attribute to a public signal. The DARWIN Quote satisfies Spence's single-crossing condition: the cost of producing the signal (time + fees + drawdown risk + publication exposure) is strictly decreasing in trader quality across all four dimensions. This guarantees a separating equilibrium: skilled traders self-select IN (signal cost < capital allocation received), tourists self-select OUT (signal cost > capital allocation received). **Stronger than Akerlof's four institutions:** (1) Guarantees → CCP (A9) is structural, not contractual. (2) Brand names → the Quote is verifiable measurement, not reputation proxy. (3) Licensing → continuous and performance-based, not binary and input-based. (4) Chains → the protocol is the chain. **A3 (uniform terms) IS Rothschild-Stiglitz screening** — the same deal for everyone is not naivete, it is screening mechanism design. Uniform terms create differential incentives that cause self-selection without the platform needing to observe quality ex ante. **Board sentence:** "Without the DARWIN Quote, we are an Akerlof lemons market. The certification mechanism does not just improve efficiency — it creates the market. The alternative is not a worse market; it is no market." | P1+A2+A3+A13+P0 | ✅ |
| **T54** | **Two-Step Resolution (Holmström→Akerlof)** — The DARWIN system resolves both canonical agency problems in sequence. **Step 1 (Holmström → moral hazard eliminated):** A8 (risk engine) + A9 (CCP as sole counterparty) jointly make trader actions observable — every position, leverage change, risk exposure passes through the matching engine. This converts a moral hazard problem (agents can cheat) into an adverse selection problem (agents can only be good or bad, but cannot hide what they do). The system approximates Holmström's first-best allocation. Residual moral hazard is limited to unobservable strategy changes (style drift), which the continuous risk-normalization process monitors. **Step 2 (Akerlof → adverse selection resolved):** P1 (DARWIN Quote) certifies the now-observable quality, resolving the adverse selection that Step 1 produced. T53 (market existence) ensures the market is viable. **Career concerns amplifier (Holmström 1982):** the published track record creates implicit incentives beyond the explicit fee structure — traders know the market continuously updates its assessment of their ability from their published Quote. This operates independently of and in addition to the 75/25 split. **Informativeness principle (A8 enrichment):** A8 satisfies Holmström's informativeness principle — the risk engine includes in the DARWIN Quote every signal that is statistically informative about trader quality. The multi-dimensional scoring system (D-Score, R-Score, etc.) is theoretically optimal: the Quote alone is NOT a sufficient statistic (two traders with identical Quotes may have different drawdown profiles), so supplementary metrics add value. **Board sentence:** "The matching engine does not just route orders. It makes actions observable. This converts cheating into bad performance, and bad performance is something we can measure and price." | A8+A9+P1+A13+T53 | ✅ |
| **T55** | **Provision Commons (Ostrom)** — The DARWIN dataset (P5) is a PROVISION commons, not an appropriation commons. Natural resource commons are rivalrous and depletable — the governance challenge is restricting extraction. Information commons are non-rivalrous (T51) — the governance challenge is sustaining CONTRIBUTIONS (trader participation, data quality). The DARWIN system scores **6/8** on Ostrom's design principles: (1) ✅ Clearly defined boundaries — INDX membership earned at first mint. (2) ✅ Congruence — 75/25 split + INDX attribution align contribution with reward. (3) ⚠️ Collective choice — rule-making currently centralized. Governance evolution path toward protocol governance. (4) ✅✅ Monitoring — risk engine (A8) provides automated, continuous, total monitoring that EXCEEDS Ostrom's requirement. (5) ⚠️ Graduated sanctions — market-mediated (poor performance → less allocation) but not formally graduated. (6) ⚠️ Conflict resolution — CCP eliminates many disputes by design, but residual resolution is centralized. (7) ✅ Rights to organize — members choose strategies freely, no interference. (8) ✅ Nested enterprises — individual/tribe/INDX/DWX layers. **Commons sustainability condition:** the commons is sustainable iff the return to contribution (capital allocation + INDX attribution) exceeds the cost of contribution (fee + publication exposure) for a critical mass of skilled traders. This is the Ostrom sustainability condition for an information commons. The reinvestment obligation, INDX attribution, and 75/25 split function as Ostrom-compliant provision incentives. **Governance evolution items:** Principle 3 (collective choice) and Principle 5/6 (graduated sanctions, conflict resolution) are the path from company to protocol. | P5+A9+A4+P6+T51 | ✅ |

### Axiom Demotion & Interface (19 Apr 2026)

| # | Theorem | Derived from | Status |
|---|---------|-------------|--------|
| **T56** | **Trust-to-Edge Aggregation (ex-A7α)** — aggregate α-loop (trust → edge via dataset) is derivable, not axiomatic. Specialisation of T47 to the α channel: new members bring flow (A4) → flow enriches dataset (P5) → richer dataset improves selection (T18) → aggregate credibility improves. Individual α remains empirical; aggregate α is proven. Absorbs former A7α. T56 powers Inheritance (I) in the force-axiom mapping — the α-bridge that lets V/S feed I. Without T56 (α = 0 at aggregate), e^X collapses to e×X (linear); see F1. | A7+A4+P5+T18+A13+T11+T34+A2 | ✅ (absorbs A7α) |
| **T57** | **Open Trust ≡ V/S/I/P Operational Interface** — the four Open Trust disclosure axes (Data, Noise, Timing, Capital) stand in bijective correspondence with the four operational evolutionary forces (V, S, I, P). Open Trust is **not** a multiplier on the trust equation — it is the protocol's user-facing interface to the V→S→I→P engine. Any disclosure choice by a member selects a fuel mix across the four forces; any aggregate force imbalance is diagnosable as an imbalance in the disclosure gradient. **Bijection:** Data ↔ V (disclosed signals = additions to the variation pool, via A13+P5); Noise ↔ S (ε clarity = selection sharpness, via A8+T18); Timing ↔ I (real-time disclosure = α compounding at tick speed, via A5+T56); Capital ↔ P (skin-in-the-game = external proof propagating β, via A7+A10). Collapses two objects into one: engine and interface are the same system viewed at different layers. See [[PROTOCOL]] §10. | A4+A7+A13+P5+T50+T51+T56 | ✅ |

### Strategy-Level Duality & Convergence (19 Apr 2026 — v11 Phase 2)

| # | Theorem | Derived from | Status |
|---|---------|-------------|--------|
| **T58** | **Open-Trust ↔ INDX Duality** — the four Open Trust disclosure axes (Data, Noise, Timing, Capital) in bijection with V/S/I/P (T57) extend isomorphically to the four INDX scoring dimensions (Originality, Performance, Persistence, Capacity). Formally: there exists a natural transformation η: Disclosure ⇒ INDX such that for each force F ∈ {V,S,I,P}, η_F ∘ axis_F = dim_F. **Pairings:** Data ↔ V ↔ Originality (net new entropy into P5); Noise ↔ S ↔ Performance (selected edge after A8 filtering); Timing ↔ I ↔ Persistence (α-compounding across cycles via T56); Capital ↔ P ↔ Capacity (external capital absorbed via A7+A10). Open Trust and INDX are the same V/S/I/P engine read input-side (disclosure) and output-side (scoring). This closes the Bellman control loop: member disclosure → INDX score → capital allocation → member re-discloses. **Two-contract implication:** Signal contract value = f(O, P, Per); Allocation contract capacity = Cap. See [[PROTOCOL]] §10 and [[INDX]]. | T57+A5+A7+T56+A10 | ✅ |
| **T59** | **Continuous Irreplaceability** — the 15/85/75 surplus quantum in [[REWARD]] is a continuous function of originality ψ(O), not a flat tier. Specifically, `share_provider = s_min + (s_max − s_min) · g(O)` with `g: [0,1] → [0,1]` monotone, `g(0) = 0`, `g(O_ref) = 0.75`. Flat tiers violate P6 when originality is continuous (two providers with distinct O would receive identical share — merit not determining reward). The 75% historical anchor is the reference-originality allocation point, not a plateau. A9 (no private extraction) + T56 (aggregate α) fix the endpoints; P6 (merit) forces monotone interior. | A9+T56+P6 | ✅ |
| **T60** | **Control-Loop Convergence (Bellman Attractor)** — under rationality assumptions (members maximise expected INDX-weighted allocation; Risk Engine scoring is monotone in truthful disclosure), the Bellman operator `B(d) = arg max_{d'} E[INDX(d') | d]` is a contraction on the disclosure simplex, and maximum disclosure is its unique fixed point. **Proof sketch:** monotone Risk Engine + power-weighted Φ makes B a contraction; Banach fixed-point gives existence + uniqueness. **Cost corner:** when disclosure is costly, the attractor is maximum disclosure *subject to* the privacy-as-redistribution constraint ([[PROTOCOL]] §10) — non-disclosed information is priced, not hidden. This grounds PROTOCOL §10's "evolves toward openness by economics" claim as a theorem, not rhetoric. **Diagnostic:** observed disclosure drift away from the simplex edge signals either Risk Engine non-monotonicity (A8 miscalibration) or disclosure cost exceeding INDX premium — both falsifiable. | T58+T59+P6 | ✅ |

### Monetary Architecture (20 Apr 2026 — v12)

| # | Theorem | Derived from | Status |
|---|---------|-------------|--------|
| **T61** | **DWX Decay — Ownership is Maintained, Not Granted** — DWX (shareholder equity, e^X) decays each cycle without sustained contribution: `DWX(t+1) = DWX(t) × (1 − decay) + new_contributions(t)`. Stopping contribution → DWX → 0. Ongoing INDX contribution offsets decay. Self-similar with individual Quote decay: Quote decays without trading, DWX decays without contributing. **Merit is maintained, not granted** — the structural complement to A9 (no private extraction) at the stock level. Member→Shareholder graduation requires N cycles of sustained INDX contribution above threshold (automatic, not ceremonial). Blocks the landed-gentry failure mode: without T61, early contributors accumulate DWX, stop contributing, and extract take-rate indefinitely — Purpose Lock (P6) formally intact but practically inverted. With T61, sustained merit is the continuous entry condition for ownership. Canonical: [[DARWIN_ECONOMY_V01]] §10, [[satellites/SETTLEMENT-ARCHITECTURE]] §6. | A7+A9+P6+T16+self-similarity(Quote) | ✅ |
| **T64** | **Patience Lever — IMR is increasing in cycle length** — internal match rate grows monotonically with per-cycle batch window up to the point where delay cost (hedge drift, signal staleness) exceeds marginal matching surplus. Cycle-based processing is the IMR lever: longer batches → more opposing conviction accumulates → more netting opportunity → higher IMR → more spread captured internally → less leaked to Stroke 2. Inverts the classical speed-as-edge thesis (HFT microsecond race) — for a meritocratic aggregator, **patience is the competitive advantage**, not speed. Optimal cycle length = credibility-optimal IMR duration (empirically 70-85% IMR territory per [[satellites/SETTLEMENT-ARCHITECTURE]] §8). Derivable from A15 (intent conservation → aggregation statistics) + T5 (e^X) + pump mechanics. | A15+T5+T42 | ✅ |

### Failure Theorems (v7, 11 Apr 2026; v10 extension 19 Apr 2026)

The framework diagnoses its own breakdown via two failure classes. **Class A — internal force collapse (F1-F5, v7):** one failure mode per operational force. F1 = I fails (α-Collapse), F2 = P fails (β-Collapse), F3 = all fail (Death Spiral), F4 = S fails (★-Collapse), F5 = V fails (Stagnation). On the three-circle visual: F1-F2 = bridges break (circles stop converging), F3 = e circle contracts (anti-concentricity), F4 = ★ center fails (venue degrades to intermediary), F5 = e circle ossifies (no new variation enters). **Class B — adversarial / external (F6-F9, v10):** F6 = dataset poisoning, F7 = reflexivity (Soros), F8 = regulatory weaponisation, F9 = strategy convergence / monoculture. Class A is self-inflicted; Class B is externally induced or structurally emergent despite honest operation. **Each failure mode is an information pathology** — a stage of the information lifecycle (Generate→Create→Protect→Liberate) that breaks.

| # | Theorem | Derived from | Status |
|---|---------|-------------|--------|
| **F1** | **α-Collapse (Dataset Failure) — Information pathology: STALENESS** — If α = 0 at aggregate (dataset fails to transmit trust → edge: T56 broken), then e is constant (exogenous, not endogenous). e^X collapses to e×X (linear). The system still functions — credibility still certified, confidence still allocated — but growth is additive, not exponential. The platform effect (e) decouples from the network effect (X). **Information stage that breaks: CREATION** — no new information produced from accumulated trust. dA_c/dt = 0 (credibility asymmetry stops shrinking). Diagnosis: e(t) uncorrelated with X(t). Intervention: repair the dataset pipeline (P5), improve selection mechanism (T18). | ¬T56+T5 | ✅ |
| **F2** | **β-Collapse (Confidence Failure) — Information pathology: DISCONNECT** — If β = 0 (track record fails to attract confidence: A7 broken), then X stagnates. Credibility accumulates but confidence doesn't follow — the system develops edge nobody funds. Growth = organic only (e×X at fixed X). **Information stage that breaks: TRANSLATION** — A8 fails to translate quality information into allocation information. K = 0 despite C > 0. Diagnosis: rising Quote, flat AuM. Intervention: external validation (T42), institutional outreach (V4 Capital vector). | ¬A7+T5 | ✅ |
| **F3** | **Death Spiral (Negative Edge) — Information pathology: CORRUPTION** — If e < 0 (collective edge decaying: more members → worse signal), then trust stock erodes. ΔT < 0. Confidence withdraws (β reverses). Dataset degrades (α reverses). BOTH loops reverse simultaneously — the same double recurrence that makes e^X exponential makes e^{-X} catastrophic. **Information stage that breaks: QUALITY** — the system's information is wrong (negative signal quality). dA_c/dt > 0 (credibility asymmetry INCREASES). Diagnosis: e_system declining, IMR falling, net outflows. Intervention: tighten selection gate (T18), shed low-e asset classes (T46 in reverse), reconcentrate on highest-edge verticals. | ¬(e>0)+A7+A5 | ✅ |
| **F4** | **★-Collapse (Venue Failure) — Information pathology: EXPLOITATION** — If the venue extracts (¬A9), stops matching (¬A4), or loses structural protection (¬A14), then surplus leaks to intermediaries instead of being recycled. Both loops weaken because A5 (surplus reinvested) has no surplus to reinvest. The system degrades to a traditional broker — P0 stops falling because the ★ that was rescuing P0 is now ADDING to it. **Information stage that breaks: PROTECTION** — someone recreates intent asymmetry inside (A9 breached). Information becomes rivalrous inside → T51 (non-rivalry duality) collapses → linear growth. **The pre-transition state IS this failure mode.** The current broker is what F4 looks like. Diagnosis: matching surplus going to company P&L (not recycled), IMR flat despite volume growth, member share declining. Intervention: enforce A9 constitutionally (VBM framework), restore A14 (power inversion via member governance). | ¬A9+¬A4+¬A14 | ✅ |
| **F5** | **V-Collapse (Stagnation) — Information pathology: SCLEROSIS** — If variation dries up (system too selective, barriers too high, A3 over-optimised: self-selection excludes ALL but incumbents), then e stagnates. No new strategies enter. The dataset ossifies. Selection operates on a shrinking pool. Inheritance compounds what already exists but nothing novel enters. The protocol's own incumbents become the access barrier — A1 (markets decided by access, not merit) reasserts itself INSIDE the protocol. P6 (merit) is formally intact but practically meaningless because no new merit can prove itself. **Information stage that breaks: GENERATION** — no new information enters the system. dV/dt = 0 (new credibility stops arriving). **Diagnosis:** declining new provider count, rising average age of top Quotes, DarwinIA entries falling, dataset freshness declining, experimentation rate dropping. **Intervention:** lower barriers (A3 parameter adjustment), expand to new asset classes (T46), activate sourcing rails, Open Trust Phase 0 (T30 opens the method, inviting new variation). | ¬V+T18+A3 | ✅ |
| **F6** | **Dataset Poisoning (Adversarial Variation) — Information pathology: CONTAMINATION** — A coordinated coalition of providers submits crafted signals to bias aggregate statistics. The risk engine learns a false prior; A2 certifies contaminated quality; T18 selects on biased signal; honest providers face falling allocation despite true edge and withdraw (A3 reversed). **Force blocked:** V (polluted) cascading into S (misallocated). **Mitigation — P5-Robustness Condition:** signal extraction must remain valid against ≤N% adversarial providers (Byzantine-robust aggregation threshold). Robust M-estimators, provider diversity caps, signed-distance checks. **Diagnosis:** signal-quality divergence between cohort subsets; anomalous correlation structures; robustness-check failures. **Intervention:** tighten A8 aggregation to breakdown-robust estimators; raise provider diversity floor. | ¬P5(robustness)+A2+A8 | ✅ |
| **F7** | **Reflexivity (Soros) — Information pathology: SELF-EXTINCTION** — As INDX credibility grows, capital follows, aggregate positions shift market microstructure, original signal degrades, credibility revises downward. The β-loop poisons its own fuel. Let v_c = capital-following velocity; signal half-life τ is bounded above by k/v_c. If v_c grows super-linearly in INDX (uncapped propagation), τ→0; A7 produces K that extinguishes the C it allocated to. **Force blocked:** P (propagation self-defeats); secondarily I (horizon shortens). **Mitigation:** capacity capping per strategy at A8 layer; explicit half-life disclosure in the Quote; scale-adjusted scoring; T57 Capital-axis throttling when velocity exceeds threshold. **Diagnosis:** top-Quote alpha decay accelerating with AuM; mean-reversion on capital-crowded set; dC/dt→0 on winning strategies despite rising Quote. **Intervention:** enforce capacity caps; publish half-life; route incremental capital to un-crowded strategies. | ¬P5(stationarity)+A7+T42 | ✅ |
| **F8** | **Regulatory Weaponisation (External A14 Inversion) — Information pathology: EXCLUSION** — Incumbents lobby for compliance infrastructure sized to their cost base. Regulatory floor excludes everyone but Wall Street. A14 (power inversion) is re-inverted externally: the intent-protection the protocol built inside is nullified by intent-capture outside. A3 (uniform terms) becomes infeasible — no viable common cost. **Force blocked:** V (barrier re-erected against new providers) and C (fitness function captured). **Mitigation:** T32 peripheral-structural-separation architecture (compliance surface minimised, unregulated periphery protected); multi-jurisdictional optionality (EU/LATAM dual domicile); open-source method (T30) keeps replication cost low. **Diagnosis:** regulatory fixed costs rising super-linearly in incumbent scale; protocol unit-economics diverging at small N; provider onboarding cost crossing A3 floor. **Intervention:** structural separation; jurisdictional arbitrage; method disclosure accelerating replication. | ¬A14(ext)+¬A3+T32 | ✅ |
| **F9** | **Strategy Convergence / Monoculture — Information pathology: HOMOGENISATION** — Uniform scoring (D-Score, R-Score, 6.5% VaR normalisation) homogenises what looks like "good." Rational traders optimise toward the same objective, strategy correlation rises, effective variation collapses to a rank-1 factor, and T18 selects on a degenerate manifold. V contracts endogenously — back-door into F5 via the scoring layer, not the gate. The framework's unstated assumption that V is exogenous fails. **Force blocked:** V (collapsed by S); full-chain cascade into F3 if uncorrected. **Mitigation — scoring diversity mandate:** multi-objective scoring at A8 with orthogonal axes (drawdown profile, horizon, asset-class mix); diversity bonus in INDX attribution; periodic scoring rotation. **Diagnosis:** pairwise correlation ρ of certified DARWIN return streams rising to 1; effective dataset rank falling; tail-objective traders exiting. **Intervention:** Pareto-frontier scoring; anti-monoculture term in INDX attribution; scoring rotation. | ¬V(endog)+A8+T18 | ✅ |

### Named Principles (v12 — derivable corollaries, not theorem-numbered)

These principles are corollaries of existing axioms and theorems, named for reference and teaching but not numbered in the theorem count (discipline: theorems derive rigorously; axioms posit foundationally; principles name derivable patterns worth naming for clarity).

**Normalisation Principle.** The pump applies invertible transforms to signals; it never scores members. D-Leverage, risk normalisation, volatility adjustment — all are invertible (information-preserving), not lossy-scalar (information-destroying). Scoring discriminates the member; normalisation reshapes the signal. Derived: A9 (no private extraction) + P6 (fitness/merit). See [[DARWIN_ECONOMY_V01]] §10.1.

**Stock-Flow Conservation.** INDX flow integrates into X stock across cycles; cashout exits the integration; loss-certification reverses prior increments. The trust ledger is balanced triple-entry (mint / loss-destroy / cashout-destroy). Derived: A15 + T42 (bilateral) + definitional accounting. See [[DARWIN_ECONOMY_V01]] §10.0/§10.2.

**Capital-vs-Merit Separation.** Investors fund with capital → compensated at market + alpha (bounded, overflow compounding rate). Members fund with merit → compensated with DWX (platform equity, exponential) + INDX (community credits, flow). Compounding rate matches contribution type; no cross-claim. Derived: P6 + T5. See [[DARWIN_ECONOMY_V01]] §10.2.

**Take-rate Ceiling (Patagonia Constraint).** Shareholder compounding is bounded by aggregate net platform take-rate (spread rescue share + perf fee cut + interchange + service fees + retained earnings). Platform P&L above this ceiling is super-profit and must reinject into the community via the four DWX→INDX channels (Source / Develop / Process / Compound-retained). Derived: P6 (Purpose Lock) + A9 (no private extraction) + A13 (redistribution logic) + T61 (DWX Decay without contribution). Quantifies the Patagonia play: shareholders compound at their fair-compensation rate; the meritocracy retains all excess. See [[DARWIN_ECONOMY_V01]] §10.2.

---

## IV. PROOFS (21)

### Load-Bearing Empirical Anchor (T42)

Most theorems in this constitution derive from primitives, axioms, and each other. One theorem is different: **T42 (External Validation)** is the sole claim that ties the framework to reality outside itself. Without overflow returns beating the external benchmark, V/S/I/P + C is a self-referential ritual — internal certification grading its own students.

T42 is therefore the framework's **falsifiability condition** and its scientific status. Every structural claim downstream — `e^X` exponentiality (T5), aggregate α (T56), Open Trust's evolutionary attractor (T60), the entire routing-legitimacy argument of [[PROTOCOL]] §2 — ultimately hinges on T42 holding empirically. If T42 fails persistently, the framework degrades to a descriptive theory with no normative grip: we measured, we certified, we allocated, but the market disagrees.

This is not a weakness; it is the anchor. A self-contained theoretical structure that cannot be disconfirmed has no grip on reality. T42 gives the framework its grip.

**Operational consequence.** T42 cannot be left as a proof written once and filed. It must be continuously measured: rolling overflow-vs-external-benchmark, confidence bands, breach alerts. The engineering workstream is tracked separately as [[PHENOTYPE--t42-verification]] — tier-0 monitoring. If that dashboard ever turns red, the framework's epistemic status is at stake, not just a KPI.



### Proof 1: e^X is algebraically literal (T5) — DERIVATION FROM T56 + A7

```
GIVEN: T56, A7, P5, A5
1. By T56 (aggregate α): e = f(X). More trust → richer dataset (P5) → higher aggregate edge.
2. By A7 (β): ΔC = f(X). More trust → more proof → more confidence (capital rationally allocates).
3. Base (e) grows as function of exponent's driver. Exponent (X) grows with itself.
4. Both sides endogenous. Growth rate accelerates with stock.
5. ∴ e^X is structural, not metaphorical.  ∎

HONEST FRAMING (v10): v7 treated A7 as the single load-bearing axiom covering both
loops. v10 splits it: A7 (β) remains axiom — the irreducible behavioural claim that
proven, comparable, transparent edge attracts capital. T56 (α) is now a theorem, a
specialisation of T47 proving aggregate α from β + matching + dataset + selection.
The exponential structure follows iff BOTH hold: β as axiom (A7) and α as theorem
(T56). A skeptic who rejects A7 rejects β; a skeptic who challenges T47's G16
resolution challenges T56 and thus α. The two channels are now independently
falsifiable.
```

### Proof 2: Three extraction levels must all be closed (T20)

```
GIVEN: A9, T19, T12
1. A9 closes flow-level (CCP monopoly). Silent on stock level.
2. T19: zero-contribution shareholder extracts at stock level, violating P6 (merit).
3. Even stock-level closed, governance power can block reinvestment.
4. Each channel independent. Closing one doesn't close others.
5. ∴ Corruption-resistant only when all three constitutional.  ∎
```

### Proof 3: The S-curve is prescribed (T16)

```
GIVEN: A5 (which includes three-vector decomposition, formerly A11)
1. ΔC allocated across three vectors with phase-varying marginal rates.
2. Launch: S+D dominate (ΔN/N >> e). Growth: mix shifts, e inflection.
3. Maturity: gap ≈ 0, organic at rate e.
4. Shape determined by allocation decision.
5. ∴ The S-curve prescribes where to allocate.  ∎
```

### Proof 4: The community becomes the market (T3)

```
GIVEN: T2, A5
1. N grows → IMR rises → surplus grows → reinvested → more members → N grows.
2. As IMR → 100%, virtually all flow matches internally.
3. Community self-knowledge = market knowledge (T10).
4. ∴ Community IS the market. All that's left is merit (P6).  ∎
```

### Proof 5: The dataset is the trust→edge vehicle (T6)

```
GIVEN: A7, P5
1. A7 claims trust → edge but doesn't specify mechanism.
2. Five channels: inheritance, matching intelligence, risk engine, variometer, community.
3. Each converts accumulated trust (data) into improved edge.
4. Without P5, trust → confidence only. e is constant. e^X collapses to e×X.
5. ∴ Dataset IS the vehicle.  ∎
```

### Proof 6: Linear-Network Decomposition is universal (T28)

```
GIVEN: A4, A5, A13, T7
1. A4: friction eliminated across five dimensions. Each participant type operates in ≥1.
2. T7: every participant creates platform effect (individual) + network effect (collective).
3. A13: individual selfishness → social trust. Network benefit automatic.
4. Linear/network split applies regardless of dimension (manager, academy, signal
   processor, investor, tool builder — only matching dimension changes).
5. A5: venue reinvests network surplus → rails improve → participant's linear value↑.
6. Formula identical across rows.
7. ∴ T28: Universal linear-network decomposition for all participant types.  ∎
```

### Proof 7: Moat Dimensionality (T29)

```
GIVEN: A4, T2, T7, T28
1. A4: surplus arises from matching across five dimensions.
2. T2: each dimension's efficiency rises with N.
3. T7: e = platform effect (per-user), X = network (cross-user).
4. T28: each new participant creates network value in ALL dimensions simultaneously.
5. Three participant types (M signal × K infra × N capital), each contributing
   to all five dimensions. Total matching surface = 3 × 5 = 15 vectors.
6. Total moat strength M = Π(d_i(N)) for i across all populated vectors.
7. Competitor matching k < 15 vectors: missing vectors produce zero surplus.
   Product collapses: Π includes a zero → M_competitor = 0.
8. Even with k = 14: the missing vector bottlenecks the others
   (no matching density without dataset; no dataset without community).
9. Ratio M_darwinex / M_competitor → ∞ as N grows.
10. ∴ Partial replication diverges. The moat is multiplicative.  ∎
```

### Proof 8: Open-Source Protection (T30)

```
GIVEN: T6, A13, P5
1. T6: Dataset IS the trust→edge vehicle. Without P5, e is constant.
2. A13: transparency turns individual selfishness into social trust.
3. Open-sourcing methods = applying A13 to the method layer.
4. More open methods → more catalysts adopt them → more members
   develop on the dataset → richer P5 → higher e(X).
5. By A7 (loop 1): richer dataset → higher edge. Trust compounds.
6. The methods reference platform-specific constructs (DARWINs, Quotes,
   risk adjustment, community data). A fork of methods without P5 is
   a search algorithm without the index — structurally useless.
7. Inversion method applied: convention = "methods are proprietary" → invert →
   "methods are open." Test: does open strengthen or weaken?
   By steps 3-5: strengthens. By step 6: no weakening.
8. ∴ Open methods → stronger moat. Dataset, not method, is irreplicable.  ∎
```

### Proof 9: Stock/Flow Duality (T35)

```
GIVEN: P1, P2, P3, T5, T9
1. P1 types credibility/edge as Stock (rate: dC/dt). P2 types confidence as Flow→Stock (AuM). P3 types trust as Stock (C × K = INDX).
   These are independent primitive types — the system has all three.
2. T5: e^X is algebraically literal. Both base (e) and exponent (X) endogenous.
3. T9: Trust-flow is the reinvestment act: allocating trust stock at rate ≥ e.
4. Per-period trust-flow = e × X (rate × stock). This is what members earn:
   INDX = e×X. Linear in X. Participation. Flow.
5. Protocol value = NPV of all future trust-flows = Σ(e(t)×X(t))/(1+r)^t.
   By T5, e and X are endogenously growing (both loops of A7 active).
   NPV reflects compounding: the protocol value IS e^X — structural, not metaphor.
6. Define: INDX token represents current-period flow (e×X).
   Define: DWX token represents ownership of the NPV (e^X).
7. DWX/INDX = NPV / current flow = growth premium.
   This premium exists because future flows > current flow (protocol is growing).
8. ∴ Protocol value exists simultaneously as flow (INDX = e×X) and stock
   (DWX = e^X). The ratio DWX/INDX = growth premium on ownership.  ∎
```

### Proof 10: Ownership S-Curve (T36)

```
GIVEN: T35, T16, T3
1. T35: DWX/INDX = growth premium = f(growth rate of protocol).
   Premium = NPV / current_flow. For stable growth rate g: ≈ 1/(r-g).
2. T16: The S-curve is prescribed. Growth follows logistic dynamics:
   Launch: g high (S+D vectors dominate, ΔN/N >> e).
   Growth: g peaks, inflection.
   Maturity: g → 0, organic at rate e only.
3. DWX/INDX = 1/(r-g). As g evolves along the S-curve:
   - When g is high (launch/growth): premium is large. DWX >> INDX.
   - When g peaks: premium peaks.
   - When g → 0 (maturity): premium → 1/r. Finite, minimal.
4. T3: At maturity, community = market. IMR at credibility-optimal band (70–85%). TAM served.
   No remaining growth source. g = 0.
5. At g = 0: DWX/INDX = 1/r. The only reason to hold DWX is yield.
   DWX becomes pure yield instrument. No growth premium.
6. In the protocol's own terms: when the protocol IS the market,
   earning INDX (participating) and holding DWX (owning) are
   equivalent acts — both yield e on X, nothing more.
   The distinction between owner and participant dissolves.
   DWX:INDX converges to 1 in contribution-normalized terms.
7. The shape of DWX/INDX over time = inverse of the adoption S-curve:
   starts high (pre-adoption), falls through growth, flattens at 1 (full adoption).
8. ∴ DWX:INDX traces inverse S-curve from ∞ to 1.
   At 1: fully mutualized. "Returns markets to members."  ∎
```

### Proof 11: Self-Reinforcing Ownership Transfer (T37)

```
GIVEN: T35, A5, A7, T1
1. T35: Members earn INDX (flow). Members can convert INDX → DWX (flow → stock).
2. Conversion = increased ownership stake = increased alignment with protocol.
3. A7 (Loop 1): Trust → edge via dataset. More aligned members contribute
   more edge (increased activity, better signals, more data).
   Richer dataset → higher e for all participants.
4. Higher e → more INDX generated per period (e×X with larger e).
5. More INDX generated → DWX value increases (NPV of larger future flows).
6. A5: Surplus reinvested compounds trust. The additional surplus from step 4
   is reinvested wherever it mints the most trust → accelerates X growth.
7. T1: The flywheel self-accelerates. Steps 2-6 form a positive feedback loop:
   Convert → align → contribute → generate → appreciate → convert.
8. Net effect on remaining DWX holders (including original shareholders):
   - Protocol generates more INDX (step 4) → DWX is worth more (step 5)
   - More members converting → more alignment → even more generation
   - Their remaining DWX appreciates BECAUSE of the ownership transfer
9. This is NOT zero-sum. Total protocol value increases at each step.
   The new DWX holder's gain comes from VALUE CREATED (more edge),
   not from VALUE TRANSFERRED (dilution of existing holders).
10. ∴ INDX→DWX conversion is positive-sum. Ownership transfer accelerates
    the protocol. It does not dilute — it compounds.  ∎
```

### Proof 12: Endgame Entity — Capstone (T39)

```
GIVEN: T36, T38, T34, P6, T3
1. T36: DWX:INDX → 1. Protocol fully mutualized. No ownership premium.
   Members who earned INDX have converted to DWX. Ownership = participation.
2. T38: BS-heavy activities externalized to partner-buyers:
   - Client money → CIF partners / franchise nodes (their core business)
   - Market-making → balance-sheet partner (their core business)
   - Clearing → FCM (their core business)
   - Each partner adds flow to matching engine (T2: IMR rises with N)
   Company retains: method (IP), PM permission, sovereign capital, rail economics.
3. T34: Trust is protocol property. Edge is portable. The protocol's accumulated
   trust (P5: dataset) belongs to the protocol, not to any individual.
   Members who contributed trust own DWX (by T36 convergence).
   ∴ Trust owners = members = DWX holders. Protocol property = member property.
4. At T36 convergence + T38 completion, the entity satisfies:
   a. No client money (externalized per T38)
   b. No BS-heavy operations (partnered per T38)
   c. Sovereign capital only (prop book — Holding's own money)
   d. Revenue = rail rental + PM fees + netting surplus
   e. Ownership distributed to members (DWX:INDX = 1 per T36)
5. T3: Community = market. At maturity, virtually all flow matches internally.
   The community IS the price discovery mechanism.
6. P6: Merit is the ordering principle. At DWX:INDX = 1:
   - No extraction possible (T20: all three levels closed)
   - No intermediary rent (A9 extended from flow-level to ownership-level)
   - Ownership earned through contribution (P6 applied to equity)
   - Contribution = the ONLY path to ownership
7. The entity satisfying conditions (a)-(e) + T3 + P6 is precisely:
   a member-owned prop fund (conditions c, e) that owns
   a trust-minting protocol (conditions a, b, d, T34).
8. The founders' exit (T40) and the mission's completion (T3 + P6) are the
   SAME EVENT: DWX:INDX → 1. Building the protocol to maturity IS cashing out.
   The exit IS the mission. They converge at the same point on the S-curve.
9. ∴ Endgame entity = member-owned prop owning trust-minting protocol.
   Isomorphic to "merit is all that's left."  ∎
```

---

## V. DEPENDENCY GRAPH

```
PRIMITIVES (7) — v8b causal order (P7 demoted as primitive, recognized as protocol operation §0)
  P0:Information Asymmetry  P1:Credibility  P2:Confidence  P3:Trust
  P4:Matching  P5:Dataset  P6:Merit(NORMATIVE)

CAUSAL CHAIN: P0 → P1 → P2 → P3 → P1 (α loop) + P3 → P2 (β loop) → P0 falls → e^X

AXIOMS (13 active, A6/A11/A12/old-A15 demoted. A7 β-only (19 Apr). A8 RESTORED with new content. A10 active. A15+A16 new v12)
  EXISTENTIAL:  A1←P0,P6  A2←P1,P6  A3←P6,P1
  STRUCTURAL:   A4←P0,P4  A5←P0,P3,P2(absorbs A11)  A7←P3,P1,P2,A8 (β-only; α→T56)
                A8←P1,P2,P4,A9(investability: independent algorithmic standardisation — risk engine is e→X membrane)
                A9←P4,P6(CONSTITUTIONAL,transition note)  A10←P3,P2
                A15←P4,A9(Intent Conservation — aggregate intent conserved through pump; composition-infeasibility structural)
                A16←A15,T42(Atomic Cycle — per-cycle commit unit; enables double-entry INDX accounting)
  ARCHITECTURAL: A13←P1,P6  A14←P4,P6
  FORCE MAPPING: V←A1,A2,A3,A13  S←A4,A8,A9,A14,A15,A16  I←A5,T56  P←A7,A10  C←A1(¬),P6

THEOREMS (68 active: 59 positive + 9 failure, T4 absorbed)
  T1←A1,A2,A4,A5,A7    T2←A4,T1           T3←T2,A5
  T4→T11(absorbed)      T5←A7,P5,A5        T6←A7,P5,A8
  T7←A7,T2,A4          T8←A7,A5,T2,A8     T9←A10,A5
  T10←A7,P5,T3         T11←A2,A7,A13      T12←A4,A9,A14
  T13←T11,T12          T14←A9,T12          T15←A5,T1
  T16←A5,T15           T17←A5,P0           T18←A4,T2
  T19←A9,T15,A7        T20←A9,T19,T12     T21←T17,T20
  T22←A9,T3            T23←P6,A2           T24←A4,T7
  T25←T19,A5,T20       T26←A4,T2,T18      T27←T24,A4,T2,A13
  T28←A4,A5,A13,T7     T29←A4,T2,T7,T28   T30←T6,A13,P5
  T31←A2,A7,A13,T27    T32←P4,A9,A2,P6    T33←A2,A7,T11,T27,P6
  T34←P3,P5,A9,A13     T35←P1,P2,P3,T5,T9 T36←T35,T16,T3
  T37←T35,A5,A7,T1     T38←T27,T24,T28,A5 T39←T36,T38,T34,P6,T3
  T40←T36,T15,T37,T19  T41←A2,A4,A9,T34,P6
  T42←A2,A4,A7,A13     T43←A2,A14,A3,T34  T44←A2,A4,P5,P6,T43
  T45←A4,A7,T2,T3,P6,T44  T46←T2,T3,T16,T21,A5,T45
  T47←A7,A4,P5,T18,A13,T11,T34,A2  (G16 resolution)
  T48←A5,T20,P6  (organizational extraction test)
  T49←A2,A13,T31,T34,P1  (star factory)
  T50←P0,P1,P4,P5,T45  (information lifecycle: create/protect/liberate)
  T51←P0,A4,A9,T5,T2  (non-rivalry duality)
  T52←P0,P1,P4,P5,P3  (trust as residual: T = T_max − A)
  T53←P0,P1,A2,A3,A8,A13  (market existence / Akerlof-Spence)
  T54←A8,A9,P1,A13,T53  (two-step resolution / Holmström→Akerlof)
  T55←P5,A9,A4,P6,T51  (provision commons / Ostrom)
  T56←A7,A4,P5,T18,A13,T11,T34,A2  (Trust-to-Edge Aggregation — ex-A7α; T47 specialisation)
  T57←A4,A7,A13,P5,T50,T51,T56  (Open Trust as V/S/I/P operational interface)
  T58←T57,A5,A7,T56,A10  (Open-Trust ↔ INDX duality; closes Bellman loop)
  T59←A9,T56,P6  (continuous irreplaceability — 15/85/75 as ψ(O))
  T60←T58,T59,P6  (control-loop convergence — maximum-disclosure attractor)
  T61←A7,A9,P6,T16  (DWX Decay — v12)
  T64←A15,T5,T42  (Patience Lever — IMR increasing in cycle length)
  F1←¬T56,T5  F2←¬A7,T5  F3←¬(e>0),A7,A5  F4←¬A9,¬A4,¬A14  F5←¬V,T18,A3  (failure theorems, Class A)
  F6←¬P5(robustness),A2,A8  F7←¬P5(stationarity),A7,T42  F8←¬A14(ext),¬A3,T32  F9←¬V(endog),A8,T18  (failure theorems, Class B — adversarial/external)
```

---

## VI. CROSS-VALIDATION MATRIX

| Theorem | MISSION | MECHANISM | DEAL | ALGEBRA | S-CURVE | CORR-RES | PARTNERSHIP | CCP_ME | CANON_FR |
|---------|---------|-----------|------|---------|---------|----------|-------------|--------|----------|
| T1 | ✅ | ✅ | ○ | ✅ | ✅ | ○ | ○ | ✅ | ✅ |
| T2 | ○ | ✅ | ○ | ✅ | ✅ | ○ | ○ | ✅ | ✅ |
| T3 | ✅ | ✅ | ○ | ✅ | ✅ | ○ | ○ | ✅ | ✅ |
| ~~T4~~ *(→T11)* | — | — | — | — | — | — | — | — | — |
| T5 | ✅ | ✅ | ○ | ✅ | ✅ | ○ | ○ | ○ | ✅ |
| T6 | ○ | ✅ | ✅ | ✅ | ✅ | ○ | ○ | ○ | ○ |
| T7 | ○ | ✅ | ○ | ✅ | ○ | ○ | ○ | ○ | ✅ |
| T8 | ○ | ✅ | ○ | ✅ | ○ | ○ | ○ | ○ | ○ |
| T9 | ○ | ○ | ○ | ✅ | ○ | ○ | ○ | ○ | ✅ |
| T10 | ○ | ○ | ○ | ✅ | ✅ | ○ | ○ | ○ | ✅ |
| T11 | ✅ | ✅ | ○ | ○ | ✅ | ○ | ○ | ○ | ✅ |
| T12 | ✅ | ✅ | ○ | ○ | ○ | ○ | ✅ | ✅ | ✅ |
| T13 | ✅ | ✅ | ○ | ○ | ○ | ✅ | ○ | ○ | ✅ |
| T14 | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ✅ | ✅ |
| T15 | ○ | ○ | ○ | ○ | ✅ | ○ | ✅ | ○ | ○ |
| T16 | ○ | ○ | ○ | ✅ | ✅ | ○ | ○ | ○ | ✅ |
| T17 | ✅ | ○ | ○ | ✅ | ✅ | ⚠️ | ✅ | ○ | ⚠️ |
| T18 | ○ | ✅ | ○ | ○ | ○ | ○ | ○ | ✅ | ○ |
| T19 | ○ | ○ | ○ | ○ | ✅ | ✅ | ✅ | ○ | ○ |
| T20 | ○ | ○ | ○ | ○ | ○ | ✅ | ✅ | ○ | ⚠️ |
| T21 | ○ | ○ | ○ | ○ | ○ | ✅ | ○ | ○ | ⚠️ |
| T22 | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ✅ | ✅ |
| T23 | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ✅ |
| T24 | ○ | ✅ | ○ | ✅ | ○ | ○ | ○ | ○ | ⚠️ |
| T25 | ○ | ○ | ○ | ○ | ○ | ✅ | ✅ | ○ | ○ |
| T26 | ○ | ✅ | ○ | ○ | ○ | ○ | ○ | ✅ | ○ |
| T27 | ✅ | ✅ | ○ | ✅ | ✅ | ○ | ✅ | ✅ | ✅ |
| T28 | ✅ | ✅ | ✅ | ✅ | ○ | ○ | ○ | ○ | ✅ |
| T29 | ✅ | ✅ | ○ | ✅ | ○ | ○ | ○ | ✅ | ✅ |
| T30 | ○ | ✅ | ○ | ○ | ✅ | ○ | ○ | ○ | ✅ |
| T31 | ○ | ✅ | ✅ | ○ | ✅ | ○ | ✅ | ○ | ✅ |
| T32 | ○ | ✅ | ○ | ○ | ○ | ○ | ○ | ✅ | ✅ |
| T33 | ✅ | ✅ | ✅ | ✅ | ✅ | ○ | ✅ | ○ | ✅ |
| T34 | ✅ | ✅ | ✅ | ✅ | ○ | ○ | ○ | ○ | ✅ |
| T35 | ○ | ✅ | ✅ | ✅ | ✅ | ○ | ○ | ○ | ✅ |
| T36 | ✅ | ✅ | ✅ | ✅ | ✅ | ○ | ○ | ○ | ✅ |
| T37 | ○ | ✅ | ✅ | ✅ | ✅ | ✅ | ○ | ○ | ✅ |
| T38 | ○ | ✅ | ✅ | ✅ | ✅ | ○ | ✅ | ○ | ⚠️ |
| T39 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ○ | ✅ |
| T40 | ○ | ○ | ✅ | ✅ | ✅ | ✅ | ✅ | ○ | ✅ |
| T41 | ✅ | ✅ | ✅ | ○ | ○ | ○ | ○ | ✅ | ✅ |
| T42 | ○ | ✅ | ○ | ✅ | ○ | ○ | ○ | ○ | ✅ |
| T43 | ○ | ✅ | ✅ | ○ | ○ | ○ | ○ | ○ | ✅ |
| T44 | ○ | ✅ | ✅ | ○ | ○ | ○ | ○ | ○ | ✅ |
| T45 | ✅ | ✅ | ○ | ✅ | ○ | ○ | ○ | ○ | ✅ |
| T46 | ○ | ✅ | ○ | ✅ | ✅ | ○ | ○ | ○ | ✅ |
| T47 | ○ | ✅ | ○ | ✅ | ○ | ○ | ○ | ✅ | ✅ |
| F1 | ○ | ✅ | ○ | ✅ | ○ | ○ | ○ | ○ | ✅ |
| F2 | ○ | ✅ | ○ | ✅ | ○ | ○ | ○ | ○ | ✅ |
| F3 | ○ | ✅ | ○ | ✅ | ✅ | ○ | ○ | ○ | ✅ |
| F4 | ○ | ✅ | ○ | ○ | ○ | ○ | ○ | ✅ | ✅ |
| F5 | ○ | ✅ | ○ | ○ | ✅ | ○ | ○ | ○ | ✅ |
| T48 | ○ | ✅ | ✅ | ✅ | ○ | ✅ | ✅ | ○ | ✅ |
| T49 | ✅ | ✅ | ○ | ✅ | ○ | ○ | ○ | ✅ | ✅ |
| T50 | ✅ | ✅ | ○ | ○ | ○ | ○ | ○ | ✅ | ✅ |
| T51 | ○ | ✅ | ○ | ✅ | ✅ | ○ | ○ | ○ | ✅ |
| T52 | ✅ | ✅ | ○ | ✅ | ○ | ○ | ○ | ✅ | ✅ |
| T53 | ✅ | ✅ | ✅ | ○ | ○ | ○ | ○ | ✅ | ✅ |
| T54 | ○ | ✅ | ○ | ○ | ○ | ○ | ○ | ✅ | ✅ |
| T55 | ✅ | ✅ | ✅ | ✅ | ○ | ○ | ✅ | ○ | ✅ |
| T56 | ○ | ✅ | ○ | ✅ | ○ | ○ | ○ | ✅ | ✅ |
| T57 | ✅ | ✅ | ○ | ✅ | ○ | ○ | ○ | ○ | ✅ |
| T58 | ✅ | ✅ | ✅ | ✅ | ○ | ○ | ○ | ○ | ✅ |
| T59 | ○ | ✅ | ✅ | ✅ | ○ | ✅ | ○ | ○ | ✅ |
| T60 | ✅ | ✅ | ○ | ✅ | ✅ | ○ | ○ | ○ | ✅ |

**Legend:** ✅ = Consistent and housed | ⚠️ = Consistent but not yet propagated | ○ = Not directly relevant

---

## VII. OPEN GAPS

| # | Gap | Priority | Status |
|---|-----|----------|--------|
| G1 | ~~Five matching dimensions not fully in [[VOCABULARY]]~~ | 🟢 | **RESOLVED 12 Apr.** Five individual dimension entries (flow, knowledge, capital, community, tool) added to CANONICAL_FRAMING glossary. |
| G2 | ~~INVERSION term has 8 inversions; canonical has 14~~ | 🟢 | **RESOLVED 12 Apr.** Both CANONICAL_FRAMING §Inversions and INVERSION term list 17 inversions. Mismatch was stale. P7 demoted to method (v7). |
| G3 | ~~1:N/M:N/method not in [[VOCABULARY]]~~ | 🟢 | **RESOLVED 12 Apr.** 1:N (DARWIN rails), M:N (eXchange), DARWIN method added to CANONICAL_FRAMING glossary. |
| G4 | ~~Contribution score weights undefined~~ | 🟢 | **RESOLVED 12 Apr.** Weights follow the compass (∂T/∂€). Four contribution types (Provide/Distill/Source/Develop) on the flow layer. Seekers outside score (market-priced). Two-layer duality (T35 recursive) formalized in ALGEBRA §VI-B. |
| G5 | ~~Genesis event unresolved~~ | 🟢 | **RESOLVED 12 Apr.** Genesis = traders backing each other. First P3 minted when providers were the first seekers. Written to BOARD_DECK_FRAMEWORK §0. |
| G6 | ~~T21 allocation misallocation not fully in [[CORRUPTION-RESISTANCE]]~~ | 🟢 | **RESOLVED 12 Apr.** T21 explicitly named in CORRUPTION-RESISTANCE §allocation_corruption_vector. |
| G7 | ~~Prop BU = venue identity not in canonical files~~ | 🟢 | **RESOLVED 12 Apr.** Prop BU glossary entry added to CANONICAL_FRAMING. [[PHENOTYPE--prop-bu]] houses full treatment. |
| G8 | ~~T28 not yet in [[INDX]] atom~~ | 🟢 | **RESOLVED 12 Apr.** T28 added to ALGEBRA theorems_housed. §XIV-A bridging section added. [[GENOTYPE--linear-network]] houses full treatment. |
| G9 | ~~MARC references in 8 files~~ | 🟢 | **RESOLVED 12 Apr.** All MARC instances replaced. Only killed-term entry in CANONICAL_FRAMING remains (correct — documents the death). |
| G10 | Trust-Based Management Accounts not designed | 🟢 | Awaiting Sergio's data |
| G11 | ~~P5 (Surplus) fails irreducibility test~~ | 🟢 | **RESOLVED 6 Apr.** P5 demoted to derived. |
| G12 | ~~A12 (three-party split) derivable from A11+A5~~ | 🟢 | **RESOLVED 6 Apr.** A12 demoted to design parameter. |
| G13 | ~~T4/T11 identical derivation~~ | 🟢 | **RESOLVED 6 Apr.** T4 absorbed into T11. |
| G14 | ~~T32 (Regulatory Architecture) is empirical, not logically derived~~ | 🟢 | **RESOLVED 12 Apr.** Reframed as normative design theorem: firewall regulated from non-regulated to spread risk and maximize capital efficiency. Grounded in P6+A4+A9. Dependencies updated to include P6. |
| G15 | ~~Organizational criticality has no theorem — "moderator removal" insight unformalized~~ | 🟢 | **RESOLVED 12 Apr.** T48 (Organizational Extraction Test) formalizes the general principle: any layer that net-consumes trust is extraction. T38 (Progressive Shedding) is T48 applied to corporate structure over time. Universal evaluation tool: every hire, partnership, BU, process testable against "does this layer mint trust, protect trust, or extract?" |
| G16 | ~~Trust-to-edge loop (A7 Loop 1) has no empirical measurement~~ | 🟢 | **RESOLVED (10 Apr) by T47.** A7α is derivable at the AGGREGATE level from A7β+A4+P5+T18+A6+A13+T11+T34+A2. Two structural channels: (1) Network α — trust → confidence → flow → data → better selection → aggregate credibility. (2) Marketplace α — trust → rational to transact inside (INDX accrual, dishonesty cost) → measurement density → attributed data → better selection. Individual α (does a single trader improve from tools/data?) remains empirical but is NOT required for aggregate e^X. INDX improves because selection improves. No single point of failure remains. |

| G17 | ~~Formalize information lifecycle (Create→Protect→Liberate)~~ | 🟢 | **RESOLVED 12 Apr (v8).** T50 (Information Lifecycle) formalizes the three-stage lifecycle, maps to eight triads. |
| G18 | ~~Formalize non-rivalrous/rivalrous duality~~ | 🟢 | **RESOLVED 12 Apr (v8).** T51 (Non-Rivalry Duality) formalizes: non-rivalrous inside (O(N²)), rivalrous outside (adverse selection). Physical explanation for T5 (e^X). A9 maintains the boundary. |
| G19 | ~~Formalize "trust as residual"~~ | 🟢 | **RESOLVED 12 Apr (v8).** T52 (Trust as Residual) formalizes: T = T_max − A, dT/dt = −dA/dt. Trust revealed by removing asymmetry, not built by construction. |

**G1-G3, G6-G9 resolved 12 Apr** (KB cascade + gap closure). G7, G8 fully propagated to atoms + CANONICAL_FRAMING.
**G11-G16 from Framework Audit 5 Apr 2026.** See `FRAMEWORK_AUDIT_260405.md` for full analysis.
**G15 partially resolved 6 Apr 2026** by T38 (Progressive Shedding). T21 propagated via T35-T40 chain.
**T33 cross-ref:** Token hierarchy (DARWIN→Community→INDX→DWX) now fully connected. T35 defines DWX mechanics. T36 defines convergence dynamics. T33 establishes the hierarchy; T35-T36 animate it.

---

## VIII. SYNTHESIS

**Three-lens triad (v7, enriched v8b):** This framework is one of three complementary views of the same system: [[CONSTITUTION]] = WHAT the system is (11 axioms, primitives, theorems). [[INDX]] = HOW FAST it grows (master equation, double recurrence). [[REWARD]] (three circles) = WHERE to invest (1+3+3+4 axiom placement, roadmap compass). **v8b information foundation:** All three views are grounded in P0 = information asymmetry. The ten-triad unification table (§I) maps every element — circles, stages, operations, capital types, spread mechanics, sovereignty levels, protocol operations, market failures resolved — to the same Individual/Community/Society structure. The Protocol Chain (§0) governs: three inversions → trust as residual → markets = people. The framework is information-theoretic at its root.

| Category | Count | Change (v7 from v6) |
|----------|-------|---------------------|
| **Primitives** | **7** (was 8 in v6) | P7 (Inversion) demoted as primitive v7, recognized as protocol operation v8b (§0: Protocol Chain). P5(Surplus) already demoted (v4). |
| **Axioms** | **13** (was 11 in v11) | A6→A7, A11→A5 (v7). A8 RESTORED with new content: investability requires standardisation (v7b). A10 (trust-flow) active. A12/old-A15 already demoted. **v12:** A15 Intent Conservation + A16 Atomic Cycle (new axioms). |
| **Theorems** | **70 active** (61 positive + 9 failure) | **v12:** +T64 (Patience Lever — IMR increasing in cycle length). T61 promoted from candidate. T42 bilateral extension. +T58 (Open-Trust↔INDX duality) +T59 (continuous irreplaceability) +T60 (control-loop convergence) — v11, 19 Apr. +T56 (Trust-to-Edge Aggregation, ex-A7α) +T57 (Open Trust as V/S/I/P interface) +F6-F9 (adversarial/external failure class: Dataset Poisoning, Reflexivity, Regulatory Weaponisation, Strategy Convergence) — v10, 19 Apr. +F5 V-Collapse/Stagnation (v9, 14 Apr). +T53-T55 Nobel cross-check (v8b, 12 Apr). +T49-T52 information architecture (v8, 12 Apr). +T48 organizational extraction (12 Apr). +F1-F4 failure theorems (v7). T47 (G16 resolution, v6). T42-T46 (v5). T35-T41 (v4). T4 absorbed. |
| **Proofs** | **21** | Proofs 1-21. Proof 1 (T5) reframed as derivation from T56+A7 (v10). Proof 17 (T56 aggregate α, specialisation of T47). Proof 18 (T57 Open Trust interface bijection). Proofs 19-21 (T58/T59/T60: INDX duality, continuous irreplaceability, Bellman attractor) — v11. |
| **Hidden corollaries** | **6** | HC1 Arb inversion, HC2 INDX absorption, HC3 regulatory arbitrage, HC4 VBM module extension, HC5 Jira-framework bridge, HC6 Ignacio thread |
| **Satellites** | **9** | REINVESTMENT-MAP archived. PROTOCOL-NETWORK, OPEN-SOURCE-STRATEGY, TOKEN-HIERARCHY, REGULATORY-ARCHITECTURE, + 5 earlier. |
| **Open gaps** | **19 (G1–G19), all resolved** | G17-G19 resolved by T50-T52 (v8). G14 resolved (T32 reframed as normative). G15 resolved (T48 formalizes general principle). G1-G3, G5-G9 resolved (12 Apr cascade). G4 resolved (two-layer economy). G11-G13, G16 resolved earlier. |

---

## IX. NOTATION RECONCILIATION (v7)

The trust equation appears in multiple files with different variable conventions. This section makes the mapping explicit.

| This File (Framework) | ALGEBRA Atom | Meaning | Type |
|----------------------|--------------|---------|------|
| **C** (P1) | **e** | Credibility / Edge rate | Stock (rate: dC/dt) |
| **K** (P2) | **ΔC** (confusingly) | Confidence / Capital deployed | Flow → Stock (AuM) |
| **T = C × K** (P3) | **X** (trust stock) | Trust = Credibility × Confidence | Stock (instantaneous product) |
| **dT/dt** | **X(t+1) − X(t)** | Trust accumulation rate | Flow (per period) |
| **INDX = ΔQuote × OC** | **e × X** (flow) | Trust earned per period | Flow (participation) |
| **DWX** (T35) | **e^X** (NPV) | Protocol ownership value | Stock (all future flows) |

**The apparent contradiction (V7 audit finding):**
- Framework says: **T = C × K** (product — trust is credibility TIMES confidence)
- ALGEBRA says: **X(t+1) = X(t)×(1+e) + ΔC + Nτ** (accumulation — stock grows by organic return PLUS new flows)

**Resolution:** These are complementary, not contradictory.
- **T = C × K** is the *instantaneous minting rate* — how much trust is being produced NOW (product of credibility rate × confidence stock). This is a flow equation.
- **X(t+1) = X(t)×(1+e) + ΔC + Nτ** is the *stock accumulation equation* — how total trust stock evolves over TIME. The organic term X×(1+e) captures compounding of existing stock. ΔC captures new confidence inflows. Nτ captures subscription surplus.
- The two equations operate at different timescales: T is instantaneous, X is periodic.

**Warning:** The letter "C" means CREDIBILITY in this framework and CONFIDENCE FLOW in ALGEBRA. Context determines which.

---

## See Also

- [[PROTOCOL]] — governing synthesis (narrative, three inversions, trust equation, ten-triad unification)
- [[DEVELOP]] — e circle (credibility inversion in action)
- [[REWARD]] — ★ circle (intent inversion in action)
- [[INDX]] — X circle (data inversion in action)
- [[VOCABULARY]] — canonical definitions and glossary
- [[PHENOTYPE--business-units]] — BU ↔ axiom mapping
- [[GENOTYPE--linear-network]] — T28 full treatment
- [[PHENOTYPE--prop-bu]] — venue identity resolution

---

### Proof 13: Challenge Marketplace is self-reinforcing (T41)

```
PROOF TYPE: Self-reinforcement (positive feedback loop).
T41 is assumed established (derived from A2+A4+A9+T34+P6).
This proves T41 is self-sustaining once it exists.

GIVEN: A2, A7, A5 (and T41 established)
1. T41: challenges settle by Quote (A2 dependency). Without accurate Quotes,
   challenges can't function. Quote integrity = prerequisite.
2. Challenge mediation fees fund the Method BU (rail revenue → risk engine).
3. More funding → Method improves risk engine → higher Quote integrity (A2 strengthened).
4. Better Quotes → more member trust in challenges → more challenges → more fees.
5. More challenges → more data generated (every challenge adds to P5 dataset).
6. A7 (Loop 1): richer dataset → higher e (trust begets edge via P5).
7. Higher e → more INDX earned → more INDX available for challenge stakes.
8. A5: surplus from step 4 reinvested → compounds trust → step 1 stronger.
9. Each cycle: more challenges, better Quotes, richer dataset, more INDX.
   No cycle degrades the inputs of the next cycle.
10. ∴ T41's challenge marketplace is self-reinforcing.
    Challenges fund their own prerequisite (Quote integrity).  ∎
```

---

### Proof 14: External validation is necessary for credibility (T42)

```
GIVEN: A2, A4, A7, A13
1. A2: protocol certifies merit (independently, publicly, externally validated).
2. A4: matching produces overflow (internal matching rescues surplus, remainder exits).
3. Overflow enters external market. External market has no relationship to protocol.
4. If overflow WINS against external market: proves internal certification was accurate.
   Protocol claims "our members have edge" → external market confirms "yes, their overflow beats us."
5. If overflow LOSES: disproves claims. Credibility collapses. Confidence withdraws.
6. A13: results public → external performance observable by all.
7. A7: collective credibility attracts confidence → but credibility requires proof (step 4).
8. Without external validation: Quote is self-referential (protocol grading its own students).
   With it: Quote is independently verified by the only judge that can't be gamed — the market.
9. ∴ External validation is necessary condition for internal certification to be credible.
   Members contribute edge. Market contributes trust. Protocol re-distributes.  ∎
```

**Corollary (Overflow is Stroke 2 of the matching-engine extraction pump).** The proof above treats overflow as a credibility validator. The tightest reading under A9 + T51 + the mechanical identity of the matching engine gives overflow a **quadruple role**: (i) **validator** — overflow-beats-external certifies internal certification (the proof above); (ii) **sensor** — price/fill/velocity data returned enters P5 non-rivalrously (T51); the spread priced as oracle fee purchases external price discovery; (iii) **A9 footprint** — A9 requires unmatched internal intent exit, so overflow `{volume, direction, outcome}` is observable residue of A9 integrity (a distorted overflow pattern is the fingerprint of internal extraction disguised as matching; a suppressed overflow — pump not running — is equally suspect); (iv) **Stroke 2 of the extraction pump** — the matching engine withholds intent internally (Stroke 1: netting dissolves individual intent, distills the residual), then funnels the member-anonymized aggregate outward (Stroke 2: extract P&L from the external rent-extractor layer, mint continuous public credibility via T42). **T42 is therefore not a periodic validator but the continuous measurement of the pump's extraction rate.** The IMR target revises accordingly: IMR → 1 closes the credibility aperture and starves public legitimacy; the empirical credibility-optimal IMR (70–85%) maximises joint pump output. Overflow's existence, polarity, and edge-vs-rent ratio are the falsifiability surface of the framework. Not a new theorem — naming the coupling makes explicit that T42 ↔ A9 ↔ T51 ↔ matching-engine mechanics jointly specify overflow's meaning. The [[PHENOTYPE--t42-verification]] dashboard is simultaneously T42 verification, A9 integrity audit, and pump-rate telemetry. Operational treatment: [[PROTOCOL]] §6.1.

### Proof 15: Two-way certification is necessary for the flywheel (T43)

```
GIVEN: A2, A14, A3, T1
1. The flywheel (T1) requires two inputs: edge entering AND capital entering.
2. Capital enters IF it trusts the certification of edge (A2 → capital direction).
   Without edge→capital cert: no allocation. Capital side of flywheel dead.
3. Edge enters IF it trusts the protocol will fairly measure and reward (A14 + A3 → edge direction).
   Without protocol→edge cert: no contribution. Edge side of flywheel dead.
4. Both certifications use the same mechanism: independent measurement (risk engine),
   public attestation (Quote), external validation (T42), permanent record (P5).
5. The INDX funnel documents every interaction cradle-to-grave.
   This IS the smart contract enforcement for the edge side:
   "your contribution is tracked, attributed, and will be fairly rewarded."
6. Both sides must believe simultaneously for T1 to engage.
7. ∴ Two-way certification is necessary condition for the flywheel.  ∎
```

### Proof 16: INDX is attributed certification, not financial reward (T44)

```
GIVEN: A2, A4, P5, P6, T43
1. A2 (upgraded): certification across every touchpoint of the value chain.
2. Value chain: source → develop → process → compound. Each step measurable.
3. A4: five matching dimensions. Each step operates in multiple dimensions.
4. P5: dataset records ALL interactions (not just trades).
5. Every protocol interaction is: tracked (P5), measured (A2), attributed (P6).
6. INDX earned = f(attributed contributions across value chain steps × matching dimensions).
7. Each INDX unit is traceable to specific contributions: "this INDX was minted because
   this member's trading edge beat the external market (T42), AND their referral brought
   a member who contributed to matching density (sourcing), AND their Kaggle submission
   improved the risk engine (developing)."
8. INDX records what you DID (certification of contribution), not what you HOLD (promise of return).
9. P6: contribution determines reward. INDX IS P6 (merit) implemented as a token.
10. ∴ INDX is attributed certification of contribution — functionally utility (certifies activity),
    not financially security (certifies ownership of future cash flows).  ∎
```

### Proof 17: Aggregate α is derivable, not axiomatic (T56) — specialisation of T47

```
GIVEN: A7 (β), A4, P5, T18, A13, T11, T34, A2
1. A7 (β): trust attracts confidence → new members enter (rational allocation of
   capital to proven edge).
2. A4: new members bring flow (five-dimension matching).
3. P5: flow enriches the dataset (every interaction recorded, attributed).
4. T18: a richer dataset improves selection (filtering on more signal).
5. A13 + T11: transparency inversion ensures the improved selection is observable
   and auditable — the improvement is credible, not private.
6. A2 + T34: certification is protocol-owned; improved selection compounds into
   aggregate credibility without leaking out to any individual member.
7. The aggregate α-loop therefore closes at the protocol level: trust → flow →
   dataset → selection → aggregate edge. INDX improves because SELECTION improves,
   even if no individual improves (T47 G16 resolution).
8. ∴ Aggregate α (trust → edge) is derivable from the β axiom plus the matching +
   dataset + selection machinery. No independent axiom required.  ∎

T56 absorbs the claim that was previously A7α. The individual-level α remains
empirical; the aggregate-level α is proven. F1 (α-Collapse) correspondingly
re-anchors on ¬T56 rather than ¬A7α.
```

### Proof 18: Open Trust is the V/S/I/P operational interface (T57)

```
GIVEN: A4, A7, A13, P5, T50, T51, T56
1. Data ↔ V. By A13 (transparency inversion) + P5 (dataset), every disclosed
   signal is an addition to the variation pool. Every V-unit entering the system
   arrives as SOME disclosed signal (else unobservable → not in dataset).
   ⇒ bijection on the generation stage of T50.
2. Noise ↔ S. By A8 (informativeness principle — standardisation on informative
   signals) + T18 (selection as filtering), signal clarity ε is the selection
   sharpness parameter. ε → 1 ⇒ S operates on clean information; ε → 0 ⇒ S
   degenerates. Every selection act prices a noise level.
   ⇒ bijection on the protection stage of T50 (within T51 non-rivalry duality).
3. Timing ↔ I. By A5 (surplus compounds) + T56 (aggregate α via dataset),
   real-time disclosure ⇒ α-loop iterates at tick speed; delayed disclosure
   stretches the inheritance interval between signal-minting and edge-compounding.
   ⇒ bijection on compounding cadence.
4. Capital ↔ P. By A7 (β-loop) + A10 (trust-flow = confidence-loaded allocation),
   skin-in-the-game IS the external proof that propagates β outward; more capital
   committed by members ⇒ stronger signal to external allocators.
   ⇒ bijection on propagation.
5. Each of the four disclosure axes maps 1-to-1 to one evolutionary force, and
   each force has exactly one Open Trust axis as its member-facing fuel intake.
6. ∴ the four-axis disclosure gradient is isomorphic to the V/S/I/P basis; Open
   Trust is the operational interface, not a scalar multiplier on any primitive.
   Force imbalance ⇒ disclosure-axis imbalance (diagnostic corollary).  ∎
```

### Proof 19: Open-Trust ↔ INDX duality (T58)

```
GIVEN: T57, A5, A7, T56, A10
1. T57 fixes the input-side bijection: Disclosure axes ↔ V/S/I/P forces.
2. Exhibit the output-side pairings.
   Originality ↔ V: INDX's O-dimension rewards net new entropy added to P5 —
     exactly the V-quantity disclosed along the Data axis (A13+P5).
   Performance ↔ S: the P-dimension scores selected edge after A8 filtering —
     exactly the S-quantity priced by the Noise axis.
   Persistence ↔ I: the Per-dimension compounds across cycles via T56 — exactly
     the I-quantity priced by the Timing axis (A5 reinvestment cadence).
   Capacity ↔ P: the Cap-dimension measures external capital absorbed — exactly
     the P-quantity priced by the Capital axis (A7 β-loop, A10 trust-flow).
3. Naturality. For each force F ∈ {V,S,I,P}, the square commutes:
       Disclosure(F) ──axis──→ force-value(F)
            │                        │
          η_F                      (identity, same V/S/I/P basis)
            ↓                        ↓
       INDX(F)      ──dim───→ force-value(F)
   Both legs compose to the same V/S/I/P quantity — input-side and output-side
   read the same engine.
4. Risk Engine gate. Φ(O, P, Per, Cap) prices the output only after P6/C passes
   the RiskEngine indicator. Legitimacy gate (binary, P6) is separate from
   value scoring (continuous, V/S/I/P).
5. Control loop. Member discloses d → scored via η(d) = INDX(d) → capital
   ΔC flows to high-INDX (A7 β + A10) → member re-discloses. The loop closes
   because η is a bijection and A7 is monotone in scored proof.
6. ∴ the Open Trust disclosure basis and the INDX scoring basis are the same
   V/S/I/P basis read at different layers. Two objects collapse into one.
   Two-contract corollary: Signal contract value = f(O, P, Per); Allocation
   contract capacity = Cap. These are the two directions of the bijection.  ∎
```

### Proof 20: Continuous irreplaceability (T59)

```
GIVEN: A9, T56, P6
1. A9: no private extraction → provider share must reflect actual contribution
   (venue cannot appropriate surplus regardless of O).
2. T56: aggregate α depends on originality distribution — higher-O contributions
   enrich the dataset more than lower-O contributions per unit flow.
3. P6 (merit): reward must be monotone in contribution.
4. Suppose share_provider is a flat tier s* irrespective of O within some interval
   [O_lo, O_hi] with O_lo < O_hi. Two providers with distinct O in this interval
   receive identical share — merit does not determine reward in the interval.
   Contradiction with P6.
5. ∴ share_provider must be strictly monotone in O almost everywhere.
   Write: share_provider = s_min + (s_max − s_min)·g(O), g monotone, g(0)=0,
   g(O_ref)=0.75 where O_ref anchors the historical 75% observation.
6. The 75% value is not a plateau — it is the reference-originality allocation
   point. 85/15 and 75 are points on ψ(O), not tiers.
7. ∴ the 15/85/75 surplus quantum is a continuous function of originality.  ∎
```

### Proof 21: Control-loop convergence (T60)

```
GIVEN: T58, T59, P6
1. Let d ∈ Δ be a disclosure profile on the 4-axis simplex Δ (Data, Noise,
   Timing, Capital). Let INDX(d) = 𝟙[RiskEngine(d)=pass] · Φ(d) where Φ is
   the power-weighted product Φ(d) = O^a P^b Per^c Cap^d with normalised
   exponents (T58).
2. Define the Bellman operator B: Δ → Δ by
       B(d) = arg max_{d' ∈ Δ} E[ α(d') · A(INDX(d')) | d ]
   where A(·) is capital allocation (A7 β + A10) and α the individual's
   participation discount.
3. Monotonicity. RiskEngine is monotone in truthful disclosure (A8
   informativeness principle); Φ is monotone in each dimension (power-weighted
   with a,b,c,d > 0). ⇒ B is monotone in d.
4. Contraction. Φ is a smooth, strictly concave log-transform on the simplex
   interior (log Φ is linear in log-dim with positive weights summing to 1).
   Monotone Bellman operators on compact simplices with strictly concave
   log-utility are contractions in the supremum metric.
5. By Banach's fixed-point theorem: B has a unique fixed point d*.
6. d* lies on the maximum-disclosure edge. By step 3, any move toward the
   edge strictly increases Φ and does not reduce RiskEngine pass probability
   (truthful disclosure never decreases informativeness). Interior points are
   dominated.
7. Cost corner. If disclosure carries cost c(d), replace Φ by Φ_c(d) = Φ(d) −
   c(d). Steps 3–5 still give a unique fixed point, now on the maximum-disclosure
   edge *subject to* c(d) ≤ marginal INDX premium — privacy-as-redistribution
   ([[PROTOCOL]] §10) is exactly this constraint.
8. ∴ maximum disclosure is the unique Bellman attractor. Open Trust's "evolves
   toward openness by economics" is a theorem.  ∎

DIAGNOSTIC: observed drift of aggregate d toward the simplex interior (away
from the edge) is falsifiable evidence of either (i) RiskEngine non-monotonicity
(A8 miscalibration, recover by informativeness audit) or (ii) disclosure cost
exceeding INDX premium (recover by rebalancing Φ weights or reducing cost).
Both are correctable — the attractor is structurally unique, misalignment is
operational.
```

---

---

## HUMAN_SECTION

The Constitution is the formal appendix of the Darwinex knowledge base. It contains every primitive, axiom, theorem, and proof — the logical skeleton that the narrative atoms (PROTOCOL, DEVELOP, REWARD, INDX) flesh out.

Think of it as a legal constitution: the articles (axioms) define the structure, the amendments (theorems) derive consequences, and the proofs demonstrate internal consistency. The narrative — why the protocol exists, what the inversions mean, how trust compounds — lives in [[PROTOCOL]]. This file proves the narrative is logically sound.

The dependency graph (§V) shows that every theorem traces back to primitives and axioms — nothing hangs unsupported. The cross-validation matrix (§VI) shows where each theorem is housed in the KB. The notation reconciliation (§IX) maps variables between this file and [[INDX]].

*Audit trail: v12 (20 Apr 2026) A15 Intent Conservation + A16 Atomic Cycle. T42 bilateral extension. T61 promoted. T64 Patience Lever. 3 Named Principles. 13 axioms, 70 theorems, 21 proofs. v11 (19 Apr 2026) T58 (Open-Trust↔INDX duality), T59 (continuous irreplaceability), T60 (Bellman attractor), T42 elevated as load-bearing empirical anchor, P6 value-rootedness made explicit, IMR "phase transition" softened to inflection. 68 theorems, 21 proofs. v10 A7 β-only, T56/T57, F6-F9. v9 Force-axiom mapping, F5. v8b Protocol synthesis. v7 audit hardening. v6 P0 regrounding. v5 certification chain. v4 protocol transition. v3 moat + network.*
