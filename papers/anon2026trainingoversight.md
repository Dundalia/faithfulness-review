---
key: anon2026trainingoversight
title: "Training Language Models for Introspective Oversight"
authors: "Anonymous"
year: 2026
venue: "desk-rejected (ICLR 2027 submission)"
url: https://openreview.net/forum?id=M7bhrIY7b9
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:self-report, object:self-prediction, reveals:misbehavior, reveals:planted-cue, reveals:decision-factors, signal:planted-cf, signal:wild-cf, signal:generic-cf, signal:judge, signal:env-label, lever:sft, lever:rl-reward, lever:architecture, updates:explanation, contribution:method, motivation:monitoring, domain:chat, domain:code, domain:agentic, domain:mcq, domain:open-qa, scale:mid, scale:large, eval:ood, eval:privileged-access, eval:behavior-control, eval:specificity, eval:scaling, model:qwen3.6-27b, model:nemotron-3-super-120b-a12b, model:inkling-small, model:glm-5.3, metric:monitor-auc]
---
**TL;DR** Trains a separate LoRA observer role, with SFT then RL, to report on the same model's behavior, outperforming honesty training, transcript monitors and activation oracles on held-out tasks.
**Problem** Asked directly, assistants misreport their own misbehavior; transcript monitors see only outputs; activation oracles confabulate.
**Method** Separate observer role (LoRA) on Qwen3.6-27B: SFT on Haiku-written QA about sampled behavior, then GRPO on verifiable counterfactual (Brier) and multiple-choice self-prediction; on-policy distillation preserves the assistant.
**Findings** Held-out mean AUROC 0.907 vs honesty training 0.864, transcript monitor 0.828, activation oracle 0.788; same-data cross-model observers 0.684/0.647; with reasoning, RL lifts 0.719 to 0.823 (≈GLM-5.3 monitor); baselines improve on the trained assistant.
**Limits** One model, non-reasoning transcripts, no CoT-monitor baseline, 40 reward-hack items, binary tasks only; introspection vs. behavior modeling untested; capabilities mostly preserved; no code release; desk-rejected, not peer reviewed.

**Relations**
- builds-on [[karvonen2026would]]: uses its CHIVE pipeline to generate counterfactual-prediction RL data
- compares-to [[wang2025evaluating]]: generic honesty fine-tuning baseline (0.864; 0.884 with honest-persona prompt)
- builds-on [[li2025training]]: adopts its privileged-access test: same-data explainers lacking the target's weights

**New tags**
- (none)
