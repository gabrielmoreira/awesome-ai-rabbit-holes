// test/files.test.ts
// Tests for generated-file write helpers.

import { describe, it, expect } from "vitest";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { writeTextFileIfChanged } from "../scripts/files.js";

describe("writeTextFileIfChanged", () => {
  it("does not rewrite a CRLF file when the logical content is unchanged", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "aarh-files-"));
    const filePath = path.join(dir, "README.md");

    try {
      fs.writeFileSync(filePath, "line 1\r\nline 2\r\n", "utf8");
      const before = fs.readFileSync(filePath, "utf8");

      const changed = writeTextFileIfChanged(filePath, "line 1\nline 2\n");
      const after = fs.readFileSync(filePath, "utf8");

      expect(changed).toBe(false);
      expect(after).toBe(before);
      expect(after).toContain("\r\n");
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
});
