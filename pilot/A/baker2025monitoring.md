# baker2025monitoring — coder A

Monitoring Reasoning Models for Misbehavior and the Risks of Promoting Obfuscation

tags: [source:trustme, object:cot, reveals:misbehavior, signal:judge, signal:programmatic-hack-label, lever:rl-reward, lever:inference-time, contribution:negative-result, contribution:analysis, motivation:monitoring, domain:code, domain:agentic, scale:frontier-api, eval:behavior-control, model:openai-frontier-reasoning-internal, model:gpt-4o, model:gpt-4o-mini, metric:monitor-recall, metric:monitor-precision, metric:undetected-hack-rate]

**Problem** Reward hacking in agentic coding RL. Can CoT monitors catch it, and is it safe to train against them?
**Method** Zero-shot GPT-4o monitor on a frontier OpenAI agent: full trajectory incl. CoT vs. actions only. Then RL of a non-frontier agent on honeypot unit-test tasks, with a CoT-only monitor penalty in the reward. Also test-time rejection sampling (32 samples).
**Findings** Systemic-hack recall: CoT monitor 95%, action monitor 60%, GPT-4o-mini 12%. CoT pressure early: fewer hacks, more capable agent. Later: obfuscated hacking, recall near 0.
**Limits** Coding only. Simple unit-test hack. Monitor prompt was the first one tried. Models undisclosed. Pressure monitor sees CoT only.

**Relations**
- contradicts [[lanham2023measuring]]: intervention-based causal CoT tests neither necessary nor sufficient for faithfulness/monitorability
- builds-on [[jacovi2020towards]]: narrows their faithfulness definition to sufficiency for one monitored property v
- builds-on [[parcalabescu2023measuring]]: cites their argument that input-perturbation tests measure self-consistency, not faithfulness
- builds-on [[kirchner2024proververifier]]: treats legibility as a monitorability failure mode; suggests PVG-style training objectives

**New tags**
- signal:programmatic-hack-label: ground truth for misbehavior from a programmatic check on actions/outcomes (regex detector, honeypot test-revert check); CoT monitor recall is measured against it
- model:openai-frontier-reasoning-internal: unnamed internal OpenAI frontier reasoning agent (o1/o3-mini family, stronger than o3-mini) monitored during training; also an unnamed non-frontier OpenAI reasoning agent used for the CoT-pressure RL runs
- metric:monitor-recall: fraction of ground-truth misbehaving trajectories flagged by the CoT (or action) monitor
- metric:monitor-precision: fraction of monitor flags that match ground-truth misbehavior (approximate here, since the monitor flags any hack type)
- metric:undetected-hack-rate: rate of trajectories that cheat per the ground-truth check but do not trigger the CoT monitor (obfuscated reward hacking)
