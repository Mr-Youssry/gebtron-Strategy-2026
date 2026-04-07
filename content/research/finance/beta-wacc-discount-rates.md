# Understanding Beta, WACC, and the Discount Rate

*A practical guide to valuation fundamentals for M&A and investment analysis*

---

## Table of Contents

1. [The Big Picture](#1-the-big-picture)
2. [Beta - Measuring Risk](#2-beta-β---measuring-risk)
3. [CAPM - Converting Beta to Required Return](#3-capm---converting-beta-to-required-return)
4. [WACC - The Blended Discount Rate](#4-wacc---the-blended-discount-rate)
5. [The Complete Valuation Flow](#5-the-complete-valuation-flow)
6. [Sensitivity Analysis](#6-sensitivity-why-discount-rate-matters)
7. [Practical Application](#7-practical-application-louisgecos-example)
8. [Negotiation Points](#8-common-negotiation-points)
9. [Quick Reference](#9-quick-reference-formulas)

---

## 1. The Big Picture

### The Fundamental Valuation Equation

```
Company Value = Future Cash Flows ÷ Discount Rate
```

The **discount rate** answers a critical question:

> "What return do investors demand to compensate them for the risk of this investment?"

Higher risk = Higher discount rate = Lower present value

### Why This Matters

| Discount Rate | Effect on Value |
|---------------|-----------------|
| Higher (e.g., 15%) | Lower valuation (future cash flows worth less today) |
| Lower (e.g., 10%) | Higher valuation (future cash flows worth more today) |

**Rule of thumb:** Each 1% change in discount rate typically changes value by 8-12%.

---

## 2. Beta (β) - Measuring Risk

### What is Beta?

Beta measures how much a company's stock price moves **relative to the overall market**.

| Beta Value | Interpretation | Example Behavior |
|------------|----------------|------------------|
| β = 1.0 | Moves exactly with market | Market drops 10% → Stock drops 10% |
| β = 1.5 | 50% more volatile than market | Market drops 10% → Stock drops 15% |
| β = 0.5 | 50% less volatile than market | Market drops 10% → Stock drops 5% |
| β = 0 | No correlation to market | Unaffected by market movements |
| β < 0 | Moves opposite to market | Rare; gold stocks sometimes |

### Understanding Risk Components

```
                      TOTAL COMPANY RISK
                             │
            ┌────────────────┴────────────────┐
            │                                 │
     SYSTEMATIC RISK                  UNSYSTEMATIC RISK
     (Market Risk)                    (Company-Specific)
            │                                 │
    Cannot be diversified            Can be diversified away
            │                                 │
     Captured by Beta              Not captured by Beta
            │                                 │
    Examples:                        Examples:
    - Economic recession             - Management changes
    - Interest rate changes          - Product failures
    - Political instability          - Lawsuits
```

### The Two Types of Beta

#### Levered Beta (βL) - What We Observe

- Measured from actual stock price movements
- Includes both **business risk** AND **financial risk** (from debt)
- Higher debt = Higher levered beta

#### Unlevered Beta (βU) - Pure Business Risk

- Removes the effect of debt/leverage
- Shows only the **operating/business risk**
- Used to compare companies with different capital structures

### Converting Between Levered and Unlevered Beta

**Unlevering Formula (Hamada):**
```
βU = βL ÷ (1 + (1 - T) × D/E)

Where:
- βU = Unlevered beta
- βL = Levered beta (observed)
- T  = Tax rate
- D/E = Debt-to-Equity ratio
```

**Relevering Formula:**
```
βL = βU × (1 + (1 - T) × D/E)
```

### Why Unlever and Relever?

```
STEP 1: Find comparable public companies
           │
           ▼
STEP 2: Get their levered betas (from stock prices)
           │
           ▼
STEP 3: UNLEVER each beta (remove their debt effects)
           │
           ▼
STEP 4: Average the unlevered betas
           │
           ▼
STEP 5: RELEVER to target company's capital structure
           │
           ▼
STEP 6: Use this beta in CAPM
```

This process ensures you're comparing "apples to apples" - pure business risk without capital structure differences.

---

## 3. CAPM - Converting Beta to Required Return

### The Capital Asset Pricing Model

CAPM calculates the return that equity investors demand:

```
Cost of Equity = Risk-Free Rate + β × Market Risk Premium

      Re       =      Rf       + β ×       MRP
```

### Breaking Down Each Component

#### Risk-Free Rate (Rf)

| What It Is | How to Find It | Typical Values |
|------------|----------------|----------------|
| Return on a "risk-free" investment | Government bond yields | 2-4% (varies by country/time) |
| Usually long-term govt bonds | Central bank data, yield curves | Germany: ~3.25% (2025) |
| Represents time value of money | Match duration to investment horizon | US: ~4.5% (2025) |

#### Market Risk Premium (MRP)

| What It Is | How to Find It | Typical Values |
|------------|----------------|----------------|
| Extra return for investing in stocks vs. bonds | Historical analysis, surveys | 5-7% commonly used |
| Compensation for equity market risk | Academic studies, practitioner guidance | Germany FAUB: 5.25-6.75% |
| The "price" of systematic risk | Duff & Phelps, Damodaran datasets | US: 5-6% typical |

#### Beta (β)

| What It Is | How to Find It | Typical Values |
|------------|----------------|----------------|
| Company's sensitivity to market | Bloomberg, Reuters, Yahoo Finance | 0.5 - 2.0 for most companies |
| Measure of systematic risk | Regression of returns vs. market | Tech: often > 1.5 |
| Relative volatility | Peer company analysis for private cos | Utilities: often < 0.8 |

### CAPM Example Calculation

```
Given:
- Risk-Free Rate (Rf) = 3.25%
- Beta (β) = 1.44
- Market Risk Premium (MRP) = 6.75%

Cost of Equity = 3.25% + 1.44 × 6.75%
               = 3.25% + 9.72%
               = 12.97%

Interpretation: Shareholders require a 12.97% annual return
               to invest in this company given its risk level.
```

### Visual Representation: Security Market Line

```
Expected                                        /
Return                                        /
   │                                        / High Beta Stocks
   │                                      /   (β > 1)
   │                                    /
   │                                  /
   │                            ●  /  ← Company with β = 1.44
   │                             /      (Return = 12.97%)
   │                           /
   │                     ●   /  ← Market Portfolio (β = 1)
   │                       /      (Return = Rf + MRP = 10%)
   │                     /
   │                   /
   │               ● /  ← Low Beta Stocks (β < 1)
   │               /
   │             /
   │           /
   │      ●  /  ← Risk-Free Rate (β = 0)
   │        /      (Return = 3.25%)
   │       /
   └──────┴────────────────────────────────── Beta
          0        0.5        1.0        1.5        2.0
```

---

## 4. WACC - The Blended Discount Rate

### What is WACC?

**Weighted Average Cost of Capital** - the blended cost of all funding sources (debt and equity).

```
WACC = (E/V × Re) + (D/V × Rd × (1-T))

Where:
- E   = Market value of equity
- D   = Market value of debt
- V   = E + D (total value)
- Re  = Cost of equity (from CAPM)
- Rd  = Cost of debt (interest rate)
- T   = Corporate tax rate
```

### Why Blend Debt and Equity?

Companies fund operations with two main sources:

| Source | Cost | Risk to Provider | Characteristics |
|--------|------|------------------|-----------------|
| **Equity** | High (Re) | High (paid last) | No fixed payments, upside potential |
| **Debt** | Low (Rd) | Low (paid first) | Fixed interest, tax-deductible |

### Why is Debt Cheaper?

1. **Lower risk for lenders:** Debt holders get paid before equity holders in bankruptcy
2. **Tax deductibility:** Interest expense reduces taxable income

```
After-Tax Cost of Debt = Rd × (1 - T)

Example:
- Interest rate = 6%
- Tax rate = 25%
- After-tax cost = 6% × (1 - 0.25) = 4.5%
```

### WACC Calculation Example

| Source | Market Value | Weight | Cost | Tax Adjustment | Weighted Cost |
|--------|--------------|--------|------|----------------|---------------|
| Equity | EUR 700K | 70% | 12.97% | N/A | 9.08% |
| Debt | EUR 300K | 30% | 6.00% | × (1 - 25%) | 1.35% |
| **Total** | **EUR 1,000K** | **100%** | | | **10.43%** |

### Visual: Capital Structure Impact on WACC

```
WACC
  │
  │
14%┤
   │    ●
   │      ●
12%┤        ●
   │          ●
   │            ●
10%┤              ●───●───●                 Optimal range
   │                        ●
   │                          ●
 8%┤                            ●
   │                              ●
   │                                ●       Financial
 6%┤                                  ●     distress
   │                                        risk rises
   └──────┬──────┬──────┬──────┬──────┬────── Debt/Equity
          0%    20%    40%    60%    80%

   All     ◄─────── Optimal ───────►    Too much
 Equity      Leverage Range              Debt
```

### Special Case: All-Equity Company

When a company has **no debt** (D = 0):

```
WACC = (100% × Re) + (0% × Rd × (1-T))
     = Re
     = Cost of Equity
```

**For companies like Louise/GECOS with no debt:**
```
WACC = Cost of Equity = 12.97%
```

---

## 5. The Complete Valuation Flow

### Step-by-Step Process

```
┌─────────────────────────────────────────────────────────────────────┐
│ STEP 1: SELECT COMPARABLE COMPANIES (Peer Group)                    │
│                                                                     │
│ Criteria:                                                           │
│ - Same industry/sector                                              │
│ - Similar size                                                      │
│ - Similar business model                                            │
│ - Publicly traded (observable beta)                                 │
│                                                                     │
│ Example: Terex, Astec, Elecon, Metso, Saimo                         │
└─────────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│ STEP 2: GATHER LEVERED BETAS                                        │
│                                                                     │
│ Source: Bloomberg, Reuters, Yahoo Finance                           │
│                                                                     │
│ Company          │ Index  │ Levered Beta │ R²   │ D/E Ratio         │
│ ─────────────────┼────────┼──────────────┼──────┼──────────         │
│ Terex Corp       │ DWCFT  │ 1.63         │ 0.39 │ 0.28              │
│ Astec Industries │ DWCFT  │ 1.20         │ 0.17 │ 0.04              │
│ Elecon Eng.      │ BSE500 │ 1.77         │ 0.32 │ 0.00              │
│ Metso Corp       │ HEX    │ 1.78         │ 0.52 │ 0.13              │
│ Saimo Tech       │ SZCOMP │ 1.46         │ 0.38 │ 0.03              │
└─────────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│ STEP 3: UNLEVER THE BETAS                                           │
│                                                                     │
│ Formula: βU = βL ÷ (1 + D/E)   [simplified, assuming no tax effect] │
│                                                                     │
│ Company          │ Levered β │ D/E  │ Unlevered β                   │
│ ─────────────────┼───────────┼──────┼─────────────                  │
│ Terex Corp       │ 1.63      │ 0.28 │ 1.27                          │
│ Astec Industries │ 1.20      │ 0.04 │ 1.16                          │
│ Elecon Eng.      │ 1.77      │ 0.00 │ 1.77                          │
│ Metso Corp       │ 1.78      │ 0.13 │ 1.58                          │
│ Saimo Tech       │ 1.46      │ 0.03 │ 1.42                          │
│ ─────────────────┼───────────┼──────┼─────────────                  │
│ AVERAGE          │ 1.57      │ 0.10 │ 1.44                          │
└─────────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│ STEP 4: RELEVER FOR TARGET COMPANY                                  │
│                                                                     │
│ Target company capital structure:                                   │
│ - Debt/Equity ratio = 0 (no debt)                                   │
│                                                                     │
│ βL = βU × (1 + D/E)                                                 │
│    = 1.44 × (1 + 0)                                                 │
│    = 1.44                                                           │
└─────────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│ STEP 5: APPLY CAPM                                                  │
│                                                                     │
│ Cost of Equity = Rf + β × MRP                                       │
│                = 3.25% + 1.44 × 6.75%                               │
│                = 3.25% + 9.72%                                      │
│                = 12.97%                                             │
└─────────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│ STEP 6: CALCULATE WACC                                              │
│                                                                     │
│ Since target has no debt:                                           │
│ WACC = Cost of Equity = 12.97%                                      │
│                                                                     │
│ For Terminal Value (with 1% growth):                                │
│ Terminal Discount Rate = 12.97% - 1.00% = 11.97%                    │
└─────────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│ STEP 7: DISCOUNT FUTURE CASH FLOWS                                  │
│                                                                     │
│ DCF Formula:                                                        │
│                                                                     │
│         CF₁         CF₂         CF₃              CFn + TV           │
│ PV = ────────── + ────────── + ────────── + ... + ──────────        │
│      (1+WACC)¹   (1+WACC)²   (1+WACC)³         (1+WACC)ⁿ            │
│                                                                     │
│ Where TV (Terminal Value) = CFn × (1+g) ÷ (WACC - g)                │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 6. Sensitivity: Why Discount Rate Matters

### Impact of Discount Rate Changes

| Discount Rate | Present Value Factor (5 years) | Value Impact |
|---------------|--------------------------------|--------------|
| 10% | 0.621 | +15% vs. base |
| 11% | 0.593 | +8% vs. base |
| **12%** | **0.567** | **Base case** |
| 13% | 0.543 | -4% vs. base |
| 14% | 0.519 | -8% vs. base |
| 15% | 0.497 | -12% vs. base |

### Terminal Value Sensitivity (Even More Impactful)

The terminal value often represents 60-80% of total DCF value.

```
Terminal Value = Final Year Cash Flow × (1 + g) ÷ (WACC - g)
```

| WACC | Growth (g) | TV Multiple | Impact |
|------|------------|-------------|--------|
| 12% | 1% | 9.2x | Base |
| 11% | 1% | 10.1x | +10% |
| 12% | 2% | 10.2x | +11% |
| 13% | 1% | 8.4x | -9% |
| 12% | 0% | 8.3x | -10% |

### Sensitivity Matrix Example

```
                        Market Risk Premium
                   5.75%   6.25%   6.75%   7.25%   7.75%
              ┌─────────────────────────────────────────┐
        2.75% │  1,026    962     905     855     811  │
              │                                        │
Risk    3.00% │  1,003    941     887     839     796  │
Free          │                                        │
Rate    3.25% │   980     921    [870]    824     783  │ ← Base Case
              │                                        │
        3.50% │   959     903     853     809     769  │
              │                                        │
        3.75% │   939     885     837     795     757  │
              └─────────────────────────────────────────┘
                                   ↑
                              Base Case
```

---

## 7. Practical Application: Louise/GECOS Example

### Given Information

| Parameter | Value | Source |
|-----------|-------|--------|
| Risk-Free Rate | 3.25% | German Bundesbank yield curve (Jun-Aug 2025) |
| Market Risk Premium | 6.75% | FAUB recommendation (Sep 2025) |
| Peer Unlevered Beta | 1.44 | Average of 5 comparable companies |
| Target D/E Ratio | 0.00 | Louise/GECOS have no debt |
| Growth Rate (TV) | 1.00% | Long-term inflation assumption |

### Calculation

```
Step 1: Relever Beta
        βL = 1.44 × (1 + 0) = 1.44

Step 2: Cost of Equity (CAPM)
        Re = 3.25% + 1.44 × 6.75% = 12.97%

Step 3: WACC
        WACC = 100% × 12.97% = 12.97%  (no debt)

Step 4: Terminal Value Discount Rate
        TV Rate = 12.97% - 1.00% = 11.97%
```

### Discount Rate Summary

| Period | Rate | Use |
|--------|------|-----|
| Phase I (FY25-FY28) | 12.97% | Discount annual cash flows |
| Phase II (FY29+) | 11.97% | Capitalize terminal value |

### Compounding Factor (for mid-year valuation)

```
From Jan 1 to Oct 31, 2025 = 304 days

Compounding Factor = (1 + 0.1297)^(304/365) = 1.1069

This adjusts the Jan 1 value to Oct 31 valuation date.
```

---

## 8. Common Negotiation Points

### Arguments That INCREASE Discount Rate (Lower Value)

| Argument | Typical Adjustment | When to Use |
|----------|-------------------|-------------|
| Small company premium | +2% to +6% | Private companies, <$100M revenue |
| Country risk premium | +1% to +10% | Emerging markets, political instability |
| Illiquidity discount | +1% to +3% | Private companies, no market for shares |
| Company-specific risk | +1% to +5% | Customer concentration, key person risk |
| Higher beta justified | Varies | More volatile business than peers |

### Arguments That DECREASE Discount Rate (Higher Value)

| Argument | Typical Adjustment | When to Use |
|----------|-------------------|-------------|
| Lower beta justified | Varies | More stable than peers (e.g., recurring revenue) |
| Lower MRP appropriate | -0.5% to -1% | Stable industry, defensive business |
| Synergy value | N/A (adjust cash flows) | Strategic buyer, not financial |
| Control premium | +15% to +30% on value | Acquiring 100% ownership |

### Red Flags to Challenge

| Issue | Question to Ask |
|-------|-----------------|
| Beta source unclear | "What time period and frequency was used?" |
| Few/poor comparables | "Are these really comparable businesses?" |
| MRP at extreme | "Why not use mid-range of FAUB guidance?" |
| No small company premium | "Shouldn't private company risk be considered?" |
| Ignoring country risk | "What about operational risks in [country]?" |

---

## 9. Quick Reference Formulas

### Core Formulas

```
┌────────────────────────────────────────────────────────────────────┐
│ CAPM (Cost of Equity)                                              │
│                                                                    │
│   Re = Rf + β × MRP                                               │
│                                                                    │
│   Where:  Re  = Cost of equity                                    │
│           Rf  = Risk-free rate                                    │
│           β   = Beta                                              │
│           MRP = Market risk premium                               │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│ WACC (Weighted Average Cost of Capital)                            │
│                                                                    │
│   WACC = (E/V × Re) + (D/V × Rd × (1-T))                         │
│                                                                    │
│   Where:  E/V = Equity weight                                     │
│           D/V = Debt weight                                       │
│           Re  = Cost of equity                                    │
│           Rd  = Cost of debt                                      │
│           T   = Tax rate                                          │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│ Unlevering Beta                                                    │
│                                                                    │
│   βU = βL ÷ (1 + (1-T) × D/E)                                    │
│                                                                    │
│   Simplified (no tax): βU = βL ÷ (1 + D/E)                       │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│ Relevering Beta                                                    │
│                                                                    │
│   βL = βU × (1 + (1-T) × D/E)                                    │
│                                                                    │
│   Simplified (no tax): βL = βU × (1 + D/E)                       │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│ Terminal Value (Gordon Growth Model)                               │
│                                                                    │
│   TV = CFn × (1 + g) ÷ (WACC - g)                                │
│                                                                    │
│   Where:  CFn  = Final year cash flow                             │
│           g    = Perpetual growth rate                            │
│           WACC = Discount rate                                    │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│ Present Value                                                      │
│                                                                    │
│   PV = FV ÷ (1 + r)^n                                            │
│                                                                    │
│   Where:  FV = Future value                                       │
│           r  = Discount rate                                      │
│           n  = Number of periods                                  │
└────────────────────────────────────────────────────────────────────┘
```

### Quick Reference Table

| Metric | Formula | Typical Range |
|--------|---------|---------------|
| Risk-Free Rate | Govt bond yield | 2-5% |
| Market Risk Premium | Historical/survey | 5-7% |
| Beta (unlevered) | Peer analysis | 0.5-2.0 |
| Cost of Equity | Rf + β × MRP | 8-15% |
| Cost of Debt (after-tax) | Interest × (1-T) | 3-6% |
| WACC | Weighted average | 7-12% |
| Terminal Growth | GDP/inflation proxy | 1-3% |

---

## Appendix: Data Sources

### Where to Find Beta

| Source | Access | Notes |
|--------|--------|-------|
| Bloomberg Terminal | Paid subscription | Industry standard |
| Reuters/Refinitiv | Paid subscription | Comprehensive data |
| Yahoo Finance | Free | Basic beta available |
| Damodaran Online | Free | Industry averages |
| Capital IQ | Paid subscription | Detailed analytics |

### Where to Find Risk-Free Rates

| Country | Source |
|---------|--------|
| Germany | Deutsche Bundesbank yield curve |
| USA | US Treasury yields |
| UK | Bank of England gilt yields |
| EU | ECB yield curves |

### Where to Find Market Risk Premium

| Source | Link/Reference |
|--------|----------------|
| FAUB (Germany) | IDW guidelines |
| Duff & Phelps | Cost of Capital Navigator |
| Damodaran | NYU Stern website (free) |
| KPMG | Equity Market Risk Premium studies |

---

*Document created: December 2025*
*For use in Gebtron FZCO M&A analysis*
