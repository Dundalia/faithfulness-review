---
key: arcuschin2026biases
title: "Biases in the Blind Spot: Detecting What LLMs Fail to Mention"
authors: "Arcuschin, Chanin, Garriga-Alonso & Camburu"
year: 2026
venue: "ICML 2026"
url: https://arxiv.org/abs/2602.10117v5
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:decision-factors, signal:generic-cf, signal:wild-cf, contribution:metric, contribution:analysis, motivation:monitoring, motivation:auditing, domain:classification, domain:social-bias, scale:small, scale:mid, scale:closed, eval:measure-validation, eval:confound-control, eval:adversarial, factor:outcome-rl, model:gemma-3-27b, model:gemini-2.5-flash, model:gpt-4.1, model:grok-4.1-fast, model:qwq-32b, model:claude-sonnet-4, metric:unverbalized-bias-count, metric:concept-verbalization-rate, metric:verbalization-filter-rate]
---
**Problem** CoTs omit input factors that drive decisions (unverbalized biases); bias audits need predefined categories and hand-built datasets.
**Method** Black-box pipeline: o3 proposes concepts from clustered inputs; paired +/- input edits; McNemar on decision flips with Bonferroni and early stopping; concepts cited in >30% of flipped CoTs dropped. Hiring, loan and admissions tasks, 7 LLMs; code and datasets released.
**Findings** 52 unverbalized biases. Rediscovers gender and race biases (all pro-female, pro-minority); finds new ones (Spanish fluency, English proficiency, formality); hiring effects 3-5 pp. Catches 85% of injected secret biases. RLVR QwQ-32B is no more faithful than its SFT sibling (filter rate 97.0 vs 97.2%). Early stopping saves about 1/3 of cost.
**Limits** Binary decision tasks only. LLM edits may confound (judge drops 42%). GPT-5-mini detector kappa 0.67 and over-flags. Only hypothesized concepts are tested. Verbalization via proxies is missed.

**Relations**
- contradicts [[chua2025deepseek]]: Chua: reasoning models verbalize cues more; here RLVR QwQ-32B no more faithful than SFT sibling

**New tags**
- (none)
