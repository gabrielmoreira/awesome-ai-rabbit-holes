import { describe, expect, it } from "vitest";
import {
  buildPiFreeDoctorReport,
  classifyPiFreeProbeError,
  selectPiFreeDoctorTargets,
  type PiFreeProbeResult,
} from "../scripts/pi/doctor.js";

describe("pi-free doctor", () => {
  it("selects the requested number of targets from the ordered fallback list", () => {
    expect(selectPiFreeDoctorTargets(["a", "b", "c"], 2)).toEqual(["a", "b"]);
    expect(selectPiFreeDoctorTargets(["a", "b", "c"], Number.POSITIVE_INFINITY)).toEqual(["a", "b", "c"]);
  });

  it("summarizes the first working model and success counts", () => {
    const report = buildPiFreeDoctorReport([
      {
        spec: "cloudflare/@cf/moonshotai/kimi-k2.6",
        provider: "cloudflare",
        ok: false,
        elapsed_ms: 1000,
        error_type: "quota",
        error_message: "429 rate limit",
        output_excerpt: null,
      },
      {
        spec: "nvidia/moonshotai/kimi-k2.6",
        provider: "nvidia",
        ok: true,
        elapsed_ms: 900,
        error_type: null,
        error_message: null,
        output_excerpt: "HI",
      },
    ] satisfies PiFreeProbeResult[]);

    expect(report.attempted).toBe(2);
    expect(report.succeeded).toBe(1);
    expect(report.failed).toBe(1);
    expect(report.first_working_model).toBe("nvidia/moonshotai/kimi-k2.6");
  });

  it("classifies common probe failures", () => {
    expect(classifyPiFreeProbeError("timed out after 60000ms")).toBe("timeout");
    expect(classifyPiFreeProbeError("429 rate limit")).toBe("quota");
    expect(classifyPiFreeProbeError("requires a subscription")).toBe("subscription");
    expect(classifyPiFreeProbeError('Mistral API error (404): {"message":"no Route matched with those values"}')).toBe("not_found");
    expect(classifyPiFreeProbeError("401 unauthorized")).toBe("auth");
  });
});
