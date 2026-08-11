import { UserOutlined } from "@ant-design/icons"
import type { ListSubsResponseBody } from "@types"
import { Button, notification, Table, type GetProp } from "antd"
import dayjs from "dayjs"
import { useMemo, useState } from "react"
import { extendSubPkgBy1Year, promoteSub } from "../../../api/api.ts"
import PkgPaidExtensionModalContent, { type SubExtensionFormShape } from "../PkgPaidExtensionModalContent.tsx"
import FilteringPanel from "../FilteringPanel.tsx"
import { Link, useLoaderData, useRevalidator } from "react-router"
import type { subsLoader } from "../SubsPage.tsx"
import { ActionsDropdown, type Actions } from "./ActionsDropdown.tsx"
import { LocalModal } from "../../../components/LocalModal.tsx"
import { PromoteSubModalContent } from "../PromoteSubModalContent.tsx"
import { type FormShape as SubPromotionFormShape } from "../PromoteSubModalContent.tsx"
import {ExternalIdWithIndicator} from "../../../components/PkgEndDateIndicator.tsx"
import LABELS from "@labels"
import format from "string-template"

export type SubItem = ListSubsResponseBody[number]

export default function SubsTable() {
  const { subs } = useLoaderData<typeof subsLoader>()
  const [actionState, setActionState] = useState<{ sub: SubItem, action: Actions }>()
  const { revalidate } = useRevalidator()

  function cancelAction() {
    setActionState(undefined)
  }

  async function processSubExtension(paymentDetails: SubExtensionFormShape) {
    if (!actionState || actionState.action !== "extend") return
    const result = await extendSubPkgBy1Year(actionState.sub.externalId, {
      ...paymentDetails,
      date: paymentDetails.date.toISOString()
    })

    if ("error" in result) {
      notification.error({
        showProgress: true,
        closable: true,
        title: LABELS.subsPage.operationFailed
      })
    } else {
      notification.success({
        showProgress: true,
        closable: true,
        title: LABELS.subsPage.extend.success,
      })
      revalidate()
    }

    cancelAction()
  }

  async function processSubPromotion(formValues: SubPromotionFormShape) {
    if (!actionState || actionState.action !== "promote") return
    const response = await promoteSub(
      actionState.sub.externalId,
      formValues.existingUserLogin
        ? {
          type: "existingUser",
          login: formValues.existingUserLogin
        }
        : {
          type: "newUser",
          ...formValues
        }
    )

    if ("error" in response) {
      notification.error({
        showProgress: true,
        closable: true,
        title: LABELS.subsPage.operationFailed
      })
    } else {
      notification.success({
        showProgress: true,
        closable: true,
        title: LABELS.subsPage.promote.success,
      })
      revalidate()
    }

    cancelAction()
  }

  const modalTitle = useMemo(() => {
    switch (actionState?.action) {
      case "promote":
        return format(LABELS.subsPage.promote.modalTitle, { externalId: actionState.sub.externalId })
      case "extend":
        return format(LABELS.subsPage.extend.modalTitle, { externalId: actionState.sub.externalId })
    }
  }, [actionState])

  const columns = useMemo<GetProp<typeof Table<SubItem>, "columns">>(() => {
    return [
      {
        title: LABELS.models.sub.externalId,
        fixed: "start",
        key: "externalId",
        render(sub: SubItem) {
          return <ExternalIdWithIndicator {...sub} />
        }
      },
      {
        key: "attractor",
        title: LABELS.subsPage.table.columns.attractor,
        render({ referalDetails }: SubItem) {
          if (referalDetails == null) return
          return (
            <Link to={`/partners?login=${referalDetails.attractorUserId}`}>
              <Button
                icon={<UserOutlined />}
              >
                {referalDetails.attractorUserId}
              </Button>
            </Link>
          )
        },
      },
      {
        title: LABELS.subsPage.table.columns.portalLogin,
        key: "portalLogin",
        render({ user }: SubItem) {
          if (user == null) return
          const { login } = user
          return (
            <Link to={`/partners?login=${login}`}>
              <Button
                icon={<UserOutlined />}
              >
                {login}
              </Button>
            </Link>
          )
        },
      },
      {
        title: LABELS.subsPage.table.columns.createdAt,
        key: "createdAt",
        render: ({ createdAt }: SubItem) => dayjs(createdAt).format("DD.MM.YYYY"),
      },
      {
        dataIndex: "login",
        title: LABELS.models.sub.login,
        key: "login"

      },
      {
        title: LABELS.models.sub.pwd,
        dataIndex: "pwd",
        key: "pwd"
      },
      {
        title: LABELS.models.sub.pkgType,
        key: "pkg",
        render: ({ startDate, endDate, pkgType, region }: SubItem) => {
          return (
            <div>
              {region && pkgType && <div style={{ whiteSpace: "nowrap" }}>{region} - {pkgType}</div>}
              <div style={{ whiteSpace: "nowrap" }}>{dayjs(startDate).format("DD.MM.YYYY")} - {dayjs(endDate).format("DD.MM.YYYY")}</div>
            </div>
          )
        }
      },
      {
        key: "actions",
        render: (_, sub) => {
          return <ActionsDropdown sub={sub} onAction={(action) => { setActionState({ sub, action }) }} />
        },
        fixed: "end",
      }

    ]
  }, [])

  return (
    <div style={{ display: "flex", flexFlow: "row no-wrap", gap: "12px" }}>


      <Table<SubItem>
        scroll={{ x: true }}
        style={{ flexGrow: 1 }}
        pagination={{
          showSizeChanger: true,
          showTotal: (total, range) => format(LABELS.pagination.showTotal, { from: range[0], to: range[1], total })
        }}
        onRow={(sub) => ({
          onClick: () => {


          },
        })}
        rowKey={sub => sub.externalId}
        dataSource={subs}
        columns={columns}
      />
      <div style={{ width: "20rem" }}>
        <FilteringPanel />
      </div>
      <LocalModal open={!!actionState} onCancel={cancelAction} title={modalTitle}>
        {actionState?.action === "extend" && <PkgPaidExtensionModalContent onCancel={cancelAction} onSubmit={processSubExtension} {...actionState.sub} />}
        {actionState?.action === "promote" && <PromoteSubModalContent onCancel={cancelAction} onSubmit={processSubPromotion} />}
      </LocalModal>
    </div>

  )
}
