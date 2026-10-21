---
key: luo2026removal
title: "A Removal Based Approach to Improve LLM Faithfulness at Test-Time"
authors: "Luo, Nahian, Guttag et al."
year: 2026
venue: "NeurIPS 2026 workshop (AI4GOOD)"
url: https://arxiv.org/abs/2609.04343v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:planted-cue, reveals:decision-factors, signal:planted-cf, signal:generic-cf, lever:inference-time, lever:prompt-pipeline, updates:behavior, contribution:method, motivation:explainability, domain:mcq, domain:social-bias, scale:small, scale:mid, eval:specificity, model:qwen3.5-9b, model:gemma-4-12b, model:qwen3.5-27b, metric:hint-verbalization-rate, metric:causal-concept-faithfulness, metric:normalized-simulatability-gain]
---
**TL;DR** Proposes a test-time wrapper deleting input concepts the explanation leaves uncredited, then re-querying: large completeness gains on hinted questions, only small ones on social-bias questions.
**Problem** Incomplete explanations: input concepts (hints, demographics) sway answers without being credited. Prior test-time fixes target unsoundness or still let hidden concepts leak in.
**Method** Removal wrapper: an auxiliary LLM (Qwen3.5-27B) extracts the input's concepts, flags those the explanation does not credit and deletes them → target is re-queried in a fresh context. Also a Combined variant with modular prompting. Tested on hint-augmented MCQ and BBQ.
**Findings** Hint QA: verbalization = 1 by construction; CCF r 0.27→0.87 (Qwen), 0.34→0.92 (Gemma); NSG negative→positive; beats regulative prompt. BBQ: small gains, overlapping 90% intervals; Removal alone trails faithfulness prompting on Qwen3.5-9B; Combined best on both Qwens, Removal on Gemma; hidden concepts halved except Qwen3.5-9B (inconsistent credit sets).
**Limits** Completeness only, not soundness. Needs accurate aux model and consistent credit sets; CCF metric reuses the wrapper's aux concept pipeline. Concepts treated as independent. Hint CCF/NSG only on hint-flipped subset (100/86 Qs); BBQ 100 items. Changes answers, no accuracy reported; no code.

**Relations**
- builds-on [[matton2025walk]]: reuses causal concept faithfulness metric and its concept-extraction/crediting/removal pipeline
- builds-on [[chen2025reasoning]]: hint verbalization metric and protocol (temperature 0, normalization)
- builds-on [[chua2024biasaugmented]]: uses its hint-augmented multiple-choice QA dataset
- builds-on [[turpin2023language]]: uses its BBQ variant, rewritten with neutral person labels
- builds-on [[mayne2026positivecasefaithfulnessllm]]: normalized simulatability gain metric as second faithfulness measure
- compares-to [[radhakrishnan2023question]]: factored decomposition re-implemented as baseline; also combined with removal wrapper

**New tags**
- (none)
