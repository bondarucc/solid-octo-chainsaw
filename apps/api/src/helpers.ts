export function normaliseSearchQuery<T extends {}>(query: T): Partial<T> {
  const result = {...query}
  for (const k in query) {
    if (query[k] !== "") result[k] = query[k]
  }

  return result
}