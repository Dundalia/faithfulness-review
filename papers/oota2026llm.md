---
key: oota2026llm
title: "Do LLM Agents Execute the Plans They Declare? From Planning-Mode Declaration to Pattern-Specific Execution"
authors: "Oota, Herrera, Cabot et al."
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2609.38108v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:stated-plan, signal:output-agreement, signal:by-construction, signal:judge, lever:prompt-pipeline, updates:behavior, contribution:method, contribution:metric, contribution:analysis, motivation:reasoning-quality, domain:agentic, domain:code, scale:mid, scale:large, eval:measure-validation, eval:confound-control, factor:plan-complexity, model:qwen3.6-35b-a3b, model:deepseek-v4-flash, model:gemma-4-26b-a4b, metric:plan-structure-maintenance, metric:plan-adherence]
---
**TL;DR** Shows LLM agents often deviate from their declared plans, and that routing declared planning modes to matching executors helps, though declared modes do no better than task-blind choice.
**Problem** Agents may not carry out the plans they declare, and task success alone cannot tell execution failures apart from a badly chosen planning mode.
**Method** A rule-based verifier, checked against human annotators, tests whether Plan+ReAct trajectories follow the declared steps in order. Planning-as-Routing sends the declared mode (predefined, sequential, hierarchical or search) to a matching executor. Forced-dispatch ceilings. Benchmarks: ALFWorld, Mind2Web, WebArena, SWE-bench Verified.
**Findings** Plan+ReAct keeps the declared structure in 12-45% of trajectories on ALFWorld, Mind2Web and SWE-bench (more on WebArena), and less for longer plans. The best fixed-pattern executor lifts DeepSeek-V4 over Plan+ReAct from 0.48 to 0.92 (ALFWorld) and 0.36 to 0.44 (SWE-bench); routing on the model's declared mode reaches 0.72 and 0.42. Declared modes do no better than a task-blind null.
**Limits** Checks step order, not whether actions are correct; routed runs count as faithful from dispatch records, not verified. Verifier kappa 0.31-0.34 against humans, who agree with each other at 0.35 (100 ALFWorld trajectories). Three open models. Hierarchical and Search use more tokens and LLM calls. Code promised but not yet released. Preprint.

**Relations**
- (none)

**New tags**
- factor:plan-complexity: length or structural richness (number of steps, hierarchy, competing candidates) of the plan or reasoning the model has stated and must then follow, studied as a driver of whether execution matches it
