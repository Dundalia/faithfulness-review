---
key: naphade2026me
title: "Me, Myself, and π: Evaluating and Explaining LLM Introspection"
authors: "Naphade, Bhargav, Lim & Shah"
year: 2026
venue: "ICLR 2026 workshop (HCAIR)"
url: https://arxiv.org/abs/2603.20276v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:self-prediction, reveals:hidden-behavior, signal:generic-cf, signal:implanted-behavior, contribution:benchmark, contribution:analysis, motivation:explainability, motivation:monitoring, motivation:auditing, domain:chat, domain:ethics, domain:synthetic, scale:small, scale:mid, scale:large, scale:closed, eval:privileged-access, eval:confound-control, eval:measure-validation, eval:scaling, model:gpt-4o, model:llama-3.3-70b, model:grok-4.1-fast, model:gpt-5.2, model:qwen3-32b, model:qwen3-8b, metric:self-prediction-accuracy, metric:self-cross-prediction-advantage, metric:cot-outcome-prediction-kl]
---
**TL;DR** Introduces Introspect-Bench, testing whether models predict their own behavior better than peers do: a modest self-advantage appears, no model leads every task, and SFT on outputs yields self-prediction.
**Problem** Introspection evals conflate privileged self-access with world knowledge or text-based self-simulation.
**Method** Formal taxonomy of policy introspection. Introspect-Bench: 796 no-CoT items (k-th word, predicting CoT verdicts on ethical dilemmas, prompt reconstruction, Heads-Up). 10 models cross-predict each other. SFT probe on Qwen3-8B; logit lens and ablation on Qwen3-32B. Code released.
**Findings** Models predict themselves better than peers (p=0.021); no model leads every task. For GPT-5.2, no-CoT predictions are closer in KL to CoT verdicts than gut answers are. SFT on outputs alone yields self-prediction. Attention diffusion accounts for 23.9% of the logit shift.
**Limits** Workshop paper. Self-advantage rests on one test; Table 2's self average (64.19%) trails five models. Heads-Up near ceiling. Long-term result on GPT-5.2 only; mechanism from one model and layer. Inconsistent k range and model count. Mechanistic and CoT-assisted introspection untested.

**Relations**
- extends [[binder2024looking]]: applies its self-vs-cross-model prediction test to new tasks, without fine-tuning

**New tags**
- (none)
