---
key: maniyar2026measuring
title: "Measuring Reward Hacking and Reasoning-Answer Decoupling Under Position-Confounded Optimization"
authors: "Maniyar, Sandhu & Mishra"
year: 2026
venue: "COLM 2026 workshop (AI Measurement Science)"
url: https://arxiv.org/abs/2608.15445v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:cot-reliance, reveals:misbehavior, reveals:hidden-behavior, signal:output-agreement, signal:implanted-behavior, signal:judge, contribution:analysis, contribution:metric, motivation:auditing, domain:mcq, domain:math, scale:small, scale:mid, eval:ood, eval:later-rl, eval:confound-control, eval:measure-validation, eval:scaling, factor:outcome-rl, model:qwen2.5-1.5b, model:qwen2.5-3b, model:qwen2.5-14b, model:llama-3.1-8b, model:llama-3.2-3b, model:gemma-3-4b, metric:reasoning-answer-decoupling-rate]
---
**Problem** Reward is correct on every example but confounded with answer position; endpoint accuracy cannot tell a learned shortcut from capability loss.
**Method** GRPO+LoRA on GSM8K recast as 4-option MCQ, correct option always A vs shuffled; 10 Qwen2.5/Llama-3.x/Gemma-3 models (0.5-14B); test with randomized positions; decoupling scored by numeric check and GPT-4.1-mini judge; MMLU-50 and value-laden probes; 200-step unbiased recovery.
**Findings** A-rate often >0.90, accuracy toward chance (Llama-3.1-8B 0.82→0.31). Reasoning reaches correct answer yet picks wrong option, usually A (numeric up to 0.29, judge 0.66). Larger Qwen robust. Qwen2.5-1.5B MMLU A-rate 27%→77%. Recovery partial; decoupling (Qwen2.5-1.5B) and OOD residue persist.
**Limits** Single extreme confound; small, directional OOD probes (MMLU-50, one prompt); judge noise; LoRA, ≤14B; does not test whether the CoT mentions position; no code reported.

**Relations**
- builds-on [[turpin2023language]]: moves its always-A answer bias from few-shot prompt into training reward

**New tags**
- (none)
