---
title: "Humans + AI as a Team Unit"
---

# Humans + AI as a Team Unit

**Source(s):** McKinsey State of AI (2025), BCG/HBS "Jagged Frontier" (Dell'Acqua et al., 2023), BCG AI at Work 2025, HBR (Mar/Apr 2026), MIT Sloan (Jan 2026), Ethan Mollick, Randazzo et al. (HBS 2024), Anthropic Economic Index (Mar 2026), GitHub Copilot RCTs (Peng 2023; Cui 2024).
**Last verified:** 2026-04-23
**Purpose:** Act III (The AI Coworker) — the payoff section of the "AI-Augmented Engineer" deck for Gebtron/AFW.
**Reading time:** ~5 min

---

## Read when
You need to argue the 2026 shift is not "better tools," it is a **new unit of production**: engineer + AI as a team. Reframes hiring, training, comp at AFW. Pair with `openclaw.md`, `cad-copilots.md`, `04.Team-v0.md`.

## Key takeaway
The biggest productivity lifts in the literature come from people who **collaborate** with AI — delegating, iterating, treating it as a junior teammate. The right question is no longer "which tool do we buy?" It is **"what does a two-person unit of engineer + AI look like at AFW, and who owns the output?"**

---

## Executive Summary

For a bulk-material-handling engineer the 2026 frontier is not a copilot button — it is a **merged work unit.** Engineer brings judgement, client context, safety accountability, IP ownership. AI brings draft calcs, docs, code, literature review, first-pass design variants. The billable entity is the pair.

### Key Metrics
| Metric | Value | Source |
|---|---|---|
| Consultant speed / quality / skill-level lift | +25.1% / +40% / +43% | BCG/HBS RCT, n=758, Sep 2023 |
| GitHub Copilot task speed | +55.8% | Peng et al., Feb 2023, n=95 |
| Copilot field-study task count | +26.08% | Cui et al., 2024 |
| Orgs using gen AI / with measurable EBIT | 78% / ~5.5% | McKinsey, Mar 2025 |
| Claude.ai: Computer/Math task share | 35% | Anthropic, Feb 2026 (~1M convos) |
| Workers preferring AI-as-collaborator | 94% | HBR/Harvard, 2026 |

---

## The "coworker" frame

The "AI as tool" frame predicts: *buy a license, measure keystrokes, done.* It has failed empirically. McKinsey's **State of AI 2025** (n≈1,500 orgs) found **78% use gen AI in at least one function, but only ~5.5% see measurable EBIT impact.** The gap is workflow redesign — winners re-architect the unit of work.

**BCG AI at Work 2025** (~13,000 employees, 15 countries, Oct 2024): ~75% of regular AI-users describe it as a "coworker"; managers in that cohort are ~2x more likely to report output gains. Not assistant, not tool — **coworker**.

MIT Sloan (Jan 2026): Ramakrishnan — *"LLM accuracy surpasses human accuracy in 2026 for many enterprise tasks."* Westerman — *"2026 will mark the shift from experimenting to viable solutions at scale."* Scaled value = redesigned teams.

## Centaur vs. cyborg vs. human-alone

Ethan Mollick (Wharton), *Centaurs and Cyborgs on the Jagged Frontier* (Sep 2023), expanded in Randazzo et al., *"Cyborgs, Centaurs and Self-Automators"* (HBS, 2024):

- **Human-alone:** no AI. AFW's current baseline.
- **Centaur (clear handoffs):** engineer decides which sub-tasks go to AI and switches cleanly. Size the conveyor by hand, hand BOM + proposal draft to AI. Visible line — like the mythological centaur.
- **Cyborg (deeply intertwined):** engineer and AI hand off inside a single thought. Engineer types half a line, AI completes, engineer tweaks, AI re-drafts. Thinking *with* the AI.

Mollick's key claim, validated by the BCG RCT: **cyborgs outperform centaurs inside the "Jagged Frontier"** (ragged boundary of AI capability), but **fall harder outside it** — they over-trust. The 2024 paper's third mode — **self-automator** — builds personal workflows running unsupervised. Biggest individual gain, biggest org risk (shadow automation).

**For AFW:** centaurs by default, cyborgs for drafting, **no self-automators on client deliverables, safety calcs, or sealed drawings.**

## Productivity data

1. **BCG/Harvard Jagged Frontier** — Dell'Acqua et al., Sep 2023, **n=758 BCG consultants**, randomised GPT-4 vs. GPT-4+training vs. control. Inside the frontier: +12.2% tasks, +25.1% speed, +40% quality. Outside (AI-deceptive tasks): AI users **19 pp *less* likely correct** than control. Bottom-half +43%, top-half +17% — skill-compressing.
2. **GitHub Copilot RCT** — Peng et al., Feb 2023, **n=95 pro devs**, HTTP-server task in JS. Treatment: **55.8% faster**. Cui et al. 2024 field RCT at Microsoft/Accenture: **+26.08% tasks/week**, biggest gains for juniors.
3. **Anthropic Economic Index, Mar 2026** — ~1M conversations, Feb 5-12 2026. 35% of Claude.ai work usage is Computer & Mathematical. Long-tenure users are **7 pp more likely to use Claude for work** and iterate rather than direct — the empirical shape of cyborg behaviour.
4. **HBR/KPMG longitudinal** — "What the Best AI Users Do Differently," HBR Mar/Apr 2026. **n=2,500, 8 months.** Top users treat AI as a **reasoning partner**, delegate complex tasks with clear objectives, use it as a general cognitive tool — not a shortcut.

**Engineering caveat:** none in bulk material handling. McKinsey 2024 reports **10-20% cost reductions** in software, manufacturing, IT from AI-integrated teams. Conservatively: expect **~20% throughput lift on proposal/drafting/BOM work** Year 1 at AFW, conditional on trained centaurs + workflow redesign.

## Implications for AFW

### Hiring criteria
Stop hiring for "knows AutoCAD / Inventor." Hire for **"high-quality AI collaboration on an unfamiliar engineering problem."** One-hour live exercise: candidate + Claude + unfamiliar silo-discharge problem → sizing memo. Evaluate **prompting, verification instinct, iteration comfort** — the cyborg behaviours that predict output. BCG's skill-compression implies senior + AI replaces two mid-levels on routine work; judgement at the top matters more.

### Training (Gebtron Academy)
Two tracks:
- **Centaur Foundations (all engineers, ~20h):** prompt patterns, verification, jagged-frontier awareness for bulk-material calcs, AI-drafted proposals / BOMs / client emails in EN/AR/DE.
- **Cyborg Workflows (selected seniors, ~40h):** AI-assisted conceptual design, Inventor/SolidWorks copilot integration, retrieval over 15 years of AFW drawings. Drill **when NOT to trust the AI** — wrong answers on Bernoulli, abrasion, bulk-density edge cases.

### Promotion paths
Add an **"AI-augmented engineer"** track alongside design, project, sales engineer. Criteria: measured throughput, peer-review pass rate, **ability to mentor others in AI collaboration.** Prevents the classic pattern where best AI-users quietly double output, then leave.

### Comp structure
If a centaur delivers 1.5x throughput, who captures the value? Three bad defaults: (a) engineer keeps it → leaves for a competitor; (b) firm keeps all → engineers don't invest in learning; (c) 50/50 → gaming. Defensible: fixed base, **variable bonus tied to project margin**, AI license cost passed through. Publish gains internally. Revisit every 12 months — frontier moves.

## Risks and boundaries

### Boundary 1 — Client-facing commitments
AI can draft a proposal, AI cannot sign one. Commercial commitments, delivery timelines, technical warranties must come from a named human. AFW policy: no AI text leaves the firm without a signed engineer review; no AI tool has email-send or e-sign authority. Rationale: UAE commercial-law accountability + GCC client expectations.

### Boundary 2 — Safety sign-off
Bulk material handling has real kill-risk: silo collapse, belt entrapment, combustible dust. The BCG study showed AI users **more confidently wrong** outside the jagged frontier. Structural, load-bearing, and combustion calcs must be **human-computed and human-signed** even if AI drafted them.

### Boundary 3 — IP ownership of AI-generated designs
UAE law (2026) still requires a human author for copyright; mixed-authorship rulings ongoing. AFW stance: (a) all AI output owned by Gebtron/AFW as work-for-hire via engineer contract; (b) no deliverable cites "generated by AI" without review; (c) no Gebtron drawings, customer data, or GECOS/Louise IP uploaded to third-party AI without enterprise data-residency (Claude for Work, Copilot Enterprise — not consumer ChatGPT). Also the firewall protecting the GECOS/Louise license post-merger.

### Boundary 4 — Junior skill atrophy
HBR (Feb 2026): *"AI now handles the messy, repetitive tasks that once built judgement. Juniors get productivity gains but can't tell whether AI work is any good."* Mitigation: rotate juniors through **AI-free months**. A firm of cyborgs who cannot sanity-check their AI costs more long-run than slower juniors short-run.

---

## Citations

1. Dell'Acqua, F. et al. (Sep 2023). *Navigating the Jagged Technological Frontier.* HBS WP 24-013. n=758 BCG consultants.
2. Peng, S., Kalliamvakou, E., Cihon, P., Demirer, M. (Feb 2023). *The Impact of AI on Developer Productivity: Evidence from GitHub Copilot.* arXiv:2302.06590. n=95.
3. Cui, Z. et al. (2024). *The Effects of Generative AI on High-Skilled Work: Three Field Experiments.*
4. Mollick, E. (Sep 2023). *Centaurs and Cyborgs on the Jagged Frontier.* One Useful Thing.
5. Randazzo, S. et al. (2024). *Cyborgs, Centaurs and Self-Automators.* HBS Working Paper.
6. McKinsey & Co. (Mar 2025). *The State of AI: How Organizations Are Rewiring to Capture Value.*
7. BCG (Oct 2024). *AI at Work 2025: Momentum Builds, But Gaps Remain.* ~13,000 employees, 15 countries.
8. Anthropic (Mar 2026). *Anthropic Economic Index Report: Learning Curves.* ~1M conversations.
9. Hermann, E., Puntoni, S., Morewedge, C. (Mar/Apr 2026). *Why Gen AI Feels So Threatening to Workers.* HBR.
10. Puvvada, A. et al. (Mar 2026). *What the Best AI Users Do Differently.* HBR. KPMG study, n=2,500, 8 months.
11. MIT Sloan (Jan 21, 2026). *Looking Ahead at AI and Work in 2026.* Faculty panel.
