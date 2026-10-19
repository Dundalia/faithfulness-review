---
key: khanzadeh2026project
title: "Project Ariadne: A Structural Causal Framework for Auditing Faithfulness in LLM Agents"
authors: "Khanzadeh"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2601.02314v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:cot-reliance, signal:cot-intervention, contribution:metric, contribution:analysis, motivation:explainability, domain:open-qa, domain:math, domain:logic, scale:closed, factor:cot-necessity, model:gpt-4o, metric:causal-sensitivity-score, metric:violation-density]
---
**Problem** Unclear whether agent CoTs causally drive the answer or are post-hoc "reasoning theater".
**Method** SCM framing. A critic LLM contradicts the first CoT step (LogicFlip), then the GPT-4o agent re-runs from that point. Claude 3.7 Sonnet judges answer similarity S, giving phi=1-S and violation density rho. 500 queries: general knowledge, science, math/logic.
**Findings** Factual answers mostly unchanged: violation rate 92% knowledge, 96% science vs 20% math (mean phi 0.062/0.030/0.329). rho=0.767 over 30 audited traces. Qualitatively, the model often corrects back to its parametric prior.
**Limits** One model, one intervention type and step. Thresholds unreported; 500 queries vs 30 audited traces inconsistent. No unintervened resampling baseline; critic model unnamed. Self-correction not separated from unfaithfulness. No code. Single-author preprint.

**Relations**
- (none)

**New tags**
- (none)
