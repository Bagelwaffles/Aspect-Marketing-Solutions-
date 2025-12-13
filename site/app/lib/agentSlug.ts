export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getAgentSlug(agent: unknown): string | null {
  if (agent && typeof agent === "object") {
    const maybe = (agent as { slug?: unknown }).slug;
    if (typeof maybe === "string" && maybe.trim().length > 0) return maybe;
  }

  const name = (agent as { name?: unknown })?.name;
  if (typeof name === "string" && name.trim().length > 0) return slugify(name);

  return null;
}
