---
key: dai2025legaldelta
title: "LegalΔ: Enhancing Legal Reasoning in LLMs via Reinforcement Learning with Chain-of-Thought Guided Information Gain"
authors: "Dai, Xu, Liu et al."
year: 2025
venue: "ICASSP 2026"
url: https://arxiv.org/abs/2508.12281v3
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:cot-reliance, signal:simulatability, lever:sft, lever:rl-reward, updates:explanation, updates:behavior, contribution:method, motivation:reasoning-quality, motivation:explainability, domain:professional, domain:classification, scale:small, scale:mid, eval:ood, eval:held-out-evaluator, model:qwen2.5-7b, model:qwen2.5-14b, metric:cot-information-gain, metric:cross-model-informativeness]
---
**Problem** Legal LLMs often answer directly, without multi-step reasoning. RLVR rewards only answer correctness, not how much the CoT contributes.
**Method** SFT on 450 DeepSeek-R1 traces, then GRPO (LoRA) with reward = format + correctness x sigmoid(T*dQ). dQ = the model's own average answer logits with CoT minus without (PMI plus a confidence term). Qwen2.5-7B/14B. Trained on CAIL2018/JEC-QA; 5 in-domain legal tasks; DiscLaw benchmark as OOD.
**Findings** About 10% in-domain gain. Beats R1-Distill, DPO and legal LLMs on average. OOD gain only +1-2 pts. Removing dQ: 73.45 to 70.48 avg (14B; no GRPO 67.55). A Qwen2.5-32B reader gets lower gold-answer perplexity from its CoTs than from the no-dQ variant's. Code released.
**Limits** No faithfulness test (no CoT edits or cues). dQ could reward CoTs that restate the answer. Ablations on 14B only; w/o SFT better on 2/5 tasks; no variance reported. Legal domain only.

**Relations**
- (none)

**New tags**
- (none)
