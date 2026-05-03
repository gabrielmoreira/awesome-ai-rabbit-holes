import { describe, expect, it, vi } from "vitest";
import { createPiCommandMap, hasPiCommand } from "../scripts/pi-cli.js";

describe("pi cli command surface", () => {
  it("exposes the supported pi maintenance commands", () => {
    const commands = createPiCommandMap();

    expect(Object.keys(commands).sort()).toEqual([
      "all-models",
      "doctor",
      "intelligence",
      "rank-models",
    ]);
  });

  it("forwards argv to the routed subcommands", async () => {
    const allModels = vi.fn(async (_argv: string[]) => {});
    const doctor = vi.fn(async () => {});
    const intelligence = vi.fn(async (_argv: string[]) => {});
    const rankModels = vi.fn(async (_argv: string[]) => {});
    const argv = ["--timeout-ms", "123", "--limit", "1"];
    const commands = createPiCommandMap(argv, { allModels, doctor, intelligence, rankModels });

    await commands["all-models"]();
    await commands.doctor();
    await commands.intelligence();
    await commands["rank-models"]();

    expect(allModels).toHaveBeenCalledWith(argv);
    expect(doctor).toHaveBeenCalledWith();
    expect(intelligence).toHaveBeenCalledWith(argv);
    expect(rankModels).toHaveBeenCalledWith(argv);
  });

  it("rejects inherited prototype property names as commands", () => {
    const commands = createPiCommandMap();

    expect(hasPiCommand(commands, "doctor")).toBe(true);
    expect(hasPiCommand(commands, "toString")).toBe(false);
    expect(hasPiCommand(commands, "constructor")).toBe(false);
    expect(hasPiCommand(commands, "__proto__")).toBe(false);
  });
});
