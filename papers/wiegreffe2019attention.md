---
key: wiegreffe2019attention
title: "Attention is not not Explanation"
authors: "Wiegreffe & Pinter"
year: 2019
venue: "EMNLP 2019"
url: https://arxiv.org/abs/1908.04626v2
checked: 2026-10-21
tags: [source:background-2026-10-21, object:external-expl, reveals:decision-factors, signal:interp-tool, contribution:metric, contribution:meta-evaluation, contribution:analysis, motivation:explainability, domain:classification, domain:professional, scale:small, eval:measure-validation, model:bilstm, model:mlp, metric:diagnostic-mlp-f1, metric:tvd-jsd-tradeoff]
---
**TL;DR** Argues that attention can be an explanation, against Jain and Wallace: learned attention guides a simple model better than adversarial attention, and per-instance adversaries overstate manipulability.
**Problem** Jain & Wallace's case against attention as explanation rests on per-instance adversarial attention detached from the model that computes it, with no baseline for normal variance; whether attention explains depends on the definition (plausible vs faithful).
**Method** Reproduce J&W's BiLSTM + additive attention on 6 binary tasks (SST, IMDb, AG News, 20News, MIMIC Diabetes/Anemia). Four tests: uniform-attention baseline; variance across 8 random seeds; diagnostic non-contextual MLP whose token outputs are weighted by frozen guide attention; model-consistent adversary trained with loss TVD(to base predictions) − λ·KL(from base attention), swept over λ.
**Findings** Uniform attention matches learned on AG News, 20News (dropped), SST borderline. Base-LSTM attention is the best MLP guide (Diabetes F1 0.753 vs 0.699 learned, 0.404 uniform). Trained adversaries reach mean JSD >0.4 at base-level F1 but are poor guides (Diabetes 0.503, SST 0.592, IMDb 0.700; Anemia 0.932 the outlier). Convex TVD/JSD curves support manipulability, but J&W's per-instance setup exaggerates it; seed variance already large for Diabetes negatives. Attention is "an" explanation, not "the" one; exclusivity not needed for plausibility. Code released.
**Limits** LSTM binary text classification only (no QA, NLI, seq2seq); English; no human evaluation, functionally grounded proxies only. Best adversary per dataset picked on test-set F1; SST epochs selected on test loss.

**Relations**
- builds-on [[jain2019attention]]: reproduces its BiLSTM + additive attention setup, datasets, splits and TVD/JSD measures
- contradicts [[jain2019attention]]: per-instance adversarial attention exaggerates manipulability; model-consistent adversaries are less extreme and fail as MLP guides, so attention is not disproved as explanation

**New tags**
- (none)
