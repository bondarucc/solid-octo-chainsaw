import { Collapse, Descriptions, Divider, Tag, Timeline, type TimelineProps } from "antd"
import dayjs from "dayjs"
import { useEffect, useMemo, useState, type ReactNode } from "react"
import type { GetSubAuditEventsResponseBody } from "../../../../api/src/api/sub/types"
import { getSubAuditEvents } from "../../api/api"
import { ArrowRightOutlined, InfoCircleOutlined } from "@ant-design/icons"

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
          Пакет продлен до <Tag variant="outlined">{dayjs(event.newEndDate).format("DD.MM.YYYY")}</Tag>{event.sc_ae && <> за подключение  <Tag variant="outlined">{event.sc_ae.sub.externalId}</Tag></>}
        </>
      )
    case ("SRT"):
      const { newTotalPayableReward, rewardAmount, rewardType, sc_ae } = event
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

    case ("SR"):
      const { newTotalPayableReward: newTotal, repaymentAmount } = event
      return (
        <>
          Выплата <Tag variant="outlined">{repaymentAmount} у.е.</Tag><br />Остаток к выплате: <Tag variant="outlined">{newTotal} у.е.</Tag>
        </>
      )
    case ("SU"):
      const { diff, reason } = event
      const parsedDiff = JSON.parse(diff)
      const { package: pkg, user, ...rest } = parsedDiff

      return (
        <>
          <Collapse items={[
            {
              key: "details",
              label: "Данные изменены",
              children: (
                <>
                  {reason && <div style={{ backgroundColor: "#DEEFF5", display: "flex", gap: 8, padding: 8 }}>
                    <InfoCircleOutlined />
                    <div style={{ borderLeft: "1px solid black" }}></div>
                    <span>{reason}</span>
                  </div>}
                  <Descriptions
                    size="small"
                    layout="vertical"
                    items={Object.entries({ ...rest, ...pkg, ...(user.login ? { partnerLogin: user.login } : {}), ...(user.pwd ? { partnerPwd: user.pwd } : {}), ...(user.role ? { partnerRole: user.role } : {}) }).map(([key, value]: [any, any]) => {

                      const { prevValue, newValue } = ["paymentDate", "startDate", "endDate"].includes(key)
                        ? { prevValue: dayjs(value.prevValue).format("MM.DD.YYYY"), newValue: dayjs(value.newValue).format("MM.DD.YYYY") }
                        : value

                      return {
                        label: key,
                        span: "filled",
                        children: (
                          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", overflow: "hidden" }}>
                            {prevValue !== null && <div style={{ display: "contents" }}>
                              <Tag variant="outlined">{prevValue}</Tag>
                              <ArrowRightOutlined />
                            </div>}
                            <Tag variant="outlined">{newValue}</Tag>

                          </div>
                        )
                      }
                    })}
                  />


                </>
              )

            }
          ]} />
        </>
      )
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

  return <Timeline titleSpan="35%" items={items} style={{ overflowY: "auto" }} />
}