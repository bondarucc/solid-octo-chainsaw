import { Timeline, type TimelineProps } from "antd"
import dayjs from "dayjs"
import { useEffect, useMemo, useState } from "react"
import type { GetSubAuditEventsResponseBody } from "../../../../api/src/api/sub/types"
import { getSubAuditEvents } from "../../api/api"

type AuditModalContentProps = {
  id: string
}

function eventToString(event: GetSubAuditEventsResponseBody[number]) {
  switch (event.type) {
    case ("SC"):
      return "Абонет создан"
    case ("SPE"):
      return `Пакет продлен до ${event.newEndDate} за подключение  ${event.sc_ae.sub.externalId}`
    case ("SRT"):
      return `Начислено награду ${event.rewardAmount} у.е. за подключение ${event.subId}. Итого к оплате ${event.newTotalPayableReward}`
    case ("SSSAI"):
      return `Абонент ${event.sc_ae.sub.externalId} подключился через ${event.sc_ae.sub.attractedBy?.externalId}. Кол-во второстепенных рефералов ${event.prevSecondarySubsAmount} -> ${event.newSecondarySubsAmount}`
    default: return ""
  }
}

export function AuditModalContent({ id }: AuditModalContentProps) {

  const [ auditEvents, setAuditEvents ] = useState<GetSubAuditEventsResponseBody>()

  useEffect(() => {
    getSubAuditEvents(id).then(res => setAuditEvents(res))
  }, [id])

  const items = useMemo<TimelineProps["items"]>(() => {
    return auditEvents?.map(event => {
      
      return {
        title: dayjs(event.timestamp).format("YYYY MMM DD - hh:mm"),
        content: eventToString(event)
      }
    })
  }, [id, auditEvents])

  return <Timeline titleSpan="35%" items={items} />
}