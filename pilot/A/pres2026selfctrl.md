# pres2026selfctrl — coder A

Self-CTRL: Self-Consistency Training with Reinforcement Learning

tags: [source:search-2026-10-14, object:self-report, reveals:hidden-behavior, signal:implanted-behavior, signal:judge, signal:simulatability, lever:rl-reward, lever:rl-mechanics, updates:explanation, updates:behavior, contribution:method, motivation:explainability, motivation:auditing, motivation:alignment, domain:synthetic, domain:chat, scale:small, eval:ood, eval:behavior-control, model:llama-3.1-8b, model:qwen3-8b, metric:normalized-simulatability-gain, metric:calibration-r2, metric:counterfactual-simulatability, metric:jury-consistency]

**Problem** Self-stated rules/self-reports don't predict own behavior on related inputs; per-prompt training never enforces cross-context consistency.
**Method** Self-CTRL: GRPO; reward = stated explanation predicts independently sampled behavior (coin log-lik or 8-juror LM jury); update explanation, behavior or both (λ).
**Findings** Held-out coin-bias report R² 0.24→0.64, ≈ oracle. Llama-8B constitutional: NSG −0.09→0.81, CF refusal acc 0.36→0.92; behavior updates cut HarmBench ASR 15%→0.5%. MMLU ~flat.
**Limits** 8B only; vague fixed points ("be safe") need structured prompts, aux rewards, jury; permissive Qwen3 gives little boundary signal; expl-training can narrow rules to excuse harmful compliance; no adversarial test.

**Relations**
- builds-on [[pres2026consistency]]: instantiates the position paper's self-consistency framework for explanation-behavior pairs
- builds-on [[mayne2026positivecasefaithfulnessllm]]: adopts its simulatability view and NSG metric for evaluation
- extends [[betley2025tell]]: from measuring self-knowledge of learned behaviors to training it without labels
- compares-to [[hase2026counterfactual]]: named closest work; Self-CTRL adds behavior-side updates and meta-level rules

**New tags**
- signal:simulatability: ground truth is the model's observed behavior on new or related inputs, which a simulator must predict from the explanation
- updates:explanation: the intervention changes the explanation or self-report so it fits existing behavior
- updates:behavior: the intervention changes the model's behavior so it fits its stated explanation or principles
- motivation:alignment: faithful self-description as a route to making behavior safer and consistent with stated principles
- domain:synthetic: toy task built so the latent ground truth is known (e.g. sampling from named biased coins)
