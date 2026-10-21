---
key: zeng2026evaluating
title: "Evaluating and Improving LLM Self-Modeling"
authors: "Zeng, Assis & Wang"
year: 2026
venue: "EMNLP 2026"
url: https://arxiv.org/abs/2608.30980v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:self-prediction, object:posthoc-expl, reveals:decision-factors, reveals:planted-cue, signal:generic-cf, signal:planted-cf, lever:rl-reward, lever:sft, updates:explanation, contribution:benchmark, contribution:method, motivation:explainability, motivation:auditing, domain:math, domain:code, domain:social-bias, domain:mcq, domain:safety-refusal, domain:agentic, scale:small, scale:mid, model:llama-3.1-8b, model:qwen3-8b, model:gpt-oss-20b, model:qwen3-4b, model:qwen3-32b, model:deepseek-v3.1, metric:self-modeling-skill, metric:self-modeling-raw-score, eval:ood, eval:privileged-access, eval:behavior-control]
---
**TL;DR** Benchmarks whether LLMs predict their own behavior under counterfactual prompt edits: models are far from ceiling, RL improves skill with partial transfer, and no clear own-model advantage appears.
**Problem** Do LLM self-reports predict their own behavior (e.g. "would this edit flip my answer?")? Even frontier models fail simple counterfactuals.
**Method** 9-task benchmark on GSM8K/HumanEval/WildGuardTest/BBQ. GT = the model's own sampled behavior on original or perturbed prompts. Skill = score minus dummy-predictor baseline. Perturb→verify→revise data from ~100 HF datasets + multi-turn BLOOM → LoRA RL.
**Findings** 18 models far from ceiling (best +0.147). Multitask RL raises skill in 3 families (Qwen3 4B–32B too), with partial cross-task transfer; SFT collapses OOD. No consistent own-model advantage → no clear evidence of introspection. MMLU-Pro −0.051 to +0.026. Code released.
**Limits** Text-only behavioral labels, not mechanism. Much of the gain is format compliance (Llama, GPT-OSS). Downstream red-team/prompt-engineering benefits are small.

**Relations**
- builds-on [[binder2024looking]]: adopts Feature-Rate self-prediction and cross-model introspection comparison
- contradicts [[binder2024looking]]: no consistent self-prediction advantage: other-model explainers can match or beat own model
- builds-on [[li2025training]]: Output-Prediction task and hint-injection design adapted from its setup
- compares-to [[li2025training]]: its released SFT checkpoints get negative skill on Output-Prediction; RL positive
- builds-on [[plunkett2025self]]: benchmark aggregates its self-modeling task format
- builds-on [[madsen2024self]]: perturbation/redaction self-explanation tasks recast as Component-Attribution, Perturbation-Choice
- builds-on [[mayne2025llms]]: self-generated counterfactual edits become the Edit-Proposal task
- builds-on [[dehghanighobadi2025can]]: self-generated counterfactual explanations become the Edit-Proposal task
- builds-on [[chen2025reasoning]]: hint-injection perturbations inspired by its cue design

**New tags**
- (none)
