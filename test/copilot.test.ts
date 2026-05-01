import { describe, expect, it } from "vitest";
import { buildCopilotArgs, resolveCopilotModel } from "../scripts/copilot.js";

describe("buildCopilotArgs", () => {
  it("uses the locked tool policy expected in CI", () => {
    expect(buildCopilotArgs("Reply with OK.")).toEqual([
      "-p",
      "Reply with OK.",
      "-s",
      "--no-ask-user",
      "--no-custom-instructions",
      "--no-auto-update",
      "--disallow-temp-dir",
      "--disable-builtin-mcps",
      "--excluded-tools=*",
    ]);
  });

  it("appends the configured model", () => {
    expect(buildCopilotArgs("Reply with OK.", "gpt-5.2")).toEqual([
      "-p",
      "Reply with OK.",
      "-s",
      "--no-ask-user",
      "--no-custom-instructions",
      "--no-auto-update",
      "--disallow-temp-dir",
      "--disable-builtin-mcps",
      "--excluded-tools=*",
      "--model",
      "gpt-5.2",
    ]);
  });
});

describe("resolveCopilotModel", () => {
  it("prefers an explicit model and otherwise falls back to COPILOT_MODEL", () => {
    expect(resolveCopilotModel("gpt-5", "gpt-5.2")).toBe("gpt-5");
    expect(resolveCopilotModel(null, "gpt-5.2")).toBe("gpt-5.2");
    expect(resolveCopilotModel("   ", "gpt-5.2")).toBe("gpt-5.2");
    expect(resolveCopilotModel(null, "   ")).toBeNull();
  });
});
