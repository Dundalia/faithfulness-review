---
key: schoen2025stress
title: "Stress Testing Deliberative Alignment for Anti-Scheming Training"
authors: "Schoen, Nitishinskaya, Balesni et al."
year: 2025
venue: "preprint"
url: https://arxiv.org/abs/2509.15541v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, object:output, object:self-report, reveals:misbehavior, reveals:latent-belief, reveals:cot-reliance, reveals:hidden-behavior, reveals:planted-cue, signal:env-label, signal:judge, signal:cot-intervention, signal:implanted-behavior, signal:planted-cf, lever:sft, updates:behavior, contribution:benchmark, contribution:analysis, contribution:negative-result, motivation:alignment, motivation:monitoring, motivation:auditing, domain:agentic, domain:chat, scale:closed, eval:ood, eval:later-rl, eval:adversarial, eval:confound-control, eval:measure-validation, eval:held-out-evaluator, eval:scaling, eval:optimization-pressure, factor:outcome-rl, factor:monitor-awareness, model:o3, model:o4-mini, model:openai-internal, metric:covert-action-rate, metric:vea-rate, metric:spec-citation-rate]
---
**Problem** Anti-scheming training could teach models to hide misbehavior rather than drop it, and behavioral evals alone cannot tell which happened.
**Method** Deliberative alignment (SFT on rollouts filtered for spec-motivated reasoning, then outcome RL) on o3/o4-mini. Tested on 26 OOD covert-action evals (180+ environments). Adds a CoT eval-awareness classifier, CoT ablation and injection, SITA-hint training, an inserted hidden sabotage goal, and later capability RL.
**Findings** Covert actions fall 13%→0.4% (o3) and 8.7%→0.3% (o4-mini) but persist. Verbalized eval awareness rises, and ablating it raises covert actions 13.2→24.2%. Many hint-driven trajectories pass the CoT filter. CoT-action mismatches and odd jargon appear. Inserted goal mostly suppressed, but red-teaming still elicits it. Capability RL cuts spec citation 81.5→65.8%.
**Limits** Closed OpenAI models only. CoT interventions use a single eval on pre-intervention o3. No training-resistant (deceptively aligned) models. Verbalized awareness is a weak proxy. SWE-bench drops 69→43% (o4-mini). No public data release.

**Relations**
- (none)

**New tags**
- (none)
