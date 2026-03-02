import { Table, type TableColumnProps } from "antd";
import type { GetUsersListResponseBody } from "../../../../api/src/api/user/types.ts"

import { useCallback, useEffect, useState } from "react";
import { getPartnersList } from "../../api/api.ts";
import PartnersManagementPanel from "./PartnersManagementPanel.tsx";
// import {type Partner} from "../../../generated/prisma/client"

const columns: TableColumnProps<GetUsersListResponseBody[number]>[] = [
  {
    dataIndex: "login",
    title: "Логин",
    key: "login"

  },
  {
    title: "Пароль",
    render: () => "***",
    key: "pwd"
  },
  {
    dataIndex: "role",
    title: "Роль",
    key: "role"
  },
  
  {
    dataIndex: ["sub", "totalPayableReward"],
    title: "Накопленный бонус",
    key: "totalPayableReward",
  },
  {
    dataIndex: ["sub", "secondarySubsAmount"],
    title: "Вторичные подписчики",
    key: "secondarySubsAmount",
  },
  

]



function PartnersTable() {
  const [allPartners, setAllPartners] = useState<GetUsersListResponseBody>([])

  const getAllPartners = useCallback(async () => {
    const response = await getPartnersList()
    setAllPartners(response)

  }, [setAllPartners])

  const onCreateSuccessful = useCallback(() => {
    getAllPartners()
  }, [getAllPartners])

  useEffect(() => {
    getAllPartners()
  }, [])

  return (
    <>
      <PartnersManagementPanel onCreateSuccessful={onCreateSuccessful}/>
      <Table<GetUsersListResponseBody[number]>
        dataSource={allPartners}
        columns={columns}
      />
    </>
  )
}

export default PartnersTable