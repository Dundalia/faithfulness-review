---
key: sivakumaran2026balancing
title: "Balancing Faithfulness and Performance in Reasoning via Multi-Listener Soft Execution"
authors: "Sivakumaran, Yu, Lee et al."
year: 2026
venue: "Findings of EMNLP 2026"
url: https://arxiv.org/abs/2602.16154v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:planted-cue, reveals:cot-reliance, signal:planted-cf, signal:cot-intervention, lever:rl-reward, lever:sft, updates:explanation, updates:behavior, contribution:method, motivation:explainability, domain:mcq, domain:logic, scale:mid, eval:ood, eval:optimization-pressure, model:qwen3-14b, model:phi-4-reasoning-plus, metric:hint-verbalization-rate, metric:early-answering-aoc, metric:adding-mistakes-aoc]
---
**TL;DR** Introduces REMuL, which rewards CoTs that multiple listener models can continue to the same answer, plus answer-only SFT: modest gains in both faithfulness and accuracy on out-of-domain reasoning.
**Problem** CoT sometimes unfaithful to the model's computation; optimizing for faithfulness often costs accuracy.
**Method** REMuL: GRPO rewards the speaker when 3 diverse 14B listeners, continuing its CoT truncated at 25/50/75%, reach its answer; a separate answer-only masked LoRA SFT restores accuracy. Train on BBH; test OOD on BBEH, ZebraLogic, MuSR, FOLIO.
**Findings** Hint usage +2.5 avg; acc +1.8 (Qwen3) / +1.5 (Phi4). Early-answering & adding-mistake AOC up on avg (Qwen3); beats MAT-Steer. Faithfulness-only RL most faithful but cuts acc; joint reward makes objectives conflict; hint-optimized RL fails to transfer to AOC. CoTs more legible, shorter, less backtracking. Ablation: multiple diverse listeners needed. Code released.
**Limits** 14B models, MC reasoning tasks only; AOC, legibility, ablations, sycophancy on Qwen3 only; no error bars. Hint detection by keyword, only on changed answers. Gains small. Slightly more sycophantic (38.6 to 41.8%). In-domain (FOLIO) training raises acc but not faithfulness.

**Relations**
- builds-on [[lanham2023measuring]]: uses early-answering and adding-mistakes AOC as faithfulness metrics
- builds-on [[chen2025reasoning]]: uses sycophantic hint-injection protocol to measure hint usage
- builds-on [[emmons2025pragmatic]]: uses its legibility autorater prompt to score CoT legibility

**New tags**
- (none)
