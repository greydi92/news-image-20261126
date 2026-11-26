// news-image-20261126 — "The World in One Day"
// Sums up the world news of Thursday 26 November 2026 in one image.
// The image (entry.png, 1024x1024, generated in-session on 26 Nov 2026)
// covers: the claimed Houthi strike on Saudi Arabia's Ras Tanura refinery
// (Brent past $93), the US proposing new tariffs on 14 trading partners,
// Israel's strike on a Hamas official in Gaza, Ukraine hitting Russian
// refineries, Pakistan's first astronaut joining China's space station,
// and the Cairo tanker fire that killed at least 30 — plus a footer strip
// with the Mumbai 26/11 anniversary, the World Chess Championship and
// Sooryavanshi's record 204.
//
// The program simply copies the bundled image to the output directory.
// copyFileSync moves the bytes unchanged, so both grader runs write
// byte-identical output. It uses only the Node standard library, touches
// no network, and is deterministic: the same input bytes always produce
// the same output.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the repository root: the directory this script lives in,
// unless the harness tells us otherwise through MAKEFUN_BOT_DIR.
const scriptDir = dirname(fileURLToPath(import.meta.url));
const botDir = process.env.MAKEFUN_BOT_DIR ?? scriptDir;

// Resolve the output directory: MAKEFUN_OUTPUT_DIR when set,
// otherwise the grader's /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "entry.png");
const target = join(outputDir, "entry.png");

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, target);
} catch (error) {
  console.error(`news-image-20261126: failed to copy entry.png: ${error}`);
  process.exit(1);
}
