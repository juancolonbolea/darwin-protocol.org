---
type: electron
atom: REWARD
audience: [management]
orbit: 2
language: llm
status: ACTIVE
last_updated: 2026-04-03
owns: |
  Prop = venue's balance sheet. Prop as BOTH constitutive (CCP capital provider)
  AND customer (pays Data/Matching Rails for services). Transfer pricing formula.
  Five capital sources. A9 through Prop lens. Market making economics (3 profit levers).
source:
  - 260403-prop-bu-axiom-bridge.md
  - 260403-arb-market-making-arbitrage-economics.md
  - sessions/260403-consolidated.md §15, §17
cross_refs:
  - atom: REWARD
    why: "Prop operationalizes the venue concept from chain step 4"
  - electron: PHENOTYPE--business-units
    why: "Prop is one of 4 BUs — this electron deep-dives its dual identity"
  - electron: PHENOTYPE--matching-engine
    why: "CCP's balance sheet IS Prop. Matching Rails depends on Prop capital."
  - electron: GENOTYPE--vbm
    why: "Prop deploys capital per VBM reinvestment decisions"
  - electron: GENOTYPE--linear-network
    why: "Prop captures network value (T28) for reinvestment"
  - atom: REWARD
    why: "Prop ROE = proof that A5 works operationally"
derived_from: [A5, A9, T2, T14, T21]
protocol_component: [Settlement Layer, Matching Engine]
protocol_layer: Application
protocol_piece: Economy
---

# Prop — The Venue's Balance Sheet

> When axioms say "venue" → Prop's operational incarnation. Prop IS the mutualized market maker, the CCP's capital provider, and the reinvestment arm of the DARWIN economy.

## Core Identity Resolution

| Axiom reference | Operational meaning via Prop |
|----------------|------------------------------|
| "Venue reinvests" ([[CONSTITUTION]]) | Prop deploys capital |
| "Venue's 25%" (governance parameter, [[CONSTITUTION]]) | Prop's retained earnings |
| "Mutualized monopoly" ([[CONSTITUTION]]) | Prop's CCP monopoly (sole resting counterparty in Book 100) |
| "No private extraction" ([[CONSTITUTION]]) | No entity other than Prop does market-making inside Book 100 |

## Dual Identity

Prop holds TWO roles simultaneously:

| Role | What it means | Why it matters |
|------|-------------|----------------|
| **Constitutive** | CCP's balance sheet — Matching Rails doesn't function without Prop's capital | Prop is infrastructure, not optional |
| **Customer** | Pays Data Rails for data, pays Matching Rails for execution | Prop generates transfer pricing revenue for other BUs |

The dual identity is the nexus: capital layer AND consumer of other BUs' services. This creates arm's length transfer pricing relationships that validate the 4 BU decomposition.

## Transfer Pricing Formula (Prop P&L)

```
Prop P&L =
  + Returns on deployed capital
    ├─ Spread capture (internal matching)
    ├─ Carry income (overnight NOP financing)
    └─ Overflow P&L (vs external market)
  − Data Rails fees (data, risk models, analytics)
  − Matching Rails fees (execution, infrastructure)
  − Capital cost
  ─────────────────────────────────────────────
  = Net returns = venue's compounded surplus ([[CONSTITUTION]] materialized)
```

**The A5 test:**

| Outcome | Meaning | Action |
|---------|---------|--------|
| Prop returns > input costs | [[CONSTITUTION]] works — reinvestment compounds trust | Continue active reinvestment |
| Prop returns < input costs | Reinvestment is value-destroying | Compound organically instead |

Prop ROE is the empirical proof that the axiom system works operationally.

## Five Capital Sources

| # | Source | Axiom grounding |
|---|--------|----------------|
| 1 | Venue share (25% of performance fees) | governance parameter (T21) — three-party split |
| 2 | Internal matching surplus (spread saved in Book 100) | [[CONSTITUTION]], [[CONSTITUTION]] — mutualized monopoly |
| 3 | Carry income (overnight NOP financing) | [[CONSTITUTION]] — CCP as sole counterparty |
| 4 | Overflow P&L (vs external market) | [[CONSTITUTION]] — edge proven externally |
| 5 | Membership surplus (Nτ) | [[CONSTITUTION]] — community self-funding |

## Capital Deployment (Three Vectors per [[CONSTITUTION]])

| Vector | Prop deployment | Transfer to BU |
|--------|----------------|---------------|
| **Compound** | Deploy as CCP market maker at rate ≥ e | Internal (Prop retains) |
| **Source** | Fund distribution expansion ([[CONSTITUTION]] community nodes) | Retail Broker / Community nodes |
| **Develop** | Fund better rails (data infra, risk engine, matching) | Data Rails + Matching Rails |

VBM hurdle rate (e × X) determines whether Prop deploys actively or compounds organically. See: [[GENOTYPE--vbm]].

## A9 Through Prop Lens

[[CONSTITUTION]] (no private extraction inside the venue) has specific Prop implications:

| Rule | Prop implementation |
|------|---------------------|
| CCP = sole resting counterparty | Prop's limit orders are the ONLY resting orders in Book 100 |
| No member limit orders internally | All member orders are market orders inside the venue |
| All internal surplus mutualized | Prop retains ALL spread savings (not distributed to individual members) |
| Monopoly acceptable because... | 100% of Prop surplus reinvested per [[CONSTITUTION]] |

**Why competition between market makers is a BUG** ([[CONSTITUTION]]): In extractive systems, competition → tighter spreads (good). In mutualized systems, competition → diluted surplus → less reinvestment → worse for everyone. Prop's monopoly IS value creation.

## Market Making Economics (3 Profit Levers)

From Arb analysis (260403):

| # | Lever | Mechanism | Prop relevance |
|---|-------|-----------|----------------|
| 1 | **Exchange cost arbitrage** | Member vs non-member spread — exchange-member costs < non-member | Prop as exchange member |
| 2 | **Contract denomination arbitrage** | Quote in micros, hedge in standards — spread between denominations | Prop's execution advantage |
| 3 | **Internal matching rate** | What gets netted internally vs goes to street — higher IMR = more profit | [[CONSTITUTION]] — scales with N |

As N grows, Lever 3 dominates: more internal matching → more spread saved → more Prop surplus → more reinvestment → better rails → more members → more matching. The virtuous cycle.

## FY2025 Financials

| Metric | Value |
|--------|-------|
| Revenue | €2,243K (15% of group) |
| — Spread capture | €1,677K |
| — Other gains/losses | €566K |
| Est. OpEx | ~€100K (lean — capital cost is the real cost) |
| Comp set | Citadel Securities model |
| Multiple range | 3-5x earnings |
| Implied value | €5-10M |

## See Also

- [[REWARD]] — parent atom (chain step 4 — surplus and matching)
- [[PHENOTYPE--business-units]] — Prop within the 4 BU architecture
- [[PHENOTYPE--matching-engine]] — CCP mechanics that Prop capitalizes
- [[GENOTYPE--vbm]] — VBM reinvestment decisions drive Prop's capital deployment
- [[GENOTYPE--linear-network]] — Prop captures network value per T28
- [[CORRUPTION-RESISTANCE]] — no private extraction (A9) as constitutional guarantee

---

*Created 3 Apr 2026. Prop = where axioms meet capital. The venue's balance sheet.*
