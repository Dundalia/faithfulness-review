# pres2026selfctrl — coder B

Self-CTRL: Self-Consistency Training with Reinforcement Learning

tags: [source:search-2026-10-14, object:self-report, reveals:hidden-behavior, signal:implanted-behavior, signal:judge, signal:behavior-prediction, lever:rl-reward, lever:rl-mechanics, contribution:method, motivation:explainability, motivation:auditing, motivation:alignment, domain:chat, domain:synthetic, scale:small, eval:ood, eval:behavior-control, model:llama-3.1-8b, model:qwen3-8b, metric:calibration-r2, metric:normalized-simulatability-gain, metric:counterfactual-simulatability, metric:jury-consistency]

**Problem** An LM's self-descriptions of its own behavior (rules, latent biases) don't predict what it actually does on related inputs.
**Method** GRPO rewards consistency phi between a meta-level explanation and an object-level behavior, sampled separately; updates explanation, behavior or both (lambda). phi = likelihood (coin biases) or 8-juror LM jury (refusal rules, SpecEval).
**Findings** Coins: held-out R2 0.24→0.64, about equal to the oracle supervised model. Constitutional: explanation training raises CF refusal acc 0.36→0.92 and NSG −0.09→0.81; behavior training cuts HarmBench ASR 15%→0.5%. MMLU within about 2 pts.
**Limits** 8B models only. Qwen too permissive → rules underidentified. Training collapses to vague "be safe" fixed points without jury/aux rewards. Small noisy judges. No adversarial distributions tested.

**Relations**
- builds-on [[pres2026consistency]]: instantiates the position paper's self-consistency framework for explanation-behavior pairs
- builds-on [[mayne2026positivecasefaithfulnessllm]]: adopts simulatability view of explanation and its NSG metric
- extends [[hase2026counterfactual]]: moves predictive/counterfactual-simulation view from answer rationales to meta-level behavior descriptions
- extends [[betley2025tell]]: trains self-description of learned behaviors without ground-truth labels, rather than only measuring it

**New tags**
- signal:behavior-prediction: ground truth is the model's own sampled behavior on related inputs, which a simulator must predict from the explanation
- motivation:alignment: explanation-behavior consistency used to make behavior conform to stated principles (safer, more controllable models)
- domain:synthetic: toy tasks with known latent structure, e.g. sampling from biased coins
