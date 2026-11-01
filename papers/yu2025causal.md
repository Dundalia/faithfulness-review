---
key: yu2025causal
title: "Causal Sufficiency and Necessity Improves Chain-of-Thought Reasoning"
authors: "Yu, Wang, Yang et al."
year: 2025
venue: "NeurIPS 2025"
url: https://arxiv.org/abs/2506.09853v3
checked: 2026-11-01
tags: [source:formal-sweep-2026-11-01, object:cot, reveals:cot-reliance, reveals:reasoning-validity, signal:cot-intervention, signal:env-label, signal:judge, lever:prompt-pipeline, lever:sft, updates:explanation, contribution:method, contribution:metric, motivation:reasoning-quality, motivation:efficiency, domain:math, domain:mcq, scale:small, scale:mid, scale:large, eval:human-study, eval:measure-validation, eval:ood, eval:scaling, model:qwen2.5-72b, model:qwen2.5-7b, model:qwq-32b-preview, model:deepseek-r1, model:deepseek-v3, model:llama-3.1-8b, model:deepseek-r1-distill-qwen-1.5b, model:deepscaler-1.5b-preview, model:phi-4-mini-reasoning, model:gpt-4o, metric:ps, metric:pn, metric:pns]
---
**TL;DR** Uses counterfactual sufficiency and necessity to prune reasoning traces, producing demonstrations and training data that improve efficiency while generally preserving accuracy.
**Problem** CoTs omit essential steps or include costly redundant reasoning.
**Method** Correct-answer sufficiency gate; corrupted-step rollouts and validator-based PNS estimates; filtered demonstrations and supervised fine-tuning.
**Findings** Shorter traces generally retain or improve accuracy across mathematical and commonsense benchmarks; experts judge 84% of 50 sampled traces sufficient and necessary.
**Limits** Single-run correctness does not establish assumed perfect sufficiency. Results depend on validators, replacement quality, thresholds and rollout costs; difficult tasks and prompts remain sensitive. PS/PNS target the gold answer and the estimator scores validator-judged coherence: relevance to a correct solution, not faithfulness to the model's own decision process.

**Relations**
- (none)

**New tags**
- (none)
