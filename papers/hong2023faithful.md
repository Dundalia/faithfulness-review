---
key: hong2023faithful
title: "Faithful Question Answering with Monte-Carlo Planning"
authors: "Hong, Zhang, Zhao et al."
year: 2023
venue: "ACL 2023"
url: https://arxiv.org/abs/2305.02556v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, reveals:correctness, signal:by-construction, signal:judge, lever:prompt-pipeline, lever:inference-time, lever:sft, updates:behavior, contribution:method, motivation:explainability, domain:mcq, scale:small, eval:ood, model:t5-large, model:deberta-v3-large, model:text-davinci-003, model:gpt-3.5-turbo, metric:hypothesis-faithfulness, metric:step-validity, metric:fact-validity, metric:entailment-tree-allcorrect]
---
**Problem** CoT answers may not follow from invalid/irrelevant steps → untrustworthy QA; step-wise faithful-QA methods (overgenerate-filter, beam) lack foresight, can't update facts.
**Method** Fame: T5-large controller assembles retrieve/entail/end actions into entailment tree; Monte-Carlo planning scored by verifier (step validity + hypothesis faithfulness); option picked by tree score; behavior cloning + verifier-guided iterative training.
**Findings** EntailmentBankQA acc 53.1→67.1% vs Entailer; beats SI on Tasks 1/2; better cross-dataset (WorldTreeQA, OBQA). Human eval (50 q): SV 66%, HF 82% (ties Entailer), overall 46 vs 24%; ChatGPT SV 38.3% despite 92% acc. MCP > greedy/filter/beam.
**Limits** Science MCQ, fixed fact corpus, few module types; T5-large only; ~31s/option. Faithfulness = human-rated tree validity/support, not causal test. Acc trails prompted 175B LLMs (86/92% on 50-q sample). No code link.

**Relations**
- builds-on [[creswell2022faithful]]: uses its EntailmentBankQA conversion and Task 1/2 settings
- compares-to [[creswell2022faithful]]: SI+Halter(+Search) baseline (reported numbers); Fame higher on Tasks 1/2
- builds-on [[tafjord2022entailer]]: reuses its hypothesis conversion and human-labeled step-validity data for verifier
- compares-to [[tafjord2022entailer]]: Entailer T5-large baseline; Fame higher accuracy and fact validity

**New tags**
- (none)
