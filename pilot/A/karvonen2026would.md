# karvonen2026would — coder A

Would this change your answer? Evaluating Explanations of LLM Behavior In The Wild with Counterfactual Experiments

tags: [source:trustme, source:faith-improvement, object:self-prediction, object:posthoc-expl, object:external-expl, reveals:input-features, reveals:planted-cue, signal:wild-cf, signal:planted-cf, lever:sft, contribution:method, contribution:benchmark, contribution:negative-result, contribution:analysis, motivation:explainability, motivation:auditing, domain:chat, domain:mcq, scale:large, eval:ood, eval:behavior-control, eval:privileged-access-test, model:qwen3-8b, model:gemma-3-27b, model:qwen3.5-397b-a17b, model:llama-3.1-8b, model:claude-opus-4.8, metric:counterfactual-simulatability, metric:counterfactual-prediction-auroc, metric:cue-attribution]

**Problem** Explanations of LLM behavior lack ground truth; counterfactual evals are confined to planted hints.
**Method** CHIVE agent flags unexpected WildChat/PETRI behaviors and tests prompt edits (30 resamples), giving verified CF claims. Uses: score AO/NLA/SAE uplift for a predictor agent; SFT data for self-prediction.
**Findings** Tools give no uplift, across 2 targets and 3 predictor families. Self-prediction SFT generalizes to held-out hints and OOD PETRI, about matching Opus. No privileged access. Open-ended explanation training mixed.
**Limits** Proxy task (the CF could just be run); read-only tools; LLM-judge filters; mostly non-thinking mode.

**Relations**
- builds-on [[pmlr-v235-chen24bl]]: adopts counterfactual simulatability as the criterion for explanation quality
- extends [[hase2026counterfactual]]: takes CF prediction beyond planted hints; reuses its MMLU cues as held-out eval
- extends [[guo2026introspective]]: generalizes cue-removal self-prediction training to diverse in-the-wild prompt edits
- contradicts [[li2025training]]: finds no privileged access for same Qwen3-8B/Llama-3.1-8B pair; Li finds it
- builds-on [[binder2024looking]]: applies its self- vs cross-trained privileged-access test; likewise finds none
- contradicts [[mayne2026positivecasefaithfulnessllm]]: self-explanations give no CF-simulatability uplift on open-ended prompts; Mayne finds uplift
- builds-on [[turpin2023language]]: uses hint-setting paradigm; base models rarely acknowledge hints, as in Turpin
- extends [[arcuschin2025chain]]: surfaces in-the-wild unfaithful CoT via counterfactual edits, not templated inconsistencies

**New tags**
- eval:privileged-access-test: compares a self-trained predictor against a cross-trained model trained on identical data about the target, to test for introspective or privileged access
- metric:counterfactual-simulatability: gain (e.g. delta AUROC) of a predictor/simulator in predicting counterfactual-edit outcomes when given an explanation or tool output, over a transcript-only baseline
- metric:counterfactual-prediction-auroc: accuracy/AUROC of a model answering whether a given prompt edit would shift its own behavior rate by at least 30pp
- metric:cue-attribution: whether an explanation attributes the answer to a planted cue exactly on the cases where the cue flipped the answer
