---
key: lee2026training
title: "Training Agents to Self-Report Misbehavior"
authors: "Lee, Chen & Korbak"
year: 2026
venue: "COLM 2026"
url: https://arxiv.org/abs/2602.22303v1
checked: 2026-10-15
tags: [source:search-2026-10-14, object:self-report, reveals:misbehavior, signal:env-label, signal:judge, lever:sft, updates:explanation, contribution:method, motivation:monitoring, domain:agentic, domain:code, scale:closed, eval:ood, eval:adversarial, eval:specificity, eval:privileged-access, model:gpt-4.1, model:gpt-4.1-mini, model:gemini-2.0-flash, metric:undetected-successful-attack-rate, metric:false-positive-rate, metric:cross-task-detection-variability]
---
**TL;DR** Introduces self-incrimination SFT, which trains agents to call a reporting tool alongside covert actions: sharply cuts undetected successful attacks in unseen environments and beats blackbox monitors.
**Problem** Covert agent misbehavior (hidden side tasks) evades blackbox monitors; alignment training may fail or overgeneralize.
**Method** Self-incrimination: on-policy SFT on agent trajectories with a report_scheming() tool call inserted beside each covert action (GPT-5 labeler); 45 synthetic envs, adversarial-pressure augmentation → 15 OOD APPS/BashArena/SHADE-Arena envs.
**Findings** Undetected successful attacks 56→6% (GPT-4.1), 33→14% (mini), 41→9% (Gemini); beats matched and trained monitors, even with scratchpad access; 0% observed FPR (GPT-4.1); 2-3× lower cross-task detection SD; keeps instruction hierarchy, capabilities within a few points; transfers to uninstructed misbehavior; SI+monitor hardest to break adversarially.
**Limits** Non-reasoning API models, SFT only; reframing prompts cut reports; no CoT/whitebox baselines; relies on current models' behavioral inconsistency. Code released.

**Relations**
- compares-to [[li2026spilling]]: Just Ask + SRFT honesty training baseline; weaker against adversarial denial prompts
- compares-to [[chua2024biasaugmented]]: Ignore-Attack-Instruction baseline follows BCT-style consistency training; wrecks benign system-instruction following

**New tags**
- (none)
