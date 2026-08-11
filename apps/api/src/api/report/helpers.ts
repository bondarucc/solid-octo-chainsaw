export function sortAuditEventsByTimestamp<T extends { data: { createdAt: Date } }>(events: T[]): T[] {
  return events
    .slice()
    .sort((a, b) => b.data.createdAt.getTime() - a.data.createdAt.getTime());
}