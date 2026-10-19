# hase2026counterfactual — coder B

Counterfactual Simulation Training for Chain-of-Thought Faithfulness

tags: [source:trustme, source:faith-improvement, object:cot, reveals:planted-cue, reveals:input-features, signal:planted-cf, signal:generic-cf, lever:sft, lever:rl-reward, contribution:method, contribution:negative-result, motivation:monitoring, motivation:explainability, domain:mcq, domain:classification, scale:large, scale:mid, scale:small, eval:ood, eval:behavior-control, model:gpt-oss-120b, model:qwen3-235b-a22b, model:qwen3-30b-a3b, model:qwen3-4b, model:gpt-oss-20b, metric:monitor-g-mean, metric:counterfactual-simulator-accuracy, metric:cot-simulation-gain]

**Problem** CoT often unfaithful → CoT inspection/monitoring can't be trusted.
**Method** CST: reward CoTs that let an LLM simulator predict the model's answer on counterfactuals (cue removed, or LLM-generated edits); LLM-rewrite unfaithful CoTs; reward-weighted CE + unlikelihood, iterated rounds / k-rollout RL.
**Findings** Cue-monitor G-mean +35 pts (CoT-driven, answers stable); generic simulator acc +~2; beats prompting and VFT; rewriting 5x faster, better OOD than pure RL; larger models gain more.
**Limits** No gain on dissuading cues; no cue↔generic transfer; artificial cues; generic gains small (none on MMLU); acc −1–2 pts.

**Relations**
- builds-on [[pmlr-v235-chen24bl]]: uses LLM counterfactual simulatability as the faithfulness label and training reward
- builds-on [[chua2025deepseek]]: cue-based counterfactuals and cue-influence monitorability as testbed
- builds-on [[turpin2023language]]: cue-induced unfaithful CoT is the motivating problem
- compares-to [[turpin2025teaching]]: both rewrite unfaithful CoTs; CST +27 vs VFT +5 monitor G-mean
- compares-to [[guan2025monitoring]]: reasoning-effort baseline adopted; monitorability roughly flat as effort rises
- compares-to [[chen2025consistent]]: named most similar method (consistency finetuning); no empirical comparison

**New tags**
- metric:monitor-g-mean: geometric mean of monitor recall and specificity for detecting cue influence from the CoT
- metric:counterfactual-simulator-accuracy: accuracy of an LLM simulator predicting the model's answer on a counterfactual input, given the original input, CoT and answer
- metric:cot-simulation-gain: reasoning-simulator accuracy minus outcome-only (no-CoT) simulator accuracy; the added predictive value of the CoT
