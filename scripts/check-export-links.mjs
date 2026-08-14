import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("out");
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "riggs-hd";
const basePath = `/${repositoryName}`;
const failures = [];

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(directory, entry.name);
      return entry.isDirectory()
        ? htmlFiles(fullPath)
        : entry.name.endsWith(".html")
          ? [fullPath]
          : [];
    }),
  );
  return nested.flat();
}

for (const file of await htmlFiles(outputDirectory)) {
  const html = await readFile(file, "utf8");
  for (const match of html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi)) {
    const href = match[1];
    const isRootRelative = href.startsWith("/") && !href.startsWith("//");
    const staysInsideProject = href === basePath || href.startsWith(`${basePath}/`);
    if (isRootRelative && !staysInsideProject) {
      failures.push(`${path.relative(outputDirectory, file)}: ${href}`);
    }
  }
}

if (failures.length) {
  console.error("Export contains links that escape the GitHub Pages project path:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Export link check passed: every root-relative anchor stays inside ${basePath}/.`);
