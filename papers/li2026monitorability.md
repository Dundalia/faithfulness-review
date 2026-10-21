---
key: li2026monitorability
title: "The Monitorability Tax: How Compression Mechanism Shapes Chain-of-Thought Oversight"
authors: "Li"
year: 2026
venue: "COLM 2026 workshop (ER)"
url: https://openreview.net/forum?id=5gGSX988EX
checked: 2026-10-15
tags: [source:search-2026-10-14, object:cot, reveals:planted-cue, signal:env-label, lever:sft, lever:prompt-pipeline, updates:explanation, contribution:analysis, contribution:method, motivation:monitoring, domain:math, scale:small, eval:ood, eval:measure-validation, factor:cot-length, model:deepseek-r1-distill-qwen-7b, model:qwen3-1.7b, model:deepseek-r1-distill-qwen-1.5b, model:deepseek-r1-distill-llama-8b, model:qwen2.5-32b, model:llama-3.3-70b, metric:monitor-auc, metric:tpr-at-fixed-fpr]
---
**TL;DR** Shows how CoT is compressed, not just how much, shapes monitorability: self-summaries, distilled into MonoSumm, are easier to monitor than full CoT, while concise prompting and truncation hurt.
**Problem** CoT compression for efficiency: does it cost monitor oversight, and does the compression mechanism matter beyond the rate?
**Method** Hinted MATH-500; prompted Qwen2.5 monitor scores answer-hidden think traces → AUC vs hint-answer agreement; 4 compression mechanisms × 2 reasoners. MonoSumm: LoRA SFT distilling R1-7B self-summaries (GSM8K) into one-pass 1.5–8B students.
**Findings** Self-summary AUC 0.89 vs natural 0.79, concise 0.62, truncation 0.55. Self-sum ≫ concise/trunc gap holds across hints, reasoners, monitors, matched budgets and answer masking. MonoSumm beats same-scale full CoT (0.88–0.94 vs 0.76–0.83) at 15–19× fewer tokens, with lower acc.
**Limits** Correlational label, no no-hint CF. A trivial answer-visibility feature beats the monitor. Realized lengths unmatched. One synthetic math hint; real reward hacking untested. Reasoners ≤8B. No matched-competence control.

**Relations**
- builds-on [[baker2025monitoring]]: adopts its prompted-LLM CoT monitor conventions (no monitor-side training)
- builds-on [[chen2025reasoning]]: uses its sycophancy, metadata, grader-hack and unethical-info hint families
- builds-on [[turpin2023language]]: adopts its hint-injection paradigm for the MATH-500 testbed

**New tags**
- (none)
