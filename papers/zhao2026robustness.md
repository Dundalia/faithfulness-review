---
key: zhao2026robustness
title: "On Robustness and Chain-of-Thought Consistency of RL-Finetuned VLMs"
authors: "Zhao, Shah, Zhu et al."
year: 2026
venue: "ICML 2026"
url: https://arxiv.org/abs/2602.12506v3
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:cot-reliance, signal:output-agreement, signal:cot-intervention, signal:planted-cf, lever:rl-reward, lever:data-augmentation, updates:behavior, updates:explanation, contribution:analysis, contribution:benchmark, contribution:negative-result, motivation:reasoning-quality, motivation:reliability, domain:multimodal, domain:mcq, domain:open-qa, scale:small, scale:closed, eval:ood, eval:measure-validation, eval:human-study, eval:scaling, eval:confound-control, factor:outcome-rl, model:qwen2.5-vl-7b, model:vision-r1-7b, model:vigorl-spatial-7b, model:o3, model:gemini-2.5-pro, model:gemini-3.1-pro, metric:stance-consistency, metric:unfaithful-correct-rate, metric:biased-context-accuracy-drop]
---
**TL;DR** Tests RL-finetuned vision-language models for robustness to misleading text and CoT-answer consistency: outcome RL lets consistency drift, and a faithfulness reward restores it but over-follows misleading text.
**Problem** RL-finetuned VLMs gain benchmark accuracy, but it is unclear whether they are robust to misleading text and whether their CoTs agree with their answers.
**Method** Wrong-Caption, prefilled Wrong-Think and Stop-Think perturbations on 8 visual QA sets (mostly spatial MCQ). Models: 5 RL variants of Qwen2.5-VL-7B, plus o3, o4-mini and two Gemini Pro models. Qwen3-32B judges CoT-answer consistency (human-validated). Own GRPO runs: data mix, adversarial augmentation, faithfulness-gated reward.
**Findings** Misleading text cuts accuracy. The most robust open models are the least consistent; closed models are more robust and more consistent. Under outcome RL, accuracy rises while consistency drifts; augmentation helps Wrong-Caption robustness but does not stop the drift. A faithfulness reward restores consistency but over-follows misleading text; combined with augmentation, training is unstable and often collapses.
**Limits** Measures answer-CoT consistency, not causal faithfulness (authors concede). Open models 7-8B only; mostly spatial MCQ. Large variance across seeds. The judge-in-reward is costly and uses the same Qwen3 judge as the evaluation; faithfulness-reward results mostly in appendix. No code release mentioned.

**Relations**
- (none)

**New tags**
- lever:data-augmentation: adds perturbed or cue-bearing training inputs (e.g. correct and misleading captions or CoT prefixes) under an otherwise unchanged training objective
