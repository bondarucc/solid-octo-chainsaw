import { Col, Form, Input, Row } from "antd";
import AttractorSelector, { type AttractorFormShape } from "./AttractorSelector";
import LABELS from "@labels";

interface CreateSubFormProps {
  mode: "new" | "edit"
}

const subFormPaths = {
  externalId: "externalId",
  login: "login",
  pwd: "pwd",
  epg: "epg",
  m3uPlaylist: "m3uPlaylist",
  media: "media",
  publicKey: "publicKey",
  note: "note"
} as const

export type SubFormShape = AttractorFormShape & {
  [k in typeof subFormPaths[keyof typeof subFormPaths]]: string
}

export default function SubForm({ mode }: CreateSubFormProps) {
  return (
    <Row gutter={20}>
      <Col span={12}>
        <Form.Item
          name={subFormPaths.externalId}
          label={LABELS.models.sub.externalId}
          rules={[{ required: true }]}
        >
          <Input disabled={mode !== "new"} />
        </Form.Item>
      </Col>
      <Col span={12}>
        <AttractorSelector mode={mode} />
      </Col>
      <Col span={12}>
        <Form.Item name={subFormPaths.login} label={LABELS.models.sub.login}>
          <Input />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name={subFormPaths.pwd} label={LABELS.models.sub.pwd}>
          <Input.Password />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name={subFormPaths.epg} label={LABELS.models.sub.epg}>
          <Input />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name={subFormPaths.m3uPlaylist} label={LABELS.models.sub.m3uPlaylist}>
          <Input />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name={subFormPaths.media} label={LABELS.models.sub.media}>
          <Input />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name={subFormPaths.publicKey} label={LABELS.models.sub.publicKey}>
          <Input  />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item name={subFormPaths.note} label={LABELS.models.sub.note}>
          <Input.TextArea autoSize={{ minRows: 2, maxRows: 6 }} />
        </Form.Item>
      </Col>
    </Row>
  )
}
