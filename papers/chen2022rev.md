---
key: chen2022rev
title: "REV: Information-Theoretic Evaluation of Free-Text Rationales"
authors: "Chen, Brahman, Ren et al."
year: 2022
venue: "ACL 2023"
url: https://arxiv.org/abs/2210.04982v5
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, object:posthoc-expl, reveals:decision-factors, signal:simulatability, contribution:metric, motivation:explainability, domain:mcq, domain:classification, scale:small, eval:human-study, eval:measure-validation, model:t5-large, model:text-davinci-002, model:lamda-137b, metric:rev]
---
**Problem** Free-text rationale metrics (LAS, RQ) measure only label association, so they cannot detect vacuous rationales that restate input and label without adding new information.
**Method** REV (conditional V-information): label log-prob of a T5-Large evaluator given rationale plus a vacuous baseline (input+label as one sentence), minus that of a second evaluator given the baseline alone. Tested on ECQA, CoS-E, QuaRTz and e-SNLI, scoring T5 rationales and GPT-3/LaMDA CoT. Code released.
**Findings** Scores vacuous rationales low where LAS/RQ score them high; ranking matches human ratings (230 ECQA items). On GPT-3 rationales, REV>0 agrees 80% with human support judgments; LAS/RQ rate only 35%/23% as supporting (56%/60% zero). CoT REV similar for GPT-3 and LaMDA (0.92 vs 0.99) despite 77% vs 59% accuracy.
**Limits** Measures informativeness and label support, not faithfulness to the decision process. Rewards rationales for wrong labels and ignores factuality. Depends on gold-rationale quality and evaluator architecture; tests a single baseline construction.

**Relations**
- compares-to [[hase2020leakageadjusted]]: LAS baseline; rates vacuous rationales high and is less sensitive to input noise

**New tags**
- (none)
