---
key: lv2026geofaith
title: "GeoFaith: A Spatio-Temporal Dual View of Faithful Chain-of-Thought"
authors: "Lv, Zhao, Wang et al."
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2605.26893v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, reveals:reasoning-validity, signal:judge, signal:cot-intervention, lever:rl-reward, updates:explanation, updates:behavior, contribution:method, contribution:metric, contribution:benchmark, contribution:analysis, motivation:reasoning-quality, motivation:explainability, domain:math, domain:logic, domain:open-qa, domain:mcq, domain:agentic, domain:code, scale:small, eval:ood, model:qwen3-1.7b, model:qwen3-4b, model:qwen3-8b, model:qwen2.5-7b, model:llama-3.1-8b, model:gpt-5, metric:step-faithfulness-f1, metric:judge-faithfulness-rate, metric:geodesic-distortion-ratio, metric:entropy-temporal-reliability]
---
**Problem** Outcome-only RL → post-hoc rationalized CoTs; human labels, LLM judges and interventions are too costly or unreliable for step-level faithfulness supervision.
**Method** Hidden-state VAE geometry (distortion, Fisher-Rao) + answer-entropy dynamics filter detector-relabelled rollouts, bootstrapping a 1k LLM-consensus+human seed to 20k instances → Qwen3-8B LoRA step detector → GRPO reward = outcome + detector + entropy + manifold terms.
**Findings** Unfaithful traces take short, high-uncertainty latent paths with flat/spiky entropy. Detector ≈GPT-5 (wins 3/4 external sets, loses ProcessBench). Qwen3-4B vs GRPO: faith 74.1→82.3, acc 69.6→73.9, shorter CoTs. Detector reward matters most in 4B ablation; on 1.7B dropping manifold reward hurts faith more.
**Limits** Faithfulness = step validity visible to a judge, not internal computation (authors concede); faith partly scored by the detector it trains against; one judge table marked placeholder; LogiQA in both detector data and RL eval despite claimed separation; policies ≤4B; code promised, not released.

**Relations**
- builds-on [[han2026rfeval]]: uses RFEval counterfactual-intervention pairs to label faithful/unfaithful trajectories for geometry/VAE
- builds-on [[mohammadi2025evaluating]]: adopts GRPO over DPO for faithfulness RL following its finding

**New tags**
- (none)
