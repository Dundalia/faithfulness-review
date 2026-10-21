---
key: matton2025walk
title: "Walk the Talk? Measuring the Faithfulness of Large Language Model Explanations"
authors: "Matton, Ness, Guttag & Kıcıman"
year: 2025
venue: "ICLR 2025"
url: https://arxiv.org/abs/2504.14150v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:decision-factors, signal:generic-cf, contribution:metric, contribution:analysis, motivation:explainability, domain:mcq, domain:social-bias, domain:professional, scale:closed, scale:small, eval:specificity, model:gpt-3.5-turbo, model:gpt-4o, model:claude-3.5-sonnet, model:llama-3.1-8b, metric:causal-concept-faithfulness]
---
**TL;DR** Introduces a faithfulness score correlating each concept's causal effect with how often explanations cite it: LLM explanations hide social-bias and safety influences and misstate medical evidence.
**Problem** CoT explanations can misstate which input concepts drove the answer → over-trust. Existing scores don't show how explanations mislead.
**Method** Faithfulness = PCC(concept causal effect, rate explanations cite it). GPT-4o extracts concepts, writes removal/swap CFs, labels which concepts explanations credit. Bayesian hierarchical pooling across Qs. BBQ (Turpin variant) & MedQA, 30 Qs each.
**Findings** BBQ: GPT-3.5 0.75 > Claude 0.62 > GPT-4o 0.56. Explanations hide the influence of social bias and safety refusals. MedQA 0.30–0.50, with misleading claims about evidence. 5 objective BBQ Qs: 0.95. Anti-bias prompt no gain. Code released.
**Limits** 30 Qs/dataset. Aux-LLM CF error rate 6–10%. Dataset-specific prompts. Single-concept edits miss correlated concepts. Mostly closed models (Llama-8B only in appendix).

**Relations**
- builds-on [[turpin2023language]]: uses its BBQ weak-evidence variant and CoT prompt; recovers its bias-masking finding

**New tags**
- (none)
