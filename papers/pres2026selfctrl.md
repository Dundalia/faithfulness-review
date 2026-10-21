---
key: pres2026selfctrl
title: "Self-CTRL: Self-Consistency Training with Reinforcement Learning"
authors: "Pres, Ruis, Ghebreselassie et al."
year: 2026
venue: "COLM 2026 workshop (Actionable Interpretability)"
url: https://arxiv.org/abs/2606.18327v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:self-report, reveals:hidden-behavior, reveals:decision-factors, signal:implanted-behavior, signal:generic-cf, signal:judge, lever:rl-reward, lever:rl-mechanics, updates:explanation, updates:behavior, contribution:method, motivation:explainability, motivation:auditing, motivation:alignment, domain:synthetic, domain:chat, domain:safety-refusal, scale:small, model:llama-3.1-8b, model:qwen3-8b, metric:calibration-r2, metric:normalized-simulatability-gain, metric:counterfactual-refusal-accuracy, metric:jury-consistency, eval:ood, eval:behavior-control]
---
**TL;DR** Introduces Self-CTRL, RL that rewards consistency between a model's self-explanations and its behavior: training explanations makes them far more predictive, while training behavior cuts jailbreaks but lowers predictiveness.
**Problem** Self-explanations (refusal rules, learned latent biases) don't predict own behavior on related inputs, and behavior breaks stated rules; standard training scores outputs per prompt, not across contexts.
**Method** Self-CTRL: GRPO-style RL on paired meta/object prompts; reward = explanation-behavior consistency (coin log-lik, or 8-juror jury of the LM itself); update explanations, behavior or both (lambda); one-sided runs KL-anchor the other side. Llama-3.1-8B (+Qwen3-8B), LoRA.
**Findings** Coins: held-out R2 0.24->0.64, ~matches oracle bias supervision. Constitutional: expl. training NSG -0.09->0.81, auditor refusal acc 0.36->0.92; behavior training HarmBench ASR 15%->0.5% but NSG -0.29; mixed = Pareto middle. MMLU within ~2 pts; beh. training WildChat refusal 1%->10%.
**Limits** 8B LoRA only; collapse to vague "be safe" fixed points needs structured prompts, juries, aux rewards; small noisy jury, compliance (not likelihood) scoring; permissive Qwen3 leaves rules underidentified; no adversarial distributions; LM-judged evals; no code release mentioned.

**Relations**
- builds-on [[pres2026consistency]]: instantiates its cross-context self-consistency framework for explanation-behavior pairs
- builds-on [[mayne2026positivecasefaithfulnessllm]]: adopts its simulatability view and NSG metric for the OOD evaluation

**New tags**
- (none)
