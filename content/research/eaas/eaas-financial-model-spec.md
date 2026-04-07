# EAAS Financial Model - Excel Specification

**Document Version:** 2.0
**Date:** January 2026
**Purpose:** Detailed specification for building the EAAS financial model in Excel
**Template Reference:** R4VC_Template - Projected Financial Model.xlsx

---

## Overview

This document specifies the structure, formulas, and logic for a single-project EAAS financial model. Each Excel workbook represents **one country / one project**.

**File Naming Convention:** `EAAS_Model_[Country]_[Client]_[Date].xlsx`
**Example:** `EAAS_Model_Egypt_AlexandriaCement_Jan2026.xlsx`

---

## Workbook Structure (7 Sheets)

| Sheet Name | Type       | Visibility | Purpose                                                      |
|------------|------------|------------|--------------------------------------------------------------|
| Cover      | Cover      | Visible    | Cover image, about file, creator info, TOC, formatting key   |
| Inputs     | Input      | Visible    | 6 sections: Source, End User, Shared, Financing, Market, MC  |
| Model      | Model      | Visible    | 9 sections: All calculations, serves as Base scenario        |
| Outputs    | Output     | Visible    | 4 sections: Summary, Tornado, Scenario Comparison, MC Results|
| Reference  | Reference  | Visible    | Glossary, conventions, line item definitions, data sources   |
| Bear       | Scenario   | Hidden     | Copy of Model sheet with pessimistic inputs                  |
| Bull       | Scenario   | Hidden     | Copy of Model sheet with optimistic inputs                   |

**Total:** 7 sheets (5 visible + 2 hidden)

---

## Standard Column Structure

All calculation sections follow a consistent column layout based on the R4VC template:

| Column | A         | B         | C        | D      | E       | F      | G      | ... | U      |
|--------|-----------|-----------|----------|--------|---------|--------|--------|-----|--------|
| Use    | Line Item | Input 1   | Input 2  | Unit   | (blank) | Year 0 | Year 1 | ... | Year 15|
| Width  | 40        | 12        | 12       | 10     | 2       | 12     | 12     | ... | 12     |

**Column Assignments:**
- **Col A:** Line item descriptions/labels
- **Col B-C:** Input values (light blue cells) or empty for calculated rows
- **Col D:** Units (USD, %, tons, etc.)
- **Col E:** Spacer column (blank)
- **Col F-U:** Time periods (Year 0 through Year 15)

---

## Section Structure Pattern

Each section within a sheet follows this hierarchy:

```
┌─────────────────────────────────────────────────────────────┐
│  SECTION HEADER (Bold, merged cells, colored background)    │
├─────────────────────────────────────────────────────────────┤
│  Input Area                                                  │
│  - Static inputs (light blue cells in Col B-C)              │
│  - Reference values that don't vary by period               │
├─────────────────────────────────────────────────────────────┤
│  Calculation Tables                                          │
│  - Time-series calculations (formulas in Col F-U)           │
│  - Row-by-row calculations                                  │
│  - Sub-totals where needed                                  │
├─────────────────────────────────────────────────────────────┤
│  Section Summary (Light yellow background)                   │
│  - Key outputs from this section                            │
│  - These cells are referenced by other sections/sheets      │
└─────────────────────────────────────────────────────────────┘
```

---

## Formatting Key

| Element              | Format                                    |
|---------------------|-------------------------------------------|
| **Input Cell**      | Light Blue (#DEEBF7), unlocked            |
| **Calculated Cell** | White, locked                             |
| **Label/Description**| Light Gray (#F2F2F2)                     |
| **Section Header**  | Dark Blue (#1F4E79), White text, Bold     |
| **Sub-header**      | Medium Blue (#5B9BD5), White text         |
| **Summary Row**     | Light Yellow (#FFF2CC), Bold              |
| **Check Cell**      | Light Green (#E2EFDA), conditional format |
| **Error/Warning**   | Light Red (#FCE4D6)                       |
| **Negative Values** | Red text, parentheses                     |
| **Percentages**     | One decimal place (0.0%)                  |
| **Currency**        | Comma separator, no decimals for >1000   |

---

# SHEET 1: COVER

## Purpose
Professional cover page with document metadata, navigation, and formatting reference.

## Layout

### Row Ranges
| Section | Rows | Description |
|---------|------|-------------|
| Cover Image | 1-15 | Company logo / project image (merged area) |
| Document Title | 17-20 | Main title, subtitle |
| About Section | 22-35 | File info, creator, version history |
| Table of Contents | 37-55 | Links to all sheets and sections |
| Formatting Key | 57-75 | Color codes and conventions |

### Cover Image Area (Rows 1-15)
```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                      │
│                    [GEBTRON LOGO / PROJECT IMAGE]                   │
│                         (Merged cells A1:H15)                        │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Document Title (Rows 17-20)

| Row | Col A-H (Merged) |
|-----|------------------|
| 17 | **EAAS FINANCIAL MODEL** (36pt, Bold) |
| 18 | Energy-as-a-Service Project Analysis |
| 19 | [Project Name] - [Country] |
| 20 | Version X.X | [Date] |

### About Section (Rows 22-35)

| Row | Col A | Col B | Col C |
|-----|-------|-------|-------|
| 22 | **DOCUMENT INFORMATION** | | |
| 23 | | | |
| 24 | Project Name: | [Input] | |
| 25 | Country: | [Input] | |
| 26 | Client: | [Input] | |
| 27 | | | |
| 28 | Created By: | [Input] | |
| 29 | Creation Date: | [Input] | |
| 30 | Last Modified: | [Input] | |
| 31 | Version: | [Input] | |
| 32 | | | |
| 33 | **Version History** | | |
| 34 | v1.0 | [Date] | Initial release |
| 35 | v1.1 | [Date] | [Changes] |

### Table of Contents (Rows 37-55)

| Row | Col A | Col B | Col C |
|-----|-------|-------|-------|
| 37 | **TABLE OF CONTENTS** | | |
| 38 | | | |
| 39 | **Sheet** | **Section** | **Description** |
| 40 | Inputs | 1. Source Side | Waste facility CapEx/OpEx |
| 41 | | 2. End User Side | Cement factory CapEx/OpEx |
| 42 | | 3. Shared/Central | Transport, admin |
| 43 | | 4. Financing | Debt, equity, rates |
| 44 | | 5. Market | Contract, prices |
| 45 | | 6. Monte Carlo | Simulation parameters |
| 46 | Model | 1. TimeSeries | Periods, operating hours |
| 47 | | 2. Volume | RDF, MSW, coal volumes |
| 48 | | 3. CostBuildup | CapEx and OpEx buildup |
| 49 | | 4. ValueProp | Savings pool, rebate |
| 50 | | 5. P&L | Income statement |
| 51 | | 6. Balance Sheet | Assets, liabilities, equity |
| 52 | | 7. Cash Flow | Operating, investing, financing |
| 53 | | 8. Returns | IRR, NPV, payback |
| 54 | | 9. Sensitivity | Data tables, breakeven |
| 55 | Outputs | 1-4 | Summary, Tornado, Scenarios, MC |

### Formatting Key (Rows 57-75)

| Row | Col A | Col B | Col C |
|-----|-------|-------|-------|
| 57 | **FORMATTING KEY** | | |
| 58 | | | |
| 59 | [Sample Cell] | **Input Cell** | User enters value |
| 60 | [Sample Cell] | **Calculated** | Formula (do not edit) |
| 61 | [Sample Cell] | **Label** | Description text |
| 62 | [Sample Cell] | **Section Header** | Major section |
| 63 | [Sample Cell] | **Sub-header** | Sub-section |
| 64 | [Sample Cell] | **Summary/Output** | Key results |
| 65 | [Sample Cell] | **Check Cell** | Validation (should be 0 or TRUE) |
| 66 | [Sample Cell] | **Error/Warning** | Needs attention |

**Note:** Each sample cell should be formatted with the actual color from the Formatting Key table above.

---

# SHEET 2: INPUTS

## Purpose
Single sheet containing all user-entered assumptions organized into 6 sections.

## Layout Overview

| Section | Row Range | Description |
|---------|-----------|-------------|
| Header | 1-6 | Project identification |
| Section 1: Source Side | 8-40 | Waste facility inputs |
| Section 2: End User Side | 42-74 | Cement factory inputs |
| Section 3: Shared/Central | 76-100 | Transport, admin, contingency |
| Section 4: Financing | 102-135 | Debt, equity, rates |
| Section 5: Market | 137-175 | Contract, prices, escalation |
| Section 6: Monte Carlo | 177-210 | Simulation parameters |

## Header Section (Rows 1-6)

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 1 | **EAAS FINANCIAL MODEL - INPUTS** | | | |
| 2 | | | | |
| 3 | Project Name: | [Input] | | |
| 4 | Country: | [Input] | | |
| 5 | Client: | [Input] | | |
| 6 | Model Date: | =TODAY() | | |

## Section 1: Source Side Inputs (Rows 8-40)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  1. SOURCE SIDE (Waste Facility)                           [Section Header]     │
├─────────────────────────────────────────────────────────────────────────────────┤
│  INPUT AREA                                                                      │
├─────────────────────────────────────────────────────────────────────────────────┤
```

| Row | Col A (Label) | Col B (Input) | Col C (Input2) | Col D (Unit) |
|-----|---------------|---------------|----------------|--------------|
| 8 | **1. SOURCE SIDE (Waste Facility)** | | | |
| 9 | | | | |
| 10 | **Capital Expenditure** | | | |
| 11 | Equipment CapEx | 2,000,000 | | USD |
| 12 | Installation & Civil Works | 500,000 | | USD |
| 14 | | | | |
| 15 | **Capacity** | | | |
| 16 | Processing Capacity | 20 | | tons/hour |
| 17 | | | | |
| 18 | **Operating Costs** | | | |
| 19 | MSW Acquisition Cost | 10 | | USD/ton MSW |
| 20 | Processing Cost | 20 | | USD/ton RDF |
| 21 | | | | |
| 22 | **Staff** | | | |
| 23 | Staff Count | 25 | | people |
| 24 | Average Staff Cost | 12,000 | | USD/yr/person |
| 26 | | | | |
| 27 | **Other Costs** | | | |
| 28 | Insurance & Permits | 50,000 | | USD/year |
| 29 | Maintenance Rate | 3.0% | | % of CapEx/yr |
| 31 | | | | |
| 32 | **Depreciation** | | | |
| 33 | Useful Life | 15 | | years |

**Section 1 Summary (Rows 35-40)** - Yellow background

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 35 | **SECTION 1 SUMMARY** | | | |
| 36 | Total Source CapEx | =B11+B12 | | USD |
| 37 | Total Staff Cost | =B23*B24 | | USD/year |
| 38 | Annual Maintenance | =B29*B36 | | USD/year |
| 39 | Annual Depreciation | =B36/B33 | | USD/year |
| 40 | | | | |

**Named Ranges for Section 1:**
- `SRC_CapEx` → Inputs!B36
- `SRC_Capacity` → Inputs!B16
- `SRC_MSWCost` → Inputs!B19
- `SRC_ProcCost` → Inputs!B20
- `SRC_StaffCost` → Inputs!B37
- `SRC_Maintenance` → Inputs!B38
- `SRC_Depreciation` → Inputs!B39

---

## Section 2: End User Side Inputs (Rows 42-74)

| Row | Col A (Label) | Col B (Input) | Col C (Input2) | Col D (Unit) |
|-----|---------------|---------------|----------------|--------------|
| 42 | **2. END USER SIDE (Cement Factory)** | | | |
| 43 | | | | |
| 44 | **Capital Expenditure** | | | |
| 45 | Equipment CapEx | 1,500,000 | | USD |
| 46 | Installation & Civil Works | 500,000 | | USD |
| 48 | | | | |
| 49 | **Capacity** | | | |
| 50 | Feeding Capacity | 20 | | tons/hour |
| 51 | | | | |
| 52 | **Operating Costs** | | | |
| 53 | Operating Cost | 5 | | USD/ton RDF |
| 54 | | | | |
| 55 | **Staff** | | | |
| 56 | Staff Count | 8 | | people |
| 57 | Average Staff Cost | 15,000 | | USD/yr/person |
| 59 | | | | |
| 60 | **Other Costs** | | | |
| 61 | Insurance | 30,000 | | USD/year |
| 62 | Maintenance Rate | 3.0% | | % of CapEx/yr |
| 64 | | | | |
| 65 | **Depreciation** | | | |
| 66 | Useful Life | 15 | | years |

**Section 2 Summary (Rows 68-74)** - Yellow background

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 68 | **SECTION 2 SUMMARY** | | | |
| 69 | Total End User CapEx | =B45+B46 | | USD |
| 70 | Total Staff Cost | =B56*B57 | | USD/year |
| 71 | Annual Maintenance | =B62*B69 | | USD/year |
| 72 | Annual Depreciation | =B69/B66 | | USD/year |
| 74 | | | | |

**Named Ranges for Section 2:**
- `EU_CapEx` → Inputs!B69
- `EU_Capacity` → Inputs!B50
- `EU_OpCost` → Inputs!B53
- `EU_StaffCost` → Inputs!B70
- `EU_Maintenance` → Inputs!B71
- `EU_Depreciation` → Inputs!B72

---

## Section 3: Shared/Central Inputs (Rows 76-100)

| Row | Col A (Label) | Col B (Input) | Col C (Input2) | Col D (Unit) |
|-----|---------------|---------------|----------------|--------------|
| 76 | **3. SHARED / CENTRAL** | | | |
| 77 | | | | |
| 78 | **Transportation** | | | |
| 79 | Distance (Source to Factory) | 50 | | km |
| 80 | Transport Cost | 0.08 | | USD/ton/km |
| 82 | | | | |
| 83 | **Administration** | | | |
| 84 | Admin Overhead | 100,000 | | USD/year |
| 86 | | | | |
| 87 | **Contingency** | | | |
| 88 | CapEx Contingency | 10% | | % of CapEx |

**Section 3 Summary (Rows 92-100)** - Yellow background

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 92 | **SECTION 3 SUMMARY** | | | |
| 93 | Gross CapEx | =SRC_CapEx+EU_CapEx | | USD |
| 94 | Contingency Amount | =B93*B88 | | USD |
| 95 | **Total CapEx** | =B93+B94 | | USD |
| 96 | Transport Cost/ton | =B79*B80 | | USD/ton |
| 100 | | | | |

**Named Ranges for Section 3:**
- `TOTAL_CapEx` → Inputs!B95
- `Distance` → Inputs!B79
- `TransportRate` → Inputs!B80
- `AdminCost` → Inputs!B84

---

## Section 4: Financing Inputs (Rows 102-135)

| Row | Col A (Label) | Col B (Input) | Col C (Input2) | Col D (Unit) |
|-----|---------------|---------------|----------------|--------------|
| 102 | **4. FINANCING** | | | |
| 103 | | | | |
| 104 | **Capital Structure** | | | |
| 105 | Debt Ratio | 70% | | % |
| 107 | | | | |
| 108 | **Debt Terms** | | | |
| 109 | Interest Rate | 10.0% | | % p.a. |
| 110 | Loan Term | 10 | | years |
| 112 | | | | |
| 113 | **Discount Rates** | | | |
| 114 | Cost of Equity | 15.0% | | % |
| 116 | | | | |
| 117 | **Tax** | | | |
| 118 | Corporate Tax Rate | 0% | | % |
| 120 | | | | |
| 121 | **Target Returns** | | | |
| 122 | Target Equity IRR | 15.0% | | % |
| 123 | Target Project IRR | 12.0% | | % |

**Section 4 Summary (Rows 127-135)** - Yellow background

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 127 | **SECTION 4 SUMMARY** | | | |
| 128 | Equity Ratio | =1-B105 | | % |
| 129 | Total Debt | =TOTAL_CapEx*B105 | | USD |
| 130 | Total Equity | =TOTAL_CapEx*B128 | | USD |
| 131 | WACC | =B105*B109*(1-B118)+B128*B114 | | % |
| 135 | | | | |

**Named Ranges for Section 4:**
- `DebtRatio` → Inputs!B105
- `EquityRatio` → Inputs!B128
- `InterestRate` → Inputs!B109
- `LoanTerm` → Inputs!B110
- `CostOfEquity` → Inputs!B114
- `TaxRate` → Inputs!B118
- `WACC` → Inputs!B131
- `TotalDebt` → Inputs!B129
- `TotalEquity` → Inputs!B130

---

## Section 5: Market Inputs (Rows 137-175)

| Row | Col A (Label) | Col B (Input) | Col C (Input2) | Col D (Unit) |
|-----|---------------|---------------|----------------|--------------|
| 137 | **5. MARKET ASSUMPTIONS** | | | |
| 138 | | | | |
| 139 | **Contract Terms** | | | |
| 140 | Contract Duration | 15 | | years |
| 141 | Operating Hours per Year | 8,000 | | hours |
| 143 | | | | |
| 144 | **Energy Parameters** | | | |
| 145 | RDF:Coal Energy Ratio | 2.0 | | tons RDF/ton coal |
| 146 | MSW:RDF Conversion Ratio | 5.0 | | tons MSW/ton RDF |
| 147 | TSR Target | 50% | | % |
| 149 | | | | |
| 150 | **Fuel Prices** | | | |
| 151 | Coal Price (Year 1) | 100 | | USD/ton |
| 152 | Coal Price Escalation | 2.0% | | % per year |
| 154 | | | | |
| 155 | **Client Current Costs** | | | |
| 156 | Client Annual Fuel Spend | 6,000,000 | | USD/year |
| 158 | | | | |
| 159 | **Value Split** | | | |
| 160 | Client Rebate Percentage | 33% | | % of savings |
| 162 | | | | |
| 163 | **Cost Escalation** | | | |
| 164 | General Inflation | 2.0% | | % per year |
| 165 | Staff Cost Escalation | 3.0% | | % per year |
| 167 | | | | |
| 168 | **Currency** | | | |
| 169 | Model Currency | USD | | |
| 170 | Local Currency | EGP | | |
| 171 | FX Rate (Local/USD) | 50 | | EGP/USD |

**Section 5 Summary (Rows 173-175)** - Yellow background

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 173 | **SECTION 5 SUMMARY** | | | |
| 174 | Gebtron Share % | =1-B160 | | % |
| 175 | | | | |

**Named Ranges for Section 5:**
- `ContractYears` → Inputs!B140
- `OpHours` → Inputs!B141
- `RDF_Coal_Ratio` → Inputs!B145
- `MSW_RDF_Ratio` → Inputs!B146
- `TSR` → Inputs!B147
- `CoalPrice` → Inputs!B151
- `CoalEscalation` → Inputs!B152
- `ClientFuelSpend` → Inputs!B156
- `ClientRebate` → Inputs!B160
- `GebtronShare` → Inputs!B174
- `Inflation` → Inputs!B164
- `StaffInflation` → Inputs!B165

---

## Section 6: Monte Carlo Parameters (Rows 177-210)

| Row | Col A (Label) | Col B (Input) | Col C (Input2) | Col D (Unit) |
|-----|---------------|---------------|----------------|--------------|
| 177 | **6. MONTE CARLO PARAMETERS** | | | |
| 178 | | | | |
| 179 | **Simulation Settings** | | | |
| 180 | Number of Iterations | 10,000 | | runs |
| 182 | | | | |
| 183 | **Stochastic Variables** | Distribution | Min/Mean | Max/StdDev |
| 184 | Coal Price | Normal | 100 | 25 |
| 185 | MSW Acquisition Cost | Uniform | 5 | 25 |
| 186 | Processing Cost | Triangular | 15 | 35 |
| 187 | Operating Hours | Triangular | 6,500 | 8,500 |
| 188 | TSR Achieved | Normal | 50% | 5% |
| 190 | | | | |
| 191 | **Distribution Key** | | | |
| 192 | Normal: | Mean in Col B | StdDev in Col C | |
| 193 | Uniform: | Min in Col B | Max in Col C | |
| 194 | Triangular: | Min in Col B | Max in Col C | Mode = Input |

**Section 6 Summary (Rows 198-210)** - Yellow background

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 198 | **SECTION 6 SUMMARY** | | | |
| 199 | MC Iterations | =B180 | | runs |
| 200 | Variables Count | 5 | | |
| 210 | | | | |

**Named Ranges for Section 6:**
- `MC_Iterations` → Inputs!B180
- `MC_CoalPrice_Mean` → Inputs!B184
- `MC_CoalPrice_StdDev` → Inputs!C184
- `MC_MSW_Min` → Inputs!B185
- `MC_MSW_Max` → Inputs!C185
- `MC_Proc_Min` → Inputs!B186
- `MC_Proc_Max` → Inputs!C186
- `MC_Hours_Min` → Inputs!B187
- `MC_Hours_Max` → Inputs!C187
- `MC_TSR_Mean` → Inputs!B188
- `MC_TSR_StdDev` → Inputs!C188

---

# SHEET 3: MODEL

## Purpose
Single calculation sheet containing all 9 sections. This sheet serves as the **Base case scenario**. Bear and Bull scenarios are copies of this sheet with different input values.

## Layout Overview

| Section | Row Range | Description |
|---------|-----------|-------------|
| 1. TimeSeries | 1-30 | Time periods, operating hours, flags |
| 2. Volume | 35-75 | RDF, MSW, coal volumes |
| 3. CostBuildup | 80-160 | CapEx and OpEx buildup |
| 4. ValueProp | 165-215 | Savings pool, rebate, revenue |
| 5. P&L | 220-280 | Income statement |
| 6. Balance Sheet | 285-375 | Assets, liabilities, equity, debt schedule |
| 7. Cash Flow | 380-445 | Operating, investing, financing |
| 8. Returns | 450-530 | IRR, NPV, payback, metrics |
| 9. Sensitivity | 535-650 | Tornado data, 2-way tables, breakeven |

## Standard Time-Series Column Layout

All sections use this column structure for time-series calculations:

| Col A | Col B | Col C | Col D | Col E | Col F | Col G | ... | Col U |
|-------|-------|-------|-------|-------|-------|-------|-----|-------|
| Line Item | Input 1 | Input 2 | Unit | (spacer) | Year 0 | Year 1 | ... | Year 15 |

---

## Section 1: TimeSeries (Rows 1-30)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  1. TIME SERIES                                            [Section Header]     │
├─────────────────────────────────────────────────────────────────────────────────┤
```

**Input Area (Rows 3-8)**

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 3 | Model Start Year | =YEAR(TODAY()) | | year |
| 4 | Contract Length | =ContractYears | | years |

**Calculation Table (Rows 10-25)**

| Row | Col A | Col F | Col G | Col H | ... | Col U |
|-----|-------|-------|-------|-------|-----|-------|
| 10 | **Period** | Year 0 | Year 1 | Year 2 | ... | Year 15 |
| 11 | Period Number | 0 | 1 | 2 | ... | 15 |
| 12 | Calendar Year | =B3 | =F12+1 | =G12+1 | ... | =T12+1 |
| 13 | | | | | | |
| 14 | **Operating Time** | | | | | |
| 15 | Operating Hours | 0 | =OpHours | =OpHours | ... | =OpHours |
| 16 | Operating Days | 0 | =G15/24 | =H15/24 | ... | =U15/24 |
| 17 | | | | | | |
| 18 | **Period Flags** | | | | | |
| 19 | Is Operating Period | 0 | 1 | 1 | ... | 1 |
| 20 | Is Construction Period | 1 | 0 | 0 | ... | 0 |
| 21 | Is Debt Service Period | 0 | =IF(G11<=LoanTerm,1,0) | ... | ... | =IF(U11<=LoanTerm,1,0) |

**Section 1 Summary (Rows 27-30)** - Yellow background

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 27 | **SECTION 1 SUMMARY** | | | |
| 28 | Total Operating Years | =ContractYears | | years |
| 29 | Total Operating Hours | =SUM(G15:U15) | | hours |
| 30 | | | | |

---

## Section 2: Volume (Rows 35-75)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  2. VOLUME CALCULATIONS                                    [Section Header]     │
├─────────────────────────────────────────────────────────────────────────────────┤
```

**Input Area (Rows 37-42)** - References from Inputs sheet

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 37 | RDF Capacity | =SRC_Capacity | | tons/hr |
| 38 | MSW:RDF Ratio | =MSW_RDF_Ratio | | |
| 39 | RDF:Coal Ratio | =RDF_Coal_Ratio | | |
| 40 | Distance | =Distance | | km |

**Calculation Table (Rows 45-65)**

| Row | Col A | Col F | Col G | Col H | ... | Col U |
|-----|-------|-------|-------|-------|-----|-------|
| 45 | **Period** | Year 0 | Year 1 | Year 2 | ... | Year 15 |
| 46 | | | | | | |
| 47 | **RDF Production** | | | | | |
| 48 | Capacity (tons/hour) | | =B37 | =B37 | ... | =B37 |
| 49 | Operating Hours | | =G15 | =H15 | ... | =U15 |
| 50 | **Annual RDF Volume** | 0 | =G48*G49 | =H48*H49 | ... | =U48*U49 |
| 51 | | | | | | |
| 52 | **MSW Required** | | | | | |
| 53 | **Annual MSW Volume** | 0 | =G50*B38 | =H50*B38 | ... | =U50*B38 |
| 54 | | | | | | |
| 55 | **Coal Replacement** | | | | | |
| 56 | **Coal Replaced (tons)** | 0 | =G50/B39 | =H50/B39 | ... | =U50/B39 |
| 57 | | | | | | |
| 58 | **Transportation** | | | | | |
| 59 | **Ton-km (annual)** | 0 | =G50*B40 | =H50*B40 | ... | =U50*B40 |

**Section 2 Summary (Rows 68-75)** - Yellow background

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 68 | **SECTION 2 SUMMARY** | | | |
| 69 | Total RDF (15 years) | =SUM(F50:U50) | | tons |
| 70 | Total MSW (15 years) | =SUM(F53:U53) | | tons |
| 71 | Total Coal Replaced | =SUM(F56:U56) | | tons |
| 72 | Avg Annual RDF | =AVERAGE(G50:U50) | | tons/yr |
| 75 | | | | |

---

## Section 3: CostBuildup (Rows 80-160)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  3. COST BUILDUP                                           [Section Header]     │
├─────────────────────────────────────────────────────────────────────────────────┤
```

**Input Area (Rows 82-90)** - References from Inputs sheet

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 82 | Source CapEx | =SRC_CapEx | | USD |
| 83 | End User CapEx | =EU_CapEx | | USD |
| 84 | Total CapEx | =TOTAL_CapEx | | USD |
| 85 | | | | |
| 86 | General Inflation | =Inflation | | % |
| 87 | Staff Inflation | =StaffInflation | | % |

**Calculation Table (Rows 92-150)**

| Row | Col A | Col F | Col G | Col H | ... | Col U |
|-----|-------|-------|-------|-------|-----|-------|
| 92 | **Period** | Year 0 | Year 1 | Year 2 | ... | Year 15 |
| 93 | Escalation (General) | 1.000 | 1.000 | =G93*(1+B86) | ... | =T93*(1+B86) |
| 94 | Escalation (Staff) | 1.000 | 1.000 | =G94*(1+B87) | ... | =T94*(1+B87) |
| 95 | | | | | | |
| 96 | **=== CAPITAL EXPENDITURE ===** | | | | | |
| 98 | **Source Side CapEx** | | | | | |
| 99 | Equipment | =SRC_CapEx | 0 | 0 | ... | 0 |
| 100 | **Total Source CapEx** | =F99 | 0 | 0 | ... | 0 |
| 102 | **End User Side CapEx** | | | | | |
| 103 | Equipment | =EU_CapEx | 0 | 0 | ... | 0 |
| 104 | **Total End User CapEx** | =F103 | 0 | 0 | ... | 0 |
| 106 | **Total CapEx** | | | | | |
| 107 | Gross CapEx | =F100+F104 | 0 | 0 | ... | 0 |
| 108 | Contingency | =F107*0.1 | 0 | 0 | ... | 0 |
| 109 | **Total CapEx** | =F107+F108 | 0 | 0 | ... | 0 |
| 111 | | | | | | |
| 112 | **=== OPERATING EXPENDITURE ===** | | | | | |
| 114 | **Source Side OpEx** | | | | | |
| 115 | MSW Acquisition | 0 | =G53*SRC_MSWCost*G93 | ... | ... | |
| 116 | Processing Cost | 0 | =G50*SRC_ProcCost*G93 | ... | ... | |
| 117 | Staff Cost | 0 | =SRC_StaffCost*G94 | ... | ... | |
| 118 | Insurance & Permits | 0 | =Inputs!B28*G93 | ... | ... | |
| 119 | Maintenance | 0 | =SRC_Maintenance*G93 | ... | ... | |
| 120 | **Total Source OpEx** | 0 | =SUM(G115:G119) | ... | ... | |
| 122 | **End User Side OpEx** | | | | | |
| 123 | Operating Cost | 0 | =G50*EU_OpCost*G93 | ... | ... | |
| 124 | Staff Cost | 0 | =EU_StaffCost*G94 | ... | ... | |
| 125 | Insurance | 0 | =Inputs!B61*G93 | ... | ... | |
| 126 | Maintenance | 0 | =EU_Maintenance*G93 | ... | ... | |
| 127 | **Total End User OpEx** | 0 | =SUM(G123:G126) | ... | ... | |
| 129 | **Shared OpEx** | | | | | |
| 130 | Transportation | 0 | =G59*TransportRate*G93 | ... | ... | |
| 131 | Admin Overhead | 0 | =AdminCost*G93 | ... | ... | |
| 132 | **Total Shared OpEx** | 0 | =G130+G131 | ... | ... | |
| 134 | **=== TOTAL COSTS ===** | | | | | |
| 135 | **Total OpEx** | 0 | =G120+G127+G132 | ... | ... | |
| 136 | **Total CapEx + OpEx** | =F109 | =G135 | ... | ... | |

**Section 3 Summary (Rows 150-160)** - Yellow background

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 150 | **SECTION 3 SUMMARY** | | | |
| 151 | Total CapEx | =F109 | | USD |
| 152 | Total OpEx (15 yrs) | =SUM(G135:U135) | | USD |
| 153 | Avg Annual OpEx | =AVERAGE(G135:U135) | | USD/yr |
| 160 | | | | |

---

## Section 4: ValueProp (Rows 165-215)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  4. VALUE PROPOSITION                                      [Section Header]     │
├─────────────────────────────────────────────────────────────────────────────────┤
```

**Input Area (Rows 167-175)**

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 167 | Client Annual Fuel Spend | =ClientFuelSpend | | USD/yr |
| 168 | Coal Price (Yr 1) | =CoalPrice | | USD/ton |
| 169 | Coal Price Escalation | =CoalEscalation | | % |
| 170 | Client Rebate % | =ClientRebate | | % |
| 171 | Gebtron Share % | =GebtronShare | | % |

**Calculation Table (Rows 178-205)**

| Row | Col A | Col F | Col G | Col H | ... | Col U |
|-----|-------|-------|-------|-------|-----|-------|
| 178 | **Period** | Year 0 | Year 1 | Year 2 | ... | Year 15 |
| 179 | | | | | | |
| 180 | **Client's Current Fuel Cost** | | | | | |
| 181 | Base Fuel Cost | | =B167 | | | |
| 182 | **Client Fuel Cost (escalated)** | 0 | =G181 | =G182*(1+B169) | ... | |
| 183 | | | | | | |
| 184 | **RDF Alternative Cost** | | | | | |
| 185 | Coal Replaced (tons) | | =G56 | =H56 | ... | |
| 186 | Coal Price (escalated) | | =B168 | =G186*(1+B169) | ... | |
| 187 | Coal Cost Equivalent | | =G185*G186 | =H185*H186 | ... | |
| 188 | RDF Volume (tons) | | =G50 | =H50 | ... | |
| 189 | RDF Cost per ton | | =G186/RDF_Coal_Ratio*0.5 | ... | ... | |
| 190 | **RDF Cost Total** | 0 | =G188*G189 | =H188*H189 | ... | |
| 191 | | | | | | |
| 192 | **Savings Calculation** | | | | | |
| 193 | Client Current Cost | | =G182 | =H182 | ... | |
| 194 | RDF Alternative Cost | | =G190 | =H190 | ... | |
| 195 | **Total Savings Pool** | 0 | =G193-G194 | =H193-H194 | ... | |
| 196 | | | | | | |
| 197 | **Value Split** | | | | | |
| 198 | **Client Rebate** | 0 | =G195*B170 | =H195*B170 | ... | |
| 199 | **Gebtron Revenue** | 0 | =G195*B171 | =H195*B171 | ... | |

**Section 4 Summary (Rows 208-215)** - Yellow background

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 208 | **SECTION 4 SUMMARY** | | | |
| 209 | Total Savings Pool (15 yrs) | =SUM(F195:U195) | | USD |
| 210 | Total Client Rebate | =SUM(F198:U198) | | USD |
| 211 | Total Gebtron Revenue | =SUM(F199:U199) | | USD |
| 212 | Avg Annual Revenue | =AVERAGE(G199:U199) | | USD/yr |
| 215 | | | | |

---

## Section 5: P&L (Rows 220-280)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  5. INCOME STATEMENT                                       [Section Header]     │
├─────────────────────────────────────────────────────────────────────────────────┤
```

**Calculation Table (Rows 222-270)**

| Row | Col A | Col F | Col G | Col H | ... | Col U |
|-----|-------|-------|-------|-------|-----|-------|
| 222 | **Period** | Year 0 | Year 1 | Year 2 | ... | Year 15 |
| 223 | | | | | | |
| 224 | **Revenue** | | | | | |
| 225 | Gebtron Share of Savings | 0 | =G199 | =H199 | ... | |
| 226 | Other Revenue | 0 | 0 | 0 | ... | 0 |
| 227 | **Total Revenue** | 0 | =G225+G226 | =H225+H226 | ... | |
| 228 | | | | | | |
| 229 | **Operating Expenses** | | | | | |
| 230 | Source Side OpEx | 0 | =G120 | =H120 | ... | |
| 231 | End User Side OpEx | 0 | =G127 | =H127 | ... | |
| 232 | Shared OpEx | 0 | =G132 | =H132 | ... | |
| 233 | **Total Operating Expenses** | 0 | =SUM(G230:G232) | ... | ... | |
| 234 | | | | | | |
| 235 | **EBITDA** | 0 | =G227-G233 | =H227-H233 | ... | |
| 236 | | | | | | |
| 237 | **Depreciation** | | | | | |
| 238 | Source Depreciation | 0 | =SRC_Depreciation | ... | ... | |
| 239 | End User Depreciation | 0 | =EU_Depreciation | ... | ... | |
| 240 | **Total D&A** | 0 | =G238+G239 | =H238+H239 | ... | |
| 241 | | | | | | |
| 242 | **EBIT (Operating Profit)** | 0 | =G235-G240 | =H235-H240 | ... | |
| 243 | | | | | | |
| 244 | **Interest Expense** | 0 | =G330 | =H330 | ... | |
| 245 | | | | | | |
| 246 | **EBT (Profit Before Tax)** | 0 | =G242-G244 | =H242-H244 | ... | |
| 247 | | | | | | |
| 248 | **Tax** | 0 | =MAX(0,G246*TaxRate) | ... | ... | |
| 249 | | | | | | |
| 250 | **Net Income** | 0 | =G246-G248 | =H246-H248 | ... | |
| 252 | **Margins** | | | | | |
| 253 | EBITDA Margin | | =G235/G227 | =H235/H227 | ... | |
| 254 | Net Income Margin | | =G250/G227 | =H250/H227 | ... | |

**Section 5 Summary (Rows 270-280)** - Yellow background

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 270 | **SECTION 5 SUMMARY** | | | |
| 271 | Total Revenue (15 yrs) | =SUM(F227:U227) | | USD |
| 272 | Total EBITDA (15 yrs) | =SUM(F235:U235) | | USD |
| 273 | Total Net Income (15 yrs) | =SUM(F250:U250) | | USD |
| 274 | Avg EBITDA Margin | =AVERAGE(G253:U253) | | % |
| 280 | | | | |

---

## Section 6: Balance Sheet (Rows 285-375)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  6. BALANCE SHEET                                          [Section Header]     │
├─────────────────────────────────────────────────────────────────────────────────┤
```

**Calculation Table (Rows 287-360)**

| Row | Col A | Col F | Col G | Col H | ... | Col U |
|-----|-------|-------|-------|-------|-----|-------|
| 287 | **Period** | Year 0 | Year 1 | Year 2 | ... | Year 15 |
| 288 | | | | | | |
| 289 | **ASSETS** | | | | | |
| 290 | **Non-Current Assets** | | | | | |
| 291 | Source Equipment (Gross) | =SRC_CapEx | =F291 | =G291 | ... | |
| 292 | Less: Accum Depreciation | 0 | =F292+SRC_Depreciation | ... | ... | |
| 293 | Source Equipment (Net) | =F291-F292 | =G291-G292 | ... | ... | |
| 295 | End User Equipment (Gross) | =EU_CapEx | =F295 | =G295 | ... | |
| 296 | Less: Accum Depreciation | 0 | =F296+EU_Depreciation | ... | ... | |
| 297 | End User Equipment (Net) | =F295-F296 | =G295-G296 | ... | ... | |
| 299 | **Total Non-Current Assets** | =F293+F297 | =G293+G297 | ... | ... | |
| 301 | **Current Assets** | | | | | |
| 302 | Cash | 0 | =F302+G415 | =G302+H415 | ... | |
| 303 | Accounts Receivable | 0 | 0 | 0 | ... | 0 |
| 304 | **Total Current Assets** | =F302+F303 | =G302+G303 | ... | ... | |
| 306 | **TOTAL ASSETS** | =F299+F304 | =G299+G304 | ... | ... | |
| 308 | **LIABILITIES** | | | | | |
| 309 | **Non-Current Liabilities** | | | | | |
| 310 | Long-term Debt | =TotalDebt | =G334 | =H334 | ... | |
| 311 | Less: Current Portion | 0 | =H331 | =I331 | ... | |
| 312 | **Long-term Debt (Net)** | =F310-F311 | =G310-G311 | ... | ... | |
| 314 | **Current Liabilities** | | | | | |
| 315 | Current Portion of Debt | =G311 | =H311 | =I311 | ... | |
| 316 | Accounts Payable | 0 | 0 | 0 | ... | 0 |
| 317 | **Total Current Liabilities** | =F315+F316 | =G315+G316 | ... | ... | |
| 319 | **TOTAL LIABILITIES** | =F312+F317 | =G312+G317 | ... | ... | |
| 321 | **EQUITY** | | | | | |
| 322 | Paid-in Capital | =TotalEquity | =F322 | =G322 | ... | |
| 323 | Retained Earnings | 0 | =F323+G250 | =G323+H250 | ... | |
| 324 | **Total Equity** | =F322+F323 | =G322+G323 | ... | ... | |
| 326 | **TOTAL LIABILITIES + EQUITY** | =F319+F324 | =G319+G324 | ... | ... | |
| 328 | **Balance Check** | =F306-F326 | =G306-G326 | ... | ... | Should be 0 |
| 330 | | | | | | |
| 331 | **=== DEBT SCHEDULE ===** | | | | | |
| 332 | Opening Balance | 0 | =TotalDebt | =G334 | ... | |
| 333 | Drawdown | =TotalDebt | 0 | 0 | ... | 0 |
| 334 | Interest Expense | 0 | =G332*InterestRate | =H332*InterestRate | ... | |
| 335 | Principal Repayment | 0 | =IF(G11<=LoanTerm,PMT(InterestRate,LoanTerm,-TotalDebt)-G334,0) | ... | |
| 336 | **Closing Balance** | =F332+F333-F335 | =G332-G335 | =H332-H335 | ... | |
| 338 | Total Debt Service | 0 | =G334+G335 | =H334+H335 | ... | |
| 339 | DSCR | | =G235/G338 | =H235/H338 | ... | |

**Section 6 Summary (Rows 365-375)** - Yellow background

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 365 | **SECTION 6 SUMMARY** | | | |
| 366 | Total Debt Drawn | =TotalDebt | | USD |
| 367 | Total Interest Paid | =SUM(G334:U334) | | USD |
| 368 | Total Principal Repaid | =SUM(G335:U335) | | USD |
| 369 | Min DSCR | =MIN(G339:P339) | | x |
| 370 | Avg DSCR | =AVERAGE(G339:P339) | | x |
| 375 | | | | |

---

## Section 7: Cash Flow (Rows 380-445)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  7. CASH FLOW STATEMENT                                    [Section Header]     │
├─────────────────────────────────────────────────────────────────────────────────┤
```

**Calculation Table (Rows 382-435)**

| Row | Col A | Col F | Col G | Col H | ... | Col U |
|-----|-------|-------|-------|-------|-----|-------|
| 382 | **Period** | Year 0 | Year 1 | Year 2 | ... | Year 15 |
| 383 | | | | | | |
| 384 | **OPERATING ACTIVITIES** | | | | | |
| 385 | Net Income | 0 | =G250 | =H250 | ... | |
| 386 | Add: Depreciation | 0 | =G240 | =H240 | ... | |
| 387 | Change in Working Capital | 0 | 0 | 0 | ... | 0 |
| 388 | **Cash from Operations** | =SUM(F385:F387) | =SUM(G385:G387) | ... | ... | |
| 390 | **INVESTING ACTIVITIES** | | | | | |
| 391 | Source CapEx | =-F100 | 0 | 0 | ... | 0 |
| 392 | End User CapEx | =-F104 | 0 | 0 | ... | 0 |
| 393 | Contingency | =-F108 | 0 | 0 | ... | 0 |
| 394 | **Cash from Investing** | =SUM(F391:F393) | =SUM(G391:G393) | ... | ... | |
| 396 | **FINANCING ACTIVITIES** | | | | | |
| 397 | Equity Contribution | =TotalEquity | 0 | 0 | ... | 0 |
| 398 | Debt Drawdown | =TotalDebt | 0 | 0 | ... | 0 |
| 399 | Debt Repayment (Principal) | 0 | =-G335 | =-H335 | ... | |
| 400 | Dividends / Distributions | 0 | =-G385 | =-H385 | ... | 100% dist |
| 401 | **Cash from Financing** | =SUM(F397:F400) | =SUM(G397:G400) | ... | ... | |
| 403 | **NET CASH FLOW** | =F388+F394+F401 | =G388+G394+G401 | ... | ... | |
| 405 | Opening Cash | 0 | =F406 | =G406 | ... | |
| 406 | **Closing Cash** | =F405+F403 | =G405+G403 | =H405+H403 | ... | |
| 408 | | | | | | |
| 409 | **=== CASH FLOWS FOR RETURNS ===** | | | | | |
| 410 | **Unlevered Cash Flow** | | | | | |
| 411 | (For Project IRR) | =F394 | =G388+G394 | =H388+H394 | ... | |
| 413 | **Levered Cash Flow** | | | | | |
| 414 | (For Equity IRR) | =-TotalEquity | =G388+G399 | =H388+H399 | ... | |

**Section 7 Summary (Rows 438-445)** - Yellow background

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 438 | **SECTION 7 SUMMARY** | | | |
| 439 | Total Equity Invested | =TotalEquity | | USD |
| 440 | Total Cash Distributed | =SUM(G400:U400)*-1 | | USD |
| 441 | Total Unlevered CF | =SUM(F411:U411) | | USD |
| 442 | Total Levered CF | =SUM(F414:U414) | | USD |
| 445 | | | | |

---

## Section 8: Returns (Rows 450-530)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  8. RETURNS ANALYSIS                                       [Section Header]     │
├─────────────────────────────────────────────────────────────────────────────────┤
```

**Calculation Table (Rows 452-520)**

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 452 | **=== PROJECT RETURNS (UNLEVERED) ===** | | | |
| 454 | **Project IRR** | =IRR(F411:U411) | | % |
| 455 | **Project NPV (@ WACC)** | =NPV(WACC,G411:U411)+F411 | | USD |
| 457 | | | | |
| 458 | **=== EQUITY RETURNS (LEVERED) ===** | | | |
| 460 | **Equity IRR** | =IRR(F414:U414) | | % |
| 461 | **Equity NPV (@ CoE)** | =NPV(CostOfEquity,G414:U414)+F414 | | USD |
| 463 | | | | |
| 464 | **=== PAYBACK ANALYSIS ===** | | | |
| 466 | **Simple Payback** | [Helper row formula] | | years |
| 467 | **Discounted Payback** | [Helper row formula] | | years |
| 469 | | | | |
| 470 | **=== OTHER METRICS ===** | | | |
| 472 | **MOIC** | =SUM(G414:U414)/(-F414) | | x |
| 473 | **Total Distributions** | =SUM(G414:U414) | | USD |
| 474 | **Minimum DSCR** | =B369 | | x |
| 475 | **Average DSCR** | =B370 | | x |

**Section 8 Summary (Rows 490-530)** - Yellow background

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 490 | **SECTION 8 SUMMARY** | Value | Target | Pass? |
| 491 | Project IRR | =B454 | =Inputs!B123 | =IF(B491>=C491,"PASS","FAIL") |
| 492 | Equity IRR | =B460 | =Inputs!B122 | =IF(B492>=C492,"PASS","FAIL") |
| 493 | Project NPV | =B455 | >0 | =IF(B493>0,"PASS","FAIL") |
| 494 | Equity NPV | =B461 | >0 | =IF(B494>0,"PASS","FAIL") |
| 495 | Simple Payback | =B466 | <5 yrs | =IF(B495<5,"PASS","FAIL") |
| 496 | Min DSCR | =B474 | >1.2x | =IF(B496>1.2,"PASS","FAIL") |
| 498 | | | | |
| 500 | **=== MAX REBATE ANALYSIS ===** | | | |
| 502 | Current Rebate % | =ClientRebate | | % |
| 503 | Current Equity IRR | =B460 | | % |
| 504 | Target Equity IRR | =Inputs!B122 | | % |
| 506 | **Max Rebate % (at Target)** | [Goal Seek] | | % |
| 530 | | | | |

---

## Section 9: Sensitivity (Rows 535-650)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  9. SENSITIVITY ANALYSIS                                   [Section Header]     │
├─────────────────────────────────────────────────────────────────────────────────┤
```

**Single Variable Sensitivity (Tornado Data) - Rows 537-560**

| Row | Col A | Col B | Col C | Col D | Col E | Col F | Col G | Col H |
|-----|-------|-------|-------|-------|-------|-------|-------|-------|
| 537 | **Single Variable Sensitivity** | | | | | | | |
| 538 | Base Case Equity IRR | =B460 | | | | | | |
| 540 | Variable | -30% | -20% | -10% | Base | +10% | +20% | +30% |
| 541 | Coal Price | [dt] | [dt] | [dt] | =C538 | [dt] | [dt] | [dt] |
| 542 | Distance | [dt] | [dt] | [dt] | =C538 | [dt] | [dt] | [dt] |
| 543 | MSW Cost | [dt] | [dt] | [dt] | =C538 | [dt] | [dt] | [dt] |
| 544 | Processing Cost | [dt] | [dt] | [dt] | =C538 | [dt] | [dt] | [dt] |
| 545 | Operating Hours | [dt] | [dt] | [dt] | =C538 | [dt] | [dt] | [dt] |
| 546 | Interest Rate | [dt] | [dt] | [dt] | =C538 | [dt] | [dt] | [dt] |

**Two-Variable Sensitivity (Matrix) - Rows 565-600**

| Row | Col A | Col B | Col C | Col D | Col E | Col F |
|-----|-------|-------|-------|-------|-------|-------|
| 565 | **Coal Price vs Distance** | | | | | |
| 566 | Equity IRR | Distance | | | | |
| 567 | Coal Price | 30 km | 50 km | 70 km | 100 km | 150 km |
| 568 | $70 | [dt] | [dt] | [dt] | [dt] | [dt] |
| 569 | $85 | [dt] | [dt] | [dt] | [dt] | [dt] |
| 570 | $100 | [dt] | [dt] | [dt] | [dt] | [dt] |
| 571 | $115 | [dt] | [dt] | [dt] | [dt] | [dt] |
| 572 | $130 | [dt] | [dt] | [dt] | [dt] | [dt] |

**Break-Even Analysis - Rows 610-640**

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 610 | **Break-Even Values** | | | |
| 611 | (IRR = Target) | Current | Break-Even | |
| 612 | Coal Price | =CoalPrice | [Goal Seek] | USD/ton |
| 613 | Distance | =Distance | [Goal Seek] | km |
| 614 | MSW Cost | =SRC_MSWCost | [Goal Seek] | USD/ton |
| 615 | Rebate % | =ClientRebate | [Goal Seek] | % |

**Section 9 Summary (Rows 645-650)** - Yellow background

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 645 | **SECTION 9 SUMMARY** | | | |
| 646 | Most Sensitive Variable | [Manual] | | |
| 647 | IRR Range (Low-High) | [Formula] | | % |
| 650 | | | | |

**Note:** Use Excel Data Tables (What-If Analysis → Data Table) for sensitivity calculations. `[dt]` indicates data table formula cell.

---

# SHEET 4: OUTPUTS

## Purpose
Single output sheet containing 4 sections for presenting key results, sensitivity analysis, scenario comparisons, and Monte Carlo results.

## Layout Overview

| Section | Row Range | Description |
|---------|-----------|-------------|
| 1. 15-Year Summary | 1-60 | Key metrics by year + totals |
| 2. Tornado Data | 65-120 | Sensitivity analysis for charts |
| 3. Scenario Comparison | 125-185 | Base vs Bear vs Bull |
| 4. Monte Carlo Results | 190-300 | Simulation statistics and raw data |

---

## Section 1: 15-Year Summary (Rows 1-60)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  1. 15-YEAR FINANCIAL SUMMARY                              [Section Header]     │
├─────────────────────────────────────────────────────────────────────────────────┤
```

**Summary Table (Rows 3-55)**

| Row | Col A | Col F | Col G | ... | Col U | Col V |
|-----|-------|-------|-------|-----|-------|-------|
| 3 | **Period** | Year 0 | Year 1 | ... | Year 15 | TOTAL |
| 4 | | | | | | |
| 5 | **VOLUME** | | | | | |
| 6 | RDF Volume (tons) | =Model!F50 | =Model!G50 | ... | =Model!U50 | =SUM(F6:U6) |
| 7 | Coal Replaced (tons) | =Model!F56 | =Model!G56 | ... | =Model!U56 | =SUM(F7:U7) |
| 8 | | | | | | |
| 9 | **VALUE PROPOSITION** | | | | | |
| 10 | Savings Pool | =Model!F195 | =Model!G195 | ... | =Model!U195 | =SUM(F10:U10) |
| 11 | Client Rebate | =Model!F198 | =Model!G198 | ... | =Model!U198 | =SUM(F11:U11) |
| 12 | Gebtron Revenue | =Model!F199 | =Model!G199 | ... | =Model!U199 | =SUM(F12:U12) |
| 13 | | | | | | |
| 14 | **INCOME STATEMENT** | | | | | |
| 15 | Revenue | =Model!F227 | =Model!G227 | ... | =Model!U227 | =SUM(F15:U15) |
| 16 | Operating Expenses | =Model!F233 | =Model!G233 | ... | =Model!U233 | =SUM(F16:U16) |
| 17 | EBITDA | =Model!F235 | =Model!G235 | ... | =Model!U235 | =SUM(F17:U17) |
| 18 | Depreciation | =Model!F240 | =Model!G240 | ... | =Model!U240 | =SUM(F18:U18) |
| 19 | EBIT | =Model!F242 | =Model!G242 | ... | =Model!U242 | =SUM(F19:U19) |
| 20 | Interest | =Model!F334 | =Model!G334 | ... | =Model!U334 | =SUM(F20:U20) |
| 21 | Net Income | =Model!F250 | =Model!G250 | ... | =Model!U250 | =SUM(F21:U21) |
| 22 | | | | | | |
| 23 | **CASH FLOW** | | | | | |
| 24 | Cash from Operations | =Model!F388 | =Model!G388 | ... | =Model!U388 | =SUM(F24:U24) |
| 25 | CapEx | =Model!F394 | =Model!G394 | ... | =Model!U394 | =SUM(F25:U25) |
| 26 | Debt Service | =Model!F338 | =Model!G338 | ... | =Model!U338 | =SUM(F26:U26) |
| 27 | Net Cash Flow | =Model!F403 | =Model!G403 | ... | =Model!U403 | =SUM(F27:U27) |
| 28 | Cumulative Cash | =F27 | =F28+G27 | ... | =T28+U27 | |
| 30 | **BALANCE SHEET (EOY)** | | | | | |
| 31 | Total Assets | =Model!F306 | =Model!G306 | ... | =Model!U306 | |
| 32 | Total Debt | =Model!F336 | =Model!G336 | ... | =Model!U336 | |
| 33 | Total Equity | =Model!F324 | =Model!G324 | ... | =Model!U324 | |

**Section 1 Summary (Rows 45-60)** - Yellow background

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 45 | **KEY RETURNS** | Value | Target | Pass? |
| 46 | Equity IRR | =Model!B460 | =Inputs!B122 | =IF(B46>=C46,"PASS","FAIL") |
| 47 | Project IRR | =Model!B454 | =Inputs!B123 | =IF(B47>=C47,"PASS","FAIL") |
| 48 | Equity NPV | =Model!B461 | >0 | =IF(B48>0,"PASS","FAIL") |
| 49 | Simple Payback | =Model!B466 | <5 yrs | =IF(B49<5,"PASS","FAIL") |
| 50 | MOIC | =Model!B472 | >2.0x | =IF(B50>2,"PASS","FAIL") |
| 51 | Min DSCR | =Model!B369 | >1.2x | =IF(B51>1.2,"PASS","FAIL") |
| 60 | | | | |

---

## Section 2: Tornado Data (Rows 65-120)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  2. SENSITIVITY ANALYSIS - TORNADO DATA                    [Section Header]     │
├─────────────────────────────────────────────────────────────────────────────────┤
```

**Tornado Chart Data (Rows 67-90)**

| Row | Col A | Col B | Col C | Col D | Col E | Col F |
|-----|-------|-------|-------|-------|-------|-------|
| 67 | Base Case Equity IRR: | =Model!B460 | | | | |
| 68 | | | | | | |
| 69 | **Variable** | Low Value | Low IRR | High Value | High IRR | IRR Swing |
| 70 | Coal Price | =CoalPrice*0.8 | =Model!B541 | =CoalPrice*1.2 | =Model!H541 | =E70-C70 |
| 71 | Distance | =Distance*0.8 | =Model!B542 | =Distance*1.2 | =Model!H542 | =E71-C71 |
| 72 | MSW Cost | =SRC_MSWCost*0.8 | =Model!B543 | =SRC_MSWCost*1.2 | =Model!H543 | =E72-C72 |
| 73 | Processing Cost | =SRC_ProcCost*0.8 | =Model!B544 | =SRC_ProcCost*1.2 | =Model!H544 | =E73-C73 |
| 74 | Operating Hours | =OpHours*0.8 | =Model!B545 | =OpHours*1.2 | =Model!H545 | =E74-C74 |
| 75 | Interest Rate | =InterestRate*0.8 | =Model!B546 | =InterestRate*1.2 | =Model!H546 | =E75-C75 |
| 77 | | | | | | |
| 78 | **Sorted by Impact** | (Copy above, sort by F desc) | | | | |

**Two-Variable Matrix (Rows 95-115)**

| Row | Col A | Col B | Col C | Col D | Col E | Col F |
|-----|-------|-------|-------|-------|-------|-------|
| 95 | **Coal Price vs Distance** | | | | | |
| 96 | Equity IRR | Distance | | | | |
| 97 | Coal Price | 30 km | 50 km | 70 km | 100 km | 150 km |
| 98 | $70 | [dt] | [dt] | [dt] | [dt] | [dt] |
| 99 | $85 | [dt] | [dt] | [dt] | [dt] | [dt] |
| 100 | $100 | [dt] | [dt] | [dt] | [dt] | [dt] |
| 101 | $115 | [dt] | [dt] | [dt] | [dt] | [dt] |
| 102 | $130 | [dt] | [dt] | [dt] | [dt] | [dt] |

**Section 2 Summary (Rows 115-120)** - Yellow background

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 115 | **SENSITIVITY SUMMARY** | | | |
| 116 | Most Sensitive Variable | [Manual/Formula] | | |
| 117 | IRR Range | =MIN(C70:C75)&" to "&MAX(E70:E75) | | |
| 120 | | | | |

---

## Section 3: Scenario Comparison (Rows 125-185)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  3. SCENARIO COMPARISON                                    [Section Header]     │
├─────────────────────────────────────────────────────────────────────────────────┤
```

**Scenario Input Comparison (Rows 127-145)**

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 127 | **KEY INPUTS** | Base (Model) | Bear | Bull |
| 128 | Coal Price ($/ton) | =CoalPrice | =Bear!B168 | =Bull!B168 |
| 129 | Distance (km) | =Distance | =Bear!B40 | =Bull!B40 |
| 130 | MSW Cost ($/ton) | =SRC_MSWCost | =Bear!B37 | =Bull!B37 |
| 131 | Processing Cost ($/ton) | =SRC_ProcCost | =Bear!SRC_ProcCost | =Bull!SRC_ProcCost |
| 132 | TSR Target (%) | =TSR | =Bear!B147 | =Bull!B147 |
| 133 | Operating Hours | =OpHours | =Bear!OpHours | =Bull!OpHours |
| 134 | Client Rebate (%) | =ClientRebate | =Bear!B170 | =Bull!B170 |
| 135 | Interest Rate (%) | =InterestRate | =Bear!InterestRate | =Bull!InterestRate |

**Scenario Output Comparison (Rows 150-170)**

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 150 | **KEY OUTPUTS** | Base (Model) | Bear | Bull |
| 151 | Equity IRR | =Model!B460 | =Bear!B460 | =Bull!B460 |
| 152 | Project IRR | =Model!B454 | =Bear!B454 | =Bull!B454 |
| 153 | Equity NPV | =Model!B461 | =Bear!B461 | =Bull!B461 |
| 154 | Payback (years) | =Model!B466 | =Bear!B466 | =Bull!B466 |
| 155 | MOIC | =Model!B472 | =Bear!B472 | =Bull!B472 |
| 156 | Min DSCR | =Model!B369 | =Bear!B369 | =Bull!B369 |
| 157 | Avg Annual Client Savings | =Model!B210/15 | =Bear!B210/15 | =Bull!B210/15 |
| 158 | Total Gebtron Revenue | =Model!B211 | =Bear!B211 | =Bull!B211 |

**Pass/Fail Summary (Rows 165-180)**

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 165 | **PASS/FAIL** | Base | Bear | Bull |
| 166 | Equity IRR > 15% | =IF(B151>0.15,"PASS","FAIL") | =IF(C151>0.15,"PASS","FAIL") | =IF(D151>0.15,"PASS","FAIL") |
| 167 | NPV > 0 | =IF(B153>0,"PASS","FAIL") | =IF(C153>0,"PASS","FAIL") | =IF(D153>0,"PASS","FAIL") |
| 168 | Payback < 5 years | =IF(B154<5,"PASS","FAIL") | =IF(C154<5,"PASS","FAIL") | =IF(D154<5,"PASS","FAIL") |
| 169 | DSCR > 1.2x | =IF(B156>1.2,"PASS","FAIL") | =IF(C156>1.2,"PASS","FAIL") | =IF(D156>1.2,"PASS","FAIL") |

**Section 3 Summary (Rows 180-185)** - Yellow background

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 180 | **SCENARIO SUMMARY** | | | |
| 181 | All Scenarios Pass? | =IF(AND(...all pass checks...),"YES","NO") | | |
| 185 | | | | |

---

## Section 4: Monte Carlo Results (Rows 190-300)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  4. MONTE CARLO SIMULATION RESULTS                         [Section Header]     │
├─────────────────────────────────────────────────────────────────────────────────┤
```

**Simulation Statistics (Rows 192-230)**

| Row | Col A | Col B | Col C |
|-----|-------|-------|-------|
| 192 | Iterations: | =COUNT(A250:A10250) | |
| 193 | Last Run: | [VBA populates] | |
| 195 | **SUMMARY STATISTICS** | Equity IRR | Project IRR |
| 196 | Mean | =AVERAGE(A250:A10250) | =AVERAGE(B250:B10250) |
| 197 | Median | =MEDIAN(A250:A10250) | =MEDIAN(B250:B10250) |
| 198 | Standard Deviation | =STDEV(A250:A10250) | =STDEV(B250:B10250) |
| 199 | Minimum | =MIN(A250:A10250) | =MIN(B250:B10250) |
| 200 | Maximum | =MAX(A250:A10250) | =MAX(B250:B10250) |
| 202 | **PERCENTILES** | Equity IRR | Project IRR |
| 203 | 5th Percentile | =PERCENTILE(A250:A10250,0.05) | =PERCENTILE(B250:B10250,0.05) |
| 204 | 25th Percentile | =PERCENTILE(A250:A10250,0.25) | =PERCENTILE(B250:B10250,0.25) |
| 205 | 50th Percentile | =PERCENTILE(A250:A10250,0.50) | =PERCENTILE(B250:B10250,0.50) |
| 206 | 75th Percentile | =PERCENTILE(A250:A10250,0.75) | =PERCENTILE(B250:B10250,0.75) |
| 207 | 95th Percentile | =PERCENTILE(A250:A10250,0.95) | =PERCENTILE(B250:B10250,0.95) |
| 209 | **PROBABILITY ANALYSIS** | Equity IRR | |
| 210 | P(IRR > 10%) | =COUNTIF(A250:A10250,">0.10")/B192 | |
| 211 | P(IRR > 15%) | =COUNTIF(A250:A10250,">0.15")/B192 | |
| 212 | P(IRR > 20%) | =COUNTIF(A250:A10250,">0.20")/B192 | |
| 213 | P(IRR > 25%) | =COUNTIF(A250:A10250,">0.25")/B192 | |

**Section 4 Summary (Rows 225-230)** - Yellow background

| Row | Col A | Col B | Col C | Col D |
|-----|-------|-------|-------|-------|
| 225 | **MC SIMULATION SUMMARY** | | | |
| 226 | Expected Equity IRR | =B196 | | |
| 227 | P(IRR > Target) | =B211 | | |
| 228 | 90% Confidence Range | =B203&" to "&B207 | | |
| 230 | | | | |

**Raw Results Data Area (Rows 250+)**

| Row | Col A | Col B |
|-----|-------|-------|
| 248 | **RAW RESULTS** | |
| 249 | (Populated by VBA) | Equity IRR | Project IRR |
| 250 | Run 1 | [VBA] | [VBA] |
| 251 | Run 2 | [VBA] | [VBA] |
| ... | ... | ... |
| 10250 | Run 10000 | [VBA] | [VBA] |

---

# SHEET 5: REFERENCE

## Purpose
Documentation sheet providing glossary, conventions, line item definitions, abbreviations, and data sources. Makes the model self-documenting and easier for third parties to understand.

## Layout Overview

| Section | Row Range | Description |
|---------|-----------|-------------|
| 1. Glossary | 1-80 | Key terms and definitions |
| 2. Conventions | 85-130 | Modeling conventions used |
| 3. Line Item Definitions | 135-250 | Detailed explanation of each line item |
| 4. Abbreviations | 255-300 | Acronyms and short forms |
| 5. Data Sources | 305-350 | Where assumptions come from |
| 6. Revision History | 355-400 | Change log |

---

## Section 1: Glossary (Rows 1-80)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  1. GLOSSARY                                               [Section Header]     │
├─────────────────────────────────────────────────────────────────────────────────┤
```

| Row | Col A (Term) | Col B-D (Definition) |
|-----|--------------|----------------------|
| 3 | **EAAS TERMS** | |
| 4 | EAAS | Energy-As-A-Service. Business model where Gebtron owns and operates equipment, client pays based on savings achieved. |
| 5 | RDF | Refuse-Derived Fuel. Processed municipal solid waste used as alternative fuel in cement kilns. |
| 6 | MSW | Municipal Solid Waste. Raw waste input to the RDF processing facility. |
| 7 | TSR | Thermal Substitution Rate. Percentage of kiln thermal energy from alternative fuels vs. fossil fuels. |
| 8 | MRF | Materials Recovery Facility. Facility that processes MSW to produce RDF. |
| 9 | | |
| 10 | **FINANCIAL TERMS** | |
| 11 | CapEx | Capital Expenditure. One-time investment in equipment and installation. |
| 12 | OpEx | Operating Expenditure. Ongoing costs to run the operation (staff, materials, maintenance). |
| 13 | EBITDA | Earnings Before Interest, Taxes, Depreciation, and Amortization. Operating profit measure. |
| 14 | EBIT | Earnings Before Interest and Taxes. Operating profit after depreciation. |
| 15 | EBT | Earnings Before Tax. Profit after interest expense. |
| 16 | IRR | Internal Rate of Return. Discount rate that makes NPV equal to zero. |
| 17 | NPV | Net Present Value. Sum of discounted cash flows. |
| 18 | WACC | Weighted Average Cost of Capital. Blended cost of debt and equity. |
| 19 | MOIC | Multiple on Invested Capital. Total distributions divided by equity invested. |
| 20 | DSCR | Debt Service Coverage Ratio. EBITDA divided by debt service (interest + principal). |
| 21 | | |
| 22 | **PARTIES** | |
| 23 | Source Side | The waste processing facility (MRF/RDF plant) owned/operated by Gebtron SPV. |
| 24 | End User Side | The cement factory that receives and burns the RDF. |
| 25 | SPV | Special Purpose Vehicle. Legal entity created specifically for this project. |
| 26 | Client | The cement factory owner/operator who benefits from fuel cost savings. |
| 27 | | |
| 28 | **EQUIPMENT** | |
| 29 | Feeding Line | Equipment that handles, meters, and injects RDF into the cement kiln. |
| 30 | Shredder | Equipment that reduces MSW/RDF particle size. |
| 31 | Conveyor | Belt or chain system for moving material between process stages. |
| 32 | Kiln | Rotary furnace in cement plant where clinker is produced at ~1450°C. |

---

## Section 2: Conventions (Rows 85-130)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  2. MODELING CONVENTIONS                                   [Section Header]     │
├─────────────────────────────────────────────────────────────────────────────────┤
```

| Row | Col A (Convention) | Col B-D (Explanation) |
|-----|-------------------|----------------------|
| 87 | **TIME CONVENTIONS** | |
| 88 | Year 0 | Construction/investment period. CapEx spent, no operations, no revenue. Represents the period before commercial operation date (COD). |
| 89 | Year 1-15 | Operating years. Full year of operations with revenue and expenses. |
| 90 | Period End Convention | All cash flows assumed to occur at end of period for discounting purposes. |
| 91 | Calendar Year | Model uses calendar years (Jan 1 - Dec 31). Year 0 = model start year. |
| 92 | | |
| 93 | **CASH FLOW CONVENTIONS** | |
| 94 | CapEx Timing | 100% of CapEx spent in Year 0 (construction period). |
| 95 | Revenue Start | Revenue begins in Year 1 (first full operating year). |
| 96 | Debt Drawdown | 100% of debt drawn in Year 0 to fund construction. |
| 97 | Debt Repayment | Equal annual payments (PMT) starting Year 1 through end of loan term. |
| 98 | Dividends | 100% of net income distributed as dividends (no retained earnings buildup). |
| 99 | | |
| 100 | **SIGN CONVENTIONS** | |
| 101 | Positive Values | Inflows: Revenue, debt drawdown, equity contribution. |
| 102 | Negative Values | Outflows: CapEx, OpEx, debt repayment, distributions. Shown in parentheses. |
| 103 | IRR Cash Flows | Year 0 negative (investment), Years 1-15 positive (returns). |
| 104 | | |
| 105 | **ESCALATION CONVENTIONS** | |
| 106 | General Inflation | Applied to most OpEx items (materials, transport, admin). |
| 107 | Staff Inflation | Applied separately to labor costs (typically higher than general). |
| 108 | Coal Price Escalation | Applied to coal prices to calculate future savings. |
| 109 | Base Year | Year 1 values are "base" values. Escalation applies from Year 2 onward. |
| 110 | | |
| 111 | **CALCULATION CONVENTIONS** | |
| 112 | Depreciation | Straight-line over useful life (15 years). No salvage value. |
| 113 | Interest | Simple interest on opening balance. No compounding within year. |
| 114 | Tax | Applied to EBT if positive. No tax loss carryforward modeled. |
| 115 | Working Capital | Assumed zero for simplicity (no receivables/payables timing). |

---

## Section 3: Line Item Definitions (Rows 135-250)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  3. LINE ITEM DEFINITIONS                                  [Section Header]     │
├─────────────────────────────────────────────────────────────────────────────────┤
```

| Row | Col A (Line Item) | Col B (Sheet.Row) | Col C-D (Definition & Calculation) |
|-----|-------------------|-------------------|-----------------------------------|
| 137 | **INPUTS - SOURCE SIDE** | | |
| 138 | Equipment CapEx | Inputs.B11 | Cost of RDF processing equipment (shredders, conveyors, screens). |
| 139 | Installation & Civil | Inputs.B12 | Site prep, foundations, electrical, commissioning. |
| 140 | Processing Capacity | Inputs.B16 | Maximum RDF output in tons per hour at rated capacity. |
| 141 | MSW Acquisition Cost | Inputs.B19 | Cost to acquire MSW feedstock. Zero if free, negative if gate fee received. |
| 142 | Processing Cost | Inputs.B20 | Variable cost per ton of RDF produced (energy, wear parts, consumables). |
| 143 | Staff Count | Inputs.B23 | Number of FTEs at source facility (operators, supervisors, QC). |
| 144 | | | |
| 145 | **INPUTS - END USER SIDE** | | |
| 146 | Equipment CapEx | Inputs.B45 | Cost of RDF feeding/handling equipment at cement plant. |
| 147 | Feeding Capacity | Inputs.B50 | Maximum RDF feeding rate to kiln in tons per hour. |
| 148 | Operating Cost | Inputs.B53 | Variable cost per ton of RDF fed (energy, maintenance). |
| 149 | | | |
| 150 | **INPUTS - MARKET** | | |
| 151 | RDF:Coal Energy Ratio | Inputs.B145 | Tons of RDF needed to replace 1 ton of coal energy. Typically 1.8-2.2. |
| 152 | MSW:RDF Conversion | Inputs.B146 | Tons of MSW needed to produce 1 ton of RDF. Typically 3-6. |
| 153 | TSR Target | Inputs.B147 | Target thermal substitution rate at cement kiln. |
| 154 | Coal Price | Inputs.B151 | Current market price of coal in USD/ton. |
| 155 | Client Rebate % | Inputs.B160 | Percentage of savings pool guaranteed to client. |
| 156 | | | |
| 157 | **MODEL - VOLUMES** | | |
| 158 | Annual RDF Volume | Model.Row50 | = Capacity × Operating Hours. Tons of RDF produced per year. |
| 159 | Annual MSW Volume | Model.Row53 | = RDF Volume × MSW:RDF Ratio. Tons of MSW consumed. |
| 160 | Coal Replaced | Model.Row56 | = RDF Volume ÷ RDF:Coal Ratio. Tons of coal displaced. |
| 161 | | | |
| 162 | **MODEL - VALUE PROPOSITION** | | |
| 163 | Client Current Cost | Model.Row182 | Client's baseline fuel cost, escalated annually. |
| 164 | RDF Alternative Cost | Model.Row190 | Cost of RDF-based fuel at discount to coal. |
| 165 | Savings Pool | Model.Row195 | = Current Cost - Alternative Cost. Total value created. |
| 166 | Client Rebate | Model.Row198 | = Savings Pool × Rebate %. Guaranteed savings to client. |
| 167 | Gebtron Revenue | Model.Row199 | = Savings Pool × (1 - Rebate %). Revenue to Gebtron SPV. |
| 168 | | | |
| 169 | **MODEL - RETURNS** | | |
| 170 | Project IRR | Model.B454 | IRR of unlevered cash flows. Return on total capital. |
| 171 | Equity IRR | Model.B460 | IRR of levered cash flows. Return on equity invested. |
| 172 | Project NPV | Model.B455 | NPV of unlevered cash flows discounted at WACC. |
| 173 | Equity NPV | Model.B461 | NPV of levered cash flows discounted at cost of equity. |
| 174 | Simple Payback | Model.B466 | Years until cumulative cash flow turns positive. |
| 175 | MOIC | Model.B472 | Total distributions ÷ Equity invested. |

---

## Section 4: Abbreviations (Rows 255-300)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  4. ABBREVIATIONS                                          [Section Header]     │
├─────────────────────────────────────────────────────────────────────────────────┤
```

| Row | Col A (Abbrev) | Col B (Full Term) | Col C (Context) |
|-----|----------------|-------------------|-----------------|
| 257 | AFW | Alex Fort Worth | Gebtron's Alexandria, Egypt entity |
| 258 | CapEx | Capital Expenditure | Investment costs |
| 259 | CF | Cash Flow | |
| 260 | COD | Commercial Operation Date | When project starts generating revenue |
| 261 | D&A | Depreciation & Amortization | |
| 262 | DSCR | Debt Service Coverage Ratio | EBITDA ÷ Debt Service |
| 263 | EAAS | Energy-As-A-Service | Business model |
| 264 | EBIT | Earnings Before Interest & Tax | |
| 265 | EBITDA | Earnings Before Interest, Tax, D&A | |
| 266 | EBT | Earnings Before Tax | |
| 267 | EOY | End of Year | |
| 268 | EPC | Engineering, Procurement, Construction | |
| 269 | EU | End User | Cement factory side |
| 270 | FTE | Full-Time Equivalent | Staff count |
| 271 | FX | Foreign Exchange | Currency |
| 272 | HFO | Heavy Fuel Oil | Alternative fossil fuel |
| 273 | IRR | Internal Rate of Return | |
| 274 | MC | Monte Carlo | Simulation method |
| 275 | MOIC | Multiple on Invested Capital | |
| 276 | MRF | Materials Recovery Facility | |
| 277 | MSW | Municipal Solid Waste | |
| 278 | NPV | Net Present Value | |
| 279 | O&M | Operations & Maintenance | |
| 280 | OpEx | Operating Expenditure | |
| 281 | P&L | Profit & Loss | Income Statement |
| 282 | PMT | Payment | Excel function for loan payment |
| 283 | QC | Quality Control | |
| 284 | RDF | Refuse-Derived Fuel | |
| 285 | SPV | Special Purpose Vehicle | Project company |
| 286 | SRC | Source | Waste processing side |
| 287 | TSR | Thermal Substitution Rate | |
| 288 | WACC | Weighted Average Cost of Capital | |
| 289 | YoY | Year-over-Year | |

---

## Section 5: Data Sources (Rows 305-350)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  5. DATA SOURCES & ASSUMPTIONS                             [Section Header]     │
├─────────────────────────────────────────────────────────────────────────────────┤
```

| Row | Col A (Parameter) | Col B (Value) | Col C (Source) | Col D (Date) |
|-----|-------------------|---------------|----------------|--------------|
| 307 | **EQUIPMENT COSTS** | | | |
| 308 | Source Equipment CapEx | $2,000,000 | Gebtron internal estimates | Jan 2026 |
| 309 | End User Equipment CapEx | $1,500,000 | Gebtron internal estimates | Jan 2026 |
| 310 | Installation (% of equip) | 25% | Industry standard | |
| 311 | Contingency | 10% | Industry standard | |
| 312 | | | | |
| 313 | **OPERATING COSTS** | | | |
| 314 | MSW Acquisition | $10/ton | Local market research | Jan 2026 |
| 315 | Processing Cost | $20/ton | Gebtron operational data | Jan 2026 |
| 316 | Staff Costs (Egypt) | $12,000/yr | AFW HR data | Jan 2026 |
| 317 | Maintenance (% CapEx) | 3% | Equipment supplier guidance | |
| 318 | | | | |
| 319 | **MARKET DATA** | | | |
| 320 | Coal Price | $100/ton | Trading Economics / Argus | Jan 2026 |
| 321 | Coal Price Escalation | 2%/yr | Historical trend analysis | |
| 322 | RDF:Coal Ratio | 2.0 | Lab testing / industry data | |
| 323 | MSW:RDF Ratio | 5.0 | Gebtron operational data | |
| 324 | | | | |
| 325 | **FINANCING** | | | |
| 326 | Interest Rate | 10% | Local bank indicative | Jan 2026 |
| 327 | Loan Term | 10 years | Typical project finance | |
| 328 | Debt Ratio | 70% | Project finance standard | |
| 329 | Cost of Equity | 15% | CAPM / market expectations | |
| 330 | | | | |
| 331 | **ESCALATION** | | | |
| 332 | General Inflation | 2% | IMF World Economic Outlook | |
| 333 | Staff Inflation | 3% | Local labor market trends | |

---

## Section 6: Revision History (Rows 355-400)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  6. REVISION HISTORY                                       [Section Header]     │
├─────────────────────────────────────────────────────────────────────────────────┤
```

| Row | Col A (Version) | Col B (Date) | Col C (Author) | Col D (Changes) |
|-----|-----------------|--------------|----------------|-----------------|
| 357 | v1.0 | [Date] | [Name] | Initial model creation |
| 358 | v1.1 | [Date] | [Name] | [Description of changes] |
| 359 | v1.2 | [Date] | [Name] | [Description of changes] |
| 360 | v2.0 | [Date] | [Name] | [Major revision description] |

---

# SHEET 6: BEAR (Hidden)

## Purpose
Copy of the Model sheet with pessimistic input assumptions. Hidden from normal view.

## How to Create

1. Right-click Model sheet tab → **Move or Copy** → Check "Create a copy"
2. Rename to "Bear"
3. Adjust input values in the Input Area cells (rows 3-8, 37-42, 82-90, 167-175) to pessimistic values:
   - Higher costs (MSW, processing, transport)
   - Lower coal prices
   - Lower operating hours
   - Higher interest rates
   - Lower TSR achievement
4. Right-click sheet tab → **Hide**

**Typical Bear Case Adjustments:**

| Parameter | Base Value | Bear Adjustment |
|-----------|------------|-----------------|
| Coal Price | $100/ton | $80/ton (-20%) |
| MSW Cost | $10/ton | $15/ton (+50%) |
| Processing Cost | $20/ton | $25/ton (+25%) |
| Operating Hours | 8,000 hrs | 6,500 hrs (-19%) |
| Interest Rate | 10% | 12% (+20%) |
| TSR Achieved | 50% | 40% (-20%) |

---

# SHEET 6: BULL (Hidden)

## Purpose
Copy of the Model sheet with optimistic input assumptions. Hidden from normal view.

## How to Create

1. Right-click Model sheet tab → **Move or Copy** → Check "Create a copy"
2. Rename to "Bull"
3. Adjust input values in the Input Area cells to optimistic values:
   - Lower costs (MSW, processing, transport)
   - Higher coal prices
   - Higher operating hours
   - Lower interest rates
   - Higher TSR achievement
4. Right-click sheet tab → **Hide**

**Typical Bull Case Adjustments:**

| Parameter | Base Value | Bull Adjustment |
|-----------|------------|-----------------|
| Coal Price | $100/ton | $130/ton (+30%) |
| MSW Cost | $10/ton | $5/ton (-50%) |
| Processing Cost | $20/ton | $15/ton (-25%) |
| Operating Hours | 8,000 hrs | 8,500 hrs (+6%) |
| Interest Rate | 10% | 8% (-20%) |
| TSR Achieved | 50% | 60% (+20%) |

---

# SCENARIO MANAGEMENT

## Base Case = Model Sheet

The Model sheet (Sheet 3) serves as the live Base case. All formulas are active and calculate based on current Inputs sheet values.

## Bear and Bull = Frozen Copies

Bear and Bull sheets are **copies** of the Model sheet with modified inputs. They contain the same formulas but reference their own local input cells (not the main Inputs sheet).

## Updating Scenarios

When Model structure changes:
1. Delete existing Bear/Bull sheets
2. Copy Model sheet twice
3. Rename copies to Bear and Bull
4. Adjust input values per scenario assumptions
5. Hide the scenario sheets

## Outputs Sheet References

The Outputs sheet Section 3 (Scenario Comparison) pulls values from:
- **Base:** Model sheet (live)
- **Bear:** Bear sheet (frozen)
- **Bull:** Bull sheet (frozen)

---

# VBA MODULE: MonteCarloSimulation

## Purpose
Run 10,000 iterations sampling from probability distributions.

## Code

```vba
Option Explicit

' =====================================================
' MONTE CARLO SIMULATION FOR EAAS FINANCIAL MODEL
' Updated for 6-sheet structure (Cover, Inputs, Model, Outputs, Bear, Bull)
' =====================================================

Sub RunMonteCarloSimulation()

    Dim wsInputs As Worksheet
    Dim wsModel As Worksheet
    Dim wsOutput As Worksheet
    Dim iterations As Long
    Dim i As Long

    ' Arrays to store results
    Dim equityIRR() As Double
    Dim projectIRR() As Double

    ' Original input values (to restore after simulation)
    Dim origCoalPrice As Double
    Dim origMSWCost As Double
    Dim origProcCost As Double
    Dim origOpHours As Double
    Dim origTSR As Double

    ' Distribution parameters
    Dim coalMean As Double, coalStdDev As Double
    Dim mswMin As Double, mswMax As Double
    Dim procMin As Double, procMax As Double, procMode As Double
    Dim hoursMin As Double, hoursMax As Double, hoursMode As Double
    Dim tsrMean As Double, tsrStdDev As Double

    ' Set worksheet references (updated for new structure)
    Set wsInputs = ThisWorkbook.Sheets("Inputs")
    Set wsModel = ThisWorkbook.Sheets("Model")
    Set wsOutput = ThisWorkbook.Sheets("Outputs")

    ' Get number of iterations from Inputs sheet Section 6 (Row 180)
    iterations = wsInputs.Range("B180").Value
    If iterations < 100 Or iterations > 100000 Then
        MsgBox "Iterations must be between 100 and 100,000"
        Exit Sub
    End If

    ' Resize result arrays
    ReDim equityIRR(1 To iterations)
    ReDim projectIRR(1 To iterations)

    ' Store original values from Inputs sheet
    origCoalPrice = wsInputs.Range("B151").Value    ' Coal Price (Section 5)
    origMSWCost = wsInputs.Range("B19").Value       ' MSW Cost (Section 1)
    origProcCost = wsInputs.Range("B20").Value      ' Processing Cost (Section 1)
    origOpHours = wsInputs.Range("B141").Value      ' Operating Hours (Section 5)
    origTSR = wsInputs.Range("B147").Value          ' TSR Target (Section 5)

    ' Get distribution parameters from Inputs sheet Section 6 (Monte Carlo)
    ' Coal Price - Normal distribution
    coalMean = wsInputs.Range("B184").Value
    coalStdDev = wsInputs.Range("C184").Value

    ' MSW Cost - Uniform distribution
    mswMin = wsInputs.Range("B185").Value
    mswMax = wsInputs.Range("C185").Value

    ' Processing Cost - Triangular distribution
    procMin = wsInputs.Range("B186").Value
    procMax = wsInputs.Range("C186").Value
    procMode = origProcCost ' Use current value as mode

    ' Operating Hours - Triangular distribution
    hoursMin = wsInputs.Range("B187").Value
    hoursMax = wsInputs.Range("C187").Value
    hoursMode = origOpHours

    ' TSR - Normal distribution
    tsrMean = wsInputs.Range("B188").Value
    tsrStdDev = wsInputs.Range("C188").Value

    ' Disable screen updating and set calculation to manual
    Application.ScreenUpdating = False
    Application.Calculation = xlCalculationManual
    Application.EnableEvents = False

    ' Initialize random seed
    Randomize

    ' Clear previous results in Outputs sheet Section 4 (Row 250+)
    wsOutput.Range("A250:B" & 249 + iterations).ClearContents

    ' Run simulation
    For i = 1 To iterations

        ' Sample from distributions and update Inputs sheet
        wsInputs.Range("B151").Value = SampleNormal(coalMean, coalStdDev)
        wsInputs.Range("B19").Value = SampleUniform(mswMin, mswMax)
        wsInputs.Range("B20").Value = SampleTriangular(procMin, procMode, procMax)
        wsInputs.Range("B141").Value = SampleTriangular(hoursMin, hoursMode, hoursMax)
        wsInputs.Range("B147").Value = SampleNormal(tsrMean, tsrStdDev)

        ' Recalculate workbook
        Application.Calculate

        ' Store results from Model sheet Section 8 (Returns)
        equityIRR(i) = wsModel.Range("B460").Value   ' Equity IRR
        projectIRR(i) = wsModel.Range("B454").Value  ' Project IRR

        ' Update status bar every 500 iterations
        If i Mod 500 = 0 Then
            Application.StatusBar = "Monte Carlo: " & i & " / " & iterations & " (" & Format(i / iterations, "0%") & ")"
        End If

    Next i

    ' Restore original values
    wsInputs.Range("B151").Value = origCoalPrice
    wsInputs.Range("B19").Value = origMSWCost
    wsInputs.Range("B20").Value = origProcCost
    wsInputs.Range("B141").Value = origOpHours
    wsInputs.Range("B147").Value = origTSR

    ' Write results to Outputs sheet Section 4 (Row 250+)
    For i = 1 To iterations
        wsOutput.Cells(249 + i, 1).Value = equityIRR(i)
        wsOutput.Cells(249 + i, 2).Value = projectIRR(i)
    Next i

    ' Record timestamp
    wsOutput.Range("B193").Value = Now()

    ' Re-enable Excel features
    Application.Calculation = xlCalculationAutomatic
    Application.ScreenUpdating = True
    Application.EnableEvents = True
    Application.StatusBar = False

    ' Final recalculation
    Application.Calculate

    MsgBox "Monte Carlo simulation complete!" & vbCrLf & _
           "Iterations: " & iterations & vbCrLf & _
           "Mean Equity IRR: " & Format(wsOutput.Range("B196").Value, "0.0%") & vbCrLf & _
           "P(IRR > 15%): " & Format(wsOutput.Range("B211").Value, "0.0%"), _
           vbInformation, "Simulation Complete"

End Sub

' =====================================================
' DISTRIBUTION SAMPLING FUNCTIONS
' =====================================================

Function SampleNormal(mean As Double, stdDev As Double) As Double
    ' Box-Muller transform for normal distribution
    Dim u1 As Double, u2 As Double
    u1 = Rnd()
    u2 = Rnd()

    ' Avoid log(0)
    If u1 < 0.0000001 Then u1 = 0.0000001

    SampleNormal = mean + stdDev * Sqr(-2 * Log(u1)) * Cos(2 * 3.14159265358979 * u2)
End Function

Function SampleUniform(minVal As Double, maxVal As Double) As Double
    SampleUniform = minVal + Rnd() * (maxVal - minVal)
End Function

Function SampleTriangular(minVal As Double, modeVal As Double, maxVal As Double) As Double
    Dim u As Double
    Dim F As Double

    u = Rnd()
    F = (modeVal - minVal) / (maxVal - minVal)

    If u < F Then
        SampleTriangular = minVal + Sqr(u * (maxVal - minVal) * (modeVal - minVal))
    Else
        SampleTriangular = maxVal - Sqr((1 - u) * (maxVal - minVal) * (maxVal - modeVal))
    End If
End Function

' =====================================================
' UTILITY FUNCTIONS
' =====================================================

Sub ClearMonteCarloResults()
    Dim wsOutput As Worksheet
    Set wsOutput = ThisWorkbook.Sheets("Outputs")

    wsOutput.Range("A250:B10250").ClearContents
    wsOutput.Range("B193").Value = ""

    MsgBox "Monte Carlo results cleared.", vbInformation
End Sub
```

---

# IMPLEMENTATION NOTES

## Build Order (6-Sheet Structure)

1. **Cover** - Create cover page with TOC and formatting key
2. **Inputs** - Create all 6 input sections with named ranges
3. **Model** - Build sections in order:
   - Section 1: TimeSeries (no dependencies)
   - Section 2: Volume (depends on Section 1)
   - Section 3: CostBuildup (depends on Sections 1-2)
   - Section 4: ValueProp (depends on Sections 1-2)
   - Section 5: P&L (depends on Sections 3-4)
   - Section 6: Balance Sheet (depends on Sections 3, 5)
   - Section 7: Cash Flow (depends on Sections 5-6)
   - Section 8: Returns (depends on Section 7)
   - Section 9: Sensitivity (depends on Section 8)
4. **Outputs** - Build all 4 sections referencing Model sheet
5. **Bear** - Copy Model sheet, adjust inputs, hide
6. **Bull** - Copy Model sheet, adjust inputs, hide
7. **VBA Module** - Add Monte Carlo code last

## Named Ranges Summary

Create these named ranges pointing to Inputs sheet cells:

| Name | Reference | Description |
|------|-----------|-------------|
| SRC_CapEx | Inputs!B36 | Source side CapEx |
| EU_CapEx | Inputs!B69 | End user CapEx |
| TOTAL_CapEx | Inputs!B95 | Total CapEx with contingency |
| TotalDebt | Inputs!B129 | Total debt amount |
| TotalEquity | Inputs!B130 | Total equity amount |
| InterestRate | Inputs!B109 | Annual interest rate |
| LoanTerm | Inputs!B110 | Loan term in years |
| CoalPrice | Inputs!B151 | Coal price $/ton |
| OpHours | Inputs!B141 | Operating hours/year |
| ContractYears | Inputs!B140 | Contract duration |
| ... | ... | (see full list in Inputs sections) |

## Testing Checklist

- [ ] Balance sheet balances (Section 6, Row 328 should = 0)
- [ ] Cash flow reconciles to balance sheet cash
- [ ] IRR formulas return reasonable values (15-25% typical)
- [ ] Debt schedule pays off correctly over loan term
- [ ] Total depreciation equals total CapEx over 15 years
- [ ] Changing inputs recalculates all outputs
- [ ] Monte Carlo VBA runs without errors
- [ ] Bear/Bull scenarios show different results
- [ ] All section summaries populate correctly
- [ ] Outputs sheet references Model correctly

## Version Control

Save versions as:
- `EAAS_Model_v1.0_[Date].xlsx` - Initial 6-sheet build
- `EAAS_Model_v1.1_[Date].xlsx` - Bug fixes
- `EAAS_Model_v2.0_[Date].xlsx` - Major updates

## File Protection

Consider protecting:
- **Cover sheet:** Fully protected (informational only)
- **Inputs sheet:** Unlock only input cells (blue cells)
- **Model sheet:** Fully protected (all formulas)
- **Outputs sheet:** Fully protected (all formulas)
- **Bear/Bull sheets:** Fully protected (frozen scenarios)

---

# QUICK REFERENCE: Sheet Navigation

| Sheet | Sections | Key Rows |
|-------|----------|----------|
| **Cover** | 5 areas | TOC at row 37, Format key at row 57 |
| **Inputs** | 6 sections | Section summaries at rows 35, 68, 92, 127, 173, 198 |
| **Model** | 9 sections | Summaries at rows 27, 68, 150, 208, 270, 365, 438, 490, 645 |
| **Outputs** | 4 sections | Key returns at row 45, MC results at row 190 |
| **Reference** | 6 sections | Glossary, conventions, definitions, sources |
| **Bear** | Same as Model | Pessimistic scenario |
| **Bull** | Same as Model | Optimistic scenario |

---

# HOW TO READ THIS MODEL

## Reading Order for New Users

```
START HERE
    │
    ▼
┌─────────────────────────────────────────────────────────────────┐
│  1. COVER SHEET                                                  │
│     • Read Table of Contents to understand structure             │
│     • Review Formatting Key to understand cell colors            │
└─────────────────────────────────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────────────────────────────────┐
│  2. REFERENCE SHEET (Read before diving into numbers)           │
│     • Glossary: Understand key terms (EAAS, RDF, TSR, etc.)     │
│     • Conventions: Understand Year 0, sign conventions, etc.    │
│     • Data Sources: See where assumptions come from             │
└─────────────────────────────────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────────────────────────────────┐
│  3. INPUTS SHEET                                                 │
│     • Review all 6 sections of assumptions                       │
│     • Section summaries (yellow rows) show calculated totals     │
│     • Blue cells = adjustable inputs                             │
└─────────────────────────────────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────────────────────────────────┐
│  4. MODEL SHEET                                                  │
│     • Follow sections 1→9 in order (data flows downward)        │
│     • Each section summary feeds into later sections             │
│     • Section 8 (Returns) has the key results                    │
└─────────────────────────────────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────────────────────────────────┐
│  5. OUTPUTS SHEET                                                │
│     • Section 1: Executive summary of 15-year performance        │
│     • Section 3: Compare Base vs Bear vs Bull scenarios          │
│     • Row 45-51: Pass/Fail summary for key metrics               │
└─────────────────────────────────────────────────────────────────┘
```

---

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              INPUTS SHEET                                    │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌───────┐│
│  │ Section 1│ │ Section 2│ │ Section 3│ │ Section 4│ │ Section 5│ │Sect 6 ││
│  │  Source  │ │ End User │ │  Shared  │ │ Finance  │ │  Market  │ │  MC   ││
│  │  Inputs  │ │  Inputs  │ │  Inputs  │ │  Inputs  │ │  Inputs  │ │Params ││
│  └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘ └───┬───┘│
└───────┼────────────┼────────────┼────────────┼────────────┼───────────┼────┘
        │            │            │            │            │           │
        ▼            ▼            ▼            ▼            ▼           │
┌─────────────────────────────────────────────────────────────────────────────┐
│                              MODEL SHEET                                     │
│                                                                              │
│  ┌─────────────┐                                                            │
│  │ 1.TimeSeries│ ◄── Operating hours, period flags                         │
│  └──────┬──────┘                                                            │
│         │                                                                    │
│         ▼                                                                    │
│  ┌─────────────┐                                                            │
│  │  2. Volume  │ ◄── RDF production, MSW required, coal replaced           │
│  └──────┬──────┘                                                            │
│         │                                                                    │
│    ┌────┴────┐                                                              │
│    ▼         ▼                                                              │
│  ┌─────────────┐  ┌─────────────┐                                          │
│  │3.CostBuildup│  │ 4.ValueProp │ ◄── Savings pool, rebate, revenue       │
│  │  CapEx/OpEx │  └──────┬──────┘                                          │
│  └──────┬──────┘         │                                                  │
│         │                │                                                  │
│         └───────┬────────┘                                                  │
│                 ▼                                                            │
│          ┌─────────────┐                                                    │
│          │   5. P&L    │ ◄── Revenue, expenses, EBITDA, net income         │
│          └──────┬──────┘                                                    │
│                 │                                                            │
│                 ▼                                                            │
│          ┌─────────────┐                                                    │
│          │6.Balance Sht│ ◄── Assets, liabilities, equity, debt schedule   │
│          └──────┬──────┘                                                    │
│                 │                                                            │
│                 ▼                                                            │
│          ┌─────────────┐                                                    │
│          │ 7.Cash Flow │ ◄── Operating, investing, financing CF            │
│          └──────┬──────┘                                                    │
│                 │                                                            │
│                 ▼                                                            │
│          ┌─────────────┐                                                    │
│          │  8.Returns  │ ◄── IRR, NPV, payback, MOIC  ★ KEY RESULTS ★     │
│          └──────┬──────┘                                                    │
│                 │                                                            │
│                 ▼                                                            │
│          ┌─────────────┐                                                    │
│          │9.Sensitivity│ ◄── Tornado data, 2-way tables, breakeven        │
│          └─────────────┘                                                    │
└─────────────────────────────────────────────────────────────────────────────┘
        │
        ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                             OUTPUTS SHEET                                    │
│  ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐   │
│  │ 1. 15-Year    │ │ 2. Tornado    │ │ 3. Scenario   │ │ 4. Monte      │   │
│  │    Summary    │ │    Chart Data │ │    Comparison │ │    Carlo      │   │
│  └───────────────┘ └───────────────┘ └───────────────┘ └───────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Key Metrics Quick Finder

| Metric | Location | Good Value |
|--------|----------|------------|
| **Equity IRR** | Model!B460, Outputs!B46 | > 15% |
| **Project IRR** | Model!B454, Outputs!B47 | > 12% |
| **Equity NPV** | Model!B461, Outputs!B48 | > 0 |
| **Simple Payback** | Model!B466, Outputs!B49 | < 5 years |
| **MOIC** | Model!B472, Outputs!B50 | > 2.0x |
| **Min DSCR** | Model!B369, Outputs!B51 | > 1.2x |
| **Total Gebtron Revenue** | Model!B211, Outputs!V12 | Maximize |
| **Client Savings** | Model!B210, Outputs!V11 | Maximize |

---

## Scenario Analysis Quick Guide

| Scenario | Sheet | Purpose | Key Adjustments |
|----------|-------|---------|-----------------|
| **Base** | Model (live) | Expected case | Current input values |
| **Bear** | Bear (hidden) | Downside risk | ↓ Coal price, ↑ Costs, ↓ Hours |
| **Bull** | Bull (hidden) | Upside potential | ↑ Coal price, ↓ Costs, ↑ Hours |

**To view scenarios:** Right-click any sheet tab → Unhide → Select Bear or Bull

---

## Sensitivity Analysis Reading Guide

**Tornado Chart (Outputs Section 2):**
- Longer bars = More sensitive to that variable
- Variables at top have most impact on IRR
- Use this to identify key risks

**Two-Way Table (Outputs Section 2):**
- Rows = Coal price scenarios
- Columns = Distance scenarios
- Find intersection to see IRR under combined conditions

---

## Color Code Reminder

| Cell Color | Meaning | Action |
|------------|---------|--------|
| 🔵 Light Blue | Input cell | You can change this |
| ⬜ White | Calculated | Don't touch (formula) |
| 🟡 Light Yellow | Summary/Output | Key result to review |
| 🟢 Light Green | Check cell | Should show 0 or TRUE |
| 🔴 Light Red | Error/Warning | Needs attention |

---

**End of Specification**
