import { Col, Form, Input, Row, Select } from "antd";
import { Role } from "../../../api/generated/prisma/browser.ts";
import type { CreateSubFormShape } from "./types.ts";

export default function CreateUserForm({ prefix }: { prefix: string[] }) {
  const currentUserValues: CreateSubFormShape["user"] = Form.useWatch("user")
  const required: boolean = !!(currentUserValues?.pwd || currentUserValues?.login)
  return (
    <>
      <Row gutter={20}>
        <Col span={12}>
          <Form.Item
            label="Логин"
            name={[...prefix, "login"]}
            rules={[{ required }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Пароль" name={[...prefix, "pwd"]} rules={[{ required }]}>
            <Input.Password />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Роль" name={[...prefix, "role"]} >

            <Select
              options={[
                { value: Role.ADMIN, label: "Админ" },
                { value: Role.PARTNER, label: "Партнер" }
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}