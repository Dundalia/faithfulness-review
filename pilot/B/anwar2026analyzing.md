# anwar2026analyzing — coder B

Analyzing and Improving Chain-of-Thought Monitorability Through Information Theory

tags: [source:search-2026-10-14, object:cot, reveals:misbehavior, reveals:cot-reliance, reveals:hidden-info, signal:env-label, signal:cot-intervention, lever:rl-reward, contribution:theory, contribution:method, contribution:metric, motivation:monitoring, domain:code, domain:math, scale:small, eval:monitor-pressure, model:qwen-2.5-7b, model:qwen-2.5-3b, model:smollm3-3b, model:deepseek-r1-distill-llama-8b, metric:monitor-accuracy, metric:cot-output-mi]

**Problem** RL against a CoT monitor → obfuscated CoT + undetected reward hacks; no formal account of when CoT is monitorable.
**Method** Info theory: I(O;Z|X)>0 is necessary but not sufficient; monitor error = info gap + elicitation error. GRPO + oracle monitor-accuracy reward or label-free MI reward (estimator swaps in other CoTs from the group). Hackable MBPP/BigMath, Qwen2.5-7B.
**Findings** Task+monitor RL → MI and monitor acc fall; hacking ~75% MBPP, ~100% BigMath. Oracle/MI rewards keep acc high and curb hacking; same pattern on 3 more models.
**Limits** Curbs hacking but doesn't eliminate it; MI reward doesn't stop steganography (Reasoning Gym); needs a,b tuning; models ≤8B.

**Relations**
- builds-on [[baker2025monitoring]]: MBPP test-hacking env and monitor-pressure obfuscation from Baker; proposes rewards countering it
- extends [[emmons2025chain]]: formalizes CoT necessity as I(O;Z|X)>0: necessary, not sufficient, for monitorability
- builds-on [[korbak2025chain]]: adopts CoT-monitorability framing; formalizes it information-theoretically

**New tags**
- signal:env-label: ground-truth label of the monitored behavior from the environment (e.g., held-out unit test, true verifier), used to score monitor accuracy
- eval:monitor-pressure: tests whether monitorability survives RL that optimizes against the CoT monitor (incentive to obfuscate)
