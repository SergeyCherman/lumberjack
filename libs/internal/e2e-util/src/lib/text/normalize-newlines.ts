export function normalizeNewlines(text: string): string {
  return text.replace(/\r\n?/g, '\n');
}
