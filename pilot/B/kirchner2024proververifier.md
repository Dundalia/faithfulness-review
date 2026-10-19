# kirchner2024proververifier — coder B

Prover-Verifier Games improve legibility of LLM outputs

tags: [source:search-2026-10-14, object:cot, reveals:correctness, signal:judge, lever:rl-reward, lever:adversarial-game, contribution:method, contribution:theory, contribution:negative-result, motivation:explainability, motivation:scalable-oversight, domain:math, scale:frontier-api, eval:human-study, model:gpt-4-family, metric:human-judge-accuracy, metric:human-judge-time, metric:sneaky-steps-to-exploit, metric:balanced-best-of-n]

**Problem** Correctness-only RL → GSM CoT solutions that time-limited humans can't check (illegible).
**Method** Iterative prover-verifier game: a small verifier learns correctness; one role-conditioned prover is trained with PPO as helpful (correct + convincing) or sneaky (incorrect + convincing); SRC reward. Theorem: verifier-led Stackelberg eq. ⇔ completeness + soundness.
**Findings** Over rounds: verifier more robust, sneaky flaws subtler, helpful acc ↑, human judge acc/speed ↑ on helpful, ↓ on sneaky. Legibility to small verifier transfers to humans. Legibility tax vs correctness-only.
**Limits** GSM only; needs ground-truth labels; CoT conflated with justification; fails when verifier is 1e-4× or 1× prover compute; sneaky human eval from a flawed pilot.

**Relations**
- compares-to [[radhakrishnan2023question]]: contrasted: imposed decomposition structure vs PVG using only final-answer supervision
- compares-to [[lyu2023faithful]]: contrasted: symbolic structured CoT vs PVG imposing no output structure

**New tags**
- reveals:correctness: the output must let a (weaker) checker verify whether the answer is correct, regardless of how the model actually reasoned (legibility/checkability)
- lever:adversarial-game: co-training interacting model roles (e.g. prover, verifier, sneaky adversary) whose outputs set each other's rewards or training data
- motivation:scalable-oversight: making outputs checkable by weaker judges (small models, time-limited humans) so correctness stays verifiable as models get more capable
