export const meta = {
  name: 'lit-map-C1',
  description: 'Screen 124 candidate papers from the idea reports against the map scope and verify metadata of included ones',
  phases: [{ title: 'Screen', detail: 'scope decision + verified metadata, batches of ~12' }],
}

const ROOT = '/Users/davidebaldelli/Developer/faithfulness-review'
const n = args.n
const ids = Array.from({ length: n }, (_, i) => 'c' + String(i).padStart(3, '0'))
const batches = []
for (let i = 0; i < ids.length; i += 12) batches.push(ids.slice(i, i + 12))

const SCHEMA = {
  type: 'object',
  properties: {
    papers: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          cid: { type: 'string' },
          include: { type: 'boolean' },
          reason: { type: 'string' },
          duplicate_of: { type: 'string' },
          title: { type: 'string' },
          authors: { type: 'string' },
          year: { type: 'integer' },
          venue: { type: 'string' },
          url: { type: 'string' },
          list: { type: 'string' },
          key: { type: 'string' },
          evidence: { type: 'string' },
        },
        required: ['cid', 'include', 'reason', 'duplicate_of', 'title', 'authors', 'year', 'venue', 'url', 'list', 'key', 'evidence'],
      },
    },
  },
  required: ['papers'],
}

const prompt = batch => `You are screening candidate papers for a literature map on improving and measuring the faithfulness of LLM chains of thought and self-explanations. Today is ${args.today}.

Your candidates (cid): ${batch.join(', ')}. Read them from \`${ROOT}/runs/C_candidates.json\` (fields: cid, url, text = the line where an earlier report cited it, reports). Use python3 or jq to pull only your entries. For HTTP use curl; Python's urllib cannot verify SSL on this machine. Other agents run in parallel, so throttle (sleep about 2 s between requests to the same site).

## Scope (decide include true/false for each candidate)
Include a paper if it is one of:
- (a) **improvement:** it proposes or tests a method that improves, or attempts to improve, the faithfulness of CoTs, self-explanations or self-reports, CoT monitorability or legibility, or the verbalization of hidden influences. Negative results count.
- (b) **measurement:** it measures or diagnoses those properties. This covers faithfulness and monitorability evaluations, obfuscation and steganography of CoT, plan–action consistency of agents, and faithfulness of reasoning summaries.

Exclude:
- faithfulness to a source or retrieved context (summarization, RAG);
- feature-attribution faithfulness for classifiers;
- pure introspection or interpretability work not tied to explanations, CoT or self-reports (e.g. concept-injection detection, generic activation explainers, transcoder/circuit method papers that don't assess CoT faithfulness);
- general efficiency, capability or safety studies with no faithfulness, monitorability or self-report measure;
- surveys, unless they are central.

Blog and LessWrong posts: include only if they report original experiments that are in scope (venue "blog (LessWrong)" or "blog (<site>)").

Anonymous OpenReview submissions: include if in scope, with authors "Anonymous" and a venue like "ICLR 2027 submission (under review)". Get their title and abstract through the OpenReview API, e.g. \`curl -s "https://api2.openreview.net/notes?forum=<id>"\` (forum pages are behind a browser challenge).

## Duplicates
- Check \`${ROOT}/corpus.txt\` (the 130 papers already in the map, as key: title (year)). If a candidate is the same paper as a map entry (e.g. an arXiv version of an OpenReview paper, or a retitled version), set duplicate_of to that map key and include=false.
- If two of your candidates are the same paper, include only one and set duplicate_of on the other to its cid.

## Metadata for included papers (verify; do not guess)
- **title:** the latest version's title.
- **authors:** surnames in order. Up to four: "A, B, C & D". More than four: "A, B, C et al.". Anonymous submissions: "Anonymous".
- **year:** year of the first public version.
- **venue:** where it was accepted, formatted like "ICLR 2026", "NeurIPS 2025", "Findings of ACL 2025", "ICML 2026 workshop (NAME)", "COLM 2026". Otherwise "preprint", "ICLR 2027 submission (under review)", "withdrawn (VENUE submission)" or "blog (LessWrong)". Check:
  - arXiv comments and journal_ref (the arXiv API takes id_list for your whole batch at once);
  - Semantic Scholar (one batch POST to https://api.semanticscholar.org/graph/v1/paper/batch?fields=title,venue,publicationVenue,year,externalIds; back off on 429);
  - OpenReview venue fields, ACL Anthology, proceedings, DBLP, and web search.
- **url:** for arXiv, https://arxiv.org/abs/<id>v<N> with the latest version. Otherwise the stable page (OpenReview forum, ACL Anthology, blog post).
- **list:** "improvement" or "measurement", as defined in the scope above.
- **key:** firstauthorYYYYword, i.e. the first author's surname lowercased ASCII, the year, and the first significant word of the title (e.g. little2026length). For anonymous submissions use anonYYYYword. Make it unique.
- **evidence:** max 30 words on where you confirmed the venue (or what you checked for "preprint"), and for excluded papers what you read to decide.

For excluded or duplicate papers, still fill the fields with what you know (use "" or 0 where unknown) and give a one-sentence reason.

Do not edit any files. Return exactly one entry per cid, for all ${batch.length} candidates.`

const res = await parallel(batches.map((b, i) => () =>
  agent(prompt(b), { label: `screen ${i + 1}/${batches.length}`, phase: 'Screen', schema: SCHEMA })))
const papers = res.filter(Boolean).flatMap(r => r.papers)
const missing = ids.filter(c => !papers.some(p => p.cid === c))
log(`screened ${papers.length}/${n}; included ${papers.filter(p => p.include).length}; missing ${missing.length}`)
return { papers, missing }
