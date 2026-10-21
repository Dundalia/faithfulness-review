---
key: kaufmann2026aligned
title: "Aligned, Orthogonal or In-conflict: When can we safely optimize Chain-of-Thought?"
authors: "Kaufmann, Lindner, Zimmermann & Shah"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2603.30036v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:misbehavior, reveals:hidden-info, signal:env-label, signal:by-construction, contribution:theory, contribution:analysis, motivation:monitoring, domain:code, domain:synthetic, scale:small, scale:mid, scale:closed, eval:optimization-pressure, model:qwen3-14b, model:qwen3-8b, model:gemma-3-12b, model:gemma-3-27b, model:claude-opus-4.5, metric:monitor-recall, factor:cot-length, factor:cot-grader]
---
**TL;DR** Proposes classifying CoT-dependent rewards as aligned, orthogonal or in-conflict with the output reward: in toy RL environments, only in-conflict rewards destroy monitorability, as predicted.
**Problem** Which CoT-dependent RL reward terms degrade CoT monitorability? Prior results mixed; unclear when and why.
**Method** R = R_cot + R_out; pairs classified a priori as aligned/orthogonal/in-conflict (formal model). 9 pairs across 2 toy envs (coin state-tracking, backdoored MBPP); token-level GRPO (Qwen3, Gemma-3) + in-context RL (Claude Opus 4.5); prompted LLM monitor detects coin/backdoor reasoning.
**Findings** Predictions hold: in-conflict (CoT monitor, length penalty, prefs on backdoor) → near-zero monitorability, task reward kept; orthogonal/aligned preserve it. In-conflict rewards harder to optimize (fewer runs >0.8 on both; all Gemma failures in-conflict). Process supervision raises R_out at 42 flips.
**Limits** Toy envs; "aligned improves monitorability" untested (already perfect); backdoor length-penalty drop trivial (empty CoT); ICRL semantic drift outside framework.

**Relations**
- builds-on [[skaf2025large]]: takes its Heads-And-Tails coin state-tracking task as a base environment
- builds-on [[baker2025monitoring]]: formalizes Baker's obfuscated reward hacking under CoT-monitor pressure as the in-conflict case
- extends [[macdermott2025reasoning]]: turns its cross-environment monitorability measurements into an a priori predictive framework

**New tags**
- (none)
