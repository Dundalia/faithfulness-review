export const meta = {
  name: 'lit-map-C1b',
  description: 'Screen 26 more candidate papers (from the listener-agreement report) against the map scope and verify metadata',
  phases: [{ title: 'Screen', detail: 'scope decision + verified metadata' }],
}

const ROOT = '/Users/davidebaldelli/Developer/faithfulness-review'
const ids = Array.from({ length: args.n }, (_, i) => 'c' + String(args.start + i).padStart(3, '0'))
const batches = []
for (let i = 0; i < ids.length; i += 9) batches.push(ids.slice(i, i + 9))

const SCHEMA = {
  type: 'object',
  properties: {
    papers: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          cid: { type: 'string' }, include: { type: 'boolean' }, reason: { type: 'string' }, duplicate_of: { type: 'string' },
          title: { type: 'string' }, authors: { type: 'string' }, year: { type: 'integer' }, venue: { type: 'string' },
          url: { type: 'string' }, list: { type: 'string' }, key: { type: 'string' }, evidence: { type: 'string' },
        },
        required: ['cid', 'include', 'reason', 'duplicate_of', 'title', 'authors', 'year', 'venue', 'url', 'list', 'key', 'evidence'],
      },
    },
  },
  required: ['papers'],
}

const prompt = batch => `You are screening candidate papers for a literature map on improving and measuring the faithfulness of LLM chains of thought and self-explanations. Today is ${args.today}.

Your candidates (cid): ${batch.join(', ')}. Read them from \`${ROOT}/runs/C_candidates.json\` (fields: cid, url, text = the line where a report cited it). Use python3 or jq to pull only your entries. For HTTP use curl; Python's urllib cannot verify SSL on this machine. Throttle: sleep about 2 s between requests to the same site.

## Scope (decide include true/false for each candidate)
Include a paper if it is one of:
- (a) **improvement:** it proposes or tests a method that improves, or attempts to improve, the faithfulness of CoTs, self-explanations or self-reports, CoT monitorability, legibility or verifiability of reasoning, or the verbalization of hidden influences. Negative results count. Training rewards for rationale informativeness, sufficiency or legibility count.
- (b) **measurement:** it measures or diagnoses those properties. This covers faithfulness and monitorability evaluations, obfuscation and steganography of CoT, rationale simulatability metrics, and agent plan–action consistency.

Exclude:
- faithfulness to a source or retrieved context (summarization, RAG);
- feature-attribution faithfulness for classifiers;
- pure introspection or interpretability work not tied to explanations, CoT or self-reports;
- general RL, capability or safety work with no faithfulness, monitorability or explanation measure;
- surveys, unless they are central.

Blog and LessWrong posts: include only if they report original experiments that are in scope.

Anonymous OpenReview submissions: include if in scope, with authors "Anonymous" and venue "ICLR 2027 submission (under review)". Get the title and abstract via \`curl -s "https://api2.openreview.net/notes?forum=<id>"\`.

## Duplicates
- Check \`${ROOT}/corpus.txt\` (papers already in the map) and \`${ROOT}/runs/C1_screen.json\` (papers screened earlier: entries with include=true are being added, so match on title).
- If a candidate is the same paper as either, set duplicate_of to that key and include=false.

## Metadata for included papers (verify; do not guess)
- **title:** the latest version's title.
- **authors:** surnames. Up to four: "A, B, C & D". More than four: "A, B, C et al.". Anonymous submissions: "Anonymous".
- **year:** year of the first public version.
- **venue:** where it was accepted ("ICLR 2026", "Findings of ACL 2025", "ICML 2026 workshop (NAME)", ...), or "preprint", "ICLR 2027 submission (under review)", "blog (LessWrong)". Check:
  - arXiv comments and journal_ref (one id_list call for your whole batch);
  - Semantic Scholar (a batch POST; back off on 429);
  - OpenReview, ACL Anthology, proceedings and web search.
- **url:** for arXiv, https://arxiv.org/abs/<id>v<N> with the latest version. Otherwise the stable page.
- **list:** "improvement" or "measurement".
- **key:** firstauthorYYYYword (surname lowercased ASCII + year + first significant title word); for anonymous submissions use anonYYYYword. It must not clash with the keys in corpus.txt or runs/C1_screen.json.
- **evidence:** max 30 words on how you confirmed the venue, or what you read to decide.

For excluded or duplicate papers, fill the fields with what you know ("" or 0 where unknown) and give a one-sentence reason.

Do not edit any files. Return exactly one entry per cid.`

const res = await parallel(batches.map((b, i) => () =>
  agent(prompt(b), { label: `screen ${i + 1}/${batches.length}`, phase: 'Screen', schema: SCHEMA })))
const papers = res.filter(Boolean).flatMap(r => r.papers)
const missing = ids.filter(c => !papers.some(p => p.cid === c))
log(`screened ${papers.length}/${ids.length}; included ${papers.filter(p => p.include).length}; missing ${missing.length}`)
return { papers, missing }
