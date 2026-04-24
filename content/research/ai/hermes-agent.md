---
title: "Hermes Agent — Self-Improving AI Colleague"
---

# Hermes Agent — Self-Improving AI Colleague

**Source(s):** github.com/NousResearch/hermes-agent, nousresearch.com, TokenMix.ai, The New Stack, MindStudio
**Last verified:** 2026-04-23
**Purpose:** Act II Layer 1 (Desk / Second Brain) slides
**Reading time:** ~6 min

---

## Read when
You are deciding which "desk layer" AI to deploy across AFW engineering, sales ops, and management. Specifically: when the task is **recurring** (weekly reports, monthly proposals, quarterly audits) and the value grows only if the tool gets better the more it runs.

## Key takeaway
Hermes Agent is the only mainstream agent framework with a **closed learning loop**: it writes its own skills from experience and improves them with each use. After ~20 self-created skills, Nous internal benchmarks show repeat tasks finish **40% faster** with 40% fewer tokens. For Gebtron, that means a BOQ or site report written three times becomes a one-click job the fourth time — without any human prompt-engineering.

---

## Executive Summary

Hermes Agent is Nous Research's open-source "personal AI" framework, released **25 Feb 2026** and already the fastest-growing agent project of the year (~95.6K GitHub stars in seven weeks). Unlike Claude Code (narrow coding agent) or OpenClaw (broad life-automation agent), Hermes is built around **compounding learning** — skills, memory, and a model of *you* that deepens over months. MIT-licensed, model-agnostic, runs on anything from a \$5 VPS to a GPU cluster.

### Key Metrics

| Metric | Value |
| --- | --- |
| Latest version | **v0.11.0** — 23 Apr 2026 ("The Interface Release") |
| Previous | v0.10.0 — 16 Apr 2026 ("Tool Gateway") |
| First release | 25 Feb 2026 |
| License | MIT |
| Bundled skills (v0.10+) | 118 |
| Memory layers | 3 (Prompt / Episodic / Procedural) |
| Messaging platforms | 17 (Telegram, Discord, Slack, WhatsApp, Signal, iMessage, WeChat, QQBot, …) |
| Benchmark gain | ~40% faster repeat-task time after 20+ self-skills |
| Model providers | 10+ (Anthropic, OpenAI, Nous Portal, OpenRouter, NVIDIA NIM, Bedrock, Gemini, z.ai, Kimi, MiMo, HuggingFace) |

---

## What Hermes Agent is

Flagship product of **Nous Research**, a U.S. open-source AI lab whose mission is to "advance human rights and freedoms by creating and proliferating open source language models." Nous is best known for its **Hermes** family of LLMs (Hermes 4). The Agent is the application layer — an always-on assistant that lives in your terminal, phone, and messaging apps. README positioning: *"the only agent with a built-in learning loop — it creates skills from experience, improves them during use, nudges itself to persist knowledge, searches its own past conversations, and builds a deepening model of who you are across sessions."*

## The self-improving loop

Headline differentiator. Every other agent (Claude Code, OpenClaw, Cursor) starts each session roughly as smart as the last. Hermes compounds.

**How it works:**

1. **Detection** — a task finishes with **5+ tool calls** (a real workflow).
2. **Skill generation** — a background process summarises the trajectory (approach, tools, edge cases, domain knowledge) into a Markdown file with YAML header.
3. **Storage** — saved to local SQLite with **FTS5 full-text indexing** for millisecond retrieval.
4. **Retrieval** — on a similar task later, Hermes searches its own library, loads the matching skill, uses it as working context — it reminds itself how *you* do this.
5. **Refinement** — as you correct or extend, the skill file updates. Over time it stops being generic AI advice and becomes "how AFW writes BOQs for cement-plant retrofits."

A companion repo `hermes-agent-self-evolution` adds DSPy + GEPA (ICLR 2026 Oral) for programmatic prompt optimisation. The benchmark that matters: **~40% time and token reduction on repeat tasks once ~20 self-skills are built.**

Caveat: skills are domain-local. A "summarize a PR" skill does *not* transfer to "plan a migration." The 40% kicks in only on work you genuinely repeat.

## Memory + scheduling

Three memory layers, each solving a different problem:

| Layer | What it stores | Gebtron analogy |
| --- | --- | --- |
| **Prompt Memory** | `MEMORY.md` + `USER.md` — facts about you loaded into every prompt | "Mohamed prefers decisions framed around customer concentration risk." |
| **Episodic Archive** | SQLite FTS5 of every past conversation | Searchable meeting log, forever. |
| **Procedural Skills** | Auto-generated Markdown workflows | "AFW monthly site-report skill v4." |

**Scheduling** is first-class. The built-in **cron scheduler** lets the agent wake itself — "every Sunday 20:00, draft the weekly safety audit from this week's photos and post to #audits on Telegram." **Subagent spawning** runs workstreams in parallel: one pulls supplier prices while another recalculates the BOQ, both reporting back.

Memory + cron is what makes Hermes feel less like a chatbot and more like a junior team member who remembers last quarter.

## Model-agnostic architecture

No vendor lock-in. `hermes model <name>` swaps the backend with zero code changes. Supported: **Nous Portal** (subscription with bundled web-search, TTS, image gen, browser automation — no separate keys), **Anthropic** (Claude 4.6/4.7 via Fast Mode), **OpenAI** (GPT-5.5 via Codex OAuth), **OpenRouter** (200+ models), **NVIDIA NIM** (Nemotron), **AWS Bedrock** (Converse API), **Google Gemini** (OAuth), plus z.ai/GLM, Kimi, MiMo, MiniMax, HuggingFace, custom endpoints.

For Gebtron this is strategic: a data-sensitive BOQ can run on self-hosted Nemotron via NVIDIA NIM on a local GPU, while a public-facing marketing draft uses the cheaper OpenRouter route — same skills, same memory, different model.

## MCP integration

Hermes is a **Model Context Protocol (MCP) host** — it can plug into any MCP server as a tool. MCP is the open standard (originated at Anthropic, adopted by OpenAI and Google in late 2025) for connecting agents to external systems. The in-built **MCP Registry** discovers and attaches servers on demand.

**What this unlocks for Gebtron's stack:**

- **Obsidian** — MCP servers for vault read/write. Hermes can update `Deliverables/` directly, cite by wikilink, keep meeting notes synced.
- **Microsoft 365** — connectors for Outlook, SharePoint, Teams, Excel. Hermes can read the 4-Company Valuation model, draft from AFW's tenant, and pull calendar context.
- **QuickBooks** — community MCP servers expose invoices, customers, P&L. "What is AFW's 2026 Q1 revenue by customer" without a BI tool.
- **DigitalOcean / Azure / GitHub** — all have MCP servers, useful for Ahmed's dev workstream.

MCP is how Hermes avoids the walled-garden fate of every prior "personal AI." If a system has an MCP server, Hermes uses it tomorrow.

## Fit for Gebtron

The self-improving loop matters **only** for recurring work — exactly what AFW has in volume. Three high-ROI use cases:

**1. Weekly safety audits & monthly site reports.** Engineers spend 2-4 hours per report from photos, checklists, WhatsApp chatter. Hermes learns from the first 3-4 reports, then auto-drafts the next one — engineer edits instead of authors. Cron fires every Friday 16:00. By quarter end, the skill knows the clients, plant layouts, and safety taxonomy.

**2. BOQ preparation for cement-plant retrofits.** Today a Bill of Quantities means hours of SKU lookup, vendor price requests, Excel wrangling. A Hermes skill accumulates every BOQ Gebtron has produced with catalogues, vendor preferences, pricing assumptions baked in. Subagents in parallel — one fetches Kockele prices, another Pfeiffer, a third formats the output. Target: **2 days → 2 hours** by month 3.

**3. Monthly client proposals / tender responses.** Today: proposals are re-typed from prior decks with ~30% re-work each time. Episodic memory holds every past proposal; the procedural skill learns Gebtron's proposal voice and structure. Over a year it becomes the institutional memory of the sales function — surviving any departure.

**Adjacent cheap wins:** weekly finance digest from QuickBooks → Signal on Monday 08:00; tender-deadline tracker scraping client portals; Arabic/English executive digests from the existing `Transcriptions/` folder.

**Posture vs. Claude Code / OpenClaw.** Claude Code beats Hermes on pure coding (Ahmed's work). OpenClaw matches breadth but has no learning loop. Right answer for Gebtron: **both** — Claude Code on Ahmed's laptop for dev/consulting, Hermes Agent as the **AFW-wide second brain** compounding knowledge across 18+ engineers.

---

## Citations

- [NousResearch/hermes-agent — GitHub README](https://github.com/NousResearch/hermes-agent)
- [Hermes Agent — Releases v0.11.0, v0.10.0, v0.9.0](https://github.com/NousResearch/hermes-agent/releases)
- [Hermes Agent — Official site](https://hermes-agent.nousresearch.com/)
- [Nous Research — Organization page](https://nousresearch.com/)
- [TokenMix — Hermes Agent Review: 95.6K Stars, Self-Improving AI Agent (April 2026)](https://tokenmix.ai/blog/hermes-agent-review-self-improving-open-source-2026)
- [The New Stack — OpenClaw vs. Hermes Agent: The race to build AI assistants that never forget](https://thenewstack.io/persistent-ai-agents-compared/)
- [utilo — Hermes Agent vs Claude Code vs OpenClaw (2026)](https://utilo.io/en/home/blog/hermes-vs-claude-code-vs-openclaw-2026)
- [MindStudio — What Is Hermes Agent? The OpenClaw Alternative with a Built-In Learning Loop](https://www.mindstudio.ai/blog/what-is-hermes-agent-openclaw-alternative)
- [NousResearch/hermes-agent-self-evolution — DSPy + GEPA self-evolution repo](https://github.com/NousResearch/hermes-agent-self-evolution)
- [Innobu — Hermes Agent 2026: First Production-Ready Self-Improving Open-Source AI Agent](https://www.innobu.com/en/articles/hermes-agent-self-improvement-open-source-2026.html)
