export async function* decode<T>(
  stream: AsyncIterable<Uint8Array>,
): AsyncIterable<T> {
  const textDecoder = new TextDecoder("utf-8", { fatal: true });
  let remainder = new Uint8Array();
  for await (const chunk of stream) {
    let next = new Uint8Array(remainder.length + chunk.length);
    next.set(remainder);
    next.set(chunk, remainder.length);

    for (
      let newLineIndex = next.indexOf(10);
      newLineIndex !== -1;
      newLineIndex = next.indexOf(10)
    ) {
      yield JSON.parse(textDecoder.decode(next.subarray(0, newLineIndex)));
      next = next.subarray(newLineIndex + 1);
    }

    remainder = next;
  }
}