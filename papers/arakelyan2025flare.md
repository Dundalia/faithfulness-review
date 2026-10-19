---
key: arakelyan2025flare
title: "FLARE: Faithful Logic-Aided Reasoning and Exploration"
authors: "Arakelyan, Minervini, Verga et al."
year: 2024
venue: "EMNLP 2025"
url: https://arxiv.org/abs/2410.11900v5
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:stated-plan, signal:env-label, lever:prompt-pipeline, updates:behavior, contribution:method, contribution:metric, motivation:reasoning-quality, motivation:explainability, domain:math, domain:logic, domain:open-qa, domain:mcq, scale:small, scale:mid, scale:large, scale:closed, model:llama-3.1-8b, model:command-r, model:command-r-plus, model:gpt-3.5-turbo, model:gpt-4o, metric:sim-vs-exec-trace-rouge, metric:code-search-relation-overlap, metric:hallucinated-search-facts, metric:unused-code-relations]
---
**Problem** CoT answers unfaithful to reasoning; solver-based F-CoT/Logic-LM need code-tuned models, fail on fuzzy commonsense queries.
**Method** Few-shot plan → Prolog code → LLM-simulated execution trace (no solver) → answer. Faithfulness = ROUGE-Lsum of simulated vs. real Prolog trace; code-trace fact/relation matching flags hallucinated and unused relations.
**Findings** SOTA on 7/9 QA sets (avg +28% over CoT), 3/3 logic sets with self-refinement. Faithfulness correlates with accuracy. Correct-answer traces: +18.1pp unique emergent facts, +8.6pp code-trace relation overlap, −3.6pp unused relations.
**Limits** Faithfulness only on executable code (avg 67%); model-level correlation, no causal tests or CoT faithfulness baseline. Llama-8B CoT beats FLARE on 4/9. No code release stated.

**Relations**
- compares-to [[lyu2023faithful]]: F-CoT baseline via its codebase; non-code models score 0 on most sets
- compares-to [[pan2023logiclm]]: Logic-LM baseline on its ProntoQA/LogicalDeduction/AR-LSAT subsets; adopts its self-refinement

**New tags**
- (none)
