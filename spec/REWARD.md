---
type: atom
language: dual
status: ACTIVE
version: 2
date: 2026-04-19
owns: |
  The ★ circle. Intent inversion. How matching works, surplus is allocated, intent is protected.
  The three circles. The ★ transition (× → ^). Roadmap compass. Allocation decision.
  BU architecture. Absorbs REINVESTMENT-MAP content.
circle_position: "★ (Community)"
audience_primary: management
audience_routing:
  board: "§1-§3 (intent protection, matching mechanism)"
  management: "§1-§8 (full depth — operational center)"
  staff: "§1-§5, §8 (mechanisms + organization)"
  community: "§1-§2, §4 (what the community does for you)"
  prospect: "Not direct entry — via [[PROTOCOL]] or [[DEVELOP]]"
primitives_used: [P0, P1, P2, P3, P4, P5, P6]
depends_on: "[[PROTOCOL]] (the governing synthesis) + [[DEVELOP]] (edge that gets matched)"
cross_refs:
  - PROTOCOL
  - DEVELOP
  - INDX
  - CONSTITUTION
  - VOCABULARY
spine: "[[INDX_FUNNEL]] — this atom governs the Matching + Allocation section (★ circle, surplus, BU ownership)"
sections:
  - id: "§1"
    title: "The Intent Inversion"
    audience: [board, management, staff, community]
    depth: 0
    summary: "Intent exploited → protected. The DARWIN Protocol's second inversion: CCP hides individual intent, mutualized matching prevents private extraction, power inverts from intermediary to community."
  - id: "§2"
    title: "The Matching Mechanism"
    audience: [board, management, staff, community]
    depth: 1
    summary: "Five-dimensional matching (flow, knowledge, capital, community, tool). CCP as sole internal counterparty. Friction → surplus → self-acceleration. The three-party value split."
  - id: "§3"
    title: "Protection — No Private Extraction"
    audience: [board, management, staff]
    depth: 1
    summary: "Constitutional rule A9: CCP sole resting counterparty, all member orders market orders, all surplus mutualized. Monopoly is value creation, not rent extraction."
  - id: "§4"
    title: "The Three Circles"
    audience: [management, staff, community]
    depth: 1
    summary: "e (providers/processors — credibility), X (seekers — confidence), ★ (matching — the operator). Impact hierarchy: single-circle = linear, cross-circle = multiplicative, all-three = exponential."
  - id: "§5"
    title: "The ★ Transition — × Becomes ^"
    audience: [management, staff]
    depth: 1
    summary: "IMR tracks the structural transition from external matching (×) to internal matching (^). At ~35% today [[DATA_SOURCES#imr_platform]]. Community progressively becomes the market. Owning ★ = owning the exponent."
  - id: "§6"
    title: "The Roadmap Compass"
    audience: [management]
    depth: 2
    summary: "S/D/C × e/X/★ decision matrix. Nine cells, each a different reinvestment type. Priority rule: invest where the weakest circle gets the most amplification from the other two. Phase trajectory from launch to maturity."
  - id: "§7"
    title: "Allocation Decision"
    audience: [management]
    depth: 2
    summary: "KPIs per circle and adjacency. Initiative classification template. The three reinvestment vectors (Compound/Source/Develop) and their algebraic effects on the master equation."
  - id: "§8"
    title: "Organization — BUs and Structure"
    audience: [management, staff]
    depth: 2
    summary: "Four BU architecture (Zero, Exchange, Prop, Retail Broker). Market risk dividing line. Revenue mapping. Transfer pricing. Post-CIF-transfer economics."
protocol_layer: Logical
protocol_piece: Economy
---

## LLM_SECTION

### §1. The Intent Inversion

```yaml
inversion: 2
transformation: "Intent exploited → Intent protected"
level: Community
dimension: "A_i (intent asymmetry)"
mechanisms: "P4 (Matching) + A9 (no private extraction) + A14 (power inversion)"
market_failure_resolved: "Moral hazard (Holmström 2016)"
metric: "IMR (Internal Matching Rate)"
```

In extractive markets, the intermediary sees your intent before anyone else. That visibility is monetised: front-running, information selling, toxic flow routing. The spread you pay is the price of your intent being visible to someone whose incentive is to exploit it.

The DARWIN Protocol's second inversion makes intent structurally invisible. The CCP (Central Counterparty) is the sole resting counterparty inside the internal book. Every member order is a market order — no member places limit orders internally. The CCP absorbs all flow, nets what can be netted, and routes overflow to external markets. No individual member's intent is ever exposed to another member or to any entity with an incentive to exploit it.

This is not a policy. It is architectural. The matching engine cannot be configured to expose intent — the option does not exist. A14 (power inversion) means the venue IS the community. The entity that controls matching has no incentive to extract because its surplus is constitutionally reinvested (A5). The operator's interest and the community's interest are identical.

**The result:** Information PROTECTED at the community level. Every dimension of P0 (information asymmetry) that operates through intent — moral hazard, adverse selection in execution, toxic flow — is resolved by making the matching mechanism a mutualized utility rather than an extractive intermediary.

**Electron detail:** [[PHENOTYPE--matching-engine]] (CCP mechanics), [[PHENOTYPE--synthetic-capital]] (synthetic vs live capital architecture)

---

### §2. The Matching Mechanism

```yaml
step: "Trust chain Steps 3-4 (formerly MECHANISM)"
equation: "X(t+1) = X(t) × (1 + e) + ΔC + Nτ"
dimensions: 5
surplus_driver: "Friction eliminated by trust = surplus generated by matching"
```

#### What Gets Matched

Matching operates across five dimensions — not just trade flow with trade flow:

| Dimension | What matches | P0 eliminated | Example |
|-----------|-------------|---------------|---------|
| **Flow** | Buy with sell (internal netting) | Execution cost, market impact | the internal book CCP absorbs all flow, nets internally |
| **Knowledge** | Track records with learners | Education cost, discovery cost | 100K records available to members via P5 |
| **Capital** | Edge with confidence | Access cost (alpha-constrained ↔ AuM-constrained) | INDX allocates capital to certified credibility |
| **Community** | Members with members | Coordination cost, network building | Sourcing rails, hackathons, member brokers |
| **Tool** | Raw signal with processing | Development cost, integration cost | Signal processors refine provider edge |

Every match eliminates friction between parties who would otherwise pay a middleman or go without. The total "spread" = the total friction cost imposed by the absence of trust across ALL these dimensions.

#### How Surplus Forms

Collective credibility (the e circle's output — see [[DEVELOP]]) attracts outside confidence (ΔC). Capital flows to certified skill, not to marketing. When members perform, confidence is honoured (P2). When they don't, trust is destroyed. This is Step 3 of the trust chain: `P3 = P1 × P2`.

Three sources grow the trust stock simultaneously:

| Source | Driver | Type |
|--------|--------|------|
| X(t) × (1+e) | Organic compounding at rate e | Endogenous — edge compounds the existing stock |
| ΔC | New confidence attracted by proof | Exogenous — closes the credibility-confidence gap |
| Nτ | Membership surplus (N × fee − wholesale cost) | Community self-funding |

Step 4 turns matching into surplus. The matching engine runs as a **two-stroke extraction pump** ([[PROTOCOL]] §6.1). Stroke 1 (internal matching inside the internal book) saves the spread and distills the residual — individual member intent is destroyed by netting before anything crosses the A9 boundary. Stroke 2 (overflow) funnels the netted, member-anonymized aggregate conviction outward; distilled edge extracts P&L from the external rent-extractor layer and mints continuous external credibility via T42. Savings (Stroke 1) + extraction P&L (Stroke 2) + credibility mint (Stroke 2's T42 surface) = joint pump output = surplus. Surplus split fairly:

| Party | Contribution | Reward |
|-------|-------------|--------|
| Member | Edge (trading, educating, processing) | Member share of performance fee |
| Investor | Confidence (capital) | Returns on investment |
| Venue/community | Rails + method + economy | Take rate → reinvested wherever it mints the most trust |

The venue IS the meritocracy. Its surplus is not extracted — it is reinvested per A5. Credibility by default, funnel when that's the bottleneck.

**The provider share is continuous in originality (T59).** The member share is not a flat tier — it is a monotone function of the strategy's originality: `share_provider = s_min + (s_max − s_min) · g(O)`, with `g: [0,1] → [0,1]` monotone, `g(0) = 0`, and the reference-originality anchor `g(O_ref) = 0.75`. Capacity is the per-strategy IMR lever — every absorbed Cap unit is a unit of overflow reclaimed — which is why INDX-with-capacity is the per-strategy compass aligned with the credibility-optimal-IMR (70–85%) mission KPI.¹ Flat tiers would violate P6 when originality is continuous: the framework prices novelty in proportion to its scarcity, not in step functions. Formal derivation: [[CONSTITUTION]] T59.

---

¹ *Capacity-IMR coupling.* Cap deployed internally directly raises BookIMR; INDX-with-capacity is therefore the per-strategy compass aligned with the credibility-optimal-IMR (70–85%) mission KPI.

When e > 0 and reinvestment rate r > 1: the system is supercritical. Self-accelerating. Surplus funds better matching, which generates more surplus.

**Electron detail:** [[PHENOTYPE--matching-engine]] (the internal book), [[PHENOTYPE--dataset]] (P5 as trust→edge vehicle, T6)

---

### §3. Protection — No Private Extraction

```yaml
constitutional_rule: A9
enforcement: "Design principle — enforceable via smart contract (binary: no non-CCP resting orders in the internal book)"
scope: "Microstructure level (internal matching) + surplus level (reinvestment)"
```

The mutualized monopoly is the structural guarantee that matching serves the community, not an intermediary. Three interlocking rules enforce it:

**Rule 1 — CCP sole resting counterparty.** Inside the internal book, only the CCP places limit orders. All member orders are market orders. No member can front-run, queue-jump, or capture spread against another member. The spread between internal bid and ask accrues entirely to the mutualized pool.

**Rule 2 — All internal surplus mutualized.** Spread savings from internal matching are not distributed to individual members. They flow to the venue (Prop BU) as constitutive capital. Prop's monopoly on internal market-making IS value creation — competition between internal market makers would dilute surplus and reduce reinvestment. This inverts the extractive logic: in Wall Street, competition → tighter spreads (good for clients, extracted by fastest). In the DARWIN economy, mutualized monopoly → maximum surplus → maximum reinvestment → better for everyone.

**Rule 3 — Surplus constitutionally reinvested (A5).** The venue's surplus is not distributed as dividends to shareholders. It is reinvested wherever it mints the most trust — back into the three circles (§4). The only extraction point in the entire system is e^X (shareholder returns on the network effect), and even that is bounded by the reinvestment rate.

**The test:** Can any single entity extract value from the matching mechanism for private benefit? If the answer is ever yes, A9 is violated. The CCP design makes the answer structurally no — not "probably not" or "we choose not to," but "the architecture does not permit it."

**Electron detail:** [[PHENOTYPE--prop-bu]] (Prop as CCP balance sheet, dual identity), [[CORRUPTION-RESISTANCE]] (extraction resistance analysis)

---

### §4. The Three Circles

```yaml
circles:
  e:
    name: "Providers + Processors (Edge)"
    primitive: P1 (Credibility)
    rate: dC/dt
    verb: Develop
    constraint: "AuM constrained — have edge, can't access capital"
    roles:
      provider: "Sources raw edge: trader, signal originator, data contributor"
      processor: "Refines edge: signal processor, educator, tool builder"
  X:
    name: "Seekers (Confidence)"
    primitive: P2 (Confidence)
    rate: dK/dt
    verb: Honour
    constraint: "Alpha constrained — have capital, can't find genuine edge"
  star:
    name: "Matching (the Operator)"
    primitive: P4 (Matching)
    metric: IMR
    role: "Not a third party — the mechanism by which e and X interact"
    key_insight: "★ external (Wall Street) = × operator. ★ internal (mutualized) = ^ operator."
```

**The three circles are not three independent optimization targets.** They are three views of one structural change: internalize ★. When ★ is external, the formula reads `e × X` (linear, leaky). When ★ is internal, it reads `e^X` (exponential, self-reinforcing). The × → ^ transition simultaneously reverses information flow (up not out), money flow (to merit not extractors), and evolutionary flow (directed not blind). IMR tracks all views with one number. See [[PROTOCOL]] §1 "The Name as Roadmap."

**Spatial + Temporal:** The three circles are the **spatial view** — a snapshot showing where edge, matching, and trust sit relative to each other at any moment. The four evolutionary forces (V=Variation, S=Selection, I=Inheritance, P=Propagation) are the **temporal view** — how the system advances through cycles. The **spiral** is both views unified: each V→S→I→P cycle tightens the circles toward concentricity. Conservation (C) governs from outside — ensuring the spiral tightens toward merit, not extraction. See [[PROTOCOL]] §1 "The Spiral," [[CONSTITUTION]] §Force-Axiom Mapping.

Every initiative, every investment, every EUR of surplus touches one, two, or three circles. The number of circles touched determines the return profile:

#### Impact Hierarchy

| Circles touched | Type | Description | Return profile |
|----------------|------|-------------|----------------|
| **One** | LINEAR | Scale effects — supply-side, per-user improvements | Necessary infrastructure. Diminishing marginal returns. |
| **Two** | MULTIPLICATIVE (e×X) | Cross-circle effects — the product, not the sum | Trust minted (P3 = P1 × P2). Surplus may still leak to external ★. |
| **Three** | EXPONENTIAL (e^X) | All feedback loops close — double recurrence activates | Every circle causes the other two to improve. Self-sustaining. |

**Single-circle examples:** Better risk engine (e), cheaper rails (★), compliance cost spreading (★). Scale effects — necessary but capped.

**Two-circle examples:** INDX track record → institutional pipeline (e×X), dataset enrichment from matching (e×★), PB+SMA infrastructure removing balance sheet barrier (X×★). Trust minted, but surplus may leak.

**Three-circle examples:** Protocol network — member brokers bring edge + capital + flow simultaneously (e×X×★). Open Trust Phase 0 + PB+SMA + hackathon. Every circle causes the other two to improve. This is where e^X lives.

**Why exponential:** e improvement → attracts X (credibility begets confidence). X improvement → enables ★ (more capital → more matching density). ★ improvement → surplus → reinvested into e (richer P5 → better tools). ★ improvement → proves system works → attracts more X. The double recurrence (α, β > 0) means trust begets BOTH edge AND confidence. Both sides of e^X are endogenous to trust.

**Electron detail:** [[PHENOTYPE--open-trust-roadmap]] (three-circle activation), [[PHENOTYPE--sourcing-rails]] (e circle expansion)

---

### §5. The ★ Transition — × Becomes ^

```yaml
insight: "★ is the operator, not the operand. Its ownership determines × vs ^."
current_imr: "~35% (April 2026) [[DATA_SOURCES#imr_platform]]"
trust_equation_decomposition:
  internal: "dT_community/dt = IMR × [(dC/dt)·K + C·(dK/dt)]"
  external: "dT_external/dt = (1-IMR) × (dC/dt)·K"
  endgame: "As IMR → 1: Community = Market. × → ^."
```

IMR (Internal Matching Rate) is the single variable controlling the structural transition. It measures what percentage of flow is matched inside the community vs leaked to external market makers.

| IMR | ★ State | Operator | Surplus destination | Trust trajectory |
|-----|---------|----------|--------------------|--------------------|
| 0% | Fully external (Wall Street) | × | Extracted by LPs | e×X (linear, capped) |
| ~35% (today) [[DATA_SOURCES#imr_platform]] | Partially internal | × with recycling | Split: community + LPs | Between e×X and e^X |
| 60% | Mostly internal | → ^ | Mostly recycled. Overflow = distilled alpha. | Approaching e^X |
| 85% | Nearly absorbed | ^ | Almost fully recycled | e^X active |
| 100% | Community IS the market maker | ^ | 100% reinvested. P0 = 0. | Concentric. Mission achieved. |

**The key insight:** The mutualized market maker is not "cheaper matching." It is the structural transition from × to ^. Owning ★ = owning the operator = owning the exponent. When ★ is external, Wall Street captures the spread and extracts it. When ★ is internal, the community captures the spread and reinvests it. Same flow, same members, same edge — the only difference is who operates the × sign.

**★ internalization is one change with many consequences.** It reverses the information flow (intent protected → information flows UP through CREATE→PROTECT→LIBERATE instead of OUT to extractors), the money flow (surplus rewarded to merit instead of extracted by intermediaries), and the evolutionary flow (inheritance becomes active — INDX compounds through the dataset — instead of passive). The INDX funnel's two vectors — development (information flows up) and reward (value flows down) — are the two flow directions that ★ internalization enables. Both leak when ★ is external. Both circulate when ★ is internal. See [[PROTOCOL]] §1.

**IMR rising = the spiral tightening.** Each V→S→I→P cycle raises IMR: new edge enters (V), the risk engine and matching select by merit (S), surplus and dataset compound (I), proof attracts outside confidence (P). The next cycle starts tighter because Inheritance transfers accumulated trust. The IMR trajectory IS the spiral trajectory — both track the same convergence, one numerically, one geometrically. See [[PROTOCOL]] §1 "The Spiral."

**Step 5 — the endgame.** As N grows → internal matching rate rises → spread accrues → community increasingly self-matches → needs external market less. The community becomes the market. All speculation open to everyone. Merit is all that remains.

The exponential has four components firing simultaneously:
1. **Edge compounding** — organic performance compounds the trust stock (e dimension)
2. **Network effect** — as N grows, internal matching rises, spread accrues (interpersonal: edge × N)
3. **Method evolution** — rails incorporate all past lessons, propelled by current experiments, for future users (intertemporal: edge × t)
4. **Dataset feedback loop** — P5 (100K track records) IS trust in actionable form. It begets edge (members learn, risk engine trains, variometer drives selection) AND confidence (proof attracts capital). Both sides of e^X endogenous to trust. The double recurrence.

**Electron detail:** [[PHENOTYPE--protocol-transition]] (progressive shedding), [[PHENOTYPE--current-state]] (operational state, April 2026)

---

### §6. The Roadmap Compass

```yaml
framework: "S/D/C × e/X/★"
dimensions: "3 vectors (Source/Develop/Compound) × 3 circles (e/X/★) = 9 cells"
priority_rule: "Invest where the marginal EUR creates the most cross-circle value"
current_compass: "Points to ★ (~35% IMR [[DATA_SOURCES#imr_platform]] = bottleneck, e×X product is largest)"
```

The operational synthesis. §1-§5 define what the circles are and why they matter. This section turns that into a computable decision.

#### The 3×3 Matrix

| | **e (Edge)** | **X (Confidence)** | **★ (Matching)** |
|--|---|---|---|
| **Source** | DarwinIA Silver, trader marketing, hackathons | INDX funnel, institutional pipeline, allocator onboarding | Member broker onboarding, new flow connectors |
| **Develop** | DarwinIA Gold, risk engine, signal processing | Investor tools, reporting, trust attestations | Exchange infra, IMR optimization, toxic flow detection |
| **Compound** | Prop deployment on proven edge (ROSC) | External AuM scaling, fee income growth | INDX overlap on ITM synthetic (replaces external hedge) |

Each cell is a different type of investment. Every cell is a different path to higher IMR. The compass points to the cell with the highest marginal cross-circle value per EUR — which, because the three circles are views of one structural change ([[PROTOCOL]] §1), is equivalent to asking: "which path raises IMR fastest?"

#### The Priority Rule

```
Economy output = e × X × ★_eff   (where ★_eff = BookIMR, 0 to 1)

Marginal value:
  ∂/∂e = X × ★     (value of more/better edge)
  ∂/∂X = e × ★     (value of more capital)
  ∂/∂★ = e × X     (value of better matching)

The HIGHEST marginal value → the WEAKEST circle.
The other two amplify any improvement in the weakest.
```

**April 2026 state:** e = strong (100K+ records [[DATA_SOURCES#track_records]], 4,811 DARWINs). X = growing (~€48M INDX [[DATA_SOURCES#indx_aum]], institutional pipeline opening). ★ = ~35% BookIMR [[DATA_SOURCES#imr_platform]], 65% leaks external. **★ is the bottleneck.** ∂/∂★ = e × X = strong × growing = largest product. Compass points to ★.

Priority cells: (1) Compound(★) — prop ROSC, INDX overlap → fast. (2) Develop(★) — exchange infra, IMR improvement → durable. (3) Source(★) — diverse flow sources → scalable.

**Self-correcting:** If ★ improves to 60% but X stays at €48M, ∂/∂X = e × ★_improved becomes highest → compass rotates to X → shift to Source(X) and Compound(X). No strategic pivot required. The data tells you when to shift.

#### Phase Trajectory

| Phase | Priority | S/D/C mix | Rule |
|-------|----------|-----------|------|
| Launch | Source all circles | S-heavy | Invest where there's nobody |
| Growth | Source the missing circle + Develop the weak one | S+D balanced | Invest where the gap is widest |
| **Activation (NOW)** | **Compound ★ + Develop ★** | **C+D balanced** | **Invest where ★ leakage is greatest** |
| Maturity | Compound dominates | C-heavy | Maintain ★, harvest returns |

**The α-dominance regime (honest version):** As BookIMR rises, α-loop reinvestment progressively dominates external capital flow — the fraction of trust minted that funds further matching grows continuously. Current: ~35% [[DATA_SOURCES#imr_platform]]. The regime where internal matching surplus funds further matching is an empirical question, not a formal threshold. Density-threshold formalization is flagged as the T42 verification program — see [[PHENOTYPE--t42-verification]]. No "tipping point" claim until the data proves one.

#### The VBM Connection

The VBM Source/Develop/Compound allocation IS a circle investment decision:

| VBM Vector | Circle(s) | What |
|-----------|-----------|------|
| Source budget | e (expansion) | New members, track records, hackathons |
| Develop budget | e × ★ (deepening) | Better tools, dataset, matching intelligence |
| Compound budget | X × ★ (expansion) | More capital entering, PB+SMA, institutional pipeline |
| Infrastructure | ★ (single circle) | Matching engine, clearing, custody, compliance |
| Protocol network | e × X × ★ (exponential trigger) | Member brokers who bring edge + capital + flow |

**DarwinIA S/D/C split:** Silver = Source(e) — broad discovery, grow provider pool. Gold = Develop(e→★) — develop proven edge to INDX-grade, liquify exchange. They serve different vectors despite both being "DarwinIA."

**Electron detail:** [[GENOTYPE--vbm]] (formal waterfall), [[GENOTYPE--linear-network]] (scale vs network decomposition)

---

### §7. Allocation Decision

```yaml
framework: "Three reinvestment vectors ([[INDX]] §7) + KPIs per circle (absorbed into §4-§6 of this file)"
vectors:
  compound: "X(t) × (1+e) — the multiplicative term. Dominates at maturity."
  source: "Nτ + higher IMR → higher effective e. Dominates at launch."
  develop: "Increases e(X) — the rate itself. Deepest lever. Second derivative of X."
allocation_rule: |
  Compare marginal trust minted per unit of confidence across the three vectors.
  When ΔN/N > e → Source mints most trust (growth-oriented)
  When e needs ↑ → Develop mints most trust (rate improvement)
  When gap ≈ 0 → Compound mints most trust (organic)
```

#### The Three Vectors (Algebraic Effects)

Each vector affects a different term in the master equation `X(t+1) = X(t) × (1+e(X)) + ΔC(X) + Nτ`:

**Compound** amplifies X(t) × (1+e). Organic engine. When the gap is closed and growth is purely organic, this is all that remains — steady-state compounding at rate e. Maps to: Prop deployment (ROSC), AuM scaling, fee income growth.

**Source** amplifies Nτ directly (more members = more subscription surplus) and raises effective e via matching density (more members → higher IMR → more spread saved). [[DEVELOP]] constrains this: self-selection ensures Source efficiency = quality × quantity. Maps to: DarwinIA Silver, hackathons, member broker onboarding. **Data-source acquisition** (Amendment G — matching surplus buys every source that demonstrably reduces P0) is a Source vector: at the planetary limit, every person is a data source (Amendment H), so Source extends to funding any data acquisition that plugs new sensors into the brain.

**Develop** amplifies e(X) — the rate itself. Better education, risk engine, rails, Open Trust infrastructure. Raising the rate raises every future multiplicative cycle. This is the second derivative of X. Maps to: DarwinIA Gold, signal processing, sealed enclave.

The S-curve is prescribed, not just described. The allocation decision determines which phase the system is in and how fast it moves through phases.

#### Four injection channels — allocation IS monetary policy (20 Apr)

The three reinvestment vectors + the fourth (Process) map directly onto DWX→INDX injection channels. The allocation decision is monetary policy — who gets injected reserves when:

| Vector | Injection channel | Five Actions | What DWX→INDX funds |
|---|---|---|---|
| Compound | — (DWX stays) | — | Reserves held; no injection |
| Source | DWX → INDX (Source) | SOURCE | Referral rewards, partner credits, data-source acquisition |
| Develop | DWX → INDX (Develop) | DEVELOP | Tool rewards, mentoring credits, risk-engine contributions |
| Process | DWX → INDX (Process) | PROCESS | Refines the entire ★-center pump — (i) matching (min info + capital leakage at Stroke 1), (ii) alpha overlays (max risk-adj extraction, min hedge cost at Stroke 2). Funds matching-engine engineering, risk-engine recalibration, intent-shielding mechanics, processor members (CrunchDAO etc.). Improves overflow yield. **Processor funding** (Amendment G — matching surplus pays processor members whose intent-change signals measurably improve allocation, T42-verifiable) is a Process vector: processors are the gradient sensors of the investment channel; INDX is the gradient actualizer; surplus pays the sensors. |

CONTRIBUTE earns INDX directly through trading profits — no injection needed. The injection rate IS the S-curve derivative (§5 ★ Transition): HIGH in the linear phase, decreasing as trading profits dominate in the exponential phase, at maintenance in the plateau. Injection floor is a governance parameter (Patagonia play) — extraction capped by DWX decay. Canonical: [[DARWIN_ECONOMY_V01]] §10, [[satellites/SETTLEMENT-ARCHITECTURE]] §6.

**v12.1 sharpening:** injection via these 4 channels is a **cross-currency conversion** (burn DWX, mint INDX), not a transfer — DWX and INDX are different currencies. The reverse direction is member graduation (burn INDX, mint DWX on sustained contribution). Together these form the bidirectional meritocratic currency exchange.

**Take-rate ceiling:** aggregate platform take-rate bounds shareholder compounding; any super-profit above ceiling must reinject via these 4 channels. Canonical: [[DARWIN_ECONOMY_V01]] §10.2.

The forces, channels, and actions form a closed loop: V (SOURCE + DEVELOP) → S-pump (PROCESS) → Inheritance loopback → P reinvestment (COMPOUND) → back to V. The three compounding rates matched to contribution type (DWX e^X / INDX e×X / investors market+alpha) enforce Capital-vs-Merit Separation at the compensation layer. See [[DARWIN_ECONOMY_V01]] §10.1 (forces ↔ channels ↔ actions) and §10.2 (three compounding rates + Capital-vs-Merit Separation).

#### KPIs Per Circle

**e Circle — Credibility Stock & Flow:**
N (active track records), aggregate Quote, dC/dt (new credibility rate), 90-day Quote slope distribution, source funnel conversion, dataset records (P5).

**X Circle — Confidence Stock & Flow:**
Total AuM allocated, dK/dt (new allocation rate), institutional pipeline, INDX vs benchmarks, PB/SMA connections, capital velocity.

**★ Circle — Matching Density & Efficiency:**
IMR, spread capture (€), matching dimensions active (5), NOP (lower = better netting), overflow ratio (1 − IMR).

#### Adjacency KPIs

**e↔X (Credibility → Confidence):** P3 = INDX minted, dT/dt (trust growth rate), DARWINs with outside capital, credibility→confidence conversion correlation.

**e↔★ (Edge → Dataset → Edge):** Dataset enrichment rate, selection improvement (T18), T6 channels active (5: inheritance, matching intel, risk training, selection, community).

**X↔★ (Confidence → Execution):** Execution quality (slippage), balance sheet barrier (binary — PB+SMA resolves), independent NAV verification, PB integration count.

**System KPIs (e^X):** d²T/dt² (trust acceleration), α coefficient (trust→credibility feedback), β coefficient (trust→confidence feedback), IMR trajectory slope, surplus reinvestment rate, protocol network nodes.

#### Initiative Classification

For every initiative, classify: circles touched, impact type (Linear/Multiplicative/Exponential), P0 adjacency targeted, VBM vector, KPI to measure.

| Initiative | Circles | Impact | VBM | KPI |
|-----------|---------|--------|-----|-----|
| Sourcing Rails hackathon | e | Linear (seeds NE7) | Source | N growth, new integrations |
| PB+SMA setup | X × ★ | Multiplicative (removes barrier) | Compound | PB connections, institutional AuM |
| Sealed enclave | e × ★ | Multiplicative (T10 inflection) | Develop | Dataset dimensions, real-time signals |
| Open Trust Phase 0 | e × X × ★ | Exponential trigger | All three | Protocol nodes, IMR trajectory, d²T/dt² |
| VBM adoption | ★ → e, X | Enabler (surplus recycling) | Governance | Surplus reinvestment rate |
| 4 BU restructuring | All | Enabler (measurement) | Governance | BU-level P&Ls operational |
| Member broker onboarding | e × X × ★ | Exponential | Source + Compound | Flow volume, new DARWINs, IMR |

**T17 applied — current targeting (April 2026):** e↔★ adjacency has most overlap (IMR ~35% [[DATA_SOURCES#imr_platform]], matching works, dataset rich). e↔X has most gap (institutional pipeline near-zero). X↔★ has structural barrier (TTT balance sheet). T17 says: remove the X↔★ barrier (PB+SMA) → institutional X enters → e↔X gap closes → all three fire.

**Electron detail:** [[PHENOTYPE--booster-mechanics]] (Booster/PA/DarwinIA pricing), [[PROP_BOOK_CAPITAL_DEPLOYMENT]] (ROSC formula, Compound vector)

---

### §8. Organization — BUs and Structure

```yaml
principle: "Market risk divides Exchange (flat) from Prop (directional). Axiom grounding validates existence."
test: "Does the line item carry market risk? No → Exchange/Zero. Yes → Prop. Client-facing → Broker."
model: "Two-level: 4 infrastructure BUs (the OS) + N member micro-BUs (the programs)"
```

#### The Four BUs

| BU | Entity | Function | Axiom grounding | Regulatory |
|----|--------|----------|-----------------|------------|
| **Zero** ("The Eye") | TTL | Subscriptions, quote scoring, certification, introductions | P5, A7, T6 | Unregulated |
| **Exchange** ("The Hand") | TSTT | Matches flow (FLAT), constructs INDX, PM, earns spread on internalized flow | A4, A9, T2, T14 | Regulated (dealing + PM) |
| **Prop** | TSV | All DIRECTIONAL risk: synthetic book (Boosters), long prop, hedging/ALM | A5, A9, T21 | Regulated (own account) |
| **Retail Broker** (→ CIF transfer) | Sapiens → TS Europe | Client-facing distribution, KYC, custody | A3, T27 | Regulated (investment firm) |

**BU axiom validation rule:** If a BU doesn't map to axioms → shouldn't exist. If an axiom doesn't map to a BU → either cross-cutting principle or operational gap. All 6 BU pairs pass arm's length independence tests.

#### Revenue Mapping (FY2024)

| BU | Revenue (€K) | Share | Key lines |
|----|-------------|-------|-----------|
| Retail Broker | 6,405 | 51% | Commissions, swap, markup, interest on client funds |
| Zero | 2,683 | 21% | DZ subscriptions + upsells (ex-Boosters) |
| Exchange | 1,863 | 15% | Internalization, perf fees, mgmt fees, services |
| Prop | 1,559 | 12% | Boosters (short synthetic), hedging/ALM |
| **Total** | **~12,511** | | |

#### Prop — The Venue's Balance Sheet

Prop holds two simultaneous roles: (1) **Constitutive** — CCP's balance sheet; Matching Rails doesn't function without Prop's capital. (2) **Customer** — pays Data Rails for data, pays Matching Rails for execution. The dual identity creates arm's length transfer pricing that validates the 4 BU decomposition.

Five capital sources: venue share (25% pfees, T21), internal matching surplus (Stroke 1 of the extraction pump — spread in the internal book, A9), carry income (overnight NOP financing), overflow P&L (Stroke 2 of the extraction pump — distilled aggregate conviction deployed against external rent-extractor layer; see [[PROTOCOL]] §6.1), membership surplus (Nτ).

Three deployment vectors per A5: Compound (deploy as CCP at rate ≥ e), Source (fund distribution expansion via T27), Develop (fund better rails). VBM hurdle rate (e × X) determines active deployment vs organic compounding.

**A9 through Prop lens:** Competition between internal market makers is a BUG — dilutes surplus, reduces reinvestment. Prop's mutualized monopoly IS value creation. Three profit levers: exchange cost arbitrage (member vs non-member spread), contract denomination arbitrage (micros vs standards), internal matching rate (netting). As N grows, Lever 3 dominates — the virtuous cycle.

#### Post-CIF-Transfer Economics (FY2024 basis)

| | Today | Post-Transfer |
|--|-------|--------------|
| Revenue | €12.5M | €11.5M |
| Costs | €13.3M | €8.0M |
| **Operating Profit** | **−€0.8M** | **+€3.5M** |

Darwinex keeps 85% of revenue from clients Zero introduces (intro fees). Sheds ALL broker costs (compliance, KYC, CASS, client money, MT licenses, support). The transfer alone swings group from loss to +€3.5M operating profit.

**CIF transfer preserves flow routing** — Exchange becomes liquidity provider to partner brokers. More broker nodes = higher aggregate IMR (network effect). Retail traders have 67.9% IMR vs investors at 26.1%. Retail generates 24.6% of volume but 44.4% of all internalized volume.

**The one-liner:** "Darwinex is an operating system that runs N meritocratic micro-businesses on shared rails. Each keeps what it earns. We capture and reinvest the network effect."

**Electron detail:** [[PHENOTYPE--business-units]] (full BU architecture, revenue mapping, comparable multiples), [[PHENOTYPE--prop-bu]] (Prop P&L, capital deployment, market making economics), [[PHENOTYPE--group-structure]] (legal entities, cap table), [[REGULATORY-ARCHITECTURE]] (regulatory architecture), [[PHENOTYPE--pl-data-sources]] (P&L data source mapping)

---

## HUMAN_SECTION

### What REWARD Owns

REWARD is the operational centre of the DARWIN Protocol. Where [[PROTOCOL]] defines the governing logic and [[DEVELOP]] builds the edge, REWARD answers: how does the community turn that edge into collective trust, protect it from extraction, and decide where surplus gets reinvested?

### The Core Mechanism

The DARWIN economy matches participants across five dimensions — not just trade flow, but knowledge, capital, community, and tools. The CCP (Central Counterparty) is the sole resting counterparty inside the internal book. No member can front-run another. All internal surplus is mutualized and reinvested. This is the intent inversion: the intermediary's historical power to exploit intent is architecturally eliminated.

### Three Circles, One Compass

Every initiative touches one, two, or three circles: e (edge providers), X (capital seekers), ★ (matching operator). Single-circle = linear returns. Cross-circle = multiplicative. All three = exponential. The roadmap compass — a 3×3 matrix of Source/Develop/Compound × e/X/★ — points to the cell with the highest marginal cross-circle value. Today (April 2026), that's ★ at ~35% IMR [[DATA_SOURCES#imr_platform]]. The compass auto-corrects as circles improve.

### The ★ Transition

IMR tracks the structural shift from external matching (Wall Street captures the spread) to internal matching (community reinvests the spread). At 100% IMR, the community IS the market. The mutualized market maker isn't cheaper matching — it's the transition from × to ^. Owning ★ = owning the exponent.

### Organization

Four BUs execute the mechanism: Zero (certification, unregulated), Exchange (flat matching, regulated), Prop (directional risk, venue balance sheet), Retail Broker (client-facing, transferring to CIF partner). Post-transfer, the group swings from −€0.8M to +€3.5M operating profit on FY2024 numbers — before any Exchange/Prop growth.

### For the Board

Read §1-§3: what protects intent, how matching works, why extraction is structurally impossible. The compass (§6) turns this into investment decisions. Every initiative maps to a cell. The four board asks activate progressively more circles: Ask 1 (VBM) enables surplus recycling. Ask 2 (BU restructuring) makes circles measurable. Ask 3 (hackathon) expands e. Ask 4 (Open Trust) activates e×X×★.

---

## See Also

- [[PROTOCOL]] — the governing synthesis (P0, three inversions, trust equation)
- [[DEVELOP]] — edge that gets matched (credibility inversion, member development)
- [[INDX]] — trust output (the product of matching credibility with confidence)
- [[CONSTITUTION]] — formal logic (11 axioms, 68 theorems, 21 proofs)
- [[VOCABULARY]] — audience-appropriate phrasing
- REINVESTMENT-MAP — ABSORBED into §4-§7 of this file (§8-§11 remains in _archive/ as worked examples)
- [[BOARD_DECK_FRAMEWORK]] — §0 visual primitive, §2-§3 scale/network effects, §6 VBM
- [[CONSTITUTION]] — T17 (reinvestment targeting), A5 (surplus compounds trust)
- [[PROP_BOOK_CAPITAL_DEPLOYMENT]] — Compound(★) operational layer
