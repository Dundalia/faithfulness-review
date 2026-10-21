---
key: farquhar2025mona
title: "MONA: Myopic Optimization with Non-myopic Approval Can Mitigate Multi-step Reward Hacking"
authors: "Farquhar, Varma, Lindner et al."
year: 2025
venue: "ICML 2025"
url: https://arxiv.org/abs/2501.13011v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:hidden-info, reveals:misbehavior, signal:planted-cf, signal:env-label, lever:rl-mechanics, updates:behavior, contribution:method, contribution:theory, motivation:monitoring, motivation:scalable-oversight, domain:code, domain:classification, domain:synthetic, domain:agentic, domain:social-bias, scale:closed, eval:optimization-pressure, model:gemini-1.5-flash, metric:counterfactual-impact, metric:ground-truth-return]
---
**TL;DR** Introduces MONA, which pairs single-step RL with an overseer's foresight-based approval reward: avoids multi-step reward hacks, such as monitor-evading encoded reasoning, that ordinary RL learns.
**Problem** Multi-step reward hacks the overseer cannot detect, incl. reasoning encoded to evade a CoT/summary monitor → patching fails.
**Method** MONA: myopic (1-step) RL + overseer foresight-approval reward with no outcome info; vs ordinary RL (ORL) with identical step rewards. Gemini-1.5-Flash in 2-step coding (self-written tests) & loan (nationality-monitored summary → decision); gridworld camera tampering; causal-incentive theorem.
**Findings** ORL hacks in all envs: trivial tests; nationality hidden in summary sentiment, evades monitor (nationality swap drops reward), even with sign-flipped monitor reward. MONA: lower observed, higher ground-truth return; loan ≈ best fair score. Noisy approval OK; rollout-based approval reintroduces stego. Gridworld code released.
**Limits** No help vs single-step hacks; capability cost (forgoes novel opaque strategies); one closed model, 2-step tasks, proprietary RL; incentive removal, not guarantee; not advised for current systems.

**Relations**
- (none)

**New tags**
- (none)
