# chuang2026faithlm — coder B

FaithLM: Towards Faithful Explanations for Large Language Models

tags: [source:search-2026-10-14, object:posthoc-expl, object:external-expl, reveals:decision-knowledge, signal:generic-cf, lever:inference-time, lever:prompt-pipeline, contribution:method, contribution:metric, contribution:theory, motivation:explainability, domain:mcq, domain:open-qa, scale:small, scale:frontier-api, eval:ood, model:vicuna-7b, model:phi-2, model:gpt-3.5-turbo, model:claude-2, metric:contrary-hint-fidelity]

**Problem** Free-text LLM explanations are often unfaithful. Token-masking fidelity can't test explanation content that isn't in the input.
**Method** Fidelity = answer shift after an LLM-negated explanation ("contrary hint") is added to the input. An explainer LLM iteratively rewrites the explanation and the trigger prompt from fidelity-scored trajectories. Targets: Vicuna-7B and Phi-2. Explainers: GPT-3.5 and Claude-2.
**Findings** Higher fidelity than SelfExp and self-consistency on ECQA, TriviaQA-Long and COPA; converges in ~20 steps. Explanations are closer to human rationales (GPT-4o/NLI judges). Optimized prompts transfer to Social-IQA and XCOPA.
**Limits** The eval metric is also the optimization target, with no independent faithfulness check. Hint quality depends on the LLM. Small targets; results shown in figures only. The theorem assumes the hint acts as a do-intervention.

**Relations**
- builds-on [[chen2025reasoning]]: adopts its hint-intervention paradigm, applied to explanation content via contrary hints
- compares-to [[madsen2024self]]: SelfExp single-pass self-explanation is the main baseline; FaithLM reports higher fidelity
- contradicts [[lanham2023measuring]]: argues editing the CoT output measures self-consistency, not fidelity; needs semantic input intervention

**New tags**
- reveals:decision-knowledge: the semantic facts or knowledge, in the input or latent, that the model's answer actually depends on
- domain:open-qa: free-form or extractive question answering, incl. reading comprehension (e.g. TriviaQA)
