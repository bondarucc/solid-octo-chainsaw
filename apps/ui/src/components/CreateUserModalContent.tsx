import { Button, Divider, Flex, Form, type GetProp } from "antd"
import useSubsTableContext from "./SubsTable/hooks/useSubsTableContext"
import CreateUserForm from "./CreateUserForm"
import { useCallback } from "react"
import { doAssignUser } from "../api/api"

interface CreateUserModalContentProps {
  onSuccess: () => void
  subExternalId: string
}

export default function CreateUserModalContent({subExternalId, onSuccess }: CreateUserModalContentProps) {
  const {closeModal} = useSubsTableContext()
  const [form] = Form.useForm()

  const submit = useCallback<GetProp<typeof Form, "onFinish">>(async (values) => {
    console.log(values)
    await doAssignUser(subExternalId, form.getFieldsValue())
    onSuccess()
    closeModal()
  }, [subExternalId, closeModal, onSuccess])

  return (
    <Form
      form={form}
      onFinish={submit}
      style={{ overflowY: "auto", overflowX: "hidden", paddingRight: 6 }}
      validateMessages={{
        required: ""
      }}
      initialValues={{
        role: "PARTNER"
      }}
      layout="vertical"

    >
      {/* <CreateUserForm prefix={[]}/> */}
      <Divider />
      <Flex justify="end" gap={16}>
        <Button color="default" variant="filled" onClick={closeModal}>Отмена</Button>
        <Button type="primary" htmlType="submit">Ок</Button>
      </Flex>
    </Form>
  )
}