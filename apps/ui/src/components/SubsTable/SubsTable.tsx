import { DownOutlined, MoreOutlined, PlusOutlined, UpOutlined } from "@ant-design/icons"
import { Badge, Button, Dropdown, Table, type GetProp, type MenuProps } from "antd"
import dayjs from "dayjs"
import { useCallback, useEffect, useMemo, useState } from "react"
import { getFullSubsList } from "../../api/api.ts"
import { ClickGuard } from "../../helpers/ClickGuard.tsx"
import CreateSubForm from "../CreateSubForm.tsx"
import { AuditModalContent } from "./AuditModalContent.tsx"
import FilteringPanel from "./FilteringPanel.tsx"
import useSubsTableContext from "./hooks/useSubsTableContext.ts"
import { Role } from "../../../../api/generated/prisma/enums.ts"

const TRNS = {
 ROLE: {
  [Role.ADMIN]: "Админ",
  [Role.PARTNER]: "Партнер"
 } as const
}

type SubItem = Awaited<ReturnType<typeof getFullSubsList>>[number]

export default function SubsTable() {
  const [allSubs, setAllSubs] = useState<SubItem[]>([])
  const { filtersForm, setModalConfig } = useSubsTableContext()

  const getAllSubs = useCallback(async () => {
    const response = await getFullSubsList(filtersForm.getFieldsValue())
    setAllSubs(response)

  }, [setAllSubs])

  const onCreateSuccessful = useCallback(() => {
    getAllSubs()
  }, [getAllSubs])

  const columns = useMemo<GetProp<typeof Table<SubItem>, "columns">>(() => {
    return [
      {
        title: "Внешний ID",
        key: "externalId",
        render({ externalId, package: pkg }: SubItem) {
          const endDate = dayjs(pkg?.endDate)
          const now = dayjs()
          const oneMonthSinceNow = now.add(1, "M")
          let tagColor: string

          if (endDate.isAfter(oneMonthSinceNow)) {
            tagColor = "green"
          } else if (endDate.isAfter(now) && endDate.isBefore(oneMonthSinceNow)) {
            tagColor = "orange"
          } else tagColor = "red"

          return (
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <div style={{ backgroundColor: tagColor, width: 10, height: 10, borderRadius: "50%" }} />
              {externalId}

            </div>
          )
        }
      },
      {
        key: "attractedSubs",
        title: "Привлеченные абоненты",
        render(sub: SubItem) {
          return sub.attractedSubs.length
            ? (
              <Badge count={sub.attractedSubs.length} size="small" color="black" >
                <Button
                  onClick={() => {
                    filtersForm.resetFields()
                    filtersForm.setFieldsValue({ attractorId: sub.externalId })
                    filtersForm.submit()
                  }}
                  icon={<DownOutlined />}
                />
              </Badge>
            )
            : null
        },
      },
      {
        key: "attractor",
        title: "Реферал",
        render(attractor: SubItem) {
          if (attractor.attractedBy == null) return
          return <span style={{ whiteSpace: "nowrap" }}>

            <Button
              onClick={() => {
                filtersForm.resetFields()
                filtersForm.setFieldsValue({ externalId: attractor.attractedBy?.externalId })
                filtersForm.submit()
              }}
              icon={<UpOutlined />}
            >
              {attractor.attractedBy.externalId}
            </Button>
          </span>
        },
      },
      {
        dataIndex: ["user", "login"],
        title: "Логин",
        key: "portalLogin"

      },
      {
        title: "Роль",
        key: "role",
        render: (sub: SubItem) => sub.user?.role ? TRNS.ROLE[sub.user.role] : "Абонент"
      },
      {
        dataIndex: "totalPayableReward",
        title: "Накопленный бонус",
        key: "totalPayableReward",
      },
      // {
      //   dataIndex: "login",
      //   title: "Clouddy Логин ",
      //   key: "login"

      // },
      // {
      //   title: "Clouddy Пароль",
      //   dataIndex: "pwd",
      //   key: "pwd"
      // },
      {
        title: "pkg",
        key: "pkg",
        render: ({package: pkg}: SubItem) => {
          if (!pkg) return
          const {endDate, paymentAmount, paymentCurr, paymentDate, pkgType, region, startDate } = pkg
          return (
            <div>
              {region && pkgType && <div style={{whiteSpace: "nowrap"}}>{region} - {pkgType}</div>}
              <div style={{whiteSpace: "nowrap"}}>{dayjs(startDate).format("DD.MM.YYYY")} - {dayjs(endDate).format("DD.MM.YYYY")}</div>
              {paymentAmount && paymentCurr && paymentDate && <div style={{whiteSpace: "nowrap"}}>{pkg.paymentAmount?.toFixed(2)}{pkg.paymentCurr} - {dayjs(pkg.paymentDate).format("DD.MM.YYYY")}</div>}
            </div>
          )
        }
      },
      {
        key: "actions",
        title: (
          <Button
            style={{ color: "black", backgroundColor: "yellowgreen" }}
            type="primary"
            icon={<PlusOutlined />}
            onClick={() =>
              setModalConfig({
                open: true,
                title: "Новый абонент",
                children: <CreateSubForm onSuccess={onCreateSuccessful} />
              })
            }
          />
        ),
        render: (sub: SubItem) => {
          return <ActionsDropdown sub={sub} />
        },
        fixed: "end",
      }

    ]
  }, [filtersForm])



  useEffect(() => {
    getAllSubs()
  }, [])

  return (
    <>
      <div style={{ marginBottom: 12 }}>
        <FilteringPanel onSearch={getAllSubs} />
      </div>

      <Table<SubItem>
        scroll={{ x: true }}
        pagination={false}
        rowKey={sub => sub.externalId}
        dataSource={allSubs}
        columns={columns}
      />
    </>

  )
}

function ActionsDropdown({ sub }: { sub: SubItem }) {
  const { setModalConfig } = useSubsTableContext()


  const items = useMemo<MenuProps["items"]>(() => {
    return [
      {
        key: 1,
        label: "Аудит",
        onClick: () => {
          setModalConfig({
            open: true,
            title: "Audit",
            children: <AuditModalContent {...sub} />
          })
        }
      }
    ]
  }, [sub])

  return (
    <ClickGuard>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <MoreOutlined />
      </Dropdown>
    </ClickGuard>

  )

}


