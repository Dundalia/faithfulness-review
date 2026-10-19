---
key: wang2026doing
title: "Doing What They Say, Not What They Reason: Locating the Faithfulness Gap in LLM Agents"
authors: "Wang"
year: 2026
venue: "COLM 2026 workshop (Social Simulation with LLMs)"
url: https://arxiv.org/abs/2606.00476v2
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:reasoning-validity, reveals:stated-plan, signal:output-agreement, signal:env-label, lever:prompt-pipeline, updates:behavior, contribution:analysis, contribution:meta-evaluation, contribution:benchmark, contribution:metric, contribution:method, motivation:explainability, motivation:social-simulation, domain:agentic, domain:game, scale:closed, scale:large, eval:measure-validation, factor:model-preference, model:claude-haiku-4.5, model:gemini-2.5-flash-lite, model:deepseek-reasoner, metric:conclusion-action-inconsistency, metric:rule-misapplication-rate]
---
**Problem** Do LLM agents act on the reasoning they state? Social simulations have no reference behavior to check this process fidelity against.
**Method** Texas Hold'em multi-agent simulator with a Monte Carlo reference action. The gap is split in two: conclusion→action (DECISION tag vs JSON action, compared with a free-text parser) and reasoning→conclusion (DECISION vs the agent's own stated EQUITY/POT_ODDS/RULE; stated equity vs Monte Carlo flags input errors). Four prompt strategies, plus a "mechanical rule" prompt ablation.
**Findings** Explicit-tag conclusion→action inconsistency is 0.7–1.8% across the three models; the free-text parser's 22–26% (Haiku, Flash-Lite) is a parsing artifact. Rule misapplication is a third of Haiku's interpretable errors but 8% of DeepSeek's, and 99.5% of Haiku's misapplications are risk-averse. The mechanical prompt halves misapplication (13.9→6.8%) and raises adherence 8 points. Injecting the rule does not reliably raise adherence. Code released.
**Limits** Three API models; diagnostic run on only two, mechanical ablation on Haiku only. Poker is not a social simulation. The reference is a threshold heuristic, not true GTO. Verbose elicitation may change behavior. DeepSeek parse rate is 62%. χ² tests treat decisions as independent.

**Relations**
- (none)

**New tags**
- domain:game: competitive or strategic games (e.g. poker) with a computable reference action per decision
- motivation:social-simulation: agents in LLM-based social simulations must act on the reasoning or persona they state for the simulation to be valid
