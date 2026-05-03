# TODO

## Catalog quality cleanup backlog

### P0 — Fix canonical links and bad catalog entries
- [x] Exclude obviously non-tool destinations from the rendered catalog when they are only forms, image assets, or other stray endpoints.

  - Examples observed by the user: Google Forms waitlists, camo/image URLs, and other links that are clearly not the actual product home or repo.
- [x] When a GitHub repository exists for an item, make the GitHub repo the canonical URL and the rendered link target during source-list intake.
- [x] Ensure rendered GitHub-backed items use a sensible product/repo title instead of junk labels like `intro`, `viewform`, raw asset hashes, or paper IDs.

- [ ] Audit the canonicalization pipeline so docs pages, deep docs routes, image mirrors, and similar secondary URLs do not win over the real GitHub repo.
- [ ] Decide whether papers such as arXiv entries belong in the catalog at all; if they do, they need an explicit treatment path instead of being rendered as if they were tools.

### P0 — Fix ordering and GitHub priority
- [x] Within each category, list GitHub-backed tools before website-only tools.
- [x] Preserve GitHub-first ordering because GitHub stars give at least one public relevance signal.
- [x] Keep website-only tools after GitHub-backed tools until another relevance signal exists.

- [ ] Later follow-up: evaluate whether Google Trends or another external signal is worth using for non-GitHub items.

### P0 — Define non-GitHub inclusion criteria before broad cleanup
- [x] Decide the first-pass acceptance criteria for website-only catalog entries before adding or pruning many of them.
- [x] Explicitly distinguish GitHub-backed entries from website-only entries:
  - GitHub-backed entries have a concrete public signal: repository metadata and the existing star threshold/promotion logic.
  - Website-only entries currently use an interim policy: explicit maintainer input or primary awesome-list item, not secondary links.
- [x] Apply first-pass website-only inclusion criteria:
  - manually provided as an explicit input/source by the maintainer;
  - clearly documented as a primary item in a relevant awesome-list category, not merely a secondary link such as docs, waitlists, images, papers, Discord invites, or badges.
- [ ] Evaluate additional website-only relevance criteria:
  - known/relevant in programming or AI tooling according to an LLM relevance check with high confidence;
  - supported by an external trend/popularity signal such as Google Trends or another discoverable metric.

- [ ] Design an LLM relevance gate for website-only entries:
  - ask whether the link/product is known and relevant in programming/AI tooling;
  - require high confidence to auto-include;
  - route unknown or low-confidence links to `needs_review` or exclusion instead of rendering them as tools.
- [x] Until the LLM/trend policy exists, avoid treating every URL extracted from an awesome list as a catalog item.



### P0 — Fix star display rules
- [x] Stop rendering `⭐ ?` for items without a trustworthy GitHub star count.
- [x] Omit the star badge entirely when the value cannot be supported.
- [x] Keep star display only for items whose canonical source is a GitHub repository.


### P1 — Improve copy quality and voice
- [ ] Rewrite dry or joyless summaries/descriptions so they fit the project voice better.
- [ ] The tone should stay intelligent, playful, slightly acidic, and grounded in the real rabbit-hole problem space.
- [ ] Whenever it fits, bring back the humor around endless tool-chasing, anxiety, false hope, and the "this rabbit hole never ends" framing.
- [ ] Do not make the copy random or generic; jokes should come from the actual product context.

### P1 — Improve naming quality
- [x] Fix bad rendered display names caused by weak title extraction.
- [x] If the renderer cannot derive a trustworthy product name, fail into a better source-list heuristic instead of shipping labels like `intro`.
- [x] Prefer a real repo/product/org-derived name over a page slug in rendered output.


### P1 — Revisit item storage layout
- [ ] Consider splitting `catalog/items/` into two subfolders:
  - `catalog/items/github/`
  - `catalog/items/web/`
- [ ] Only do this if the implementation stays simple and does not add churn everywhere else.
- [ ] If adopted, keep loading/rendering behavior uniform so storage layout does not leak into the user-facing catalog.

### P1 — Verify model probe provider coverage
- [x] Audit why providers expected from locally supplied credentials are not showing up in the model probe output.
- [x] Specifically verify the probe path for providers already configured locally, including Cloudflare, NVIDIA, Ollama, and Mistral.
- [x] Confirm whether the current pipeline is effectively falling back to OpenRouter-only coverage.
- [x] Do not store raw secret values in the repo or generated artifacts.


### P2 — General cleanup pass
- [x] Run a broad QA pass over rendered items and remove more weird canonical URLs, broken titles, and low-signal entries.
- [x] Add targeted regression tests for the worst failures above so they do not regress after the cleanup.

