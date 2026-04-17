import { Col, DatePicker, Form, InputNumber, Row, Select, Space, type SelectProps } from "antd"
import { useWatch } from "antd/es/form/Form"
import useFormInstance from "antd/es/form/hooks/useFormInstance"
import type { Dayjs } from "dayjs"
import dayjs from "dayjs"
import { useCallback } from "react"

const pkgTypeOptions: SelectProps["options"] = [
  {
    label: "4K",
    value: "PREMIUM" as const
    // value: PackageType.PREMIUM
  },
  {
    label: "HD",
    value: "REGULAR" as const
    // value: PackageType.REGULAR
  }
]

const currOptions: SelectProps["options"] = [
  {
    label: "EUR",
    value: "EUR"
  },
  {
    label: "USD",
    value: "USD"
  }
]

const regionOptions: SelectProps["options"] = [
  {
    label: "EU",
    value: "EU"
  },
  {
    label: "USA/CANADA",
    value: "USA_CANADA"
  }
]

interface CreatePkgForm {
  prefix: string[],
  mode: "new" | "view" | "edit"
}



export default function CreatePkgForm({ prefix, mode }: CreatePkgForm) {
  const form = useFormInstance()
  const currentRegion = useWatch([...prefix, "region"])
  const regionOnChange = useCallback<NonNullable<SelectProps["onChange"]>>(value => {
    if (value === "EU") {
      form.setFieldValue([...prefix, "pkgType"], "PREMIUM")
      form.setFieldValue([...prefix, "paymentAmount"], 120)
      form.setFieldValue([...prefix, "paymentCurr"], "EUR")

    } else {
      form.resetFields([[...prefix, "pkgType"], [...prefix, "paymentAmount"]])
      form.setFieldValue([...prefix, "paymentCurr"], "USD")
    }

  }, [form, prefix])

  const onPkgTypeChange = useCallback<NonNullable<SelectProps["onChange"]>>((value) => {
    let defaultPaymentAmount: number
    if (value === "PREMIUM") {
      defaultPaymentAmount = currentRegion === "EU" ? 120 : 180
    } else defaultPaymentAmount = 140
    form.setFieldValue([...prefix, "paymentAmount"], defaultPaymentAmount)

  }, [form, currentRegion])

  const pkgTypeDisabled = mode === "view" || !currentRegion || currentRegion === "EU"

  return (
    <>

      <Row gutter={20}>
        <Col span={12}>
          <Form.Item name={[...prefix, "region"]} label="Регион" >
            <Select options={regionOptions} disabled={mode === "view"} placeholder="Выбрать..." onChange={regionOnChange} />
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
                disabled={mode === "view"}
              />
            </Form.Item>
            <Form.Item name={[...prefix, "paymentCurr"]} >
              <Select disabled={mode === "view"} options={currOptions} style={{ minWidth: "80px" }} />
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
            <DatePicker disabled={mode === "view"} format="DD-MM-YYYY" placeholder="Выбрать дату" style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item
            name={[...prefix, "activationPeriod"]}
            label="Активен"
            rules={[{ required: mode !== "view" }]}
            normalize={(fromToDate: [Dayjs, Dayjs] | null) => fromToDate && fromToDate.map(date => date.format("YYYY-MM-DD"))}
            getValueProps={(fromToDate: [string, string] | null) => ({ value: fromToDate && fromToDate.map(date => dayjs(date)) })}
          >
            <DatePicker.RangePicker allowClear={false} disabled={mode === "view"} style={{ width: "100%" }} format="DD-MM-YYYY" placeholder={["От", "До"]} />
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}