import { MoreOutlined } from "@ant-design/icons"
import { Button, Dropdown, type MenuProps } from "antd"
import { useMemo } from "react"
import { ClickGuard } from "../../../helpers/ClickGuard"
import type { User } from "../../../../../api/generated/prisma"
import { Link } from "react-router"
import LABELS from "@labels"

type Props = {
  onAction: (action: Actions) => any
  user: Pick<User, "totalPayableReward" | "login">
}

export type Actions = "repayment"

export function ActionsDropdown({ onAction, user: {login, totalPayableReward} }: Props) {
  const items = useMemo<MenuProps["items"]>(() => {
    return [
      {
        key: 1,
        label: <Link to={`${login}/audit`}>{LABELS.partnersPage.actions.audit}</Link>,
      },
      {
        key: 2,
        label: LABELS.partnersPage.actions.repayment,
        onClick: () => onAction("repayment"),
        disabled: totalPayableReward === 0
      },
      {
        key: 3,
        label: <Link to={`${login}/edit`}>{LABELS.partnersPage.actions.edit}</Link>,
      },
    ]
  }, [onAction, login])

  return (
    <ClickGuard>
      <Dropdown menu={{ items }} trigger={["click"]} >
        <Button icon={<MoreOutlined />} />
      </Dropdown>
    </ClickGuard>
  )
}