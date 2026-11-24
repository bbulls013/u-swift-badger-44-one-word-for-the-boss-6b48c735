import { mkdirSync, writeFileSync } from "node:fs";

// One Word for the Boss — u-swift-badger-44-one-word-for-the-boss-6b48c735
// The entry is a single word describing the boss: the manager who never
// quite leaves your desk, hovering over your shoulder while you work.
// Char budget: 9 of the 30 allowed characters — well inside the gate.
const ENTRY = "Hoverboss";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote entry (${ENTRY.length} chars): ${ENTRY}`);
