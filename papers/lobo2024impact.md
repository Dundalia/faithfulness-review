---
key: lobo2024impact
title: "On the Impact of Fine-Tuning on Chain-of-Thought Reasoning"
authors: "Lobo, Agarwal & Lakkaraju"
year: 2024
venue: "NAACL 2025"
url: https://arxiv.org/abs/2411.15382v2
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:cot-reliance, signal:cot-intervention, contribution:analysis, motivation:explainability, domain:mcq, domain:math, domain:professional, scale:small, scale:closed, eval:ood, factor:post-training, model:llama-3-8b, model:gpt-3.5-turbo, model:gpt-4, metric:cot-pred-match]
---
**Problem** Does task-specific fine-tuning degrade CoT accuracy and CoT faithfulness (the answer depending on the stated steps)?
**Method** SFT of Llama-3-8B (QLoRA) and of GPT-3.5/GPT-4 (via API) on GSM8K (with rationales), MedQA or CosmosQA (answers only). Each model is scored on 4 datasets with per-instance Lanham tests (early termination, filler substitution, paraphrase), reported as CoT Pred Match at 25/50/75% of the steps. Also sweeps QLoRA rank 8/16/32.
**Findings** Fine-tuning usually lowers CoT accuracy, most in Llama-3-8B; GPT models gain no-CoT accuracy. GPT-4 and GPT-3.5 faithfulness barely changes. Llama fine-tuned on MedQA/CosmosQA becomes less faithful on the non-math test sets, at all ranks. GPT-4 least faithful by early-termination and filler tests. Code released.
**Limits** 3 models (GPT sizes undisclosed), 4 datasets; faithfulness shown only as plots, no significance tests. Rationale vs answer-only tuning is confounded with dataset (GSM8K only). Fine-tuned Llama's repetitive CoTs may inflate CoT Pred Match (our reading of Tables 1-2). Early-stage Lanham metrics; no mechanistic analysis.

**Relations**
- builds-on [[lanham2023measuring]]: adapts its early-answering, filler and paraphrase tests to per-instance scores

**New tags**
- (none)
