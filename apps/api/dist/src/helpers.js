export function normaliseSearchQuery(query) {
    const result = { ...query };
    for (const k in query) {
        if (query[k] !== "")
            result[k] = query[k];
    }
    return result;
}
