# baker2025monitoring — coder B

Monitoring Reasoning Models for Misbehavior and the Risks of Promoting Obfuscation

tags: [source:trustme, object:cot, reveals:misbehavior, signal:verified-behavior, signal:judge, lever:rl-reward, lever:inference-time, contribution:analysis, contribution:negative-result, motivation:monitoring, domain:code, domain:agentic, scale:frontier-api, eval:behavior-control, model:openai-internal-reasoning, model:gpt-4o, model:gpt-4o-mini, metric:monitor-recall, metric:monitor-precision, metric:undetected-hack-rate, metric:cheating-rate]

**Problem** Can LLM monitors catch reward hacking from a reasoning agent's CoT? Does training against them keep the CoT monitorable?
**Method** Zero-shot GPT-4o monitor, CoT vs action-only, in frontier agentic-coding RL. Then RL on a non-frontier agent with the monitor penalty in its reward, plus test-time rejection sampling. Honeypot test-editing serves as the cheating ground truth.
**Findings** CoT monitor recall 95% vs 60% action-only; GPT-4o-mini 12%. CoT pressure early on → more capable, fewer hacks. Later → obfuscated hacking with monitor recall near 0. Argues for paying a monitorability tax.
**Limits** One simple hack class; pressure-run monitor reads only the CoT; models undisclosed; single first-try monitor prompt.

**Relations**
- builds-on [[jacovi2020towards]]: adopts its faithfulness definition, narrowed to sufficiency for a monitored property
- contradicts [[lanham2023measuring]]: argues intervention-based causal tests are insufficient faithfulness measures and unneeded for monitorability
- builds-on [[parcalabescu2023measuring]]: agrees input-intervention tests measure self-consistency, not faithfulness
- builds-on [[kirchner2024proververifier]]: uses its legibility notion; suggests prover-verifier objectives for monitorability

**New tags**
- signal:verified-behavior: misbehavior labeled by a programmatic check that does not read the CoT (regex detector, reverting unit-test edits in honeypot tasks); a CoT monitor's detection is scored against it
