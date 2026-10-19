---
key: binder2024looking
title: "Looking Inward: Language Models Can Learn About Themselves by Introspection"
authors: "Binder, Chua, Korbak et al."
year: 2024
venue: "ICLR 2025"
url: https://arxiv.org/abs/2410.13787v1
checked: 2026-10-15
tags: [source:trustme, object:self-prediction, reveals:hidden-behavior, reveals:planted-cue, signal:generic-cf, signal:implanted-behavior, signal:planted-cf, lever:sft, updates:explanation, contribution:metric, contribution:benchmark, contribution:analysis, contribution:method, contribution:negative-result, motivation:explainability, motivation:auditing, motivation:model-welfare, domain:mcq, domain:text-continuation, scale:closed, scale:mid, eval:ood, eval:privileged-access, model:gpt-4o, model:gpt-4, model:gpt-3.5-turbo, model:llama-3.1-70b, metric:self-prediction-accuracy, metric:self-cross-prediction-advantage, metric:calibration-mad]
---
**Problem** Can LLMs introspect, i.e. know facts about their own behavior that are not in, or derivable from, their training data?
**Method** SFT M1 to predict properties of its own outputs to hypothetical prompts (2nd char, even/odd, ethical stance; no CoT). SFT a different M2 on M1's behavior. Compare both on held-out datasets. Then finetune M1 on Claude outputs to shift its behavior.
**Findings** SFT lifts GPT-4o self-prediction 32.6→49.4%. Self beats cross for GPT-4o, GPT-4, Llama-70B (Llama 48.5% vs GPT-4o 31.8%); cross plateaus as data grows. Self-trained better calibrated (Llama-70B, animals 2nd-char: MAD 23.0→8.7, cross 21.3). Shifted GPT-4o tracks new behavior (35.4% vs 21.7% old). GPT-3.5 advantage tiny (+0.8%).
**Limits** Only simple short-output properties; fails on long outputs. No self-advantage predicting sycophancy/bias. No transfer to SAD (except Predict Tokens), coordination or sandbagging evals. Code + data released.

**Relations**
- builds-on [[chua2024biasaugmented]]: uses its biasing-opinion prompts for the bias-susceptibility self-prediction task

**New tags**
- (none)
