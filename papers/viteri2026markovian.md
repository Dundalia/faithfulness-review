---
key: viteri2026markovian
title: "Markovian Transformers for Informative Language Modeling"
authors: "Viteri, Lamparth, Chatain & Barrett"
year: 2024
venue: "ICLR 2026"
url: https://arxiv.org/abs/2404.18988v8
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, reveals:hidden-info, reveals:correctness, signal:cot-intervention, signal:by-construction, lever:architecture, lever:rl-reward, lever:rl-mechanics, updates:behavior, updates:explanation, contribution:method, motivation:explainability, domain:math, domain:mcq, domain:text-continuation, scale:small, eval:held-out-evaluator, model:llama-3.1-8b, model:mistral-7b, model:qwen3-4b, model:phi-3.5-mini, metric:perturbation-fragility, metric:cross-model-informativeness]
---
**Problem** Standard CoT is not load-bearing: the answer can bypass the reasoning, so the CoT may not reflect the decision.
**Method** Markovian bottleneck: answer predicted from length-capped CoT alone, question hidden. GRPO-style RL on ln P(ans|CoT) vs a frozen-baseline CoT, actor-reward grads, KL to base; LoRA.
**Findings** GSM8K 19.6→57.1%, ARC 36.1→79.9%; mean ≈3–4 pp below Non-Markovian GRPO (MMLU 13 pp). Larger drops under CoT perturbation than Non-Markovian (Wiki, most QA; not arithmetic). Llama CoTs help Mistral/Phi/GPT-2 predict GSM8K answers. Code released.
**Limits** Ensures sufficiency, not mirroring of internals; post-hoc CoT still possible. Steganography only argued against (KL, transfer). ≤8B; no human study; ~$20K compute.

**Relations**
- (none)

**New tags**
- (none)
