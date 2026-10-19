# kirchner2024proververifier — coder A

Prover-Verifier Games improve legibility of LLM outputs

tags: [source:search-2026-10-14, object:cot, reveals:solution-validity, signal:judge, lever:rl-reward, lever:prover-verifier-game, contribution:method, contribution:theory, contribution:analysis, motivation:scalable-oversight, domain:math, scale:frontier-api, eval:human-study, eval:adversarial-attack, model:gpt-4-family, metric:human-judge-accuracy, metric:steps-to-exploit, metric:balanced-best-of-n]

**Problem** Correctness-only RL → GSM CoTs become long and illegible; time-limited humans judge them worse and slower.
**Method** Iterated prover-verifier game: small verifier (1e-3 to 1e-1.8 prover compute) learns correctness; role-prompted GPT-4-family prover trained with PPO (SRC reward) to be helpful (correct + convincing) or sneaky (wrong + convincing).
**Findings** Over rounds, verifier robustness rises, sneaky flaws get subtler, helpful accuracy and human-check accuracy/speed rise → legibility to the small verifier transfers to humans. Legibility tax vs correctness-only RL.
**Limits** GSM only; needs ground-truth answers. Legibility ≠ faithfulness (ignores how the model reasoned). Directly optimizes the CoT. Verifiers too small (1e-4) or prover-sized fail. Sneaky human eval from a flawed pilot.

**Relations**
- compares-to [[radhakrishnan2023question]]: related-work contrast only: no enforced decomposition structure; legibility from final-answer RL
- compares-to [[lyu2023faithful]]: related-work contrast only: no enforced symbolic CoT; legibility emerges from training

**New tags**
- reveals:solution-validity: The output must let a (weaker) checker tell whether the solution is correct (legibility/checkability), whatever process the model actually used to reason.
- lever:prover-verifier-game: Multi-agent training where the explaining model is optimized against a co-trained verifier, typically with helpful and adversarial (sneaky) prover roles.
- motivation:scalable-oversight: Letting weaker judges (humans or small models) reliably check outputs of stronger models.
- eval:adversarial-attack: Tests the checker/monitor against adversaries trained or optimized specifically to fool it.
