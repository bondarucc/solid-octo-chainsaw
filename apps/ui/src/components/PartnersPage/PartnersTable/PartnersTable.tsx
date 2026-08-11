import type { CreateRepaymentResponseBody, ListUsersResponseBody } from "@types";
import { Button, Descriptions, Flex, Input, notification, Popover, Space, Table, type GetProp, type InputRef, type TableProps } from "antd";
import { Link, useLoaderData, useRevalidator, useSearchParams } from "react-router";
import type { Role } from "../../../../../api/generated/prisma";
import dayjs from "dayjs";
import { ClickGuard } from "../../../helpers/ClickGuard";
import { DoubleRightOutlined, SearchOutlined } from "@ant-design/icons";
import { useMemo, useRef, useState } from "react";
import { ActionsDropdown, type Actions } from "./ActionsDropdown";
import { LocalModal } from "../../../components/LocalModal";
import RepaymentModalContent from "../RepaymentModalContent";
import { doRepayment } from "../../../api/api";
import LABELS from "@labels";
import format from "string-template";
import dateDisplayFormat from "../../../../src/helpers/dateDisplayFormat";

function LoginColumnFilter() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [open, setOpen] = useState(false)
  const inputRef = useRef<InputRef>(null)
  const login = searchParams.get("login") ?? ""

  function handleSearch() {
    const value = inputRef.current?.input?.value ?? ""
    setSearchParams(prev => {
      const next = new URLSearchParams(prev)
      next.set("login", value)
      return next
    })
  }

  function handleReset() {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev)
      next.delete("login")
      return next
    })
  }

  return (
    <Flex align="center" gap={12}>
      {LABELS.models.partner.login}
      <Popover
        trigger="click"
        open={open}
        onOpenChange={setOpen}
        placement="bottomLeft"
        content={
          <Space orientation="vertical" style={{ width: 240 }}>
            <Input
              key={login}
              ref={inputRef}
              placeholder={LABELS.partnersPage.table.columns.login.filter.placeholder}
              defaultValue={login}
              onPressEnter={handleSearch}
            />
            <Space>
              <Button size="small" onClick={handleReset}>
                {LABELS.partnersPage.table.columns.login.filter.reset}
              </Button>
              <Button type="primary" size="small" icon={<SearchOutlined />} onClick={handleSearch}>
                {LABELS.partnersPage.table.columns.login.filter.search}
              </Button>
              <Button type="link" size="small" onClick={() => setOpen(false)}>
                {LABELS.partnersPage.table.columns.login.filter.close}
              </Button>
            </Space>
          </Space>
        }
      >
        <SearchOutlined
          style={{ cursor: "pointer", color: login ? "#1677ff" : undefined }}
          onClick={(e) => e.stopPropagation()}
        />
      </Popover>
    </Flex>
  )
}

export default function PartnersTable() {
  const { users } = useLoaderData<{ users: ListUsersResponseBody }>();
  const [actionState, setActionState] = useState<{ user: typeof users[number], action: Actions }>()
  const { revalidate } = useRevalidator()

  function cancelAction() {
    setActionState(undefined)
  }

  async function processRepayment(amount: number) {
    if (!actionState || actionState.action !== "repayment") return
    const response = await doRepayment(actionState.user.login, amount)
    if ("error" in response) {
      notification.error({
        showProgress: true,
        closable: true,
        title: LABELS.partnersPage.repayment.notifications.error
      })
    } else {
      notification.success({
        showProgress: true,
        closable: true,
        title: LABELS.partnersPage.repayment.notifications.success,
        description: <SuccessfulRepaymentConfirmation {...response} />,
      })

      revalidate()
    }

    setActionState(undefined)
  }

  const modalTitle = useMemo(() => {
    switch (actionState?.action) {
      case "repayment":
        return format(LABELS.partnersPage.repayment.modalTitle, { login: actionState.user.login })
        break;
    }
  }, [actionState])


  const columns: TableProps<ListUsersResponseBody[number]>["columns"] = [
    {
      dataIndex: "login",
      title: <LoginColumnFilter />,
      fixed: "start"
    },
    {
      dataIndex: "customMonetaryRewardAmount",
      title: LABELS.models.partner.customMonetaryRewardAmount
    },
    {
      dataIndex: "role",
      title: LABELS.models.partner.role,
      render: (v: Role) => LABELS.roles[v]
    },
    {
      dataIndex: "totalPayableReward",
      title: LABELS.models.partner.totalPayableReward,
      render: (v: number) => v.toFixed(2)
    },
    {
      dataIndex: "attractedSubs",
      title: LABELS.partnersPage.table.columns.attractedSubs.title,
      render: (subs, user) => (
        <ClickGuard>
          <Link to={`/subs?attractorUser=${user.login}`}>
            <Button
              icon={<DoubleRightOutlined />}
              iconPlacement="end"
            >
              {format(LABELS.partnersPage.table.columns.attractedSubs.button, { count: subs.length })}
            </Button>
          </Link>
        </ClickGuard>
      )
    },
    {
      dataIndex: "createdAt",
      title: LABELS.models.partner.createdAt,
      render: (v: string) => dateDisplayFormat(dayjs(v))
    },
    {
      key: "actions",
      render: (_, user) => <ActionsDropdown user={user} onAction={action => setActionState({ user, action })} />,
      fixed: "end",
    }
  ]


  return (
    <>
      <Table<typeof users[number]>
        columns={columns}
        dataSource={users}
        scroll={{ x: true }}
        rowKey="login"
        pagination={{
          showSizeChanger: true,
          showTotal: (total, range) => format(LABELS.pagination.showTotal, { from: range[0], to: range[1], total })
        }}
      />
      <LocalModal open={!!actionState} onCancel={cancelAction} title={modalTitle}>
        {actionState?.action === "repayment" && <RepaymentModalContent onCancel={cancelAction} onOk={processRepayment} {...actionState.user} />}
      </LocalModal>

    </>
  )
}

function SuccessfulRepaymentConfirmation({ newTotalPayableReward, repaymentAmount }: CreateRepaymentResponseBody) {

  const items = useMemo<GetProp<typeof Descriptions, "items">>(() => {
    return [
      {
        key: 1,
        label: LABELS.partnersPage.repayment.confirmation.amount,
        children: `EUR ${repaymentAmount}`,
        span: "filled"
      },
      {
        key: 2,
        label: LABELS.partnersPage.repayment.confirmation.remaining,
        children: `EUR ${newTotalPayableReward}`,
        span: "filled"
      },
    ]
  }, [newTotalPayableReward, repaymentAmount])

  return <Descriptions styles={{}} items={items} />
}
