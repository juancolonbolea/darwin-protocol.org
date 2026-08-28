---
type: electron
atom: PROTOCOL
audience: [management]
orbit: 1
status: ACTIVE
last_updated: 2026-04-04
language: llm
owns: |
  Honest assessment of Darwinex current state vs framework aspirations.
  Revenue reality. Product reality. Organizational reality. Cultural reality.
  Board reality. Competitive reality. Delta map. S-curve position.
  The gap analysis the board needs before the vision deck.
purpose: |
  Ground truth document. Load BEFORE the board deck framework.
  If the board sees only vision without this, credibility erodes.
  If they see this first, every aspiration has an honest anchor.
cross_refs:
  - electron: PHENOTYPE--business-units
    why: "4 BU architecture is PROPOSED here, not yet operational"
  - electron: GENOTYPE--vbm
    why: "VBM is framework-complete, operationally zero"
  - electron: GENOTYPE--linear-network
    why: "T28 describes the endgame; current state is pre-T28"
  - satellite: REGULATORY-ARCHITECTURE
    why: "Regulatory reality constrains product reality"
  - electron: PHENOTYPE--group-structure
    why: "Cap table reality constrains governance aspirations"
  - electron: NICHE--board-governance
    why: "Board has seen TAB-0→TAB-7 but NOT atoms/electrons/VBM"
  - file: BOARD_DECK_FRAMEWORK
    why: "The deck this file grounds — vision needs honest anchor"
  - file: DELIVERABLES.md
    why: "Operational status of every initiative"
derived_from: [management_accounts_FY2025, YTD_2026_jan_feb, audited_accounts_FY2024, DELIVERABLES.md, monster_consolidation]
protocol_component: []
protocol_layer: Application
protocol_piece: Protocol
---

# Current State (Honest Assessment)

> This electron answers one question: **where is Darwinex TODAY?**
> Not where the framework says it should be. Not where it's heading. Where it IS.
> The board will respect honesty more than vision. Load this before the deck.

---

## §1 Revenue Reality

### The Numbers

| Period | Revenue | Gross Margin | Op. Margin | Pre-tax P/L |
|--------|---------|-------------|-----------|-------------|
| FY2025 | €14.7M | 47.6% | (3.5%) | **(€523K) loss** |
| YTD 2026 (Jan-Feb) | €4.85M | 54.4% | 26.4% | €1.28M profit |
| Ann. 2026 (extrapolated) | ~€29.1M | ~54% | ~26% | ~€7.7M profit |

### Where the Money Actually Comes From

| Revenue Stream | FY2025 | % | Trend (YTD→Ann.) | BU Assignment |
|----------------|--------|---|-------------------|---------------|
| **DZ Subscriptions** | €3,443K | 23% | →€5.1M (+49%) | Data Rails |
| **DZ Upsells/Addons** | €3,110K | 21% | →€7.9M (+154%) 🚀 | Data Rails |
| **Spread Capture** | €1,677K | 11% | →€5.4M (+217%) 🚀 | Prop |
| **Commissions** | €1,464K | 10% | →€2.1M (+42%) | Retail Broker |
| **Swap Interest** | €1,276K | 9% | →€1.6M (+23%) | Retail Broker |
| **Markup** | €1,180K | 8% | →€2.2M (+88%) | Retail Broker |
| **Performance Fees** | €853K | 6% | →€2.1M (+149%) 🚀 | Matching Rails |
| **Interest on Client Funds** | €579K | 4% | →€0.7M (+17%) | Retail Broker |
| **Other Gains/Losses** | €566K | 4% | →€1.4M (+145%) | Prop |
| **Management Fees** | €489K | 3% | →€0.6M (+20%) | Matching Rails |
| **Other Income** | €95K | 1% | — | Corporate |

### What's Growing

- **DZ Upsells** (+154% ann.): The breakout line. Upsells now EXCEED base subscriptions. Members pay for more once inside.
- **Spread Capture** (+217% ann.): Prop internalization profit scaling with volume. More flow = more internal matching = more surplus.
- **Performance Fees** (+149% ann.): DARWIN/INDX AuM generating fees. This is the Matching Rails BU coming alive.

### What's Flat

- **Swap Interest** (+23%): Rate-environment dependent. Not a strategic driver.
- **Interest on Client Funds** (+17%): Passive. Depends on rate environment and client cash balances.
- **Management Fees** (+20%): AuM-based but low base (€489K). Needs dramatically more AuM to matter.

### What's Concerning

- **FY2025 was a loss year.** The turnaround is real but only 2 months old.
- **Revenue concentration:** Data Rails (DZ) = 44% of revenue on a single product line with one customer type (developing traders).
- **Cost base:** €4.3M employment + €1.5-1.8M platform infrastructure is largely fixed. Operating leverage is powerful when growing, brutal when flat.

### The Honest Story

The company went from loss-making to dramatically profitable in ~60 days. Revenue nearly doubled. Costs barely moved. This is the operating leverage moment — the platform build is paying off. But it's **two months of data**. The board should see the trend, not project the trend as destiny.

---

## §2 Product Reality

### What EXISTS Today

| Product/Component | Status | Evidence | Limitation |
|-------------------|--------|----------|------------|
| **DARWINs** | ✅ EXISTS | ~100K registered track records. Risk engine computes Quotes. Public. | Unknown: how many ACTIVE (trading in last 90d)? How many with positive Quote slope? The 100K includes dormant/abandoned accounts. Active DARWINs likely 5-15K range. |
| **Quote / Risk Engine** | ✅ EXISTS | Arm's-length risk adjustment. Cumulative. Public. | Single-vector (trading only). No Quote for sourcing, education, signal processing. The framework describes multi-vector Quotes that don't exist. |
| **INDX** | ✅ EXISTS | AMC live (CH1403552396 via GentTwo). Performance trackable. | AuM unknown (needs Sergio data). Likely €15-25M range based on fragments (€18M mentioned in INDX project notes, 20% return, Sharpe ~1.42). Is INDX beating the market? Probably yes on risk-adjusted basis but the institutional track record is SHORT. |
| **Matching Engine / the internal book** | ✅ EXISTS | Internal matching operational. Spread capture €1.7M FY2025 → €5.4M ann. 2026. | IMR (Internal Matching Rate) growing but not tracked as a governance KPI. Nobody outside this knowledge base uses the term "IMR." |
| **Darwinex Zero (DZ)** | ✅ EXISTS | €6.6M revenue. 44% of total. The subscription SaaS product. | DZ CoS = €4.6M (70% of DZ revenue). Margin unknown at BU level. The "unregulated data business" story depends on DZ being profitable standalone — unproven. |
| **CCP / Mutualized Monopoly** | ✅ EXISTS | CCP is sole resting counterparty inside the internal book. No private market-making. | Operational but NOT articulated as constitutional principle to anyone. The mutualized monopoly is a design choice, not a communicated feature. |
| **TradFi Distribution** | ✅ PARTIALLY EXISTS | Super Global certificates live (price notifications flowing 3 Apr). GentTwo AMC wrapper operational. | No significant institutional AuM. Pipeline nascent: White Bay (9 Apr), Boothbay (second meeting pending), First NY (scheduling). |
| **Booster / DarwinIA** | ✅ EXISTS | Booster = option product on DARWINs. DarwinIA = competition with prizes (€616K FY2025). | These are member incentive tools, not standalone revenue lines. DarwinIA is a cost (Data Rails CAC). |

### What DOESN'T Exist Yet

| Framework Element | Status | Gap |
|-------------------|--------|-----|
| **Sourcing Rails** | ❌ DOESN'T EXIST | No ad server. No per-member funnels. No academy model. No INDX-meritocratic sourcing rewards. The entire SOURCE vector of S/D/S is manual/organic. |
| **Sealed Enclave** | ❌ DOESN'T EXIST | No code-to-data infrastructure. No signal processor pipeline. The "Open Signals" phase of Open Trust is conceptual only. |
| **Academy Model** | ❌ DOESN'T EXIST | No third-party educators onboarded with INDX rewards. No "educator" participant type active. The universal participant table (T28) has 7 rows; only 2 are active (manager, investor). |
| **Open Trust (any phase)** | ❌ DOESN'T EXIST | No IPFS attestation. No open APIs. No blockchain certification. No smart contracts. Phase 0 is costed at "~€0" but hasn't started. |
| **Protocol network Model (T27)** | ❌ DOESN'T EXIST | Single broker (Darwinex = first and only community node). No second broker. No protocol for third-party distribution using Darwinex rails. |
| **Signal Processor Pipeline** | ❌ DOESN'T EXIST | No Kaggle experiment. No sealed enclave. No external quant contributing to INDX composition. |
| **INDX Tokenization** | ❌ DOESN'T EXIST | Blocked on Ignacio CIS legal classification (22+ days stale). No Fireblocks deployment. |
| **API Marketplace** | ❌ DOESN'T EXIST | No open Data SDK. No developer portal. No tool builder ecosystem. |
| **Multi-vector Quote** | ❌ DOESN'T EXIST | Quote measures trading edge only. The framework describes Quotes for sourcing, education, tool-building. None of these exist. |
| **Track Record Portability** | ❌ DOESN'T EXIST | Cannot import external track records. Identified as "THE ONE" initiative (2 Apr) but not started. |
| **DARWIN Blockchain** | ❌ DOESN'T EXIST | No on-chain certification. No trustless attestation. |

### Product Reality Summary

**What works:** DZ subscription SaaS + DARWIN track-record platform + matching engine + INDX portfolio + TradFi wrapper (GentTwo AMC). This is a functioning fintech with real revenue.

**What the framework describes but doesn't exist:** Sourcing rails, sealed enclaves, academy model, protocol network model, API marketplace, multi-vector Quotes, tokenization, blockchain certification, smart contracts, Open Trust phases 0-4.

**The gap is enormous.** The framework describes a 10x more complex system than what currently operates. The board should understand: the atoms describe WHERE WE'RE GOING, not where we are. The product today is a well-functioning data + brokerage + matching platform. The product in the framework is an open, multi-vector, tokenized, protocol network-ready economy.

---

## §3 Organizational Reality

### Current Structure

| Dimension | Reality |
|-----------|---------|
| **Headcount** | ~62-70 people (62 in FY2024 TSTT audited; wage bill increase suggests growth) |
| **Organization** | Functional: tech, ops, compliance, product, commercial. **NOT by BU.** |
| **BU awareness** | **Zero.** Nobody in the company has heard the words "Data Rails," "Matching Rails," "atom," "electron," "e^X," "T28," or "universal participant table." |
| **Management layers** | CEO (Juan) + CFO (Jesús) + COO (Cian) + CTO (Miguel) + Product (Jarrod) + Head of Risk (Martí) + Commercial/Marketing + Compliance + Customer Ops |
| **Decision-making** | Centralized around Juan (strategy, product vision, BD, investor relations, regulatory) + Javier (strategy oversight) |
| **Location** | Distributed (remote-first). No single HQ. |

### The 4 BU Architecture: PROPOSED, Not Real

The [[PHENOTYPE--business-units]] electron describes 4 BUs with arm's-length independence. **This is a design document, not an org chart.** Today:

- **Nobody reports to a "BU head."** There are no BU heads.
- **No BU-level P&L exists.** Revenue mapping is a proposal (this week's first stab). Cost allocation requires CFO input (27 unanswered questions).
- **No transfer pricing.** Inter-BU flows are conceptual. No service agreements between the 4 proposed BUs.
- **The arm's-length tests pass in theory** but have never been operationally tested.

### Personnel Cost Opacity

Employment costs (€4.3M, 29% of total cost) **cannot be allocated to BUs** because:
- No headcount-by-function mapping exists
- Engineers serve all BUs simultaneously
- Compliance/legal serves Retail Broker + Matching Rails jointly
- Leadership overhead has no allocation key

**This is the single biggest blocker** for VBM, SoP valuation, and the Arb equity negotiation. Without knowing who costs what per BU, every BU margin is a guess.

---

## §4 Cultural Reality

### Current Mindset: "Serve Customers"

The company operates as a fintech that **serves traders and investors.** This is how the team thinks:

- Product team → "build features traders want"
- Customer ops → "help customers with their accounts"
- Compliance → "keep the regulators happy"
- Commercial → "acquire more users"
- Tech → "keep the platform running and improve it"

### Framework Mindset: "Build Rails for Micro-BUs"

The framework describes a company that **builds infrastructure for N meritocratic micro-businesses.** This requires:

- Product team → "build rails that N participant types can rent"
- Customer ops → "onboard micro-BU operators (academies, signal processors, tool builders)"
- Compliance → "design regulatory architecture that enables protocol network model"
- Commercial → "enable members to do THEIR own commercial (ad server, sourcing rails)"
- Tech → "build open APIs, sealed enclaves, developer marketplace"

### The Gap

| Dimension | Current | Framework | Distance |
|-----------|---------|-----------|----------|
| Customer definition | Traders + investors | 7 participant types running micro-BUs | **Massive** |
| Revenue model | Subscription + brokerage + perf fees | Rails rental + take rate on network value | **Massive** |
| Growth model | Marketing → acquisition → retention | Members source for themselves + each other | **Massive** |
| Success metric | Revenue, users, AuM | AuM-weighted avg Quote (north star), IMR, trust stock | **Not tracked** |
| Internal language | Standard fintech | Atoms, electrons, e^X, T28, S/D/S, trust waterfall | **Nobody speaks it** |

### Staff Communications: Haven't Happened

- The Feb 16 all-hands (Prioridades 2026) described priorities in traditional terms: dashboard, scalable growth, AI, strategic break-even.
- No subsequent communication has introduced the atomic framework, 4 BUs, VBM, or Open Trust.
- The board off-site (29 Apr) will be the FIRST time anyone outside Juan/Javier/Charlie hears these concepts.
- **Expectation management:** The team will need months to absorb what Juan has built in weeks. The transformation is intellectual first, organizational second.

---

## §5 Board Reality

### What the Board Has Seen

| Document | When | Content |
|----------|------|---------|
| TAB-0 (Darwinex 2030) | Jan 2026 | 2×3 entity matrix, two lead-gen flywheels, matching engine economics |
| TAB-0 (H1 Priorities) | Mar 2026 | 12 deliverables, "replace extraction with contribution" |
| TAB-1 (VBM) | Jan 2026 | 4 BU P&L structure, transfer pricing, 8 design questions |
| TAB-2 (KPIs) | Jan 2026 | IMR, BU-level metrics, toxic vs healthy revenue |
| TAB-3 (Market Risk/ALCO) | Jan 2026 | ALCO charter, book hierarchy, VaR limits |
| TAB-4 (TradFi Distribution) | Jan 2026 | Super Global certificates, CSSF prospectus, INDX pilot |
| TAB-5 (DeFi Distribution) | Jan 2026 | Chainlink, Fireblocks, Ripple Prime |
| TAB-6 (Mutualized Exchange) | Jan 2026 | MTF/OTF blueprint, IMR progression, platform token |
| TAB-7 (Founding the DARWIN Exchange) | Feb 2026 | "Chess.com for markets," compound enjoyment, 2%→98%→destination |

### What the Board Has NOT Seen

| Concept | Status | Risk |
|---------|--------|------|
| **4 atoms (PROTOCOL, DEVELOP, REWARD, INDX)** | Never presented | Board may find it overly abstract |
| **e^X as algebraically literal** | Never presented | Must be explained simply or it reads as jargon |
| **8 Primitives / 13 Axioms / 28 Theorems** | Never presented | Risk of "too academic." Must show practical consequence. |
| **T28 universal participant table** | Never presented | The "OS for micro-BUs" frame is new |
| **VBM trust-flow waterfall** | Never presented (TAB-1 was a precursor) | CFO hasn't built the P&Ls yet |
| **S/D/S allocation framework** | Never presented | The governance surface is new |
| **Open Trust Roadmap (5 phases)** | Never presented (TAB-4/5/6 were precursors) | Must be sequenced and costed |
| **Scale/Network effects map (5 PE + 7 NE)** | Never presented | Risk of "too many boxes" |
| **North Star KPI (AuM-weighted avg Quote)** | Never presented | Board may want traditional KPIs alongside |
| **Competitor deep-dive (Chain Step 4 void)** | Never presented | Board may not know competitors |

### Expectation Management

The off-site is the **first exposure.** The board has seen pieces (TAB-0→TAB-7) that are now SUPERSEDED by a much more rigorous framework. The risk: board feels whiplashed by vocabulary changes. The mitigation: the deck must show that TABs were steps TOWARD the current framework, not discarded attempts.

**Supersession map for the board:**

| They Know | Now Called | Why It Changed |
|-----------|-----------|----------------|
| "Two flywheels" | S/D/S vectors | More precise: Source, Develop, Scale |
| "Matching Engine BU" | Matching Rails | BU = Rails, not engine |
| "Exchange Members BU" | Retail Broker + N micro-BUs | Protocol network model (T27) replaces single entity |
| "Transfer pricing flows" | VBM trust waterfall | Same concept, richer framework |
| "Chess.com for markets" | Still valid | TAB-7 framing holds — it's the product story |

---

## §6 Competitive Reality

### The Market

| Competitor | What They Have | Users/Scale | What We Have That They Don't |
|------------|---------------|-------------|------------------------------|
| **eToro** | Social trading, copy trading, crypto | 40M users | Nothing like DARWINs. Copy ≠ risk-adjusted track record. No arm's-length Quote. Pure extractive. |
| **Numerai** | Crowdsourced quant signals, hedge fund | $950M AuM, JPMorgan backing | Sealed enclave approach. But: single-strategy (equities L/S), centralized fund, NMR token inflation. |
| **Prop firms (FTMO et al)** | Challenge → funded trader pipeline | ~50M traders/year, $12-20B market | Volume. But: collapsing (MFF fraud, CFTC action, CNB intervention). Extractive model (95% fail rate = revenue). Zero risk-adjustment. **Gamma framing:** props are short gamma with NO hedge — trending markets (gold Q1 2026) are existential. FTMO 2024: $323M rev, 55% payout ratio, breakeven at just 5.4% payout rate. Seacrest shut down prop arm Feb 2026. Apex banned all metals. Multiple firms capping payouts at 5% of account. Industry converging toward prop-as-marketing-funnel for brokers (ATFX: 10% prop→broker conversion). |
| **QuantConnect / Alpaca** | Algo trading infrastructure | Developer community ~200K | Open-source tools. But: no matching, no INDX, no trust chain. |
| **Robinhood Social** | Social features on brokerage | ~23M users | Scale. But: no attestation, no risk engine, gamified extraction. |
| **ZuluTrade / Collective2** | Signal following | ~100K active | Crude precursors. No risk adjustment, no matching engine, no institutional distribution. |

### Darwinex by the Numbers

| Metric | Value | Context |
|--------|-------|---------|
| Registered users | ~100K | vs eToro 40M, prop firms 50M/year |
| Revenue | €14.7M (FY2025) | vs eToro ~$1B, Numerai ~$100M est. |
| Employees | ~62-70 | vs eToro ~2,500 |
| Institutional allocators | 0-3 pipeline | vs Numerai JPMorgan + Renaissance caliber |
| INDX AuM | ~€15-25M est. | vs Numerai $950M |
| Track records | ~100K | **This is the asset.** Nobody else has this. |

### Honest Competitive Position

**The gamma framing (industry shorthand, Q1 2026):** Brokers are "long gamma" (benefit from volatility via B-book). Prop firms are "short gamma" (trending markets = existential). Darwinex's synthetic book IS short gamma (portfolio of short calls) — but delta-hedged via gamma scalping, converting market risk to cost risk. The residual exposure is not market direction but hedge cost: commissions (IMR-dependent) + balance sheet (NOP/liquidity). Future options overlay on concentrated exposures (e.g., gold calls) would cap even this cost. Props have no equivalent mechanism. See [[MARKET_RISK_FRAMEWORK]] § Operational Hedging Model for full mechanics.

**Nobody does the full stack:** data → risk-adjust → Quote → match → INDX → distribute. That's real.

**But:** the full stack at €15M revenue and ~100K users is a **niche product**, not a market force. The framework describes how to become a market force. Today, Darwinex is a well-engineered niche platform with an extraordinary dataset and no scale.

**The competitive advantage is real but fragile:**
- The 100K track records ARE the moat — but only if the matching engine and INDX grow fast enough to matter before someone builds a competing dataset
- The risk engine IS unique — but risk-adjustment is invisible to most traders (they don't know they need it)
- Chain Step 4 (matching → surplus) IS completely uncontested — but it requires scale to generate meaningful surplus

---

## §7 Delta Map — Framework vs Reality

| Framework Element | Status | Evidence |
|-------------------|--------|----------|
| **P0: Mistrust = the spread** | ✅ EXISTS | Spread capture €1.7M→€5.4M [[DATA_SOURCES#spread_capture]] proves P0 is real and being reduced. IMR ~35% [[DATA_SOURCES#imr_platform]] = partial concentricity. |
| **P1: Credibility developed via measurement** | ✅ EXISTS | Quote system operational, public, cumulative. 100K track records, positive INDX returns. |
| **P2: Confidence attracted by credibility** | ⚠️ PARTIALLY EXISTS | Institutional pipeline nascent. Most confidence is retail (DARWINs). INDX institutional = near-zero. |
| **P3: Trust minted (P1 × P2)** | ⚠️ PARTIALLY EXISTS | INDX exists. But: trust attribution incomplete, compounding loops (α, β) not yet measured. |
| **P4: Matching (by-product)** | ✅ EXISTS | CCP operational. Flow matching ✅. Capital matching ✅. Knowledge/tool/community matching ❌. |
| **P5: Dataset as inheritance** | ⚠️ PARTIALLY EXISTS | 100K records exist. But: not used for member development (no academy), not open (no sealed enclave), not enriched beyond trading vector. |
| **P6: Merit determines outcomes** | ✅ EXISTS | Quote is meritocratic. Performance fees reward edge. |
| **A2: Quote as credibility mechanism** | ✅ EXISTS | Operational, public, arm's-length |
| **A3: Self-selection via fair terms** | ✅ EXISTS | DZ subscription = fair entry. Tourists self-select out. |
| **A4: Matching across five dimensions** | ⚠️ PARTIALLY EXISTS | Flow matching ✅. Capital matching ✅. Knowledge matching ❌. Tool matching ❌. Community matching ❌. |
| **A5: Surplus reinvested compounds trust** | ⚠️ PARTIALLY EXISTS | Surplus exists (growing). Reinvestment happens (platform investment). But NOT governed by VBM/S/D/S. It's intuitive, not systematic. |
| **A7: Trust begets confidence (β-loop; absorbed A6)** | ⚠️ PARTIALLY EXISTS | INDX exists as proof. But institutional uptake near-zero. |
| **T56: Aggregate α (trust → edge via dataset)** | ❓ PROPOSED | T47's G16 resolution is logically complete. The DATA isn't: we can't yet measure whether aggregate selection actually improves with dataset density. |
| **A9: Mutualized monopoly** | ✅ EXISTS | CCP is sole resting counterparty. No private market-making inside the internal book. |
| **A5: Three reinvestment vectors (S/D/S, absorbed A11)** | ❌ PROPOSED | S/D/S framework designed but NOT implemented. No allocation decision. No governance surface. |
| **A5/T21: Three-party split (governance parameter, A12 demoted)** | ⚠️ PARTIALLY EXISTS | Performance fee split exists (75/25). But: not formalized as constitutional. Not enforced by smart contract. |
| **A13: Transparency inversion** | ⚠️ PARTIALLY EXISTS | Results are public (Quotes). But: no IPFS attestation, no blockchain certification, no independent verification. |
| **T27: Protocol network model** | ❌ PROPOSED | Single broker. No community node protocol. No second broker. |
| **T28: Linear-network decomposition** | ❌ PROPOSED | Framework exists. Zero operational implementation. No participant type beyond manager+investor is active. |
| **4 BU Architecture** | ❌ PROPOSED | Revenue mapping done (first stab). No BU P&Ls. No headcount allocation. No transfer pricing. No arm's-length operation. |
| **VBM Trust Waterfall** | ❌ PROPOSED | Framework designed (GENOTYPE--vbm). Zero operational implementation. Blocked on CFO data. |
| **Open Trust Roadmap** | ❌ PROPOSED | 5 phases designed. Phase 0 not started. |
| **North Star KPI** | ❌ PROPOSED | AuM-weighted avg Quote identified. Not computed. Not tracked. |
| **INDX Funnel** | ⚠️ DESIGNED | [[INDX_FUNNEL]]: circular model (P0→P3→α/β→P0↓), crystallization stage, messaging layer, KPI framework, multi-path development. Data infrastructure still pending (Sergio join keys). |

### Summary Count

| Status | Count |
|--------|-------|
| ✅ EXISTS | 8 |
| ⚠️ PARTIALLY EXISTS | 8 |
| ❌ PROPOSED / DOESN'T EXIST YET | 13 |

**Less than a third of the framework's elements are fully operational today.**

---

## §8 S-Curve Position

### Framework Definition (from [[GENOTYPE--vbm]])

| Phase | Characteristics | S/D/S mix |
|-------|----------------|-----------|
| **Launch** | ΔN/N >> e. Need members + rails. N is small. IMR is low. e is positive but thin. | S heavy, D heavy, C light |
| **Growth** | e inflection. Organic rising. Network effects activating. | S declining, D steady, C rising |
| **Maturity** | Gap ≈ 0. Organic at rate e is steady state. | S light, D maintenance, C dominant |

### Where Darwinex IS

**Position: Early Launch.** Evidence:

| Indicator | Value | Phase Signal |
|-----------|-------|-------------|
| **N (quality members)** | ~100K registered, likely 5-15K active | Small N. Launch. |
| **Revenue growth** | +98% YoY (annualized) | Fast growth. Launch→Growth transition possible. |
| **IMR** | Growing but not measured as KPI | Low-to-moderate. Launch. |
| **e (collective edge)** | Positive (INDX returns ~20%, Sharpe ~1.42) | e > 0 ✅. Supercritical on edge. |
| **ΔC (external confidence)** | Near-zero institutional. Most capital is retail. | Subcritical on confidence. Launch. |
| **Trust stock (X)** | €15-25M INDX AuM est. | Small X. Launch. |
| **Surplus → reinvestment** | Happening but intuitive, not governed | Pre-VBM. Launch. |
| **Platform effects** | PE1 (cost amortization) ✅, PE2-3 (risk/Quote) ✅, PE4-5 partial | Foundation active. Launch. |
| **Network effects** | NE1 (matching) ✅, NE3 (dataset) ✅. NE2,4,5,6,7 ❌ or partial. | Only 2 of 7 NEs active. Launch. |
| **Open Trust** | Phase 0 not started | Pre-Open Trust. Launch. |

### The Honest Diagnosis

Darwinex is **supercritical on edge** (e > 0, INDX works, risk engine works, matching works) and **subcritical on confidence** (near-zero institutional capital, no independent verification, no protocol network distribution).

The system WORKS — the chain from edge → credibility → matching → surplus → reinvestment functions. But it runs at **subscale.** The flywheel spins slowly because N is small, ΔC is nearly absent, and the reinvestment is intuitive rather than systematic.

**The inflection point** is when ΔC (institutional confidence) enters the equation at scale. The White Bay meeting (9 Apr), Boothbay follow-up, and First NY call are the first signals. If one of these converts to a meaningful allocation (>€10M), the Growth phase begins.

**Revenue doubling ≠ S-curve inflection.** Going from €15M to €29M is impressive operationally but doesn't change the S-curve position. It's operating leverage on existing infrastructure, not network effect activation. The S-curve inflection (matching-density amplification regime) requires: institutional ΔC, protocol network N growth, or Open Trust signal diversity.

### What the Board Should Hear

"We have a working system at subscale. The edge is real. The matching works. The surplus grows. The dataset is unique. But we haven't activated the exponential yet — because the rails are closed, the distribution is single-channel, and institutional confidence is embryonic. The Open Trust roadmap is how we activate e^X. The 4 asks are the first steps."

---

## §9 What This Means for the Board Deck

### Do's

- **Lead with the numbers.** €14.7M → ~€29M. Loss → profit. Operating leverage. These are facts the board trusts.
- **Acknowledge the gap.** "We have a working system. Here's what exists. Here's what doesn't exist yet. Here's what we're asking you to authorize."
- **Use the delta map.** Show the board exactly what's real vs proposed. They'll respect the honesty.
- **Frame the atoms as language, not theory.** "We've formalized how the company works so we can make precise decisions about where to invest."
- **Connect TABs to atoms.** "Everything you've seen from TAB-0 to TAB-7 was steps toward this framework. Here's the unified picture."

### Don'ts

- **Don't present the axiomatic framework as math.** The board doesn't need 7P/10A/49T. They need "here's the system, here's where it works, here's where it doesn't, here's what to do about it."
- **Don't assume the board knows the vocabulary.** They've seen "matching engine" and "IMR" but not "trust waterfall" or "double recurrence." Translate.
- **Don't present SoP valuation as definitive.** The €60-114M range is illustrative. Without BU-level P&Ls, it's theory.
- **Don't oversell the competitive position.** "Nobody does the full stack" is true. "We're winning" is not — at 100K users vs 40M, we haven't started competing.

---

## See Also

- [[PHENOTYPE--business-units]] — the 4 BU architecture this file assesses as PROPOSED
- [[GENOTYPE--vbm]] — the VBM framework this file assesses as DESIGNED but not operational
- [[BOARD_DECK_FRAMEWORK]] — the deck this file grounds
- [[NICHE--board-governance]] — board context (TAB-0→TAB-7 history)
- [[PHENOTYPE--institutional-confidence]] — institutional confidence (merged from investor-journey + architecture + investor-model)
- [[DELIVERABLES]] — operational status of every initiative

---

*Created 4 Apr 2026. Honest assessment of Darwinex current state vs framework aspirations. Load before the board deck.*
