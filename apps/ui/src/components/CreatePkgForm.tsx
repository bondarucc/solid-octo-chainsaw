import { Col, DatePicker, Form, InputNumber, Row, Select, Space, type SelectProps } from "antd"
import { Currency, PackageType, Region } from "../../../api/generated/prisma/browser"
import type { Dayjs } from "dayjs"
import dayjs from "dayjs"
import useFormInstance from "antd/es/form/hooks/useFormInstance"
import { useCallback } from "react"
import { useWatch } from "antd/es/form/Form"

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

const regionOptions: SelectProps["options"] = [
  {
    label: Region.EU,
    value: Region.EU
  },
  {
    label: "USA/CANADA",
    value: Region.USA_CANADA
  }
]



export default function CreatePkgForm({ prefix }: { prefix: string[] }) {
  const form = useFormInstance()
  const currentRegion = useWatch([...prefix, "region"])
  const regionOnChange = useCallback<NonNullable<SelectProps["onChange"]>>(value => {
    if (value === Region.EU) {
      form.setFieldValue([...prefix, "pkgType"], PackageType.PREMIUM)
      form.setFieldValue([...prefix, "paymentAmount"], 120)
      form.setFieldValue([...prefix, "paymentCurr"], Currency.EUR)

    } else {
      form.resetFields([[...prefix, "pkgType"], [...prefix, "paymentAmount"]])
      form.setFieldValue([...prefix, "paymentCurr"], Currency.USD)
    }

  }, [form])

  const onPkgTypeChange = useCallback<NonNullable<SelectProps["onChange"]>>((value) => {
    let defaultPaymentAmount: number
    if (value === PackageType.PREMIUM) {
      defaultPaymentAmount = currentRegion === Region.EU ? 120 : 180
    } else defaultPaymentAmount = 140
    form.setFieldValue([...prefix, "paymentAmount"], defaultPaymentAmount)

  }, [form, currentRegion])

  const pkgTypeDisabled = !currentRegion || currentRegion === Region.EU

  return (
    <>

      <Row gutter={20}>
        <Col span={12}>
          <Form.Item name={[...prefix, "region"]} label="Регион" >
            <Select options={regionOptions} placeholder="Выбрать..." onChange={regionOnChange} />
          </Form.Item>

        </Col>
        <Col span={12}>
          <Form.Item name={[...prefix, "pkgType"]} label="Тип">
            <Select options={pkgTypeOptions} onChange={onPkgTypeChange} placeholder="Выбрать..." disabled={pkgTypeDisabled} />
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

        <Col span={12}>
          <Form.Item
            name={[...prefix, "paymentDate"]}
            label="Дата оплаты"
            normalize={(v: Dayjs) => v && v.format("YYYY-MM-DD")}
            getValueProps={(v?: string) => ({ value: v && dayjs(v) })}
          >
            <DatePicker format="DD-MM-YYYY" placeholder="Выбрать дату" style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item
            name={[...prefix, "activationPeriod"]}
            label="Активен"
            rules={[{ required: true }]}
            normalize={(fromToDate: [Dayjs, Dayjs] | null) => fromToDate && fromToDate.map(date => date.format("YYYY-MM-DD"))}
            getValueProps={(fromToDate: [string, string] | null) => ({ value: fromToDate && fromToDate.map(date => dayjs(date)) })}
          >
            <DatePicker.RangePicker style={{ width: "100%" }} format="DD-MM-YYYY" placeholder={["От", "До"]} />
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}