# Highlights: Financial Modeling Line Items & Benchmarks

**Source Document:** Alternative Fuels and Raw Materials Handbook for the Cement and Lime Industry, Volume 1
**Authors:** Dirk Lechtenberg, Dr. Hansjörg Diller (MVW Lechtenberg & Partner)
**Published:** 2012, Düsseldorf, Germany
**ISBN:** 978-3-7640-0550-4

---

## Objective Statement

Extract all financial line items, benchmarks, and cost structures (OPEX/CAPEX) for different types of alternative fuel processing lines to support financial modeling for Gebtron's EAAS (Energy-As-A-Service) and equipment business.

---

## Key Findings

### 1. Investment Benchmarks by Technology Type (Table 16, p.79)

| Technology | Investment (EUR M) | Treatment Cost (EUR/t) | Product Value (EUR/t) |
|------------|-------------------|----------------------|---------------------|
| MBT (Mechanical Biological Treatment) | 12 | 60 | 0 |
| Composting | 3 | 10-15 | 0-15 |
| Aerobic/Anaerobic Digestion | 3.5 | 25 | 0 |
| Mechanical Sorting (Recyclables) | 1 | 10 | 30-400 |
| Mechanical Treatment (RDF Production) | 3 | 25-35 | 10-40 |

*Note: Based on European standards; investments scale with capacity*

### 2. RDF Plant Maintenance Costs (Table 31, p.129-130)

**Reference Plant:** 12 t/h RDF production capacity, 2-shift operation

| Equipment | Maintenance Cost (EUR/t) |
|-----------|-------------------------|
| Pre-shredder | 1.34 |
| Overbelt magnet | 0.15 |
| Heavy fraction separator | 0.28 |
| Two final shredders | 6.10 |
| 6 conveyor belts | 0.60 |
| **Total** | **8.47** |

**Cost Breakdown by Category:**
- Screen wear: ~20%
- Scraper/bearings: ~20%
- Sealings/oils: ~20%
- Shredder knives: **40%** (major cost driver)

### 3. RDF Production Economics (p.130-131)

| Parameter | Value |
|-----------|-------|
| Neutral production cost (no gate fee) | EUR 25/t |
| Production cost range | EUR 15-45/t |
| RDF selling price assumption | EUR 35/t (incl. transport) |
| Discount rate for DCF | 8% |
| **Payback period (no gate fee)** | **<3 years** |
| **Payback period (with gate fee)** | **~2 years** |
| Cost with gate fee | EUR 20.15/t |

### 4. Cement Industry CAPEX Benchmarks (p.287)

| Asset | Investment | Notes |
|-------|------------|-------|
| New cement plant | >EUR 150M | Per 1 million tonnes annual capacity |
| Cement plant payback | ~3 years | Equivalent to turnover |
| Integrated recycling plant (100kt/yr) | ~EUR 5M | Mechanical treatment, sorting, RDF |

### 5. Fuel Substitution Economics

#### Thermal Substitution Scenarios (Tables 12-15, p.78)

**Reference Plant:** 3,100 t/d clinker, 330 d/a operation, 800 kcal/kg specific heat consumption

| Scenario | Coal Sub. Rate | RDF Rate (t/a) | Savings (EUR/a) |
|----------|---------------|----------------|-----------------|
| 100% Coal baseline | 0% | 0 | 0 |
| 30% RDF (CV 4,500) | 30% | 54,648 | 1,929,758 |
| 35% RDF (CV 4,500) | 35% | 54,648 | 392,783 |
| 60% RDF (CV 3,000) | 60% | 81,972 | 973,418 |

*Assumptions: Coal NCV 6,400 kcal/kg, RDF price EUR 35/t*

#### Fuel Substitution Factors (Table 105, p.431)

| Fuel | Calorific Value (kcal/kg) | Factor vs Coal | Factor vs Petcoke |
|------|--------------------------|----------------|-------------------|
| Straw | 4,200 | 1.45 | 1.95 |
| Coal | 6,100 | 1.00 | - |
| Petcoke | 8,200 | - | 1.00 |
| Scrap Tyres | 6,450-8,000 | 0.76-0.95 | 1.03-1.27 |

### 6. Drying Technology Economics (p.117-124)

| Parameter | Value |
|-----------|-------|
| Heat requirement | ~850 kWh/t water evaporated |
| Electrical requirement | 40-80 kWh/t water evaporated |
| Hot gas generation | 140-530 kWh/t H₂O |
| Evaporation capacity | 2.5-7 t water/hour |
| Residence time (drum dryer) | 10-20 minutes |
| Gas temperature | 300-400°C |

### 7. Pricing Framework for AF Contracts (p.289-291)

**Pricing Formula (Joint Venture Model):**
```
P_RDF = P_min + 0.5 × (sum_profits - cement_plant_RDF_operating_costs + cement_plant_fuel_savings)
```

**P_min Components:**
- Gate fees minus transportation costs
- As long as this involves pure calorific value considerations

**Price Adjustment Parameters:**
- Moisture content
- Calorific value
- Chlorine content
- Quality consistency

**Contract Elements:**
- Supply/acceptance volume
- Supply/acceptance period (supply planning)
- Form of supply
- Logistics (planning, type)
- Price and payment conditions
- Contract period of validity
- Quality, sampling, schedule, and cost of analyses

---

## Evidence Table

| Quote/Data | Page | Relevance to Financial Modeling |
|------------|------|--------------------------------|
| "Investments in waste processing and RDF production plants are mainly driven by... fossil fuel prices above 3.0-3.5 EUR/GJ" | 77 | Key investment trigger threshold |
| "Treatment costs EUR 10-60/tonne" by technology | 79 | OPEX benchmarks by plant type |
| "Investment EUR 1-12M" by technology | 79 | CAPEX benchmarks by plant type |
| "Total maintenance EUR 8.47/t" for 12t/h RDF plant | 130 | Detailed OPEX breakdown |
| "Neutral production costs EUR 25/t RDF" | 130 | Base production cost benchmark |
| "Payback period slightly less than three years" | 130 | ROI benchmark at 8% discount |
| "Cost drops to EUR 20.15/t if gate fee for input material of EUR 5" | 131 | Gate fee sensitivity |
| "New cement plant stands on average at above EUR 150m per million tonnes" | 287 | Industry CAPEX reference |
| "Integrated recycling plant... with capacity of 100,000 tonnes input waste per year will only cost around EUR 5m" | 287 | Recycling plant CAPEX |
| "RDF treatment costs - depending on waste involved and treatment technology applied - range between EUR 15-45" | 290 | Treatment cost range |
| "1.45 tonnes of straw are needed" to substitute 1 tonne coal | 431 | Fuel substitution ratio |

---

## Recommendations for Financial Modeling

### For EAAS (Energy-As-A-Service) Models:

1. **Base CAPEX assumptions** on Table 16 (p.79) scaled for capacity
2. **Use EUR 25/t as neutral production cost** baseline, adjust for local factors
3. **Model gate fee scenarios** from EUR 0-20/t to show sensitivity
4. **Apply 8% discount rate** for DCF as industry standard
5. **Target 2-3 year payback** as bankable threshold

### For Equipment Quotations:

1. **Shredder maintenance = 40% of total OPEX** - critical for pricing
2. **Total maintenance EUR 8-10/t** as benchmark for 12t/h capacity
3. **Scale maintenance costs** inversely with capacity utilization

### For Fuel Substitution Business Cases:

1. **Use substitution factors** from Table 105 for different AF types
2. **Model CO₂ savings** at 96kg CO₂/GJ for coal baseline
3. **Include transport costs** in delivered fuel pricing
4. **Apply bonus/malus** for quality variations (moisture, CV, chlorine)

---

## Key Data Sources in Document

| Data Type | Location | Table # |
|-----------|----------|---------|
| Technology investment comparison | p.79 | Table 16 |
| Thermal substitution savings | p.78 | Tables 12-15 |
| RDF plant maintenance costs | p.129-130 | Table 31 |
| Profitability/DCF analysis | p.130 | Figure 23 |
| Fuel substitution factors | p.431 | Table 105 |
| Olive residue calorific values | p.360 | Tables 74-75 |
| Scrap tyre properties | p.389 | Table 90 |
| Straw bulk densities | p.429 | Table 104 |

---

*Generated from: Alternative Fuels and Raw Materials Handbook (2012)*
*Extraction Date: January 2026*
