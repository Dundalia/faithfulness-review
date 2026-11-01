export const meta = {
  name: 'definitions-second-pass',
  description: 'Complete and correct the definitions catalogue from full texts, check every in-map attribution against its source, rewrite and verify the synthesis page',
  phases: [
    { title: 'Complete', detail: '54 batches: read full texts, add missing definitions, fix or drop wrong rows' },
    { title: 'Attribute', detail: '10 groups of sources: check every borrowed definition against the cited source' },
    { title: 'Synthesize', detail: 'per term: clusters, lineage, attribution results, tensions, claims list' },
    { title: 'Verify', detail: 'independent checks of every claim on the page against the papers' },
    { title: 'Revise', detail: 'replace each failed claim by the strongest claim the evidence supports' },
    { title: 'Introduction', detail: 'main findings written, verified and revised' },
  ],
}

const ROOT = '/Users/davidebaldelli/Developer/faithfulness-review'
const OUT = `${ROOT}/runs/D_definitions`
const DEF = `python3 ${ROOT}/scripts/definitions.py`

const SCOPE = `## Scope: what counts as a definition
A definition is a passage that says what a term MEANS or how the paper decides whether it applies. Count:
- informal: a prose statement of meaning ("we define", "refers to", "i.e.", "we say X is faithful if").
- formal: a mathematical definition. The quote must include the operative equation or condition as it appears in the file (up to ~120 words for formal rows).
- operational: a metric, test, judge rubric, scoring rule or labeling criterion the paper uses to measure the notion, wherever it appears (methods, experiments, appendices, prompts).
- criterion: a necessary or sufficient condition, or an assumption, for the property.
- failure-mode: a named way the property fails.
- taxonomy: a classification of types, components or evaluation kinds. If each category gets its own definition, record each category as its own row too.

Families (the term itself, or a companion notion defined in relation to it):
- faithfulness: faithfulness/unfaithfulness of chains of thought, explanations, self-explanations, self-reports, reasoning summaries, plans. Companions: plausibility, simulatability, self-consistency, verbalization of cues/hints/influences, post-hoc reasoning or rationalization, completeness, sufficiency, comprehensiveness, reliance on the reasoning, honesty and dishonesty (lying, confessions, statements that contradict the model's own beliefs or knowledge), accuracy of self-reports about the model's own behavior or decisions, and consistency between what a model says it did or will do and what it does (say-do, plan-action, claimed versus executed actions, false completion claims).
- counterfactual: what the paper takes a counterfactual to be (input, intervention, edited chain of thought, internal state, explanation), and counterfactual-based notions: counterfactual faithfulness, counterfactual simulatability, counterfactual tests or criteria, counterfactual explanations.
- monitorability: monitorability/monitorable of chains of thought or other observations. Companions: monitor, monitoring protocols and scopes, monitor scores and metrics (detection or catch rate, suspicion score, g-mean, evasion success), legibility, coverage, transparency or observability tied to monitoring, obfuscation, steganography and encoded reasoning, evasion, chain-of-thought controllability, necessity or propensity to externalize reasoning, monitorability tax, and the behaviors monitoring targets when the paper defines them: scheming, covert actions, sabotage, sandbagging, strategic deception, reward hacking, verbalized evaluation awareness.
Set "related": false when the term itself is a form of faithful*/counterfactual*/monitorab*, true for companions.

Do not count: faithfulness to a source document or retrieved context (summarization, RAG) unless explicitly contrasted with the notions above; ordinary-English uses ("faithfully reproduce"); pure introspection capability (detecting injected concepts or internal states) unless defined as the accuracy of the model's reports; generic statistics (pass@k, majority voting, F1, Likert scales) unless they are how the paper operationalizes an in-scope notion; mere uses of a term that say nothing about its meaning.

Stance: proposed (new here), adopted (taken from cited work unchanged), adapted (taken from cited work and modified: narrowed, extended to a new object, measured differently). For adopted/adapted, "source" is what the paper cites for this passage: the map key from ${ROOT}/index.csv when the cited paper is there, otherwise "Surname et al. YEAR"; several separated by "; ". Restatements of someone else's definition count (they are the lineage data), at most one per term per paper: the most explicit one.

Entry fields: family, term (as the paper uses it, with a short disambiguation in parentheses if needed), related, kind, stance, source, where ("Abstract", "§2.1", "Def. 2.3", "App. A.1", "Table 2", ...), quote (VERBATIM from the paper: one to three sentences, at most ~70 words, ~120 for formal rows; may start or end mid-sentence; never paraphrase, join non-adjacent text or fix typos; copy math exactly as in the file), gloss (at most 30 words of plain English, nothing the quote and paper do not support).`

const completePrompt = (b) => `You are completing and correcting a catalogue of how papers define FAITHFULNESS, COUNTERFACTUAL and MONITORABILITY (for LLM chains of thought, explanations and self-reports). Your batch ${b.id} is: ${b.keys.join(', ')}.

The catalogue's first pass read only excerpts (sections mentioning a few search words). An independent audit of 12 papers found it captured about half of the definitions: it missed operational definitions in methods and appendices (detection rates, hint-mention and verbalization rates, judge rubrics, monitor scores, identification bounds, alternative formal definitions), whole notions phrased without the search words, and some rows had the wrong stance (adopted where the paper modifies the source: adapted), wrong cluster-relevant glosses, or formal quotes that omitted the equation. Your job is to make each paper's rows complete and correct.

## Inputs
- \`${ROOT}/cache/full/<key>.txt\`: the full text with numbered paragraphs [P#] and section headings; references and number-only table rows removed, appendices kept. Read ALL of it, in chunks with offset/limit. Do not skip appendices.
- \`${DEF} rows <key>\`: the rows the catalogue already has for the paper (id, family, term, kind, stance, source, where, quote, gloss).
- \`${ROOT}/index.csv\`: keys, titles, authors, years of the papers in the map.

${SCOPE}

## Tasks for each paper
1. ADD every in-scope definition that no existing row captures. Do not duplicate: if an existing row holds the same passage or the same notion, fix that row instead (e.g. extend its quote) rather than adding.
2. FIX existing rows whose fields are wrong: stance (adopted vs adapted), source (must be what the paper cites for this passage), kind, term, where, a gloss that adds or misstates content, a formal quote that omits the operative equation. Keep the paper's own wording even when its term or attribution looks wrong; a later step checks attributions against the sources.
3. DROP an existing row only if it is not a definition under the rules above, with the reason.

## Output
Write \`${OUT}/gap_${b.id}.json\`:
{"papers": [{"key": "...", "add": [ {family, term, related, kind, stance, source, where, quote, gloss}, ... ], "fix": [{"id": "<key>#<i>", "set": {"field": "new value", ...}, "reason": "..."}], "drop": [{"id": "<key>#<i>", "reason": "..."}], "note": "one line"}]}
with one object for EVERY key in your batch (lists may be empty). Then run \`${DEF} check ${OUT}/gap_${b.id}.json\`, which reports every added or fixed quote not found verbatim in the full text; fix each by copying the exact text and rerun until it reports 0. Edit no other file. Return the summary fields only.`

const SUMMARY = {
  type: 'object',
  properties: {
    batch: { type: 'string' }, added: { type: 'integer' }, fixed: { type: 'integer' }, dropped: { type: 'integer' },
    unverified: { type: 'integer' }, notes: { type: 'string', description: 'at most 50 words' },
  },
  required: ['batch', 'added', 'fixed', 'dropped', 'unverified', 'notes'],
}

const attrPrompt = (g) => {
  const cmd = g.sources ? `${DEF} borrowers ${g.sources.join(' ')}` : `${DEF} borrowers --others ${g.others.join(',')} ${g.range}`
  const who = g.sources ? `these sources: ${g.sources.join(', ')}` : `every source in the map whose key starts with a letter in ${g.range}, other than the most-cited ones handled elsewhere`
  return `You check borrowed definitions against the papers they cite, for ${who}.

Run \`${cmd}\`. Each row is a definition in a citing paper (stance adopted or adapted) that names one of your sources. Full texts: \`${ROOT}/cache/full/<key>.txt\` (numbered paragraphs, references removed).

For each source, read its full text completely once. For each row citing it, find the row's quote in the citing paper (grep a distinctive phrase) and read the surrounding sentences to see exactly what the citing paper attributes to the source: a citation may cover only part of a sentence, or support a finding next to the definition rather than the definition. Then give one verdict per (row, source) pair:
- supported: the source states this definition or an equivalent one.
- adapted: the source states a definition or measure that the citing paper visibly modifies (narrows, extends, measures differently).
- renamed: the source states the same definition or measure under another name (give the source's name for it).
- partial: the source supports part of what is attributed; name the part it does not support.
- unsupported: the source states nothing that matches; give the nearest thing it does say.
- misdirected: the definition is stated in a different paper; name it (key if in index.csv).
- other-claim: the citation supports something other than the definition (e.g. an empirical result next to it).

An unsupported, misdirected or partial verdict will be printed on a public page as a correction to the citing paper. Be certain: quote the evidence from both papers, and search the source thoroughly (synonyms, formal versions, appendices, figures described in text) before concluding it does not state something.

Write \`${OUT}/attr_${g.id}.json\`: {"checks": [{"entry": "<key>#<i>", "source": "<source key>", "verdict": "...", "finding": "one precise sentence", "source_evidence": "verbatim from the source, or empty if nothing matches", "citing_evidence": "verbatim from the citing paper showing what it attributes"}]}, one check per (row, source) pair. Edit no other file. Return counts per verdict.`
}

const ATTR = {
  type: 'object',
  properties: { group: { type: 'string' }, checks: { type: 'integer' }, by_verdict: { type: 'object' }, notes: { type: 'string' } },
  required: ['group', 'checks', 'by_verdict', 'notes'],
}

const STYLE = `Style: plain academic register, American spelling, no em dashes (use commas, colons or parentheses), no filler words (notable, crucial, robust as filler, comprehensive, landscape, interplay, underscore, leverage, utilize, furthermore, moreover, thus, therefore, namely, ultimately). State findings at the full strength the evidence supports, as precise claims with exact counts and short quotes. Never hedge with vague quantifiers ("often", "many", "some", "may"): give the count or the split. When the evidence divides, say exactly how. Cite a paper as a link to its dashboard entry: [Lanham et al. 2023](./#p=lanham2023measuring), authors and year from index.csv.`

const synthPrompt = (f) => `You are rewriting one section of a page that catalogues how the literature defines a term. Your term is **${f}**.

## Data
- \`${DEF} dump ${f}\`: every current definition row of this family (id, key, term, related, kind, stance, source, where, quote, gloss). It includes a second pass over full texts that added honesty, scheming, say-do consistency and many operational definitions.
- \`${OUT}/attr_*.json\`: the check of every borrowed definition (with an in-map source) against its source; keep the checks whose entry is in your family.
- \`${OUT}/synth_${f}.md\` and \`.json\`: the previous version of this section and its clusters.
- \`${OUT}/codex_review_1.md\`: an independent audit of the previous version. Address every point in it that concerns this family: claims it found overstated or wrong, misattribution verdicts it overturned, cluster misfits.
- \`${ROOT}/index.csv\`; full texts in \`${ROOT}/cache/full/<key>.txt\`.

## Work
1. Clusters of meaning: keep the previous cluster ids where they still fit, add clusters for notions now present (e.g. honesty, scheming and covert behavior, say-do consistency), move rows the audit found misplaced. Every row in exactly one cluster.
2. Lineage: who borrows which definition from whom, the most-borrowed sources with counts, and how wording changes as it is passed on.
3. Attribution: from the attr checks, a table of verdict counts for this family, the conclusions they support (for instance, which sources are cited for definitions they do not give, and how many times), and the full list of non-supported verdicts (unsupported, misdirected, partial, renamed, other-claim) with the finding and both quotes, inside an HTML <details><summary>All N findings</summary> ... </details> block containing a Markdown table (leave a blank line after <summary> and before </details>).
4. Tensions: concrete disagreements between clusters or papers, each with quotes and the papers on each side. State exactly what each paper says; do not attribute to a paper a stronger position than its text takes.

${STYLE}

## Output
- \`${OUT}/synth_${f}.md\`: the section, starting at ### headings (it goes under "## ${f[0].toUpperCase() + f.slice(1)}"): an opening paragraph with counts (rows, papers, by kind and stance), one ### per cluster (meaning in two or three sentences, a canonical definition as a block quote whose attribution line is "> ([Paper](./#p=key), §x)", a table | Paper | Term | Kind | Definition | of members abbreviated to the essential clause, up to ~15 rows then "and N more: ..." with links, formal versions in LaTeX $...$), then ### Lineage, ### Attribution check, ### Tensions.
- \`${OUT}/synth_${f}.json\`: {"clusters": [{"id", "name", "description", "entries": ["<key>#<i>", ...]}]}.
- \`${OUT}/claims_${f}.json\`: {"claims": [{"n": 1, "text": "the sentence as written on the page", "papers": ["key", ...], "evidence": ["verbatim quote or row id supporting it", ...]}]}: EVERY factual claim on the page about what a paper says, about relations between papers, or about counts, numbered in page order. Table rows copied from the data and the attribution findings list are not claims (they are checked elsewhere); sentences that summarize them are.
Edit no other file. Return the number of claims and a 60-word summary.`

const CLAIMS = {
  type: 'object',
  properties: { claims: { type: 'integer' }, summary: { type: 'string' } },
  required: ['claims', 'summary'],
}

const verifyPrompt = (f, a, b) => `You independently verify claims on a page about how the literature defines **${f}**. Your claims are numbers ${a} to ${b} in \`${OUT}/claims_${f}.json\` (fields: n, text, papers, evidence). Their context is \`${OUT}/synth_${f}.md\`.

For each claim, open the cited papers' full texts (\`${ROOT}/cache/full/<key>.txt\`) and check the claim as worded, not its evidence list alone. Recompute counts from \`${DEF} dump ${f}\` and \`${OUT}/attr_*.json\` with python. Verdicts:
- supported: true as worded.
- overstated: the evidence supports a weaker version only.
- understated: the evidence supports a stronger or more precise claim.
- wrong: false.
For every verdict other than supported, write the replacement: the STRONGEST precise sentence the evidence fully supports, with counts and short verbatim quotes where useful. Do not replace a precise claim with a vague one; if a stronger true statement exists, give that. Keep the page's link format and plain style (no em dashes).

Write \`${OUT}/verify_${f}_${a}.json\`: {"results": [{"n", "verdict", "reason", "evidence": ["verbatim quotes from the papers"], "replacement": "..." }]}. Edit no other file. Return counts per verdict.`

const VERDICTS = {
  type: 'object',
  properties: { supported: { type: 'integer' }, overstated: { type: 'integer' }, understated: { type: 'integer' }, wrong: { type: 'integer' } },
  required: ['supported', 'overstated', 'understated', 'wrong'],
}

const revisePrompt = (f) => `Apply the verification results to the section on **${f}**: \`${OUT}/synth_${f}.md\`, its claims \`${OUT}/claims_${f}.json\`, and the results \`${OUT}/verify_${f}_*.json\`.
For every claim whose verdict is not "supported", replace its sentence on the page with the replacement (adjust surrounding wording only as needed for the text to read correctly). Then reread the whole section: any remaining sentence that rests on a replaced claim must be made consistent with it. Do not weaken claims that were verified as supported. Keep the style: no em dashes, exact counts, links as [Author Year](./#p=key).
Update \`${OUT}/claims_${f}.json\` so each claim's text matches the page and add "status": "verified" or "revised". Edit no other file. Return a 60-word summary of what changed.`

const introPrompt = `Write the introduction of a page cataloguing how 217 papers define FAITHFULNESS, COUNTERFACTUAL and MONITORABILITY (LLM chains of thought, explanations, self-reports). The three sections are written and verified: \`${OUT}/synth_faithfulness.md\`, \`synth_counterfactual.md\`, \`synth_monitorability.md\`, with verified claims in \`${OUT}/claims_<family>.json\`. Row data: \`${DEF} dump <family>\`; attribution checks: \`${OUT}/attr_*.json\`. The previous introduction is the part of \`${ROOT}/site/pages/definitions.md\` before "## Faithfulness"; the audit \`${OUT}/codex_review_1.md\` (part 5) found its main findings 1 and 5 overstated and 2 insufficiently qualified, and noted inconsistent counting units.

Write \`${OUT}/intro.md\`:
- "# Definitions of Faithfulness, Counterfactual and Monitorability", then one paragraph: what the page is, the total number of definition rows and papers, what each row records, and that \`definitions.csv\` and the dashboard's Definitions tab hold them. Use "definition rows" and "papers" consistently.
- A table | Term | Definition rows | Papers | Clusters | Main split | linking to #faithfulness, #counterfactual, #monitorability.
- "## Main findings": four to six bold-led paragraphs, each a strong, precise finding taken from the verified section claims, with counts and quotes, and links. Where the previous version overstated, give the strongest finding the evidence supports, not a hedge. Include one on attribution: the exact verdict counts over all checked borrowed definitions and the most consequential concrete misattributions.
Do not write a method section (it is added separately).

${STYLE}

Also write \`${OUT}/claims_intro.json\` in the same format as the other claims files, for every factual claim in the introduction. Edit no other file. Return the number of claims.`

const introVerifyPrompt = `Independently verify every claim in \`${OUT}/claims_intro.json\` (context: \`${OUT}/intro.md\`) against the papers (\`${ROOT}/cache/full/<key>.txt\`), the data (\`${DEF} dump <family>\`, \`${OUT}/attr_*.json\`), and the verified sections (\`${OUT}/synth_*.md\`). Recompute every count with python. Verdicts supported / overstated / understated / wrong; for each non-supported claim give the strongest precise replacement the evidence fully supports (no em dashes, links as [Author Year](./#p=key)). Write \`${OUT}/verify_intro.json\` ({"results": [{"n", "verdict", "reason", "evidence", "replacement"}]}). Edit no other file. Return counts per verdict.`

const introRevisePrompt = `Apply \`${OUT}/verify_intro.json\` to \`${OUT}/intro.md\`: replace each non-supported claim with its replacement and make the rest consistent; do not weaken supported claims; no em dashes. Update \`${OUT}/claims_intro.json\` text and status. Edit no other file. Return a 40-word summary.`

if (!args || !Array.isArray(args.batches) || !args.batches.length || !Array.isArray(args.groups) || !args.groups.length)
  throw new Error('args must be {batches: [...], groups: [...]}')

phase('Complete')
const done = (await parallel(args.batches.map(b => () =>
  agent(completePrompt(b), { label: `complete:${b.id}`, phase: 'Complete', schema: SUMMARY })))).filter(Boolean)
const failed = args.batches.filter((b, i) => !done.some(s => s.batch.includes(b.id))).map(b => b.id)
log(`complete: ${done.length}/${args.batches.length} batches, +${done.reduce((n, s) => n + s.added, 0)} added, ${done.reduce((n, s) => n + s.fixed, 0)} fixed, ${done.reduce((n, s) => n + s.dropped, 0)} dropped` + (failed.length ? `; no summary from ${failed.join(', ')}` : ''))

phase('Attribute')
const attr = (await parallel(args.groups.map(g => () =>
  agent(attrPrompt(g), { label: `attribute:${g.id}`, phase: 'Attribute', schema: ATTR })))).filter(Boolean)
log(`attribution: ${attr.reduce((n, a) => n + a.checks, 0)} checks from ${attr.length}/${args.groups.length} groups`)

const FAMILIES = ['faithfulness', 'counterfactual', 'monitorability']
const CHUNK = 15
const sections = await pipeline(FAMILIES,
  f => agent(synthPrompt(f), { label: `synth:${f}`, phase: 'Synthesize', schema: CLAIMS }),
  (s, f) => {
    const n = s.claims, chunks = []
    for (let a = 1; a <= n; a += CHUNK) chunks.push([a, Math.min(n, a + CHUNK - 1)])
    return parallel(chunks.map(([a, b]) => () =>
      agent(verifyPrompt(f, a, b), { label: `verify:${f}:${a}-${b}`, phase: 'Verify', schema: VERDICTS })))
      .then(vs => ({ claims: n, verdicts: vs.filter(Boolean), missing: vs.filter(v => !v).length }))
  },
  (v, f) => agent(revisePrompt(f), { label: `revise:${f}`, phase: 'Revise' }).then(r => ({ family: f, ...v, revision: r })),
)

phase('Introduction')
const introClaims = await agent(introPrompt, { label: 'intro:write', phase: 'Introduction', schema: CLAIMS })
const introVerdicts = await agent(introVerifyPrompt, { label: 'intro:verify', phase: 'Introduction', schema: VERDICTS })
const introRevision = await agent(introRevisePrompt, { label: 'intro:revise', phase: 'Introduction' })

return { complete: done, failed, attribution: attr, sections, intro: { claims: introClaims, verdicts: introVerdicts, revision: introRevision } }
