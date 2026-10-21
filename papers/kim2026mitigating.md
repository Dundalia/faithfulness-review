---
key: kim2026mitigating
title: "Mitigating Legibility Tax with Decoupled Prover-Verifier Games"
authors: "Kim & Lee"
year: 2026
venue: "ICLR 2026 workshop (Trustworthy AI)"
url: https://arxiv.org/abs/2602.23248v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:external-expl, reveals:correctness, signal:env-label, lever:multi-agent-game, lever:rl-reward, lever:prompt-pipeline, updates:explanation, contribution:method, contribution:theory, motivation:scalable-oversight, domain:math, scale:small, eval:behavior-control, model:llama-2-7b, model:qwen2-1.5b, metric:answer-agreement, metric:verifier-score]
---
**TL;DR** Proposes decoupled prover-verifier games, where an RL-trained translator rewrites a fixed solver's solutions checkably: accuracy matches the solver, removing the legibility tax, though legibility is only assessed qualitatively.
**Problem** PVG costs accuracy (legibility tax), attributed to one prover having to be both correct and checkable.
**Method** Fixed RL-trained solver; translator RLOO-trained (SRC-like reward) to rewrite its solution checkably, keeping its answer; sneaky translator vs. small verifier. Theorem: equilibria = faithful + checkable translators.
**Findings** Answer agreement 99.8% (test). Accuracy 56.9 vs solver 57.0 vs reproduced PVG 22.3 → no tax. Sneaky needs more steps in round 2 → verifier more robust; proofs shorter, more structured. Code released.
**Limits** Legibility only qualitative, no human study. GSM8K-Aug; Llama-2-7B, Qwen2-1.5B verifier. Faithfulness = answer match only. PVG baseline modified, lacks CoT (possible other tax cause).

**Relations**
- extends [[kirchner2024proververifier]]: decouples PVG into fixed solver + translator; redefines completeness without correctness
- compares-to [[kirchner2024proververifier]]: reproduced PVG baseline (RLOO) drops accuracy to 22.3 vs DPVG 56.9

**New tags**
- (none)
