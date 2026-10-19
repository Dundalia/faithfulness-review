# chuang2026faithlm — coder A

FaithLM: Towards Faithful Explanations for Large Language Models

tags: [source:search-2026-10-14, object:posthoc-expl, object:external-expl, reveals:input-features, signal:generic-cf, lever:prompt-pipeline, lever:inference-time, contribution:method, contribution:metric, contribution:theory, motivation:explainability, domain:mcq, domain:open-qa, scale:small, scale:frontier-api, eval:ood, model:vicuna-7b, model:phi-2, model:gpt-3.5-turbo, model:claude-2, metric:contrary-hint-fidelity]

**Problem** Post-hoc NL explanations of LLM answers often unfaithful; token-removal fidelity can't test semantic content absent from the input.
**Method** Fidelity = target's prediction shift when an LLM-written contrary of the explanation is added to the input. Explainer LLM (GPT-3.5/Claude-2) iteratively rewrites the explanation and the trigger prompt from a score trajectory.
**Findings** Higher fidelity than SelfExp & self-consistency on ECQA, TriviaQA-Long, COPA in ~20 steps (MedMCQA 0.96 vs 0.70/0.47). More GT-similar rationales. Optimized prompts transfer to Social-IQA/XCOPA.
**Limits** Eval metric = optimization target (loop stops at a flip). Only Vicuna-7B/Phi-2 targets. Iterative compute cost.

**Relations**
- compares-to [[madsen2024self]]: SelfExp prompting baseline; FaithLM reports higher contrary-hint fidelity
- builds-on [[chen2025reasoning]]: adopts its hint-intervention faithfulness test, applied to explanation content
- builds-on [[lanham2023measuring]]: intervention paradigm; but argues CoT edits test self-consistency, not fidelity
- compares-to [[pmlr-v235-chen24bl]]: contrasts causal contrary-hint sensitivity with counterfactual simulatability
- builds-on [[tanneru2024hardness]]: uses its claim that CoT steps are not post-hoc explanations

**New tags**
- domain:open-qa: open-ended or extractive short-answer QA without answer options, incl. reading comprehension (e.g. TriviaQA)
- metric:contrary-hint-fidelity: change in the target model's prediction when a statement contradicting the explanation is added to the input
