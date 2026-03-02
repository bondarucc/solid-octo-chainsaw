import { Button, Table, type TableColumnProps, type TableProps } from "antd"
import { useCallback, useEffect, useMemo, useState } from "react"
import type { Package, Sub, User } from "../../../../api/generated/prisma/browser.ts"
import type { GetSubsListResponseBody } from "../../../../api/src/api/sub/types.ts"
import { getFullSubsList } from "../../api/api.ts"
import useSubsTableContext from "./hooks/useSubsTableContext.ts"
import SubsManagementPanel from "./SubsManagementPanel.tsx"
import { DoubleRightOutlined } from "@ant-design/icons"
import type { ContextShape } from "./ContextProvider.tsx"



export default function SubsTable() {
  const [allSubs, setAllSubs] = useState<GetSubsListResponseBody>([])
  const { filters } = useSubsTableContext()
  // console.log(filters);
  
  const getAllSubs = useCallback(async () => {
    const response = await getFullSubsList(filters)
    setAllSubs(response)

  }, [setAllSubs, filters])

  const onCreateSuccessful = useCallback(() => {
    getAllSubs()
  }, [getAllSubs])

  useEffect(() => {
    getAllSubs()
  }, [filters.externalId])

  return (
    <>
      <SubsManagementPanel onCreateSuccessful={onCreateSuccessful} />
      <InnerTable subsList={allSubs} expandable />
    </>

  )
}

function generateColumns(expandable: boolean, setFilters: ContextShape["setFilters"]): TableColumnProps<InnerTableItem>[] {
  return [
    {
      dataIndex: "externalId",
      title: "Внешний ID",
      key: "externalId",
    },
    expandable && Table.EXPAND_COLUMN,
    !expandable && {
      key: "dig",
      render(sub: InnerTableItem) {
        return (
          <Button onClick={() => setFilters({externalId: sub.externalId})} icon={<DoubleRightOutlined />}/>
        )
      },
    },
    {
      dataIndex: ["user", "login"],
      title: "Логин",
      key: "portalLogin"

    },
    {
      dataIndex: "totalPayableReward",
      title: "Накопленный бонус",
      key: "totalPayableReward",
    },
    {
      dataIndex: "secondarySubsAmount",
      title: "Вторичные подписчики",
      key: "secondarySubsAmount",
    },
    {
      dataIndex: "login",
      title: "Cloudy Логин ",
      key: "login"

    },
    {
      title: "Cloudy Пароль",
      dataIndex: "pwd",
      key: "pwd"
    },

  ].filter(Boolean)
}

type SubWithUserAndPkg = Sub & {
  package: Package | null,
  user: Omit<User, "pwd"> | null
}

type InnerTableItem = SubWithUserAndPkg & {
  attractedSubs?: SubWithUserAndPkg[]
}

type InnerTableProps = {
  subsList: InnerTableItem[]
  expandable?: true
}

function InnerTable({ subsList, expandable }: InnerTableProps) {
  const [expandedRows, setExpandedRows] = useState<NonNullable<TableProps["expandable"]>["expandedRowKeys"]>()

  const {setFilters} = useSubsTableContext()

  const columns = useMemo(() => {
    return generateColumns(!!expandable, setFilters)
  }, [expandable, setFilters])

  return (
    <Table<InnerTableItem>
      pagination={false}
      expandable={expandable && {
        expandRowByClick: true,
        expandedRowRender: (sub) => <InnerTable subsList={sub.attractedSubs ?? []} />,
        expandedRowKeys: expandedRows,
        rowExpandable: (sub => !!sub.attractedSubs && !!sub.attractedSubs.length),
        onExpandedRowsChange(expandedKeys) {
          setExpandedRows(expandedKeys)
        },
        columnTitle: "Абоненты",
        expandedRowOffset: 1,
        // defaultExpandAllRows: subsList.length == 1
      }}

      rowKey={sub => sub.externalId}
      dataSource={subsList}
      columns={columns}
    />
  )

}