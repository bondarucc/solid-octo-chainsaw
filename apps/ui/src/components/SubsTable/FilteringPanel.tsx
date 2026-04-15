import { CloseCircleOutlined, SearchOutlined } from "@ant-design/icons";
import type { GetProp } from 'antd';
import { Button, Col, Form, Input, Row, type FormProps } from "antd";
import { useCallback } from "react";
import useSubsTableContext from "./hooks/useSubsTableContext.ts";

export type Filters = {
  externalId?: string
  login?: string,
  attractorId?: string
}

const { Item } = Form

interface FilteringPanelProps {
  onSearch: () => void
}

export default function FilteringPanel({ onSearch }: FilteringPanelProps) {
  const { filtersForm } = useSubsTableContext()

  const onSearchClick = useCallback<GetProp<FormProps<Filters>, "onFinish">>(() => {
    onSearch()
  }, [onSearch])

  return (
    <Form form={filtersForm} onFinish={onSearchClick} onReset={onSearch}>
      <div style={{ boxShadow: "0px 0px 5px grey", padding: 6, borderRadius: 12, }}>
        <Row gutter={["12px", "12px"]} style={{ marginBottom: 12 }}>
          <Pill label="Внешний ID" name="externalId" />
          <Pill label="Логин" name="login" />
          <Pill label="Реферал" name="attractorId" />
        </Row>

        <div style={{ maxWidth: 250 }}>
          <Row gutter={6}>
            <Col span={12}>
              <Button block type="dashed" htmlType="reset">Очистить</Button>
            </Col>
            <Col span={12}>
              <Button
                block
                type="primary"
                icon={<SearchOutlined />}
                htmlType="submit"
              >
                Поиск
              </Button>
            </Col>
          </Row>
        </div>

      </div >
    </Form>
  )
}

interface PillProps {
  label: string
  name: string
}

function Pill({ label, name }: PillProps) {
  const form = Form.useFormInstance()

  const clear = useCallback(() => {
    form.resetFields([name])
  }, [form])

  return (
    <Col xs={24} sm={12} md={8}>

      <div style={{ backgroundColor: "rgb(0, 0, 0, 0.1)", display: "flex", alignItems: "center", gap: "8px", border: "1px solid grey", borderRadius: "9999px", paddingLeft: "5px", overflowX: "hidden", lineHeight: 1.8 }}>
        <Button onClick={clear} icon={<CloseCircleOutlined />} danger style={{ backgroundColor: "transparent", height: "auto", border: "none", width: "auto" }} />

        <span style={{ whiteSpace: "nowrap", color: "grey", fontSize: 14 }}>{label}</span>

        <div style={{ backgroundColor: "white", flexGrow: "1", paddingInline: 5 }}>
          <Item
            name={name}
            noStyle
          >
            <Input

              // value={filters.externalId} 
              // onSearch={() => { setFilters(form.getFieldsValue()) }}
              // enterButton={false}
              // placeholder="..."

              // style={{ outline: "none", color: "var(--ant-blue)", width: "95%", border: "none" }}
              style={{ color: "var(--ant-blue)", width: "95%", border: "none", boxShadow: "none", padding: 0 }}
            />
          </Item>
        </div>
      </div>
    </Col>
  )
}