---
key: ananthula2026decodable
title: "Decodable but Not Faithful: Coupling Natural-Language Rationales to Programmatic Verifiers"
authors: "Ananthula & Kumarappan"
year: 2026
venue: "ICML 2026 workshop (AI4Math)"
url: https://arxiv.org/abs/2606.21678v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, reveals:decision-factors, signal:env-label, signal:cot-intervention, signal:interp-tool, signal:generic-cf, lever:sft, lever:activation-loss, lever:architecture, updates:explanation, updates:behavior, contribution:method, contribution:negative-result, contribution:metric, motivation:explainability, domain:synthetic, domain:math, domain:logic, domain:code, domain:classification, scale:small, scale:mid, model:gpt-2-124m, model:from-scratch-transformer, model:smollm3-3b, model:gpt-oss-20b, metric:consistency-head-accuracy, metric:counterfactual-swap-following, metric:activation-patching-following, metric:prose-claim-agreement]
---
**Problem** Rationales may not reflect verifier-checked claims; probe decodability is often read as evidence of faithfulness.
**Method** Linear head on pooled rationale states predicts a programmatic-verifier label (Lean, KataGo, code oracle, FEVER), added to the LM loss; optional BEC attention mask; diagnostic ladder: decodability → span swaps → patching → generation.
**Findings** Coupling high (code 98.6%; LeanCheck 100% span-following; KataGo 81%); synthetic patching shifts claims 73–89% vs 31%. But code prose is fluent yet describes unrelated algorithms; pretraining and λ up to 1e4 don't help. FEVER evidence-only pooling: lower acc, truer evidence sensitivity.
**Limits** Tiny models (2–4-layer, GPT-2 124M; 3B/20B appendix only); mostly templated data; code LM trained on mismatched explanations; "unfaithful" operational, not causal; mostly one seed. Code in supplement.

**Relations**
- (none)

**New tags**
- (none)
