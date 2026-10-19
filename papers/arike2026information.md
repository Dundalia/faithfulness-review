---
key: arike2026information
title: "How does information access affect LLM monitors' ability to detect sabotage?"
authors: "Arike, Mehta Moreno, Subramani et al."
year: 2026
venue: "ICML 2026"
url: https://arxiv.org/abs/2601.21112v2
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:misbehavior, signal:env-label, lever:prompt-pipeline, updates:monitor, contribution:analysis, contribution:method, motivation:monitoring, motivation:scalable-oversight, domain:agentic, domain:code, scale:mid, scale:large, scale:closed, eval:monitor-scope, eval:scaling, eval:confound-control, eval:adversarial, eval:specificity, factor:monitor-awareness, factor:reasoning-mode, model:claude-3.7-sonnet, model:gpt-4.1-mini, model:gpt-4.1, model:claude-3.5-haiku, model:deepseek-r1, model:deepseek-v3, metric:monitor-log-auroc, metric:tpr-at-fixed-fpr, metric:monitor-auc]
---
**Problem** Do LLM monitors catch agent sabotage better when they see more of the agent's CoT and actions?
**Method** Action-only, CoT-only and CoT+action monitors vs. new extract-and-evaluate (EaE: one monitor quotes excerpts, a separate evaluator scores them) on SHADE-Arena, MLE-Sabotage and BigCodeBench-Sabotage. Scored by log-AUROC and TPR@1%FPR; also varies attacker monitor-awareness, reasoning vs. traditional attackers, and monitor cost.
**Findings** Less-is-more: information filtering wins in 7/8 monitor-environment pairs. EaE: +16.8 pp TPR@1%FPR over best baseline on BigCodeBench (GPT-4.1-mini), +31.5 with GPT-4.1 evaluator. Full-CoT monitors often accept post-hoc justifications. CoT-only monitors catch traditional LLMs better than reasoning ones (subtle, Claude-3.7: 61.7% vs 20.0%). Attacker believes CoT private: CoT monitors gain >0.4 log-AUROC (SHADE-Arena), action-only flat. Code released (SHADE-Arena tasks private).
**Limits** Attackers are prompted, not trained, and trajectories are mostly reused from the original environments. EaE is weaker on SHADE-Arena. The monitor-awareness setups differ across environments. Monitoring is asynchronous (after the run) only, and o3 was not tested.

**Relations**
- (none)

**New tags**
- updates:monitor: the intervention changes the monitor or reader (its pipeline, inputs or prompts) so it extracts misbehavior from an unchanged CoT, rather than changing the explanation or the behavior
- factor:reasoning-mode: whether the monitored model is a reasoning model (long trained CoT or thinking mode on) or a traditional LLM prompted to reason, compared as a driver of faithfulness or monitorability
