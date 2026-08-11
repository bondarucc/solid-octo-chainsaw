import LABELS from "@labels"
import { Descriptions, Typography } from "antd"
import dayjs from "dayjs"
import dateDisplayFormat from "../../../src/helpers/dateDisplayFormat"
import useUserData from "../../../src/hooks/useUserData"

export function MyPkg() {
  const { sub } = useUserData()

  if (!sub) return null

  const { pkgType, endDate } = sub

  return (
    <>
      <Typography.Title level={4} style={{ textAlign: "center", marginBottom: 36 }} >
        {LABELS.partnerPortal.myPkg.title}
      </Typography.Title>

      <Descriptions
        column={6}
        size="small"
        items={[
          ...(["epg", "m3uPlaylist", "login", "media", "publicKey", "pwd"] as const).map(k => ({ label: LABELS.models.sub[k], children: sub[k], span: 2 })),
          { label: LABELS.models.sub.pkgType, children: pkgType && LABELS.pkgType[pkgType], span: 2 },
          { label: LABELS.models.sub.endDate, children: dateDisplayFormat(dayjs(endDate)), span: 2 },
        ]}
      />
    </>
  )
}