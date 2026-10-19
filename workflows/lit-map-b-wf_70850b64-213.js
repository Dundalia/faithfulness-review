export const meta = {
  name: 'lit-map-B',
  description: 'Tag and summarize 130 papers from full text, verify every record with a second agent, then consolidate the tag vocabulary',
  phases: [
    { title: 'Code', detail: 'one agent per paper: tags, telegraphic summary, relations' },
    { title: 'Verify', detail: 'a different agent checks each record against the full text' },
    { title: 'Consolidate', detail: 'merge synonym tags, normalize model/metric names' },
  ],
}

const MAP = '/Users/davidebaldelli/Developer/faith-lit-review/docs/map'
const vocab = new Set(args.vocab)

const REL = {
  type: 'array',
  items: {
    type: 'object',
    properties: { verb: { type: 'string' }, key: { type: 'string' }, note: { type: 'string' } },
    required: ['verb', 'key', 'note'],
  },
}
const NEW = {
  type: 'array',
  items: {
    type: 'object',
    properties: { tag: { type: 'string' }, definition: { type: 'string' } },
    required: ['tag', 'definition'],
  },
}
const CORE = {
  tags: { type: 'array', items: { type: 'string' } },
  problem: { type: 'string' },
  method: { type: 'string' },
  findings: { type: 'string' },
  limits: { type: 'string' },
  relations: REL,
  new_tags: NEW,
}
const REC_SCHEMA = {
  type: 'object',
  properties: { ...CORE, uncertain: { type: 'array', items: { type: 'string' } } },
  required: [...Object.keys(CORE), 'uncertain'],
}
const VERIFY_SCHEMA = {
  type: 'object',
  properties: { ...CORE, changes: { type: 'array', items: { type: 'string' } } },
  required: [...Object.keys(CORE), 'changes'],
}
const CONS_SCHEMA = {
  type: 'object',
  properties: {
    mapping: {
      type: 'array',
      items: {
        type: 'object',
        properties: { from: { type: 'string' }, to: { type: 'string' }, why: { type: 'string' } },
        required: ['from', 'to', 'why'],
      },
    },
    additions: NEW,
    notes: { type: 'string' },
  },
  required: ['mapping', 'additions', 'notes'],
}

const RULES = `Read first:
- \`${MAP}/tags.yaml\`: the tag vocabulary (v0.3) with definitions and rules. Respect the comments, e.g. \`signal:judge\` only when the judge IS the ground truth; \`scale\` tags every size class trained or intervened on; \`eval:behavior-control\` only when behavior is actually held fixed; \`contribution\` covers headline contributions only.
- The "Record" section of \`${MAP}/PLAN.md\`: summary and relation rules.
- \`${MAP}/corpus.txt\`: every paper in the corpus (key: title (year)).

The paper's full text is \`${MAP}/cache/<key>.txt\` or \`${MAP}/cache/<key>.pdf\`. Read long text files in parts with offset/limit and PDFs in chunks of at most 20 pages. Base everything on the paper itself. Do not use other summaries of it: do not open seed.json, the faith-improvement*.md files, or anything under ${MAP}/pilot. Do not edit any files.`

const FIELDS = `Fields:
1. tags: every \`namespace:value\` tag that applies. Go through each namespace in tags.yaml:
   - object, reveals, signal, contribution, motivation, domain, scale: all values that apply.
   - lever and updates: only for papers that intervene.
   - eval: only properties actually present in the evaluation.
   - model: the main models studied, at most 6, following the naming rule in tags.yaml.
   - metric: the primary faithfulness or monitorability metrics, kebab-case, at most 4.
   - Omit source: tags.
   If no vocabulary value fits, coin a new \`namespace:value\` (a new namespace is fine) and define it in new_tags.
2. problem, method, findings, limits: four telegraphic summary lines, about 60 words in total; arrows and abbreviations are fine. Use numbers only if they appear in the paper. For measurement papers, "method" describes the setup. Mention accuracy cost or released code in findings or limits when the paper reports them.
3. relations: links to papers in corpus.txt only, with verbs builds-on, extends, compares-to or contradicts, as defined in PLAN.md. Note: max 15 words; for contradicts, state the conflicting claim. Skip papers that are only mentioned in related work.
4. new_tags: definitions for coined tags (empty list if none).`

const codePrompt = key => `You are building one record of a literature map on improving the faithfulness of LLM chains of thought and self-explanations.

Paper key: \`${key}\`.

${RULES}

${FIELDS}
5. uncertain: tags, claims or relations you were unsure about, each with a few words on why (empty list if none). A second agent will use this to focus its check.`

const verifyPrompt = (key, rec) => `You are the verifier for one record of a literature map on improving the faithfulness of LLM chains of thought and self-explanations. Another agent wrote the record below from the paper. Your job is to find and fix its errors.

Paper key: \`${key}\`.

${RULES}

Record to check (JSON):
${JSON.stringify(rec, null, 1)}

Check against the paper itself:
- Each tag: is it supported by what the paper does, under the tags.yaml definition? Remove unsupported tags and add clearly missing ones. Replace a coined tag with a vocabulary tag when one fits.
- The summary: every claim and every number must match the paper. Fix misstatements, overclaims and wrong numbers; keep it telegraphic and about 60 words.
- Relations: each key must be in corpus.txt, and the verb must match the PLAN.md definitions (e.g. compares-to needs an actual experimental baseline). Fix or remove weak links; add clear ones that are missing.
- Look hardest at the items listed under "uncertain".
Do not rewrite for style alone.

${FIELDS}
5. changes: one line per change, as "field: before -> after (reason)". Empty list if the record was already correct.`

const results = await pipeline(
  args.keys,
  key => agent(codePrompt(key), { label: `code: ${key}`, phase: 'Code', schema: REC_SCHEMA }),
  (rec, key) => rec
    ? agent(verifyPrompt(key, rec), { label: `verify: ${key}`, phase: 'Verify', schema: VERIFY_SCHEMA })
        .then(v => v && { ...v, key, uncertain: rec.uncertain })
    : null,
)

const records = results.filter(Boolean)
const missing = args.keys.filter(k => !records.some(r => r.key === k))
if (missing.length) log(`no verified record for ${missing.length} papers: ${missing.join(', ')}`)
log(`verified ${records.length}/${args.keys.length}; ${records.filter(r => r.changes.length).length} records changed by the verifier`)

// Tag inventory for consolidation: every tag outside the seed vocabulary, plus all model:/metric: tags.
phase('Consolidate')
const inv = {}
for (const r of records) {
  for (const t of r.tags) {
    inv[t] = inv[t] || { tag: t, count: 0, keys: [], definitions: [] }
    inv[t].count++
    if (inv[t].keys.length < 5) inv[t].keys.push(r.key)
  }
  for (const n of r.new_tags) {
    if (inv[n.tag] && inv[n.tag].definitions.length < 3) inv[n.tag].definitions.push(n.definition)
  }
}
const review = Object.values(inv).filter(x => !vocab.has(x.tag)).sort((a, b) => a.tag.localeCompare(b.tag))
log(`${review.length} distinct tags outside the seed vocabulary (incl. model:/metric:) sent to consolidation`)

const cons = await agent(`You are consolidating the tag vocabulary of a literature map (130 papers on improving the faithfulness of LLM chains of thought and self-explanations).

Read \`${MAP}/tags.yaml\` (seed vocabulary v0.3). Below is every tag used in the records that is NOT in the seed vocabulary, with its count, up to 5 paper keys and coders' definitions. If you need context on a paper, \`${MAP}/corpus.txt\` lists titles and \`${MAP}/cache/<key>.*\` has the full text.

${JSON.stringify(review)}

Return:
1. mapping: one entry per tag that should change, as {from, to, why}. Use to = "" to drop a tag.
   - Coined tags: map to a seed tag when one fits its definition; merge synonyms and near-duplicates into one canonical tag; drop tags that only restate another tag on the same paper or that describe trivia.
   - model: normalize to lowercase family-size with version (e.g. llama-3.1-8b, qwen2.5-7b, gpt-4o, claude-3.5-sonnet); drop -instruct/-chat/-it suffixes; merge spelling variants of the same model. Do not merge different sizes or versions.
   - metric: merge only names for the same metric (same quantity, same definition). Keep genuinely different metrics distinct, because how fragmented the metrics are is itself a finding.
2. additions: the canonical non-model, non-metric tags (after mapping) that should join tags.yaml, each with a one-line definition. Include a tag only if it applies to 2+ papers or captures a distinction the seed vocabulary cannot express.
3. notes: 3-6 sentences on what the vocabulary changes say about the literature (e.g. distinctions the seed missed).

Do not edit any files.`, { label: 'consolidate tags', phase: 'Consolidate', schema: CONS_SCHEMA })

return { records, missing, inventory: review, consolidation: cons }
