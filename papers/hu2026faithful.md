---
key: hu2026faithful
title: "Faithful Mobile GUI Agents with Guided Advantage Estimator"
authors: "Hu, Cheng, Wu et al."
year: 2026
venue: "ICML 2026"
url: https://arxiv.org/abs/2605.01208v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, object:output, reveals:stated-plan, reveals:input-grounding, signal:output-agreement, signal:by-construction, lever:sft, lever:rl-reward, lever:rl-mechanics, updates:behavior, contribution:method, motivation:reliability, domain:agentic, domain:multimodal, scale:small, eval:ood, model:qwen3-vl-8b, model:qwen2.5-vl-7b, model:ui-tars-1.5-7b, model:os-atlas-pro-7b, model:gui-owl-7b, metric:trap-step-success-rate, metric:thought-action-consistency, metric:under-abstain-rate, metric:over-abstain-rate]
---
**Problem** Mobile GUI agents act on memorized shortcuts rather than screen/instruction evidence, and execute actions contradicting their own Thought; sparse abstain rewards collapse GRPO advantages.
**Method** Qwen3-VL-8B. SFT on General plus perturbed "Trap" steps (occlusion, tampering, goal shift; model-annotated, human-filtered) teaching Back/Home/terminate abstention, then GRPO with action-match plus rule-based thought-action consistency reward and GuAE (anchored, variance-tempered advantages). Code released.
**Findings** Trap SR 13.88%→80.21% (71.20 after SFT alone), General SR 60.38→65.62. Contradictory thought-action pairs 59.29%→17.17%; under-abstain 57.75%→8.86%, over-abstain flat (~5%). GuAE +1.92 Trap SR over base GRPO; beats DAPO/GSPO. Cross-dataset (AC↔AITZ): Trap gains hold, but General SR falls below the backbone (61.53→50.67, 53.27→35.10).
**Limits** One 8B backbone; offline step-level eval only; no seeds or variance reported. Consistency is scored by the same keyword rule used as reward. GuAE gains are small. "Faithfulness" here mostly means abstention robustness, not causal CoT faithfulness.

**Relations**
- (none)

**New tags**
- reveals:input-grounding: the output or action must be supported by evidence actually present in the input (screen, instruction, context), abstaining when it is missing or conflicting rather than following memorized shortcuts (context faithfulness)
