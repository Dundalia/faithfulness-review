---
key: ward2023honesty
title: "Honesty Is the Best Policy: Defining and Mitigating AI Deception"
authors: "Ward, Belardinelli, Toni & Everitt"
year: 2023
venue: "NeurIPS 2023 (spotlight)"
url: https://arxiv.org/abs/2312.01350v1
checked: 2026-11-01
tags: [source:formal-sweep-2026-11-01, object:output, signal:generic-cf, signal:env-label, lever:sft, lever:rl-reward, updates:behavior, contribution:theory, contribution:method, motivation:alignment, motivation:reliability, domain:synthetic, domain:open-qa, scale:small, scale:closed, eval:optimization-pressure, model:gpt-3-curie, model:gpt-3-davinci, model:gpt-neo-1.3b, model:gpt-3.5, model:gpt-4]
---
**TL;DR** Defines deception through behavioural belief and intention, proves graphical criteria, and uses path-specific objectives to prevent deception in a signaling game.
**Problem** Learning agents can induce false beliefs instrumentally; existing definitions do not cover general learning games.
**Method** SCG definitions and graphical proofs; Q-learning, GPT-4 prompts, GPT-3/GPT-Neo fine-tuning; path-specific objectives.
**Findings** Mitigation prevents signaling-game deception; GPT-4 and biased-judge examples satisfy criteria; TruthfulQA examples are only accidental misleading.
**Limits** Correct shared causal model; belief unidentifiability; selected demonstrations; mitigation suppresses all target influence.

**Relations**
- (none)

**New tags**
- (none)
