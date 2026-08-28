---
type: electron
atom: PROTOCOL
audience: [management, staff, members, board]
orbit: 2
language: llm
status: SCAFFOLD — pre-board anchor for P2 Open Trust deck reclamation pillar
last_updated: 2026-04-19
owns: Member-facing Open Trust dashboard — what a member sees when they engage with the disclosure gradient (data / noise / timing / capital) and how their disclosure maps to IMR-lift and reclamation-share.
chain_step: 6
source: [[PROTOCOL]] §10 (Open Trust mechanism); [[SETTLEMENT-ARCHITECTURE]] §2, §8; [[DARWINEX_DOMAIN_MODEL]] glossary (Open Trust, IMR, Reclamation); `output/260419-p2-open-trust-reclamation-pillar.md`.
cross_refs:
  - atom: PROTOCOL
    why: "Operationalises §10 Open Trust. The dashboard is the member-facing expression of the disclosure-gradient mechanism."
  - satellite: SETTLEMENT-ARCHITECTURE
    why: "§8 reclamation framing. Member sees their contribution to IMR lift = their contribution to Main Street reclaimed."
  - electron: PHENOTYPE--blockchain-attestation
    why: "Attestation is what makes each disclosure level measurable. The dashboard renders attested state, not claims."
  - electron: PHENOTYPE--open-trust-roadmap
    why: "Roadmap = when the disclosure gradient opens. Dashboard = what the member sees at each opening."
protocol_component: [Open Protocol Layer, Trust Signal]
---

# Open Trust Dashboard — Member-Facing Reclamation View

## Status

**SCAFFOLD.** Created 2026-04-19 to provide a visual/spec anchor for the P2 Open Trust deck reclamation pillar (ship 24 Apr). Not a full electron yet — fills in the core loop (disclosure → IMR → reclamation) at spec level. Full build is K6 post-board.

## Purpose

Answer one member question: *"What does Open Trust give me, and what does my disclosure give the Protocol?"*

The dashboard is the member-side mirror of the board-side reclamation curve. The board sees aggregate IMR → overflow → Main Street reclaimed. The member sees their *own* disclosure level, their *own* IMR contribution, and their *own* reclamation share.

## The four disclosure levels

Per [[PROTOCOL]] §10, Open Trust is a gradient, not a binary. Each level unlocks a different attestation surface:

| Level | What the member discloses | What is attested | Member's reclamation signal |
|---|---|---|---|
| **L1 Data** | Raw ticks / fills (X substrate, Component 5b) | Trade record | "Your flow is part of the 65% not-yet-reclaimed" |
| **L2 Noise** | Signal clarity (ε — error distribution around Quote) | Quote precision | "Your certified edge lifts the Dataset's signal-to-noise" |
| **L3 Timing** | Entry/exit timing disclosure | Temporal alpha attribution | "Your timing contributes N bps to matched-flow P&L" |
| **L4 Capital** | Skin-in-the-game (own capital aligned to own Quote) | Capital-backed conviction | "Your capital converts overflow to matched flow — directly reclaims X$" |

Each level is opt-in and attested on-chain (see [[PHENOTYPE--blockchain-attestation]]).

## The core loop

```
member disclosure (L1→L4)
   ↓
Quote precision rises (ε shrinks)
   ↓
matched flow rises (more confidence internalised)
   ↓
IMR_member rises → IMR_aggregate rises
   ↓
overflow_member shrinks → Main Street_member reclaimed
   ↓
member sees: "You reclaimed $X this period"
```

## Dashboard layout (spec)

### Hero panel — the reclamation-share gauge

- **Primary number:** member's personal `reclamation_share_t` = `matched_flow_member / total_flow_member` (member-level IMR).
- **Comparison:** platform-aggregate IMR as a secondary line on the same gauge (so member sees where they sit vs platform).
- **Delta:** period-over-period `reclamation_delta_member` (see [[PROTOCOL]] §6 scalar KPI).

### Disclosure ladder

- Four steps (L1–L4) rendered as a ladder. Filled = disclosed + attested. Each step shows:
  - What it unlocks (protocol side).
  - What the member gains (member side: INDX eligibility, booster multiplier, Quote visibility).
- Next-step CTA is the single primary action.

### Reclamation-curve inset

- The canonical IMR → overflow curve (same chart as P1 board deck and P2 pillar).
- Member's position on the curve plotted as a point.
- Trajectory arrow showing movement over last 90 days.

### Attestation receipts

- List of the member's on-chain attestations (level, timestamp, tx hash link).
- One-click "verify on-chain" per row.

## Data dependencies

- **`reclamation_share_member`** — new query. Derives from `deal` table filtered by member / counterparty. Sergio validates feasibility.
- **`IMR_member` per period** — subset of `260419-i1-mcp-queries-imr-overflow.md` Query 3 (segmentation), narrowed to a single member.
- **Attestation log** — blockchain (Component 2). Already live per [[PHENOTYPE--blockchain-attestation]].
- **Disclosure-level state** — new state machine. Member's current L1–L4 status. Not yet specified; part of K6 full build.

## What this scaffold does NOT specify

- Exact UI framework / component library.
- Notification surface (when does the member get pinged that their reclamation share moved?).
- Social comparison layer (do members see each other's reclamation share, anonymised?).
- Disclosure-level state machine persistence (DB table, transitions, audit trail).
- Mobile layout.

All of the above are K6 full-build scope, post-board.

## §INDX-dual view — output-side scoring visible to the member (T58)

Open Trust dashboard exposes the *input side* (disclosure axes). The INDX-dual view exposes the *output side* (INDX scoring dimensions) so the member can see the closed control loop in action: disclosure → score → expected allocation → re-disclosure.

**What the member sees.** Four dimensions, one per force, each paired with the disclosure axis that feeds it:

| Force | Disclosure axis (input) | INDX dimension (output) | What the member sees |
|---|---|---|---|
| V | Data | **Originality (O)** | "Your signal is X% novel vs the dataset's existing surface" |
| S | Noise | **Performance (P)** | "Your ε-calibrated edge is ranked Y-th of N" |
| I | Timing | **Persistence (Per)** | "Your edge has held for Z consecutive cycles" |
| P | Capital | **Capacity (Cap)** | "Your Cap absorbs $W internally — reclaims $W of overflow directly" |

**The Φ panel.** Shows the member's current `Φ = O^a · P^b · Per^c · Cap^d` score with a gate light (`RiskEngine = pass / fail`) beside it. If the gate fails, Φ is greyed — a visual signal that legitimacy is multiplicative, not additive (see [[INDX]] §2).

**The expected-allocation curve.** For the member's current disclosure vector *d*, the dashboard projects expected capital allocation `ΔC(d)` over the next cycle, using the current power-weights and platform-state. The curve shifts live as the member moves up the disclosure ladder — so the Bellman dynamic is visible, not abstract: *raise disclosure → watch expected allocation rise → re-disclose*.

**Why this closes the loop.** PROTOCOL §11's Meritocracy × Application cell requires a member-resolution view of the meritocratic scoring surface. The INDX-dual view IS that surface: the member-facing Φ score IS the meritocratic scoring surface rendered at individual resolution, with the expected-allocation curve making the "protocol evolves toward openness by economics" claim (T60) concrete at the individual level.

**Data dependencies (additional).**
- **O, P, Per, Cap per member** — derives from existing INDX scoring; surface at member-level in the dashboard context.
- **Risk Engine gate state** — boolean, already computed upstream; new requirement is the visual surface.
- **Power weights (a, b, c, d)** — read from platform-state config; weights are protocol-maturity-tunable per [[INDX-COMPOSITION-RULE]].

**Not yet specified (K6 scope).** Whether originality is frozen at first certification or recomputed each cycle; whether Cap is simulated or revealed; how originality decomposes across P5's five channels. All queued in [[INDX-COMPOSITION-RULE]].

## Use in P2 Open Trust deck

The P2 pillar slide can use a single mockup panel from this spec — the **disclosure ladder + reclamation-share gauge** side-by-side. That is the minimum visual needed to make the reclamation pillar feel concrete rather than abstract. See `output/260419-p2-open-trust-reclamation-pillar.md` §2 for the narrative frame.

## Next actions (post-board, K6 full build)

1. Sergio validates `reclamation_share_member` query feasibility against `deal` table.
2. Design spike on disclosure-level state machine (own electron, `PHENOTYPE--disclosure-ladder`).
3. Figma mockup of hero panel + ladder.
4. Member-research validation (3–5 INDX providers review the mockup).
5. Promote this file from SCAFFOLD to ACTIVE once mockup + query exist.
