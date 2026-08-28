---
type: electron
atom: DEVELOP
orbit: 2
language: dual
status: ACTIVE
last_updated: 2026-04-10
owns: Processor member model. Intent data monopoly thesis. CrunchDAO co-integrated partnership. P+C+O reward mechanism. Sivers movement dynamics. Data provider = SOURCE member. Sealed enclave regulatory solution.
chain_step: 6
source: Juan Colón strategic session 10 Apr 2026, CrunchDAO email thread 8-9 Apr 2026, Numerai deep research, Derek Sivers "First Follower"
cross_refs:
  - atom: DEVELOP
    electron: PHENOTYPE--open-trust-roadmap
    why: "Processor members are the Process action activated via Open Trust. Sealed enclave = the infrastructure."
  - atom: DEVELOP
    electron: PHENOTYPE--dataset
    why: "The dataset IS the moat. Intent data = the chicken. Processed alpha = the egg."
  - atom: REWARD
    electron: PHENOTYPE--matching-engine
    why: "Capacity scoring requires matching engine data. Internal matching rate = ground truth for scalability."
  - atom: INDX
    electron: PHENOTYPE--indx-pipeline
    why: "Processor signals improve INDX allocation. P+C+O scoring measures contribution to ΔQuote × Confidence."
  - atom: DEVELOP
    why: "Data Royalty (20% processor rewards → community fund) and INDX staking are economic mechanisms."
protocol_component: [Open Protocol Layer, Trust Signal]
protocol_layer: Application
protocol_piece: Method
---

## LLM_SECTION

## The Thesis: Intent Data Monopoly × e×X

Darwinex owns the only statistically significant trading INTENT dataset in the world. 10K+ live traders with real capital at risk express directional views in real time. This is not sentiment (opinions) — it is INTENT (money-backed predictions). Each individual trader has informational asymmetry TO Darwinex — they know their edge, their market. But Darwinex KNOWS what EVERYONE is telling it. The aggregate intent dataset predicts market outcomes.

The moat sits at the intersection of e×X. Edge (e) = the quality of the intent data. External Confidence (X) = capital allocated to INDX. More signal sources → richer intent data → better predictions → more allocator confidence → more AUM → higher internal matching → more INDX throughput → bigger rewards → more processors attracted → more signal sources. Natural monopoly via compounding network effects + flow-to-flow dynamics.

**Own the chicken (intent data sourcing rails), share the egg (processed alpha).** Processors are commodity — CrunchDAO, Kaggle participants, AI agents, anyone. The data is the scarce resource. Their job: identify every alpha vector in the asset universe hidden within the aggregate intent signal.

## Member Actions Mapping

| Role | Member Action | What they contribute | How they earn |
|------|--------------|---------------------|---------------|
| Traders | SOURCE + CONTRIBUTE | Trading intent data (live positions, directional views) | Darwinia rewards, INDX |
| Processor members | PROCESS | Alpha extraction from aggregate intent signal | P+C+O score × INDX stake |
| Data providers | SOURCE | Alternative data (institutional flow, satellite, on-chain) | Cradle-to-grave INDX attribution |
| Catalysts | SOURCE + DEVELOP | Community building, education, tools | Community fund (20% data royalty) |
| Allocators | COMPOUND | Capital (Outside Confidence) | INDX returns |

Data providers are no different from traders — both are data sources performing the SOURCE action. Both should be rewarded via the same cradle-to-grave attribution mechanism. A $100K/year flat-fee dataset that contributes to $10M in INDX performance would earn FAR more under a success model. This is a better deal for data providers. They'd CHOOSE the Darwinex model over flat fees if their data has alpha.

## CrunchDAO Partnership

**Contact:** Jean Herelle (jean.herelle@crunchdao.com), Founder/CEO, CrunchDAO / Crunch Lab Inc.
**Meeting:** 8 Apr 2026 (Juan, Martí, Jarrod × Jean). Email thread: "Great meeting today — Darwinex × CrunchDAO next steps"
**Engagement model:** Co-integrated (confirmed 10 Apr). Co-branded metamodel, Jean distributes via US + Middle East + digital AUM.

**CrunchDAO's role — middleman on three fronts:**
1. **Processor member source** — recruitment channel for the Process action (11K+ scientists, 1,200+ PhDs)
2. **Distribution end-node** — allocators already trust Jean (ADIA Lab partnership proven)
3. **Critical mass test** — CrunchDAO validates whether the intent dataset has enough signal for external processors to find alpha. If they can't → dataset hasn't reached critical mass. If they can → thesis validated.

**CrunchDAO is the first follower, not the leader.** If Darwinex owns the chicken, allocators come on their own. Jean accelerates but isn't essential. The movement outlives the first follower.

**CrunchDAO capabilities:**
- 11,000+ AI engineers, 1,200+ PhDs, 40,000 ML models deployed
- ADIA Lab partnership: "standard ADIA approach" — raw data never moves, scientists interact with transformed representations only. Jean uses same approach for his own fund.
- Proven results: +17% vs ADIA Lab causality benchmark, +14% vs Broad Institute CV benchmark, 4% trading cost savings (FX pricing, major bank)
- Infrastructure: confidential compute, Sybil-resistant, auditable on-chain results

**Data privacy approach (Jean's recommendation, confirmed correct):**
- **Differential privacy** for development dataset: ε-parameterised noise injection. Battle-tested by Numerai, ADIA, Macquarie, DataCrunch. Already in sealed enclave stack (Layer 6: OpenDP). Preserves aggregate intent patterns while making individual track records non-reverse-engineerable.
- **Secure MPC** rejected for Phase 1: 2-30x overhead, overkill for centralised data. May apply later for multi-party data combination.
- **Sealed enclave** for production: code comes to data, data never leaves. Firecracker + nsjail + RestrictedPython + OpenDP (see [[PHENOTYPE--open-trust-roadmap]]).

**Two options offered by Jean (8 Apr email):**
1. Co-integrated: co-branded metamodel, Jean distributes → **SELECTED**
2. Standalone: $10K/month + rewards → not selected

**Pending:** Whiteboard session on data transformation spec. Predictions-only vs code-to-data decision parked until first technical call.

## Reward Mechanism: Performance × Capacity × Originality

What we reward is what we get. We want signals that are real, scalable, and original.

### Performance (P) — Is the signal real?

```
P = corr(predicted_market_outcome, realised_outcome)
```

Not "which DARWIN outperforms" but "what does the aggregate intent signal predict about markets." Resolution: 20-60 trading days.

### Capacity (C) — Does the signal scale?

```
C = alpha_at_€50M / alpha_at_€1M
```

Simulate at increasing notional. Signals that increase internal matching rate (reduce LP overflow) score higher. Unique to Darwinex — matching engine data provides ground truth. Numerai cannot do this.

### Originality (O) — Is the signal new?

```
O = INDX_perf(with_signal) - INDX_perf(without_signal)
```

Orthogonal contribution to existing INDX. Implements Hong/Page diversity theorem (Collective Error = Average Individual Error − Diversity). Copycat signals earn O ≈ 0.

### Combined Score + Staking

```
Score = 0.4P + 0.2C + 0.4O
Reward = stake × clip(payout_factor × Score, -0.05, +0.05)
```

Heavy originality weighting because diversity is the strategic bet. Capacity weight increases as AUM grows. 20% data royalty → community fund (SOURCE + DEVELOP actions). INDX staking (not a new token): earn on good signals, burn on bad. Solves the Quantopian problem (no skin in game → overfitting → fund closed).

## The Inversion: Numerai Hoards, Darwinex Liberates

| Dimension | Numerai | Darwinex |
|-----------|---------|----------|
| Data origin | Public market data | Community intent data (unique) |
| Data treatment | Obfuscate → distribute | Anonymise (DP) → distribute |
| Fund returns | Private (opaque) | Public (INDX NAV transparent) |
| Revenue use | Pay investors, fund ops | Invite data providers as SOURCE members |
| Data providers | N/A | Success-based rewards via INDX attribution |
| Philosophy | Extract alpha from crowds, keep profits | Return markets to people, on merit |

As INDX grows, Darwinex invites private data providers as SOURCE members. Success-based rewards via cradle-to-grave INDX attribution — better than flat fees. Data providers and traders compete on the same playing field. Merit determines reward.

The attribution chain: data source → DP-anonymised → published to processors → models extract alpha → INDX allocation → INDX performance → attribution traces value back to EACH source → source earns proportional reward.

## Regulatory Architecture

The sealed enclave + blockchain architecture solves the regulatory concern:

1. **Data never leaves the enclave.** No "publication" of a benchmark — processors interact with transformed representations inside sealed infrastructure. The DP-anonymised development dataset preserves aggregate patterns but individual track records are non-invertible.
2. **Blockchain attestation provides full audit trail.** Every processor submission, every signal output, every INDX allocation decision is attested on-chain. Abnormally high hit rates can be interrogated right back to the source — the attestation chain IS the surveillance mechanism.
3. **Benchmark Regulation risk mitigated.** The intent dataset is not a "benchmark" (no replicable index published). It is a sealed input to a private allocation process. INDX is the output — already regulated as a managed portfolio.
4. **MiFID "investment decision maker" concern.** Processor member signals are INPUTS to the internal book (spread rescue), not direct investment decisions. The matching engine makes the execution decision. Processors are data contributors, not portfolio managers.

## Phased Roadmap

| Phase | Timeline | Goal | Key action |
|-------|----------|------|------------|
| **0: Validate** | Now → 29 Apr | Board evidence | Hong/Page backtest (Martí). Whiteboard session with Jean. Board slide: Hong/Page + P+C+O + CrunchDAO. |
| **1: First Follower** | May-Jul 2026 | Critical mass test | CrunchDAO co-integrated. DP-anonymised dev dataset. First competition. P scoring only. Public results. |
| **2: The Crowd** | Aug-Oct 2026 | Production signals | Real-time intent data via sealed enclave. Full P+C+O. INDX staking. Signals → the internal book. |
| **3: The Monopoly** | Q4 2026+ | Signal source lock-up | Arb communities, prop firms. Jean distributes. Processing Darwinia operational. e×X compounding. |
| **4: Data Liberation** | 2027+ | Data marketplace | Invite data providers as SOURCE members. Success-based rewards. Dataset compounds. "Return markets to people, on merit." |

## Distribution: Sivers Movement Dynamics

Framework: Derek Sivers, "First Follower: Leadership Lessons from a Dancing Guy" (sive.rs/ff).

A movement isn't created by the leader — it's created by the first follower who transforms a lone nut into a leader.

| Stage | Dynamic | Darwinex Application |
|-------|---------|---------------------|
| Lone voice | Leader dances alone, looks ridiculous | Darwinex publishes intent dataset + competition. Niche experiment. |
| First follower | Transforms lone nut into leader | CrunchDAO joins publicly. Jean's credibility validates the movement. |
| Second follower | Proves the first was right | First independent quant team joins after CrunchDAO results. |
| Three is a crowd | Crowd is news | Multiple processors. Quant finance media picks it up. |
| Tipping point | Risk reverses | NOT joining = missing the data monopoly. "No reason not to join now." |
| Mass adoption | Social pressure shifts | Every serious quant knows about the Darwinex intent dataset. |

**"They will be part of the in-crowd, if they hurry."** Early joiners get: first access to the only intent dataset of its kind, founding member status in the Processing Darwinia, higher reward allocation (less competition for originality), co-branding.

**Go to high density:** CrunchDAO (11K), Kaggle Competitions, QuantConnect (300+ hedge funds), quant Twitter/Discord. Density before breadth.

## Numerai Comparison

### Adopted from Numerai
- NMR staking → INDX staking (skin in game, solves Quantopian problem)
- MMC (originality scoring) → Originality dimension (O)
- Obfuscated free dataset → DP-anonymised intent data
- Stake-weighted meta-model → Confidence-weighted aggregate signal
- Predictions-only for Phase 1 → code-to-data in Phase 2

### Avoided from Numerai
- Opaque fund performance → INDX is public
- Finite token supply (NMR) → INDX minted from spread rescue (real economic activity)
- No capacity scoring → Matching engine provides ground truth (C dimension)
- Participants can't invest → Processor members hold INDX (earn → stake → compound)
- Data hoarding → Data liberation (invite data providers as members)

---

## HUMAN_SECTION

## Processor Members: The Pitch

Darwinex sits on the largest dataset of real-money trading intent in the world — 12 years, 100,000+ track records, 10,000+ live traders placing bets with real capital every day. No one else has this. The data PREDICTS markets because it captures what thousands of independent traders INTEND to do, not what analysts THINK might happen.

We're opening this dataset to the world's best data scientists through CrunchDAO, our first processing partner. Their 11,000 scientists will compete to extract every alpha vector hidden in our community's aggregate signal. The best models feed into INDX — our flagship allocation engine.

**How we reward:** Three dimensions. Performance (does the signal predict?), Capacity (does it scale?), Originality (is it new?). Processors stake INDX tokens — earn more on good signals, lose on bad ones. No free rides.

**The Numerai inversion:** Numerai takes public data, obfuscates it, extracts alpha, and keeps the profits private. We do the opposite. As INDX grows, we invite data providers to join as members — earning from the success of their data, not flat fees. We return markets to people, on merit.

**The movement:** CrunchDAO is our first follower — the one who transforms an experiment into a movement. Early joiners are founding members of the Processing Darwinia. They get first access to the only intent dataset like this in the world. As Sivers says: "They will be part of the in-crowd, if they hurry."

**Why CrunchDAO specifically:** They proved the model with ADIA Lab — raw data never left ADIA's premises, scientists worked only with transformed representations, and the results beat benchmarks by double digits. This is the critical mass test: can external processors find alpha in our intent data? If yes, the thesis is validated and the flywheel starts.

**Regulatory confidence:** The sealed enclave architecture means data never leaves. The blockchain attestation trail means every signal, every submission, every allocation decision is auditable. Abnormally high hit rates? Interrogate right back to the source. The architecture IS the compliance.
