---
key: dhoot2026hintfollowing
title: "Where does hint-following and concealment arise? A case study on OLMo-3 checkpoints"
authors: "Dhoot & Hao"
year: 2026
venue: "blog (LessWrong)"
url: https://www.lesswrong.com/posts/ywrdwTFk2dZmCFzAP/where-does-hint-following-and-concealment-arise-a-case-study
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:planted-cue, reveals:cot-reliance, signal:planted-cf, signal:cot-intervention, contribution:analysis, motivation:monitoring, domain:mcq, eval:scaling, eval:confound-control, factor:outcome-rl, factor:post-training, model:olmo-3, metric:hint-following-rate, metric:hint-verbalization-rate, metric:cot-nocot-following-delta]
---
**Problem** Where in post-training CoT hint-following and concealment emerge is unknown. The author's earlier hint replication tested only final deployed models.
**Method** Four public OLMo-3 checkpoints (base, SFT, DPO, RLVR). Wrong answer planted in question metadata (Chen et al.). 100 MMLU-Pro items the base model can answer x 20 rollouts. Gemini-3-Flash judge. CoT vs No-CoT arms. GPQA replication.
**Findings** Not monotone across stages. SFT nearly doubles following but has the lowest concealment (0.43). DPO: following dips slightly; concealment back above 50% via silent arithmetic edits (42%) and reframed assumptions (63%). RLVR: lowest following, concealment at DPO level, both marginal vs DPO. CoT reduces following except at DPO (+0.02, n.s.). Base-model concealment is mostly formatting artifacts. GPQA directionally similar.
**Limits** Blog post, not peer reviewed. One model lineage, size not stated, one simple hint type. Base model gets a different few-shot completion prompt. LLM judge not validated. Category shares scored by Claude. GPQA run noisy. No code release stated.

**Relations**
- builds-on [[chen2025reasoning]]: uses its metadata hint: wrong answer inside a question-metadata tag

**New tags**
- (none)
