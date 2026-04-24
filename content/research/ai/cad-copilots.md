---
title: "CAD Copilot Landscape"
---

# CAD Copilot Landscape

**Source(s):** Autodesk, Siemens, PTC, Dassault Systèmes + Engineering.com, DEVELOP3D, arXiv (see Citations)
**Last verified:** 2026-04-23
**Purpose:** Act II Layer 2 (Design / Copilot in CAD) slides for the AI-Augmented Engineer deck
**Reading time:** ~7 min

---

## Read when
You are deciding which CAD AI copilot (if any) AFW should pilot in FY26 for conveyor, silo, feeder, and cement-plant-layout design work. This is a narrowing exercise, not a commitment.

## Key takeaway
AI in CAD split into two categories during 2025-2026: (a) **natural-language assistants** that answer "how do I" questions and execute macros — real, shipping, useful on day one; and (b) **generative geometry** that designs the part for you — still mostly limited to organic brackets, not heavy-steel structures like conveyor frames or silo shells. For AFW's use case, the first category is ready; the second is not. **Autodesk Fusion Assistant** (if AFW is on Inventor/Fusion) or **Siemens Designcenter NX Copilot** (if heavier NX user) are the only two worth a Phase 2 evaluation.

---

## Executive Summary

Every major CAD vendor shipped an AI assistant between mid-2025 and April 2026. The assistants are broadly similar: chat-based, documentation-aware, can execute commands or scripts. Differentiation is in (1) whether the copilot can actually *write geometry* vs. just *navigate the UI*, and (2) whether generative design has moved beyond topology optimisation of brackets. For AFW's bulk-material-handling context: copilots will speed up drawing cleanup, BOM queries, and script automation by 20-40%, but no vendor today will "design a conveyor frame" from a natural-language prompt.

### Key Metrics
- **5 major vendors** now ship a CAD copilot in GA or open beta
- **Autodesk's April 2026 update** is the first to ship "prompt-to-API" — the assistant writes and executes Fusion-API scripts from plain language
- **Generative design** remains focused on topology optimisation; thermal physics added in Creo 12 (Jun 2025) is the newest primitive
- **Open-source text-to-CAD** hit 69.3% exact-match on the Text2CAD benchmark — research-grade, not production

---

## Landscape overview

Three groups. **Shipping in production (serious):** Autodesk (Fusion/Inventor Assistant with prompt-to-API, April 2026), Siemens (Designcenter NX Copilot, Dec 2025; NX CAM Copilot beta). **Shipping but narrow:** PTC Onshape AI Advisor (GA 2025, answers-only, no geometry generation); PTC Creo 12 (Jun 2025, GD with thermal physics; Creo AI Assistant in Creo+ 13 beta). **Mostly announcements (marketing):** Dassault Systèmes — Aura copilot shipped 2025, but headline agents **Leo** (engineering) and **Marie** (materials) scheduled for **summer 2026**, announced at 3DEXPERIENCE World Feb 2026. Third-party bolt-ons (Leo AI, MecAgent) exist for SolidWorks users who cannot wait.

## Vendor comparison

| Vendor | AI feature | Launch | Pricing tier | Open API | Typical user | Generative capability |
|--------|------------|--------|--------------|----------|--------------|-----------------------|
| **Autodesk Fusion / Inventor** | Autodesk Assistant (prompt-to-API, image gen) | Apr 2026 update | Fusion + AI Automation add-on; Inventor sub | Yes (Fusion API; APS) | Mid-market MechE, manufacturing | Yes — topology opt, clustering, recommendation engine. Neural CAD foundation models announced AU 2025, not yet GA |
| **Siemens Designcenter NX** | NX Design Copilot + NX CAM Copilot + NX X AI Chat | Dec 2025 release; CAM Copilot GA end-2025 | NX X (SaaS) / NX perpetual; Copilot in NX X Essentials | Yes (NX Open, Teamcenter) | Heavy industry, aerospace, auto | Limited — copilot is NL; GD is a separate module. NX CAM Copilot claims 80% CAM-time saving |
| **PTC Creo** | Creo AI Assistant (Creo+ 13 beta) + GD with thermal | Creo 12 GA Jun 2025; Assistant beta | Creo+ SaaS / Creo perpetual; GD add-on | Yes (Creo Toolkit, Windchill REST) | Industrial machinery, auto Tier-1s | Yes — topology opt + thermal (newest). Ansys real-time sim embedded. Mature for brackets/housings |
| **PTC Onshape** | Onshape AI Advisor | GA 2025 (latest Q1 2026) | Onshape Pro/Enterprise | Yes (REST, FeatureScript) | Startups, cloud-native, education | **No** — Advisor does NOT do GD. FeatureScript autocomplete + AI search "set to release". Agent workflows on roadmap |
| **Dassault SolidWorks / 3DX** | Aura (2025) + Leo + Marie (summer 2026) + Design Inspection / Command Predictor / Picture-to-Sketch (beta) | SW 2026 GA Oct 2025; Leo/Marie summer 2026 | 3DEXPERIENCE seat required | Yes (EKL, CAA, 3DX) | SMB MechE, consumer products | Limited — xGenerative on 3DX; SW desktop has no native GD. 2026 helpers are Fastener Recognition etc |
| **Open-source (CadQuery + LLMs)** | CQAsk, Text-to-CadQuery, CAD-Coder | Research, active 2025-2026 | Free (MIT/Apache) | Yes (Python) | Researchers, ML engineers | Experimental — 69.3% exact-match on Text2CAD. Simple parts only; unreliable for assemblies |

## Generative design — state of the art in 2026

**What it can really do:**
- Topology optimisation of a single part with defined load cases, keep-outs, and manufacturing constraints (3-axis mill, additive, casting). Mature since ~2018. Creo 12 added **thermal** as an objective alongside weight/stiffness in Jun 2025.
- Cluster and rank hundreds of variants against manufacturing method + cost (Fusion's clustering + recommendation engine).
- Rapid topology exploration on brackets, chassis nodes, heat exchangers, drone frames, implants. Every vendor demo uses one of these.

**What it cannot do (hype):**
- **Design a conveyor frame, transfer chute, or silo shell from a prompt.** These are standards-driven (EN 1993, DIN 22101, AS 3774) where the hard part is not "minimise mass" — it is hopper-angle selection for arching/ratholing, welded-joint fatigue, maintenance access, and plant-layout compliance. No GD engine encodes these today.
- Generate multi-body assemblies with kinematics, fasteners, and standards-compliant weldments. GD outputs organic geometry that then needs *manual* re-modelling as weldments anyway.
- Text-to-CAD (CadQuery research) reaches ~70% on simple benchmark parts. Not ready for production assemblies.

**Verdict for AFW:** GD is useful for *components inside* a conveyor — a gearbox housing, a pulley bracket, a custom feeder spout — not the conveyor itself. Near-term leverage is **natural-language assistants writing macros**: auto-generate drawings, populate title blocks, BOM reconciliation, parametric family expansion. Autodesk's April 2026 prompt-to-API turns "export a PDF of every sheet with revision C and email them" into a live script. That saves AFW draughtsmen real hours per week.

## Likely AFW stack + roadmap

AFW's CAD vendor is not confirmed in the engagement documents. Based on typical Egyptian/MENA bulk-material-handling offices:
- **Most likely (60%):** Autodesk Inventor + AutoCAD (dominant in Egypt's heavy-industry engineering offices).
- **Possible (25%):** SolidWorks (popular with SME MechE teams in MENA).
- **Less likely (15%):** Siemens NX (typically only in larger EPCs).

**Action item:** confirm with Mohamed Youssef which CAD AFW uses — changes the Phase 2 recommendation.

**If Inventor/Fusion (most likely):** roadmap is Autodesk Assistant (Inventor 2026 + Fusion April 2026). Prompt-to-API is the killer feature. GD add-on only unlocks value for small components. Neural CAD foundation model (AU 2025 announcement) is the medium-term bet — Autodesk is investing heaviest.

**If SolidWorks:** the wait is painful — Leo (engineering agent) is summer 2026. SW 2026 meanwhile ships useful-but-narrow features (Fastener Recognition, Design Inspection, Command Predictor). Third-party **Leo AI** offers a copilot today.

## Recommendation for Phase 2 evaluation

Narrow to **two vendors** for a pilot shortlist (not a commitment):

1. **Autodesk Fusion Assistant + Inventor 2026** — highest probability AFW already has licenses, lowest switching cost, and April 2026 prompt-to-API is the most production-ready "copilot writes code" feature available. Pilot scope: automate a repetitive drawing-pack workflow (e.g., silo detail drawings with standard weldment callouts). Target: 30% time reduction on a test project.

2. **Siemens Designcenter NX Copilot** — only worth evaluating if AFW has NX seats or is considering migration for larger cement-plant projects. NX CAM Copilot's 80% time-save claim is the most aggressive in the market; if AFW does in-house fabrication CAM, this is the single highest-leverage tool.

**Exclude from Phase 2:**
- Dassault Leo/Marie — flagship agents not shipping until summer 2026; revisit Q4 2026.
- Onshape AI Advisor — no generative geometry, no prompt-to-API; answer bot, not a design tool.
- Open-source CadQuery + LLM — research-grade. Watching brief for 2027 revisit.

**Open question before the deck:** does AFW do any fabrication CAM in-house, or is all manufacturing outsourced? If outsourced, the CAM-copilot argument collapses and Autodesk becomes the only pilot candidate.

---

## Citations

- [Autodesk Fusion AI Automation — features page](https://www.autodesk.com/products/fusion-360/ai-automation)
- [Autodesk News — neural CAD foundation models (AU 2025)](https://adsknews.autodesk.com/en/news/upcoming-3d-generative-ai-foundation-models/)
- [Autodesk Fusion April 2026 Product Update](https://www.autodesk.com/products/fusion-360/blog/april-2026-product-update-whats-new/)
- [Siemens Designcenter NX AI page](https://www.siemens.com/en-us/products/designcenter/nx-cad-software/ai/)
- [Siemens press — AI copilot in NX summer 2025](https://news.siemens.com/en-us/siemens-designcenter-nx-summer-2025/)
- [Siemens NX Design blog — December 2025 release](https://blogs.sw.siemens.com/nx-design/december-2025-release-designcenter-nx-download-now/)
- [Engineering.com — Siemens NX CAM Copilot](https://www.engineering.com/siemens-nx-is-getting-an-ai-copilot-for-cam/)
- [PTC — Creo 12 launch (June 2025)](https://www.ptc.com/en/news/2025/ptc-launches-creo-12)
- [PTC — Onshape AI Advisor announcement](https://www.ptc.com/en/news/2025/ptc-announces-onshape-ai-advisor-and-onshape-government)
- [Onshape — AI Advisor feature page](https://www.onshape.com/en/features/ai-advisor)
- [Dassault Systèmes — SOLIDWORKS 2026 announcement](https://www.3ds.com/newsroom/media-alerts/dassault-systemes-announces-solidworks-2026-ai-powered-design-and-collaboration-generative-economy)
- [DEVELOP3D — Event report 3DEXPERIENCE World 2026](https://develop3d.com/cad/event-report-3dexperience-world-2026/)
- [Engineering.com — 10 AI tools coming to SolidWorks in 2026](https://www.engineering.com/10-ai-tools-coming-to-solidworks-in-2026/)
- [arXiv — Text-to-CadQuery paper (May 2025)](https://arxiv.org/abs/2505.06507)
- [GitHub — OpenOrion/CQAsk](https://github.com/OpenOrion/CQAsk)
- [Hoverdale — Conveyor & Material Handling Trends for 2026](https://www.hoverdale.com/conveyor-material-handling-trends-for-2026-whats-next-for-the-industry/)
