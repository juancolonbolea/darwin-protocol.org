---
type: electron
atom: INDX
audience: [management, staff, protocol-engineers, regulators]
orbit: 1
language: llm
status: ACTIVE
last_updated: 2026-04-16
owns: How the blockchain attests the full chain — DvP, FIX tag semantics, the two contracts (Signal + Allocation), on-chain vs off-chain split, entity envelope.
chain_step: 5
source: [[260415-darwin-protocol-org-spec]] §Two Contracts + §Component 2 Blockchain; [[SETTLEMENT-ARCHITECTURE]] §12, §13, §14, §17; Ignacio tokenisation preliminary 2026-04-10; Kobi/Arb thread (S2/S3).
cross_refs:
  - atom: INDX
    why: "Blockchain attests Quote (e) and the X stock. Attestation is what makes e × X and e^X measurable, not just claimed."
  - atom: PROTOCOL
    why: "Operationalises §5 (P5 Dataset as substrate), §10 (Open Trust mechanics), §11 (dual-contract formalism, Structural Note 2)."
  - electron: PHENOTYPE--open-trust-roadmap
    why: "Open Trust decides WHEN to open. Blockchain attestation specifies HOW attestation works. Roadmap (this file = certification endpoint)."
  - satellite: SETTLEMENT-ARCHITECTURE
    why: "§14 FIX dictionary is the on-chain ontology. §17 defines on/off-chain split via SMPC."
  - satellite: TOKEN-HIERARCHY
    why: "Which tokens sit on-chain (INDX, DWX Phase 2) vs off-chain (DARWIN Quote as measurement)."
  - satellite: REGULATORY-ARCHITECTURE
    why: "TSTT is the only entity with dealing-as-principal permission to execute settlement matching. TSV custodies DWX (equity, private placement). Benchmark Regulation binds, not MiCA."
protocol_component: [Blockchain]
protocol_layer: Machine
protocol_piece: Protocol
---

# Blockchain Attestation — DvP, FIX, and the Two Contracts

## What the blockchain is (and isn't)

**Is:** the integrity conservator (Protocol-C). An immutable attestation layer for the routing graph — every signal, every match, every settlement, cycle-by-cycle. The moat is not a snapshot; it is a live stream ([[SETTLEMENT-ARCHITECTURE]] §13).

**Is not:** a custody layer. Client capital stays at member brokers / HRP. The Protocol manages **return ON** capital, not return **OF** capital ([[REGULATORY-ARCHITECTURE]]). Nothing the blockchain does moves principal through the Protocol operator.

Consequence: the chain attests attribution, mints INDX, and records the routing graph. It does not hold balances for investors.

## In practice — what actually gets certified

Stripped of primitives, the blockchain is a commitment to **certify** and **disclose**. Everything below is what any reader — member, investor, regulator — can verify themselves. No trust in Darwinex-the-operator required.

### 1. Certification — eight things the chain attests, every cycle

1. **Every signal submitted.** Provider ID, timestamp, FIX payload hash, Quote at submission.
2. **Every execution.** Matched allocation(s), fill price, internal-match vs overflow routing.
3. **Every settlement.** OVERFLOW external P&L, INDX 75/25 split, DWX 85/15 split — to the basis point.
4. **Every INDX mint event.** Per cycle, per strategy, as a function of ΔQuote × Outside Confidence.
5. **Every Booster contract.** Premium paid, HWM set at inception, payout computed at resolution.
6. **Every VaR preference.** Set by the investor, read by the Risk Engine, enforced at execution — drift is impossible.
7. **Every track-record entry.** Append-only. No silent edits. Prior states always retrievable.
8. **Every fee distribution.** Every basis point traces to a cycle, a strategy, a recipient.

### 2. Disclosure — the choice members make

Each member picks a disclosure level on four axes. The choice is on-chain; the surplus share follows via `g(ε)` ([[SETTLEMENT-ARCHITECTURE]] §17). Not a tax — a choice.

| Axis | ε low → ε high | What a member is disclosing |
|---|---|---|
| **What** (data) | Aggregate hashes → raw signals in commons | Signal content |
| **How noisy** | Heavily noised → clean | Fidelity / protected intent |
| **When** (timing) | T+5 → real-time | Freshness of the signal |
| **How much skin** (capital) | None → cash self-investment | Own money on own strategy |

Capital staking is the strongest disclosure — own money on own strategy. Boosters are the leveraged form. DarwinIA is system-funded (zero provider capital at risk).

### 3. What any reader can verify without asking Darwinex

- **Provider track records** — uneditable history. No cherry-picking, no removed losing months.
- **INDX selection reasoning** — which DARWIN got selected, with which Quote, at which disclosure level, against which peers.
- **Fee attribution** — every basis point paid is tied to a cycle, a strategy, a recipient.
- **Routing graph** — which ideas went to which capital (the irreducible moat — [[SETTLEMENT-ARCHITECTURE]] §13).
- **Processor attribution** — for pDARWINs, the `data_attribution_ratio` is a chain commitment (SMPC computes, hash commits).

### 4. What stays private (by design)

Client capital balances; raw signal payloads below max ε; strategy position state (protects intent); member identity (pseudonym default, opt-in de-anonymisation).

### 5. What this replaces

| Today (operator-centric) | Tomorrow (chain-attested) |
|---|---|
| Darwinex computes INDX internally; members trust the output | Inputs and computation committed; anyone can reproduce |
| Track records stored in internal DB; silent edits possible | Append-only; edits are new events, history preserved |
| Fee distribution reconciled monthly by fund admin | Per-cycle distribution; no reconciliation gap |
| VaR drift caught in post-hoc audit | Every preference change attested; drift impossible |
| Selection into INDX = black box | Every inclusion / exclusion event explained on-chain |

This is what "certification" means operationally: the chain converts *"trust us, we're honest"* into *"here's the receipt."*

## What gets attested

Four primitives hit chain:

| Primitive | Source | Attestation |
|---|---|---|
| **Quote** | FIX tag 5002 | Risk-adjusted credibility at signal time. Proven credibility (retrospective). |
| **Cycle attribution** | FIX tag 5008 | Settled P&L per provider per cycle, reconciled to P3 trust stock. |
| **Disclosure level** | g(ε) under SMPC | Which share of network surplus the node earned ([[SETTLEMENT-ARCHITECTURE]] §17). |
| **INDX mint events** | ΔQuote × Outside Confidence > 0 | Per-cycle stock increment. `e × X` resolved on-chain. |

Attestation is continuous, not month-end. That is what makes window dressing impossible.

## The two contracts

The dual routing mechanism is formalised in exactly TWO standard contracts (ISDA-equivalent for investment strategies) — not one, not many. See [[PROTOCOL]] §11 Structural Note 2 (two directions through the matrix).

| Contract | Carries | Member MAKES | Member TAKES | On-chain record |
|---|---|---|---|---|
| **Signal Contract** | Edge outward (left→right: axiom→component→product) | Investment ideas (FIX signals) | Execution confirmations + attributed P&L + fee income | Signal submitted → Quote attested → fee routed |
| **Allocation Contract** | Savings inward (right→left: product→component→axiom) | Capital / margin / capacity | Strategy exposure + risk-adjusted returns + settlement attribution | Capital committed → exposure matched → return attributed |

**Every node signs both.** Providers heavy-Signal / light-Allocation, investors the inverse, brokers balanced, infrastructure routing-weighted. Together the two contracts ARE the unified PM agreement. VaR, fee schedule, and margin arrangement are parameters inside the pair — not separate docs.

No "clients." No "service providers." Only **nodes**, each making and taking different mixes. The protocol settles NET per cycle.

> **Hidden relationship — two contracts as the two sides of T58's bijection.** Signal contract value = f(O, P, Per); Allocation contract capacity = Cap. The two contracts are not administratively separate — they are the input and output sides of the Open Trust ↔ INDX duality (CONSTITUTION T58) made legally concrete. Signal attests what disclosure produces (V/S/I dimensions); Allocation attests what disclosure absorbs (P dimension). One bijection, two signed sides.

## FIX → chain mapping

The darwin-protocol.org FIX 4.4 extension (5000+ range) is the on-chain ontology. Any system implementing these tags is implementing the Protocol's philosophy, not just its API.

| Tag | Field | Primitive | On-chain role |
|---|---|---|---|
| 5001 | `DarwinProviderID` | P1 (source of credibility) | Signer identity for Signal Contract |
| 5002 | `DarwinQuote` | P1 (risk-adjusted credibility at signal time) | The attestation — what INDX minting is a function of |
| 5003 | `SettlementType` | P4→P3 | Routes to OVERFLOW / INDX / DWX settlement leg |
| 5006 | `IMRFlag` | × → ^ switch | Internal (1) stays in e^X domain; overflow (0) exits to e×X |
| 5007 | `CycleID` | I+P reference | Links attestation to the discrete engine cycle |
| 5008 | `PnLAttribution` | P3 reconciliation | Settlement output; updates trust stock |

Full table and derivation: [[SETTLEMENT-ARCHITECTURE]] §14.

## On-chain / off-chain split

| Lives on-chain | Lives off-chain (SMPC) | Never on-chain |
|---|---|---|
| INDX mint / transfer events | Shapley attribution across providers | Client capital / margin |
| DWX conversion events (Phase 2) | Disclosure measurement g(ε) | Raw signal payloads |
| Attribution commitments (hashes) | Processor `data_attribution_ratio` | Strategy position state |
| Cycle IDs + routing-graph updates | Raw dataset access | Unredacted FIX messages |

Processed DARWINs are flagged `source=community_processed` and excluded from the community dataset that feeds processors — derived goods don't re-enter the raw commons ([[SETTLEMENT-ARCHITECTURE]] §17).

## Wave-particle collapse — why this is DvP

Traditional finance separates match from settle; the gap is where counterparty risk lives. At real-time settlement frequency the matching engine and the settlement layer **fuse**: every match IS a settlement transaction. A matched signal and a matched allocation settle atomically — no window for defection, no month-end adjustment.

This is the DvP claim: delivery (execution confirmation) and payment (attribution + fee routing) are the same on-chain event. Neither side can defect. See [[SETTLEMENT-ARCHITECTURE]] §12 (continuous/discrete convergence).

Booster/payout duality follows the same logic: the Booster IS the payout at inception, the payout IS the Booster at resolution. Same contract, two moments, two signatures.

## Entity and regulatory envelope

| Token / record | Entity | Why | Regulatory basis |
|---|---|---|---|
| **INDX** (earned utility token) | TSTT (FCA FRN 586466) | Matching engine + prop trading live in TSTT. Dealing-as-principal is the only permission that lets settlement matching execute on-chain. | FCA PS19/22 — utility token outside conduct perimeter when earned (not sold) and bounded to members. |
| **DWX** (equity-in-protocol, Phase 2) | TSV (HoldCo, UK 07998591) | DWX ≡ cap table ownership (27,751 shares FD). INDX→DWX conversion = earning into TSV equity. | Full securities law. Private placement or CSSF prospectus. Off-chain until prospectus cleared. |
| **DARWIN Quote** | Not tokenised | Quote is a measurement, not a token. Product is OTC TRS. | TSTT dealing. |
| **Routing graph** | TSTT (attestation) | The irreducible monopoly — only the Protocol knows where every idea went and what P&L it generated ([[SETTLEMENT-ARCHITECTURE]] §13). | Settlement attribution; not custody. |

**Binding constraint is Benchmark Regulation, not MiCA** (Ignacio Jr preliminary 2026-04-10). INDX as a working token earned by members falls outside MiCA; the risk vector is the INDX strategy distributed to external investors triggering Benchmark Reg. Entity separation already done (TSTT vs TSV) resolves the intra-group conflict. Formal Ignacio assessment and Addleshaw Goddard intro sequence the legal clearance for Phase 2.

## Token formulas on-chain

| Token | Formula | What the chain mints |
|---|---|---|
| INDX | **e × X** | Per-cycle multiplicative stock. `ΔQuote × Outside Confidence` as the mint trigger; the event is a ledger increment, not a transfer of principal. |
| DWX | **e^X** | Exponential in network size; minted against TSV equity (Phase 2). The INDX→DWX exchange rate is an **S-curve**, not linear ([[S-CURVE]]). |

INDX and DWX are the same mechanism at two time horizons — flow vs stock ([[TOKEN-HIERARCHY]] §6). The chain records both; the difference is regulatory envelope, not mechanics.

## Phase-1 / Phase-2

**Phase 1 (today):** Pure ledger settlement inside the member network. Quote attestation exists; no on-chain token movement. The substrate is intact; the chain layer is not yet lit.

**Phase 2 (next):** Blockchain-native settlement at matching frequency. Sequenced by:
1. Ignacio formal written assessment (pending, 10 Apr preliminary)
2. Addleshaw Goddard review (intro accepted 2026-04-07)
3. Benchmark Reg posture cleared
4. Fireblocks technical validation (conditional on legal classification)

Open Trust opening sequence (SOURCE → PROCESS → MATCH → ROUTE) gates which stages can run on-chain first — see [[PHENOTYPE--open-trust-roadmap]]. Phase 2 can ship SOURCE-layer attestation before the full MATCH layer goes live.

## What this electron does not specify

- Smart-contract pseudocode or Solidity draft. The electron is a conceptual spec; contract engineering depends on chain selection (Fireblocks guidance).
- FIX I/O tag semantics beyond the attestation subset. Full dictionary deserves its own electron (K2 — see [[DELIVERABLES]] KB Completion Backlog).
- Prediction-market attestation (Component 7) — different concerns, tracked separately.

## See Also

- [[INDX]] §1 — the attestation layer as the enabler of e^X.
- [[PROTOCOL]] §5 (primitives), §10 (Open Trust), §11 Structural Note 2 (two directions).
- [[SETTLEMENT-ARCHITECTURE]] §12 (wave-particle duality), §13 (routing graph moat), §14 (FIX dictionary), §17 (Open Trust mechanics).
- [[TOKEN-HIERARCHY]] — nested meritocracy, INDX/DWX formulas.
- [[REGULATORY-ARCHITECTURE]] — token-to-entity mapping, Return ON not OF.
- [[CORRUPTION-RESISTANCE]] — blockchain attestation as one of the seven defenses.
- [[PHENOTYPE--open-trust-roadmap]] — staged opening; when attestation crosses from internal to external.
- [[PHENOTYPE--matching-engine]] — what gets matched, the engine the chain is fused with.
- `output/260415-darwin-protocol-org-spec.md` §Two Contracts, §Component 2.
