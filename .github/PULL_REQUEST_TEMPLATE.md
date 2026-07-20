## Summary

<!-- What changed, and why? -->

## Catalog contribution contract

For a tool submission, change only `config/sources.yml`. The scheduled automation processes that queue with the full catalog sync and owns the generated output.

- [ ] I added tool submissions to `config/sources.yml`, not `sources/inbox.yml`.
- [ ] I did not hand-edit `README.md`.
- [ ] I did not hand-edit `docs/rabbit-holes/*.md`.
- [ ] I did not hand-edit `catalog/catalog.json` or `catalog/items/**/*.yml`.
- [ ] If I changed the rendering pipeline or templates, I ran `mise run catalog:render` and committed its generated output.

## Verification

<!-- List the focused commands or checks you ran. -->
