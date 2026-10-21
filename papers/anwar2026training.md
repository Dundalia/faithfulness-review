---
key: anwar2026training
title: "Training LLMs to Verbalize Evaluation Awareness"
authors: "Anwar, Abdelnabi & Krueger"
year: 2026
venue: "NeurIPS 2026 workshop (AI4GOOD; TAE)"
url: https://arxiv.org/abs/2609.36316v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:latent-belief, signal:judge, signal:interp-tool, signal:implanted-behavior, lever:rl-reward, lever:rl-mechanics, updates:explanation, contribution:method, motivation:monitoring, motivation:auditing, domain:chat, domain:agentic, scale:mid, scale:large, eval:ood, eval:behavior-control, eval:specificity, eval:optimization-pressure, model:qwen3.6-35b-a3b, model:kimi-k2.6, model:inkling, metric:vea-rate, metric:amplification-factor, metric:probe-positive-rate, metric:eval-discrimination-auc]
---
**TL;DR** Trains models with RL on rollouts truncated before spontaneous mentions of evaluation awareness, making them verbalize it more often, with transfer to held-out agentic evaluations and unchanged behavior.
**Problem** EA often goes unverbalized in CoT (VEA: high precision, low recall); the latent belief has no ground-truth label.
**Method** VT: truncate spontaneous VEA rollouts just before the verbalization → PPO (LoRA), LLM-judge VEA reward, gradient & KL masked to the span. 3 MoE models, EvalAwareBench.
**Findings** VEA ↑2.4–2.9× (fits p=1−(1−p0)^α), transfers to held-out agentic evals; probe (Qwen), eval-discrimination AUC & task compliance ~unchanged. Verbalizations track SDF-implanted eval knowledge. Ablations: no mask → barely learns; no KL → miscalibrated + drift; SFT → weak transfer.
**Limits** Assumes seed verbalizations faithful (unclear beyond RL-born EA). Same judge for reward & eval (other judges confirm gain). EA only; ablations mostly Qwen. No code release mentioned.

**Relations**
- (none)

**New tags**
- (none)
