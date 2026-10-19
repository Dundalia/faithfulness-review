export const meta = {
  name: 'lit-map-A',
  description: 'Verify metadata (latest version, authors, venue) for 130 papers and pilot-tag 12 papers with two independent coders',
  phases: [
    { title: 'Metadata', detail: 'latest version, authors, acceptance status; batches of 15' },
    { title: 'Pilot', detail: '12 papers x 2 independent coders' },
  ],
}

const MAP = '/Users/davidebaldelli/Developer/faith-lit-review/docs/map'
const keys = args.keys
const batches = []
for (let i = 0; i < keys.length; i += 15) batches.push(keys.slice(i, i + 15))

const META_SCHEMA = {
  type: 'object',
  properties: {
    papers: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          key: { type: 'string' },
          title: { type: 'string' },
          authors: { type: 'string' },
          year: { type: 'integer' },
          venue: { type: 'string' },
          url: { type: 'string' },
          evidence: { type: 'string' },
          changed: { type: 'string' },
          confident: { type: 'boolean' },
        },
        required: ['key', 'title', 'authors', 'year', 'venue', 'url', 'evidence', 'changed', 'confident'],
      },
    },
  },
  required: ['papers'],
}

const PILOT_SCHEMA = {
  type: 'object',
  properties: {
    key: { type: 'string' },
    tags: { type: 'array', items: { type: 'string' } },
    problem: { type: 'string' },
    method: { type: 'string' },
    findings: { type: 'string' },
    limits: { type: 'string' },
    relations: {
      type: 'array',
      items: {
        type: 'object',
        properties: { verb: { type: 'string' }, key: { type: 'string' }, note: { type: 'string' } },
        required: ['verb', 'key', 'note'],
      },
    },
    new_tags: {
      type: 'array',
      items: {
        type: 'object',
        properties: { tag: { type: 'string' }, definition: { type: 'string' } },
        required: ['tag', 'definition'],
      },
    },
    uncertain: { type: 'array', items: { type: 'string' } },
  },
  required: ['key', 'tags', 'problem', 'method', 'findings', 'limits', 'relations', 'new_tags', 'uncertain'],
}

const metaPrompt = (batch) => `You are verifying bibliographic metadata for papers in a research literature map. Today is ${args.today}.

Your papers (keys): ${batch.join(', ')}

For each key, read its hints from \`${MAP}/seed.json\` (a JSON list; use python3 or jq to pull only your entries). Fields: key, title, authors, year, venue, url, arxiv_id, arxiv. \`arxiv\` holds metadata fetched today from the arXiv API for the latest version (version, title, authors, published = first-version date, updated, comment, journal_ref); treat it as authoritative for title, authors and version. \`venue\` is an unverified earlier guess. Ignore \`prior_note\`. For web requests use curl (python's urllib cannot verify SSL on this machine).

For each paper determine:
- title: the title of the latest version.
- authors: surnames in order. Up to four authors: "A, B, C & D". More than four: "A, B, C et al.". Keep compound surnames intact (e.g. "Lewis-Lim", "Gomezjurado Gonzalez").
- year: year of the first public version (arXiv \`published\`, or the venue year if there is no preprint).
- venue: where it was accepted, formatted like "ICLR 2026", "NeurIPS 2025", "Findings of ACL 2025", "TMLR 2025", "COLM 2026", "ICML 2026 workshop (FAGEN)". A confirmed main-conference or journal acceptance beats a workshop; give a workshop only when there is no main venue. Use "preprint" when no acceptance can be confirmed (including "under review"), "withdrawn (ICLR 2026 submission)" for withdrawn OpenReview submissions, and "blog" for blog posts.
- url: for arXiv papers, https://arxiv.org/abs/<id>v<N> with the latest version number. Otherwise the best stable page (OpenReview forum, ACL Anthology, proceedings); if a non-arXiv paper now has an arXiv version, use that.
- evidence: where you confirmed the venue (URL or source and what it says, max 25 words). For "preprint", say what you checked.
- changed: what differs from the hint values (title, authors, venue, url), or "none".
- confident: false if any field is a guess.

How to check acceptance (stop once confirmed):
1. The arXiv comment and journal_ref in the hints (e.g. "Accepted at ICLR 2026").
2. Semantic Scholar, one batch call for all your arXiv papers: curl -s -X POST 'https://api.semanticscholar.org/graph/v1/paper/batch?fields=title,venue,publicationVenue,journal,year,externalIds' -H 'Content-Type: application/json' -d '{"ids":["arXiv:2506.22777", ...]}'. Back off and retry on 429. Treat a generic venue (e.g. "arXiv.org") as no evidence.
3. OpenReview: search by title (e.g. https://api2.openreview.net/notes/search?term=<url-encoded title>&type=terms&limit=5). The note's venue / venueid shows acceptance ("ICLR 2026 Poster") vs. "Submitted to" or withdrawn.
4. ACL Anthology, PMLR (proceedings.mlr.press), NeurIPS proceedings, ICLR/ICML/COLM accepted-paper pages, DBLP (https://dblp.org/search?q=<title>).
5. Web search for the exact title plus "accepted" or a venue name; author or project pages.

Sleep about 2 seconds between requests to the same site. Do not edit any files. Return exactly one entry per key, for all ${batch.length} keys.`

const pilotPrompt = (key, coder) => `You are coder ${coder} in a two-coder pilot for a literature map on improving the faithfulness of LLM explanations and chains of thought. Work alone; another coder is tagging the same paper independently.

Paper key: \`${key}\`. Full text: \`${MAP}/cache/${key}.txt\` or \`${MAP}/cache/${key}.pdf\`. If neither exists, fetch the paper with curl from the url in \`${MAP}/papers/${key}.md\`. Read the paper itself: abstract, introduction, method, experiments, results, limitations. If the text file is long, read it in parts with offset/limit; read PDFs in chunks of at most 20 pages. Do not use any other summary of the paper: do not open seed.json, the faith-improvement*.md files, or anything under ${MAP}/pilot.

First read \`${MAP}/tags.yaml\` (the seed tag vocabulary) and the "Record" section of \`${MAP}/PLAN.md\` (summary and relation rules). The list of papers in the corpus is \`${MAP}/corpus.txt\` (key: title (year)).

Return:
1. tags: every \`namespace:value\` tag that applies. Go through each namespace in tags.yaml:
   - object, reveals, signal, contribution, motivation, domain, scale: all values that apply.
   - lever: what the paper changes; omit when it makes no intervention.
   - eval: only properties actually present in the evaluation.
   - model: the main models studied, lowercase-hyphenated (e.g. model:llama-3.1-8b, model:gpt-4o), at most 6.
   - metric: the primary faithfulness or monitorability metrics, kebab-case, at most 4.
   - Omit source: tags.
   If no seed value fits, coin a new \`namespace:value\` (a new namespace is fine) and define it in new_tags. Tag what the paper does, not what it merely mentions.
2. problem, method, findings, limits: the four summary lines. Telegraphic, about 60 words in total across the four; arrows and abbreviations are fine. Use numbers only if you read them in the paper. For measurement papers, "method" describes the setup.
3. relations: links to papers in corpus.txt only, using verbs builds-on, extends, contradicts or compares-to. Note: max 15 words; for contradicts, state the conflicting claim. Include only relations evident from the paper itself (citations it builds on, baselines it compares to, explicit disagreement) or clear from its results.
4. new_tags: definitions for any tag you coined (empty list if none).
5. uncertain: tags or claims you were unsure about, each with a few words on why (empty list if none).

Do not edit any files.`

const metaRun = parallel(batches.map((b, i) => () =>
  agent(metaPrompt(b), { label: `metadata ${i + 1}/${batches.length}`, phase: 'Metadata', schema: META_SCHEMA })))

const pilotRun = parallel(args.pilot.flatMap(key => ['A', 'B'].map(coder => () =>
  agent(pilotPrompt(key, coder), { label: `pilot ${coder}: ${key}`, phase: 'Pilot', schema: PILOT_SCHEMA })
    .then(r => r && { ...r, key, coder }))))

const [metaRes, pilotRes] = await Promise.all([metaRun, pilotRun])
const metaPapers = metaRes.filter(Boolean).flatMap(r => r.papers)
const missing = keys.filter(k => !metaPapers.some(p => p.key === k))
if (missing.length) log(`metadata missing for ${missing.length} keys: ${missing.join(', ')}`)
const pilot = pilotRes.filter(Boolean)
log(`metadata: ${metaPapers.length}/${keys.length} papers; pilot: ${pilot.length}/${args.pilot.length * 2} codings`)
return { meta: metaPapers, missing, pilot }
