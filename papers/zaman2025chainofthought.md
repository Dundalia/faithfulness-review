---
key: zaman2025chainofthought
title: "Is Chain-of-Thought Really Not Explainability? Chain-of-Thought Can Be Faithful without Hint Verbalization"
authors: "Zaman & Srivastava"
year: 2025
venue: "ACL 2026"
url: https://arxiv.org/abs/2512.23032v2
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:planted-cue, reveals:cot-reliance, signal:planted-cf, signal:cot-intervention, signal:interp-tool, contribution:analysis, contribution:metric, contribution:meta-evaluation, motivation:explainability, domain:mcq, scale:small, scale:mid, model:llama-3.2-3b, model:llama-3-8b, model:gemma-3-4b, model:llama-3.3-70b, model:qwen3-32b, metric:hint-verbalization-rate, metric:faithful-at-k, metric:filler-tokens, metric:natural-indirect-effect]
---
**Problem** Biasing Features (hint verbalization) may confuse unfaithfulness w/ incompleteness (lossy compression of distributed computation).
**Method** Professor/Metadata/Black-Squares hints × OpenbookQA, StrategyQA, ARC-Easy; BF-unfaithful CoTs rescored by Filler Tokens, FUR; new faithful@k; logit lens; causal mediation.
**Findings** BF >=80% unfaithful; FUR deems >=50% faithful (Llama-3.2-3B). faithful@16 ~0.9 (Gemma-3-4B, Professor; others <0.5); near-flat for other hints. Significant NIE: CoT mediates unverbalized hint. Mostly holds at 32B/70B. Code released.
**Limits** Judge precision/recall 36%/31% (lexical recheck). MCQ only; 32B/70B on 2 tasks. Can't separate incompleteness from non-exhaustiveness.

**Relations**
- contradicts [[turpin2023language]]: claims hint non-verbalization shows systematic unfaithfulness; here non-verbalizing CoTs still mediate hint
- contradicts [[chen2025reasoning]]: reads low hint verbalization as unfaithfulness; here much is incompleteness under tight budgets
- builds-on [[chua2025deepseek]]: reuses Professor-style hint and verbalization-judge prompt
- builds-on [[lanham2023measuring]]: applies Filler Tokens CoT-corruption metric to BF-unfaithful CoTs
- builds-on [[tutek2025measuring]]: reuses FUR unlearning metric, setup, hyperparameters and codebase

**New tags**
- (none)
