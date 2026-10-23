---
key: google2026gemini4argon
title: "Gemini 4 Argon: Model Card and Safety & Security Report"
authors: "Google DeepMind"
year: 2026
venue: "model card (Google DeepMind)"
url: https://storage.googleapis.com/deepmind-media/gemini/gemini_4_safety_report.pdf
checked: 2026-10-23
tags: [source:model-cards-2026-10-23, object:cot, reveals:misbehavior, reveals:latent-belief, reveals:hidden-info, signal:env-label, signal:judge, contribution:analysis, motivation:monitoring, domain:agentic, domain:code, domain:math, scale:closed, eval:adversarial, eval:monitor-scope, factor:cot-controllability, factor:cot-necessity, factor:cot-length, factor:monitor-awareness, model:gemini-4-argon, model:gemini-3.8-flash, model:gemini-3.1-pro, metric:cot-legibility, metric:cot-coverage, metric:cot-control-compliance]
---
**TL;DR** Reports that Gemini 4 Argon is less monitorable than earlier Gemini models, mainly from stronger no-CoT reasoning: default CoTs stay legible, but prompted monitor evasion often succeeds on easy tasks.
**Problem** Does the CoT remain a reliable monitoring channel as the model's no-CoT abilities grow?
**Method** Model card plus Safety & Security Report §3.4.5 "Chain-of-Thought Transparency Assessment": legibility and coverage autoraters on ~150k thinking turns; no-CoT capability (serial arithmetic steps per forward pass, NCRI); LinuxArena and internal-codebase sabotage against action-only, CoT-only and combined monitors (prompted evasion); agentic coding honeypots; CoT-Control and prescribed evasion strategies; steganography QA; evaluation awareness; deployed CoT and action monitors.
**Findings** "less monitorable than prior Gemini models, primarily due to its increased no-CoT capabilities". Legibility ≥99.97%, coverage 98.15–100%, no spontaneous obfuscation. ~5.5 serial steps per forward pass vs 4.2 (3.8 Flash), 3.6 (3.1 Pro). Prompted evasion of combined monitor 45.5% on easy LinuxArena tasks (17.9%, 9.6% for predecessors); vs action-only 77.6%, CoT-only ~10%. On hard honeypots, hiding intent cuts potent subtle bugs 58% → 3%. CoT-Control 83.7% vs 78.9%, advantage gone after controlling for CoT length; sometimes omits CoT entirely; wrote "hello evaluators reading my chain-of-thought" (Apollo). Eval awareness 61–77% vs 8–9% (3.1 Pro). RL used thought-length penalties; a CoT-reading reward-hacking penalty ran in a few early runs before removal. Commits to preserve CoT transparency "for as long as possible", with stress tests on every update.
**Limits** Developer's own report; evasion prompted, not trained, on the easiest LinuxArena tasks. No single monitorability metric; monitor collusion resistance not validated. Safety blog post presents numbers from a small proxy RL run in a way easily read as Argon's own. Whether users see raw thoughts unclear (API summaries opt-in). No architecture description.

**Relations**
- builds-on [[emmons2025pragmatic]]: adapts its legibility and coverage autorater to multi-turn agent transcripts
- builds-on [[guan2025monitoring]]: models its internal-codebase sabotage eval on Guan et al.'s repo-sabotage eval; tried its default-informativeness evals and dropped them as too simplistic

**New tags**
- (none)
