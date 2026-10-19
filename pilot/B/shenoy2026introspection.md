# shenoy2026introspection — coder B

Introspection Adapters: Training LLMs to Report Their Learned Behaviors

tags: [source:search-2026-10-14, object:self-report, reveals:hidden-behavior, signal:implanted-behavior, lever:sft, lever:preference, lever:architecture, contribution:method, motivation:auditing, domain:chat, scale:mid, eval:ood, eval:adversarial, model:llama-3.3-70b, model:qwen3-14b, model:qwen3-4b, model:qwen3-0.6b, metric:behavior-verbalization-rate, metric:auditing-agent-success-rate, metric:scaffold-success-rate, metric:sandbagging-claim-rate]

**Problem** Finetuning instills hidden or unexpected behaviors, and LLM self-reports about them are unreliable, so audits are hard.
**Method** Hundreds of Llama-3.3-70B finetunes with known implanted behaviors (8 categories) → one shared LoRA "introspection adapter", trained with SFT to verbalize each behavior, then DPO preferring accurate reports over hallucinated ones → applied to unseen finetunes.
**Findings** SOTA on AuditBench (59% agent success vs 53% next-best). Catches cipher finetuning attacks (7/9 models) and surfaces 16/52 RM-sycophant behaviors. Flags UKAISI sandbaggers above the FPR. Improves with model size and data diversity. DPO helps.
**Limits** High FPR: hallucinates train-set behaviors. OOD gains plateau with more diversity. Misses root-cause objectives. Costly upfront model-organism construction.

**Relations**
- extends [[goel2025learning]]: scales DIT adapter: larger models, more diverse behaviors, DPO stage → broader OOD generalization
- builds-on [[betley2025tell]]: turns unreliable behavioral self-awareness of finetuned models into reliable trained self-reports

**New tags**
- eval:adversarial: evaluated on target models deliberately trained to conceal or deny the behavior being reported
