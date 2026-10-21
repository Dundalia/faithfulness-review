---
key: tutek2025measuring
title: "Measuring Chain of Thought Faithfulness by Unlearning Reasoning Steps"
authors: "Tutek, Hashemi Chaleshtori, Marasović & Belinkov"
year: 2025
venue: "EMNLP 2025"
url: https://arxiv.org/abs/2502.14829v4
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:decision-factors, signal:param-intervention, contribution:metric, contribution:analysis, motivation:explainability, domain:mcq, scale:small, eval:human-study, model:llama-3-8b, model:llama-3.2-3b, model:mistral-7b, model:phi-3-mini, metric:ff-hard, metric:ff-soft]
---
**TL;DR** Introduces FUR, which unlearns CoT steps from the weights to test whether answers depend on them: answers often flip, and this parametric faithfulness barely tracks human plausibility judgments.
**Problem** Context perturbation tests measure self-consistency, not parametric faithfulness: models can recover erased steps from weights.
**Method** FUR (PFF instance): unlearn each CoT step's content words (NPO+KL, FF2) → no-CoT answer flips (ff-hard) or loses probability (ff-soft)? Controls: efficacy, specificity, MMLU. 4 LMs, 5 MCQA sets.
**Findings** MMLU ~unchanged; answers often flip, mostly more than Add-mistake; efficacy tracks ff-hard (r=0.889). Post-unlearning CoTs argue for other answers (GPT-4o-mini judge). ff-soft vs human plausibility r=0.15. Code released.
**Limits** Only CoT/no-CoT-agreeing instances; lower bound, no recall guarantee. Imperfect unlearning; needs weights; costly per step. English MCQA, ≤8B.

**Relations**
- compares-to [[lanham2023measuring]]: Add-mistake and paraphrase baselines; FUR flags more CoTs as faithful
- contradicts [[lanham2023measuring]]: context perturbations may underestimate faithfulness; truncation/filler-insensitive (post-hoc) CoT can still be faithful
- compares-to [[parcalabescu2023measuring]]: CC-SHAP baseline attempted, NaN on 90.24% of instances; adopts self-consistency distinction

**New tags**
- (none)
