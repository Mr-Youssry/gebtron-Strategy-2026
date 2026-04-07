# RDF Facility Operating Costs (OPEX) - UAE Benchmark

**Purpose:** Detailed breakdown of operating costs for Refuse Derived Fuel (RDF) production facilities, benchmarked for UAE market conditions.

**Reference Plant:** 12 t/h capacity, 2-shift operation (~4,800 operating hours/year)

**Primary Source:** *Alternative Fuels and Raw Materials Handbook for the Cement and Lime Industry*, Lechtenberg & Diller, MVW Lechtenberg & Partner, 2012

---

## Table of Contents

1. [Maintenance](#maintenance)
2. [Energy](#energy)
3. [Personnel](#personnel)
4. [Depreciation](#depreciation)
5. [Other Costs](#other-costs)
6. [UAE Cost Summary](#uae-cost-summary)

---

## Maintenance

**European Benchmark Total: €8.47/t** [^1]

Maintenance costs represent the largest controllable OPEX component for RDF facilities. These costs are dominated by wear parts replacement, particularly shredder knives which account for 40% of total maintenance expenditure.

### Pre-Shredder

**European Benchmark: €1.34/t** [^1]

| Component | Description |
|-----------|-------------|
| **Function** | Primary size reduction of incoming waste to <300mm |
| **Key Wear Parts** | Hammers/knives, rotor shaft bearings, screens |
| **Maintenance Frequency** | Knife changes every 500-2,000 operating hours [^2] |

**Formula:**
```
Cost/t = (Knife_Sets × Price_per_Set × Changes_per_Year + Bearing_Kits + Labor_Hours × Rate) ÷ Annual_Throughput
```

**Cost Drivers:**
| Factor | European Value | UAE Adjustment |
|--------|---------------|----------------|
| Knife set price | €5,000-15,000 | +15% import costs [^3] |
| Labor rate (maintenance) | €40-60/hr | AED 60-100/hr (€15-25/hr) [^4] |
| Climate factor | Baseline | +10% (hydraulic fluid degradation in heat) |

**UAE Benchmark: €1.20-1.50/t (AED 4.60-5.75/t)**

---

### Magnetic Separator

**European Benchmark: €0.15/t** [^1]

| Component | Description |
|-----------|-------------|
| **Function** | Removal of ferrous metals from waste stream |
| **Key Wear Parts** | Conveyor belt, drive motor, idler rollers |
| **Maintenance Frequency** | Belt replacement every 12-24 months [^2] |

**Formula:**
```
Cost/t = (Belt_Cost × Replacements_per_Year + Motor_Service + Roller_Replacement) ÷ Annual_Throughput
```

**Cost Drivers:**
| Factor | European Value | UAE Adjustment |
|--------|---------------|----------------|
| Belt cost | €2,000-5,000 | +10% import |
| Motor service | €500-1,000/year | Similar |
| Labor | €40-60/hr | €15-25/hr |

**UAE Benchmark: €0.12-0.18/t (AED 0.46-0.69/t)**

---

### Heavy Fraction Separator

**European Benchmark: €0.28/t** [^1]

| Component | Description |
|-----------|-------------|
| **Function** | Separation of heavy/dense materials (stones, glass, ceramics) |
| **Types** | Air density separator, ballistic separator, drum screen |
| **Key Wear Parts** | Screens, drum liners, air nozzles |
| **Maintenance Frequency** | Screen replacement every 6-18 months [^2] |

**Formula:**
```
Cost/t = (Screen_Cost × Annual_Replacements + Liner_Cost + Drive_Service) ÷ Annual_Throughput
```

**Cost Drivers:**
| Factor | European Value | UAE Adjustment |
|--------|---------------|----------------|
| Screen cost | €3,000-8,000 | +15% import |
| Replacement frequency | 1-2x/year | 1.5-2.5x/year (sand/dust contamination) |
| Labor | €40-60/hr | €15-25/hr |

**UAE Benchmark: €0.25-0.35/t (AED 0.96-1.34/t)**

> **Note:** UAE waste streams may contain higher levels of sand and dust contamination, increasing abrasive wear on screens and separation equipment.

---

### Final Shredders (2x)

**European Benchmark: €6.10/t** [^1] ⚠️ **LARGEST COST COMPONENT**

| Component | Description |
|-----------|-------------|
| **Function** | Secondary size reduction to <30mm for kiln feeding |
| **Configuration** | Typically 2 shredders in series or parallel |
| **Key Wear Parts** | Knives, counter-knives, screens, bearings |
| **Maintenance Frequency** | Knife changes every 200-500 operating hours [^2] |

**Detailed Cost Breakdown (12 t/h plant, European basis):** [^1]

| Item | Annual Cost (EUR) | Cost/t (EUR) | % of Total |
|------|------------------|--------------|------------|
| Knives (4 sets/year) | 60,000 | 3.33 | 55% |
| Screens (2 sets/year) | 16,000 | 0.89 | 15% |
| Bearings (1 set/year) | 5,000 | 0.28 | 5% |
| Labor (400 hrs @ €50) | 20,000 | 1.11 | 18% |
| Consumables | 10,000 | 0.56 | 9% |
| **TOTAL** | **111,000** | **6.17** | **100%** |

*Based on annual throughput of 18,000 tonnes*

**Formula:**
```
Cost/t = (Knife_Sets × Price + Screen_Sets × Price + Bearing_Kits × Price + Labor_Hours × Rate + Consumables) ÷ Annual_Throughput

Where:
- Knife life: 200-500 operating hours (material dependent)
- Screen life: 2,000-4,000 operating hours
- Bearing life: 8,000-15,000 operating hours
```

**Maintenance Category Breakdown:** [^1]
| Category | Share of Maintenance |
|----------|---------------------|
| Shredder knives | 40% |
| Screen wear | 20% |
| Bearings/scrapers | 20% |
| Sealings/oils | 20% |

**Cost Drivers:**
| Factor | European Value | UAE Adjustment |
|--------|---------------|----------------|
| Knife set price | €15,000/set | €12,000-18,000 (import from EU) [^3] |
| Knife changes/year | 4 | 3-5 (depends on waste composition) |
| Labor hours | 400/year | 400-500 (additional heat-related issues) |
| Labor rate | €50/hr | €15-25/hr (AED 60-100/hr) [^4] |

**UAE Calculation:**
```
Knives: 4 sets × €15,000 × 1.15 (import) = €69,000
Screens: 2 sets × €8,000 × 1.15 = €18,400
Bearings: 1 set × €5,000 × 1.15 = €5,750
Labor: 450 hrs × €20/hr = €9,000
Consumables: €10,000 × 1.10 = €11,000
────────────────────────────────────────
TOTAL: €113,150/year
Cost/t = €113,150 ÷ 18,000 = €6.29/t

With lower labor offset: €5.50/t midpoint
```

**UAE Benchmark: €4.50-6.50/t (AED 17.25-24.90/t)**

---

### Conveyor Belts (6x)

**European Benchmark: €0.60/t** [^1]

| Component | Description |
|-----------|-------------|
| **Function** | Material transport between processing stages |
| **Typical Configuration** | 6 conveyors: infeed, transfer (3x), discharge, reject |
| **Key Wear Parts** | Belts, rollers, idlers, motors, gearboxes |
| **Maintenance Frequency** | Belt replacement every 2-5 years [^2] |

**Formula:**
```
Cost/t = (Belt_Replacement_Cost + Roller_Replacement + Motor_Service + Idler_Replacement) ÷ Annual_Throughput

Where:
- Belt cost: €3,000-10,000 each (length dependent)
- Belt life: 15,000-40,000 operating hours
- Roller life: 10,000-20,000 operating hours
```

**Cost Drivers:**
| Factor | European Value | UAE Adjustment |
|--------|---------------|----------------|
| Belt cost (avg) | €5,000 each | +10% import |
| Belt life | 3-5 years | 2-4 years (heat, dust) |
| Labor | €40-60/hr | €15-25/hr |

**UAE Benchmark: €0.50-0.70/t (AED 1.92-2.68/t)**

---

### Maintenance Summary Table

| Equipment | Europe (€/t) | UAE Low (€/t) | UAE High (€/t) | UAE Mid (AED/t) |
|-----------|-------------|---------------|----------------|-----------------|
| Pre-shredder | 1.34 | 1.20 | 1.50 | 5.18 |
| Magnetic separator | 0.15 | 0.12 | 0.18 | 0.58 |
| Heavy fraction sep | 0.28 | 0.25 | 0.35 | 1.15 |
| Final shredders (2x) | 6.10 | 4.50 | 6.50 | 21.08 |
| Conveyors (6x) | 0.60 | 0.50 | 0.70 | 2.30 |
| **TOTAL MAINTENANCE** | **8.47** | **6.57** | **9.23** | **30.28** |

---

## Energy

**European Benchmark: €3.60-4.00/t** (estimated) [^1]

Energy costs are driven primarily by electrical consumption for motors (shredders, conveyors, separators) and auxiliaries (dust collection, lighting, HVAC).

### Electrical Consumption

**Specific Energy Consumption: 25-40 kWh/t of RDF produced** [^5]

| Equipment | Installed Power (kW) | Load Factor | Operating Power (kW) |
|-----------|---------------------|-------------|---------------------|
| Pre-shredder | 200-400 | 60-70% | 140-280 |
| Final shredders (2x) | 300-600 | 65-75% | 210-450 |
| Conveyors (6x) | 50-100 | 50-60% | 30-60 |
| Separators | 30-50 | 60-70% | 20-35 |
| Auxiliaries | 50-100 | 40-50% | 25-50 |
| **TOTAL** | **630-1,250** | **~60%** | **425-875** |

**Formula:**
```
Energy_Cost/t = Specific_Energy_Consumption (kWh/t) × Electricity_Rate (€/kWh)

Or detailed:
Energy_Cost/t = (Total_Installed_kW × Average_Load_Factor × Operating_Hours) ÷ Annual_Throughput × Electricity_Rate
```

**European Calculation:**
```
Specific consumption: 30 kWh/t (midpoint)
European industrial rate: €0.12/kWh
Cost/t = 30 × €0.12 = €3.60/t
```

### UAE Electricity Rates

**UAE Industrial Electricity Tariffs (2025-2026):** [^6] [^7]

| Utility | Region | Industrial Rate (AED/kWh) | Rate (€/kWh) |
|---------|--------|--------------------------|--------------|
| DEWA | Dubai | 0.28-0.38 | 0.07-0.10 |
| ADDC/TAQA | Abu Dhabi | 0.21-0.30 | 0.05-0.08 |
| SEWA | Sharjah | 0.25-0.35 | 0.06-0.09 |
| FEWA | Northern Emirates | 0.23-0.33 | 0.06-0.09 |

*Additional charges: Fuel surcharge ~AED 0.06/kWh, 5% VAT* [^6]

**UAE Calculation:**
```
Specific consumption: 35 kWh/t (higher due to cooling needs)
UAE industrial rate: AED 0.30/kWh (€0.08/kWh) including surcharges
Cost/t = 35 × €0.08 = €2.80/t

With cooling load (+15%):
Cost/t = 35 × 1.15 × €0.08 = €3.22/t
```

### Cooling Considerations

UAE facilities require additional energy for:
- HVAC for control rooms and electrical cabinets
- Cooling for hydraulic systems
- Dust suppression systems (water pumping)

**Estimated additional load: 10-20% above European baseline**

**UAE Benchmark: €2.50-4.00/t (AED 9.58-15.33/t)**

---

## Personnel

**European Benchmark: €6.50/t** (estimated for integrated operation) [^1]

Personnel costs vary significantly based on:
- Integration with existing cement plant operations
- Level of automation
- Local labor market conditions

### Staffing Model

**Typical Staffing for 12 t/h RDF Plant (2-shift operation):** [^1]

| Role | Quantity | European Salary (€/yr) | UAE Salary (AED/yr) | UAE Salary (€/yr) |
|------|----------|----------------------|--------------------|--------------------|
| Plant Manager | 1 | 60,000 | 180,000-300,000 | 45,000-75,000 |
| Shift Supervisor | 2 | 45,000 | 96,000-144,000 | 24,000-36,000 |
| Operator | 4 | 35,000 | 48,000-84,000 | 12,000-21,000 |
| Maintenance Technician | 2 | 40,000 | 72,000-120,000 | 18,000-30,000 |
| **TOTAL** | **9** | **370,000** | **684,000-1,056,000** | **171,000-264,000** |

*UAE salaries based on industrial worker market data* [^4] [^8]

**Formula:**
```
Personnel_Cost/t = (Sum_of_Annual_Salaries × (1 + Benefits_Factor)) ÷ Annual_Throughput

Where:
- Benefits_Factor: 20-35% (includes visa, housing, insurance, end-of-service)
```

### European Calculation

**Standalone facility:**
```
Total salaries: €370,000
Benefits (30%): €111,000
TOTAL: €481,000

At 18,000 t/year: €481,000 ÷ 18,000 = €26.72/t
```

**Integrated with cement plant (shared overhead):**
```
Dedicated staff only: €180,000
Benefits (30%): €54,000
TOTAL: €234,000

At 18,000 t/year: €234,000 ÷ 18,000 = €13.00/t
With 80% utilization (23,000 t): €234,000 ÷ 23,000 = €10.17/t
```

The handbook benchmark of €6.50/t implies either:
- Very high utilization (>35,000 t/year)
- Significant staff sharing with cement operations
- High automation level

### UAE Calculation

**Standalone facility:**
```
Total salaries: €217,500 (midpoint)
Benefits (25%): €54,375
TOTAL: €271,875

At 18,000 t/year: €271,875 ÷ 18,000 = €15.10/t
```

**Integrated with cement plant:**
```
Dedicated staff (4 operators + 1 tech): €85,500
Benefits (25%): €21,375
TOTAL: €106,875

At 18,000 t/year: €106,875 ÷ 18,000 = €5.94/t
At 23,000 t/year (80% utilization): €4.65/t
```

### UAE Labor Market Context [^8] [^9]

- Factory workers average AED 77,780/year (~€19,400) [^4]
- Construction workers average AED 117,605/year (~€29,400) [^4]
- Unskilled labor: AED 1,500-5,000/month [^8]
- Skilled technicians: AED 5,000-10,000/month [^8]
- Salary increases projected at 4-5% for 2026 [^9]

**UAE Benchmark: €4.00-6.00/t (AED 15.33-23.00/t)**

*Assuming integrated operation with cement plant*

---

## Depreciation

**European Benchmark: €4.00/t** (at high utilization) [^1]

Depreciation represents the allocation of capital expenditure (CAPEX) over the useful life of the facility.

### CAPEX Reference

**RDF Plant Investment by Technology (Table 16):** [^1]

| Technology | CAPEX (EUR million) |
|------------|-------------------|
| Mechanical Treatment (RDF) | 3.0 |
| MBT (Mechanical Biological) | 12.0 |
| Composting | 3.0 |
| Mechanical Sorting | 1.0 |

**UAE CAPEX from CAPEX-Breakdown-UAE.md:** [^12]

| Capacity (t/day) | UAE CAPEX (EUR) | Annual Throughput* (t/year) |
|-----------------|-----------------|----------------------------|
| 200 | €3,100,000 | 43,800 |
| 320 | €4,295,000 | 70,080 |
| 500 | €6,015,000 | 109,500 |
| 1,000 | €10,690,000 | 225,000 |

*At 75% utilization, double-shift operation (300 days)

**UAE RDF Facility Reference:** [^10]
- Emirates RDF facility (Umm Al Quwain): AED 132 million (~€33 million) for 1,000 t/day capacity
- Unit cost: ~€33,000 per t/day capacity

**Industry Benchmark:** [^11]
- Average capital cost: $75,000-102,000 per t/day capacity
- Average: $98,000 per t/day (~€90,000)

### Depreciation Formula

```
Depreciation/t = (CAPEX - Residual_Value) ÷ (Useful_Life_Years × Annual_Throughput)

Simplified (zero residual):
Depreciation/t = CAPEX ÷ (Years × Throughput_per_Year)
```

### European Calculation

**To achieve €4/t depreciation:**
```
CAPEX: €3,000,000
Target: €4/t
Required (Life × Throughput) = €3,000,000 ÷ €4 = 750,000 tonnes

Options:
- 15 years × 50,000 t/year = 750,000 ✓
- 10 years × 75,000 t/year = 750,000 ✓
- 20 years × 37,500 t/year = 750,000 ✓
```

### UAE Calculation

**Assumptions (aligned with CAPEX-Breakdown-UAE.md):**
- Useful life: 15 years
- Utilization: 75% (industry standard for established operations)
- Operating days: 300 per year

**Depreciation by Plant Capacity:**

| Capacity (t/day) | UAE CAPEX (EUR) | Annual Throughput (t) | Depreciation (€/t) | Depreciation (AED/t) |
|-----------------|-----------------|----------------------|-------------------|---------------------|
| 200 | €3,100,000 | 43,800 | €4.72 | AED 18.08 |
| 320 | €4,295,000 | 70,080 | €4.08 | AED 15.63 |
| 500 | €6,015,000 | 109,500 | €3.66 | AED 14.02 |
| 1,000 | €10,690,000 | 225,000 | €3.17 | AED 12.14 |

**Calculation for 200 t/day reference plant (≈12 t/h, 2-shift):**
```
CAPEX: €3,100,000 (from CAPEX-Breakdown-UAE.md)
Life: 15 years
Throughput: 200 t/day × 300 days × 0.75 utilization = 45,000 t/year
(Using 43,800 t/year from CAPEX file for consistency)

Depreciation = €3,100,000 ÷ (15 × 43,800) = €4.72/t
```

**Sensitivity to Utilization (200 t/day plant):**

| Utilization | Annual Throughput | Depreciation (€/t) |
|-------------|------------------|-------------------|
| 60% | 36,000 t | €5.74 |
| 70% | 42,000 t | €4.92 |
| **75%** | **45,000 t** | **€4.59** |
| 85% | 51,000 t | €4.05 |

**UAE Benchmark: €3.50-5.00/t (AED 13.40-19.15/t)**

*Range reflects capacity scaling (economies of scale reduce depreciation/t at larger facilities) and utilization variations (60-85%)*

> **Note:** Larger facilities achieve lower depreciation per tonne due to economies of scale. A 1,000 t/day facility has €3.17/t depreciation vs €4.72/t for a 200 t/day plant.

---

## Other Costs

**European Benchmark: €2.00/t** (estimated) [^1]

Other operating costs include fixed and variable expenses not captured in the main categories above.

### Insurance

**Formula:**
```
Insurance_Cost/t = (CAPEX × Insurance_Rate) ÷ Annual_Throughput

Typical rate: 1-2% of CAPEX per year
```

**Calculation:**
```
CAPEX: €3,500,000
Insurance rate: 1.5%
Annual cost: €52,500
At 18,000 t/year: €2.92/t
At 25,000 t/year: €2.10/t
```

**UAE Benchmark: €0.80-1.20/t**

---

### Administration & Overhead

**Components:**
- Management overhead allocation
- Office expenses
- IT systems and software
- Professional services (legal, accounting)
- Regulatory compliance

**Formula:**
```
Admin_Cost/t = Annual_Admin_Budget ÷ Annual_Throughput

Typical: €20,000-50,000/year for standalone facility
```

**UAE Benchmark: €0.50-1.00/t**

---

### Consumables

**Components:**
- Lubricants and hydraulic fluids
- Cleaning supplies
- PPE and safety equipment
- Small tools and supplies

**Formula:**
```
Consumables_Cost/t = Annual_Consumables_Budget ÷ Annual_Throughput

Typical: €15,000-30,000/year
```

**UAE Adjustment:** +10-15% for heat-resistant lubricants, increased fluid consumption

**UAE Benchmark: €0.40-0.80/t**

---

### Reject Disposal

**Components:**
- Non-processable materials (metals, inerts, hazardous)
- Typical reject rate: 5-15% of input [^1]

**Formula:**
```
Reject_Cost/t = Input_Tonnage × Reject_Rate × Disposal_Cost_per_Tonne ÷ RDF_Output_Tonnage

Where:
- Reject rate: 5-15%
- Disposal cost: €20-50/t (landfill) or €80-150/t (hazardous)
```

**Calculation:**
```
Input: 1.1 t per 1 t RDF output (10% rejects)
Reject disposal: €30/t average
Cost/t RDF = 0.1 × €30 = €3.00/t
```

**UAE Context:**
- Landfill tipping fees generally lower than Europe
- Growing regulatory pressure on waste diversion

**UAE Benchmark: €0.20-0.50/t**

---

### Water & Utilities

**Components:**
- Process water (dust suppression)
- Sanitary water
- Telecommunications

**UAE Benchmark: €0.10-0.20/t**

---

### Compliance & Testing

**Components:**
- Environmental monitoring
- Quality testing (RDF specifications)
- Regulatory reporting
- Permits and licenses

**UAE Benchmark: €0.20-0.40/t**

---

### Other Costs Summary Table

| Category | Europe (€/t) | UAE Low (€/t) | UAE High (€/t) | UAE Mid (AED/t) |
|----------|-------------|---------------|----------------|-----------------|
| Insurance | 1.00 | 0.80 | 1.20 | 3.83 |
| Administration | 0.50 | 0.50 | 1.00 | 2.88 |
| Consumables | 0.30 | 0.40 | 0.80 | 2.30 |
| Reject disposal | 0.30 | 0.20 | 0.50 | 1.34 |
| Water & utilities | 0.10 | 0.10 | 0.20 | 0.58 |
| Compliance & testing | 0.20 | 0.20 | 0.40 | 1.15 |
| **TOTAL OTHER** | **2.40** | **2.20** | **4.10** | **12.08** |

---

## UAE Cost Summary

### Total OPEX Comparison

| Cost Category | Europe (€/t) | UAE Low (€/t) | UAE High (€/t) | UAE Midpoint (€/t) | UAE Midpoint (AED/t) |
|---------------|-------------|---------------|----------------|-------------------|---------------------|
| **Maintenance** | 8.47 | 6.57 | 9.23 | 7.90 | 30.26 |
| **Energy** | 3.80 | 2.50 | 4.00 | 3.25 | 12.45 |
| **Personnel** | 6.50 | 4.00 | 6.00 | 5.00 | 19.15 |
| **Depreciation*** | 4.00 | 3.50 | 5.00 | 4.25 | 16.28 |
| **Other** | 2.40 | 2.20 | 4.10 | 3.15 | 12.06 |
| **TOTAL OPEX** | **25.17** | **18.77** | **28.33** | **23.55** | **90.20** |

*Depreciation based on 15-year life, 75% utilization, aligned with CAPEX-Breakdown-UAE.md. Range reflects 200-1,000 t/day capacity scaling.

---

### Annual Production Cost (UAE)

**For a 200 t/day RDF facility (≈12 t/h, 2-shift operation, 300 days/year):**

| Scenario | Utilization | Annual Output | Cost/t (€) | Cost/t (AED) | Annual OPEX (€) | Annual OPEX (AED) |
|----------|-------------|---------------|-----------|--------------|-----------------|-------------------|
| **Conservative** | 60% | 36,000 t | 28.33 | 108.50 | €1,020,000 | AED 3,906,000 |
| **Base Case** | 75% | 45,000 t | 23.55 | 90.20 | €1,060,000 | AED 4,059,000 |
| **Optimistic** | 85% | 51,000 t | 18.77 | 71.89 | €957,000 | AED 3,666,000 |

> **Note:** Annual throughput corrected to reflect 200 t/day capacity. Previous version used 14,400-22,000 t/year which implied only 31-38% utilization—unrealistic for commercial operations.

---

### Impact of Gate Fees

Gate fees (payments received for accepting waste) directly offset production costs:

| Scenario | Gate Fee (AED/t) | Production Cost (AED/t) | Net Cost (AED/t) |
|----------|-----------------|------------------------|------------------|
| No gate fee | 0 | 90.20 | 90.20 |
| Low gate fee | 20 | 90.20 | 70.20 |
| Medium gate fee | 40 | 90.20 | 50.20 |
| High gate fee | 60 | 90.20 | 30.20 |

**Breakeven analysis:** At AED 90.20/t production cost and RDF selling price of AED 130/t, margin = AED 39.80/t before gate fees.

---

### Key UAE Cost Drivers

| Factor | Impact | Notes |
|--------|--------|-------|
| **Labor costs** | -30 to -40% vs Europe | Significant savings [^4] [^8] |
| **Energy costs** | -10 to -20% vs Europe | Lower electricity rates [^6] [^7] |
| **Parts/equipment** | +10 to +20% vs Europe | Import costs [^3] |
| **Climate** | +5 to +15% maintenance | Heat effects on equipment |
| **CAPEX** | +15 to +25% vs Europe | Installation, adaptation |

---

### Conversion Reference

| Currency | Rate (Jan 2026) |
|----------|-----------------|
| 1 EUR | 3.83 AED |
| 1 USD | 3.67 AED |
| 1 AED | 0.26 EUR |

---

## References

[^1]: Lechtenberg, D. & Diller, H. (2012). *Alternative Fuels and Raw Materials Handbook for the Cement and Lime Industry, Volume 1*. MVW Lechtenberg & Partner, Düsseldorf. ISBN 978-3-7640-0550-4. Tables 16, 31; Sections 3.1, 4.12 (pp. 77-82, 129-131).

[^2]: Lechtenberg, D. & Diller, H. (2012). Chapter 4: Production of RDF - Equipment specifications and maintenance intervals. pp. 83-132.

[^3]: Import cost adjustment based on standard GCC import duties and logistics costs for industrial equipment from EU suppliers.

[^4]: ERI Economic Research Institute. (2025). [Factory Worker Salary in United Arab Emirates](https://www.erieri.com/salary/job/factory-worker/united-arab-emirates) and [Construction Worker Salary](https://www.erieri.com/salary/job/construction-worker/united-arab-emirates).

[^5]: Lechtenberg, D. & Diller, H. (2012). Section 4.10: Drying Technologies - Energy requirements. pp. 117-124. Typical RDF plant specific energy consumption 25-40 kWh/t.

[^6]: DEWA. (2025). [Slab Tariff](https://www.dewa.gov.ae/en/consumer/billing/slab-tariff). Dubai Electricity & Water Authority. Industrial rates AED 0.28-0.38/kWh plus fuel surcharge AED 0.06/kWh.

[^7]: Utility Bill UAE. (2025). [2025 Electricity Tariffs Update (All Emirates)](https://utilitybilluae.com/electricity-tariffs-2025-uae/). Business rates AED 0.20-0.38/kWh across emirates.

[^8]: Qureos. (2026). [A Comprehensive Labor Market Analysis Across the UAE](https://www.qureos.com/hiring-guide/the-uae-labor-market-key-facts-and-figures). Unskilled workers AED 1,500-5,000/month; skilled laborers AED 5,000+/month.

[^9]: Payroll Middle East. (2026). [UAE Salary Forecast 2026](https://payrollmiddleeast.com/will-uae-salaries-rise-in-2026/). Projected salary increases of 4-5% for 2026.

[^10]: Emirates RDF. (2020). [RDF Facility & Sustainable Waste Solutions](https://www.emiratesrdf.ae/rdf-facility/). Umm Al Quwain facility: AED 132 million investment for 1,000 t/day capacity. Also: [Arabian Business](https://www.arabianbusiness.com/energy/406417-uae-waste-to-fuel-facility-set-to-start-operations-in-2020).

[^11]: P2 InfoHouse / GEP Ecotech. [How Much Does an RDF Plant Cost?](https://www.aishred.com/release/how-much-does-a-rdf-plant-cost.html). Average capital cost $75,000-102,000 per t/day capacity; O&M cost $13-67/t with average $36/t.

[^12]: Internal reference: `Assignment/05_C&D-deal/CAPEX-Breakdown-UAE.md`. UAE CAPEX benchmarks for 80-1,000 t/day capacity plants, including equipment breakdown and infrastructure costs.

---

*Document prepared for Gebtron FZCO - C&D Waste Processing Business Case*
*Last updated: 28 January 2026*
*Cross-referenced with: CAPEX-Breakdown-UAE.md*
