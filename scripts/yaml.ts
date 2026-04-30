// scripts/yaml.ts
// Stable YAML read/write helpers

import * as fs from "node:fs";
import * as path from "node:path";
import yaml from "js-yaml";

export function readYaml<T>(filePath: string): T {
  const content = fs.readFileSync(filePath, "utf8");
  return yaml.load(content) as T;
}

export function writeYaml(filePath: string, data: unknown): void {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  const content = yaml.dump(data, {
    lineWidth: -1,
    noRefs: true,
    quotingType: '"',
    forceQuotes: false,
  });
  fs.writeFileSync(filePath, content, "utf8");
}

export function readYamlIfExists<T>(filePath: string, defaultValue: T): T {
  if (!fs.existsSync(filePath)) {
    return defaultValue;
  }
  return readYaml<T>(filePath);
}

export function yamlExists(filePath: string): boolean {
  return fs.existsSync(filePath);
}
