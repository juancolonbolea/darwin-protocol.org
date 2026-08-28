---
type: electron
atom: INDX
audience: [management, staff]
orbit: 1
language: llm
status: ACTIVE
last_updated: 2026-04-01
owns: Open-sourcing the INDX funnel. Four stages (SOURCE/PROCESS/MATCH/ROUTE). Blockchain certification. Open source as prerequisite.
chain_step: 5
source: _archive/CANONICAL_FRAMING.md (Open Trust section, now superseded by this file), Jarrod meeting 1 Apr 2026
cross_refs:
  - atom: PROTOCOL
    why: "Blockchain = certification roadmap. Attestation → certification evolution."
  - atom: DEVELOP
    why: "Open rails = accessibility, lower friction for external experimenters"
  - electron: PHENOTYPE--blockchain-attestation
    why: "This roadmap decides WHEN to open. Blockchain-attestation specifies HOW attestation works mechanically — DvP, FIX tag semantics, dual contracts, entity envelope."
protocol_component: [Blockchain, Open Protocol Layer]
protocol_layer: Application
protocol_piece: Method
---

# Open Trust Roadmap — From Evolution Bottleneck to Evolution Enabler

## What Open Trust is

Open Trust = open-sourcing the INDX funnel components. Making the rails available for external experimentation while keeping the engine and unique data proprietary.

The title says it: "From Evolution Bottleneck to Evolution Enabler." The current system bottlenecks on internal capacity to experiment. Open Trust removes the bottleneck by letting anyone build on the rails.

**Open Trust is one view of ★ internalization** — specifically the data inversion (proprietary → open, the X circle, LIBERATE). It is not a standalone project. It is the third flow reversal (see [[PROTOCOL]] §1 "The Name as Roadmap"): from "With Nothing for the community" to "With INdX compounding." **Prerequisite:** the intent inversion (★ protected, IMR sufficient) must be far enough along before live data can be safely opened — otherwise liberation = exploitation. Historical/development data can be opened earlier; live positioning data requires matching to protect intent first. The four stages below track this dependency: SOURCE (historical, safe now) → PROCESS (sealed enclave, moderate IMR) → MATCH (live signals, high IMR) → ROUTE (full liberation, IMR near complete).

## Four stages of opening

| Stage | What opens | What stays closed | Moat |
|-------|-----------|-------------------|------|
| **SOURCE** | PyEventBT, Data SDK, open APIs | The data (100K track records, live positioning) | Unique dataset |
| **PROCESS** | Sealed enclave (code to data) | Matching engine parameters, risk engine internals | Algorithm |
| **MATCH** | Signal schema, spread rescue interface | Book 100 state | Real-time state |
| **ROUTE** | Signal routing, overflow management | — | Network effect |

**Open rails + closed engine + unique data = the moat.**

**Four opening phases = four forces being released.** SOURCE opens Variation (new experimenters can access the method). PROCESS opens Selection (sealed enclave enables informed selection across more data). MATCH opens Inheritance (live signal compounds trust in real time). ROUTE opens Propagation (trust propagates to external nodes). The stages are sequenced by IMR dependency — the same ordering as V→S→I→P: you cannot propagate what hasn't been inherited, inherit what hasn't been selected, or select what hasn't varied. See [[CONSTITUTION]] §Force-Axiom Mapping, [[PROTOCOL]] §1.

## Why open source is a prerequisite

From Jarrod call: "For the experiment to be implemented, the entire stack must be open source; otherwise, external parties will face too much friction to execute the experiment, resulting in a return to reliance on benevolent dictator bets."

Current friction: only employee members can work around the system's limitations. The "we" concept can't be properly leveraged when only insiders can experiment. Open source eliminates this friction and enables the community to build on the rails.

## Blockchain certification

The trust verification mechanism evolves:

| Stage | Mechanism | Trust model |
|-------|-----------|-------------|
| **Current: Attestation** | Risk Engine attests at arm's length | Centralised, operational |
| **Roadmap: Certification** | Darwinex blockchain + smart contracts certify trades and settle matching | Decentralised, trustless |

The concept is identical (e×X at every cycle, INDX minted on overflow, matching surplus reinvested). Only the trust mechanism changes. Smart contracts automatically distribute minted INDX (profits) to contributing parties. Independent verification that the system is not "fudging with it."

Whether tokenised or not doesn't change the mechanics — only the trust architecture. The atoms describe the concept; implementation evolves.

Mechanics of the certification endpoint (DvP, FIX tag semantics, dual contracts, on/off-chain split, entity envelope) are specified in [[PHENOTYPE--blockchain-attestation]]. This roadmap decides **when** to open; that electron specifies **how** attestation works.

## The Big Bang

From Jarrod call: The "Big Bang" = when all players understand the game → exponential improvement → dependency on individuals eliminated → the chain flows more freely. The process is analogous to a nuclear reaction reaching criticality — the clear explanation of the game allows the explosion to flow more freely.

Open Trust IS the Big Bang mechanism. It makes the game visible, verifiable, and buildable by anyone. The rails become public infrastructure. The engine remains proprietary. The data remains unique. But the RULES are open — and understanding the rules is what removes the organisational bottleneck.

## Experimental strategy

From Jarrod call:
- **Benevolent dictator bets** (current): internal decisions on surplus allocation. Single point of failure.
- **Community experiments** (Open Trust): anyone can propose, build, and test. Growth experiments documented in the fossil record.
- **The Discord test**: explain pros and cons of offering a cheaper stack. The community decides. The decision-making process IS the marketing.
- **The Kaggle test**: provide the stack's copy + €100K. Can external experimenters source users more cheaply than current methods?

Each experiment = data. Data feeds the Hatchery. The system learns.

## Data sources

- **Labs MCP:** Current system state (AuM, INDX, allocations)
- **PRODX (DB 3):** System configuration, rail parameters
- **GitHub (future):** Open-sourced components (PyEventBT, Data SDK, signal schema)
