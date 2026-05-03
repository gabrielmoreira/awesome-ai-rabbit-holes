import { fileURLToPath } from "node:url";
import { runPiFreeAllModels } from "./pi/all-models.ts";
import { runPiFreeDoctor } from "./pi/doctor.ts";
import { runPiFreeIntelligence } from "./pi/intelligence.ts";
import { runPiFreeRankModels } from "./pi/rank-models.ts";

export type PiCliDeps = {
  allModels: (argv: string[]) => Promise<void>;
  doctor: () => Promise<void>;
  intelligence: (argv: string[]) => Promise<void>;
  rankModels: (argv: string[]) => Promise<void>;
};

export function createPiCommandMap(argv: string[] = [], deps: Partial<PiCliDeps> = {}) {
  return {
    "all-models": () => (deps.allModels ?? runPiFreeAllModels)(argv),
    doctor: () => (deps.doctor ?? runPiFreeDoctor)(),
    intelligence: () => (deps.intelligence ?? runPiFreeIntelligence)(argv),
    "rank-models": () => (deps.rankModels ?? runPiFreeRankModels)(argv),
  };
}

type PiCommandMap = ReturnType<typeof createPiCommandMap>;
type PiCommandName = keyof PiCommandMap;

export function hasPiCommand(commands: PiCommandMap, command: string | undefined): command is PiCommandName {
  return typeof command === "string" && Object.hasOwn(commands, command);
}

const command = process.argv[2];
const args = process.argv.slice(3);
const commands = createPiCommandMap(args);
const isDirectCliEntry = process.argv[1] ? process.argv[1] === fileURLToPath(import.meta.url) : false;

if (isDirectCliEntry) {
  if (!hasPiCommand(commands, command)) {
    console.error("Usage: node scripts/pi-cli.ts [all-models|doctor|intelligence|rank-models]");
    process.exit(1);
  }

  commands[command]().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
