---
key: senatorov2026structural
title: "Structural Chain-of-Thought: Reasoning with Executable Computational Graphs"
authors: "Senatorov, Vafin, Tutubalina & Somov"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2610.15107v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, signal:by-construction, signal:cot-intervention, lever:sft, lever:rl-reward, lever:architecture, updates:behavior, contribution:method, motivation:explainability, motivation:reasoning-quality, domain:math, domain:logic, scale:small, model:gemma-2-2b, model:llama-3.2-3b, model:falcon3-3b, model:qwen3-4b, metric:internal-external-gap, metric:f-strong, eval:confound-control]
---
**TL;DR** Introduces Structural CoT, where models emit executable computational graphs that compute the answer: far shorter reasoning, but accuracy drops on MATH and memorized answers can bypass the graph.
**Problem** Free-form CoT is hard to verify, verbose and possibly post-hoc → the answer may not come from the stated reasoning.
**Method** Model emits an executable JSON computational graph; answer = its deterministic execution. Graph SFT → Graph-Based GRPO (style, graded correctness, node-overlap or proof-F1 rewards; faithfulness runs also emit an answer, with answer and answer–graph consistency rewards). 4 models ≤4B, 5 math/proof datasets.
**Findings** Beats Graph SFT on all 5 datasets; up to 6.1× shorter than Default GRPO. Internal–external gap ≈0 on iGSM/MATH; F_strong rises (MATH 21.4→40.2), mainly via F_ID. GSM8k+: F_strong 0 and gap widens to 31.9; Qwen3-4B emits memorized original-GSM8k answers, bypassing the graph.
**Limits** Accuracy cost on MATH (0.19 vs 0.61 Default GRPO). F_OOD (answer follows an edited graph) not consistently improved. Consistency reward directly trains what the gap/F_ID measure. Graph-expressible tasks, ≤4B models only. No code release mentioned.

**Relations**
- (none)

**New tags**
- (none)
