---
key: doi2025investigating
title: "Investigating Training and Generalization in Faithful Self-Explanations of Large Language Models"
authors: "Doi, Isonuma & Yanaka"
year: 2025
venue: "IJCNLP-AACL 2025 SRW"
url: https://arxiv.org/abs/2512.07288v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:posthoc-expl, reveals:decision-factors, signal:generic-cf, lever:sft, updates:explanation, contribution:method, contribution:analysis, motivation:explainability, domain:classification, scale:small, scale:mid, eval:ood, model:tulu-2-7b, model:tulu-2-13b, metric:self-consistency-faithfulness]
---
**Problem** Self-explanations (attribution/redaction/counterfactual) are often unfaithful; how can they be improved, and do gains transfer across styles?
**Method** Erasure attribution → most influential word → one-word pseudo-faithful explanation per style → LoRA continual SFT mixed with Tulu-2 instruct data; scored by Madsen self-consistency check on Sent140/SNLI/AGNews.
**Findings** Faithfulness ↑ in most task×style cells (13B Sent140 +0.115/+0.094/+0.292); prediction-only SFT mostly <0.01 or ↓. Cross-style transfer (13B, up to 0.781); unseen-task and per-word-count multi-word gains consistent only for attribution.
**Limits** Tulu-2 7B/13B, classification, one-word ops; needs instruct data; cross-task/style 13B only, single run; untrained baselines keep few compliant outputs (7B CF Sent140 529/5000), some cells n<50; in-style ≤0.595; acc drops (13B attr AGNews 0.815→0.597) despite "no significant drop" claim; no code.

**Relations**
- builds-on [[madsen2024self]]: adopts its self-consistency check, [REDACTED] redaction scheme and prompt designs

**New tags**
- (none)
