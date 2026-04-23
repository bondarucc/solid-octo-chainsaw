import { CloseCircleOutlined, SearchOutlined } from "@ant-design/icons";
import type { GetProp } from 'antd';
import { Button, Col, ConfigProvider, Form, Input, Row, Segmented, type FormProps } from "antd";
import { useCallback, type PropsWithChildren } from "react";
import useSubsTableContext from "./hooks/useSubsTableContext.ts";

export type Filters = {
  externalId?: string
  login?: string,
  attractorId?: string,
  role?: "ADMIN" | "PARTNER" | "NONE"
}

const { Item } = Form

interface FilteringPanelProps {
  onSearch: () => void
}

const RoleFieldOptions: GetProp<typeof Segmented, "options"> = [
  {
    label: "Админ",
    value: "ADMIN"
  },
  {
    label: "Партнер",
    value: "PARTNER"
  },
  {
    label: "Абонент",
    value: "NONE"
  },
]

export default function FilteringPanel({ onSearch }: FilteringPanelProps) {
  const { filtersForm } = useSubsTableContext()

  const onSearchClick = useCallback<GetProp<FormProps<Filters>, "onFinish">>(() => {
    onSearch()
  }, [onSearch])

  return (
    <Form form={filtersForm} onFinish={onSearchClick} onReset={onSearch}>
      <div style={{ boxShadow: "0px 0px 5px grey", padding: 6, borderRadius: 12, maxWidth: 1000}}>
        <Row gutter={["12px", "12px"]} style={{ marginBottom: 12 }}>
          <Pill label="Внешний ID" name="externalId">
            <TextSearchField name="externalId" />
          </Pill>
          <Pill label="Логин" name="login">
            <TextSearchField name="login" />
          </Pill>
          <Pill label="Реферал" name="attractorId">
            <TextSearchField name="attractorId" />
          </Pill>

          <Pill label="Роль" name="role">
            <SegmentedSelectField name={["role"]} options={RoleFieldOptions} />
          </Pill>
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

type PillProps = PropsWithChildren & {
  label: string
  name: string
}

function Pill({ label, name, children }: PillProps) {
  const form = Form.useFormInstance()

  const clear = useCallback(() => {
    form.resetFields([name])
  }, [form])

  return (
    <Col xs={24} sm={12} md={8}>

      <div style={{ backgroundColor: "rgb(0, 0, 0, 0.1)", display: "flex", alignItems: "center", gap: "8px", border: "1px solid grey", borderRadius: "9999px", paddingLeft: "5px", overflowX: "hidden", lineHeight: 1.8 }}>
        <Button onClick={clear} icon={<CloseCircleOutlined />} danger style={{ backgroundColor: "transparent", height: "auto", border: "none", width: "auto" }} />

        <span style={{ whiteSpace: "nowrap", color: "grey", fontSize: 14 }}>{label}</span>

        {children}
      </div>
    </Col>
  )
}

function TextSearchField({ name }: { name: string }) {
  return (
    <div style={{ backgroundColor: "white", flexGrow: "1", paddingInline: 5 }}>
      <Item
        name={name}
        noStyle
      >
        <Input
          style={{ color: "var(--ant-blue)", width: "95%", border: "none", boxShadow: "none", padding: 0 }}
        />
      </Item>
    </div>
  )
}

type SegmentedSelectFieldProps = {
  options: GetProp<typeof Segmented, "options">
  name: string[]
}

function SegmentedSelectField({ name, options }: SegmentedSelectFieldProps) {
  const form = Form.useFormInstance()
  const currentValue = Form.useWatch(name)

  const onSelect = useCallback<GetProp<typeof Segmented, "onChange">>(v => {
    form.setFieldValue(name, v)
  }, [form])

  return (
    <div style={{ backgroundColor: "white", flexGrow: "1", paddingInline: 0 }}>
      <Item noStyle name={name} />
      <ConfigProvider theme={{components: {Segmented: {itemSelectedBg: "rgb(0, 0, 0, 0.1)"}} }}>
        <Segmented
          options={options}
          value={currentValue ?? null}
          size="medium"
          block
          styles={{ 
            root: { borderRadius: 0, padding: 0, backgroundColor: "transparent"},
            item: { borderRadius: 0 }
          }}
          onChange={onSelect}
        />

      </ConfigProvider>
    </div>
  )
}