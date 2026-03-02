import { Col, DatePicker, Form, InputNumber, Row, Select, Space, type SelectProps } from "antd"
import { Currency, PackageType } from "../../../api/generated/prisma/browser"
import type { Dayjs } from "dayjs"
import dayjs from "dayjs"

const pkgTypeOptions: SelectProps["options"] = [
  {
    label: "4K",
    value: PackageType.PREMIUM
  },
  {
    label: "HD",
    value: PackageType.REGULAR
  }
]

const currOptions: SelectProps["options"] = [
  {
    label: Currency.EUR,
    value: Currency.EUR
  },
  {
    label: Currency.USD,
    value: Currency.USD
  }
]



export default function CreatePkgForm({ prefix }: { prefix: string[] }) {
  return (
    <>

      <Row gutter={20}>
        <Col span={12}>
          <Form.Item name={[...prefix, "pkgType"]} label="Тип" >
            <Select options={pkgTypeOptions} placeholder="Выбрать..." />
          </Form.Item>

        </Col>
        <Col span={12}>
          <Space.Compact block style={{ alignItems: "end" }}>
            <Form.Item name={[...prefix, "paymentAmount"]} style={{ flexGrow: 1 }} label="Оплата">
              <InputNumber
                min={0}
                style={{ width: "100%" }}
                controls={false}
                mode="spinner"
                precision={0}

              />
            </Form.Item>
            <Form.Item name={[...prefix, "paymentCurr"]} >
              <Select options={currOptions} style={{ minWidth: "80px" }} />
            </Form.Item>

          </Space.Compact>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={16}>
          <Form.Item
            name={[...prefix, "activationPeriod"]}
            label="Активен"
            rules={[{ required: true }]}
            normalize={(fromToDate: [Dayjs, Dayjs] | null) => fromToDate && fromToDate.map(date => date.format("YYYY-MM-DD"))}
            getValueProps={(fromToDate: [string, string] | null) => ({ value: fromToDate && fromToDate.map(date => dayjs(date)) })}
          >
            <DatePicker.RangePicker style={{ width: "100%" }} format="DD-MM-YYYY" placeholder={["От", "До"]}/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name={[...prefix, "paymentDate"]}
            label="Дата оплаты"
            normalize={(v: Dayjs) => v && v.format("YYYY-MM-DD")}
            getValueProps={(v?: string) => ({ value: v && dayjs(v) })}
            
          >
            <DatePicker format="DD-MM-YYYY" placeholder="Выбрать дату"/>
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}