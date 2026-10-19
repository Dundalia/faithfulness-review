---
key: li2025drift
title: "Drift: Enhancing LLM Faithfulness in Rationale Generation via Dual-Reward Probabilistic Inference"
authors: "Li, Yan & He"
year: 2025
venue: "ACL 2025"
url: https://aclanthology.org/2025.acl-long.340/
checked: 2026-10-15
tags: [source:search-2026-10-14, object:posthoc-expl, reveals:decision-factors, signal:generic-cf, lever:inference-time, updates:explanation, contribution:method, motivation:explainability, domain:classification, domain:mcq, scale:small, model:llama-3.1-8b, model:mistral-7b, metric:semantic-variation, metric:word-inclusion]
---
**Problem** Rationales ignore key input context → unfaithful to decisions; decomposed-CoT prompting superficial, retraining costly.
**Method** Training-free SMC (Feynman-Kac) decoding: answer first, label forced by fine-tuned classifier (task reward); domain-expert LM lookahead-reweights rationale particles (rationale reward). Llama-3.1-8B, Mistral-7B; ASAP grading, SNLI/MNLI, TruthfulQA-MC; faith via input removal/insertion.
**Findings** Llama avg acc 42→74%, faith 0.050→0.112, but = expert alone (below it on 4/7 sets); Mistral gains on all sets. Both rewards needed; logit fusion ~55% less faithful (ASAP); out-of-task expert still helps. +32% inference time vs beam search. Code released.
**Limits** Classification only; 100 test items/set; label dictated by external classifier (acc still < classifier's 87%); faith = rationale sensitivity to input edits only; no other faithfulness-method baselines.

**Relations**
- (none)

**New tags**
- (none)
