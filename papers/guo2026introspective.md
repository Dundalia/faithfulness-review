---
key: guo2026introspective
title: "Introspective Coupling: Self-Explanation Training Tracks Behavioral Change Despite Fixed Supervision"
authors: "Guo, Ruis, Andreas & Li"
year: 2026
venue: "ICML 2026 workshop (CompLearn)"
url: https://arxiv.org/abs/2606.32038v1
checked: 2026-10-15
tags: [source:trustme, source:faith-improvement, object:self-prediction, reveals:planted-cue, reveals:hidden-behavior, signal:planted-cf, signal:interp-tool, lever:sft, updates:explanation, contribution:analysis, motivation:explainability, motivation:auditing, domain:mcq, domain:classification, domain:chat, domain:synthetic, scale:small, scale:mid, eval:ood, eval:privileged-access, eval:specificity, model:qwen3-8b, model:llama-3.1-8b, model:qwen3-32b, metric:explanation-exact-match, metric:self-orig-gap, metric:patching-correlation]
---
**TL;DR** Shows that, with a KL behavior regularizer, self-explanation SFT makes explanations track the model's current behavior rather than the checkpoint that produced the labels, and fails without it.
**Problem** Self-explanation SFT uses fixed labels from an earlier checkpoint. As behavior drifts, the model may learn to explain that old checkpoint instead of its current behavior.
**Method** SFT on M0's counterfactual cue-ablation explanations ("would the answer change without the cue?") + KL behavior regularizer. Explanations scored against current-self vs M0 labels. Tasks: Hint-MMLU, AITA, refusal. Also activation patching, label-noise/cross-model sweeps, auxiliary post-training.
**Findings** Self>Orig on all 3 tasks (disagreements resolved toward self 79/82/63%); without KL, Self<Orig. Needs online label-self agreement ≳0.7. Holds with Llama labels (53% agreement). Tracks aux-induced shifts (held-out Jabberwocky 79.8%). Patching corr 0.89 vs 0.53 unreg. General-capability cost mostly within ~2pp.
**Limits** Templated change/no-change explanations; ≤32B. Needs behavioral variance (refusal labels near-constant). LR sweep contradicts the label-self hypothesis; LoRA-rank sweep shows other factors matter. GSM8K/TruthfulQA drop ~5pp in one run. No code release mentioned.

**Relations**
- builds-on [[li2025training]]: reuses its counterfactual cue-ablation explanation setup, Hint-MMLU and untrained baseline
- builds-on [[chen2025reasoning]]: Hint-MMLU sycophancy hint cues taken from it
- extends [[binder2024looking]]: scales self-prediction tracking behavior change to safety tasks and realistic post-training

**New tags**
- (none)
