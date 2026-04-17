import { Col, Form, Input, Row, Select } from "antd";
import type { CreateSubFormShape } from "./types.ts";

export default function CreateUserForm({ prefix }: { prefix: string[] }) {
  // const currentUserValues: CreateSubFormShape["user"] = Form.useWatch("user")
  // const required: boolean = !!(currentUserValues?.pwd || currentUserValues?.login)
  return (
    <>
      <Row gutter={20}>
        <Col span={12}>
          <Form.Item
            label="Логин"
            name={[...prefix, "login"]}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item 
            label="Пароль" 
            name={[...prefix, "pwd"]} 
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Роль" name={[...prefix, "role"]} rules={[{ required: true }]} >

            <Select
              options={[
                { value: "ADMIN", label: "Админ" },
                { value: "PARTNER", label: "Партнер" }
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}