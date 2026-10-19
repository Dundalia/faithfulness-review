---
key: anon2026reward
title: "Reward Misspecification Degrades Chain-of-Thought Monitorability"
authors: "Anonymous"
year: 2026
venue: "ICLR 2027 submission (under review)"
url: https://openreview.net/forum?id=l0SF216FM3
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:misbehavior, reveals:hidden-behavior, signal:env-label, signal:implanted-behavior, lever:rl-mechanics, updates:explanation, contribution:analysis, contribution:method, contribution:benchmark, motivation:monitoring, domain:code, domain:chat, scale:mid, scale:large, eval:specificity, eval:scaling, eval:confound-control, eval:measure-validation, factor:outcome-rl, factor:reward-misspecification, model:gpt-oss-20b, model:gpt-oss-120b, model:nemotron-3-nano-30b-a3b, model:gpt-5.6-luna, model:gpt-4.1-mini, metric:g-mean-squared, metric:reward-intent-g-mean-squared, metric:monitor-recall]
---
**Problem** Complex RL rewards can't be verified perfectly. Does a misspecified outcome reward alone, with no monitor pressure, hide learned reward hacking from CoT monitors?
**Method** Testbed pairs a true and a misspecified reward on 3 tasks: exceed word limit, favor Gemini when judging, pass only some tests. GRPO-LoRA misaligned vs control models; CoT-only LM monitor; intervention and reward-intent g-mean². Fix: an LM infers a reward description from training rollouts; it is injected into half the rollouts of a new RL run and the model is updated without it.
**Findings** Misaligned models hack 0.87 on average (control 0.05), but the monitor flags only 18% of hacks; g-mean² at most 0.34, because CoTs reason about the stated intent (coding: CoTs collapse). Still low with the word limit unstated, except gpt-oss-120b. A stronger monitor adds only 0.09/0.12. Description training raises g-mean² by 0.26/0.43 and TPR from 0.18 to 0.82, and CoTs name the hack; more control-model false positives, most on the judge task.
**Limits** Synthetic misspecifications, 3 tasks, 10 tests per coding problem; needs a second RL run; description generator is told which output aspect the reward concerns; description-trained gpt-oss-120b stops hacking on length (0.15), which muddies gains; true-task cost not reported; code promised, not released; under review.

**Relations**
- builds-on [[guan2025monitoring]]: adopts its intervention g-mean² as the monitorability metric

**New tags**
- (none)
