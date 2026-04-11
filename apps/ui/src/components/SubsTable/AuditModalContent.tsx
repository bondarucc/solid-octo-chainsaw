import { Tag, Timeline, type TimelineProps } from "antd"
import dayjs from "dayjs"
import { useEffect, useMemo, useState, type ReactNode } from "react"
import type { GetSubAuditEventsResponseBody } from "../../../../api/src/api/sub/types"
import { getSubAuditEvents } from "../../api/api"

type AuditModalContentProps = {
  id: string
}

function eventToString(event: GetSubAuditEventsResponseBody[number]): ReactNode {
  
  switch (event.type) {
    case ("SC"):
      return "Абонет создан"
    case ("SPE"):
      return (
        <>
          Пакет продлен до <Tag variant="outlined">{dayjs(event.newEndDate).format("DD.MM.YYYY")}</Tag>{ event.sc_ae && <> за подключение  <Tag variant="outlined">{event.sc_ae.sub.externalId}</Tag></>}
        </>
      )
    case ("SRT"):
      const {newTotalPayableReward, rewardAmount, rewardType, sc_ae} = event
      if (rewardType === "NEW_SUB") {
        return (
          <>
            Начислено награду <Tag variant="outlined">{rewardAmount} у.е.</Tag> за подключение <Tag variant="outlined">{sc_ae.sub.externalId}</Tag>. Итого к оплате <Tag variant="outlined">{newTotalPayableReward} у.е.</Tag>
          </>
        )
      } else {
        return (
          <>
            Связанный абонент <Tag variant="outlined">{sc_ae.sub.externalId}</Tag> продлил свой пакет (ранг {sc_ae.attractorTier}). Начислено <Tag variant="outlined">{event.rewardAmount} у.е.</Tag>. Итого к оплате <Tag variant="outlined">{newTotalPayableReward} у.е.</Tag>
          </>
        )
      }
    default: return ""
  }
}

export function AuditModalContent({ id }: AuditModalContentProps) {

  const [auditEvents, setAuditEvents] = useState<GetSubAuditEventsResponseBody>()

  useEffect(() => {
    getSubAuditEvents(id).then(res => setAuditEvents(res))
  }, [id])

  const items = useMemo<TimelineProps["items"]>(() => {
    return auditEvents?.map(event => {

      return {
        title: dayjs(event.timestamp).format("DD.MM.YYYY - hh:mm"),
        content: eventToString(event)
      }
    })
  }, [id, auditEvents])

  return <Timeline titleSpan="35%" items={items} />
}