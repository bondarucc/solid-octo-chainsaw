import { Col, DatePicker, Form, InputNumber, Row, Select, Space, type SelectProps } from "antd"
import type { Dayjs } from "dayjs"
import dayjs from "dayjs"
import type { Currency, PackageType, Region } from "../../../../../api/generated/prisma"
import LABELS from "@labels"

const pkgTypeOptions: SelectProps["options"] = [
  {
    label: LABELS.pkgType.PREMIUM,
    value: "PREMIUM"
  }
] satisfies {label: string, value: PackageType}[]

const currOptions: SelectProps["options"] = [
  {
    label: "EUR",
    value: "EUR"
  }
]

const regionOptions: SelectProps["options"] = [
  {
    label: LABELS.region.EU,
    value: "EU"
  },
  {
    label: LABELS.region.USA_CANADA,
    value: "USA_CANADA"
  }
] satisfies {label: string, value: Region}[]

interface Props {
  mode: "new" | "view" | "edit"
}

const pkgFormPaths = {
  region: "region",
  pkgType: "pkgType",
  activationPeriod: "activationPeriod",
  paymentAmount: "paymentAmount",
  paymentDate: "paymentDate",
  paymentCurrency: "paymentCurrency",
} as const

export type PkgFormShape = {
  [pkgFormPaths.region]: Region
  [pkgFormPaths.pkgType]: PackageType
  [pkgFormPaths.activationPeriod]: [Dayjs, Dayjs]
  [pkgFormPaths.paymentAmount]: number
  [pkgFormPaths.paymentDate]: Dayjs
  [pkgFormPaths.paymentCurrency]: Currency
}



export default function CreatePkgForm() {
  return (
    <>
      <Row gutter={20}>
        <Col span={12}>
          <Form.Item name={pkgFormPaths.region} label={LABELS.models.sub.region} >
            <Select options={regionOptions} placeholder={LABELS.subsPage.createModal.pkg.selectPlaceholder} />
          </Form.Item>

        </Col>
        <Col span={12}>
          <Form.Item name={pkgFormPaths.pkgType} label={LABELS.subsPage.createModal.pkg.type}>
            <Select options={pkgTypeOptions} />
          </Form.Item>

        </Col>
        <Col span={12}>
          <Space.Compact block style={{ alignItems: "end" }}>
            <Form.Item name={pkgFormPaths.paymentAmount} style={{ flexGrow: 1 }} label={LABELS.subsPage.payment.amount} rules={[{ required: true }]}>
              <InputNumber
                min={0}
                style={{ width: "100%" }}
                controls={false}
                mode="spinner"
                precision={2}
              />
            </Form.Item>
            <Form.Item name={pkgFormPaths.paymentCurrency} rules={[{ required: true }]}>
              <Select options={currOptions} style={{ minWidth: "80px" }} />
            </Form.Item>

          </Space.Compact>
        </Col>

        <Col span={12}>
          <Form.Item
            name={pkgFormPaths.paymentDate}
            label={LABELS.subsPage.payment.date}
            rules={[{ required: true }]}

          >
            <DatePicker
              
              allowClear={false}
              format="DD-MM-YYYY"
              placeholder={LABELS.subsPage.payment.datePlaceholder}
              style={{ width: "100%" }}
              maxDate={dayjs()}
            />
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item
            name={pkgFormPaths.activationPeriod}
            label={LABELS.subsPage.createModal.pkg.activationPeriod}
            rules={[{ required: true }]}
          >
            <DatePicker.RangePicker allowClear={false} style={{ width: "100%" }} format="DD-MM-YYYY" placeholder={[...LABELS.dateRangePlaceholders]} />
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}
