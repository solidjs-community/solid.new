#!/usr/bin/env zx

const files = await glob(["**/*.ts", "**/*.tsx"]);

for (const file of files) {
  const content = await fs.readFile(file, { encoding: "utf-8" });
  const newContent = "// @ts-nocheck\n\n" + content;

  await fs.writeFile(file, newContent);
}
