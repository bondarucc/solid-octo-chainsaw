export function sortAuditEventsByTimestamp(events) {
    return events
        .slice()
        .sort((a, b) => b.data.createdAt.getTime() - a.data.createdAt.getTime());
}
