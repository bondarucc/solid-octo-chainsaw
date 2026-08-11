import { useLoaderData } from "react-router"
import type { mySubsLoader } from "./MainPage"
import { ConfigProvider, Descriptions, Empty, Flex, Table, Tooltip, Typography, type GetProp } from "antd"
import { ExternalIdWithIndicator, PkgEndDateIndicator } from "../PkgEndDateIndicator"
import { DownSquareTwoTone, InfoCircleOutlined } from "@ant-design/icons"
import dayjs from "dayjs"
import type { ReactNode } from "react"
import LABELS from "@labels"
import dateDisplayFormat from "../../../src/helpers/dateDisplayFormat"
import format from "string-template"


export function MySubsTable() {
  const { subs: mySubs } = useLoaderData<typeof mySubsLoader>()
  type SubItem = typeof mySubs[number]

  const columns: GetProp<typeof Table<SubItem>, "columns"> = [
    {
      title: <ColumnTitleWithHint type="ID" />,
      fixed: "start",
      key: "externalId",
      render(sub: SubItem) {
        return <ExternalIdWithIndicator {...sub} />
      }
    },
    {
      title: LABELS.partnerPortal.mySubs.columns.createdAt.title,
      render: ({ createdAt }: SubItem) => dateDisplayFormat(dayjs(createdAt)),
    },
    Table.EXPAND_COLUMN,
    {
      title: LABELS.partnerPortal.mySubs.columns.pkgType.title,
      render: ({ pkgType }: SubItem) => pkgType && LABELS.pkgType[pkgType]
    },
    {
      title: LABELS.partnerPortal.mySubs.columns.endDate.title,
      render: ({ endDate }: SubItem) => dateDisplayFormat(dayjs(endDate))
    },
    {
      title: <ColumnTitleWithHint type="totalIncomePerSub" />,
      render: ({ totalEarningsPerSub }: SubItem) => `EUR ${totalEarningsPerSub.toFixed(2)}`
    },
    {
      title: <ColumnTitleWithHint type="potentialIncome" />,
      render: ({ potentialIncomeIfExtended }: SubItem) => `EUR ${potentialIncomeIfExtended.toFixed(2)}`
    },
  ]

  return (
    <ConfigProvider
      renderEmpty={() => <Empty description={LABELS.partnerPortal.mySubs.emptyState} />}
    >
      <Typography.Title level={4} style={{ textAlign: "center" }} >
        {LABELS.partnerPortal.mySubs.title}
      </Typography.Title>
      <Table<SubItem>

        scroll={{ x: true }}
        pagination={{
          showSizeChanger: true,
          showTotal: (total, range) => format(LABELS.pagination.showTotal, { from: range[0], to: range[1], total })
        }}
        rowKey={sub => sub.externalId}
        dataSource={mySubs}
        columns={columns}
        expandable={{
          expandRowByClick: true,
          columnTitle: LABELS.partnerPortal.mySubs.columns.connectionDetails.title,
          expandIcon: () => <DownSquareTwoTone />,
          // indentSize: 25,
          expandedRowOffset: 0,
          expandedRowRender: sub => {
            return (
              <Descriptions
                column={6}
                size="small"
                items={
                  (["epg", "m3uPlaylist", "login", "media", "publicKey", "pwd"] as const)
                    .map(k => ({ label: LABELS.models.sub[k], children: sub[k], span: 2 }))
                }
              />
            )

          }
        }}
      />
    </ConfigProvider>
  )
}

type T = typeof LABELS.partnerPortal.mySubs.columns

const columnHintMapper: Record<
  { [K in keyof T]: T[K] extends { hint: any } ? K : never; }[keyof T],
  { title: string, hint: ReactNode }
> = {
  potentialIncome: LABELS.partnerPortal.mySubs.columns.potentialIncome,
  totalIncomePerSub: LABELS.partnerPortal.mySubs.columns.totalIncomePerSub,
  ID: {
    title: LABELS.partnerPortal.mySubs.columns.ID.title,
    hint: (
      <>
        <p>
          {LABELS.partnerPortal.mySubs.columns.ID.hint.p1}
        </p>

        <p>
          <PkgEndDateIndicator color="green" /> - {LABELS.partnerPortal.mySubs.columns.ID.hint.p2}
        </p>
        <p>
          <PkgEndDateIndicator color="orange" /> - {LABELS.partnerPortal.mySubs.columns.ID.hint.p3}
        </p>
        <p>
          <PkgEndDateIndicator color="red" /> - {LABELS.partnerPortal.mySubs.columns.ID.hint.p4}
        </p>
      </>
    )
  }
}

function ColumnTitleWithHint({ type }: { type: keyof typeof columnHintMapper }) {
  const { title, hint } = columnHintMapper[type]

  return (
    <Flex gap={6}>
      {title}
      <Tooltip title={hint} ><InfoCircleOutlined /></Tooltip>
    </Flex>
  )
}