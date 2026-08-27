import { describe, expect, it } from "vitest";
import { parseRankArgs, runPiFreeRank } from "../scripts/pi/rank.js";

describe("parseRankArgs", () => {
  it("parses all flags", () => {
    const args = parseRankArgs(["--family", "a/b:free", "--limit-cases", "5", "--timeout-ms", "1200", "--scores-path", "/tmp/scores.json"]);
    expect(args).toEqual({ families: ["a/b:free"], limitCases: 5, timeoutMs: 1200, scoresPath: "/tmp/scores.json" });
  });

  it("collects repeated --family flags in order", () => {
    const args = parseRankArgs(["--family", "one", "--family", "two"]);
    expect(args.families).toEqual(["one", "two"]);
  });

  it("returns empty object for no input", () => {
    expect(parseRankArgs([])).toEqual({});
  });

  it("throws on missing flag values", () => {
    expect(() => parseRankArgs(["--family"])).toThrowError(/Missing value for --family/);
    expect(() => parseRankArgs(["--limit-cases"])).toThrowError(/Missing value for --limit-cases/);
    expect(() => parseRankArgs(["--timeout-ms"])).toThrowError(/Missing value for --timeout-ms/);
    expect(() => parseRankArgs(["--scores-path"])).toThrowError(/Missing value for --scores-path/);
  });

  it("throws on unknown flags", () => {
    expect(() => parseRankArgs(["--nope"])).toThrowError(/Unknown rank argument: --nope/);
  });
});

describe("runPiFreeRank family resolution", () => {
  const NO_AUTH = {};
  const AUTHED = { OPENROUTER_API_KEY: "or-key" };

  it("fails fast when no provider auth is configured, before touching catalog files", async () => {
    await expect(runPiFreeRank({}, NO_AUTH)).rejects.toThrowError(/No pi-free models in the resolved pool/);
  });

  it("reports unmatched family filters without loading eval cases", async () => {
    await expect(
      runPiFreeRank({ families: ["definitely-not-a-real-family"] }, AUTHED),
    ).rejects.toThrowError(/No pi-free families matched: definitely-not-a-real-family/);
  });
});
