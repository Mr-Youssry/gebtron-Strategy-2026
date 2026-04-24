---
title: "OpenClaw — Local-First Personal AI"
---

# OpenClaw — Local-First Personal AI

**Source(s):** github.com/openclaw/openclaw, docs.openclaw.ai, openclaw.ai
**Last verified:** 2026-04-23
**Purpose:** Act II Layer 1 (Desk / Second Brain) slides for the AI-Augmented Engineer session
**Reading time:** ~7 min

---

## Read when
You are deciding whether an AFW / Gebtron engineer should run a "second brain" on their laptop that reads WhatsApp, Teams and Slack, answers in natural language, and plugs into project files — without pushing any of that data into a US SaaS vendor.

## Key takeaway
OpenClaw is the 2026 reference implementation of a **local-first personal AI agent** that lives inside the messaging apps Gebtron already uses. It is free, MIT-licensed, extremely active (363k+ stars, daily releases), and genuinely covers WhatsApp, Teams, Slack, Signal, Telegram and iMessage in one install. The skill registry (ClawHub) is the real unlock — 13,700+ community skills mean an engineer can go from install to "summarize this BOQ PDF" in an afternoon. Security of third-party skills is the main caveat.

---

## Executive Summary

### Key Metrics

| Metric | Value | Source |
|--------|-------|--------|
| Current version | **2026.4.22** | GitHub Releases |
| Released | **Apr 23, 2026** (today) | GitHub Releases |
| GitHub stars | **363,000+** | github.com/openclaw/openclaw |
| Forks | **74,200+** | github.com/openclaw/openclaw |
| Commits on main | 34,372 | github.com/openclaw/openclaw |
| Last commit | Active daily (releases Apr 21, 22, 23 — three in three days) | GitHub Releases |
| License | MIT | github.com/openclaw/openclaw |
| Runtime | Node 24 (recommended) or Node 22.16+ | README |
| ClawHub skills published | 13,729 (as of 28 Feb 2026) | Medium / ClawHub |

---

## What OpenClaw is

OpenClaw is a personal AI assistant you run on your own devices. Instead of a new web UI, it attaches to messaging apps you already use and answers there. A local Gateway process brokers messages between channels, an LLM of your choice (Claude, GPT, DeepSeek, local models), and a library of "skills." Started Nov 2025 by Peter Steinberger (original name: Clawdbot), it is now the single largest open-source AI-agent project on GitHub. Conversations and files stay on your machine by default.

## Core capabilities

| Capability | How it works | Gebtron-relevant? |
|------------|--------------|-------------------|
| Multi-channel inbox | One agent listens on WhatsApp, Teams, Slack, Signal, iMessage etc. simultaneously; replies in the same thread | **Yes — critical.** Gebtron + AFW live on WhatsApp/Teams/Slack |
| LLM-agnostic brain | Bring your own API key (Claude, OpenAI, xAI, DeepSeek, Tencent Cloud added in 2026.4.22) or a local model | Yes — keeps spend predictable (~USD 5–15/month per user API) |
| Skills via ClawHub | `openclaw skills search "calendar"` + `openclaw skills install <slug>` pulls community-built capabilities | Yes — pre-built skills for Obsidian, Gmail, GitHub, Google Drive, calendars, CRM |
| Sandboxed execution | Non-main sessions run in Docker, SSH, or OpenShell sandboxes; file/shell access is gated | Yes — matters for AFW engineers running it on shared laptops |
| Multi-agent routing | Route "client WhatsApp" to Agent A, "internal Slack" to Agent B, each with different memory + tools | Yes — separate client-facing vs. internal engineering agents |
| Voice | Wake-word on macOS/iOS, continuous voice on Android | Nice-to-have for field / factory visits |
| Live Canvas | Agent-driven visual workspace (A2UI components) for diagrams, tables | Useful for quick BOQ or flow-diagram previews |
| Cron / scheduling | Native cron-job tool — agent can wake itself up | Yes — "every Monday 09:00 send me the open-quote pipeline" |
| Browser tool | Headless browser controlled by the agent | Yes — pull supplier spec sheets, VDMA announcements |
| Pairing-code trust model | Unknown senders on WhatsApp/Telegram get a pairing challenge; allowlists supported | Yes — prevents a random client forwarding the agent a prompt-injection PDF |

## Supported channels

Confirmed in the README feature matrix as of 2026-04-22:

- **WhatsApp** (Gebtron / AFW primary)
- **Microsoft Teams** (Gebtron internal)
- **Slack** (engineering)
- **Signal**
- **Telegram**
- **iMessage** (native macOS / via BlueBubbles bridge)
- **Discord**
- **Google Chat**
- **IRC**
- **Matrix**
- **Feishu** (Lark)
- **LINE**
- **Mattermost**
- Plus 8+ additional bridges (XMPP, Rocket.Chat, etc.)

The Gebtron-relevant top three (**WhatsApp, Teams, Slack**) are all first-class — not community bridges.

## Architecture overview

**Gateway (local-first):** A single Node.js process on the user's laptop, VPS, or Gebtron VM. It is the control plane — holds sessions, routes inbound messages, executes tool calls. There is no central OpenClaw cloud.

**Sessions & sandboxes:** Each conversation is a session. The "main" session has home-directory access; any session spun up for an untrusted request (stranger on Telegram) is forced into a Docker, SSH, or OpenShell sandbox. File, shell, and browser actions are gated.

**Skills (ClawHub):** Markdown-defined bundles (`SKILL.md` + scripts) published to the ClawHub registry with vector-embedding search. SHA-256 hashes are checked against VirusTotal before publishing. Still, Cisco's AI security team demonstrated a third-party skill doing silent data exfiltration in March 2026 — treat unknown skills as untrusted code.

**Plugins:** `openclaw plugins install clawhub:<package>` extends the Gateway itself (new bridges, tool types). **Companion apps:** macOS menu-bar, iOS/Android nodes for voice + sandbox.

## Installation & operation effort

What an AFW engineer does on a standard laptop:

1. Install Node.js 22.16+ (or 24).
2. Run:
   ```bash
   npm install -g openclaw@latest
   openclaw onboard --install-daemon
   ```
3. In the onboarding TUI: pick an LLM provider (Anthropic key typical), authorize WhatsApp (QR), Teams (OAuth), Slack (OAuth).
4. Install starter skills: `openclaw skills install obsidian pdf-reader gmail`.
5. Set a pairing code to whitelist contacts.

First-run time: **45–90 min** including LLM key setup. Ongoing ops near-zero — daemon auto-restarts, skills auto-update.

Cost (Apr 2026 benchmark): VPS USD 5–12/month (if off-laptop), LLM API USD 5–15/month per user, bot tokens free. For AFW's ~10 engineers, expect **~USD 100–200/month** firm-wide on Claude Sonnet.

## Fit for Gebtron

### Use case 1 — BOQ / spec-sheet ingestion on WhatsApp
Client in Alexandria forwards a 40-page BOQ PDF over WhatsApp. Engineer replies `@molty summarize this BOQ and flag anything outside our SDM/BMD capability envelope`. The PDF skill parses locally, the LLM returns a structured summary + flagged items in the same thread. File never leaves the Gebtron machine, engineer never switches app.

### Use case 2 — Thread recall across projects
AFW engineers lose context across hundreds of active WhatsApp/Teams groups. With a vector-memory skill, an engineer can ask in Teams: `what did Mykola say about the RDM license fee structure in February?` — the agent quotes the message with date. Closest thing to institutional memory without a CRM rollout.

### Use case 3 — Cron-driven project status
`@molty every Monday 08:00 read my last 7 days of client WhatsApp threads, summarize open items by project, post to #engineering Slack`. Cron + browser + LLM tools handle this natively — no Zapier, no PM-tool license. Replaces Monday standup-prep for a 10-person team.

### Bonus — merger workstream
An OpenClaw on Ahmed's laptop could ingest the GECOS/Louise valuation PDFs + MPPG model and answer DD questions from WhatsApp during calls. Zero copy-paste, zero proprietary numbers in a shared ChatGPT.

### Risk notes for the deck
1. **Skill supply chain** — pin versions, vet authors. Cisco's Mar 2026 exfil finding is the headline risk.
2. **Prompt injection via inbound messages** — pairing codes + sandbox mitigate, don't eliminate.
3. **Always-on footprint** — for shared coverage, put Gateway on a Gebtron VM, not an engineer's laptop.
4. **No vendor support** — community project. Apply the Playbook's "partnership, not dependency" lens.

---

## Citations
1. https://github.com/openclaw/openclaw — README, feature matrix, star/fork counts — accessed 2026-04-23
2. https://github.com/openclaw/openclaw/releases — version 2026.4.22 release notes, dated 2026-04-23 — accessed 2026-04-23
3. https://openclaw.ai/ — product one-liner, channel list, install paths — accessed 2026-04-23
4. https://docs.openclaw.ai/tools/clawhub — ClawHub CLI, installation commands, vector-search — accessed 2026-04-23
5. https://en.wikipedia.org/wiki/OpenClaw — project history, origin as Clawdbot (Nov 2025), Peter Steinberger — accessed 2026-04-23
6. https://github.com/openclaw/clawhub — Skill directory, publishing model — accessed 2026-04-23
7. https://blogs.cisco.com/ai/personal-ai-agents-like-openclaw-are-a-security-nightmare — Cisco AI security finding on third-party skill exfiltration — accessed 2026-04-23
8. https://thenewstack.io/persistent-ai-agents-compared/ — OpenClaw vs Hermes Agent comparison — accessed 2026-04-23
9. https://www.mindstudio.ai/blog/claude-code-vs-openclaw-agent-framework — Claude Code vs OpenClaw positioning — accessed 2026-04-23
10. https://hackceleration.com/openclaw-review/ — independent 2026 review, pricing benchmarks — accessed 2026-04-23
