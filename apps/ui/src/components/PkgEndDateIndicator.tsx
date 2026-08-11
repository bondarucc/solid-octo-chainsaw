import dayjs from "dayjs"
import type { Sub } from "../../../api/generated/prisma"

type ExternalIdWithIndicatorProps = Pick<Sub, "endDate" | "externalId">
type Colors = "green" | "red" | "orange"


export function PkgEndDateIndicator({ color }: { color: Colors }) {
  return <span style={{ display: "inline-block", backgroundColor: color, width: 10, height: 10, borderRadius: "50%" }} />

}

function getColor(origEndDate: Date): Colors {
  const [endDate, now, oneMonthSinceNow] = [dayjs(origEndDate), dayjs(), dayjs().add(1, "M")]

  if (endDate.isAfter(oneMonthSinceNow)) return "green"
  if (endDate.isBefore(now)) return "red"
  return "orange"
}

export function ExternalIdWithIndicator({ endDate, externalId }: ExternalIdWithIndicatorProps) {
  return (
    <span style={{whiteSpace: "nowrap"}}>
      <span style={{marginRight: 10}}>
        <PkgEndDateIndicator color={getColor(endDate)} />
      </span>
      <span style={{ display: "inline-block" }}>{externalId}</span>
    </span>
  )
}