---
key: wang2026concept
title: "From Concept Alignment to Causal Grounding: An Intervention Test of Chain-of-Thought Faithfulness"
authors: "Wang, Wang, Wei et al."
year: 2026
venue: "ICLR 2027 submission (under review)"
url: https://arxiv.org/abs/2609.23065v3
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:internal-strategy, reveals:decision-factors, signal:interp-tool, contribution:metric, contribution:analysis, motivation:explainability, domain:mcq, domain:logic, domain:math, scale:small, eval:measure-validation, eval:confound-control, eval:scaling, model:llama-3.1-8b, model:gemma-2-2b, model:gemma-2-9b, model:qwen3-1.7b, model:qwen3-8b, metric:shared-concept-ablation-drop, metric:cc-sae, metric:sae-concept-jaccard, metric:prediction-grounded-recall]
---
**Problem** Behavioral and attribution tests of CoT faithfulness ignore internal computation. Does the CoT reuse the concepts behind the direct answer, and do those concepts causally drive it?
**Method** One off-the-shelf SAE per layer encodes the answer-position residuals of a no-CoT pass and a CoT-conditioned pass. Three overlap metrics (CC-SAE, Jaccard, recall), plus Δp, the drop in answer probability when the shared features are ablated. 5 open models from 1.7B to 9B; GSM8K, LogiQA, OpenbookQA, ARC-Easy.
**Findings** Overlap is high but barely predicts Δp (lift 1.08). Random and norm-matched ablations give far smaller Δp. Δp mostly peaks at mid-to-late layers. Qwen3 is distributed across layers, Llama-3.1-8B localized. Larger models in a family score higher. Causally important shared concepts are not always verbalized in the CoT.
**Limits** Only models of 9B or less; only items where CoT and no-CoT answers agree. Relies on pretrained SAEs (Δp robust to width/sparsity, r>0.8); no ground truth. Comparison with prior metrics only on Llama-3.1-8B/LogiQA (ρ 0.10–0.30). Verbalization claim rests on hand-picked case studies. No code release stated; under review.

**Relations**
- extends [[parcalabescu2023measuring]]: Moves CC-SHAP-style self-consistency from input attributions to the SAE concept space (CC-SAE)
- compares-to [[lanham2023measuring]]: Early answering, filler, mistakes, paraphrase correlate only weakly with Δp (ρ≈0.10)
- builds-on [[zaman2025causal]]: Uses its continuous prediction-score versions of the Lanham metrics
- compares-to [[tutek2025measuring]]: FUR correlated with Δp (ρ=0.25); also adopts its two-pass agree-only setup
- compares-to [[shen2026detecting]]: CIE scores, supplied by the authors, correlated with Δp (ρ=0.30)
- builds-on [[sun2026investigating]]: Follows its parametric (FUR) faithfulness setup for the metric comparison

**New tags**
- (none)
