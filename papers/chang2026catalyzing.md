---
key: chang2026catalyzing
title: "CAT-alyzing Honesty: Continuous Adversarial Training for Transferable LLM Honesty"
authors: "Chang, Herbster, Gidel & Tosato"
year: 2026
venue: "preprint"
url: https://arxiv.org/abs/2610.22292v1
checked: 2026-10-19
tags: [source:idea-reports-2026-10-19, object:output, object:self-report, reveals:latent-belief, reveals:hidden-behavior, signal:generic-cf, signal:env-label, signal:implanted-behavior, lever:sft, lever:adversarial-training, lever:preference, updates:explanation, contribution:method, motivation:auditing, motivation:alignment, domain:chat, domain:agentic, scale:mid, eval:ood, eval:adversarial, eval:confound-control, model:llama-3.3-70b, model:qwen3.6-27b, metric:mask-honest-rate, metric:confession-rate, metric:impostor-win-rate, metric:auditing-agent-success-rate]
---
**Problem** Aligned LLMs still lie when instructed, when incentivised, or when trained to conceal. Prompting and SFT transfer poorly, and honesty steering costs utility.
**Method** CATCH: continuous (embedding-space) adversarial training toward honest and away from dishonest on-policy targets (~200, from self-report scenarios), plus on-policy utility data. LoRA on Llama-3.3-70B and Qwen3.6-27B.
**Findings** MASK honest rate 34→86% and 47→91%. Among Us confessions 5→84% and 19→85%. AuditBench discovery 43→79% (SFT organism). Beats prompting and SFT; beats StTP steering on MASK, on par elsewhere. AlpacaEval at parity (StTP drops Llama to 8.6%; UltraChat utility data instead: ~22-29%). MMLU within 1 point.
**Limits** White-box only. Two models; AuditBench on Llama only, 5 audits per behavior, baselines digitized from the original paper. Confession regex is a lower bound. CAPO variants cause refusals. Code promised but not yet released.

**Relations**
- compares-to [[wang2025evaluating]]: Its honesty prompts as baselines; tops its reported Claude-SFT MASK result with ~50x less data

**New tags**
- lever:adversarial-training: min-max training against worst-case input, embedding or latent perturbations that elicit the unwanted output, so the target behavior holds robustly (e.g. continuous adversarial training, latent adversarial training)
