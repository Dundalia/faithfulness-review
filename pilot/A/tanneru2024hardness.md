# tanneru2024hardness — coder A

On the Hardness of Faithful Chain-of-Thought Reasoning in Large Language Models

tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, signal:cot-intervention, lever:prompt-pipeline, lever:sft, lever:steering, contribution:negative-result, contribution:analysis, motivation:explainability, domain:mcq, domain:math, domain:logic, scale:small, scale:frontier-api, model:llama-3-8b-instruct, model:gpt-3.5-turbo, model:gpt-4, metric:early-answering-aoc]

**Problem** Can standard steering methods (ICL, fine-tuning, activation editing) make CoT faithful, i.e. make the answer actually depend on the stated steps?
**Method** Score CoTs per instance by early-answering AOC → most-faithful CoTs used as ICL demos and LoRA/API SFT data (deterministic/stochastic, faithful/uniform). Also ITI-style editing of top-K heads along faithfulness-probe directions. Tested on AQuA, LogiQA, TruthfulQA.
**Findings** Gains marginal and inconsistent. ICL/SFT raise faithfulness at an accuracy cost. Activation editing gives ~no gain, and best heads/α/K vary by dataset. GPT-4 is most accurate but least faithful.
**Limits** Single truncation metric, which conflates CoT necessity with faithfulness. Many differences not significant. No fine-tuned GPT-4 (API errors). Steering only at 8B. Short study.

**Relations**
- builds-on [[lanham2023measuring]]: adopts early-answering truncation metric, per-instance probability AOC variant
- builds-on [[agarwal2024faithfulness]]: same group's faithfulness-vs-plausibility framing motivates the study

**New tags**
- (none)
