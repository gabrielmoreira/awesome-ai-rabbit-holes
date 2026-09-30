import { describe, expect, it } from "vitest";
import { deriveSeedSummary, type PageLookup } from "../scripts/jev/seed-summary.js";

const noPage: PageLookup = () => null;
const page = (over: Record<string, string | null> = {}): PageLookup => () => ({
  title: "Cal.ai | Cal.com",
  description: "Cal.ai is your AI scheduling assistant.",
  excerpt: null,
  ...over,
});

const item = (over: Record<string, unknown> = {}) =>
  ({
    id: "example__com",
    canonical_url: "https://example.com",
    metadata: {},
    provenance: { discoveries: [] },
    ...over,
  }) as never;

describe("the provisional summary an item can produce on its own", () => {
  it("prefers the repository description", () => {
    const subject = item({ metadata: { github: { description: "A fairness library for LLM evaluations." } } });
    expect(deriveSeedSummary(subject, page())).toBe("A fairness library for LLM evaluations.");
  });

  it("falls back to the line the source list wrapped around the link", () => {
    const subject = item({
      provenance: { discoveries: [{ extraction: { surrounding_text: "Cal.ai schedules your meetings by email." } }] },
    });
    expect(deriveSeedSummary(subject, page())).toBe("Cal.ai schedules your meetings by email.");
  });

  it("falls back to the page we already fetched when the item itself says nothing", () => {
    expect(deriveSeedSummary(item(), page())).toBe("Cal.ai is your AI scheduling assistant.");
  });

  it("uses the page excerpt when its description is too short to be a summary", () => {
    const lookup = page({ description: "Book meetings.", excerpt: "x".repeat(400) });
    expect(deriveSeedSummary(item(), lookup)).toHaveLength(300);
  });

  it("says nothing rather than something when nothing carries text", () => {
    expect(deriveSeedSummary(item(), noPage)).toBe("");
    expect(deriveSeedSummary(item(), page({ description: null, excerpt: null }))).toBe("");
  });

  it("does not read the page cache when the item already carries text", () => {
    let asked = 0;
    const counting: PageLookup = () => {
      asked += 1;
      return null;
    };
    deriveSeedSummary(item({ metadata: { github: { description: "A fairness library for LLM evaluations." } } }), counting);
    expect(asked).toBe(0);
  });
});
