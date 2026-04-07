# Understanding Cash Flows in DCF Valuation

*A practical guide to the numerator of the DCF equation*

---

## Table of Contents

1. [The Big Picture](#1-the-big-picture)
2. [Types of Cash Flows in Valuation](#2-types-of-cash-flows-in-valuation)
3. [Matching Cash Flow to Discount Rate](#3-matching-cash-flow-to-discount-rate)
4. [From Accounting Profits to Cash Flow](#4-from-accounting-profits-to-cash-flow)
5. [Free Cash Flow to Firm (FCFF)](#5-free-cash-flow-to-firm-fcff)
6. [Free Cash Flow to Equity (FCFE)](#6-free-cash-flow-to-equity-fcfe)
7. [Dividend Discount Model (DDM)](#7-dividend-discount-model-ddm)
8. [The Earnings Value Method](#8-the-earnings-value-method-german-approach)
9. [Working Capital Adjustments](#9-working-capital-adjustments)
10. [CapEx and Depreciation](#10-capex-and-depreciation)
11. [Terminal Value](#11-terminal-value)
12. [Non-Operating Assets](#12-non-operating-assets-excess-cash)
13. [Tax Considerations](#13-tax-considerations)
14. [Which Method to Use?](#14-which-method-to-use)
15. [Common Mistakes](#15-common-mistakes)
16. [Quick Reference](#16-quick-reference)

---

## 1. The Big Picture

### The DCF Equation

```
                    CF₁         CF₂         CF₃              CFₙ + TV
Enterprise Value = ────────── + ────────── + ────────── + ... + ──────────
                   (1+WACC)¹   (1+WACC)²   (1+WACC)³         (1+WACC)ⁿ
```

The previous guide covered the **denominator** (WACC). This guide covers the **numerator** (CF).

### The Fundamental Question

> "What cash flows should I discount?"

The answer depends on:
1. What value you're trying to find (Enterprise vs. Equity)
2. What discount rate you're using
3. Data availability
4. The company's situation (growth, dividends, capital structure)

### Cash Flow vs. Accounting Profit

```
┌─────────────────────────────────────────────────────────────────────┐
│                    WHY CASH FLOW, NOT PROFIT?                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ACCOUNTING PROFIT                    CASH FLOW                     │
│  (Accrual Basis)                      (What You Can Spend)          │
│                                                                     │
│  • Revenue when earned                • Cash when received          │
│  • Expenses when incurred             • Cash when paid              │
│  • Includes non-cash items            • Only actual cash movements  │
│  • Subject to accounting choices      • Harder to manipulate        │
│  • Shows "economic" performance       • Shows "spendable" value     │
│                                                                     │
│  "Profit is an opinion, cash is a fact."                           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### The Key Insight

```
You can only VALUE what you can RECEIVE.

Shareholders receive:
├── Dividends (while holding)
├── Share buybacks (partial exit)
└── Sale proceeds (full exit)

All of these ultimately depend on the company's ability
to generate CASH, not accounting profits.
```

---

## 2. Types of Cash Flows in Valuation

### Overview of Cash Flow Types

```
                         COMPANY OPERATIONS
                                │
                                ▼
                    ┌───────────────────────┐
                    │   OPERATING CASH      │
                    │   FLOW                │
                    └───────────────────────┘
                                │
                   ┌────────────┴────────────┐
                   │                         │
                   ▼                         ▼
        ┌─────────────────┐       ┌─────────────────┐
        │  Reinvestment   │       │  Available for  │
        │  (CapEx, WC)    │       │  Distribution   │
        └─────────────────┘       └─────────────────┘
                                         │
                          ┌──────────────┼──────────────┐
                          │              │              │
                          ▼              ▼              ▼
                   ┌──────────┐   ┌──────────┐   ┌──────────┐
                   │  Debt    │   │  Equity  │   │  Retain  │
                   │ Payments │   │ Returns  │   │  in Co.  │
                   └──────────┘   └──────────┘   └──────────┘
                        │              │
                        │         ┌────┴────┐
                        │         │         │
                        ▼         ▼         ▼
                   Interest   Dividends  Buybacks
```

### The Cash Flow Hierarchy

| Level | Cash Flow Type | Who Gets It | Discount Rate | Values |
|-------|---------------|-------------|---------------|--------|
| 1 | **EBITDA** | No one directly | Not used alone | Quick proxy |
| 2 | **FCFF** (Unlevered) | All capital providers | WACC | Enterprise Value |
| 3 | **FCFE** (Levered) | Equity holders only | Cost of Equity | Equity Value |
| 4 | **Dividends** | Shareholders | Cost of Equity | Equity Value |
| 5 | **Earnings** (German method) | Shareholders | Cost of Equity | Equity Value |

### Detailed Comparison

| Metric | Calculation | Includes | Excludes |
|--------|-------------|----------|----------|
| **EBITDA** | Revenue - OpEx | Operating profit | D&A, Interest, Tax, CapEx, WC |
| **EBIT** | EBITDA - D&A | Operating profit after D&A | Interest, Tax, CapEx, WC |
| **NOPAT** | EBIT × (1-T) | After-tax operating profit | Interest, CapEx, WC |
| **FCFF** | NOPAT + D&A - CapEx - ΔWC | Cash to all investors | Interest, Debt payments |
| **FCFE** | FCFF - Interest(1-T) - Debt + New Debt | Cash to equity only | — |
| **Dividends** | Board decision | Cash actually paid | Retained earnings |
| **Net Income** | Revenue - All Expenses | Accounting profit | Non-cash adjustments |

---

## 3. Matching Cash Flow to Discount Rate

### The Golden Rule

```
┌────────────────────────────────────────────────────────────────────┐
│                     THE CONSISTENCY PRINCIPLE                      │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  Cash Flow Type    MUST BE discounted at    To get                 │
│  ─────────────────────────────────────────────────────             │
│  FCFF (Unlevered)  →  WACC               →  Enterprise Value       │
│  FCFE (Levered)    →  Cost of Equity     →  Equity Value           │
│  Dividends         →  Cost of Equity     →  Equity Value           │
│  Earnings          →  Cost of Equity     →  Equity Value           │
│                                                                    │
│  MIXING THEM IS THE #1 VALUATION ERROR!                            │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### Why This Matters

**FCFF** includes cash available to **both** debt and equity holders:
- Debt holders get interest and principal
- Equity holders get the rest

So FCFF must be discounted at the **blended cost** (WACC).

**FCFE** is cash available **only** to equity holders (after debt is paid):
- Must be discounted at the **equity cost** only

### From Enterprise Value to Equity Value

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   Enterprise Value (from FCFF / WACC)                               │
│           │                                                         │
│           ▼                                                         │
│   + Non-Operating Assets (excess cash, investments)                 │
│   - Debt (loans, bonds, leases)                                     │
│   - Minority Interest                                               │
│   - Preferred Stock                                                 │
│   + Associates & JVs (if not consolidated)                          │
│           │                                                         │
│           ▼                                                         │
│   = Equity Value                                                    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

If you use FCFE directly, you get **Equity Value** without this bridge.

---

## 4. From Accounting Profits to Cash Flow

### The Accrual Accounting Problem

Accounting records transactions when they **occur**, not when cash moves:

| Transaction | Accounting Treatment | Cash Reality |
|-------------|---------------------|--------------|
| Sale on credit | Revenue recognized NOW | Cash received in 60 days |
| Buy inventory | No expense yet | Cash paid NOW |
| Receive deposit | Liability (not revenue) | Cash received NOW |
| Depreciation | Expense recognized | No cash movement |
| Accrue bonus | Expense recognized NOW | Cash paid next year |

### The Bridge from Net Income to Cash Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│              NET INCOME TO FREE CASH FLOW BRIDGE                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Net Income (Accounting Profit)                                    │
│                                                                     │
│   + Depreciation & Amortization      ← Non-cash expense, add back   │
│   + Other Non-Cash Charges           ← Stock comp, impairments      │
│   ─────────────────────────────────                                 │
│   = Funds from Operations                                           │
│                                                                     │
│   - Increase in Accounts Receivable  ← Sold but didn't collect      │
│   - Increase in Inventory            ← Bought but didn't sell       │
│   + Increase in Accounts Payable     ← Bought but didn't pay        │
│   + Increase in Accrued Expenses     ← Expensed but didn't pay      │
│   ─────────────────────────────────                                 │
│   = Operating Cash Flow                                             │
│                                                                     │
│   - Capital Expenditures (CapEx)     ← Investment in fixed assets   │
│   - Acquisitions                     ← Investment in businesses     │
│   + Asset Sales                      ← Cash from disposals          │
│   ─────────────────────────────────                                 │
│   = Free Cash Flow (to Firm or Equity, depending on starting point) │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Visual: Cash Flow Statement Structure

```
                    CASH FLOW STATEMENT
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
┌───────────────┐  ┌───────────────┐  ┌───────────────┐
│  OPERATING    │  │  INVESTING    │  │  FINANCING    │
│  ACTIVITIES   │  │  ACTIVITIES   │  │  ACTIVITIES   │
├───────────────┤  ├───────────────┤  ├───────────────┤
│ Net Income    │  │ CapEx         │  │ Debt issued   │
│ + D&A         │  │ Acquisitions  │  │ Debt repaid   │
│ - ΔWC         │  │ Asset sales   │  │ Dividends     │
│ + Non-cash    │  │ Investments   │  │ Buybacks      │
│               │  │               │  │ Equity issued │
└───────┬───────┘  └───────┬───────┘  └───────┬───────┘
        │                  │                  │
        │    FREE CASH     │                  │
        │    FLOW TO       │                  │
        │    FIRM          │                  │
        │◄─────────────────┤                  │
        │                                     │
        │         FREE CASH FLOW              │
        │         TO EQUITY                   │
        │◄────────────────────────────────────┤
        │
        ▼
   Change in Cash Balance
```

---

## 5. Free Cash Flow to Firm (FCFF)

### What is FCFF?

**Free Cash Flow to Firm** (also called **Unlevered Free Cash Flow**) is:
- Cash generated by operations
- After reinvestment needs (CapEx, Working Capital)
- Before any payments to capital providers
- Available to **both** debt holders AND equity holders

### FCFF Calculation Methods

#### Method 1: From EBIT

```
FCFF = EBIT × (1 - Tax Rate)
       + Depreciation & Amortization
       - Capital Expenditures
       - Change in Net Working Capital

     = NOPAT + D&A - CapEx - ΔWC
```

#### Method 2: From EBITDA

```
FCFF = EBITDA × (1 - Tax Rate)
       + Depreciation × Tax Rate      ← Tax shield from D&A
       - Capital Expenditures
       - Change in Net Working Capital
```

#### Method 3: From Net Income

```
FCFF = Net Income
       + Interest Expense × (1 - Tax Rate)   ← Add back after-tax interest
       + Depreciation & Amortization
       - Capital Expenditures
       - Change in Net Working Capital
```

#### Method 4: From Operating Cash Flow

```
FCFF = Operating Cash Flow (from Cash Flow Statement)
       + Interest Expense × (1 - Tax Rate)
       - Capital Expenditures
```

### FCFF Example

| Line Item | Amount | Notes |
|-----------|--------|-------|
| Revenue | 10,000 | |
| - Operating Expenses | (7,000) | |
| **EBITDA** | **3,000** | |
| - Depreciation | (500) | |
| **EBIT** | **2,500** | |
| - Tax @ 25% | (625) | On EBIT, not EBT |
| **NOPAT** | **1,875** | Net Operating Profit After Tax |
| + Depreciation | 500 | Add back non-cash |
| - CapEx | (800) | Investment in assets |
| - Increase in WC | (200) | Investment in operations |
| **FCFF** | **1,375** | Available to all capital providers |

### When to Use FCFF

| Situation | Use FCFF? | Reason |
|-----------|-----------|--------|
| Company has significant debt | Yes | FCFF is unaffected by capital structure |
| Changing capital structure | Yes | Avoids distortion from debt changes |
| Comparing companies | Yes | Removes capital structure differences |
| LBO / Acquisition analysis | Yes | Standard for deal valuation |
| Company has no debt | Either | FCFF = FCFE when no debt |

---

## 6. Free Cash Flow to Equity (FCFE)

### What is FCFE?

**Free Cash Flow to Equity** (also called **Levered Free Cash Flow**) is:
- Cash available **after** paying debt holders
- Available **only** to equity holders
- What could theoretically be paid as dividends

### FCFE Calculation Methods

#### Method 1: From FCFF

```
FCFE = FCFF
       - Interest Expense × (1 - Tax Rate)
       - Principal Repayments
       + New Debt Issued
```

#### Method 2: From Net Income

```
FCFE = Net Income
       + Depreciation & Amortization
       - Capital Expenditures
       - Change in Net Working Capital
       - Principal Repayments
       + New Debt Issued
```

#### Method 3: From Operating Cash Flow

```
FCFE = Operating Cash Flow
       - Capital Expenditures
       - Principal Repayments
       + New Debt Issued
```

### FCFE Example (Continuing from FCFF)

| Line Item | Amount | Notes |
|-----------|--------|-------|
| **FCFF** | **1,375** | From previous calculation |
| - Interest × (1-T) | (75) | 100 interest × 75% |
| - Debt Repayment | (200) | Principal payment |
| + New Debt | 100 | New borrowing |
| **FCFE** | **1,200** | Available to equity only |

### Alternative: Direct from Net Income

| Line Item | Amount | Notes |
|-----------|--------|-------|
| Net Income | 1,800 | After interest and tax |
| + Depreciation | 500 | |
| - CapEx | (800) | |
| - Increase in WC | (200) | |
| - Debt Repayment | (200) | |
| + New Debt | 100 | |
| **FCFE** | **1,200** | Same result |

### When to Use FCFE

| Situation | Use FCFE? | Reason |
|-----------|-----------|--------|
| Valuing equity directly | Yes | Goes straight to equity value |
| Stable capital structure | Yes | Debt flows are predictable |
| Financial institutions | Yes | Debt is "inventory," not financing |
| Highly leveraged firms | Careful | Can be negative even if healthy |
| Private equity | Sometimes | Often use FCFF + debt model instead |

---

## 7. Dividend Discount Model (DDM)

### What is DDM?

The **Dividend Discount Model** values equity based on **actual dividends paid**:

```
                    D₁          D₂          D₃              Dₙ
Equity Value = ────────── + ────────── + ────────── + ... + ──────────
               (1+Re)¹     (1+Re)²     (1+Re)³         (1+Re)ⁿ

Where:
- D = Dividend per share
- Re = Cost of equity
```

### Gordon Growth Model (Constant Growth DDM)

For stable, mature companies with predictable dividend growth:

```
                    D₁              D₀ × (1 + g)
Equity Value = ─────────── = ───────────────────
                Re - g            Re - g

Where:
- D₀ = Current dividend
- D₁ = Next year's dividend
- g  = Perpetual dividend growth rate
- Re = Cost of equity
```

### Example: Gordon Growth Model

```
Given:
- Current dividend (D₀) = EUR 2.00 per share
- Expected growth (g) = 3%
- Cost of equity (Re) = 10%

D₁ = 2.00 × (1 + 0.03) = EUR 2.06

Value = 2.06 / (0.10 - 0.03)
      = 2.06 / 0.07
      = EUR 29.43 per share
```

### Two-Stage DDM

For companies with different growth phases:

```
┌─────────────────────────────────────────────────────────────────────┐
│                       TWO-STAGE DDM                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ Stage 1: High Growth Period (Years 1-n)                             │
│                                                                     │
│         D₁         D₂                 Dₙ                            │
│ PV₁ = ────── + ────────── + ... + ──────────                        │
│       (1+Re)¹   (1+Re)²           (1+Re)ⁿ                           │
│                                                                     │
│ Stage 2: Stable Growth (Terminal Value)                             │
│                                                                     │
│              Dₙ₊₁                                                   │
│ TVₙ = ─────────────  then discount back: PV₂ = TVₙ / (1+Re)ⁿ         │
│         Re - g                                                      │
│                                                                     │
│ Total Value = PV₁ + PV₂                                             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### DDM Limitations

| Issue | Problem | When DDM Fails |
|-------|---------|----------------|
| No dividends | D = 0 → Value = 0 | Growth companies (Amazon, Tesla early) |
| Irregular dividends | Can't model pattern | Cyclical companies |
| Dividends ≠ Value | Retained earnings ignored | Companies reinvesting heavily |
| Policy changes | Dividends are discretionary | Dividend cuts/increases |
| g > Re | Negative/infinite value | Impossible in perpetuity |

### When to Use DDM

| Situation | Use DDM? | Reason |
|-----------|----------|--------|
| Stable dividend payers | Yes | Dividends are predictable |
| Utilities, REITs | Yes | High, stable payout ratios |
| Mature companies | Yes | Limited reinvestment needs |
| Banks & Insurance | Yes | Often preferred method |
| Growth companies | No | Don't pay dividends |
| Minority investors | Yes | Only receive dividends anyway |

---

## 8. The Earnings Value Method (German Approach)

### What is the Ertragswertverfahren?

The **Earnings Value Method** (used in Louise/GECOS valuations) is the German standard:
- Based on IDW S1 standards
- Uses **net income** as the cash flow proxy
- Adjusts for distribution vs. retention
- Common in German/Austrian/Swiss valuations

### Key Concept: Ausschüttung vs. Thesaurierung

```
┌─────────────────────────────────────────────────────────────────────┐
│                    GERMAN EARNINGS VALUE METHOD                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Net Income (Jahresüberschuss)                                     │
│         │                                                           │
│         ├──────────────────────────┬─────────────────────┐          │
│         │                          │                     │          │
│         ▼                          ▼                     ▼          │
│   ┌───────────────┐        ┌───────────────┐        ┌──────────┐    │
│   │ Distributed   │        │ Retained      │        │ Growth   │    │
│   │(Ausschüttung) |        │(Thesaurierung)|        │ Retention│    │
│   └───────────────┘        └───────────────┘        └──────────┘    │
│         │                          │                     │          │
│         ▼                          ▼                     ▼          │
│   Direct value               Value-neutral       Funds perpetual    │
│   to shareholders             reinvestment        growth in TV      │
│                                (earns Re)                           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### The Value-Neutral Reinvestment Assumption

Under IDW S1:
- **Distributed earnings** → Direct value to shareholders
- **Retained earnings** → Assumed to earn exactly the cost of equity (Re)
- Therefore: **EUR 1 retained = EUR 1 distributed** (in theory)

```
If retained earnings earn Re:

Value of EUR 1 retained = EUR 1 × Re / Re = EUR 1

This is the "wertneutrale Wiederanlage" (value-neutral reinvestment)
```

### Earnings Value Calculation

| Component | Formula |
|-----------|---------|
| Value from Distribution | Net Income × Distribution Rate |
| Value from Retention | Net Income × Retention Rate |
| Total Net Proceeds | Net Income (if value-neutral) |
| Terminal Value Adjustment | Deduct growth-related retention |

### Example: Louise Engineering (from actual valuation)

| Line Item | FY25 | FY26 | FY27 | FY28 | TV (FY29+) |
|-----------|------|------|------|------|------------|
| Net Income | 83 | 86 | 97 | 105 | 106 |
| × Distribution Rate (50%) | 41 | 43 | 49 | 52 | 53 |
| × Retention Rate (50%) | 41 | 43 | 49 | 52 | 53 |
| Growth-Related Retention | — | — | — | — | (6) |
| **Net Proceeds** | **83** | **86** | **97** | **105** | **100** |

### Criticism of the Method

| Issue | Reality |
|-------|---------|
| Value-neutral reinvestment | Rarely true—companies often earn < Re on retained cash |
| Ignores working capital | Net income ≠ cash flow |
| Ignores CapEx | Depreciation ≠ actual investment needs |
| Accounting-based | Subject to accounting policies |

### When It's Used

| Situation | Common? | Reason |
|-----------|---------|--------|
| German legal valuations | Very common | IDW S1 standard |
| Court-ordered valuations | Required | Legal precedent |
| Squeeze-outs, mergers | Required | German corporate law |
| Tax valuations | Common | Accepted by tax authorities |
| International M&A | Rare | FCFF/FCFE preferred |

---

## 9. Working Capital Adjustments

### What is Working Capital?

```
Net Working Capital (NWC) = Current Operating Assets - Current Operating Liabilities

Operating Current Assets:          Operating Current Liabilities:
├── Accounts Receivable            ├── Accounts Payable
├── Inventory                      ├── Accrued Expenses
├── Prepaid Expenses               ├── Deferred Revenue
└── Other Operating Current        └── Other Operating Current

EXCLUDES:                          EXCLUDES:
├── Cash (non-operating)           ├── Short-term Debt (financing)
└── Marketable Securities          └── Current Portion of LT Debt
```

### Why Working Capital Matters

```
┌─────────────────────────────────────────────────────────────────────┐
│                 WORKING CAPITAL = CASH TIED UP                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ Example: Company grows revenue from 1,000 to 1,500                  │
│                                                                     │
│ If WC = 20% of revenue:                                             │
│ - Old WC = 1,000 × 20% = 200                                        │
│ - New WC = 1,500 × 20% = 300                                        │
│ - ΔWC = 100 ← This cash is INVESTED, not available                  │
│                                                                     │
│ Growing companies CONSUME cash through WC                           │
│ Shrinking companies RELEASE cash from WC                            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Working Capital in FCF Calculation

| Working Capital Change | Effect on FCF | Logic |
|-----------------------|---------------|-------|
| WC Increases (ΔWC > 0) | **Subtract** | Cash tied up in operations |
| WC Decreases (ΔWC < 0) | **Add** | Cash released from operations |

### Detailed Working Capital Movements

| Item | Increases | Effect | Decreases | Effect |
|------|-----------|--------|-----------|--------|
| A/R | Sold but not collected | - Cash | Collected old sales | + Cash |
| Inventory | Bought stock | - Cash | Sold stock | + Cash |
| Prepaid | Paid in advance | - Cash | Expense recognized | + Cash |
| A/P | — | — | Paid suppliers | - Cash |
| A/P | Bought on credit | + Cash | — | — |
| Accrued | Expense not paid | + Cash | Paid accrual | - Cash |

### Example: Working Capital Change

| Item | Year 1 | Year 2 | Change | Cash Effect |
|------|--------|--------|--------|-------------|
| Accounts Receivable | 500 | 600 | +100 | (100) |
| Inventory | 300 | 350 | +50 | (50) |
| Accounts Payable | (200) | (250) | -50 | +50 |
| Accrued Expenses | (100) | (120) | -20 | +20 |
| **Net Working Capital** | **500** | **580** | **+80** | **(80)** |

**Result:** EUR 80 cash consumed by working capital increase.

---

## 10. CapEx and Depreciation

### The Relationship

```
┌─────────────────────────────────────────────────────────────────────┐
│              CAPEX vs. DEPRECIATION                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   CAPEX (Capital Expenditure)        DEPRECIATION                   │
│   ─────────────────────────          ────────────                   │
│   • Actual cash outflow              • Accounting allocation        │
│   • When asset is purchased          • Spread over useful life      │
│   • Creates/maintains capacity       • Non-cash expense             │
│   • Reduces FCF                      • Added back to FCF            │
│                                                                     │
│   They are NOT equal in any given year!                             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Types of CapEx

| Type | Purpose | Typical Relationship to D&A |
|------|---------|----------------------------|
| **Maintenance CapEx** | Replace worn-out assets | ≈ Depreciation |
| **Growth CapEx** | Expand capacity | > Depreciation |
| **Total CapEx** | Both combined | Usually > Depreciation |

### Estimating Normalized CapEx

```
For a stable company:
   Maintenance CapEx ≈ Depreciation

For a growing company:
   Total CapEx = Maintenance CapEx + Growth CapEx
               = Depreciation + (Revenue Growth × Capital Intensity)

Capital Intensity = Net PPE / Revenue
```

### Example: CapEx vs. Depreciation

| Year | Revenue | Growth | Net PPE | D&A | Maint. CapEx | Growth CapEx | Total CapEx |
|------|---------|--------|---------|-----|--------------|--------------|-------------|
| 1 | 1,000 | — | 400 | 50 | 50 | — | 50 |
| 2 | 1,100 | 10% | 440 | 55 | 55 | 40 | 95 |
| 3 | 1,210 | 10% | 484 | 61 | 61 | 44 | 105 |

Capital Intensity = 400 / 1,000 = 40%
Growth CapEx Year 2 = 100 (revenue growth) × 40% = 40

### Terminal Value CapEx

In the terminal value, CapEx should equal depreciation (plus growth needs):

```
Stable State:
- No real growth → Maintenance CapEx = Depreciation
- With growth g → CapEx = Depreciation + (g × Capital Intensity × Revenue)

Common Error: Using historical high CapEx in perpetuity
```

---

## 11. Terminal Value

### Why Terminal Value Matters

```
┌─────────────────────────────────────────────────────────────────────┐
│          TERMINAL VALUE: OFTEN 60-80% OF TOTAL DCF VALUE            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Example:                                                          │
│   ─────────                                                         │
│   Years 1-5 Cash Flows (explicit forecast):    EUR 200              │
│   Terminal Value (Year 5 onwards):             EUR 600              │
│   ─────────────────────────────────────────                         │
│   Total Enterprise Value:                      EUR 800              │
│                                                                     │
│   TV as % of Total = 600 / 800 = 75%                                │
│                                                                     │
│   Small changes in TV assumptions = Big changes in value!           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Two Methods for Terminal Value

#### Method 1: Gordon Growth (Perpetuity)

```
              FCFₙ × (1 + g)
    TV   = ─────────────────
              WACC - g

Where:
- FCFₙ = Final year free cash flow
- g    = Perpetual growth rate (typically 1-3%)
- WACC = Discount rate
```

#### Method 2: Exit Multiple

```
    TV = FCFₙ × Exit Multiple

or

    TV = EBITDAₙ × Exit EBITDA Multiple
```

### Perpetual Growth Rate Selection

| Factor | Consideration |
|--------|---------------|
| GDP growth | Long-term real GDP growth (2-3%) |
| Inflation | Add expected inflation (2%) |
| Industry growth | Mature industry may be below GDP |
| Company position | Market share gains/losses |
| **Typical range** | **1-3% nominal** |

**Warning:** Growth rate must be < WACC (otherwise infinite value)

### Terminal Value Cash Flow Adjustments

The terminal year cash flow must reflect a **steady state**:

| Item | Adjustment |
|------|------------|
| Revenue growth | Should match perpetual growth rate |
| Margins | Should be sustainable, not peak |
| CapEx | Should equal depreciation (+ growth) |
| Working capital | Should grow with revenue |
| Tax rate | Use long-term effective rate |

### Example: Terminal Value Calculation

```
Given (Year 5):
- FCFF₅ = EUR 150
- Perpetual growth (g) = 2%
- WACC = 10%

Terminal Value (end of Year 5):
TV₅ = 150 × (1.02) / (0.10 - 0.02)
    = 153 / 0.08
    = EUR 1,912.5

Present Value of TV:
PV(TV) = 1,912.5 / (1.10)⁵
       = 1,912.5 / 1.6105
       = EUR 1,187.5
```

---

## 12. Non-Operating Assets (Excess Cash)

### The Problem

```
┌─────────────────────────────────────────────────────────────────────┐
│                    DCF CAPTURES OPERATING VALUE                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   DCF Model Input: Cash flows from OPERATIONS                       │
│                                                                     │
│   What about:                                                       │
│   ├── Cash sitting in the bank?                                     │
│   ├── Marketable securities?                                        │
│   ├── Investment properties?                                        │
│   ├── Equity investments in other companies?                        │
│   └── Other non-core assets?                                        │
│                                                                     │
│   These are NOT captured in operating cash flows!                   │
│   They must be ADDED SEPARATELY.                                    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Determining Excess Cash

```
Total Cash on Balance Sheet
- Operating Cash (needed to run business)
─────────────────────────────────────────
= Excess Cash (add to Enterprise Value)

How to estimate Operating Cash:
├── Industry benchmarks (Cash / Revenue ratio)
├── Management guidance
├── Minimum cash balance policies
├── Working capital cycle analysis

Rule of thumb: 2-5% of revenue is operating cash
```

### Example: Louise Engineering

| Item | Amount | Notes |
|------|--------|-------|
| Cash on Balance Sheet | EUR 208K | |
| Annual Revenue | EUR 93K | |
| Operating Cash Needed | ~EUR 10K | ~10% of revenue (conservative) |
| **Excess Cash** | **~EUR 198K** | Should be added to DCF value |

### Treatment in Valuation

```
Enterprise Value (from DCF)           EUR 870K
+ Excess Cash                         EUR 198K
+ Other Non-Operating Assets          EUR  35K  (shareholder loan)
- Debt                                EUR    0
─────────────────────────────────────────────────
= Equity Value                        EUR 1,103K   ← HIGHER than reported!
```

### Common Non-Operating Assets

| Asset | Treatment | Valuation Method |
|-------|-----------|------------------|
| Excess cash | Add at face value | Balance sheet |
| Marketable securities | Add at market value | Mark-to-market |
| Investment properties | Add at appraised value | Real estate appraisal |
| Equity investments | Add at fair value | DCF or market value |
| Tax loss carryforwards | Add PV of tax savings | NPV of future tax shields |
| Pension surplus | Add (rare) | Actuarial value |

### Warning: Double-Counting

Don't add non-operating assets if their income is already in your cash flows!

| If Cash Flow Includes... | Then Don't Add... |
|--------------------------|-------------------|
| Interest income from cash | Cash balance |
| Rental income from property | Property value |
| Dividend income from investments | Investment value |

---

## 13. Tax Considerations

### Where Taxes Appear in DCF

```
┌─────────────────────────────────────────────────────────────────────┐
│                    TAXES IN DCF VALUATION                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   1. CASH FLOW (Numerator)                                          │
│      ├── FCFF uses NOPAT = EBIT × (1 - T)                           │
│      ├── FCFE uses Net Income (after tax)                           │
│      └── Tax rate affects cash available                            │
│                                                                     │
│   2. DISCOUNT RATE (Denominator)                                    │
│      ├── WACC includes after-tax cost of debt                       │
│      ├── Cost of Debt × (1 - T) = Tax shield benefit                │
│      └── Lower WACC → Higher value                                  │
│                                                                     │
│   3. TERMINAL VALUE                                                 │
│      └── Use sustainable long-term tax rate                         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Operating Taxes vs. Actual Taxes

| Concept | Definition | Use In |
|---------|------------|--------|
| **Marginal Tax Rate** | Rate on next dollar of income | FCFF calculation |
| **Effective Tax Rate** | Actual taxes / Pre-tax income | Reality check |
| **Cash Tax Rate** | Cash taxes paid / Pre-tax income | Cash flow focus |

### Tax Shield from Debt

```
Interest Tax Shield = Interest Expense × Tax Rate

Example:
- Interest = EUR 100
- Tax rate = 25%
- Tax shield = 100 × 25% = EUR 25 saved in taxes

This is why debt is "cheaper" than equity:
- Gross cost of debt: 6%
- After-tax cost: 6% × (1 - 25%) = 4.5%
```

### Tax in Different Cash Flow Methods

| Method | Tax Treatment |
|--------|---------------|
| **FCFF** | Apply tax to EBIT (ignoring interest deduction) |
| **FCFE** | Tax already applied to Net Income |
| **DDM** | Dividends paid from after-tax income |

### FCFF Tax Calculation Detail

```
Why tax EBIT, not EBT?

FCFF represents cash to ALL capital providers (debt + equity).
If we taxed EBT (after interest), we'd "give credit" for interest
deduction to equity holders only.

Instead:
- Tax the unlevered profit (EBIT)
- The tax benefit of debt appears in WACC (lower discount rate)

This keeps cash flow and discount rate CONSISTENT.
```

---

## 14. Which Method to Use?

### Decision Framework

```
┌─────────────────────────────────────────────────────────────────────┐
│                    CASH FLOW METHOD SELECTION                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                         START HERE                                  │
│                              │                                      │
│                              ▼                                      │
│            ┌─────────────────────────────────┐                      │
│            │ What value do you need?         │                      │
│            └─────────────────────────────────┘                      │
│                   │                   │                             │
│         Enterprise Value        Equity Value                        │
│                   │                   │                             │
│                   ▼                   ▼                             │
│            ┌──────────┐        ┌─────────────────┐                  │
│            │   FCFF   │        │ Does company    │                  │
│            │ + WACC   │        │ pay dividends?  │                  │
│            └──────────┘        └─────────────────┘                  │
│                                  │           │                      │
│                              Yes, stable   No/Irregular             │
│                                  │           │                      │
│                                  ▼           ▼                      │
│                            ┌──────────┐ ┌──────────┐                │
│                            │   DDM    │ │   FCFE   │                │
│                            │ + Re     │ │ + Re     │                │
│                            └──────────┘ └──────────┘                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Method Comparison Summary

| Criterion | FCFF | FCFE | DDM | Earnings (German) |
|-----------|------|------|-----|-------------------|
| **Values** | Enterprise | Equity | Equity | Equity |
| **Discount Rate** | WACC | Re | Re | Re |
| **Best for** | M&A, LBO | Direct equity | Stable dividends | German legal |
| **Handles debt changes** | Well | Poorly | N/A | Poorly |
| **Data needed** | Moderate | More | Less | Less |
| **Accounts for WC** | Yes | Yes | No | No |
| **Accounts for CapEx** | Yes | Yes | No | No |
| **International use** | High | Moderate | Moderate | Regional |

### Industry-Specific Preferences

| Industry | Preferred Method | Reason |
|----------|-----------------|--------|
| Banks & Insurance | DDM or Residual Income | Debt is "inventory" |
| Utilities | DDM | Stable, high dividends |
| REITs | DDM | Required high payout |
| Tech/Growth | FCFF or FCFE | No dividends |
| Industrial | FCFF | Capital intensive |
| Private Equity | FCFF | LBO modeling |
| German/Swiss | Earnings Value | Legal/tax acceptance |

---

## 15. Common Mistakes

### Cash Flow Errors

| Mistake | Problem | Solution |
|---------|---------|----------|
| Using Net Income as cash flow | Ignores WC, CapEx, non-cash items | Build proper FCF |
| Forgetting working capital | Overstates cash generation | Include ΔWC |
| Double-counting | Including interest in FCFF | Check consistency |
| Wrong CapEx in terminal | Using growth CapEx forever | Normalize to maintenance |
| Mixing cash flows | FCFE with WACC | Match CF to rate |

### Terminal Value Errors

| Mistake | Problem | Solution |
|---------|---------|----------|
| Growth > WACC | Impossible/infinite value | Cap growth at GDP + inflation |
| Peak margins in perpetuity | Overstates value | Use sustainable margins |
| No reinvestment for growth | Free lunch fallacy | Include growth CapEx/WC |
| Exit multiple inconsistent | Different from growth assumption | Reconcile approaches |

### Non-Operating Asset Errors

| Mistake | Problem | Solution |
|---------|---------|----------|
| Ignoring excess cash | Understates value | Add separately |
| Double-counting cash | If interest income in CF | Exclude cash OR interest |
| Operating cash as excess | Understates operating needs | Estimate operating cash |

### The Biggest Mistake

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   INCONSISTENCY BETWEEN CASH FLOW AND DISCOUNT RATE                 │
│                                                                     │
│   x FCFF discounted at Cost of Equity                               │
│   x FCFE discounted at WACC                                         │
│   x Pre-tax cash flow with after-tax discount rate                  │
│   x Nominal cash flows with real discount rate                      │
│                                                                     │
│   ALWAYS CHECK: Does my cash flow match my discount rate?           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 16. Quick Reference

### Cash Flow Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│ FREE CASH FLOW TO FIRM (FCFF)                                       │
│                                                                     │
│   FCFF = EBIT × (1 - T) + D&A - CapEx - ΔWC                         │
│        = NOPAT + D&A - CapEx - ΔWC                                  │
│                                                                     │
│   Alternative:                                                      │
│   FCFF = Net Income + Interest×(1-T) + D&A - CapEx - ΔWC            │
│                                                                     │
│   Discount at: WACC                                                 │
│   Result: Enterprise Value                                          │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ FREE CASH FLOW TO EQUITY (FCFE)                                     │
│                                                                     │
│   FCFE = FCFF - Interest×(1-T) - Debt Repayment + New Debt          │
│                                                                     │
│   Alternative:                                                      │
│   FCFE = Net Income + D&A - CapEx - ΔWC - Net Debt Payment          │
│                                                                     │
│   Discount at: Cost of Equity (Re)                                  │
│   Result: Equity Value                                              │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ TERMINAL VALUE                                                      │
│                                                                     │
│   Gordon Growth:                                                    │
│   TV = FCF × (1 + g) / (r - g)                                      │
│                                                                     │
│   Exit Multiple:                                                    │
│   TV = Metric × Multiple  (e.g., EBITDA × 8x)                       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ WORKING CAPITAL                                                     │
│                                                                     │
│   NWC = (A/R + Inventory + Prepaid) - (A/P + Accrued)               │
│                                                                     │
│   ΔWC = NWC(t) - NWC(t-1)                                           │
│                                                                     │
│   If ΔWC > 0: Subtract from cash flow (cash consumed)               │
│   If ΔWC < 0: Add to cash flow (cash released)                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Method Selection Quick Guide

| If You Need... | Use This Cash Flow | With This Rate | To Get |
|----------------|-------------------|----------------|--------|
| Total firm value | FCFF | WACC | Enterprise Value |
| Equity value directly | FCFE | Re | Equity Value |
| Value stable dividend payer | Dividends | Re | Equity Value |
| German legal valuation | Net Income (adjusted) | Re | Equity Value |

### Consistency Checklist

| Check | ✓ |
|-------|---|
| Cash flow and discount rate match (FCFF→WACC, FCFE→Re) | |
| Working capital changes included | |
| CapEx included (not just depreciation) | |
| Terminal value growth < discount rate | |
| Terminal value uses normalized cash flow | |
| Non-operating assets added separately | |
| Debt subtracted (if using FCFF for equity value) | |
| Tax treatment consistent | |
| Currency consistent (all same currency) | |
| Nominal vs. real consistent | |

---

## Appendix: Reconciliation Example

### Full DCF Walkthrough

**Given:**
- Revenue Year 1: EUR 10,000
- EBITDA Margin: 25%
- Depreciation: EUR 400
- Tax Rate: 25%
- CapEx: EUR 600
- Working Capital: 15% of Revenue
- Revenue Growth: 5%
- WACC: 10%
- Terminal Growth: 2%

**Year 1 FCFF Calculation:**

| Line | Amount | Calculation |
|------|--------|-------------|
| Revenue | 10,000 | Given |
| EBITDA | 2,500 | 10,000 × 25% |
| - Depreciation | (400) | Given |
| EBIT | 2,100 | |
| - Tax @ 25% | (525) | 2,100 × 25% |
| NOPAT | 1,575 | |
| + Depreciation | 400 | Add back |
| - CapEx | (600) | Given |
| - ΔWC | (75) | (10,500 - 10,000) × 15% |
| **FCFF** | **1,300** | |

**Five-Year Projection & Valuation:**

| Year | 1 | 2 | 3 | 4 | 5 | Terminal |
|------|---|---|---|---|---|----------|
| FCFF | 1,300 | 1,365 | 1,433 | 1,505 | 1,580 | 1,612 |
| PV Factor | 0.909 | 0.826 | 0.751 | 0.683 | 0.621 | |
| PV of FCFF | 1,182 | 1,128 | 1,076 | 1,028 | 981 | |

Terminal Value = 1,612 / (10% - 2%) = 20,150
PV of Terminal = 20,150 × 0.621 = 12,513

**Enterprise Value = 1,182 + 1,128 + 1,076 + 1,028 + 981 + 12,513 = EUR 17,908**

---

*Document created: December 2025*
*Companion to: Understanding Beta, WACC, and the Discount Rate*
*For use in Gebtron FZCO M&A analysis*
