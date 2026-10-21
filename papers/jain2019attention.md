---
key: jain2019attention
title: "Attention is not Explanation"
authors: "Jain & Wallace"
year: 2019
venue: "NAACL 2019"
url: https://arxiv.org/abs/1902.10186v3
checked: 2026-10-21
tags: [source:background-2026-10-21, object:external-expl, reveals:decision-factors, signal:interp-tool, signal:generic-cf, contribution:analysis, motivation:explainability, domain:classification, domain:open-qa, domain:professional, scale:small, eval:measure-validation, model:bilstm, model:cnn, model:mlp, metric:attention-importance-correlation, metric:epsilon-max-jsd, metric:permutation-median-tvd]
---
**TL;DR** Tests whether attention weights explain predictions in BiLSTM models: attention correlates only weakly with gradient and leave-one-out importance, and permuted or adversarial attention often leaves predictions unchanged.
**Problem** Attention weights are often presented as showing which input tokens are responsible for a prediction (faithful explanation); this assumption had not been formally tested.
**Method** Two expected properties tested on BiLSTM encoders (contrast: feedforward "Average", CNN) with additive or scaled dot-product attention on 10 classification/QA/NLI datasets (SST, IMDB, ADR tweets, 20News, AG News, MIMIC Diabetes/Anemia, CNN, bAbI 1–3, SNLI): (i) Kendall τ of attention vs gradient and leave-one-out (LOO) importance; (ii) counterfactual attention with hidden states fixed: random permutation (median output TVD) and adversarial attention maximizing JSD from the original while output stays within ε (0.01 classification, 0.05 QA).
**Findings** BiLSTM attention correlates only weakly and inconsistently with importance (densities around or below 0.5); gradients and LOO agree with each other more than with attention (by ~0.25 τ_g, >0.2 τ_loo; SNLI the exception). Permuting attention often barely moves outputs; adversarial attention often nears the 0.69 JSD bound with equivalent predictions, even at high max attention (weak trend). Feedforward encoders track LOO better (~0.375 higher τ). Diabetes positive class behaves intuitively (few high-precision tokens). Code released.
**Limits** Gradients/LOO not ground truth; how strong correlation should be is subjective; Kendall τ noisy with many irrelevant tokens. Few attention variants; recurrent, conv and feedforward encoders only; no seq2seq. Adversarial weights may be unlikely under the attention module, and multiple plausible explanations may exist.

**Relations**
- (none)

**New tags**
- (none)
