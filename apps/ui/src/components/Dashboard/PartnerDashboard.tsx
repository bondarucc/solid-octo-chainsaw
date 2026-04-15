import { Descriptions, Table, type GetProp } from "antd"
import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { useRouteLoaderData } from "react-router"
import type { Package, Sub } from "../../../../api/generated/prisma/index"
import { getMySubs } from "../../api/api"
import type { AuthContextShape } from "../AuthProvider/types"

function PartnerDashboard() {
  const descItems: GetProp<typeof Descriptions, "items"> = [
    {
      label: "login",
      children: "login prop"
    },
    {
      label: "Total payable reward",
      children: "tpr prop"
    }
  ]

  return (
    <>
      <Descriptions
        bordered
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
      title: "externalId",
      key: "externalId"
    },
    {
      title: "endDate",
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
      title: "pwd",
      key: "pwd"
    },
    {
      dataIndex: "epg",
      title: "epg",
      key: "epg"
    },
    {
      dataIndex: "m3uPlaylist",
      title: "m3uPlaylist",
      key: "m3uPlaylist"
    },
    {
      dataIndex: "media",
      title: "media",
      key: "media"
    },
    {
      dataIndex: "publicKey",
      title: "publicKey",
      key: "publicKey"
    },
    
  ]

  const [ mySubs, setMySubs ] = useState<SubItem[]>([])

  useEffect(() => {
    getMySubs().then(subs => setMySubs(subs));
    
  }, [])

  return (
    <Table<SubItem> columns={columns} dataSource={mySubs} scroll={{x: true}}/>
  )
}