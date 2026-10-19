export const meta = {
  name: 'lit-map-C2',
  description: 'Tag and summarize new papers from full text and verify every record with a second agent',
  phases: [
    { title: 'Code', detail: 'one agent per paper: tags, telegraphic summary, relations' },
    { title: 'Verify', detail: 'a different agent checks each record against the full text' },
  ],
}

const MAP = '/Users/davidebaldelli/Developer/faithfulness-review'

const REL = { type: 'array', items: { type: 'object', properties: { verb: { type: 'string' }, key: { type: 'string' }, note: { type: 'string' } }, required: ['verb', 'key', 'note'] } }
const NEW = { type: 'array', items: { type: 'object', properties: { tag: { type: 'string' }, definition: { type: 'string' } }, required: ['tag', 'definition'] } }
const CORE = { tags: { type: 'array', items: { type: 'string' } }, problem: { type: 'string' }, method: { type: 'string' }, findings: { type: 'string' }, limits: { type: 'string' }, relations: REL, new_tags: NEW }
const REC_SCHEMA = { type: 'object', properties: { ...CORE, uncertain: { type: 'array', items: { type: 'string' } } }, required: [...Object.keys(CORE), 'uncertain'] }
const VERIFY_SCHEMA = { type: 'object', properties: { ...CORE, changes: { type: 'array', items: { type: 'string' } } }, required: [...Object.keys(CORE), 'changes'] }

const RULES = `Read first:
- \`${MAP}/tags.yaml\`: the tag vocabulary (v1) with definitions and rules. Respect the comments, for example:
  - \`signal:judge\` only when the judge IS the ground truth;
  - \`scale\` tags every size class trained or intervened on;
  - \`eval:behavior-control\` only when behavior is actually held fixed;
  - \`contribution\` covers headline contributions only;
  - \`factor:\` is for analysis papers studying drivers of (un)faithfulness.
- The "Record" section of \`${MAP}/PLAN.md\`: summary and relation rules.
- \`${MAP}/corpus.txt\`: every paper in the corpus (key: title (year)), including recently added ones.

The paper's full text is \`${MAP}/cache/<key>.txt\` or \`${MAP}/cache/<key>.pdf\`. Read long text files in parts with offset/limit, and PDFs in chunks of at most 20 pages. Its metadata (title, venue, url) is in \`${MAP}/papers/<key>.md\`.

Base everything on the paper itself. Do not use other summaries of it: do not open seed.json, runs/, ideas/, or the faith-improvement*.md files.

Do not edit any files.`

const FIELDS = `Fields:
1. **tags:** every \`namespace:value\` tag that applies. Go through each namespace in tags.yaml:
   - object, reveals, signal, contribution, motivation, domain, scale: all values that apply.
   - lever and updates: only for papers that intervene.
   - eval: only properties actually present.
   - factor: only for analysis papers.
   - model: the main models, at most 6, following the naming rule in tags.yaml.
   - metric: the primary faithfulness or monitorability metrics, kebab-case, at most 4. Reuse an existing metric name when it is the same quantity; check \`${MAP}/tags.csv\` for names already in use.
   - Omit source: tags.

   If no vocabulary value fits, coin a new \`namespace:value\` and define it in new_tags.
2. **problem, method, findings, limits:** four telegraphic summary lines, about 60 words in total. Use numbers only if they appear in the paper. For measurement papers, "method" describes the setup. Mention accuracy cost or released code when reported. For blog posts, note in limits that the work is not peer reviewed.
3. **relations:** links to papers in corpus.txt only, with verbs builds-on, extends, compares-to or contradicts, as defined in PLAN.md.
   - Note: max 15 words. For contradicts, state the conflicting claim.
   - Skip papers that are only mentioned in related work.
   - A paper cannot contradict work it predates or does not engage with.
4. **new_tags:** definitions for coined tags (empty list if none).`

const codePrompt = key => `You are building one record of a literature map on improving and measuring the faithfulness of LLM chains of thought and self-explanations.

Paper key: \`${key}\`.

${RULES}

${FIELDS}
5. **uncertain:** tags, claims or relations you were unsure about, each with a few words on why (empty list if none).`

const verifyPrompt = (key, rec) => `You are the verifier for one record of a literature map on the faithfulness of LLM chains of thought and self-explanations. Another agent wrote the record below from the paper. Your job is to find and fix its errors.

Paper key: \`${key}\`.

${RULES}

Record to check (JSON):
${JSON.stringify(rec, null, 1)}

Check against the paper itself:
- **Each tag:** is it supported under the tags.yaml definition? Remove unsupported tags, add clearly missing ones, and replace a coined tag with a vocabulary tag when one fits.
- **The summary:** every claim and every number must match the paper. Fix overclaims and wrong numbers, and keep it telegraphic, about 60 words.
- **Relations:** each key must be in corpus.txt, and the verb must match the PLAN.md definitions. Fix or remove weak or anachronistic links, and add clear missing ones.
- Look hardest at the items listed under "uncertain".

Do not rewrite for style alone.

${FIELDS}
5. **changes:** one line per change, as "field: before -> after (reason)". Empty list if the record was already correct.`

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
if (missing.length) log(`no verified record for ${missing.length}: ${missing.join(', ')}`)
log(`verified ${records.length}/${args.keys.length}; ${records.filter(r => r.changes.length).length} changed by the verifier`)
return { records, missing }
