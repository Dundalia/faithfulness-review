---
key: peng2026measuring
title: "Measuring and Mitigating Post-hoc Rationalization in Reverse Chain-of-Thought Generation"
authors: "Peng, Chen, Luo et al."
year: 2026
venue: "ICML 2026"
url: https://arxiv.org/abs/2602.14469v4
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:cot-reliance, signal:planted-cf, signal:cot-intervention, signal:judge, lever:prompt-pipeline, lever:sft, updates:explanation, contribution:metric, contribution:method, contribution:negative-result, motivation:reasoning-quality, domain:chat, domain:mcq, domain:math, scale:small, scale:mid, scale:large, eval:ood, eval:behavior-control, model:qwen3-4b, model:qwen3-8b, model:qwen3-32b, model:qwen3-235b-a22b, model:nanbeige4-3b, metric:lexical-anchoring, metric:trajectory-anchoring, metric:probabilistic-anchoring]
---
**Problem** Reverse CoT generation sees the answer → post-hoc rationalized traces; distilled students must reason without it → train-inference mismatch.
**Method** 3 anchoring metrics: lexical overlap, trajectory (answer-visible vs blind entropy gap), probabilistic (answer recoverability from trace). SSR: answer-abstracted functional skeleton → trace; SSR-D: SFT-distilled SSR. LMArena data, Qwen3/NBG4 students.
**Findings** "Don't reveal answer" prompts cut lexical but raise trajectory anchoring (ironic process); SSR lowers all three, Reason zone 38.0→54.8%; SSR-D up to +10 pts over suppression, better OOD retention; LLM judges agree. Code released.
**Limits** Scorer-model proxies; phase 2 still sees answer, no bound on residual channel; ironic mechanism untested; suppression effect small on Qwen3-8B; SSR-D anchoring unmeasured (judges only); OOD mostly below untrained (8B AIME 70.0→44.2).

**Relations**
- (none)

**New tags**
- (none)
