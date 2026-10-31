export const meta = {
  name: 'definitions-catalogue',
  description: 'Extract definitions of faithfulness, counterfactual and monitorability from 217 papers, then synthesize one page section per term',
  phases: [
    { title: 'Extract', detail: '18 batches of ~12 papers: read excerpts, record verbatim definitions, self-check quotes' },
    { title: 'Synthesize', detail: 'one agent per term: clusters, lineage, attribution checks, page section' },
  ],
}

const ROOT = '/Users/davidebaldelli/Developer/faithfulness-review'
const OUT = `${ROOT}/runs/D_definitions`

const EXAMPLES = `[
 {"family":"faithfulness","term":"faithful interpretation","related":false,"kind":"informal","stance":"proposed","source":"","where":"§1","quote":"Intuitively, a faithful interpretation is one that accurately represents the reasoning process behind the model’s prediction.","gloss":"The informal definition most later LLM papers quote."},
 {"family":"faithfulness","term":"CoT faithfulness","related":false,"kind":"informal","stance":"adopted","source":"jacovi2020towards","where":"§1","quote":"Such claims only hold if the generated reasoning is faithful to the model’s true reasoning, meaning that it “accurately represents the reasoning process behind the model’s prediction” (Jacovi & Goldberg, 2020).","gloss":"Transfers Jacovi & Goldberg's definition to chain of thought."},
 {"family":"faithfulness","term":"causal concept faithfulness","related":false,"kind":"formal","stance":"proposed","source":"","where":"Def. 2.3","quote":"We define the faithfulness of model $\\\\mathcal{M}$ on $\\\\mathbf{x}$ , denoted $\\\\mathcal{F}(\\\\mathbf{x})$ , as:","gloss":"F(x) = PCC(CE(x,C), EE(x,C)): correlation between each concept's causal effect and how often explanations cite it."},
 {"family":"faithfulness","term":"faithfulness under biasing features","related":false,"kind":"criterion","stance":"proposed","source":"","where":"§2","quote":"In order to be faithful in this setup, models must either acknowledge any biases affecting their predictions or give predictions unaffected by bias.","gloss":"Condition that makes comparing predictions with and without the cue sufficient to measure unfaithfulness."},
 {"family":"faithfulness","term":"post-hoc reasoning","related":true,"kind":"failure-mode","stance":"adopted","source":"Holzinger et al. 2017","where":"§1","quote":"The model’s reasoning may be post-hoc, i.e., produced after a certain conclusion has already been guaranteed (Holzinger et al., 2017).","gloss":"One named way CoT can be unfaithful."},
 {"family":"counterfactual","term":"counterfactual input (concept intervention)","related":false,"kind":"formal","stance":"proposed","source":"Pearl 2009","where":"§2","quote":"denote the counterfactual input that results from an intervention that changes the concept $C_{m}$ from $c_{m}$ to $c_{m}^{\\\\prime}$ but keeps all other aspects of the question $\\\\mathbf{x}$ (including the values of all other concepts) the same.","gloss":"Counterfactual = intervention on one concept, all else fixed."},
 {"family":"monitorability","term":"monitorability","related":false,"kind":"informal","stance":"proposed","source":"","where":"§2","quote":"We develop evaluations for monitorability, which we define as a monitor’s ability to accurately predict a specified property of an agent’s actions, e.g. whether the model is acting or will act harmfully.","gloss":"Two-sided (agent and monitor), property-relative, explicitly not requiring faithfulness."},
 {"family":"monitorability","term":"coverage","related":true,"kind":"operational","stance":"proposed","source":"","where":"§3.1–3.2","quote":"Coverage: Does the CoT contain all the reasoning the model needed to produce its final output, so that the user can easily follow along?","gloss":"0–4 autorater score on correctly solved hard tasks."}
]`

const extractPrompt = (b) => `You are building a catalogue of how the literature on LLM reasoning and self-explanations defines three terms: FAITHFULNESS, COUNTERFACTUAL and MONITORABILITY. Your batch (${b.id}) is these ${b.keys.length} papers, identified by key:
${b.keys.join(', ')}

## Inputs
- For each key, \`${ROOT}/cache/defs/<key>.txt\` is an excerpt of the paper: every section that mentions faithful*, counterfactual*, monitorab*, legib*, obfuscat*, steganograph* or "encoded reasoning", with paragraph numbers [P#] and section headings; references and most appendix sections are removed. Read each excerpt fully (use offset/limit for long files).
- The full text is \`${ROOT}/cache/<key>.txt\`, or \`${ROOT}/cache/<key>.pdf\` (read it with \`pdftotext -q ${ROOT}/cache/<key>.pdf -\`). Open it when the excerpt points elsewhere (e.g. "see Appendix B for the formal definition"), to resolve numbered citations like [27] in the reference list, or when the excerpt is under 3,000 characters: then the paper barely uses the terms, so skim its abstract, introduction and any definitions/setup section rather than reading it all.
- \`${ROOT}/index.csv\` lists every paper in the map (key, title, authors, year). Use it to map a cited paper to its key.

## What to record
A definition is a passage that says what one of the terms (or a closely related term) MEANS. Record:
- **informal**: a prose statement of what the term means ("we define", "refers to", "i.e.", "meaning that", "we say X is faithful if").
- **formal**: a mathematical definition. Quote the sentence that introduces it and put the formula in the gloss.
- **operational**: a metric or test the paper presents as measuring the term (e.g. "a measure of post-hoc reasoning (higher ... indicating greater faithfulness)").
- **criterion**: a necessary or sufficient condition, or an assumption, for the property (e.g. "an interpretation system is unfaithful if ...").
- **failure-mode**: a named way the property fails (post-hoc reasoning, encoded reasoning, obfuscation, steganography).
- **taxonomy**: a classification of types, components or evaluation kinds of the property.

Families:
- **faithfulness**: faithfulness / faithful / unfaithful of CoT, explanations, self-explanations, self-reports, reasoning summaries, plans; plus companion terms defined with or against it (plausibility, simulatability, self-consistency, verbalization, post-hoc reasoning, completeness ...). Skip faithfulness to a source document or retrieved context (summarization, RAG) unless the paper explicitly contrasts it, and skip ordinary-English uses ("faithfully reproduce").
- **counterfactual**: what the paper takes a counterfactual to be (input, intervention, edited CoT, explanation), and counterfactual-based notions: counterfactual faithfulness, counterfactual simulatability, counterfactual tests or criteria. Do not record mere uses of "counterfactual inputs" that say nothing about what they are.
- **monitorability**: monitorability / monitorable of CoT or other observations; plus companion terms: monitor, legibility, coverage, obfuscation, steganography, encoded reasoning, necessity/propensity to externalize, monitorability tax, observability or transparency when tied to monitoring.

Set "related": false when the term itself is a form of faithful*/counterfactual*/monitorab* (e.g. "CoT faithfulness", "counterfactual simulatability", "unmonitorable"), true for companion terms.

Stance: **proposed** (new in this paper), **adopted** (taken from cited work), **adapted** (cited work modified). For adopted/adapted, "source" is the cited paper's map key when it is in index.csv, otherwise "Surname et al. YEAR"; separate several with "; ". Restatements of someone else's definition ARE wanted (they show who borrows from whom), but record at most one per term per paper: the most explicit one. Do not record a definition merely because a paper uses the term.

Within a paper, record each distinct definition once: if the abstract and §2 say the same thing, keep the more explicit and complete one. Typical papers yield 2–8 entries; some yield none (say why in the note); more than ~12 means you are recording uses, not definitions.

Fields per entry:
- family, term (the exact term as the paper uses it, with a short disambiguation in parentheses if needed), related, kind, stance, source
- where: "Abstract", "§2.1", "Def. 2.3", "App. A.1", "Table 2", ...
- quote: VERBATIM text copied from the excerpt or full text, one to three sentences, at most ~70 words. You may start or end mid-sentence but never paraphrase, join non-adjacent text, or fix typos. Copy math exactly as it appears in the file.
- gloss: at most 30 words of plain English: what the definition says, and anything a reader comparing definitions needs (what is being matched to what, what a formula computes).

Examples from a pilot on other papers (format and granularity, not content to reuse):
${EXAMPLES}

## Output
1. Write \`${OUT}/batch_${b.id}.json\` as {"papers": [{"key": "...", "entries": [ ... ], "note": "..."}]} with one object for EVERY key in your batch (entries may be empty). The note is one line: anything notable, e.g. "uses the term throughout but never defines it" or "definition attributed to Baker et al. but not stated there".
2. Run \`python3 ${ROOT}/scripts/definitions.py check ${OUT}/batch_${b.id}.json\`. It prints every quote not found verbatim in the full text (whitespace and curly quotes are normalized). Fix each one by copying the exact text, and rerun until it reports 0, or remove an entry you cannot quote exactly.
3. Do not edit any other file.

Return the summary fields only.`

const SUMMARY = {
  type: 'object',
  properties: {
    batch: { type: 'string' },
    papers: { type: 'integer', description: 'papers written to the batch file' },
    entries: { type: 'integer' },
    unverified: { type: 'integer', description: 'quotes still reported by the check' },
    no_definitions: { type: 'array', items: { type: 'string' }, description: 'keys with zero entries' },
    notes: { type: 'string', description: 'at most 60 words: problems or notable patterns' },
  },
  required: ['batch', 'papers', 'entries', 'unverified', 'no_definitions', 'notes'],
}

phase('Extract')
const batches = args
if (!Array.isArray(batches) || !batches.length || !batches.every(b => b.id && Array.isArray(b.keys) && b.keys.length))
  throw new Error('args must be a non-empty array of {id, keys: [...]} batches')
const summaries = (await parallel(batches.map(b => () =>
  agent(extractPrompt(b), { label: `extract:${b.id}`, phase: 'Extract', schema: SUMMARY })))).filter(Boolean)
const total = summaries.reduce((n, s) => n + s.entries, 0)
const missing = batches.filter(b => !summaries.some(s => s.batch === b.id)).map(b => b.id)
log(`${summaries.length}/${batches.length} batches done, ${total} definitions` + (missing.length ? `; missing batches ${missing.join(', ')}` : ''))

const FAMILIES = [
  { family: 'faithfulness', file: 'synth_faithfulness' },
  { family: 'counterfactual', file: 'synth_counterfactual' },
  { family: 'monitorability', file: 'synth_monitorability' },
]

const synthPrompt = (f) => `You are writing one section of a page that catalogues how the literature defines a term. Your term is **${f.family}**.

## Data
\`${OUT}/batch_*.json\` hold definitions extracted from 217 papers: {"papers": [{"key", "entries": [{family, term, related, kind, stance, source, where, quote, gloss}], "note"}]}. An entry's id is "<key>#<i>", with i its 1-based position in that paper's entries list. Use python3 to load them and keep the entries with family == "${f.family}". \`${ROOT}/index.csv\` gives each key's title, authors, year and venue; \`${ROOT}/cache/defs/<key>.txt\` and \`${ROOT}/cache/<key>.txt\` (or .pdf, via \`pdftotext -q <file> -\`) hold the texts if you need to check something. The other two families (faithfulness, counterfactual, monitorability minus yours) are being written by other agents; mention a link to them only where a definition explicitly ties the terms together.

## Work
1. **Cluster** the definitions into families of meaning, built from the data rather than from any scheme you bring in. Typically 4–8 clusters; a cluster is a distinct answer to "what does it mean for X to be ${f.family}?" (or, for companion terms, a distinct companion notion). Put every entry in exactly one cluster.
2. **Lineage.** From the adopted/adapted entries and their sources, find which definitions are borrowed by whom, the most-borrowed sources, and how wording drifts as definitions are passed on.
3. **Attribution check.** For adopted/adapted entries whose source is a key in the map, see whether the source paper's own entries contain a matching definition. For the most consequential mismatches (at most 8; prefer sources borrowed by several papers), open the source text and check whether it actually states that definition. Report confirmed mismatches ("attributed to X, but X never states it; nearest is ...") and say which ones you could not settle.
4. **Tensions.** Where clusters genuinely disagree (one counts as ${f.family} what another rules out), state the disagreement concretely, with the papers on each side.

## Output
Write \`${OUT}/${f.file}.md\`, a Markdown section (it will be pasted under a "## ${f.family[0].toUpperCase() + f.family.slice(1)}" heading, so start at ### level):
- An opening paragraph: how many definitions from how many papers, the split by kind and stance, and the one-sentence picture.
- One ### subsection per cluster: what the cluster means in two or three sentences; its canonical definition as a block quote with citation; a table | Paper | Term | Kind | Definition (short quote or gloss) | listing its members (abbreviate the quote to the essential clause; up to ~15 rows, then "and N more: ..." with links); any formal versions written out with LaTeX math ($...$).
- ### Lineage, ### Attribution check, ### Tensions, as above.
- Cite a paper as a link to its dashboard entry: [Lanham et al. 2023](./#p=lanham2023measuring) (authors and year from index.csv).
Write plainly and precisely, in the register of \`${ROOT}/site/pages/actual-causality.md\` (read its first 60 lines). Quotes must be copied from the data, never reworded. No marketing adjectives; state counts exactly.

Also write \`${OUT}/${f.file}.json\`: {"clusters": [{"id": "short-slug", "name": "...", "description": "one sentence", "entries": ["<key>#<i>", ...]}], "mismatches": [{"entry": "<key>#<i>", "source": "...", "finding": "..."}]}.

Do not edit any other file. Return a 100-word summary: cluster names with sizes, and the most important finding.`

if (!total) return { summaries, missing, synth: [] }

phase('Synthesize')
const synth = await parallel(FAMILIES.map(f => () =>
  agent(synthPrompt(f), { label: `synth:${f.family}`, phase: 'Synthesize' })))

return { summaries, missing, synth: FAMILIES.map((f, i) => ({ family: f.family, summary: synth[i] })) }
