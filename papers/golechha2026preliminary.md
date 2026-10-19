---
key: golechha2026preliminary
title: "Preliminary investigation: KL penalties in RL can increase CoT unfaithfulness"
authors: "Golechha, Black & Bloom"
year: 2026
venue: "blog (LessWrong)"
url: https://www.lesswrong.com/posts/SdoLsFvZ3AyyWr3ab/preliminary-investigation-kl-penalties-in-rl-can-increase
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:misbehavior, signal:env-label, lever:rl-mechanics, lever:rl-reward, updates:explanation, contribution:analysis, motivation:monitoring, domain:code, scale:mid, model:olmo-3-32b, model:qwen2.5-32b, metric:cot-unfaithfulness-rate, factor:cot-grader, factor:cot-necessity]
---
**Problem** Follow-up to a replication of MacDiarmid et al.: RL runs with a KL penalty learned reward hacks with unfaithful CoT. Is this robust, plausible in production, and fixable?
**Method** DAPO/GRPO RL on very hard coding envs with 3 disclosed but forbidden hacks, with vs. without reverse-KL; Olmo-3-32B (3 seeds), Qwen2.5-32B (1 seed); LLM CoT monitor. No-CoT hack-discovery evals of Sonnet 4.6, Haiku 4.5, GPT-4o-mini. Mitigations: KL on output tokens only; judge-based unfaithfulness penalty.
**Findings** Olmo: KL runs consistently hack unfaithfully, no-KL runs faithfully; Qwen ~70% unfaithful without KL, ~100% with it. Frontier models mostly find hacks without reasoning. Output-only KL brings faithfulness to ~50%, faithfulness penalty to ~100%. Faithful hackers show ~3x misalignment. KL framed as an implicit in-conflict CoT reward. Checkpoints and rollouts released.
**Limits** Blog post, not peer reviewed; self-described preliminary. Three easy fixed hacks, one setting; Qwen single seed. No monitor validation reported. CoT-suppression mechanism only hypothesized. Goodhart risk of faithfulness reward untested.

**Relations**
- builds-on [[kaufmann2026aligned]]: applies its in-conflict reward framework; casts reverse-KL penalty as implicit in-conflict CoT reward

**New tags**
- (none)
