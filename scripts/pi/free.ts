import { fileURLToPath } from "node:url";
import { runPiFreeTextPrompt } from "./ai.ts";
import { isPiCliFlag, requirePiCliValue } from "./cli.ts";

type PiFreeArgs = {
  prompt: string | null;
  useStdin: boolean;
  model: string | null;
};

export function parsePiFreeCliArgs(argv: string[], env: NodeJS.ProcessEnv = process.env): PiFreeArgs {
  let prompt = env["usage_prompt"]?.trim() || null;
  let promptFromArg = false;
  let useStdin = env["usage_stdin"] === "true";
  let model = env["usage_model"]?.trim() || null;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--stdin") {
      useStdin = true;
      continue;
    }
    if (arg === "--model") {
      model = requirePiCliValue(argv, index, arg);
      index += 1;
      continue;
    }
    if (isPiCliFlag(arg)) {
      throw new Error(`Unknown llm argument: ${arg}`);
    }
    if (promptFromArg) {
      throw new Error("llm accepts only one positional prompt.");
    }
    prompt = arg;
    promptFromArg = true;
  }

  return { prompt, useStdin, model };
}

async function readStdinText(): Promise<string> {
  const chunks: Buffer[] = [];
  for await (const chunk of process.stdin) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(String(chunk)));
  }
  return Buffer.concat(chunks).toString("utf8");
}

export async function runPiFreeCli(argv: string[] = process.argv.slice(2)): Promise<void> {
  const args = parsePiFreeCliArgs(argv);
  const prompt = args.useStdin ? await readStdinText() : args.prompt;
  if (!prompt || prompt.trim().length === 0) {
    throw new Error("llm requires --stdin or a positional prompt.");
  }

  const result = await runPiFreeTextPrompt(prompt, {
    model: args.model,
  });

  process.stdout.write(result.text.endsWith("\n") ? result.text : `${result.text}\n`);
}

const isDirectCliEntry = process.argv[1] ? process.argv[1] === fileURLToPath(import.meta.url) : false;

if (isDirectCliEntry) {
  runPiFreeCli().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
