---
key: duzan2026chainofthought
title: "Chain-of-Thought Monitoring Can Be Unreliable in Implicit-Influence Settings"
authors: "Duzan & Cooper Stickland"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2608.04735v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:planted-cue, signal:planted-cf, contribution:benchmark, contribution:analysis, motivation:monitoring, domain:mcq, domain:code, domain:chat, domain:social-bias, domain:subjective-judgment, scale:closed, scale:large, scale:small, eval:measure-validation, eval:specificity, eval:adversarial, eval:confound-control, factor:cue-design, factor:prompt-instructions, factor:cot-necessity, model:claude-opus-4.5, model:claude-sonnet-4.5, model:kimi-k2-thinking, model:glm-4.7, model:grok-3-mini, model:gpt-oss-120b, metric:monitor-recall, metric:g-mean-squared]
---
**Problem** Monitorability evals mostly use explicit influence (instructed hiding); implicit influence studied piecemeal, never matched against explicit.
**Method** Matched nudges: implicit aside vs. explicit act-and-conceal instruction; binary choice, ratings, HLE MCQA, coding; 7 reasoning models; GPT-5 monitor; guidance/adversarial system prompts; multi-hop variant. Code released.
**Findings** Explicit detection 60–94%; implicit 41–46 pp lower in two settings, 11 in a third (coding near ceiling). Benign guidance prompts keep shifts, cut implicit detection as low as 5%; load-bearing chains raise binary-choice detection 12%→51%.
**Limits** LLM-judge monitor (κ 0.73 vs. human); Claude CoTs are API summaries; prompted nudges, not weight-level misalignment.

**Relations**
- builds-on [[guan2025monitoring]]: adopts intervention structure and g-mean²; implicit Settings 1, 3 score 0.16–0.18 vs. their 0.7–0.8
- builds-on [[emmons2025chain]]: tests its CoT-necessity claim with multi-hop nudges; recovery only partial

**New tags**
- domain:subjective-judgment: decisions or numeric ratings with no gold answer (everyday choices, essay/CV/poem grading, triage urgency) where an irrelevant detail should not matter
