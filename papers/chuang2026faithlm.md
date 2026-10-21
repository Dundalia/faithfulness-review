---
key: chuang2026faithlm
title: "FaithLM: Towards Faithful Explanations for Large Language Models"
authors: "Chuang, Wang, Chang et al."
year: 2024
venue: "EACL 2026"
url: https://arxiv.org/abs/2402.04678v4
checked: 2026-10-15
tags: [source:search-2026-10-14, object:posthoc-expl, object:external-expl, reveals:decision-factors, signal:generic-cf, lever:prompt-pipeline, lever:inference-time, updates:explanation, contribution:method, contribution:metric, contribution:theory, motivation:explainability, domain:mcq, domain:open-qa, scale:small, scale:closed, eval:ood, eval:behavior-control, model:vicuna-7b, model:phi-2, model:gpt-3.5-turbo, model:claude-2, metric:contrary-hint-fidelity]
---
**TL;DR** Introduces FaithLM, which scores explanations by how much appending their negation shifts the prediction and iteratively refines explanations against this score, beating self-explanation baselines on that same score.
**Problem** Post-hoc NL explanations of LLM decisions are often unfaithful; token-masking fidelity can't test explanation content that is absent from the input.
**Method** Contrary-hint fidelity: an LLM negates the explanation, the negation is appended to the target's input, and the prediction shift is measured. Explainer (GPT-3.5/Claude-2) iteratively refines the explanation and the trigger prompt against this score; frozen targets Vicuna-7B, Phi-2.
**Findings** Higher fidelity than SelfExp and self-consistency on ECQA, TriviaQA-Long, COPA (MedMCQA 0.96 vs 0.70/0.47); closer to ECQA human rationales (GPT-4o/NLI); optimized prompts transfer to Social-IQA, XCOPA. Target unchanged. Code released.
**Limits** Same score is optimized and reported (loop stops on flip); no specificity check; score underspecified (logit shift vs flip rate); small targets, old explainers; theorem assumes hint = do-intervention; extra compute per instance.

**Relations**
- compares-to [[madsen2024self]]: SelfExp single-pass self-explanation prompting is the main baseline

**New tags**
- (none)
