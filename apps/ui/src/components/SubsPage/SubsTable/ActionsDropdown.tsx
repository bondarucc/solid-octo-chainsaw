import { MoreOutlined } from "@ant-design/icons"
import { Button, Dropdown, type MenuProps } from "antd"
import { useMemo } from "react"
import { ClickGuard } from "../../../helpers/ClickGuard"
import type { SubItem } from "./SubsTable"
import { Link } from "react-router"
import LABELS from "@labels"

type Props = {
  onAction: (action: Actions) => any
  sub: SubItem
}

export type Actions = "extend" | "promote"

export function ActionsDropdown({ onAction, sub }: Props) {
  const items = useMemo<MenuProps["items"]>(() => {    
    return [
      {
        key: 1,
        label: <Link to={`${sub.externalId}/audit`}>{LABELS.subsPage.actions.audit}</Link>,
      },
      {
        key: 2,
        label: LABELS.subsPage.actions.extend,
        onClick: () => onAction("extend")
      },
      {
        key: 3,
        label: LABELS.subsPage.actions.promote,
        disabled: !!sub.user?.login,
        onClick: () => onAction("promote")
      },
      {
        key: 4,
        label: <Link to={`${sub.externalId}/edit`}>{LABELS.subsPage.actions.edit}</Link>,
      },
    ]
  }, [onAction, sub])

  return (
    <ClickGuard>
      <Dropdown menu={{ items }} trigger={["click"]} >
        <Button icon={<MoreOutlined />} />
      </Dropdown>
    </ClickGuard>

  )

}
