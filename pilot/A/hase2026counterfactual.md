# hase2026counterfactual — coder A

Counterfactual Simulation Training for Chain-of-Thought Faithfulness

tags: [source:trustme, source:faith-improvement, object:cot, reveals:planted-cue, reveals:input-features, signal:planted-cf, signal:generic-cf, lever:sft, lever:rl-reward, contribution:method, contribution:negative-result, motivation:monitoring, motivation:explainability, domain:mcq, domain:classification, scale:large, eval:ood, eval:behavior-control, model:gpt-oss-120b, model:qwen3-235b-a22b, model:qwen3-30b-a3b, model:qwen3-4b, model:gpt-oss-20b, metric:monitor-g-mean, metric:counterfactual-simulatability, metric:cot-simulation-gain]

**Problem** Unfaithful CoT → CoT inspection and monitoring can't be trusted.
**Method** CST: reward CoTs that let an LLM simulator predict the model's answer on counterfactual inputs (cue removed, or LLM-generated edits); model rewrites its own unfaithful CoTs, plus k-sample RL; reward-weighted CE + unlikelihood over iterated rounds.
**Findings** Cue-monitor G-mean +31–48 pts; holds on held-out cues and datasets. Generic-CF simulatability only ~+2. Beats prompting and VFT. Rewriting 5x faster than pure RL. Larger models gain more. Dissuading cues barely move (53→57).
**Limits** Cues artificial, no threat model; no transfer between cue and generic CFs; 1–2 pt accuracy drop; two-way MCQ only.

**Relations**
- builds-on [[pmlr-v235-chen24bl]]: faithfulness label = LLM counterfactual simulation, following Chen et al.
- builds-on [[chua2025deepseek]]: cue-based counterfactuals as monitorability testbed for cue influence
- compares-to [[turpin2025teaching]]: VFT baseline: CST +27 vs VFT +5 monitor G-mean (MMLU)
- compares-to [[chen2025consistent]]: named most similar method (consistency finetuning); discussed, not run
- compares-to [[guan2025monitoring]]: reasoning-effort baseline from Guan; gpt-oss monitorability flat with effort
- builds-on [[turpin2023language]]: cue-driven unfaithful CoT as motivating problem

**New tags**
- (none)
