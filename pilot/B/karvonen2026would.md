# karvonen2026would — coder B

Would this change your answer? Evaluating Explanations of LLM Behavior In The Wild with Counterfactual Experiments

tags: [source:trustme, source:faith-improvement, object:self-prediction, object:posthoc-expl, object:external-expl, reveals:input-features, reveals:planted-cue, signal:wild-cf, signal:planted-cf, lever:sft, lever:interp-tool-access, contribution:method, contribution:benchmark, contribution:negative-result, contribution:analysis, motivation:explainability, motivation:auditing, domain:chat, domain:mcq, domain:agentic, scale:small, scale:large, eval:ood, eval:behavior-control, eval:privileged-access, model:qwen3-8b, model:gemma-3-27b, model:qwen3.5-397b-a17b, model:llama-3.1-8b, model:claude-opus-4.8, model:gpt-5.5, metric:counterfactual-prediction-auroc, metric:uplift-over-transcript-baseline, metric:counterfactual-simulatability, metric:hint-attribution]

**Problem** explanation evals rely on narrow planted hints; no diverse ground truth for why LLMs behave as they do in the wild.
**Method** CHIVE agent flags odd WildChat behaviors, runs prompt-edit counterfactuals (resampled rates) → verified yes/no claims. Test AO/NLA/SAE uplift for a predictor agent; LoRA-SFT targets to predict own counterfactuals.
**Findings** tools: no uplift over transcript-only (3 predictor families, 2 targets). Self-prediction SFT generalizes to held-out hints and OOD PETRI, ≈ Opus reference. No privileged access. Open-ended expl. training mixed.
**Limits** proxy task (one could just run the edit); read-only tools only; mostly non-thinking mode; clean prompt-level causes only.

**Relations**
- builds-on [[pmlr-v235-chen24bl]]: counterfactual simulatability as the criterion for judging explanations
- extends [[hase2026counterfactual]]: counterfactual evaluation from planted hints to in-the-wild behaviors; reuses its MMLU cues
- extends [[guo2026introspective]]: cue-removal self-prediction training broadened to diverse wild counterfactuals
- contradicts [[li2025training]]: finds no privileged access (self = cross-trained); Li et al. report it, same models
- builds-on [[binder2024looking]]: self- vs cross-trained predictor test for privileged access
- builds-on [[turpin2023language]]: hint setting used as held-out eval; base models rarely attribute answers to hints
- contradicts [[mayne2026positivecasefaithfulnessllm]]: self-explanations give no simulatability uplift on wild behaviors; Mayne finds they help
- compares-to [[chua2024biasaugmented]]: prior hint-setting training generalizes narrowly; CHIVE-data training generalizes further
- extends [[arcuschin2025chain]]: surfaces in-the-wild unfaithful CoT via counterfactuals (appendix, qualitative only)

**New tags**
- lever:interp-tool-access: giving an explainer or predictor agent read-only access to activation-interpretability tools (activation oracles, NLAs, SAEs) to improve its explanations or predictions of a target model
- eval:privileged-access: compares a self-trained predictor with a cross-trained model on identical data about the target to test for privileged self-access
