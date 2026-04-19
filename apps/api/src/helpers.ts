export function normaliseSearchQuery(query: Record<string, any>) {
  const result: typeof query = {}
  for (const k in query) {
    if (
      query[k] !== null
      && query[k] !== ""
    ) result[k] = query[k]
  }

  return result
}