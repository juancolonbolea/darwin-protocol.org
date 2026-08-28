---
type: electron
atom: REWARD
audience: [management, staff]
orbit: 2
language: llm
status: ACTIVE
last_updated: 2026-04-16
owns: |
  Sergio's canonical per-user data schema — 78 fields, 11 blocks — for
  BU P&L reconciliation and client segmentation across Darwinex + Zero.
  Primary key: useridpublic. Feeds BU P&L rollup via GM columns
  (trader/inversor/INDX × 1/3/6/12/24m). entidad_regulada drives
  attribution rules for equity-based concepts. Dual users → 50/50 split.
source:
  - Sergio García, Slack #business-units-pl, 2026-04-16 09:10
  - GSheet 1BzOAo7H_YPTs_6mdnEmSyNQiZEKCwvkM0VuB7vsQkJ0 (tab "Documentación")
cross_refs:
  - electron: PHENOTYPE--pl-data-sources
    why: "Schema columns resolve to dx_margin_user_incomes concepts via the 10 allocation methods"
  - electron: PHENOTYPE--dataset
    why: "Concrete per-user manifestation of P5 (The Dataset) primitive"
  - electron: PHENOTYPE--business-units
    why: "Per-user atom that rolls up to BU P&L — cross-check against Jesús's consolidation"
  - electron: GENOTYPE--vbm
    why: "Per-user GM is the reconcile-against check for VBM trust accounting"
derived_from: [P5]
protocol_component: [Trust Signal]
protocol_layer: Machine
protocol_piece: Method
---

# User Segmentation Schema — Canonical Per-User Atom

> Sergio's 78-field data model for Darwinex + Zero users. One row per user, full attribution of profile / activity / fees / GM / volume. This is the concrete per-user manifestation of P5 (The Dataset) — what rolls up to BU P&L lives here.

**Sheet:** https://docs.google.com/spreadsheets/d/1BzOAo7H_YPTs_6mdnEmSyNQiZEKCwvkM0VuB7vsQkJ0
**Owner:** Sergio García (Data & BI)
**Status:** `Documentación` tab complete (v1). `Datos` tab empty — load scheduled next week.
**Key:** `useridpublic` (primary).

## Schema — 11 blocks

### 1. Identificación y perfil (12 fields)
`useridpublic`, `username`, `fecha_creacion_usuario`, `pais_residencia`, `categoria_usuario` (Retail/Professional — Darwinex only), `primer_segmento_asignado`, `segmentos_actuales` (cumulative, comma-separated), `tipo_kyc` (Individual/Corporativo), `experiencia_trading`, `tipo_empresa` (corporate only), `entidad_regulada` (DX_CNMV / DX_FCA / DX_SYC).

Segment values: `ACTIVE_INVESTOR`, `ASPIRING_PROVIDER`, `CAPRIVA_INVESTOR`, `CLASSIC_TRADER`, `DARWINEX_AFFILIATE`, `EMERGING_PROVIDER`, `INDX_INVESTOR`, `PROFESSIONAL_PROVIDER`, `PR_EXCHANGE_INTRODUCER`, `PR_EXCHANGE_PROMOTER`, `PR_LABEL_PROMOTER`, `REFERRED_INVESTOR`.

Dual-platform users inherit Darwinex country. `entidad_regulada` governs interest-on-funds and swap-netting attribution — see §Attribution rules.

### 2. Registro y captación (7 fields)
`primer_producto_registro` (Darwinex/Zero), `fecha_registro_darwinex`, `fecha_registro_zero`, `canal_captacion_darwinex`, `canal_captacion_zero` (both last-click), `partner_darwinex` (username), `partner_zero` (email), `partner_zero_es_mgm`.

### 3. Conversión y actividad (6 fields)
`fecha_conversion_darwinex` (first commission — marks registered → active), `fecha_conversion_zero`, `es_dual_user`, `ultima_operacion_trader_darwinex`, `ultima_operacion_inversor_darwinex`, `ultima_factura_zero`.

### 4. Suscripción Zero (2 fields)
`suscripcion_zero_activa`, `tipo_suscripcion_zero` (product × periodicity: Futuro/No Futuro × Mensual/1a/3a).

### 5. Productos sintéticos (5 fields)
`booster_activo_darwinex`, `booster_activo_zero` (both optionally include tier 50K/100K/200K), `darwinia_activo_darwinex`, `darwinia_activo_zero` (Silver/Gold/None), `permanent_allocation_activa` (Zero only — indefinite; PAs = most consolidated members).

### 6. DARWINs inversión y equity (9 fields)
`ultimo_equity_trader`, `ultimo_aum_inversores`, `ultimo_aum_indx`, `tiene_inversiones_darwins_darwinex`, `tiene_inversiones_darwins_zero`, `darwin_principal_por_aum`, `darwin_principal_por_fees`, `quote_darwin_principal` (central quality metric), `ex_indx` (was in INDX, excluded after edge deterioration / Quote drop / rebalance).

### 7. Fees recibidos — como gestor de DARWIN (5 fields)
`fees_totales_recibidos` (historic cumulative), `fees_por_inversor`, `fees_por_darwinia`, `fees_por_booster`, `fees_por_permanents`.

### 8. Gross Margin Darwinex (15 fields)
`gm_darwinex_trader_{1,3,6,12,24}m` (commissions, markup, swap, proportional internalisation), `gm_darwinex_inversor_{1,3,6,12,24}m` (pfees, mfees, investor swap/commissions), `gm_darwinex_indx_{1,3,6,12,24}m` — **INDX fields PENDING CALC.**

### 9. Gross Margin Zero (5 fields)
`gm_zero_{1,3,6,12,24}m` — no trader/inversor split (Zero = single BU: subscriptions + upsells).

### 10. Volumen operado (10 fields)
`volumen_trader_darwinex_{1,3,6,12,24}m`, `volumen_trader_zero_{1,3,6,12,24}m`.

### 11. Referidos MgM (2 fields)
`referidos_activos_darwinex`, `referidos_activos_zero` — MgM only (not commercial partners). Zero partners can exist without Zero accounts.

## Attribution rules

| Rule | Reference |
|---|---|
| Markup = direct per-trade (not volume pro-rata) since Mar 2026 | [[PHENOTYPE--pl-data-sources]] §Allocation Methods (Method 1) |
| Dual users split 50/50 on equity-based GM (interest on funds, swap netting) regardless of actual equity ratio | [[PHENOTYPE--pl-data-sources]] §Method 8 |
| `entidad_regulada` segments CNMV interest (`cnmv_bank_interest`) and FCA interest (`interest_lp`) | [[PHENOTYPE--pl-data-sources]] §QuickBooks mapping |
| INDX GM computation PENDING — same gap as VBM | OPEN |

## Open items

- **`Datos` tab empty** — Sergio ETA next week.
- **INDX GM (5 fields)** `gm_darwinex_indx_{1,3,6,12,24}m` marked "Pendiente de calculo". Matches the INDX gap Juan flagged in VBM. Needs method spec.
- **Tipo de empresa granularity** — trading/investment vs other sectors is in KYC PDFs but not in DB. Sergio follow-up.
- **Entidad regulada split rule** — the field is captured but the DX_CNMV/DX_FCA/DX_SYC allocation rule for swap-netting is not yet written down.

## Verification

Once `Datos` loads: `Σ(gm_darwinex_trader_12m + gm_darwinex_inversor_12m)` across all users ≈ Darwinex GM row in Jesús's consolidation GSheet (`1bHAhrZrFAIttWQrlwurWM2r0faLclm9dzCvEgEgxKVI`) for trailing 12m, ±2%.

---

*Created 16 Apr 2026 from Sergio's v1 schema (Slack #business-units-pl, same day).*
