import fs from "node:fs";
import path from "node:path";

const outputRoot = path.resolve("out");
const contract = `<!--
THESIS: The gym is the entry point and the advising dossier is the future plan; refuse the generic centered nonprofit hero and equal card grid.
OWN-WORLD: Deep navy, cobalt, warm cream, and court amber; court lacquer, manila sheets, taped photographs, whiteboard rules, square controls, and condensed athletic type.
STORY: A visitor sees basketball earn trust, follows relationship into guidance and opportunity, then chooses a program, donation, mentorship, or contact path.
FIRST VIEWPORT: A grayscale gym owns the left and center; the headline sits in the gym field; a warm dossier overlaps from the right; Donate stays top-right, Explore Programs sits lower-left, and one amber line becomes the five-stage rail.
FORM: Locker Room to Lecture Hall, grounded candidate 4, seed bf45349c; approved comp .impeccable/mocks/home/option-a.png.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

function htmlFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const location = path.join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(location) : entry.name.endsWith(".html") ? [location] : [];
  });
}

if (!fs.existsSync(outputRoot)) {
  console.error("Direction contract injection skipped: out/ does not exist.");
  process.exit(1);
}

for (const file of htmlFiles(outputRoot)) {
  const html = fs.readFileSync(file, "utf8");
  const bodyEnd = html.indexOf(">", html.indexOf("<body"));
  if (bodyEnd === -1) throw new Error(`No body element in ${file}`);
  fs.writeFileSync(file, `${html.slice(0, bodyEnd + 1)}${contract}${html.slice(bodyEnd + 1)}`);
}

fs.writeFileSync(path.join(outputRoot, ".nojekyll"), "");
console.log(`Injected direction contract into ${htmlFiles(outputRoot).length} exported pages.`);
