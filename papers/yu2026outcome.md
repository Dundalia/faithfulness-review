---
key: yu2026outcome
title: "Outcome Rewards Do Not Guarantee Verifiable or Causally Important Reasoning"
authors: "Yu, Tartaglini, Hase et al."
year: 2026
venue: "ICML 2026"
url: https://arxiv.org/abs/2604.22074v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, reveals:correctness, signal:cot-intervention, signal:judge, lever:sft, lever:rl-reward, updates:behavior, updates:explanation, contribution:metric, contribution:analysis, contribution:method, motivation:explainability, motivation:monitoring, domain:math, domain:logic, domain:synthetic, scale:small, eval:later-rl, eval:optimization-pressure, model:qwen2.5-1.5b, model:qwen2.5-3b, model:qwen2.5-7b, model:llama-3.2-3b, metric:causal-importance-of-reasoning, metric:sufficiency-of-reasoning]
---
**Problem** Does outcome-reward RLVR produce CoT that the model actually uses and that a verifier can check?
**Method** CIR: answer-prob. shift under CoT truncation (avg JS div.). SR: gpt-4o-mini's answer from answer-stripped CoT unchanged when question added. GRPO, 40 ReasoningGym tasks. Fixes: SFT on 2–512 o3-mini traces before RLVR; CIR/SR aux rewards.
**Findings** RLVR ↑acc, but CIR ↓ on 19/40 tasks, SR ↓ on 17/40; both reliably ↑ only if acc gain >50 pts. No-CoT training ≈ same acc on low-CIR/SR tasks. SFT & aux rewards ↑CIR, SR (aux: also stricter SR−); aux keeps RLVR-level acc, large-n SFT ↑acc. Code released.
**Limits** Models ≤7B. SR binary, permissive; one seed for SR reward. Aux rewards don't ↑acc where base acc ≈0; lexical richness ↓ vs SFT. RLVR drop not universal: on MATH L5, CIR & SR ↑.

**Relations**
- builds-on [[lanham2023measuring]]: CIR turns truncation/early-answering into an averaged JS-divergence score
- builds-on [[kirchner2024proververifier]]: SR operationalizes its legibility/verifiability notion ('inspired by'); no prover-verifier training

**New tags**
- (none)
