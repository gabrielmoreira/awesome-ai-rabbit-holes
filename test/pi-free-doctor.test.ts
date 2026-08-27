import { describe, expect, it } from "vitest";
import {
  buildSkippedResult,
  buildPiFreeDoctorReport,
  classifyPiFreeProbeError,
  getPiFreeDoctorFailure,
  getProbeSkipResult,
  normalizeDoctorLimit,
  parsePiFreeDoctorArgs,
  selectPiFreeDoctorTargets,
  summarizePiFreeFamilyStatuses,
  type PiFreeProbeResult,
} from "../scripts/pi/doctor.js";

describe("pi-free doctor", () => {
  it("parses strict doctor flags", () => {
    expect(parsePiFreeDoctorArgs(["--prompt", "Reply with exactly HI.", "--timeout-ms", "15000", "--limit", "3"])).toEqual({
      prompt: "Reply with exactly HI.",
      timeoutMs: 15_000,
      limit: 3,
    });
  });

  it("rejects unknown doctor args and missing values", () => {
    expect(() => parsePiFreeDoctorArgs(["--bogus"])).toThrow("Unknown llm:doctor argument: --bogus");
    expect(() => parsePiFreeDoctorArgs(["--limit"])).toThrow("Missing value for --limit");
  });

  it("normalizes doctor limits for invalid and non-integer values", () => {
    expect(normalizeDoctorLimit(Number.POSITIVE_INFINITY, 10)).toBe(10);
    expect(normalizeDoctorLimit(0, 10)).toBe(10);
    expect(normalizeDoctorLimit(-2, 10)).toBe(10);
    expect(normalizeDoctorLimit(3.9, 10)).toBe(3);
  });

  it("selects the requested number of targets from the ordered fallback list", () => {
    expect(selectPiFreeDoctorTargets(["a", "b", "c"], 2)).toEqual(["a", "b"]);
    expect(selectPiFreeDoctorTargets(["a", "b", "c"], Number.POSITIVE_INFINITY)).toEqual(["a", "b", "c"]);
  });

  it("skips unrunnable fallback specs before applying the limit", () => {
    expect(selectPiFreeDoctorTargets(["a", "b", "c", "d"], 2, (spec) => spec !== "a" && spec !== "c")).toEqual(["b", "d"]);
  });

  it("summarizes the first working model and success counts", () => {
    const report = buildPiFreeDoctorReport([
      {
        spec: "cloudflare/@cf/moonshotai/kimi-k2.6",
        provider: "cloudflare",
        status: "failed",
        ok: false,
        elapsed_ms: 1000,
        error_type: "quota",
        error_message: "429 rate limit",
        output_excerpt: null,
      },
      {
        spec: "nvidia/moonshotai/kimi-k2.6",
        provider: "nvidia",
        status: "ok",
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
    expect(report.skipped).toBe(0);
    expect(report.first_working_model).toBe("nvidia/moonshotai/kimi-k2.6");
  });

  it("builds skipped probe results with provider metadata", () => {
    expect(buildSkippedResult("cloudflare/@cf/moonshotai/kimi-k2.6", "unavailable_env", "missing credentials")).toEqual({
      spec: "cloudflare/@cf/moonshotai/kimi-k2.6",
      provider: "cloudflare",
      status: "skipped",
      ok: false,
      elapsed_ms: 0,
      error_type: "unavailable_env",
      error_message: "missing credentials",
      output_excerpt: null,
    });
  });

  it("classifies doctor skip reasons before probing", () => {
    expect(getProbeSkipResult("invalid", { hasProviderAuth: () => true, resolveModel: (() => ({})) as any })?.error_type).toBe("invalid_spec");
    expect(getProbeSkipResult("openrouter/google/gemma-4-31b-it:free", { hasProviderAuth: () => false, resolveModel: (() => ({})) as any })?.error_type).toBe("unavailable_env");
    expect(getProbeSkipResult("openrouter/google/gemma-4-31b-it:free", { hasProviderAuth: () => true, resolveModel: (() => null) as any })?.error_type).toBe("unavailable_runtime");
    expect(getProbeSkipResult("openrouter/google/gemma-4-31b-it:free", { hasProviderAuth: () => true, resolveModel: (() => ({})) as any })).toBeNull();
  });

  it("fails the doctor only when no working probed model is found", () => {
    const noSuccess = buildPiFreeDoctorReport([
      {
        spec: "cloudflare/@cf/moonshotai/kimi-k2.6",
        provider: "cloudflare",
        status: "skipped",
        ok: false,
        elapsed_ms: 0,
        error_type: "unavailable_env",
        error_message: "Provider cloudflare-workers-ai is unavailable in the current environment (missing credentials).",
        output_excerpt: null,
      },
      {
        spec: "nvidia/moonshotai/kimi-k2.6",
        provider: "nvidia",
        status: "failed",
        ok: false,
        elapsed_ms: 900,
        error_type: "quota",
        error_message: "429 rate limit",
        output_excerpt: null,
      },
    ] satisfies PiFreeProbeResult[]);
    const withSuccess = buildPiFreeDoctorReport([
      {
        spec: "cloudflare/@cf/moonshotai/kimi-k2.6",
        provider: "cloudflare",
        status: "skipped",
        ok: false,
        elapsed_ms: 0,
        error_type: "unavailable_env",
        error_message: "Provider cloudflare-workers-ai is unavailable in the current environment (missing credentials).",
        output_excerpt: null,
      },
      {
        spec: "nvidia/moonshotai/kimi-k2.6",
        provider: "nvidia",
        status: "ok",
        ok: true,
        elapsed_ms: 900,
        error_type: null,
        error_message: null,
        output_excerpt: "HI",
      },
    ] satisfies PiFreeProbeResult[]);

    expect(getPiFreeDoctorFailure(noSuccess)).toContain("No working pi-free model");
    expect(getPiFreeDoctorFailure(withSuccess)).toBeNull();
  });

  it("classifies common probe failures", () => {
    expect(classifyPiFreeProbeError("timed out after 60000ms")).toBe("timeout");
    expect(classifyPiFreeProbeError("Connection error.")).toBe("network");
    expect(classifyPiFreeProbeError("404 Hy3 preview is no longer available as a free model. It has transitioned to a paid model.")).toBe("not_free");
    expect(classifyPiFreeProbeError("429 rate limit")).toBe("quota");
    expect(classifyPiFreeProbeError("requires a subscription")).toBe("subscription");
    expect(classifyPiFreeProbeError("400 Reasoning is mandatory for this endpoint and cannot be disabled.")).toBe("unsupported_request");
    expect(classifyPiFreeProbeError('Mistral API error (404): {"message":"no Route matched with those values"}')).toBe("not_found");
    expect(classifyPiFreeProbeError("401 unauthorized")).toBe("auth");
  });
});

describe("pi-free doctor family status", () => {
  const pool = [
    "openrouter/moonshotai/kimi-k2.6:free",
    "nvidia/moonshotai/kimi-k2.6",
    "cloudflare/@cf/google/gemma-4-31b-it",
  ];

  function result(spec: string, status: "ok" | "failed" | "skipped"): PiFreeProbeResult {
    return {
      spec,
      provider: spec.split("/")[0],
      status,
      ok: status === "ok",
      elapsed_ms: status === "skipped" ? 0 : 100,
      error_type: status === "failed" ? "quota" : null,
      error_message: status === "failed" ? "429 rate limit" : null,
      output_excerpt: status === "ok" ? "HI" : null,
    };
  }

  it("groups replica results by family with per-status counts", () => {
    const statuses = summarizePiFreeFamilyStatuses(pool, [
      result("openrouter/moonshotai/kimi-k2.6:free", "failed"),
      result("nvidia/moonshotai/kimi-k2.6", "ok"),
      result("cloudflare/@cf/google/gemma-4-31b-it", "skipped"),
    ]);
    expect(statuses).toEqual([
      { family: "moonshotai/kimi-k2.6", replicas: 2, ok: 1, failed: 1, skipped: 0, first_working_replica: "nvidia/moonshotai/kimi-k2.6" },
      { family: "google/gemma-4-31b-it", replicas: 1, ok: 0, failed: 0, skipped: 1, first_working_replica: null },
    ]);
  });

  it("reports families without probe results as fully unprobed", () => {
    const statuses = summarizePiFreeFamilyStatuses(pool, []);
    expect(statuses[0]).toEqual({ family: "moonshotai/kimi-k2.6", replicas: 2, ok: 0, failed: 0, skipped: 0, first_working_replica: null });
  });

  it("ignores results for specs outside the pool", () => {
    const statuses = summarizePiFreeFamilyStatuses(pool, [result("openrouter/stray/model-x:free", "ok")]);
    expect(statuses.every((status) => status.ok === 0)).toBe(true);
  });
});
