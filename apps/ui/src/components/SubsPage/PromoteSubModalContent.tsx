import { Button, Divider, Flex, Form, Select, Tabs, type GetProp } from "antd"
import { useEffect, useMemo, useState } from "react"
import { getUsersList } from "../../api/api"
import type { ListUsersResponseBody } from "@types"
import { debounce } from "ts-debounce";
import type { User } from "../../../../api/generated/prisma";
import { UserForm, type FormShape as NewUserFormShape } from "../PartnersPage/UserForm"
import LABELS from "@labels"

const formPaths = {
  existingUserLogin: "existingUserLogin"
} as const

export type FormShape = NewUserFormShape & {
  [formPaths.existingUserLogin]: User["login"]
}

type Props = {
  onCancel: () => any
  onSubmit: (values: FormShape) => any
}

export function PromoteSubModalContent({onCancel, onSubmit}: Props) {
  const [ loading, setLoading ] = useState<boolean>(false)

  const onFinish: GetProp<typeof Form<FormShape>, "onFinish">= function(values) {
    setLoading(true)
    onSubmit(values)
  }


  return (
    <Form
      initialValues={{
        role: "PARTNER"
      }}
      layout="vertical"
      onFinish={onFinish}
    >

      <Tabs
        animated={{ inkBar: true, tabPane: true }}
        defaultActiveKey="new"
        centered
        destroyOnHidden
        items={[
          {
            label: LABELS.subsPage.promote.tabs.new,
            key: "new",
            children: <UserForm mode="new" />,
          },
          {
            label: LABELS.subsPage.promote.tabs.existing,
            key: "existing",
            children: <ExistingUserSelector />
          }
        ]}
      />
      <Divider />

      <Flex justify="end" gap={16}>
        <Button color="default" variant="filled" onClick={onCancel}>{LABELS.subsPage.cancel}</Button>
        <Button type="primary" htmlType="submit" loading={loading}>{LABELS.subsPage.create}</Button>
      </Flex>
    </Form>
  )
}

async function fetchAssignableUsers(setter: React.Dispatch<React.SetStateAction<ListUsersResponseBody>>, search?: string) {
  const response = await getUsersList({ assignable: "true", login: search })
  setter(response)
}

function ExistingUserSelector() {
  const [search, setSearch] = useState<string>()
  const [assignableUsers, setAssignableUsers] = useState<Awaited<ReturnType<typeof getUsersList>>>([])

  const options = useMemo(() => {
    return assignableUsers.map(({ login }) => ({ value: login, label: login }))
  }, [assignableUsers])

  const debouncedSearch = debounce(setSearch, 600)

  useEffect(() => {
    fetchAssignableUsers(setAssignableUsers, search)
  }, [search])

  return (
    <Form.Item noStyle name={formPaths.existingUserLogin}>
      <Select
        styles={{ root: { width: 150 } }}
        placeholder={LABELS.subsPage.promote.existingPartnerPlaceholder}
        showSearch={{
          onSearch: debouncedSearch
        }}
        options={options}
      />
    </Form.Item>
  )
}
