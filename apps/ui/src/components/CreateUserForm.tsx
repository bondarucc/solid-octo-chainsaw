import { Col, Form, Input, Row, Select } from "antd";
import type { CreateSubFormShape } from "./types.ts";

interface CreateUserFormProps {
  prefix: string[]
  mode: "new" | "view" | "edit"
}

export default function CreateUserForm({ prefix, mode }: CreateUserFormProps) {
  // const currentUserValues: CreateSubFormShape["user"] = Form.useWatch("user")
  // const required: boolean = !!(currentUserValues?.pwd || currentUserValues?.login)
  return (
    <>
      <Row gutter={20}>
        <Col span={12}>
          <Form.Item
            label="Логин"
            name={[...prefix, "login"]}
            rules={[{ required: mode !== "view" }]}
          >
            <Input disabled={mode !== "new"}/>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item 
            label="Пароль" 
            name={[...prefix, "pwd"]} 
            rules={[{ required: mode === "new" }]}
          >
            <Input.Password disabled={mode == "view"}/>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Роль" name={[...prefix, "role"]} rules={[{ required: mode !== "view" }]} >

            <Select
              options={[
                { value: "ADMIN", label: "Админ" },
                { value: "PARTNER", label: "Партнер"}
              ]}
              disabled={mode == "view"}
            />
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}