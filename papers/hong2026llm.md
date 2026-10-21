---
key: hong2026llm
title: "Do LLM Self-Explanations Help Users Predict Model Behavior? Evaluating Counterfactual Simulatability with Pragmatic Perturbations"
authors: "Hong & Roth"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2601.03775v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, object:posthoc-expl, reveals:decision-factors, signal:generic-cf, contribution:analysis, contribution:meta-evaluation, contribution:benchmark, motivation:explainability, domain:open-qa, scale:closed, scale:mid, eval:human-study, eval:measure-validation, model:gpt-3.5-turbo, model:gpt-4, model:llama-3.3-70b, model:gpt-4.1, metric:counterfactual-simulatability, metric:cot-simulation-gain]
---
**TL;DR** Tests whether self-explanations help LLM judges and humans predict model behavior on counterfactuals: they help, more stably on pragmatic perturbations than LLM-generated counterfactuals, but human gains are small.
**Problem** Self-explanations may be unfaithful. Do they still help users predict model behavior (counterfactual simulatability), and does the way test counterfactuals are built drive that verdict?
**Method** StrategyQA; CoT and post-hoc explanations from GPT-3.5, GPT-4 and Llama-3.3-70B. Three LLM-generated counterfactual sets vs. four Gricean pragmatic perturbations (presupposition flip, lexical, scalar, contextualization). Two-phase prediction (without, then with, the explanation) by gpt-3.5-turbo and gpt-4.1 judges and 28 humans.
**Findings** Explanations raise judge simulation accuracy (mean gain ~0.30 weak judge, ~0.15 strong judge). Post-hoc ≈ CoT. Lexical, presupposition-flip and scalar sets give more stable gains than LLM-generated ones; contextualization near ceiling for strong judge. Explanations reduce anchoring to wrong original answers. Humans: accuracy 0.614→0.634 (LLM-generated sets ≤+0.01), confidence 3.21→4.38. LLM–human agreement ~0.60.
**Limits** Binary yes/no QA, one dataset, few models. Judge gains mostly from fewer 'cannot guess' answers (scored wrong); selective accuracy barely moves. Small user study (50 items, GPT-4 explanations only). Taxonomy incomplete; LLM-generated artifacts. Paper claims usefulness, not faithfulness. Code and annotations promised on publication.

**Relations**
- extends [[pmlr-v235-chen24bl]]: adds no-explanation phase and Gricean perturbations to its StrategyQA setup; its LLM counterfactuals as baseline

**New tags**
- (none)
