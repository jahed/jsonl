export function encode(lines: Iterable<unknown>): Blob {
  const parts: BlobPart[] = [];
  for (const line of lines) {
    parts.push(JSON.stringify(line));
    parts.push("\n");
  }
  return new Blob(parts, { type: "application/jsonl" });
}
