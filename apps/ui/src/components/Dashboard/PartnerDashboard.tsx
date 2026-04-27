import { Descriptions, Table, type GetProp } from "antd"
import dayjs from "dayjs"
import { useEffect, useState } from "react"
import type { Package, Sub } from "../../../../api/generated/prisma/index"
import { getMySubs } from "../../api/api"
import useUserData from "../../hooks/useUserData"

function PartnerDashboard() {
  const { userData } = useUserData()

  const descItems: GetProp<typeof Descriptions, "items"> = [
    {
      label: "Общий бонус к оплате",
      children: userData?.sub?.totalPayableReward,
      span: 1,
    },
    ...(userData?.sub?.customMonetaryRewardAmount
      ? [
        {
          label: "Спец условия",
          children: userData.sub.customMonetaryRewardAmount,
          span: 1,
        }
      ]
      : []
    )
  ]

  return (
    <>
      <Descriptions
        bordered
        size="small"
        items={descItems}
        column={{ xs: 1, sm: 2, md: 3 }}
        style={{ marginBottom: 12 }}
      />
      <MySubsTable />
    </>
  )
}

export default PartnerDashboard


type SubItem = Pick<Sub, "epg" | "m3uPlaylist" | "login" | "pwd" | "media" | "publicKey" | "externalId"> & {
  package: Pick<Package, "endDate">
}


function MySubsTable() {
  const columns: GetProp<typeof Table<SubItem>, "columns"> = [
    {
      dataIndex: "externalId",
      title: "Внешний ID",
      key: "externalId"
    },
    {
      title: "Оплачен до",
      key: "endDate",
      render: (sub: SubItem) => dayjs(sub.package.endDate).format("DD.MM.YYYY")
    },
    {
      dataIndex: "login",
      title: "Логин",
      key: "login"
    },
    {
      dataIndex: "pwd",
      title: "Пароль",
      key: "pwd"
    },
    {
      dataIndex: "epg",
      title: "EPG",
      key: "epg"
    },
    {
      dataIndex: "m3uPlaylist",
      title: "M3U",
      key: "m3uPlaylist"
    },
    {
      dataIndex: "media",
      title: "Медиатека",
      key: "media"
    },
    {
      dataIndex: "publicKey",
      title: "Публичный ключ",
      key: "publicKey"
    },
  ]

  const [mySubs, setMySubs] = useState<SubItem[]>([])

  useEffect(() => {
    getMySubs().then(subs => setMySubs(subs));

  }, [])

  return (
    <Table<SubItem> columns={columns} dataSource={mySubs} scroll={{ x: true }} rowKey={sub => sub.externalId} />
  )
}