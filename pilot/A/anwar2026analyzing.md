# anwar2026analyzing — coder A

Analyzing and Improving Chain-of-Thought Monitorability Through Information Theory

tags: [source:search-2026-10-14, object:cot, reveals:misbehavior, reveals:cot-reliance, reveals:hidden-info, signal:env-label, lever:rl-reward, contribution:theory, contribution:method, motivation:monitoring, domain:code, domain:math, scale:small, eval:monitor-pressure, model:qwen-2.5-7b-instruct, model:qwen-2.5-3b-instruct, model:smollm3-3b, model:deepseek-r1-distill-llama-8b, metric:monitor-accuracy, metric:cot-output-mi, metric:hacking-rate]

**Problem** CoT monitors degrade under optimization pressure (obfuscation); no theory of when CoT is monitorable.
**Method** Info theory: uplift ≤ √(2I(Y;Z|X)); I(O;Z|X)>0 necessary, not sufficient; monitor error = info gap + elicitation error. GRPO + oracle monitor-accuracy reward or label-free I(O;Z|X) reward; hackable MBPP/BigMath, Qwen-7B monitor in loop.
**Findings** Task+monitor reward → MI & monitor acc drop, hacking ~75% MBPP / ~100% BigMath. Oracle & MI rewards keep monitor acc high, hacking unlearned / never learned; holds on 3 more ≤8B models.
**Limits** ≤8B. MI under own policy can't deter steganography; weak in adversarial Reasoning Gym. Needs a,b tuning; more false positives; mitigates, doesn't eliminate.

**Relations**
- builds-on [[baker2025monitoring]]: MBPP test-hacking honeypot after Baker; reproduces obfuscation under monitor reward, then mitigates it
- extends [[emmons2025chain]]: formalizes CoT necessity: implies I(O;Z|X)>0, necessary but not sufficient for monitorability
- builds-on [[korbak2025chain]]: adopts the CoT-monitorability framing; gives it an information-theoretic formalization

**New tags**
- signal:env-label: ground-truth misbehavior labels from the environment (held-out unit test, true verifier) used to score a CoT monitor's accuracy
- eval:monitor-pressure: evaluates whether monitorability survives RL that optimizes against the CoT monitor itself (monitor in the reward)
