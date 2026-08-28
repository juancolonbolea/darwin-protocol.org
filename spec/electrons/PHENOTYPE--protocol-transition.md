---
language: dual
type: electron
status: CANONICAL
last_updated: 2026-04-06
atom: PROTOCOL
audience: [management]
orbit: 1
owns: |
  Corporate structure for the protocol transition. Org design, holding-as-client model,
  BU definitions, progressive shedding, strategic break-even, DWX:INDX convergence
  narrative, shareholder exit mechanism, Ripple deal outline.
  Source: Juan Colón Session 5, 6 Apr 2026 (4 iterations in 90 minutes).
cross_refs: [CONSTITUTION, DEVELOP, REWARD, PHENOTYPE--institutional-confidence, PHENOTYPE--business-units, PHENOTYPE--prop-bu, OFFSITE_PLAN, TOKEN-HIERARCHY]
theorems: [T35, T36, T37, T38, T39, T40]
protocol_component: [Settlement Layer]
protocol_layer: Application
protocol_piece: Protocol
---

## LLM_SECTION

```yaml
# ═══════════════════════════════════════════
# § identity — What Darwinex becomes
# ═══════════════════════════════════════════

endgame_sentence: "A member-owned prop that owns a trust-minting protocol."
  spiral_view: |
    Each phase of the protocol transition = one spiral turn at the corporate level.
    Phase 0 (broker cage) = Variation funded inside constraints.
    CIF transfer = the Selection gate (stop extracting, start minting).
    Protocol transition = Inheritance compounding (the company standing on accumulated trust).
    Endgame = Propagation complete (the protocol IS the market).
    The corporate journey IS the company's own V→S→I→P cycle.
    See [[CONSTITUTION]] §Force-Axiom Mapping, [[PROTOCOL]] §1 "The Spiral."
  governing_change: |
    One structural change: internalize ★. The protocol transition IS the ★ internalization
    executed as a corporate journey. Phase 0 (broker cage) funded the inversions. The CIF
    transfer is the company's meritocratic gate — shedding the cage raises the ceiling on IMR.
    Everything after the gate is compounding. The name D.AR.WIN.X encodes the before/after:
    Detect And Route With Nothing → Develop And Reward With INdX. IMR tracks the transition.
    See [[PROTOCOL]] §1 "The Name as Roadmap", [[CIF_DEAL_FRAMEWORK]] "Strategic Framing."

nine_words:
  member_owned: "The people who create value (edge) own the entity that compounds it. Meritocratic transition fully realized: user → member (first INDX mint) → owner (DWX). The 75/25 split (governance parameter, T21) is an ownership structure, not just a fee structure."
  prop: "Holding invests its own capital using its own method. Risk-on by default. Not an asset manager (that's PM — managing others' money). Not a broker (that's partners). Sovereign capital compounding edge."
  protocol: "The DARWIN rails. The method. The matching logic. The risk engine. The dataset. Everyone else rents the rails. The protocol is what makes everyone else's business more valuable."

# ═══════════════════════════════════════════
# § corporate_structure — Holding + 2 BUs
# ═══════════════════════════════════════════

structure:
  holding:
    name: "Darwinex Group (Holding)"
    role: "Client of Exchange — PRIMUS INTER PARES. Internal VC. Capital allocator."
    relationship_to_exchange: "Professional client. NOT parent-operator. Exchange deals as principal with Holding like any other client."
    market_making: "Mutualised market maker — takes other side of overflow flow, captures netting surplus. Market maker of record ONLY for retail flow."
    prop_book: "Risk-on by default. Capital stays invested in edge. Reallocation OUT of prop is the active decision."
    reinvestment_cascade:
      priority_1: "DARWIN Rails (BU2: Method R&D, platform dev, dataset)"
      priority_2: "Exchange working capital (BU1: regulatory buffers)"
      priority_3: "Prop book (DEFAULT — capital stays invested until moved)"
    berkshire_model: "Can sell stakes in individual BUs. Can give up operational roles to partners. Keeps: capital allocation authority, prop book, IP ownership, PM permission."
    partners: "Arb (clearing), Ripple (PB, custody, FX, market-making)"

  bu1_exchange:
    name: "Exchange (TSTT, UK, FCA)"
    role: "Client business. Faces ALL clients equally — including Holding."
    fca_permissions: "Dealing as principal + managing investments"
    clients:
      - "CIF partner (B2B, retail distribution) — wallet revenue"
      - "Institutional investors (PM, managed accounts) — brain revenue"
      - "Holding (primus inter pares, mutualised market maker)"
      - "Future franchise nodes (B2B, like CIF)"
    does:
      - "Issues DARWINs (bilateral swaps to CIF partners)"
      - "Issues Boosters (DZ Upsells — €7.9M revenue)"
      - "Runs INDX product (institutional, PM role, off-BS via give-up)"
      - "Receives allocation signals from BU2 (DARWIN Method)"
      - "Matches flow internally across ALL clients"
      - "Overflow → Holding takes the other side"
    revenue: "Spreads + commissions (wallet) + PM + perf fees (brain) — licensing paid TO BU2"
    balance_sheet: "Client-facing positions. Overflow offloaded to Holding."

  bu2_method:
    name: "DARWIN Method"
    role: "The brain. Pure IP. Zero capital. Zero regulatory burden."
    does:
      - "Risk engine → produces Quote (attestation)"
      - "Selection engine → picks winners"
      - "Combination engine → constructs INDX, strategy factory"
      - "Signal Processor pipeline (sealed enclave)"
      - "Outputs allocation signals to BU1 via API"
    revenue: "IP licensing fees from BU1. Eventually: licensing to third parties."
    balance_sheet: "Zero."
    openable: "T30: methods safe to open. Dataset is the moat."

  bu3: "Not needed now. Add when 3+ distribution nodes or INDX AuM justifies standalone."
  sapiens: "Shut down. CySEC license surrendered. EU retail → CIF partner."

# ═══════════════════════════════════════════
# § holding_as_client — Why this design works
# ═══════════════════════════════════════════

holding_as_client:
  insight: "Holding is a CLIENT of Exchange, not an operator alongside it."
  why_it_works:
    regulatory: "Exchange deals as principal with ALL clients. Holding = professional client. No intragroup market-making exemption needed. No separate permission."
    symmetry: "CIF partner, institutional investors, Holding, future franchisees — all clients. Same rails. Same interface."
    economics: "Mutualised market maker = venue's economic function. Holding takes residual flow, provides liquidity, earns netting surplus. Surplus IS the system's profit."
    prop_default: "Capital stays risk-on (invested via prop book) unless actively reallocated. Darwinex identity in corporate form."
    scalability: "Future nodes trivial. Add franchisee → it's a client. Holding's market-making benefits all (higher IMR)."
    darwin_economy: "Members (clients) contribute flow → venue (Holding) matches → surplus reinvested → 75% to members (better execution), 25% to venue. Same equation, corporate structure."

# ═══════════════════════════════════════════
# § market_maker_retail_only
# ═══════════════════════════════════════════

market_maker:
  key_insight: "Market maker of record is ONLY needed for retail flow."
  retail: "Someone takes the other side of CFDs/swaps (dealing as principal). Currently TSTT/Holding. Balance-sheet-heavy."
  institutional: "NO market maker needed. PM sends allocation → exchange fills → give-up to investor's FCM. Pure brain. Zero balance sheet."
  prop: "Holding trades on own account via any FCM. Not market-making — it's prop investment."
  implication: "If a partner takes the retail market-maker role, TSTT drops to 'managing investments' only. TSTT = pure asset manager. Darwinex = IP company, not broker."

# ═══════════════════════════════════════════
# § role_giveup — What can be externalized
# ═══════════════════════════════════════════

role_giveup_matrix:
  - role: "Client money / CASS"
    today: TSTT
    give_to: "CIF partner, franchise nodes"
    darwinex_keeps: "Rail rental"
    status: "IN PROGRESS"
  - role: "Market maker of record (retail)"
    today: TSTT
    give_to: "Ripple / balance-sheet partner"
    darwinex_keeps: "Rail rental + data"
    status: "DESIGNABLE"
  - role: "Clearing / FCM"
    today: "PrimeXM/Saxo"
    give_to: "Arb / Ripple"
    darwinex_keeps: "Vendor relationship"
    status: "NEGOTIABLE"
  - role: "PB / custody"
    today: Saxo
    give_to: Ripple
    darwinex_keeps: "Vendor relationship"
    status: "NEGOTIABLE"
  - role: "PM for INDX"
    today: TSTT
    give_to: "NEVER"
    darwinex_keeps: "Core. The brain."
    status: "PERMANENT"
  - role: "Method / IP"
    today: BU2
    give_to: "NEVER"
    darwinex_keeps: "Core. The moat."
    status: "PERMANENT"
  - role: "Prop book"
    today: Holding
    give_to: "NEVER"
    darwinex_keeps: "Core. The thesis."
    status: "PERMANENT"

# ═══════════════════════════════════════════
# § tstt_thinning — Progressive shedding (T38)
# ═══════════════════════════════════════════

tstt_lifecycle:
  today_fat:
    - "Takes client money"
    - "CASS governance"
    - "Client onboarding"
    - "Client-facing ops"
    - "Brokerage compliance"
    - "Dealing as principal"
    - "Managing investments"
    - "Market-making (for Holding)"
    - "PM for INDX"
  target_thin:
    - "NO client money"
    - "No CASS"
    - "No retail clients"
    - "Partners face clients"
    - "Minimal compliance (own-account + PM)"
    - "Dealing on OWN ACCOUNT only"
    - "Managing investments"
    - "Market-making (for Holding)"
    - "PM for INDX"
  key_rule: "TSTT license STAYS with Darwinex. Client money LEAVES. You don't sell the license — you drain it."
  fca_needed_for:
    - "Dealing on own account → Holding's market-making"
    - "Managing investments → PM role (collect fees, buy data for INDX)"
  fca_NOT_needed_for: "Client money. That's what gets shed."

shedding_sequence:
  - step: 1
    what: "CIF partner takes EU retail"
    effect: "Shed retail client money + cost base, keep 85% flow"
    status: "IN PROGRESS"
  - step: 2
    what: "Org split: takes-client-money vs doesn't"
    effect: "Delineate which TSTT activities shed vs stay"
    status: "DESIGNING NOW"
  - step: 3
    what: "Franchise nodes take remaining retail"
    effect: "Each node = more client-money activity leaving TSTT"
    status: "FUTURE (CIF is node 1)"
  - step: 4
    what: "TSTT thins to: market maker + PM"
    effect: "No client money. No CASS. Minimal ops."
    status: "TARGET STATE"
  - step: 5
    what: "Strategic break-even"
    effect: "Rail rental + PM fees + netting surplus covers group cost"
    status: "MEASURING (need Sergio data + Jesús cost decomposition)"

# ═══════════════════════════════════════════
# § strategic_breakeven — THE killer board slide
# ═══════════════════════════════════════════

strategic_breakeven:
  definition: "The AuM + node count at which brain revenue (PM fees + rail rental + netting surplus) exceeds thin TSTT cost base. After this point, the brokerage is optional."
  before_crossing: "Brokerage subsidizes the brain. CIF partner essential."
  at_crossing: "Brain sustains itself. Brokerage is optional."
  after_crossing: "Brokerage is DRAG. Regulatory cost, capital consumption, headcount — all for a business that doesn't compound."
  data_needed:
    - "Current cost decomposition: client-money ops vs own-account + PM (Jesús)"
    - "INDX AuM growth scenarios (Sergio data)"
    - "Rail rental per node (CIF 85/15 as template)"
    - "PM fee projection at target AuM"
  the_slide: |
    X-axis: AuM. Y-axis: Revenue.
    Two lines: wallet revenue (linear, declining post-CIF) vs brain revenue (platform-scalable).
    Crossing point = strategic break-even.
    Before: brokerage subsidizes brain.
    At: brain sustains itself.
    After: brokerage is drag.

# ═══════════════════════════════════════════
# § dwx_indx — The S-Curve as Token Economics (T35-T36)
# ═══════════════════════════════════════════

dwx_indx:
  indx: "e×X — what you EARN. Flow. Trust minted per period. Participation token."
  dwx: "e^X — what you OWN. Stock. Ownership of the protocol that generates ALL future INDX. Ownership token."
  exchange_rate: "DWX:INDX = growth premium on protocol ownership."
  
  scurve_phases:
    founding: "∞:1. No INDX yet. DWX = pure bet. Shareholders own everything."
    exponential: "High ratio, falling. Protocol growing. DWX expensive in INDX terms. Growth premium enormous. Shareholders' equity appreciates fastest HERE."
    convergence: "Falling toward 1:1. Growth slowing. More INDX generated. Members convert INDX → DWX. Ownership transfers."
    maturity: "1:1. Earning INDX IS owning DWX. No premium. Protocol = members = market."

  self_reinforcing: |
    Members convert INDX → DWX (flow → stock). More skin in game.
    More aligned. More edge contributed. More INDX generated.
    Protocol more valuable. DWX appreciates.
    Remaining DWX holders' shares worth more BECAUSE members buying in.
    Ownership transfer ACCELERATES protocol value. Does not dilute.

  mission_as_equation: "When DWX:INDX = 1:1, Darwinex has returned markets to their members. The founding team's exit and the mission's completion are the SAME EVENT."

  visa_analogy: |
    BankAmericard (single company, 1958) → Visa (member-owned network, 1970, Dee Hock)
    → Visa Inc (IPO, 2008). Started as one company. Became member-owned.
    Darwinex: same arc. But stays member-owned at maturity (demutualization would
    destroy the competitive advantage — aligned members = more edge = better market).

# ═══════════════════════════════════════════
# § shareholder_exit — T40
# ═══════════════════════════════════════════

shareholder_exit:
  mechanism: "Shareholders sell DWX during e^X phase (premium still high, trajectory clear)."
  buyers:
    - "Members converting earned INDX → DWX"
    - "Institutional investors buying growth exposure"
  no_ipo_needed: "The INDX:DWX market IS the exit. No PE needed. No trade sale needed."
  timing: "Sell during steep S-curve (DWX:INDX still high, declining). The growth premium is the shareholders' reward for early conviction (T15)."
  deadwood_resolution: "At DWX:INDX = 1, non-contributing holders have no premium to extract (T19 resolved by convergence)."

# ═══════════════════════════════════════════
# § ripple_deal — Hypothetical partnership
# ═══════════════════════════════════════════

ripple_deal:
  context: "If Holding gives up market-maker-of-record role for retail flow."
  ripple_wants: "Flow to rotate their balance sheet. Granular trading (stickier AuM). Strategic position in protocol."
  darwinex_offers: "Market-maker-of-record role for retail. Guaranteed flow from CIF + franchise nodes."
  
  ripple_gets:
    - "Takes other side of retail CFDs (their BS, their risk, their RLUSD)"
    - "Flow rotates + nets their BS (HRP pitch: 'AuM FUNDS your balance sheet')"
    - "Potential equity stake in Exchange entity"
    - "FCA-licensed market-maker position"
    - "First-mover in Darwinex protocol network"
  
  darwinex_gets:
    - "Sheds LAST balance-sheet-heavy activity"
    - "TSTT thins to PM-only"
    - "Ripple's Cap Intro (300+ institutional clients) as distribution"
    - "Ripple's clearing/PB infrastructure"
    - "Cash (stake sale) or revenue share"

  tstt_end_state: "Managing investments ONLY. Zero balance sheet. Asset manager, not broker."

# ═══════════════════════════════════════════
# § platform_flywheel — e×X → e^X at corporate level
# ═══════════════════════════════════════════

platform_flywheel:
  insight: "The e×X → e^X transition applied to the CORPORATE STRUCTURE itself."
  
  linear_phase: |
    e×X (today): one entity does everything. Every dollar of trust minted
    requires a dollar of capital. Linear. The broker IS the cage.
  
  exponential_phase: |
    e^X (target): protocol. Partners hold the balance sheets. Partners face
    the clients. Partners take the market risk. Darwinex keeps the method,
    the data, the capital allocation, the prop book. Each partner that joins
    adds flow → higher IMR → lower cost → more attractive rails → more partners.
    Trust compounds without Darwinex adding capital.
  
  corporate_flywheel: |
    More partners join rails
    → more flow through matching engine
    → higher IMR (cheaper for everyone)
    → more attractive rails
    → more partners join
    → more rail rental revenue
    → Darwinex capital requirement SHRINKS
    → more capital for prop (reinvested in edge)
    → better INDX performance
    → more institutional confidence
    → more AuM → more flow → ...
  
  analogy: "Visa doesn't hold money — takes a cut of every transaction. Darwinex doesn't hold positions — takes a cut of every trust-mint."

# ═══════════════════════════════════════════
# § board_offsite_framing
# ═══════════════════════════════════════════

board_framing:
  slide_1_diagnosis: "We built the world's best trust-minting engine inside a broker cage. The engine works. The cage doesn't scale. (T28: brain/wallet misalignment)"
  slide_2_architecture: "Split brain from body. Every body function has a natural partner-buyer. The brain is the permanent asset. (T38: progressive shedding)"
  slide_3_proof: "CIF partner is node 1. If it works, the model is validated. (T27: protocol network)"
  slide_4_trajectory: "Strategic break-even at [X] AuM + [N] nodes. DWX:INDX ratio = where we are on the S-curve. (T36: ownership S-curve)"
  slide_5_endgame: "Member-owned prop that owns a protocol. Exit = mission. (T39: capstone)"
  slide_6_ask: "Approve the org split (costs nothing). Authorize progressive thinning. Signal to Ripple. (T21: governance surface)"
  
  what_board_is_NOT_voting_on: "Selling the company. Member-ownership is Phase 2 (S2 tokenisation). They're voting on the architecture that MAKES IT POSSIBLE."

# ═══════════════════════════════════════════
# § open_questions
# ═══════════════════════════════════════════

open_questions:
  - q: "Break-even AuM?"
    owner: "Sergio + Jesús"
    data: "Cost decomposition (client-money vs own-account + PM) + INDX AuM scenarios"
  - q: "Rail license terms for franchise nodes?"
    template: "CIF 85/15"
  - q: "CASS wind-down timeline?"
    owner: "Jon Wilson + Vladimira"
  - q: "Booster classification — does issuance require client money?"
    determines: "Whether Boosters stay in thin TSTT or migrate to CIF"
  - q: "Ripple appetite for market-maker-of-record?"
    owner: "Juan (Mike Brockmans pitch)"
  - q: "Board framing — NOT sell the company."
    note: "Design the org so every BS-heavy activity can be progressively partnered out."

# ═══════════════════════════════════════════
# § hidden_patterns — Session 5 meta-insights (discovered in review)
# ═══════════════════════════════════════════

hidden_patterns:

  one_principle: |
    Shed everything that requires a balance sheet. Keep everything that mints trust.
    Every decision tonight was an instance of this: client money (shed), market-making (shed),
    Booster issuance (shed → member challenges), retail ops (shed). What remains: Quote, Method, prop.

  the_protocol_never_takes_the_other_side: |
    Client money, market-making, Boosters, retail — all instances of "company is counterparty."
    The protocol transition = stop being the counterparty. Members face each other.
    Partners hold balance sheets. Darwinex provides venue + rules + attestation. Never the other side.

  quote_is_everything: |
    Every mechanism depends on the Quote: challenges settle by Quote, INDX earned by Quote,
    DWX appreciates by aggregate Quote (INDX), institutions allocate by Quote,
    members select each other by Quote, the challenge to Wall Street IS: "our Quotes beat your benchmarks."
    Method BU's real job = Quote integrity. The ONE function that can never be externalized.

  inversion_method: |
    Every breakthrough was Inversion method applied: state the convention → invert → test.
    "Holding operates market maker" → "Holding is a client" → regulatory question killed.
    "Company issues Boosters" → "Members challenge each other" → conflict resolved, revenue reclassifies.
    "IPO for liquidity" → "DWX:INDX market IS the exit" → exit = mission.
    Inversion is not just a framework artifact. It is Juan's operating method.

  indx_is_tokenized_trust: |
    INDX does five things: reward, stake, payment, prize, gateway to ownership.
    These aren't five features. They're five views of one concept: INDX = tokenized trust.
    Earn INDX = mint trust. Stake INDX = risk trust. Convert INDX→DWX = trust becomes ownership.

  shedding_is_the_scurve: |
    T38 (shedding) and T36 (S-curve) are the same curve viewed differently.
    Bottom: company does everything (e×X corporate). Steep: company sheds rapidly (protocol transition).
    Plateau: company = Method + PM + prop (e^X corporate). The shedding IS the S-curve in corporate form.

  ignacio_is_binary: |
    The entire strategy's feasibility depends on one legal opinion: is INDX a utility token?
    If YES: challenge marketplace runs, Method self-sustaining, sourcing costs zero, protocol transition executable.
    If NO: Boosters stay as products, Method needs subsidy, transition blocked.
    11 questions reduce to 2: (1) Is INDX utility? (2) Can DWX come later as security?

simplifications:

  two_entities_not_three: |
    No separate legal entity for Method needed today. TSTT holds FCA license AND IP.
    Two internal P&L centers (Exchange ops + Method), one legal entity.
    Method becomes separate entity only when licensing to THIRD PARTIES justifies it.
    Today: Holding + TSTT. Two entities. Simpler.

  three_slides_not_twenty: |
    Slide 1: "Engine works. Broker doesn't scale." (Diagnosis)
    Slide 2: Break-even chart. Two lines. One crossing point. (THE slide)
    Slide 3: "Approve org split. Adopt VBM. Here's Q2." (The ask)
    Twenty slides = education. Three slides = decision. Twenty is backup for Q&A.

  five_statements: |
    ONE PRINCIPLE: Shed everything that requires a balance sheet. Keep everything that mints trust.
    ONE METRIC: FTF > 1 = the cage opens.
    ONE TOKEN: INDX (reward, stake, payment, prize, gateway — tokenized trust).
    ONE QUESTION: Is INDX utility? (Ignacio determines feasibility.)
    ONE ENDGAME: The members own the market.

  endgame_sentence_simplified: |
    9 words: "A member-owned prop that owns a trust-minting protocol."
    5 words: "The members own the market."
    3 words: "Merit owns the market."

# ═══════════════════════════════════════════
# § application — How patterns apply to each effort
# ═══════════════════════════════════════════

application_to_efforts:

  board_deck:
    principle: "The axioms ARE the slides. 13 slides. Each one IS an axiom or theorem in plain language."
    hidden_patterns_used: [one_principle, three_slides_not_twenty]
    first_domino: "Jesús cost decomposition (slide 10: break-even). Without it, THE slide has no Y-axis."
    simplification: "The deck, the protocol website, the Bible, the white paper, the chatbot — they're ALL the same deliverable in different formats. One framework, many views."
    deck_structure: |
      1. A1: Trading is decided by access, not merit.
      2. A2: We built rails that make merit visible. The Quote.
      3. A3+P6: Same deal. Contribution determines reward.
      4. A4+A5: Matching creates surplus. Surplus compounds trust.
      5. A7: Collective credibility attracts confidence (α+β loops). INDX data.
      6. A9+A13+A14: No extraction. Transparency. Venue = union.
      7. DARWIN = Develop And Reward With INdx. The name.
      8. T28: We serve brains but charge wallets. The cage.
      9. T38: Shed the balance sheet. Keep the trust-minting.
      10. T36: Break-even chart. FTF > 1 = cage opens.
      11. T41: Members challenge each other AND the outside market.
      12. T39: Member-owned prop owning a protocol. Merit owns the market.
      13. The ask: org split + VBM + authorize thinning.

  protocol_website:
    insight: "The protocol website IS the board deck IS the Bible IS the white paper IS the chatbot. One framework, many formats."
    parallels: ["FIX Trading (fixtrading.org/what-is-fix/)", "Lean (lean-lang.org)"]
    pages:
      - { page: "What is DARWIN?", content: "P0-P6 + INDX data", audience: "Everyone" }
      - { page: "The Axioms", content: "7P + 10A in plain language", audience: "Members, investors, regulators" }
      - { page: "The Specification", content: "45T + dependency graph + Lean source", audience: "Developers, academics, regulators" }
      - { page: "The Deal", content: "DEVELOP atom — membership, challenges, INDX, progression", audience: "New users" }
      - { page: "The Proof", content: "INDX vs benchmarks + Quote methodology + Lean compiles", audience: "Institutions, regulators" }
      - { page: "Join", content: "Traders / Institutions / Partners / Developers", audience: "Everyone" }
    deliverable_convergence: |
      F1 Glossary → protocol glossary page
      F2 Bible → "What is DARWIN?" page
      P1 Board deck → protocol website in slide format (10 axiom-slides)
      G1 VBM → "The Proof" page (live data)
      I2 Chatbot → protocol website interactive layer
      S7.1 White paper → "The Specification" page
      ALL THE SAME DELIVERABLE. Different formats.

  bu_pnl:
    principle: "Two entities, not three. One legal entity (TSTT), two P&L centers."
    hidden_patterns_used: [two_entities_not_three, one_principle]
    first_domino: "Jesús splits costs: client-money ops vs own-account + PM."
    simplification: "Stop calling it 3 BUs. It's Holding + TSTT (with Method as an internal P&L). Fewer entities = less legal, less transfer pricing, less complexity."

  booster_reframe:
    principle: "Protocol never takes the other side. Members challenge each other."
    hidden_patterns_used: [the_protocol_never_takes_the_other_side, indx_is_tokenized_trust]
    first_domino: "Ignacio legal opinion. Binary: utility or security?"
    simplification: "Boosters, Kaggle prizes, referral rewards, educator payments — they're NOT four products. They're ONE mechanism: protocol rewards contribution with INDX. One infrastructure, many templates."

  tokenisation_s2:
    principle: "Two questions, not eleven. (1) Is INDX utility? (2) Can DWX come later?"
    hidden_patterns_used: [ignacio_is_binary, indx_is_tokenized_trust]
    first_domino: "Ignacio answers Q1 and Q2. Everything else flows from those."
    simplification: "Phase 1 = INDX only (utility, challenge marketplace). Phase 2 = DWX (security, ownership). Don't try to launch both at once."

  regulatory_s5:
    principle: "Shedding client money = shedding regulatory burden."
    hidden_patterns_used: [shedding_is_the_scurve, one_principle]
    first_domino: "Jon Wilson confirms: P2P challenges on public metric ≠ derivative product."
    simplification: "Every activity that sheds also sheds its regulation. Client money → no CASS. Product issuance → no product governance. Market-making → partner's regulatory burden."

  institutional_indx:
    principle: "Brain revenue funds the transition. PM fees = the growth engine."
    hidden_patterns_used: [one_principle, shedding_is_the_scurve]
    first_domino: "White Bay meeting Wed 8 = first test of give-up pitch."
    simplification: "Institutional doesn't need the token layer at all. It's PM + give-up. Standard asset management. The token layer (INDX/DWX) is for members. Don't conflate the two audiences."

  community_s7:
    principle: "INDX-denominated everything. Zero cash outflow for sourcing."
    hidden_patterns_used: [indx_is_tokenized_trust, the_protocol_never_takes_the_other_side]
    first_domino: "Kaggle competition design (Martí). Prize = INDX. Entry = free. Winner = new member."
    simplification: "Sourcing, challenges, rewards, educator payments — one token, one mechanism, many templates. Don't build separate systems for each."

  charlie_system:
    principle: "Quote integrity is the ONE function. Method BU = Quote guardian."
    hidden_patterns_used: [quote_is_everything]
    first_domino: "Lean formalization IS the beginning of formal Quote verification."
    simplification: "The framework (40 theorems, 12 proofs, Lean compiles) isn't intellectual exercise. It's the SPECIFICATION of what the Quote must satisfy. T5 (e^X literal) depends on A7 (trust begets edge). If A7 fails (G16 — no empirical measurement), e^X collapses to e×X. The Lean file flags this explicitly."

# ═══════════════════════════════════════════
# § messaging — The one-breath version
# ═══════════════════════════════════════════

messaging:
  one_breath: "Independent traders deserve more trust. The DARWIN protocol mints it."
  expanded: |
    We built the world's best trust-minting engine and ran it inside a broker for 12 years.
    The engine works. The broker doesn't scale. Now we open the rails.
    Members fund the foundation (Nτ). Partners run the body. We keep the brain.
    At break-even, the protocol funds itself. At convergence, the members own it.
    "A member-owned prop that owns a trust-minting protocol."

# ═══════════════════════════════════════════
# § kpis — Free Trust-Flow Coverage
# ═══════════════════════════════════════════

kpis:
  ftf_definition: |
    Free Trust-Flow Coverage Ratio (FTF):
    FTF = Σ(BU free trust-flow) / Total cost of developing rails

    Per BU:
      Method FTF  = Nτ (membership) − Method costs
      Exchange FTF = PM fees + perf fees − Exchange costs (thin)
      Holding FTF  = Netting surplus + franchise rental + prop − Holding costs

    FTF > 1 → protocol funds itself. Wallet revenue optional. The cage opens.
    FTF < 1 → still needs wallet subsidy (CIF 85/15 bridge).

  two_thresholds:
    method_breakeven: "N × τ > Method costs. Foundation self-sustaining on membership. No AuM needed. Achievable FIRST."
    group_breakeven: "Σ(all BU FTF) > 0. Protocol self-sustaining. Wallet revenue optional. The shedding threshold."

  six_kpis:
    - { name: "e", measures: "Collective edge rate", role: "★ THE north star" }
    - { name: "N", measures: "Quality member count", role: "Method break-even driver" }
    - { name: "IMR", measures: "Internal matching rate", role: "Flywheel health" }
    - { name: "X", measures: "Trust stock (AuM at risk)", role: "Scale" }
    - { name: "ΔC", measures: "New confidence flow", role: "Growth rate" }
    - { name: "FTF", measures: "Free Trust-Flow Coverage Ratio", role: "Break-even indicator. FTF > 1 = cage opens." }

  three_revenue_engines:
    - { engine: "Rail rental (Nτ)", scales: "N members", funds: "Method", model: "Open-source protocol. Members fund the brain." }
    - { engine: "PM + perf fees", scales: "AuM", funds: "Exchange", model: "Asset management. Institutional brain revenue." }
    - { engine: "Netting + franchise rental", scales: "Flow + N nodes", funds: "Holding", model: "Platform/Visa economics." }

# ═══════════════════════════════════════════
# § challenge_marketplace — Boosters reframed (T41 candidate)
# ═══════════════════════════════════════════

challenge_marketplace:
  reframe: |
    Boosters are NOT company-issued products. They are member-to-member challenges.
    Members challenge each other — and collectively challenge the OUTSIDE market.
    The protocol provides the venue, the rules (Quote as judge), and escrow.
    All money goes back to members. Protocol takes mediation fee only.

  mechanics:
    step_1: "Member posts challenge: 'My Quote will achieve X over Y. I stake Z (in INDX).'"
    step_2: "Other members accept — back or fade."
    step_3: "Community pool provides liquidity when no individual taker (community market-making)."
    step_4: "At expiry, Quote settles (attested, independent, unfalsifiable — A2)."
    step_5: "Winners earn. Losers learn. Protocol takes mediation fee. Everything else → members."

  community_market_making: |
    The community IS the market maker for its own members' challenges.
    When a member posts a challenge and no individual takes the other side,
    the community pool provides liquidity. Community earns the spread.
    Surplus → reinvested (A5). The community market-makes for itself.

  challenging_the_outside_market: |
    Collectively, the community's performance (INDX) IS a challenge to the outside market.
    "Our community of independent traders, selecting each other through transparent merit,
    produces better risk-adjusted returns than the opaque institutional market."
    INDX beating the S&P IS the community winning the challenge.
    Every member who proves edge via Quote IS challenging the conventional system.
    The protocol is a CLAIM: merit-based markets are better than access-based markets.

  darwinia_generalized: |
    DarwinIA = one template in a general challenge mechanism.
    - Head-to-head (my DARWIN vs yours)
    - Vs benchmark (prove you beat SPY over 3 months)
    - Community tournaments (members design their own competitions)
    - Parallel DarwinIAs per action (from S7)
    DarwinIA doesn't need to be run by the company. It's a PROTOCOL FEATURE.

  implications:
    revenue: "€7.9M reclassifies from wallet (Exchange, shedable) to rail (Method, permanent). Method likely ALREADY self-sustaining."
    balance_sheet: "Zero. Members face each other. Protocol holds escrow only. No NOP, no capital consumption."
    selection: "Decentralized. Community decides who has edge by which challenges they take. Replaces centralized DarwinIA."
    loop: "Challenges need accurate Quotes → fund risk engine → better Quotes → more challenges → more revenue. Tightest loop in the economy."
    tokens: "INDX-denominated. Stake INDX, earn INDX. All money stays in economy. Protocol fee = only leakage, reinvested."
    extraction: "Closes product-level extraction (T20). Company doesn't issue. Members challenge. All value → members."
    regulatory: "Quote = public statistic. Challenge on public metric ≠ derivative. NEEDS JON WILSON. Could be much lighter."

  t41_candidate: |
    T41: Challenge Marketplace — Boosters reframed as member-settled P2P challenges.
    Protocol provides venue + rules + escrow. Quote settles. Community market-makes.
    Revenue = rail (not product). Zero balance sheet. Self-reinforcing.
    Collectively: the community challenges the outside market. INDX = the proof.
    Closes product-level extraction (T20 complete).
    Derived from: A2 + A4 + A9 + T21 + T34 + P6

# ═══════════════════════════════════════════
# § business_parallels
# ═══════════════════════════════════════════

parallels:
  visa:
    takes: "Member-owned network. Shared rails. Tiny cut per transaction. Never holds money."
    differs: "Visa demutualized. Darwinex stays member-owned — alignment IS the product."
  red_hat:
    takes: "Open-source core. Subscription + enterprise. Community builds value. Acquired for $34B."
    differs: "Red Hat sold to IBM. Darwinex's value stays with members (DWX). Community IS the acquirer."
  cme:
    takes: "Member-owned exchange. Per-trade fees. Network effects (more participants = better liquidity)."
    differs: "CME demutualized. Darwinex challenges the outside market, not just matches internal flow."
  betfair:
    takes: "P2P marketplace. Zero position risk. Exchange takes commission. ~£600M/yr."
    differs: "Betfair has no attestation. Darwinex has the Quote — challenges are merit-based, not opinion-based."
  numerai:
    takes: "Crowdsourced edge selection. Staked predictions. Token economics. $950M AUM."
    differs: "Centralized (one man decides). Scientists don't OWN the fund. Darwinex members DO (DWX)."
  berkshire:
    takes: "Float → invest. Vehicle ≠ value. Capital allocation = the skill."
    differs: "Berkshire can't give up insurance (float IS fuel). Darwinex CAN give up exchange (method creates demand)."
  synthesis: "Darwinex = Visa (rails) + Betfair (P2P, zero risk) + Numerai (crowdsourced edge) + Red Hat (open core) + Berkshire (capital allocation) — member-owned at every stage."

# ═══════════════════════════════════════════
# § perspectives — Five views of the same protocol
# ═══════════════════════════════════════════

perspectives:
  new_user: |
    "My trades produce a Quote — my edge, visible, unfalsifiable. I pay €45/month for rails.
    I buy modules I need. I challenge other members. I earn INDX. If I'm good enough,
    I earn my way into ownership (DWX). I'm not a customer. I'm entering an economy."

  member: |
    "I earn INDX proportional to my edge. I convert INDX → DWX — becoming an owner.
    I create challenges. I market-make for others' challenges. The more I contribute,
    the more I own. Every member who proves edge strengthens MY position."

  shareholder: |
    "The org split costs nothing. Three revenue engines fund independently.
    Method might already be self-sustaining (Booster reclassification).
    My exit: sell DWX during growth phase. No IPO needed.
    Exit and mission completion are the same event."

  regulator: |
    "TSTT keeps dealing on own account + managing investments. Sheds client money.
    Fewer systemic risks. Better consumer protection (public Quotes, transparent challenges).
    Fewer conflicts (company doesn't take the other side). We should be pleased."

  acquirer: |
    "We get market-maker role, flow, FCA presence, protocol position.
    We DON'T get method, dataset, or community. Locked into Darwinex rails.
    But rails make our balance sheet more efficient. Worth it."
```

---

## HUMAN_SECTION

### The Protocol Transition — From Broker to Brain

Darwinex has spent 12 years building the world's best trust-minting engine inside a broker. The engine works: 100K track records [[DATA_SOURCES#track_records]], ~35% internal matching rate [[DATA_SOURCES#imr_platform]], INDX with a Sharpe above 1 [[DATA_SOURCES#indx_performance]]. But the broker is a cage — every dollar of trust minted requires a dollar of capital. Linear. Capital-intensive.

The protocol transition is the escape. Not by abandoning the broker — by progressively hollowing it out until it's a shell, while keeping everything that matters: the method, the data, the prop book, the protocol.

**The corporate structure:** One holding company (Darwinex Group) that is a CLIENT of its own exchange (TSTT). The holding is the biggest client — primus inter pares — the mutualised market maker. Two business units: Exchange (regulated, client-facing) and Method (pure IP, zero capital). Sapiens shut down.

**The key insight:** The market-maker role is only needed for retail flow. Institutional flow uses give-up (PM + exchange fill → investor's own FCM). If a partner like Ripple takes the retail market-making role, TSTT drops to managing investments only. Darwinex becomes an asset manager, not a broker.

**The DWX:INDX convergence:** INDX (e×X) is what you earn — participation flow. DWX (e^X) is what you own — protocol stock. The exchange rate between them IS the S-curve. Early on, DWX is worth far more than INDX (growth premium). As the protocol matures and the community becomes the market, the ratio converges to 1:1. At convergence: earning = owning. The protocol IS the members. Merit is all that's left.

**The founding team's exit and the mission's completion are the same event.** Shareholders sell DWX during the e^X phase (growth premium still high). Members buy DWX with earned INDX. No IPO needed. No PE needed. The INDX:DWX market IS the exit mechanism.

**The endgame sentence:** "A member-owned prop that owns a trust-minting protocol."

Nine words. Every one load-bearing. The board off-site on April 29 is about approving the architecture that makes this possible. Not the full transition — just the org split. The door that can open when the time is right.

---

*Created 6 Apr 2026. Source: Juan Colón Session 5 — 4 iterations in 90 minutes. Formalized as T35-T40 in [[CONSTITUTION]] v4.*

---

## ANNOTATION — 20 Apr 2026 framing shift (F1 Deck)

> Does not rewrite the LLM_SECTION. Adds the board-communications frame used for the 29 Apr offsite. All existing axioms, theorems, and structures hold; this section names the metaphor and decision rule that carry them into the room.

### The dealer-mechanic-F1-on-bench primitive

Juan 20 Apr, verbatim (sharpened across five course-corrections):

> "We're not even working on a car. We're working as mechanics on someone else's car, in our own car-dealer, which locks us in. And in the back of the garage, an F1 we built 12 years ago sits on the bench."

Mapping:
- **Car-dealer** = our broker license, FCA permissions, compliance infra, CFD ops (self-built, self-imposed).
- **Manufacturer** = MetaQuotes, PrimeXM, Saxo (their products, parts, diagnostic protocol).
- **Mechanics** = engineering maintaining glue around 3rd-party systems.
- **Franchise contract** = the license + compliance obligations that prevent self-work.
- **F1 on the bench** = the protocol (matching engine, Method, dataset, certification, trust-minting rails).

Why this primitive beats pure "stack dependency" framing: it names the lock-in as **self-inflicted**. Only the board can fix self-architected misallocation — so the primitive makes the board's authority the lever. Canonical memory: `config/memory/project_f1_dealer_mechanic_primitive.md`.

### CIF signed — offsite grammar shifts to schedule approval

The CIF transfer (T38 shedding_sequence step 1) is **signed**. The board offsite does not authorize the transition — it tracks it. Tonal consequence:

- Before: "please approve this architecture."
- After: "the architecture is approved — here's the clock."

Operational consequence: **VBM (G1) moves from sidecar to Movement C spine.** Without the strategic-vs-legacy P&L split, "reallocation not capital" is aspiration; with it, it is accounting. The strategic_breakeven section above (T38/T36) stays valid but is re-axed for the board: **Strategic (F1) revenue vs Legacy (car-dealer) cost base**, not wallet vs brain.

### Four-cardinality capability envelope (customer-side view)

The F1 serves four cardinalities. The dealership served primarily one. The dimensional mismatch is the misallocation viewed from the customer side.

| Cardinality | Meaning | Status | Multiple band |
|---|---|---|---|
| 1→1 | Bilateral CFD (retail) | Legacy, exiting via CIF (signed) | 3-7x EBITDA |
| 1→N | Classic DARWIN (provider → many) | In place | 5-10x revenue |
| M→1 | Institutional rollup (INDX) | FNY unlocks | 10-20x EBITDA / 2-5% AuM |
| M↔N | Multilateral marketplace | MAREX stepping stone | 20-35x EBITDA |

**Institutional N preferred over retail N** — not a preference, a P&L column choice. Retail N requires client money / CASS / regulatory overhead / dealer ops (legacy cost column). Institutional N runs through give-up / PM mandate / SMA with near-zero balance sheet (strategic revenue column).

**CIF + FNY + MAREX = one coordinated transition sequence**, not three independent deals. Governance alignment on the sequence is the commercial vote at the offsite.

### Cardinality axis ≈ multiple axis

Structural thesis codified 20 Apr: each cardinality upgrade is simultaneously (a) cost shed, (b) revenue-mix shift, (c) **multiple expansion of 4-10x on the same underlying cashflow**. The transition is not just "get to break-even" — it is "re-rate what kind of business we are."

CME / ICE / Nasdaq trade at 20-35x because matching engines with network effects on both sides are the most durable cashflow compounders in finance. That is the destination when the F1 is wheeled out and the dealership is closed. Canonical memory: `config/memory/project_cardinality_multiple_axis.md`.

**Sum-of-parts benchmark:** DWX:INDX convergence (T36) should be scored against SOP. If DWX market cap via convergence undershoots SOP, members are leaving money on the table. If it matches or exceeds, T39 endgame is validated in market terms.

### Maximize E as board decision rule

One objective function. Every initiative scored by dE/dt. Certification: E ↑ (signal quality). OSS: E ↑ (contribution volume). Remove markups: E ↑ (trust → TVL). Work on the retail dealership: E flat. Feed the F1: E ↑↑. Gives the board one axis to vote on, and every future board report carries break-even + SOP as mandatory KPIs.

### Deliverables carrying this frame

- **Plan:** `~/.claude/plans/as-we-work-towards-noble-cherny.md` — 23 hidden relationships, full Movement A/B/C structure.
- **F1 Deck:** `output/260420-pitch-deck-f1-board-offsite.md` — 20 slides, 3 movements, speaker notes.
- **SOP matrix:** `output/260420-sop-buyers-multiples-matrix.md` — slide 15 source.
- **Initiative Sheet (pending):** `output/260420-initiative-sheet-appendix.md` — operators' expansion of slides 11-20.

*Annotation added 20 Apr 2026. Source: Juan strategic dump + five course-corrections during plan build.*
