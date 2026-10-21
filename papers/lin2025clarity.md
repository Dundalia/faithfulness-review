---
key: lin2025clarity
title: "CLARity: Reasoning Consistency Alone Can Teach Reinforced Experts"
authors: "Lin, Jiang, Wu et al."
year: 2025
venue: "ACL 2026"
url: https://arxiv.org/abs/2510.09278v2
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:reasoning-validity, reveals:cot-reliance, signal:output-agreement, signal:judge, lever:rl-reward, updates:behavior, updates:explanation, contribution:method, contribution:analysis, factor:outcome-rl, motivation:reasoning-quality, motivation:scalable-oversight, domain:mcq, domain:professional, scale:small, eval:ood, eval:human-study, eval:measure-validation, eval:held-out-evaluator, eval:optimization-pressure, eval:scaling, model:qwen2.5-7b, model:qwen2.5-3b, model:qwen2.5-1.5b, model:deepseek-v3, model:gpt-4o, metric:answer-explanation-alignment, metric:correct-and-consistent-rate]
---
**TL;DR** Introduces CLARity, a GRPO reward for agreement between options the CoT endorses and the chosen answer: raises CoT-answer consistency on legal and medical multiple-choice questions at unchanged accuracy.
**Problem** Outcome-only RL on legal/medical MCQs raises accuracy, but the options the CoT endorses increasingly contradict the final answer (JEC-QA pilot: inconsistent responses 7%→31%). Process reward models (PRMs) are costly.
**Method** CLARity: GRPO with a small Qwen2.5-7B reward model that penalizes mismatch between CoT-endorsed and chosen options. Regex option-wise stage first. Easy MCQs are reformulated. Policies: Qwen2.5-3B/7B. Data: JEC-QA, MedQA. Evaluation judge: DeepSeek-V3. Code released.
**Findings** Vs standard RL (7B): consistency 91.8 vs 75.3%, correct-and-consistent +7.5 pts, raw accuracy unchanged (61.3 vs 61.1). Small-LLM PRM fails. Dropping Stage-1 (shorter responses) or a 1.5B checker yields simpler, superficial reasoning (suspected reward hacking). Training step 3.5 vs 2 min.
**Limits** Consistency is LLM-judged textual agreement (r=0.61 with one human annotator), not causal faithfulness. MCQ law/medicine only, Qwen models of 7B or less. Expert ratings on 50 responses: gains of at most 0.2 on a 5-point scale. No hyperparameter search.

**Relations**
- (none)

**New tags**
- (none)
