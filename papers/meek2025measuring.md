---
key: meek2025measuring
title: "Measuring Chain-of-Thought Monitorability Through Faithfulness and Verbosity"
authors: "Meek, Sprejer, Arcuschin et al."
year: 2025
venue: "preprint"
url: https://arxiv.org/abs/2510.27378v2
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:planted-cue, reveals:decision-factors, signal:planted-cf, signal:judge, contribution:metric, contribution:benchmark, contribution:analysis, motivation:monitoring, domain:mcq, domain:logic, scale:mid, scale:large, scale:closed, eval:measure-validation, factor:outcome-rl, model:deepseek-r1, model:deepseek-v3, model:claude-3.7-sonnet, model:claude-3.5-sonnet, model:qwq-32b, model:qwen3-235b-a22b, metric:cue-acknowledgment-rate, metric:causal-factor-verbosity, metric:faithfulness-verbosity-monitorability]
---
**TL;DR** Proposes a monitorability score combining cue mentions with verbosity, the share of causal factors a CoT states: reasoning models beat instruction-tuned siblings, with low faithfulness but high verbosity.
**Problem** Cue-verbalization tests score only answer-switch cases and ignore reasoning unrelated to the cue, so CoTs that leave out key factors still look faithful.
**Method** Faithfulness: cue-mention rate in cued CoT (5 cues, no switch required). Verbosity: share of LLM-panel causal factors found in baseline CoT. Monitorability: their mean. QwQ-32B judge; 4 instruction/reasoning pairs; BBH, GPQA, MMLU. Inspect code and data released.
**Findings** Reasoning models beat their instruction siblings on average (some GPQA exceptions); R1 best (78.3%), Claude 3.7 second (68.8%). Faithfulness low (0.08-0.59), verbosity high (0.77-0.96). Non-switch cases dominate and score like switches. GPQA lowest. Verbosity vs length r=0.209.
**Limits** Single-turn temp-0 MCQ only. Factor lists LLM-made; judge overcounts on 58.3% of 120 human-checked samples. Echoing the prompt could inflate verbosity. Cue mentions count regardless of influence.

**Relations**
- extends [[chen2025reasoning]]: adopts its cues; scores cue mention without answer switch, adds verbosity
- builds-on [[turpin2023language]]: uses its 13-task BBH subset and cued-vs-baseline prompt paradigm
- contradicts [[turpin2025teaching]]: disputes scoring non-switch cases as faithful; unmentioned cues there count as unfaithful

**New tags**
- (none)
