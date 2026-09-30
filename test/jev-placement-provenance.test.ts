import { describe, expect, it } from "vitest";
import type { CatalogItem } from "../scripts/catalog/types.js";
import { recordBelowGateVerdict, type BelowGateVerdict } from "../scripts/jev/placement-provenance.js";

const GATE = 0.5;

function item(over: Record<string, unknown> = {}): CatalogItem {
  return {
    id: "example__com",
    kind: "website",
    name: "Example",
    canonical_url: "https://example.com",
    identity: {},
    provenance: { discoveries: [] },
    metadata: {},
    insights: { summary: "A tool.", why_it_matters: null, mental_damage: null, tags: [], confidence: null },
    curation: { status: "included", reason: "Placed earlier.", evidence: [] },
    placement: { primary_category: "mcp", secondary_categories: [], section: "Servers & Infrastructure" },
    lifecycle: { status: "curated", reason: null },
    ...over,
  } as unknown as CatalogItem;
}

function verdict(over: Partial<BelowGateVerdict> = {}): BelowGateVerdict {
  return {
    proposedCategory: "coding-agents",
    proposedSection: "Agent Runtimes & Harnesses",
    runnerUp: "agent-orchestration",
    shouldInclude: true,
    confidence: 0.43,
    model: "winnow:e4b",
    ...over,
  };
}

const notes = (subject: CatalogItem) => subject.curation.evidence.filter((line) => line.startsWith("jev "));

describe("recording a verdict the gate refused", () => {
  it("keeps the placement and writes down what the model proposed instead", () => {
    const before = item();
    const after = recordBelowGateVerdict(before, verdict(), GATE);

    expect(after.placement.primary_category).toBe("mcp");
    expect(after.placement.section).toBe("Servers & Infrastructure");
    expect(after.placement.secondary_categories).toEqual(["coding-agents"]);

    expect(notes(after)).toHaveLength(1);
    expect(notes(after)[0]).toContain("winnow:e4b");
    expect(notes(after)[0]).toContain("0.43");
    expect(notes(after)[0]).toContain("coding-agents");
    expect(notes(after)[0]).toContain("0.5");
  });

  it("offers the runner-up as the alternative when the model agreed with the placement", () => {
    const after = recordBelowGateVerdict(item(), verdict({ proposedCategory: "mcp" }), GATE);

    expect(after.placement.primary_category).toBe("mcp");
    expect(after.placement.secondary_categories).toEqual(["agent-orchestration"]);
  });

  it("does not offer a category as alternative when the model wanted the item out", () => {
    const before = item();
    const after = recordBelowGateVerdict(before, verdict({ shouldInclude: false, proposedCategory: null }), GATE);

    expect(after.placement).toEqual(before.placement);
    expect(notes(after)[0]).toContain("out of scope");
  });

  it("replaces its own earlier note instead of stacking one per run", () => {
    const once = recordBelowGateVerdict(item(), verdict(), GATE);
    const twice = recordBelowGateVerdict(once, verdict({ confidence: 0.21 }), GATE);

    expect(notes(twice)).toHaveLength(1);
    expect(notes(twice)[0]).toContain("0.21");
  });

  it("leaves evidence written by someone else alone", () => {
    const before = item({ curation: { status: "included", reason: "Placed earlier.", evidence: ["reviewed by a human on 2026-09-01"] } });
    const after = recordBelowGateVerdict(before, verdict(), GATE);

    expect(after.curation.evidence).toContain("reviewed by a human on 2026-09-01");
    expect(notes(after)).toHaveLength(1);
  });
});
