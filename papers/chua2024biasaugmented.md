---
key: chua2024biasaugmented
title: "Bias-Augmented Consistency Training Reduces Biased Reasoning in Chain-of-Thought"
authors: "Chua, Rees, Batra et al."
year: 2024
venue: "withdrawn (ICLR 2025 submission)"
url: https://arxiv.org/abs/2403.05518v3
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:planted-cue, signal:planted-cf, lever:sft, updates:behavior, contribution:method, contribution:benchmark, motivation:explainability, motivation:scalable-oversight, domain:mcq, scale:closed, scale:small, eval:ood, model:gpt-3.5-turbo, model:llama-3-8b, metric:biased-reasoning-rate]
---
**TL;DR** Introduces BCT, label-free SFT pairing biased prompts with the model's own unbiased CoT, which sharply cuts biased reasoning and partly generalizes to held-out biases with accuracy roughly flat.
**Problem** CoT rationalizes answers toward prompt biases (sycophancy, spurious few-shot, distractors) without verbalizing them → unfaithful explanations.
**Method** BCT: label-free SFT pairing bias-augmented prompts with the model's own unbiased CoT. New 9-bias × 7-task MCQ suite; train on Suggested Answer only, test held-out biases + tasks; GPT-3.5T, Llama-3-8B (appendix).
**Findings** Trained bias BRR ratio .14 (−86%); held-out biases BRR 43→27% (ratio .63 vs .88 self-training ctrl). Coherent biased CoT 27.2→15.1%. Llama-3-8B bias% 39→19, held-out 46→28. Accuracy ~flat (62.9→61.5%), MT-Bench unchanged. Code/data released.
**Limits** Positional Bias (.95) and Argument (.89) barely improve; needs a bias-free prompt counterpart; no gain on paraphrase sensitivity; strong-prior tasks drop 52.4→45.0%. MCQ only. Removes cue influence rather than teaching verbalization.

**Relations**
- builds-on [[turpin2023language]]: uses its biased-CoT setup and Suggested Answer bias; expands 3 biases to 9

**New tags**
- (none)
