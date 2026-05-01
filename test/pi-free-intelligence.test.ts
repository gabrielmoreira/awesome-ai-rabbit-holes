import { describe, expect, it } from "vitest";
import {
  buildPiFreeIntelligenceFile,
  extractPiFreeIntelligenceRecordsFromMarkdown,
} from "../scripts/pi-free-intelligence.js";

describe("pi-free intelligence extraction", () => {
  it("extracts simplified intelligence records from the leaderboard markdown", () => {
    const markdown = [
      "|| Gemini 3.1 Pro Preview | 1M | ![Image 4: Google](https://artificialanalysis.ai/img/logos/google_small.svg)Google | 57 | $4.50 | 121 | 23.22 | 27.36 | [Model](https://artificialanalysis.ai/models/gemini-3-1-pro-preview)[Providers](https://artificialanalysis.ai/models/gemini-3-1-pro-preview/providers) |",
      "|| Kimi K2.6 | 256k | ![Image 6: Kimi](https://artificialanalysis.ai/_next/image?url=%2Fimg%2Flogos%2Fkimi_small.png&w=32&q=75)Kimi | 54 | $1.71 | 34 | 3.04 | 150.53 | [Model](https://artificialanalysis.ai/models/kimi-k2-6)[Providers](https://artificialanalysis.ai/models/kimi-k2-6/providers) |",
      "|| DeepSeek V4 Pro | 1M | ![Image 47: DeepSeek](https://artificialanalysis.ai/img/logos/deepseek_small.svg)DeepSeek | 39 | $2.17 | 34 | 2.04 | 16.82 | [Model](https://artificialanalysis.ai/models/deepseek-v4-pro-non-reasoning)[Providers](https://artificialanalysis.ai/models/deepseek-v4-pro-non-reasoning/providers) |",
    ].join("\n");

    expect(extractPiFreeIntelligenceRecordsFromMarkdown(markdown)).toEqual([
      {
        id: "gemini-3-1-pro-preview",
        model: "Gemini 3.1 Pro Preview",
        creator: "Google",
        artificial_analysis_intelligence_index: 57,
        aliases: [
          "gemini-3-1-pro-preview",
          "gemini-3.1-pro-preview",
          "gemini 3.1 pro preview",
          "google gemini 3.1 pro preview",
          "google/gemini-3-1-pro-preview",
          "google/gemini-3.1-pro-preview",
        ],
      },
      {
        id: "kimi-k2-6",
        model: "Kimi K2.6",
        creator: "Kimi",
        artificial_analysis_intelligence_index: 54,
        aliases: [
          "kimi-k2-6",
          "kimi-k2.6",
          "kimi k2.6",
          "kimi kimi k2.6",
          "moonshotai/kimi-k2-6",
          "moonshotai/kimi-k2.6",
          "kimi/kimi-k2-6",
          "kimi/kimi-k2.6",
        ],
      },
      {
        id: "deepseek-v4-pro-non-reasoning",
        model: "DeepSeek V4 Pro",
        creator: "DeepSeek",
        artificial_analysis_intelligence_index: 39,
        aliases: [
          "deepseek-v4-pro-non-reasoning",
          "deepseek-v4-pro",
          "deepseek v4 pro",
          "deepseek deepseek v4 pro",
          "deepseek-ai/deepseek-v4-pro-non-reasoning",
          "deepseek-ai/deepseek-v4-pro",
          "deepseek/deepseek-v4-pro-non-reasoning",
          "deepseek/deepseek-v4-pro",
        ],
      },
    ]);
  });

  it("normalizes leaderboard footnote markers on intelligence scores", () => {
    const markdown =
      "|| Nova 2.0 Lite (high) | 1M | ![Image 67: Amazon](https://artificialanalysis.ai/img/logos/aws_small.svg)Amazon | 35 * | $0.85 | 190 | 12.08 | 25.24 | [Model](https://artificialanalysis.ai/models/nova-2-0-lite-reasoning)[Providers](https://artificialanalysis.ai/models/nova-2-0-lite-reasoning/providers) |";

    expect(extractPiFreeIntelligenceRecordsFromMarkdown(markdown)).toEqual([
      {
        id: "nova-2-0-lite-reasoning",
        model: "Nova 2.0 Lite (high)",
        creator: "Amazon",
        artificial_analysis_intelligence_index: 35,
        aliases: [
          "nova-2-0-lite-reasoning",
          "nova-2.0-lite-high",
          "nova-2.0-lite-reasoning",
          "nova 2.0 lite high",
          "amazon nova 2.0 lite high",
          "amazon/nova-2-0-lite-reasoning",
          "amazon/nova-2.0-lite-high",
          "amazon/nova-2.0-lite-reasoning",
        ],
      },
    ]);
  });

  it("wraps extracted records in the committed intelligence file shape", () => {
    const records = extractPiFreeIntelligenceRecordsFromMarkdown(
      "|| Gemini 3.1 Pro Preview | 1M | ![Image 4: Google](https://artificialanalysis.ai/img/logos/google_small.svg)Google | 57 | $4.50 | 121 | 23.22 | 27.36 | [Model](https://artificialanalysis.ai/models/gemini-3-1-pro-preview)[Providers](https://artificialanalysis.ai/models/gemini-3-1-pro-preview/providers) |"
    );

    expect(
      buildPiFreeIntelligenceFile(records, {
        generatedAt: "2026-05-02T12:00:00.000Z",
        sourceUrl: "https://artificialanalysis.ai/leaderboards/models",
      })
    ).toEqual({
      generated_at: "2026-05-02T12:00:00.000Z",
      source_url: "https://artificialanalysis.ai/leaderboards/models",
      records,
    });
  });
});
