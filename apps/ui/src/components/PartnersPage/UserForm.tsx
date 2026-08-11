import LABELS from "@labels"
import type { CreateUserRequestBody } from "@types"
import { Col, Form, Input, InputNumber, Row, Select } from "antd"
import type { Role } from "../../../../api/generated/prisma"

export const formPaths = {
  login: "login",
  pwd: "pwd",
  role: "role",
  customMonetaryRewardAmount: "customMonetaryRewardAmount",
  note: "note"
} as const satisfies {[k: string]: keyof CreateUserRequestBody}

export type FormShape = {
  [formPaths.login]: string
  [formPaths.pwd]: string
  [formPaths.role]: Role
  [formPaths.customMonetaryRewardAmount]: number
  [formPaths.note]: string
}

interface CreateUserFormProps {
  mode: "new" | "edit"
}

export function UserForm({ mode }: CreateUserFormProps) {
  return (
    <>
      <Row gutter={20}>
        <Col span={12}>
          <Form.Item
            label={LABELS.models.partner.login}
            name={formPaths.login}
            rules={[{ required: true }]}
          >
            <Input disabled={mode === "edit"} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label={LABELS.models.partner.pwd}
            name={formPaths.pwd}
            rules={[{ required: mode === "new" }]}
          >
            <Input.Password />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label={LABELS.models.partner.role} name={formPaths.role} rules={[{ required: true }]} >
            <Select
              options={[
                { value: "ADMIN", label: LABELS.roles.ADMIN },
                { value: "PARTNER", label: LABELS.roles.PARTNER }
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label={LABELS.models.partner.customMonetaryRewardAmount} name={formPaths.customMonetaryRewardAmount}>
            <InputNumber prefix={"EUR"} style={{width: "100%"}} controls={false} precision={2}/>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label={LABELS.models.partner.note} name={formPaths.note}>
            <Input.TextArea autoSize={{ minRows: 2, maxRows: 6 }} />
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}