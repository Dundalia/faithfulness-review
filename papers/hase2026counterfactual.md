---
key: hase2026counterfactual
title: "Counterfactual Simulation Training for Chain-of-Thought Faithfulness"
authors: "Hase & Potts"
year: 2026
venue: "COLM 2026"
url: https://arxiv.org/abs/2602.20710v2
checked: 2026-10-15
tags: [source:trustme, source:faith-improvement, object:cot, reveals:planted-cue, reveals:decision-factors, signal:planted-cf, signal:generic-cf, lever:sft, lever:rl-reward, updates:explanation, contribution:method, contribution:negative-result, motivation:monitoring, motivation:explainability, domain:mcq, domain:classification, scale:small, scale:mid, scale:large, eval:ood, eval:specificity, model:gpt-oss-120b, model:qwen3-235b-a22b, model:qwen3-30b-a3b, model:qwen3-4b, model:gpt-oss-20b, metric:monitor-g-mean, metric:counterfactual-simulatability, metric:cot-simulation-gain]
---
**TL;DR** Introduces CST, which rewards CoTs that let a simulator predict the model's answers on counterfactual inputs: large gains on planted cues, small gains beyond them.
**Problem** Unfaithful CoT → CoT inspection/monitoring misleads about what drives answers.
**Method** CST: reward CoTs letting an LLM simulator predict answers on counterfactuals (cue removed or LLM-generated); rewrite unfaithful CoTs, k rollouts → reward-weighted CE + unlikelihood, iterated; Qwen3 4B–235B, gpt-oss.
**Findings** Cue-monitor G-mean +31–48 (SNLI recall 12→87%, FPR <3%); generic-CF sim ~+2, partly via answers. Beats prompting, VFT; rewriting 5x faster, better OOD than pure RL; held-out cues/datasets transfer; larger models gain more. Acc −1–2 pts; code.
**Limits** Little gain on dissuading cues (53→57); artificial cues; no cue↔generic transfer; two-way MC only.

**Relations**
- builds-on [[pmlr-v235-chen24bl]]: LLM counterfactual-simulation test used as faithfulness label and training reward
- builds-on [[chua2025deepseek]]: cue-based counterfactual testbed (e.g. Stanford-professor cue) for cue-influence monitoring
- compares-to [[turpin2025teaching]]: VFT baseline on MMLU cues: CST +27 G-mean vs VFT +5
- compares-to [[guan2025monitoring]]: reasoning-effort prompting baseline following Guan et al.; monitorability stays flat

**New tags**
- (none)
