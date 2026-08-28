---
type: electron
atom: REWARD
audience: [management]
orbit: 3
language: llm
status: ACTIVE
last_updated: 2026-04-16
owns: |
  P&L line item → data source mapping. Every revenue/cost line traced to:
  MCP tool, margin_data column, Metabase table, or Coda invoice.
  Master source: darwinex-data get_margin_data (36 cols, since May 2014).
  Metabase equivalents: global_accounting (wide), finance.revenue_by_parts_and_reg_comp (long).
  Coda invoices for OpEx: https://coda.io/d/Suppliers_dLOw00w45FK
  Gross Margin ETL: 3 operators (FillDarwinexMarginCost, DarwinexMarginUserEquity,
  DarwinexMarginUserIncomes), 10 allocation methods, canonical DB/S3/QB sources.
  10 known attribution challenges for BU P&L restatement.
source:
  - sessions/260408-daily.md (Easter egg hunt across MCPs)
  - darwinex-data MCP (get_margin_data, get_pfee_data, get_nop_data)
  - darwinex-labs MCP (INDX AuM, synthetic capital, hedge accounts, pfee timeseries)
  - Metabase DB 167 (WhiteTeam Postgres) + DB 181 (DuckDB/S3)
cross_refs:
  - electron: PHENOTYPE--business-units
    why: "Each P&L line maps to a BU; this electron maps to the data source"
  - electron: GENOTYPE--vbm
    why: "VBM trust waterfall needs live data feeds from these sources"
  - electron: PHENOTYPE--matching-engine
    why: "Internalization and spread capture data lives in coverage accounts"
  - electron: PHENOTYPE--prop-bu
    why: "Hedge accounts and synthetic capital tools feed Prop BU P&L"
  - knowledge: "[[DATA_ACCESS]]"
    why: "Canonical data source reference — field-level inventory of all queryable sources"
  - electron: PHENOTYPE--user-segmentation-schema
    why: "Sergio's per-user schema is the atomic grain the allocation methods aggregate from"
  - electron: PHENOTYPE--booster-mechanics
    why: "Spread capture per-flow-source attribution (retail/INDX/Booster/PA/Gold/Silver) documented there"
derived_from: [A4, A9, A5]
protocol_component: []
protocol_layer: Application
protocol_piece: Economy
---

# P&L Data Source Map — Every Line Traceable

> Every P&L line item traced to its queryable source. The goal: automated BU management accounts, not manual Jesús compilation.

## The Master Source

**`darwinex-data` MCP → `get_margin_data`** — 36 columns, EUR, full history since May 2014.
Segmentable by: `source`, `country`, `user_category`, `regulated_company` (DX_FCA / DX_CNMV / DX_SYC).
Metabase equivalent: `public.global_accounting` (wide) or `finance.revenue_by_parts_and_reg_comp` (long).
The `margin` column = **Total Gross Margin** (sum of all revenue/cost columns).

## Revenue Mapping

| P&L Line | BU | margin_data col | MCP detail tool | Metabase | Notes |
|---|---|---|---|---|---|
| Commissions | Broker | `commission` | `get_indx_commissions_by_month` (Sep 2025+) | `global_accounting.commission` | Full FY2014+ history |
| Interest (Swap) | Broker | `swap_net` + `interest_lp` | `get_indx_parent_swaps` (Jun 2025+) | `global_accounting.swap`, `swap_cost` | Decompose: client swap vs LP swap vs cash interest |
| Markup | Broker | `markup` | — | `finance.revenue_markup` (markup, coverage_pnl, client_pnl) | Direct per-trade since Mar 2026 (was volume pro-rata — Sergio 16 Apr) |
| Internalization | Exchange | `internalization` | `get_indx_parent_pnl` (Jun 2025+) | Dashboard 362; `dx_coverage_account_equity` (logins 4000013176, 4000072000) | Net after LP cost |
| B-book | Prop | `bbook` | `get_trader_exposure` (type_volume=BBOOK) | Dashboard 284; `dx_coverage_account_equity` (login 4000012930) | Currently ~zero |
| Perf Fees (net) | Exchange | `pfees` − `pfees_trader` | `get_pfee_data` (investor_type split) | `finance.monthly_allocation_estimated_pfees` | pfee_data splits: investor/darwinia/PA/booster |
| Mgmt Fees (net) | Exchange | `mfees` − `mfees_trader` | — | `fund_index_stats.mfees` | |
| Interest Client Funds | Broker | `cnmv_bank_interest` (partial) | — | `global_accounting.cnmv_bank_interest` | Only CNMV portion; FCA/SYC interest likely manual |
| Others Gains/Losses | Prop | (not in margin_data) | `get_latest_hedge_accounts_equity` | `finance.coverage_gross_pnl` | Equity delta across 6 hedge sub-accounts |
| Services Income | Exchange | — | — | — | Manual (small: €16K FY2024) |
| DZ Subs + Upsells | Zero | — | — | `cb_invoice`, `cb_invoices_details` (Chargebee, DB 167) | Also: Coda "White" data, Jesús "Zero margin" tab |
| Boosters (premia) | Prop | — | `get_darwins_with_active_boosters` | `finance.monthly_allocation_estimated_pfees` (Booster Allocation) | Premia = subscription revenue; PnL = synthetic book |
| Inactivity Fees | Broker | `inactivity_fee` | — | `global_accounting.inactivity_fee` | Small |

## Cost of Sales Mapping

| P&L Line | BU | margin_data col | Metabase | Coda |
|---|---|---|---|---|
| Rebates + Affiliates | Broker | `rebates` + `affiliate` | `global_accounting.rebates` | — |
| Darwinia | Exchange | `darwinia` | `finance.monthly_allocation_estimated_pfees` (DarwinIA) | — |
| Technology CoS (Bridges+Platforms) | Shared | `primexm` + `epg` + `aws` + `metaquote` | `global_accounting` columns | Also Coda invoices |
| Payment Methods | Shared | `payments` (small) | — | Coda invoices |
| Customer Compensations | Broker | `compensation` | — | — |
| DZ CoS | Zero | `pfees_trader` (DZ), `zero_gold` | `bc_user_margin` (Dashboard 332) | — |
| Promoters | Shared | — | — | Coda invoices |

## OpEx Mapping

All operational expenses → **Coda invoice database**: https://coda.io/d/Suppliers_dLOw00w45FK/All-Invoices_surxgiaN#Invoices_tuB3T7RC

Employment, Contractors, Accounting & Audit, Compliance & Legal, Insurance, Advertising, Market Data, Space Costs, Bank Charges, Amortization, Interest Expense — all vendor invoices and payroll.

## Key Infrastructure

### Metabase Databases (21 total, 2 primary)

| DB ID | Name | Engine | Use |
|---|---|---|---|
| **167** | WhiteTeam Postgres | postgres | Primary: `finance.*` schema, `global_accounting`, all P&L views |
| **181** | DuckDB | duckdb | Synthetic capital: reads S3 parquet (darwinia_investment, challenge_allocation) |
| 3 | Tradeslide Data Replica | mysql | Trade/broker data |
| 65 | PrimeXM | mysql | LP commissions |
| 180 | Invoicing | mysql | Chargebee (DZ subs) |

### Key Metabase Dashboards

| ID | Name | Maps to |
|---|---|---|
| 362 | PnL INTERNALIZATION | Exchange internalization P&L |
| 284 | Evolución PNL BBOOK e INTERNALIZATION | Prop B-book + Exchange internalization |
| 366 | Coverage Gross Margin — CNMV & SYC | Hedge account P&L (Prop) |
| 332 | Gross Margin | Gross margin by country/entity (all BUs) |
| 391 | Investors MFees & PFees | Exchange mgmt + perf fees |
| 392 | P&L por variación Pfees estimadas | Pfees by investor type (Darwinia/Investor/PA/Booster) |
| 390 | Capital Sintético | Synthetic capital: Darwinia/Booster/PA |

### Hedge Accounts (Prop BU)

| Account | Equity (7 Apr 2026) |
|---|---|
| BOOSTER_100_200 | €10,013,752 |
| BOOSTER_50 | €10,003,156 |
| GOLD | €10,062,495 |
| PERMANENT | €9,977,279 |
| PROP | €1,605,419 |
| SILVER | €59,938,459 |
| **Total** | **~€101,600,560** |

### Synthetic Capital (Labs MCP)

| Programme | Capital Deployed | Unrealised PnL |
|---|---|---|
| Boosters | €174,125,000 | −€1,925,337 |
| Darwinia | €228,915,000 | −€1,132,744 |
| Permanent Allocations | €117,000,000 | +€805,199 |
| **Total** | **€520,040,000** | **−€2,252,882** |

### Known Data Gaps

| Item | Status | Workaround |
|---|---|---|
| `get_nop_indx_data` | Tool broken (Unknown tool) | Use `get_nop_data` |
| `get_var_factor` | 400 error (needs correct target param) | Ask API team |
| `get_portfolio_*` tools | Need valid portfolio_id | Ask API team for INDX portfolio ID |
| `get_latest_period_permanent_alloc_costs` | 400 error (subset param) | Aggregate from `get_latest_permanent_alloc_costs` |
| Interest on Client Funds (FCA/SYC portion) | Only CNMV in margin_data | Manual from banking |
| DZ subscription detail | Not in darwinex-data/labs MCP | Chargebee via Metabase DB 167 or Coda |

## Gross Margin ETL — Canonical Source Documentation

> Source: Confluence "Gross Margin Darwinex Classic" — Resumen Ejecutivo + Documentación Técnica.
> Reviewed 9 Apr 2026. This is the authoritative reference for how `dx_margin_user_incomes` is built.

### Pipeline Architecture

Three Airflow operators (`etl_daily_margin_v1.0.0.py`, repo: `whiteteam-airflow`):

| Operator | Output table | What it does |
|----------|-------------|-------------|
| **FillDarwinexMarginCost** | `dx_margin_costs` | Pulls monthly global costs from QuickBooks → EUR. Anomaly check (>30% vs 6mo avg → blocked + email to whiteteam). |
| **DarwinexMarginUserEquity** | `dx_margin_user_equity` | Monthly avg equity/AUM per user (S3 parquet). Traders=MetaTrader equity, Investors=AUM (leveraged investment + OpenPnL). |
| **DarwinexMarginUserIncomes** | `dx_margin_user_incomes` | All revenue/cost concepts per user per month. 10 allocation methods. This is the core. |

**Periodicity:** Monthly. Recalculates last N months (`number_of_months_to_update=2`). Current month = rolling 28 days.

### Allocation Methods (10 total)

| # | Method | Concepts | Allocation key |
|---|--------|----------|---------------|
| 1 | **Direct** | commission, **markup** (since Mar 2026), pfees, mfees, mfees_trader, inactivity_fee, margin(INDX) | Actual value per user |
| 2 | **Global volume pro-rata** | primexm, aws, onezero, epg, payments, sweep, other_cost_pb, cappitech | `dx_margin_costs` total ÷ trader/investor volume split ÷ individual volume |
| 3 | **Per-instrument volume** | commission_cost, internalization(new) | Value per instrument × user volume share in that instrument. (Markup was here until Mar 2026 — now Method 1.) |
| 4 | **Swap netting+markup** | swap, swap_cost | 3:1 weighting (net positions 3x value of market), then by instrument volume. Since Jul 2019. |
| 5 | **Wallet by instrument type** | rebates, affiliate, darwinia, pfees_trader, compensation, service_costs, contest, pl_earned_fees | User wallet value × CFD_FX/CFD_STOCK volume proportion |
| 6 | **Equal per trader** | metaquote (since Sept 2025) | Platform cost ÷ active traders. Zero = €10K/mo fixed; Darwinex = remainder. Only traders. |
| 7 | **B-Book volume** | bbook | Global B-Book profit × user B-Book volume share. Since Apr 2023 = global by date (before: per instrument). |
| 8 | **Equity proportional** | cnmv_bank_interest (DX_CNMV), interest_lp (DX_FCA, since Sept 2025) | By equity, segmented by regulated company. Dual user = 50/50 trader/investor split. |
| 9 | **Darwins in competition** | darwinia (since Sept 2025) | Total cost × (user_darwins / total_darwins_in_competition). Before: direct from wallet. |
| 10 | **Rebate transfer** | investor rebates | Hardcoded list: `[20792, 173514, 175368, 196292, 196710, 213156, 291471, 291517, 294685, 314740, 328800]` |

### Canonical Data Sources

**Whiteteam PostgreSQL (DB 167):**

| Table | Content |
|-------|---------|
| `dx_margin_user_incomes` | Per-user monthly revenue/costs (36 columns). The master user-level table. |
| `dx_margin_user_equity` | Per-user monthly equity/AUM by instrument type |
| `dx_margin_incomes` | Materialized view — aggregated (not per-user) |
| `dx_margin_incomes_closed` | Consolidated monthly close — immutable for historical reporting |
| `dx_margin_costs` | Global monthly costs from QuickBooks (populated by FillDarwinexMarginCost) |
| `dx_margin_exposure_ratio` | Trader/investor exposure ratios by date |
| `dx_margin_exposure_ratio_by_instrument` | Exposure ratios per instrument (for swap netting) |
| `dx_order` | Trader orders (commission source) |
| `dx_primexm_daily_operations` | PrimeXM operations + markup by instrument |
| `dx_internal_profit_by_order_date` | Internalization P&L (old method, pre-Apr 2023) |
| `dx_internal_profit_by_close_date_v2` | Internalization P&L (new method, since Apr 2023) |
| `dx_bbook_total_profit_v3` | B-Book P&L |
| `dx_wallet_transaction` | Wallet: rebates, darwinia, affiliate, compensation, etc. |
| `dx_exchange_price` | FX rates (monthly avg EURUSD, GBPUSD for conversion) |
| `dx_user_with_pl` | User info incl. `regulated_company` (DX_CNMV / DX_FCA) |
| `dx_user_trader` / `dx_user_investor` | User metadata (first trade dates) |

**Finphony MySQL:**

| Table | Content |
|-------|---------|
| `fi_fund_mirror_order` | Investor orders (commission source for investors) |
| `fi_performance_fee` | Performance fees (pfees, pfees_trader) |
| `fi_management_fee` | Management fees (mfees, mfees_trader) |
| `fi_net_revenue` | INDX fund gross margin (direct assignment to fund master account) |

**Tradeslide MySQL:**

| Table | Content |
|-------|---------|
| `dx_darwinia_gold` | Darwinia Gold payments (zero_gold calculation) |
| `ts_user_wallet_history` | Wallet history (inactivity fees, mfees_trader) |

**S3 Parquet (prodx-data-lake):**

| Path | Content |
|------|---------|
| `data/margin_equity_trader/**` | Trader equity (historical months) |
| `data/margin_equity_trader_rolling/**` | Trader equity (current month, 28-day rolling) |
| `data/margin_equity_investor/**` | Investor AUM (historical months) |
| `data/margin_equity_investor_rolling/**` | Investor AUM (current month, 28-day rolling) |
| `data/traders_swaps/**` | Trader swap income by instrument |
| `data/investors_swaps/**` | Investor swap income by instrument |
| `data/swaps_costs/**` | Swap costs by instrument |
| `data/internalization_operations/**` | Internalization profit by instrument (old method) |
| `data/internalization_pnl/**` | Internalization profit by date (new method) |
| `data/primexm_operations/**` | PrimeXM daily operations (markup, volume, commission_cost) |

**QuickBooks → `dx_margin_costs` mapping:**

| Concept | QB Description | Sign | Since |
|---------|---------------|------|-------|
| EPG | 1220 Payment platforms | -1 (cost) | 2014 |
| AWS | 121 Hosting, 1210 AWS | -1 | 2014 |
| PRIMEXM | 1202 Prime XM | -1 | 2014 |
| PAYMENTS | 132 Payment Gateways, 133 E-Wallets | -1 | 2014 |
| SWEEP | 131 Sweep | -1 | 2014 |
| ONEZERO | 1201 OneZero | -1 | 2014 |
| OTHER_COST_PB | 1200 Costs of Prime Broker | -1 | 2014 |
| INTEREST_LP | 100 Net Interest LPs Accounts | +1 (income) | 2014 (changed Nov 2025) |
| METAQUOTE | 272 Trading Platforms | -1 | Nov 2025 |
| CNMV_BANK_INTEREST | 7690000001 INGRESOS DE CRÉDITOS A CORTO PLAZO - CLIENTES | +1 | Nov 2025 |
| CAPPITECH | 220 Regulatory Reporting | -1 | Nov 2025 |

### Key Date Boundaries

| Date | Change | Ticket |
|------|--------|--------|
| Jul 2019 | Swap method: simple → netting+markup (3:1) | — |
| Apr 2023 | Internalization: per-instrument → global (equity-based). B-Book: per-instrument → global. | — |
| Jul 2025 | zero_gold: shared → 100% investors | DD-1797 |
| Sept 2025 | New concepts: cnmv_bank_interest, interest_lp by reg co, cappitech, metaquote by platform. Darwinia: wallet-direct → proportional by darwins. | DD-1907 |
| Nov 2025 | INTEREST_LP / CNMV_BANK_INTEREST split in QuickBooks mapping | — |
| Feb 2026 | User 328800: fixed internalization override (manual monthly values) | DD-XXXX |
| Mar 2026 | Markup attribution: per-instrument volume → **direct per-trade** | — (Sergio 16 Apr) |

### FX Conversion Rules

| Origin | Concepts | Method |
|--------|----------|--------|
| **User currency** | commission, rebates, affiliate, darwinia, pfees, mfees, etc. | EUR×EURUSD, GBP×GBPUSD, USD=passthrough |
| **EUR (from dx_margin_costs)** | sweep, primexm, onezero, payments, aws, epg, zero_gold, interest_lp, metaquote, other_cost_pb | Multiply by monthly avg EURUSD |

Source: `dx_exchange_price` (monthly average).

### Gross Margin Attribution Challenges (for BU P&L restatement)

> Reviewed 9 Apr 2026. These are known limitations in the current allocation model. Not blocking BU P&L work, but must be kept in mind when interpreting per-user or per-BU margin figures.

1. **Internalization is proportional, not direct** — Global allocation by date since Apr 2023 (was per-instrument). Known distortion — see §"IMR by connector" below. *Markup portion RESOLVED Mar 2026: now direct per-trade (Sergio confirmed in #business-units-pl 16 Apr).*
2. **Swap 3:1 netting weight is a policy assumption** — Assumes netting 3x more profitable than market markup. Hardcoded, not empirically recalibrated.
3. **MetaQuotes equal-per-trader socializes cost** — Since Sept 2025, shifted from volume-proportional to flat per active trader. Small traders now bear equal cost as large ones.
4. **Dual-user interest split is 50/50** — Users operating as both trader and investor get 50/50 split for equity-based concepts (cnmv_bank_interest, interest_lp), regardless of actual equity ratio by role.
5. **Darwinia: redistributed, no longer direct** — Since Sept 2025, total Darwinia cost ÷ darwins in competition, not actual wallet payment. Breaks link between payment and attribution.
6. **User 328800 internalization override** — Manual monthly values. Fragile if not maintained.
7. **Investor rebate list is hardcoded** — 11 user IDs. No process to audit or update.
8. **Anomaly threshold blocks genuine cost spikes** — >30% vs 6mo avg → rejected from `dx_margin_costs`. Real increases need manual override.
9. **B-Book lost instrument granularity** — Since Apr 2023, global allocation by date, not per instrument.
10. **Two internalization methods summed permanently** — `int_old + int_new`. Old portion may still produce non-trivial values.

### CRITICAL: Internalization Rate Varies 0-81% by Segment and Trade Size

> **Empirically validated 9 Apr 2026** from XCore `deal`/`leg`/`order` tables (PXM database).
> This is the single biggest attribution distortion in the gross margin model.

**IMR by connector (Q1 2026, $76.2B total volume):**

| Connector | Segment | Volume | % Vol | IMR | % of all internalization |
|-----------|---------|--------|-------|-----|------------------------|
| `darwinex_mt4` + `darwinex_mt5` | Retail traders | $18.7B | 24.6% | **67.9%** | **44.4%** |
| `darwinex_inv_real` | INDX/regular investors | $51.9B | 68.2% | **27.5%** | 49.9% |
| `darwinex_inv_real_fut` | Darwinia synthetic | $3.6B | 4.8% | **45.0%** | 5.7% |
| `darwinex_inv_real_aum` | Boosters/AUM | $1.8B | 2.4% | **0.0%** | 0% |

**Pro-rata allocation gives retail 18.4% of internalization revenue. Actual contribution: 36.2%. Understated ~2x.**

**IMR by trade size × segment (March 2026):**

| Size Bucket | Retail IMR | Investor IMR | Gap |
|-------------|-----------|-------------|-----|
| <5K | 81.0% | 69.3% | +11.7pp |
| 5K-50K | 78.4% | 64.5% | +13.9pp |
| 50K-100K | 68.1% | 45.1% | +23.0pp |
| 100K-500K | 54.6% | 27.6% | +27.0pp |
| 500K+ | 32.9% | 10.9% | +22.0pp |

**Triple whammy:** (a) retail trades are smaller → higher IMR, (b) at same size retail is more diverse → higher IMR, (c) investor volume concentrated in 100K+ zone where IMR is 11-28%.

**BU P&L impact (FY2024 basis, €1.295M internalization):**
- Current: Broker BU gets ~€238K (18.4%). True contribution: ~€469K (36.2%). **Delta: ~€231K.**
- Same structural bias likely applies to markup (smaller trades capture more spread) and swap netting (diverse flow enables more netting). Cumulative cross-line effect not yet quantified.

**CIF transfer risk:** If retail flow stops routing through Darwinex matching engine post-transfer, blended IMR drops from ~38% to ~27%. Potential loss: ~€143K/year on internalization alone. **Flow routing through Darwinex matching engine must be a condition in CIF commercial terms.**

---

*Created 8 Apr 2026. Updated 9 Apr 2026: Added Gross Margin ETL canonical source documentation (3 operators, 10 allocation methods, full data source inventory, QuickBooks mapping, date boundaries, FX conversion, 10 attribution challenges for BU P&L). Source: Confluence "Gross Margin Darwinex Classic" (Resumen Ejecutivo + Documentación Técnica).*

*Updated 16 Apr 2026: Markup moved from Method 3 (per-instrument volume) to Method 1 (Direct) — change took effect Mar 2026, confirmed by Sergio in #business-units-pl. Challenge #1 updated: markup portion RESOLVED, internalization portion still open. Added Mar 2026 row to Key Date Boundaries. New cross-ref: [[PHENOTYPE--user-segmentation-schema]] — Sergio's canonical per-user atom that feeds BU P&L rollup. Spread capture per-flow-source attribution documented in [[PHENOTYPE--booster-mechanics]] §"Spread capture attribution on synthetic".*
