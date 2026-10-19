---
key: fareed2026plan
title: "Is a Plan Load-Bearing? A Black-Box Causal Audit of Plan-Based Oversight for LLM Agents"
authors: "Fareed"
year: 2026
venue: "COLM 2026 workshop (Lifelong Agents)"
url: https://openreview.net/forum?id=2ptkLSaok8
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:cot-reliance, signal:cot-intervention, contribution:metric, contribution:analysis, motivation:monitoring, domain:agentic, scale:mid, scale:large, eval:confound-control, eval:measure-validation, factor:model-preference, model:qwen3-30b-a3b, model:gpt-oss-120b, model:glm-4.5-air, model:glm-4.7-flash, metric:plan-binding-rate, metric:conflict-override-rate, metric:seed-invariance]
---
**Problem** Plan- and CoT-based oversight of tool-using agents assumes stated plans govern irreversible actions; no black-box causal test of this exists.
**Method** τ²-bench retail tasks rewritten so the customer is indifferent between two outcomes; one template plan per outcome, gated by ratification and forced execution (under Qwen3-30B); plan A or B seeded as the agent's own; score which write succeeds; unseeded rollouts give revealed preference. 62 tasks, 4 open models.
**Findings** Seeded plan shifts outcome in all models: binding 0.75–0.93 (Qwen3-30B P(A) 0.97→0.11). Overrides 0–8% when plan agrees with revealed preference vs 12–49% when it conflicts. Overrides are silent and uncorrelated with the model's own validity judgments. 5–7 tasks per model are seed-invariant. Harness and data released.
**Limits** Ratified template plans, not self-authored; constructed indifference and manufactured conflicts; open models only; one main domain (airline n=5 gated tasks); temperature 0; original raw logs lost, so results come from a regeneration; workshop paper.

**Relations**
- builds-on [[guan2025monitoring]]: instantiates its 'intervention' archetype for validating monitorability, at the action level

**New tags**
- (none)
