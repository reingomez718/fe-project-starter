export function isOk(input: any): boolean {
  if (Array.isArray(input)) return input.filter((x) => x).length > 0;
  if (typeof input === "object" && input) return Object.keys(input).length > 0;
  if (typeof input === "number") return true;
  return Boolean(input);
}
