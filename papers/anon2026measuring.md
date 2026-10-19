---
key: anon2026measuring
title: "Measuring Say-Do Consistency in Tool-Using Agents: A Claim-Execution Traceability Framework"
authors: "Anonymous"
year: 2026
venue: "ICLR 2027 submission (under review)"
url: https://openreview.net/forum?id=YljZmeVMkC
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:self-report, object:output, reveals:executed-actions, signal:env-label, contribution:metric, motivation:reliability, domain:agentic, scale:closed, scale:large, eval:measure-validation, eval:ood, eval:confound-control, eval:human-study, model:qwen-plus, model:gemini-3-flash, model:claude-sonnet-4.6, model:gpt-5.4, model:deepseek-v4-flash, model:glm-5.2, metric:over-promise-rate]
---
**Problem** Tool-using agents' claims about their own actions can lack tool-execution backing; state-based and text-only evaluation miss this say-do gap.
**Method** Criterion derived from tool registry and business rules; decision tree matches completive claims to tool-call logs; all 452 candidates human-adjudicated; 7 models, 3 insurance scenarios (1,799 trajectories); tau-bench replication (1,980).
**Findings** 182 over-promises (40.3% of candidates, 10.1% of trajectories), all fabricated capabilities; 78.6% on tool-policy-successful trajectories; dual-input judge without codebook flags 9/452, codebook-guided LLM 90.2% recall; tau-bench: 24 over-promise turns (~2.5% of passing turns), all on PASS trajectories.
**Limits** Author-led annotation; codebook revised on analysis data (version kappa 0.21); write-operation domains only; LLM-selected candidate pool; pooled rate driven by two models (29.2% without Qwen-Plus); under review. Protocol, codebook, data released.

**Relations**
- (none)

**New tags**
- reveals:executed-actions: the actions the agent actually executed in its environment (tool calls, arguments, result statuses), which its claims about its own conduct must match
