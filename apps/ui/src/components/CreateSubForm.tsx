import { Col, Form, Input, Row } from "antd";
import AttractorSelector from "./AttractorSelector";

interface CreateSubFormProps {
  mode: "new" | "view" | "edit"
}

export default function CreateSubForm({mode}: CreateSubFormProps) {
  return <>
    <Row gutter={20}>
      <Col span={12}>
        <Form.Item
          name="externalId"
          label="Сторонний ID"
          rules={[{ required: mode !== "view" }]}
        >
          <Input disabled={mode !== "new"} />
        </Form.Item>
      </Col>
      <Col span={12}>
        <AttractorSelector disabled={mode !== "new"}/>
      </Col>
      <Col span={12}>
        <Form.Item name="login" label="Логин">
          <Input disabled={mode === "view"}/>
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name="pwd" label="Пароль">
          <Input.Password disabled={mode === "view"}/>
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name="epg" label="EPG">
          <Input disabled={mode === "view"}/>
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name="m3uPlaylist" label="M3U">
          <Input disabled={mode === "view"}/>
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name="media" label="Медиатека">
          <Input disabled={mode === "view"}/>
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name="publicKey" label="Публичный ключ">
          <Input disabled={mode === "view"}/>
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item name="note" label="Заметки">
          <Input.TextArea disabled={mode === "view"} autoSize={{ minRows: 2, maxRows: 6 }} />
        </Form.Item>
      </Col>

    </Row>
  </>
}