export function sortAuditEventsByTimestamp<T extends { timestamp: Date }>(events: T[]): T[] {
  return events
    .slice()
    .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
}