---
key: karvonen2026would
title: "Would this change your answer? Evaluating Explanations of LLM Behavior In The Wild with Counterfactual Experiments"
authors: "Karvonen, Ong, Kantamneni & Marks"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2608.16747v1
checked: 2026-10-15
tags: [source:trustme, source:faith-improvement, object:self-prediction, object:posthoc-expl, object:external-expl, reveals:decision-factors, reveals:planted-cue, signal:wild-cf, signal:planted-cf, lever:sft, updates:explanation, contribution:benchmark, contribution:analysis, contribution:method, contribution:negative-result, motivation:explainability, motivation:auditing, domain:chat, domain:agentic, domain:mcq, scale:small, scale:mid, scale:large, eval:ood, eval:privileged-access, eval:specificity, eval:behavior-control, model:qwen3-8b, model:gemma-3-27b, model:qwen3.5-397b-a17b, model:llama-3.1-8b, model:claude-opus-4.8, metric:counterfactual-prediction-auroc, metric:uplift-over-transcript-baseline, metric:counterfactual-simulatability, metric:cue-attribution-accuracy]
---
**TL;DR** Introduces CHIVE, which verifies causes of in-the-wild LLM behaviors with counterfactual prompt edits: interpretability tools give no uplift, but training models to predict their own counterfactuals generalizes.
**Problem** Explanation evals rely on narrow planted-hint settings; true causes of natural LLM behaviors unknown → explanations hard to score.
**Method** CHIVE: Opus agent screens WildChat/PETRI responses for unexpected behaviors, runs prompt-edit CFs (30 resamples) → verified true/false CF claims. (1) AO/NLA/SAE uplift to transcript-only predictor; (2) LoRA SFT models to predict own CF outcomes.
**Findings** Interp tools: no uplift (2 targets, 3 predictor families). Self-CF-prediction training generalizes to held-out, OOD PETRI, hint settings ≈ Opus reference; no privileged access. Open-ended expl. training mixed. Code/models/data released.
**Limits** Proxy eval: CFs directly runnable. Read-only activation tools only; mostly non-thinking mode; plain SFT degrades thinking; ~$1–2 per investigation.

**Relations**
- builds-on [[pmlr-v235-chen24bl]]: adopts counterfactual simulatability as the lens for scoring explanations
- builds-on [[hase2026counterfactual]]: reuses its MMLU cue types as held-out hint evaluation
- builds-on [[binder2024looking]]: runs its self- vs cross-trained privileged-access test on CF prediction
- contradicts [[li2025training]]: Li find privileged access (hint setting, same Qwen3-8B/Llama-3.1-8B pair); here none
- contradicts [[mayne2026positivecasefaithfulnessllm]]: Mayne: self-explanations aid prediction; here they give no counterfactual-simulatability uplift
- builds-on [[turpin2023language]]: hint-attribution eval; confirms base models rarely acknowledge the hint

**New tags**
- (none)
