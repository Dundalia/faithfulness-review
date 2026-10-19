---
key: macar2025thought
title: "Thought Branches: Interpreting LLM Reasoning Requires Resampling"
authors: "Macar, Bogdan, Rajamanoharan & Nanda"
year: 2025
venue: "ICLR 2026"
url: https://arxiv.org/abs/2510.27484v2
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:cot-reliance, reveals:planted-cue, reveals:decision-factors, signal:cot-intervention, signal:planted-cf, signal:wild-cf, contribution:metric, contribution:analysis, contribution:meta-evaluation, motivation:monitoring, motivation:explainability, domain:agentic, domain:mcq, domain:social-bias, domain:math, scale:small, scale:mid, scale:large, eval:measure-validation, model:qwen-32b, model:qwen3-235b-a22b, model:llama-3.1-nemotron-ultra-253b, model:deepseek-r1, model:deepseek-r1-distill-qwen-14b, model:qwen3-8b, metric:resilience-score, metric:counterfactual-plus-plus-importance, metric:counterfactual-importance, metric:transplant-hinted-answer-rate]
---
**Problem** A single sampled CoT cannot show which steps cause a decision. Handwritten edits are off-policy, and models re-derive steps that were removed.
**Method** Resample continuations from each sentence (100 rollouts). New metrics: resilience (resamples until content stays gone) and counterfactual++ importance (KL with content absent). Compare on- and off-policy insertions; transplant hinted unfaithful CoT prefixes into unhinted MMLU prompts; estimate resume sentence-cluster effects. Settings: blackmail, MMLU, resumes.
**Findings** Self-preservation sentences: lowest resilience, ~0.001-0.003 KL; plan generation drives blackmail. Off-policy edits near-zero effect; on-policy resampling cuts blackmail/whistleblowing up to 100% for some targets. Hints nudge CoT subtly, diffusely, cumulatively ("Wait" 30% rarer). Sentences mediate 77.5% of demographic effect on average (significant in 5/8 resumes). Code released.
**Limits** Costly, offline only. Specific prompts (one blackmail scenario, 20 CoTs/model; 40 hint-effective MMLU Qs; 8 resumes); hint and resume studies use one model each. Black-box, no internal validation. LLM-judge outcome labels. On MATH, handwritten edits have stronger local effects.

**Relations**
- builds-on [[chua2025deepseek]]: uses its professor-hinted MMLU prompts to build the unfaithful CoT corpus
- compares-to [[lanham2023measuring]]: off-policy handwritten CoT insertions as baseline; found to understate causal effects
- contradicts [[arcuschin2025chain]]: frames unfaithful hinted CoT as nudged genuine reasoning, not mainly post-hoc rationalization

**New tags**
- (none)
