// gta6-clipper-01 — entrypoint (Node 22, standard library only).
//
// The entry is the YouTube Short itself. An AI agent picked the moment
// from Kai Cenat's first GTA 6 stream, cut it into a vertical clip with
// ffmpeg, and the clip was published as a public Short with the bounty
// line and play code in its description. This program only hands
// VIDEO.json to the gate: it reads the file from the repository root,
// checks it names a real YouTube address, and writes it to /output.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(BOT_DIR, 'VIDEO.json');
const targetPath = join(OUTPUT_DIR, 'VIDEO.json');

let entry: unknown;
try {
  entry = JSON.parse(readFileSync(sourcePath, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json could not be read from ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}

const url = (entry as { url?: unknown }).url;
if (typeof url !== 'string' || !/^https:\/\/(www\.)?youtube\.com\/(shorts\/|watch\?v=|live\/)/.test(url)) {
  console.error(`VIDEO.json does not name a YouTube video address: ${String(url)}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(targetPath, JSON.stringify({ url }, null, 2) + '\n');
console.log(`VIDEO.json written to ${targetPath}: ${url}`);
