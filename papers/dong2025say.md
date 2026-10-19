---
key: dong2025say
title: "Say One Thing, Do Another? Diagnosing Reasoning-Execution Gaps in VLM-Powered Mobile-Use Agents"
authors: "Dong, Zhou, Yang et al."
year: 2025
venue: "preprint"
url: https://arxiv.org/abs/2510.02204v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:reasoning-validity, reveals:stated-plan, signal:output-agreement, contribution:metric, contribution:analysis, motivation:explainability, motivation:reliability, domain:agentic, domain:multimodal, scale:small, scale:mid, eval:scaling, eval:measure-validation, eval:human-study, eval:ood, factor:post-training, model:agentcpm-gui-8b, model:ui-tars-7b, model:ui-tars-1.5-7b, model:ui-tars-72b, model:gui-owl-7b, model:gui-owl-32b, metric:ground-truth-alignment, metric:execution-gap-rate, metric:reasoning-gap-rate]
---
**Problem** Mobile GUI agents are scored mainly by action exact match (EM). Whether the CoT implies the gold action goes unchecked, which hides reasoning–execution gaps, so users may over-trust plausible reasoning.
**Method** GTA: a VLM evaluator (AgentCPM-GUI-8B) maps CoT + screenshot to the action it implies, matched against the gold action. Combined with EM this gives an execution gap (CoT right, action wrong) and a reasoning gap (action right, CoT wrong). Six open agents on AITZ, CAGUI and AndroidControl; UI-TARS 2B–72B for scaling.
**Findings** GTA > EM in 14/18 model–dataset pairs (execution gaps dominate); EG is largest on OOD CAGUI (up to 21.8%). AgentCPM and UI-TARS-7B show RG > EG on AITZ, which the authors attribute to SFT action shortcuts. Scaling shrinks both gaps, but 72B still has EG > 10%; DPO slightly beats SFT. Evaluator–human agreement 77–94%. Code released.
**Limits** Correlational: the CoT is never intervened on, and gaps are defined against a single gold action, so both-wrong mismatches go uncounted. The evaluator is also one of the evaluated models and is validated on only 3 of the 6 models, using consensus labels only. Scaling results (UI-TARS, AndroidControl) appear only in a figure and clash with Table 4 (7B EG 9.2% < 72B's >10%; 7B DPO no better than SFT). Open models ≤72B; preprint.

**Relations**
- (none)

**New tags**
- (none)
