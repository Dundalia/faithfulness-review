---
key: mohammadi2025evaluating
title: "Evaluating GRPO and DPO for Faithful Chain-of-Thought Reasoning in LLMs"
authors: "Mohammadi, Kozak & Giachanou"
year: 2025
venue: "preprint"
url: https://arxiv.org/abs/2512.22631v1
checked: 2026-10-15
tags: [source:trustme, object:cot, reveals:reasoning-validity, signal:judge, signal:gold-rationale, lever:preference, factor:outcome-rl, contribution:analysis, motivation:explainability, motivation:monitoring, domain:math, scale:small, scale:mid, model:qwen2.5-1.5b, model:qwen2.5-3b, model:qwen2.5-7b, model:qwen2.5-14b, metric:nli-entailment, metric:llm-judge-score]
---
**TL;DR** Compares GRPO and DPO for CoT faithfulness on GSM8K with entailment and judge proxies: GRPO scores higher than DPO at the largest model size, with similar accuracy.
**Problem** CoTs can mislead (e.g. unacknowledged cues); effect of DPO vs GRPO on CoT faithfulness not compared.
**Method** LoRA (4-bit) Qwen2.5-Instruct 1.5–14B on GSM8K: DPO on 1.2K pref pairs vs GRPO (format, correctness, numeric-consistency rewards). 200 test Qs; faithfulness = NLI entailment of reference rationale + Gemma-3-27B judge of coherence/correctness.
**Findings** GRPO-14B best/tied on all metrics (+56.4% NLI, +29.9% judge vs DPO-14B); accuracy ~equal (0.755 vs 0.740). Accuracy & judge rise with size; DPO NLI flat (0.313→0.314). Both collapse at 3B, GRPO worse.
**Limits** "Faithfulness" = plausibility/validity proxies, no causal test; no untrained baseline; uniform hyperparams, no seeds/variance reported; GSM8K only; no code.

**Relations**
- (none)

**New tags**
- (none)
