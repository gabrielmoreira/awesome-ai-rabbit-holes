import { describe, expect, it } from "vitest";
import { balancePiFreeCandidates, groupPiFreeFamilies, piFreeModelFamily } from "../scripts/pi/pool.js";

describe("pi-free model family normalization", () => {
  it("strips the :free suffix and lowercases openrouter ids", () => {
    expect(piFreeModelFamily("openrouter/google/gemma-4-26b-a4b-it:free")).toBe("google/gemma-4-26b-a4b-it");
  });

  it("maps cloudflare @cf replicas to the same family as their openrouter twin", () => {
    const fromOpenRouter = piFreeModelFamily("openrouter/google/gemma-4-26b-a4b-it:free");
    const fromCloudflare = piFreeModelFamily("cloudflare/@cf/google/gemma-4-26b-a4b-it");
    expect(fromCloudflare).toBe(fromOpenRouter);
  });

  it("keeps mistral ids as their own families", () => {
    expect(piFreeModelFamily("mistral/mistral-medium-2604")).toBe("mistral-medium-2604");
  });

  it("returns null for invalid specs", () => {
    expect(piFreeModelFamily("")).toBeNull();
    expect(piFreeModelFamily("no-slash")).toBeNull();
    expect(piFreeModelFamily("/leading-slash")).toBeNull();
  });
});

describe("pi-free family grouping", () => {
  it("groups replicas by family preserving first-seen order and dedupes identical specs", () => {
    const families = groupPiFreeFamilies([
      "openrouter/google/gemma-4-26b-a4b-it:free",
      "cloudflare/@cf/google/gemma-4-26b-a4b-it",
      "mistral/mistral-medium-2604",
      "openrouter/openai/gpt-oss-20b:free",
      "cloudflare/@cf/openai/gpt-oss-20b",
      "openrouter/google/gemma-4-26b-a4b-it:free",
    ]);

    expect(families.map((family) => family.family)).toEqual([
      "google/gemma-4-26b-a4b-it",
      "mistral-medium-2604",
      "openai/gpt-oss-20b",
    ]);
    expect(families[0].replicas.map((replica) => replica.spec)).toEqual([
      "openrouter/google/gemma-4-26b-a4b-it:free",
      "cloudflare/@cf/google/gemma-4-26b-a4b-it",
    ]);
    expect(families[1].replicas).toHaveLength(1);
  });
});

describe("pi-free candidate balancing", () => {
  const SPECS = [
    "openrouter/google/gemma-4-26b-a4b-it:free",
    "cloudflare/@cf/google/gemma-4-26b-a4b-it",
    "mistral/mistral-medium-2604",
    "openrouter/openai/gpt-oss-20b:free",
    "cloudflare/@cf/openai/gpt-oss-20b",
  ];

  it("keeps family order and is a no-op at seed zero for adjacent replicas", () => {
    expect(balancePiFreeCandidates(SPECS, 0)).toEqual([
      "openrouter/google/gemma-4-26b-a4b-it:free",
      "cloudflare/@cf/google/gemma-4-26b-a4b-it",
      "mistral/mistral-medium-2604",
      "openrouter/openai/gpt-oss-20b:free",
      "cloudflare/@cf/openai/gpt-oss-20b",
    ]);
  });

  it("rotates replica order within families as the seed changes, keeping the same set", () => {
    const atZero = balancePiFreeCandidates(SPECS, 0);
    const atOne = balancePiFreeCandidates(SPECS, 1);
    expect(atOne).not.toEqual(atZero);
    expect([...atOne].sort()).toEqual([...SPECS].sort());
    expect(atZero[0]).toBe("openrouter/google/gemma-4-26b-a4b-it:free");
    expect(atOne[0]).toBe("cloudflare/@cf/google/gemma-4-26b-a4b-it");
  });

  it("is deterministic for a given seed", () => {
    expect(balancePiFreeCandidates(SPECS, 7)).toEqual(balancePiFreeCandidates(SPECS, 7));
  });
});
