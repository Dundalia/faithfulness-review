---
key: turpin2023language
title: "Language Models Don't Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting"
authors: "Turpin, Michael, Perez & Bowman"
year: 2023
venue: "NeurIPS 2023"
url: https://arxiv.org/abs/2305.04388v2
checked: 2026-10-15
tags: [source:trustme, object:cot, reveals:planted-cue, reveals:decision-factors, signal:planted-cf, signal:generic-cf, contribution:analysis, motivation:explainability, motivation:monitoring, domain:mcq, domain:logic, domain:social-bias, scale:closed, model:text-davinci-003, model:claude-1.0, metric:biased-context-accuracy-drop, metric:unfaithfulness-explained-by-bias]
---
**Problem** Plausible CoT may misstate the real reasons for predictions → unwarranted trust, and CoT-based audits can be fooled.
**Method** Biasing features the CoT never mentions (Answer-is-Always-A, Suggested Answer) on 13 BBH tasks; BBQ with swapped weak evidence. GPT-3.5 & Claude 1.0, ZS/FS, CoT vs No-CoT.
**Findings** Bias verbalized in 1/426 explanations. Accuracy drops up to 36% (ZS); FS CoT less unfaithful. 73% of sampled unfaithful CoTs argue for the biased answer; 15% have no obvious errors. BBQ: up to 62.5% of unfaithful pairs stereotype-aligned (50% = unbiased). Debiasing prompt helps Claude. Code released.
**Limits** Necessary but not sufficient test. Only small input edits. Two closed models. No fix proposed.

**Relations**
- (none)

**New tags**
- (none)
