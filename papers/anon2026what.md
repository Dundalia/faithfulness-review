---
key: anon2026what
title: "Do What You Say: Towards Verifiable Reasoning for Scientific Editing"
authors: "Anonymous"
year: 2026
venue: "ICLR 2027 submission (under review)"
url: https://openreview.net/forum?id=Dy3RZfaeEs
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:stated-plan, reveals:cot-reliance, signal:env-label, signal:output-agreement, signal:cot-intervention, lever:sft, lever:rl-reward, lever:rl-mechanics, lever:inference-time, lever:architecture, updates:behavior, updates:explanation, contribution:method, contribution:metric, motivation:reasoning-quality, motivation:explainability, domain:scientific-editing, scale:small, scale:mid, eval:later-rl, eval:confound-control, eval:measure-validation, eval:scaling, model:qwen3-1.7b, model:qwen3-4b, model:qwen3-8b, model:llama-3.1-8b, model:gemma-3-12b, metric:say-do-consistency, metric:claim-correctness, metric:contract-completeness]
---
**TL;DR** Introduces TRACE, training scientific editors on edit contracts with a replay verifier whose say-do score, as a process reward, sharply narrows the gap between stated and performed edits.
**Problem** Reasoning traces state edits the final output does not perform (say–do gap); free-form edit claims are hard to check against the realized change.
**Method** TRACE: SFT on tool-built typed Goal–Local Edit–Safeguard contracts, then outcome-only GRPO; a replay verifier scores say–do D, also reused as a process reward and a Best-of-N selector. Molecule, codon and reaction editing.
**Findings** On TOMG with Qwen3-1.7B, SR×Sim is 0.576 vs 0.517 for answer-only, with D=0.49. Additive process reward lifts MolOpt D from 0.34 to 0.83 while SR×Sim dips slightly. D-based Best-of-N recovers 97% of the oracle gain. Forced-prefix ablations show the answer relies on the Local Edit.
**Limits** D checks execution consistency, not full causal faithfulness. Relies on domain tools; LLM-built contracts are a weaker fallback. One training seed per arm; outcome-only GRPO lowers MolOpt D at 1.7B and 8B. Code promised on acceptance; under review.

**Relations**
- (none)

**New tags**
- domain:scientific-editing: constrained editing of structured scientific objects (molecules as SMILES, RNA coding sequences, biochemical reactions) whose validity and realized change are checked by domain tools
