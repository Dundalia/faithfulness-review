---
key: deyoung2020eraser
title: "ERASER: A Benchmark to Evaluate Rationalized NLP Models"
authors: "DeYoung, Jain, Rajani et al."
year: 2020
venue: "ACL 2020"
url: https://arxiv.org/abs/1911.03429v2
checked: 2026-10-21
tags: [source:background-2026-10-21, object:external-expl, object:extractive-rationale, reveals:decision-factors, signal:generic-cf, signal:gold-rationale, signal:by-construction, contribution:benchmark, contribution:metric, motivation:explainability, domain:classification, domain:open-qa, domain:mcq, domain:professional, scale:small, eval:measure-validation, model:bert-base, model:bilstm, model:gru, metric:comprehensiveness, metric:sufficiency]
---
**TL;DR** Introduces ERASER, a benchmark unifying human-rationale datasets with erasure-based faithfulness metrics (comprehensiveness, sufficiency): attention looks plausible but is less faithful than gradients or LIME.
**Problem** Rationale-based interpretability work uses different datasets, tasks and metrics → hard to compare or track progress; agreement with human rationales shows plausibility, not whether the model relied on them.
**Method** Benchmark of 7 datasets with human extractive rationales in one format (Evidence Inference, BoolQ, Movie Reviews, FEVER, MultiRC, CoS-E, e-SNLI), plus comprehensive rationales collected on test subsets. Plausibility: IOU F1, token F1, AUPRC vs human rationales. Faithfulness: comprehensiveness (confidence drop when the rationale is erased) and sufficiency (drop when only it is kept); soft scores cut to top-k (k = mean human rationale length) or AOPC over 1–50% token bins, vs random ordering. Baselines: hard selection (Lei et al., Lehman et al. pipeline, BERT-to-BERT) and soft scores (attention, gradients, LIME on BERT/GloVe+LSTM).
**Findings** Human agreement substantial or better (κ 0.62–0.85; not measured for Evidence Inference). No off-the-shelf model fits all input and rationale lengths. Rationale supervision often raises Lei et al.'s agreement, weakly tied to task performance. Gradients and LIME more comprehensive than attention, which has higher AUPRC (plausible but not faithful); LIME particularly faithful (e-SNLI comprehensiveness 0.437 vs 0.105 attention). Benchmark and code released.
**Limits** Metrics offered as a starting point, not claimed best; top-k discretization forces a threshold choice. AOPC erases tokens from the trained model's input without retraining (unlike ROAR). Hard-selection models assumed faithful by construction (independent encoder/decoder), so only agreement reported for them. Long inputs (Evidence Inference, BoolQ) use GloVe instead of BERT.

**Relations**
- builds-on [[jain2019attention]]: builds its erasure-based faithfulness metrics on such perturbation tests; attention less comprehensive than gradients/LIME, consistent with it

**New tags**
- object:extractive-rationale: input snippets (tokens, spans or sentences) that a model itself selects as the support for its prediction (e.g. select-then-predict or hard-attention rationales), as opposed to post-hoc importance scores
