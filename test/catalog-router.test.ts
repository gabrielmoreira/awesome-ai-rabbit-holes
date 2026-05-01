import { describe, expect, it } from "vitest";
import { createCatalogCommandMap, hasCatalogCommand } from "../scripts/catalog.js";

describe("catalog router command surface", () => {
  it("exposes the full simplified command surface", () => {
    const commands = createCatalogCommandMap();
    expect(Object.keys(commands).sort()).toEqual([
      "categorize",
      "discover",
      "render",
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
});
