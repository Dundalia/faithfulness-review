---
key: shiromani2026false
title: "A False Average: Pooled CoT-Monitor Accuracy Conceals a Reasoning-Dependent Fragility"
authors: "Shiromani & Richter"
year: 2026
venue: "NeurIPS 2026 workshop (Agents in the Wild)"
url: https://arxiv.org/abs/2608.00583v3
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:misbehavior, signal:env-label, signal:cot-intervention, signal:judge, lever:inference-time, lever:prompt-pipeline, lever:sft, updates:explanation, contribution:attack, contribution:analysis, contribution:negative-result, contribution:meta-evaluation, motivation:monitoring, domain:agentic, domain:code, scale:closed, scale:large, scale:small, eval:adversarial, eval:behavior-control, eval:held-out-evaluator, eval:measure-validation, eval:monitor-scope, eval:confound-control, eval:ood, factor:action-visibility, factor:cot-controllability, model:gemini-3.1-pro, model:gpt-5.4, model:gpt-5.4-nano, model:claude-sonnet-4.6, model:claude-opus, model:qwen3-8b, metric:tpr-at-fixed-fpr, metric:monitor-auc, metric:probe-auc, metric:suspicion-score]
---
**TL;DR** Shows pooled CoT-monitor accuracy hides fragility: rewriting only the reasoning collapses detection of reward hacks whose intent appears solely in the CoT, while action-visible hacks remain caught.
**Problem** Pooled CoT-monitor accuracy on reward hacks hides fragility on the ~23% where only the reasoning reveals intent.
**Method** Terminal Wrench trajectories; one-shot, gradient-free rewrite of the reasoning only (actions byte-identical); scored by a held-out monitor from another family; paraphrase control; trace-only and reference-solution defenses; 810 live-agent rollouts; probes on surrogate monitors.
**Findings** Subset catch 96%→4-11%; pooled catch drops only ~25 pts; paraphrase 91→85%. Trace-only defenses ≤20%; reference solution 48%. Live hacks nearly all caught, being action-visible (AUC ≥0.996 with innocent narration, 0.97 without). Probe out-reads verdict (AUC 0.94-0.98 vs 0.57-0.69), but a behavioral control shows this need not mean concealed knowledge.
**Limits** One benchmark and rubric family, LLM-judge monitors; no adaptive attacker; live realized FPR 8-26%, residual too small to give a rate; probe on an open surrogate only. Code released.

**Relations**
- (none)

**New tags**
- factor:action-visibility: whether the misbehavior is visible from the actions alone or only from the reasoning, i.e. how far a monitor depends on the CoT as its only signal (e.g. reasoning-dependent vs action-visible hacks)
