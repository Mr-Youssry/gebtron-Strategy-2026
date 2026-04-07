# Valuation Methodology Guide
## Based on GECOS GmbH and Louise Engineering Limited Valuations (RSM Ebner Stolz)

This document explains the **Ertragswertverfahren** (Income/Earnings Value Method) used by RSM Ebner Stolz to value GECOS GmbH and Louise Engineering Limited, following the German IDW S1 standard.

---

## Table of Contents

1. [Overview of the Method](#1-overview-of-the-method)
2. [The Two-Phase Model](#2-the-two-phase-model)
3. [Step-by-Step Valuation Process](#3-step-by-step-valuation-process)
4. [Key Formulas](#4-key-formulas)
5. [Input Data Required](#5-input-data-required)
6. [Detailed Calculation Examples](#6-detailed-calculation-examples)
7. [Sensitivity Analysis](#7-sensitivity-analysis)
8. [Replication Checklist](#8-replication-checklist)

---

## 1. Overview of the Method

### What is Ertragswertverfahren?

The **Ertragswertverfahren** (Capitalized Earnings Method) is the predominant business valuation method in Germany. It determines enterprise value by discounting future expected earnings to present value.

**Core Principle:**
> The value of a company equals the present value of all future financial surpluses that flow to the shareholders.

### Standard Applied

Both valuations follow:
- **IDW ES 1 n.F.** (Draft revision dated November 7, 2024) - German Institute of Public Auditors standard for business valuations
- **IDW Practice Note 2/2017** - Guidelines for evaluating business plans

### Type of Value Determined

**Objektivierter Unternehmenswert** (Objectified Enterprise Value):
- An intersubjectively verifiable future success value
- Based on the existing business concept
- Does not include buyer-specific synergies
- Uses indirect tax typification (no explicit personal taxes)

---

## 2. The Two-Phase Model

The valuation uses a **two-phase model** (Phasenmethode):

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        ENTERPRISE VALUE                                  │
├─────────────────────────────────────┬───────────────────────────────────┤
│         PHASE I                     │           PHASE II                │
│   (Detail Planning Period)          │      (Terminal Value/Perpetuity)  │
├─────────────────────────────────────┼───────────────────────────────────┤
│  Years: GJ25, GJ26, GJ27, GJ28      │       GJ29 onwards (∞)            │
│                                     │                                   │
│  • Detailed earnings projections    │  • Steady-state assumption        │
│  • Year-by-year discounting         │  • Growth rate applied            │
│  • Specific tax rates per year      │  • Perpetuity formula             │
└─────────────────────────────────────┴───────────────────────────────────┘
```

### Phase I: Detail Planning Period
- Typically 3-5 years of detailed financial projections
- Each year's earnings are individually discounted
- Specific assumptions for revenue growth, costs, taxes

### Phase II: Terminal Value (Ewige Rente)
- Assumes the company reaches a "steady state"
- Earnings grow at a constant rate (growth deduction)
- Calculated as a perpetuity

---

## 3. Step-by-Step Valuation Process

### Step 1: Prepare Earnings Projections (Ertragsplanung)

Build a projected income statement for each year:

| Line Item | Description |
|-----------|-------------|
| Umsatzerlöse | Revenue |
| +/- Bestandsveränderung | Inventory changes |
| = **Gesamtleistung** | Total output |
| - Materialaufwand | Material costs |
| = **Rohertrag** | Gross profit |
| - Personalaufwand | Personnel costs |
| - Sonstiger Aufwand | Other operating expenses |
| + Sonstiger Ertrag | Other operating income |
| = **EBITDA** | Earnings before interest, taxes, depreciation |
| - Abschreibung | Depreciation |
| = **EBIT** | Operating profit |
| +/- Zinsergebnis | Net interest |
| = **EBT** | Earnings before tax |
| - Ertragsteuern | Corporate taxes |
| = **Jahresüberschuss** | Net income |

### Step 2: Determine Dividend Policy / Payout Ratio

Decide what portion of earnings flows to shareholders:

**From the reports:**
- GECOS: **80% payout ratio** (20% retained for debt repayment)
- Louise: **50% payout ratio** (50% retained for growth)

### Step 3: Calculate Shareholder Net Inflows

```
Net Inflows = Distribution (Ausschüttung) + Value from Retention (Thesaurierung)
```

The reports assume **value-neutral reinvestment** of retained earnings, meaning:
```
Wertbeitrag aus Thesaurierung = Jahresüberschuss × Thesaurierungsquote
Wertbeitrag aus Ausschüttung = Jahresüberschuss × Ausschüttungsquote
Nettoeinnahmen = Jahresüberschuss (full amount flows to value)
```

### Step 4: Determine the Capitalization Rate (Kapitalisierungszinssatz)

This is the discount rate used to calculate present value.

### Step 5: Discount Future Cash Flows

Apply discount factors to each year's earnings.

### Step 6: Calculate Terminal Value

Use perpetuity formula for Phase II.

### Step 7: Sum All Present Values

Add discounted Phase I earnings + discounted Terminal Value.

### Step 8: Adjust to Valuation Date

If the technical valuation date differs from the actual valuation date, compound forward.

---

## 4. Key Formulas

### 4.1 Capitalization Rate (Kapitalisierungszinssatz)

```
r = rf + β × MRP - g (for Terminal Value only)
```

Where:
| Symbol | Name | Description |
|--------|------|-------------|
| r | Kapitalisierungszinssatz | Discount rate |
| rf | Basiszinssatz | Risk-free rate |
| β | Betafaktor | Company-specific risk measure |
| MRP | Marktrisikoprämie | Market risk premium |
| g | Wachstumsabschlag | Growth deduction (TV only) |

**Phase I Rate:**
```
r_PhaseI = rf + (β × MRP)
```

**Phase II Rate (Terminal Value):**
```
r_PhaseII = rf + (β × MRP) - g
```

### 4.2 Risk-Free Rate (Basiszinssatz)

Derived from the **Bundesbank yield curve** using:
- 3-month average of spot rates
- Converted to a single equivalent rate
- Rounded to nearest 0.1%

**From reports:** rf = **3.25%**

### 4.3 Market Risk Premium (Marktrisikoprämie)

Based on FAUB (IDW committee) recommendations:
- Current range: **5.25% to 6.75%** (before personal taxes)
- Reports used: **6.75%** (conservative/upper bound)

### 4.4 Beta Factor Calculation

Since target companies are not publicly traded, beta is derived from comparable companies (peer group):

**Step 1: Collect Levered Betas from Peers**
```
β_levered = Raw beta from stock market data (2 years, weekly returns)
```

**Step 2: Unlever the Betas**
```
β_unlevered = β_levered / (1 + (1-t) × D/E)
```

Simplified (assuming debt beta = 0):
```
β_unlevered = β_levered / (1 + D/E)
```

Where:
- D/E = Debt-to-Equity ratio of the peer company
- t = tax rate (often ignored in simplified approach)

**Step 3: Calculate Average Unlevered Beta**
```
β_unlevered_avg = Mean or Median of peer unlevered betas
```

**Step 4: Re-lever to Target Company's Capital Structure**
```
β_target = β_unlevered_avg × (1 + D/E_target)
```

**From Reports (Peer Group Analysis):**

| Company | Index | β Levered | R² | D/E | β Unlevered |
|---------|-------|-----------|----|----|-------------|
| Terex Corp | DWCFT | 1.63 | 0.39 | 0.28 | 1.27 |
| Astec Industries | DWCFT | 1.20 | 0.17 | 0.04 | 1.16 |
| Elecon Engineering | BSE500 | 1.77 | 0.32 | 0.00 | 1.77 |
| Metso Corp | HEX | 1.78 | 0.52 | 0.13 | 1.58 |
| Saimo Technology | SZCOMP | 1.46 | 0.38 | 0.03 | 1.42 |
| **Median** | | **1.63** | | **0.04** | **1.42** |
| **Mean** | | **1.57** | | **0.10** | **1.44** |

Both GECOS and Louise are treated as **unlevered** (D/E = 0), so:
```
β_target = 1.44 × (1 + 0) = 1.44
```

### 4.5 Risk Premium (Risikozuschlag)

```
Risk Premium = β × MRP = 1.44 × 6.75% = 9.72%
```

### 4.6 Complete Capitalization Rate

**Phase I (GJ25-GJ28):**
```
r = 3.25% + 9.72% = 12.97%
```

**Phase II (GJ29ff):**
```
r = 3.25% + 9.72% - 1.00% = 11.97%
```

### 4.7 Present Value Factor (Barwertfaktor)

**For Phase I years:**
```
PV Factor(n) = 1 / (1 + r)^n
```

For mid-year convention or specific timing:
```
PV Factor = 1 / (1 + r) = 0.8852 (for one year at 12.97%)
```

**For Terminal Value:**
```
TV Multiplier = 1 / r_PhaseII = 1 / 11.97% = 8.3542
```

### 4.8 Enterprise Value Formula

**General Formula:**
```
EV = Σ [E_t / (1+r)^t] + [TV / (1+r)^n]
```

Where:
- E_t = Net earnings in year t
- TV = Terminal Value = E_perpetuity / r_PhaseII
- n = number of years in Phase I
- r = discount rate

**Detailed Calculation:**

```
EV = E₁/(1+r)¹ + E₂/(1+r)² + E₃/(1+r)³ + E₄/(1+r)⁴ + [E_TV/r_TV]/(1+r)⁴
```

### 4.9 Terminal Value (Endwert / Ewige Rente)

```
TV = E_sustainable / (r - g)
```

Or equivalently:
```
TV = E_sustainable / r_PhaseII
```

Where r_PhaseII already includes the growth deduction.

**With growth-related retention:**
```
Growth-related Thesaurierung = E_sustainable × g / r_PhaseII
```

This is deducted from sustainable earnings.

### 4.10 Time Adjustment (Aufzinsung)

If valuation date differs from technical base date:
```
EV_actual = EV_technical × (1 + r)^(days/365)
```

**Example from GECOS (Jan 1 to Oct 31 = 304 days):**
```
Aufzinsungsfaktor = (1 + 0.1297)^(304/365) = 1.1069
```

---

## 5. Input Data Required

### 5.1 Financial Projections

| Data Point | Source | Purpose |
|------------|--------|---------|
| Historical financials (3-5 years) | Annual reports, BWA | Trend analysis, base case |
| Revenue forecast | Management plan | Phase I projections |
| Cost structure (% of revenue) | Historical ratios | Expense forecasting |
| Capex plans | Management | Investment needs |
| Working capital changes | Historical | Cash flow adjustments |
| Tax rates | Local tax law | After-tax earnings |

### 5.2 Capitalization Rate Inputs

| Input | Source | Value Used |
|-------|--------|------------|
| Risk-free rate | Bundesbank yield curve (3-mo avg) | 3.25% |
| Market risk premium | FAUB/IDW recommendation | 6.75% |
| Peer companies | Industry comparables | 5 companies |
| Peer betas | Bloomberg/Reuters (2yr weekly) | Various |
| Peer debt ratios | Financial statements | Various |
| Target D/E ratio | Company balance sheet | 0% |
| Growth rate | Inflation expectation | 1.0% |

### 5.3 Tax Rates

**Germany (GECOS):**
| Tax | Rate |
|-----|------|
| Körperschaftsteuer (Corporate tax) | 15.0% |
| Solidaritätszuschlag | 5.5% of KSt = 0.825% |
| Gewerbesteuer (Trade tax) | 3.5% × Hebesatz |
| - Swisttal Hebesatz | 520% → 18.2% |
| **Total effective rate (2025-2027)** | **34.0%** |
| **Total effective rate (2028)** | **33.0%** |
| **Total effective rate (2029+)** | **31.9%** |

**UK (Louise):**
| Profit Level | Rate |
|--------------|------|
| Up to £50,000 | 19% |
| £50,000 - £250,000 | Marginal relief (19-25%) |
| Over £250,000 | 25% |
| **Effective rate used** | **21-22%** |

### 5.4 Other Assumptions

| Assumption | GECOS | Louise |
|------------|-------|--------|
| Payout ratio | 80% | 50% |
| Retention for growth | 20% | 50% |
| Perpetuity growth | 1.0% | 1.0% |
| Valuation date | Oct 31, 2025 | Oct 31, 2025 |
| Technical base date | Jan 1, 2025 | Jan 1, 2025 |

---

## 6. Detailed Calculation Examples

### 6.1 GECOS GmbH Valuation

**Earnings Projection (TEUR):**

| Item | GJ25 | GJ26 | GJ27 | GJ28 | GJ29 (TV) |
|------|------|------|------|------|-----------|
| Jahresüberschuss | 140 | 104 | 157 | 234 | 240 |
| Growth Thesaurierung | - | - | - | - | -6 |
| Thesaurierungsquote | 20% | 20% | 20% | 20% | 20% |
| Ausschüttungsquote | 80% | 80% | 80% | 80% | 80% |
| Wertbeitrag Thes. | 28 | 21 | 31 | 47 | 48 |
| Wertbeitrag Aussch. | 112 | 83 | 126 | 187 | 192 |
| **Nettoeinnahmen** | **140** | **104** | **157** | **234** | **235** |

**Capitalization Rate:**
```
Phase I:  3.25% + (1.44 × 6.75%) = 12.97%
Phase II: 12.97% - 1.00% = 11.97%
```

**Discount Calculation:**

| Year | Earnings | Calculation | PV Factor | Barwert |
|------|----------|-------------|-----------|---------|
| GJ25 | 140 | Start value | 0.8852 | 124 |
| GJ26 | 104 | | 0.8852² | - |
| GJ27 | 157 | | 0.8852³ | - |
| GJ28 | 234 | | 0.8852⁴ | - |
| TV | 235/11.97% = 1,963 | Perpetuity | 0.8852⁴ | - |

**Iterative Present Value (as shown in report):**

```
Barwert GJ29 (TV at year-end 28) = 235 × 8.3542 = 1,963
+ GJ28 earnings (234) → Intermediate = 2,197
× PV factor (0.8852) → Barwert at end GJ27 = 1,943

Continue backwards...

Final Ertragswert (Jan 1, 2025) = 1,662 TEUR
```

**Time Adjustment:**
```
Ertragswert (Oct 31, 2025) = 1,662 × 1.1069 = 1,840 TEUR
```

**Result: GECOS Value = EUR 1,840,000**

---

### 6.2 Louise Engineering Limited Valuation

**Earnings Projection (TEUR):**

| Item | GJ25 | GJ26 | GJ27 | GJ28 | GJ29 (TV) |
|------|------|------|------|------|-----------|
| Jahresüberschuss | 83 | 86 | 97 | 105 | 106 |
| Growth Thesaurierung | - | - | - | - | -6 |
| Thesaurierungsquote | 50% | 50% | 50% | 50% | 50% |
| Ausschüttungsquote | 50% | 50% | 50% | 50% | 50% |
| **Nettoeinnahmen** | **83** | **86** | **97** | **105** | **100** |

**Capitalization Rate:** Same as GECOS (12.97% / 11.97%)

**Terminal Value Calculation:**
```
TV = 100 × 8.3531 = 835 TEUR (as perpetuity)
```

**Present Value Calculation:**
```
Ertragswert (Jan 1, 2025) = 786 TEUR
```

**Time Adjustment:**
```
Ertragswert (Oct 31, 2025) = 786 × 1.1069 = 870 TEUR
```

**Result: Louise Value = EUR 870,000**

---

## 7. Sensitivity Analysis

### How to Perform Sensitivity Analysis

Test the impact of key variables on the final valuation:

**Variables to Test:**
1. Market Risk Premium (±1%)
2. Base Interest Rate (±0.5%)
3. Earnings Projections (±10-20%)
4. Growth Rate (±0.5%)

**Matrix Format (from GECOS report):**

| MRP → | 5.75% | 6.25% | 6.75% | 7.25% | 7.75% |
|-------|-------|-------|-------|-------|-------|
| **Basiszins 2.75%** | 2,203 | 2,053 | 1,922 | 1,806 | 1,704 |
| **Basiszins 3.00%** | 2,149 | 2,005 | 1,880 | 1,769 | 1,671 |
| **Basiszins 3.25%** | 2,097 | 1,960 | **1,840** | 1,734 | 1,639 |
| **Basiszins 3.50%** | 2,047 | 1,917 | 1,802 | 1,700 | 1,608 |
| **Basiszins 3.75%** | 2,000 | 1,875 | 1,765 | 1,667 | 1,579 |

---

## 8. Replication Checklist

### To Value Any Company Using This Method:

- [ ] **1. Gather Historical Data**
  - [ ] 3-5 years of income statements
  - [ ] Balance sheets for debt/equity ratios
  - [ ] Cash flow statements

- [ ] **2. Prepare Earnings Forecast**
  - [ ] Revenue projections (3-5 years detailed)
  - [ ] Cost assumptions (material, personnel, other)
  - [ ] Tax rate determination
  - [ ] Sustainable earnings for terminal value

- [ ] **3. Determine Payout Policy**
  - [ ] Dividend/distribution rate
  - [ ] Retention rate
  - [ ] Justify assumptions

- [ ] **4. Calculate Capitalization Rate**
  - [ ] Get current Basiszinssatz from Bundesbank
  - [ ] Use FAUB-recommended MRP (5.25-6.75%)
  - [ ] Identify 4-6 comparable public companies
  - [ ] Calculate peer betas (2yr weekly returns)
  - [ ] Unlever peer betas
  - [ ] Re-lever to target capital structure
  - [ ] Set growth deduction (typically 1%)

- [ ] **5. Build Valuation Model**
  - [ ] Calculate Phase I present values
  - [ ] Calculate Terminal Value
  - [ ] Sum all components
  - [ ] Apply time adjustment if needed

- [ ] **6. Perform Sensitivity Analysis**
  - [ ] Vary MRP ±1%
  - [ ] Vary Basiszins ±0.5%
  - [ ] Vary earnings ±20%

- [ ] **7. Document Assumptions**
  - [ ] List all data sources
  - [ ] Explain key judgments
  - [ ] Note limitations

---

## Quick Reference: Key Numbers Used

| Parameter | Value | Source |
|-----------|-------|--------|
| Basiszinssatz | 3.25% | Bundesbank (Aug-Oct 2025) |
| Marktrisikoprämie | 6.75% | FAUB (Sept 2025) |
| Beta (unlevered) | 1.44 | Peer group average |
| Beta (levered) | 1.44 | Target D/E = 0 |
| Risk Premium | 9.72% | β × MRP |
| Phase I Discount Rate | 12.97% | rf + Risk Premium |
| Growth Deduction | 1.00% | Inflation proxy |
| Phase II Discount Rate | 11.97% | Phase I - Growth |
| PV Factor (1 year) | 0.8852 | 1/(1+12.97%) |
| TV Multiplier | 8.3542 | 1/11.97% |

---

## Appendix: Excel Formula Templates

### Capitalization Rate
```excel
=Base_Rate + (Beta * MRP)
```

### Present Value Factor
```excel
=1/(1+Discount_Rate)^Year
```

### Terminal Value
```excel
=Sustainable_Earnings / (Discount_Rate - Growth_Rate)
```

### Time Adjustment Factor
```excel
=(1+Discount_Rate)^(Days/365)
```

### Unlevered Beta
```excel
=Levered_Beta / (1 + Debt_Equity_Ratio)
```

### Re-levered Beta
```excel
=Unlevered_Beta * (1 + Target_DE_Ratio)
```

---

*Document created: December 2025*
*Based on RSM Ebner Stolz valuation reports for GECOS GmbH and Louise Engineering Limited*
