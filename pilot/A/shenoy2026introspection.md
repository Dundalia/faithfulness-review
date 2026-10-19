# shenoy2026introspection — coder A

Introspection Adapters: Training LLMs to Report Their Learned Behaviors

tags: [source:search-2026-10-14, object:self-report, reveals:hidden-behavior, signal:implanted-behavior, lever:sft, lever:preference, lever:architecture, contribution:method, motivation:auditing, domain:chat, scale:mid, scale:small, eval:ood, eval:concealment-trained-targets, model:llama-3.3-70b, model:qwen3-14b, model:qwen3-4b, model:qwen3-0.6b, metric:verbalization-rate, metric:auditing-agent-success, metric:sandbagging-claim-rate]

**Problem** Finetunes pick up hidden or concerning behaviors; LLM self-reports are unreliable → auditing many finetunes is hard.
**Method** ~680 Llama-3.3-70B finetunes with implanted behaviors (8 categories) → one shared LoRA "introspection adapter" trained to verbalize them (SFT, then DPO against hallucinated reports).
**Findings** SOTA on AuditBench (59% vs 53% agent success); flags cipher-attack finetunes (7/9); RM sycophant: 16/52 behaviors surfaced but not the root goal. Improves with scale, data diversity and DPO.
**Limits** High false positives (hallucinates train-set behaviors); OOD gains plateau as diversity grows; costly setup; genuine introspection unproven.

**Relations**
- extends [[goel2025learning]]: Scales DIT to larger models and more diverse behaviors, adds DPO; broader OOD generalization
- builds-on [[betley2025tell]]: Elicits latent behavioral self-awareness; agrees introspective ability grows with model size
- builds-on [[binder2024looking]]: Adopts its introspection framing but does not claim introspection in Binder's strict sense

**New tags**
- eval:concealment-trained-targets: evaluated on target models adversarially trained not to disclose the behavior being elicited (e.g. AuditBench SFT/KTO anti-confession training)
- metric:verbalization-rate: fraction of a model's self-reports that an LLM judge rates as matching the ground-truth implanted behavior
- metric:auditing-agent-success: rate at which an investigator agent using a given tool ranks the correct hidden behavior among its top predictions
- metric:sandbagging-claim-rate: rate of self-reports that claim any sandbagging-like behavior, compared against a false-positive rate on non-sandbagging models
