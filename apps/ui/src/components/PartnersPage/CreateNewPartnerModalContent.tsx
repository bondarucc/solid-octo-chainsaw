import type { CreateUserRequestBody } from "@types"
import { Button, Col, Divider, Flex, Form, Input, InputNumber, Row, Select, type GetProp } from "antd"
import { useSubmit } from "react-router"
import type { Role } from "../../../../api/generated/prisma"
import LABELS from "@labels"
import { UserForm, type FormShape } from "./UserForm"

interface CreateNewPartnerModalContentProps {}


export default function CreateNewPartnerModalContent({}: CreateNewPartnerModalContentProps) {
  const [form] = Form.useForm<FormShape>()
  const submit = useSubmit();

  const onFinish: GetProp<typeof Form<FormShape>, "onFinish"> = async values => {
    await submit(values, {method: "POST", encType: "application/json"})
  }
  
  return (
    <Form
      form={form}
      onFinish={onFinish}
      style={{ overflowY: "auto", overflowX: "hidden", paddingRight: 6 }}
      initialValues={{
        role: "PARTNER"
      }}
      layout="vertical"

    >
      <UserForm mode="new" />
      <Divider />
      <Flex justify="end">
        <Button type="primary" htmlType="submit">{LABELS.partnersPage.createModal.submit}</Button>
      </Flex>
    </Form>
  )
}


