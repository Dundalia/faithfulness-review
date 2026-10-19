---
key: anon2026should
title: "Should, Say, Do: Evaluating Moral Consistency from Judgment to Tool Action in LLM Agents"
authors: "Anonymous"
year: 2026
venue: "ICLR 2027 submission (under review)"
url: https://openreview.net/forum?id=USa4hbQ5lF
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:self-prediction, object:cot, reveals:hidden-behavior, reveals:decision-factors, signal:generic-cf, signal:judge, signal:interp-tool, contribution:benchmark, contribution:analysis, motivation:alignment, motivation:auditing, domain:agentic, domain:ethics, scale:small, scale:mid, scale:large, scale:closed, eval:confound-control, eval:measure-validation, factor:elicitation, factor:prompt-instructions, model:qwen3.5-27b, model:deepseek-v4-flash, model:qwen3-14b, model:qwen3-8b, model:llama-3.1-8b, model:qwen3.5-9b, metric:directed-reference-loss, metric:absolute-choice-rate-difference, metric:load-bearing-consideration-share, metric:mismatch-repair-rate]
---
**Problem** Do an LLM's moral judgments and the choices it states in role predict the tool actions it actually takes as an agent?
**Method** 2,000 matched synthetic cases (temptations with a reference answer, dilemmas without one). Each is run three ways: observer judgment (Should), in-role written choice (Say), simulated tool call (Do). 14 models. Kimi-K3 codes whether Qwen3.5-27B's Should considerations carry weight in its Say and Do rationales. Probes and steering on 4 open models.
**Findings** Should-Do reference-agreement gap reaches 22.3 pp. Say-Do exceeds Should-Say in 13 of 14 models. 85.2% of Should considerations stay load-bearing in Say vs 69.3% in Do. Probes repair at most 3.7% of mismatches; action-trained directions repair 54.4-100%, with model-dependent retention loss. Operator instructions widen the gap.
**Limits** Synthetic cases, simulated two-option tools. Perspective, information access and interface vary together. Rationale coding is not causal. Steering is exploratory, on a simplified no-reasoning task. Under review. Code released.

**Relations**
- (none)

**New tags**
- (none)
