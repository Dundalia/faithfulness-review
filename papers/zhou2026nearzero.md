---
key: zhou2026nearzero
title: "A Near-Zero Monitor Readout Is Not Evidence of Behavioral Control"
authors: "Zhou & Tao"
year: 2026
venue: "NeurIPS 2026 workshop (FLLMPT)"
url: https://arxiv.org/abs/2610.03458v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:cot, reveals:misbehavior, reveals:cot-reliance, signal:env-label, signal:cot-intervention, lever:rl-reward, lever:activation-loss, updates:behavior, contribution:analysis, contribution:negative-result, contribution:meta-evaluation, motivation:monitoring, domain:code, scale:small, eval:optimization-pressure, eval:held-out-evaluator, eval:measure-validation, eval:confound-control, model:llama-3.1-8b, metric:early-answering-aoc, metric:reward-hacking-rate, metric:monitor-auc]
---
**Problem** Monitors used as RLVR reward penalties against reward hacking: does a low in-loop monitor readout certify behavioral control?
**Method** GRPO on Llama-3.1-8B in MBPP-Honeypot, penalized by three offline-gated monitors (activation probe; SCL and single-cut prefix-commitment penalties), 3 seeds each; held-out tests label hacking.
**Findings** Prefix-trained (SCL/Cut) score medians are 0 in both mixed runs (hack 0.094-0.156) and near-pure-hacking runs (up to 0.938); planning and filler shells push the exploit past the cut. The probe sits at its floor (~1e-9) because of a read-position mismatch, and all probe runs hack. Code released.
**Limits** 3 seeds per arm, one 8B model, one low-KL configuration; assumes the exploit is available early in the trace; string-equality answer matching; onset rule defined post hoc; a well-scaled probe is untested.

**Relations**
- builds-on [[taufeeque2026obfuscation]]: Adapts its MBPP-Honeypot environment, GRPO/LoRA harness and probe arm at low KL
- builds-on [[lanham2023measuring]]: 0.30 prefix-cut and 0.40 interior-ablation diagnostics follow its truncation/corruption tests

**New tags**
- (none)
