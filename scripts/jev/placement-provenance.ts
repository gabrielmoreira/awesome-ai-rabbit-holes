/**
 * A verdict the confidence gate refused used to be discarded outright: the item
 * kept its placement and nothing said the model had considered a different one.
 * The residue then had to be rediscovered by re-reading a report in `.local/`,
 * and a reader of the catalog could not tell a verified placement from a guess.
 *
 * This writes the verdict into the item without acting on it. It is the same
 * record the confident path leaves, so one grep answers "what does the
 * reclassifier think about this item" whether or not the answer was applied.
 */
export type BelowGateVerdict = {
  /** What the model would have placed, null when it wanted the item out. */
  proposedCategory: string | null;
  proposedSection: string | null;
  /** The option right behind the winner, the honest second answer. */
  runnerUp: string | null;
  shouldInclude: boolean;
  confidence: number;
  model: string;
};

/**
 * Only the two blocks this writes are named here. The reclassifier parses items
 * with its own loose shape and the catalog has a stricter one; both satisfy this,
 * and a structural parameter keeps the two from having to agree on everything.
 */
export type ItemWithPlacement = {
  curation?: { status?: string; reason?: string | null; evidence?: string[] };
  placement?: { primary_category?: string | null; secondary_categories?: string[]; section?: string | null };
};

/**
 * Notes written by this module carry this prefix so a later run replaces its own
 * line instead of stacking one per run. Evidence written by anything else — a
 * human review, an override — is left where it is.
 */
const NOTE_PREFIX = "jev ";

export function recordBelowGateVerdict<T extends ItemWithPlacement>(
  item: T,
  verdict: BelowGateVerdict,
  gate: number,
): T {
  const current = item.placement?.primary_category ?? null;
  const evidence = [
    ...(item.curation?.evidence ?? []).filter((line) => !line.startsWith(NOTE_PREFIX)),
    buildNote(verdict, gate, current),
  ];

  // Only a kept placement can carry an alternative: an item the model wanted out
  // of the catalog has no category for a second one to sit beside, and an item
  // whose model answer matches where it already sits offers the runner-up, which
  // is the option the model weighed against the placement that survives.
  const alternative = !verdict.shouldInclude
    ? null
    : verdict.proposedCategory && verdict.proposedCategory !== current
      ? verdict.proposedCategory
      : verdict.runnerUp && verdict.runnerUp !== current
        ? verdict.runnerUp
        : null;

  return {
    ...structuredClone(item),
    curation: { ...item.curation, evidence },
    ...(alternative && item.placement
      ? { placement: { ...item.placement, secondary_categories: [alternative] } }
      : {}),
  } as T;
}

function buildNote(verdict: BelowGateVerdict, gate: number, current: string | null): string {
  const proposal =
    verdict.shouldInclude && verdict.proposedCategory
      ? `proposed ${verdict.proposedCategory}${verdict.proposedSection ? ` / ${verdict.proposedSection}` : ""}`
      : "proposed out of scope";
  const kept = current ? `placement kept at ${current}` : "no placement kept";
  return `${NOTE_PREFIX}${verdict.model} ${verdict.confidence.toFixed(2)} below gate ${gate.toFixed(2)}; ${proposal}; ${kept} (unverified)`;
}
