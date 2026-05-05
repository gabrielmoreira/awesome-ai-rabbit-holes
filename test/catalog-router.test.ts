import { describe, expect, it } from "vitest";
import * as catalog from "../scripts/catalog.js";
const { createCatalogCommandMap, hasCatalogCommand } = catalog;

describe("catalog router command surface", () => {
  it("exposes the full simplified command surface", () => {
    const commands = createCatalogCommandMap();
    expect(Object.keys(commands).sort()).toEqual([
      "categorize",
      "clean",
      "discover",
      "evals",
      "gaps",
      "render",
      "repair",
      "resync",
      "stars",
      "sync",
      "validate",
    ]);
  });

  it("rejects inherited prototype property names as commands", () => {
    const commands = createCatalogCommandMap();

    expect(hasCatalogCommand(commands, "discover")).toBe(true);
    expect(hasCatalogCommand(commands, "toString")).toBe(false);
    expect(hasCatalogCommand(commands, "constructor")).toBe(false);
    expect(hasCatalogCommand(commands, "__proto__")).toBe(false);
  });

  it("dispatches gaps, repair, and resync to their intended handlers", async () => {
    const calls: string[] = [];
    const commands = createCatalogCommandMap("token-123", ["--match", "skill"], {
      gaps: (argv) => {
        calls.push(`gaps:${argv.join(" ")}`);
      },
      repair: (token) => {
        calls.push(`repair:${token}`);
      },
      resync: (argv, token) => {
        calls.push(`resync:${argv.join(" ")}:${token}`);
      },
    });

    await commands.gaps();
    await commands.repair();
    await commands.resync();

    expect(calls).toEqual([
      "gaps:--match skill",
      "repair:token-123",
      "resync:--match skill:token-123",
    ]);
  });

  it("wraps synchronous command errors in a rejected promise", async () => {
    const commands = createCatalogCommandMap(undefined, ["--bad"], {
      gaps: () => {
        throw new Error("bad gaps args");
      },
    });

    await expect(commands.gaps()).rejects.toThrow("bad gaps args");
  });

  it("does not expose the redundant loadConfig projection", () => {
    expect("loadConfig" in catalog).toBe(false);
  });

  it("does not expose the unused override surface", () => {
    expect("loadOverrides" in catalog).toBe(false);
    expect("applyOverride" in catalog).toBe(false);
    expect("applyOverrides" in catalog).toBe(false);
    expect("validateOverride" in catalog).toBe(false);
    expect("validateOverridesUniqueness" in catalog).toBe(false);
  });
});
