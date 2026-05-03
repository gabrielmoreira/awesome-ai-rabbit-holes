import {
  PI_FREE_INTELLIGENCE_SOURCE_URL,
  buildPiFreeIntelligenceAliases,
  type PiFreeIntelligenceFile,
  type PiFreeIntelligenceRecord,
  writePiFreeIntelligenceFile,
} from "./models.ts";

function stripImageMarkdown(value: string): string {
  return value.replace(/!\[[^\]]*\]\([^)]*\)/g, "").trim();
}

function parseScore(value: string): number | null {
  const match = value.match(/\d+/);
  if (!match) return null;
  const parsed = Number.parseInt(match[0], 10);
  return Number.isFinite(parsed) ? parsed : null;
}

export function extractPiFreeIntelligenceRecordsFromMarkdown(markdown: string): PiFreeIntelligenceRecord[] {
  const records = new Map<string, PiFreeIntelligenceRecord>();

  for (const rawLine of markdown.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line.includes("[Model](https://artificialanalysis.ai/models/")) continue;

    const match = line.match(
      /^\|+\s*(.*?)\s*\|\s*[^|]*\|\s*(.*?)\s*\|\s*([^|]+)\s*\|.*\[Model]\(https:\/\/artificialanalysis\.ai\/models\/([^)]+)\)/,
    );
    if (!match) continue;

    const [, modelName, creatorCell, intelligenceCell, id] = match;
    const creator = stripImageMarkdown(creatorCell);
    const intelligence = parseScore(intelligenceCell);
    if (!creator || intelligence == null) continue;

    const record: PiFreeIntelligenceRecord = {
      id,
      model: modelName.trim(),
      creator,
      artificial_analysis_intelligence_index: intelligence,
      aliases: buildPiFreeIntelligenceAliases({ id, model: modelName.trim(), creator }),
    };

    const existing = records.get(id);
    if (!existing || (existing.artificial_analysis_intelligence_index ?? Number.NEGATIVE_INFINITY) < intelligence) {
      records.set(id, record);
    }
  }

  return [...records.values()].sort(
    (a, b) =>
      (b.artificial_analysis_intelligence_index ?? Number.NEGATIVE_INFINITY) -
        (a.artificial_analysis_intelligence_index ?? Number.NEGATIVE_INFINITY) ||
      a.id.localeCompare(b.id),
  );
}

export function buildPiFreeIntelligenceFile(
  records: PiFreeIntelligenceRecord[],
  options: { generatedAt?: string; sourceUrl?: string } = {},
): PiFreeIntelligenceFile {
  return {
    generated_at: options.generatedAt ?? new Date().toISOString(),
    source_url: options.sourceUrl ?? PI_FREE_INTELLIGENCE_SOURCE_URL,
    records,
  };
}

function buildReaderUrl(sourceUrl: string): string {
  return `https://r.jina.ai/http://${sourceUrl.replace(/^https?:\/\//, "")}`;
}

async function fetchText(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: { "user-agent": "awesome-ai-rabbit-holes/pi-free-intelligence" },
  });
  if (!response.ok) {
    throw new Error(`request failed: ${response.status} ${response.statusText}`);
  }
  return await response.text();
}

async function fetchLeaderboardMarkdown(sourceUrl: string): Promise<string> {
  try {
    const direct = await fetchText(sourceUrl);
    if (extractPiFreeIntelligenceRecordsFromMarkdown(direct).length > 0) {
      return direct;
    }
  } catch {
    // Fall through to the Jina mirror when the primary site is unavailable.
  }
  return await fetchText(buildReaderUrl(sourceUrl));
}

function parseArgs(argv: string[]): { sourceUrl: string } {
  let sourceUrl = PI_FREE_INTELLIGENCE_SOURCE_URL;
  for (let index = 0; index < argv.length; index += 1) {
    if (argv[index] === "--source-url" && argv[index + 1]) {
      sourceUrl = argv[index + 1];
      index += 1;
    }
  }
  return { sourceUrl };
}

export async function runPiFreeIntelligence(argv: string[] = process.argv.slice(2)): Promise<void> {
  const args = parseArgs(argv);
  console.log(`Fetching intelligence data from ${args.sourceUrl}...`);
  const markdown = await fetchLeaderboardMarkdown(args.sourceUrl);
  const records = extractPiFreeIntelligenceRecordsFromMarkdown(markdown);
  if (records.length === 0) {
    throw new Error("no intelligence records were extracted from the leaderboard");
  }

  const file = buildPiFreeIntelligenceFile(records, { sourceUrl: args.sourceUrl });
  writePiFreeIntelligenceFile(file);
  console.log(`Wrote ${records.length} intelligence record(s).`);
}
