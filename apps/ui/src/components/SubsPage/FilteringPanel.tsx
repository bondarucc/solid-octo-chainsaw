import { CloseCircleOutlined, SearchOutlined } from "@ant-design/icons";
import type { GetProp } from 'antd';
import { Button, Col, ConfigProvider, Divider, Form, Input, Row, Segmented, type FormProps } from "antd";
import { useCallback, type PropsWithChildren } from "react";
import type { FilterSubsList } from "@types";
import { useSearchParams } from "react-router";
import LABELS from "@labels";

const formPaths = {
  externalId: "externalId",
  attractor: "attractorUser",
  pkgStatus: "pkgStatus"
} as const satisfies {[key:string]: keyof FilterSubsList}

const { Item } = Form

interface FilteringPanelProps {
}

const pkgStatusOptions: GetProp<typeof Segmented<FilterSubsList["pkgStatus"]>, "options"> = [
  {
    label: LABELS.subsPage.filtering.pkgStatus.ACTIVE,
    value: "ACTIVE"
  },
  {
    label: LABELS.subsPage.filtering.pkgStatus.EXPIRED,
    value: "EXPIRED"
  }
]

export default function FilteringPanel({ }: FilteringPanelProps) {
  const [_, setSearchParams] = useSearchParams()

  const onSearchClick = useCallback<GetProp<FormProps<FilterSubsList>, "onFinish">>(values => {
    const normalizedValues = Object.entries(values).filter(v => Boolean(v[1]))
    setSearchParams(normalizedValues)
    
  }, [setSearchParams])

  return (
    <Form<FilterSubsList> onFinish={onSearchClick} onReset={() => setSearchParams()}>
      <div style={{ padding: 6, borderRadius: 12, border: "1px solid #ddd", display: "flex", flexDirection: "column", gap: 6 }}>
        <TextSearchField name={formPaths.externalId} label={LABELS.models.sub.externalId} />

        <TextSearchField name={formPaths.attractor} label={LABELS.subsPage.filtering.attractor} />


        <SegmentedSelectField label={LABELS.subsPage.filtering.pkgStatus.label} name={formPaths.pkgStatus} options={pkgStatusOptions} />

        <Divider orientation="horizontal" style={{ marginBlock: 6 }} />

        <Row gutter={6}>
          <Col span={12}>
            <Button block type="dashed" htmlType="reset">{LABELS.subsPage.filtering.clear}</Button>
          </Col>
          <Col span={12}>
            <Button
              block
              type="primary"
              icon={<SearchOutlined />}
              htmlType="submit"
            >
              {LABELS.subsPage.filtering.search}
            </Button>
          </Col>
        </Row>
      </div >
    </Form>
  )
}

type PillProps = PropsWithChildren<
  {
    label: string
    name: string
  }
>

function Pill({ label, name, children }: PillProps) {
  const form = Form.useFormInstance()

  const clear = useCallback(() => {
    form.resetFields([name])
  }, [form])

  return (
    <div style={{ backgroundColor: "rgb(0, 0, 0, 0.1)", display: "flex", alignItems: "center", gap: "8px", border: "1px solid grey", borderRadius: "9999px", paddingLeft: "5px", overflowX: "hidden", lineHeight: 1.8 }}>
      <Button onClick={clear} icon={<CloseCircleOutlined />} danger style={{ backgroundColor: "transparent", height: "auto", border: "none", width: "auto" }} />

      <span style={{ whiteSpace: "nowrap", color: "grey", fontSize: 14 }}>{label}</span>

      {children}
    </div>
  )
}

function TextSearchField({ name, label }: { name: string, label: string }) {
  return (
    <Pill label={label} name={name}>
      <div style={{ backgroundColor: "white", flexGrow: "1", paddingInline: 5 }}>
        <Item
          name={name}
          noStyle
        >
          <Input
            style={{ color: "#333", width: "95%", border: "none", boxShadow: "none", padding: 0 }}
          />
        </Item>
      </div>
    </Pill>
  )
}

type SegmentedSelectFieldProps = {
  options: GetProp<typeof Segmented, "options">
  name: string
  label: string
}

function SegmentedSelectField({ name, options, label }: SegmentedSelectFieldProps) {
  const form = Form.useFormInstance()
  const currentValue = Form.useWatch([name])

  const onSelect = useCallback<GetProp<typeof Segmented, "onChange">>(v => {
    form.setFieldValue(name, v)
  }, [form])

  return (
    <Pill label={label} name={name}>
      <div style={{ backgroundColor: "white", flexGrow: "1", paddingInline: 0 }}>
        <Item noStyle name={name} />
        <ConfigProvider theme={{ components: { Segmented: { itemSelectedBg: "rgb(0, 0, 0, 0.1)" } } }}>
          <Segmented
            options={options}
            value={currentValue ?? null}
            size="medium"
            block
            styles={{
              root: { borderRadius: 0, padding: 0, backgroundColor: "transparent" },
              item: { borderRadius: 0 }
            }}
            onChange={onSelect}
          />

        </ConfigProvider>
      </div>
    </Pill>
  )
}