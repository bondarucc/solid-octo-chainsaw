import type { ExtendSubRequestBody } from "@types";
import { DatePicker, Col, Form, Row, Space, Select, InputNumber, type SelectProps, Flex, Button, type GetProp, Descriptions, Divider } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useCallback, useMemo, useState } from "react";
import type { SubItem } from "./SubsTable/SubsTable";
import type { Currency } from "../../../../api/generated/prisma";
import LABELS from "@labels";
import dateDisplayFormat from "../../../src/helpers/dateDisplayFormat";

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


const formPaths = {
  date: "date",
  amount: "amount",
  currency: "currency"
} as const satisfies { [key: string]: keyof ExtendSubRequestBody["paymentDetails"] }

export type SubExtensionFormShape = {
  [formPaths.date]: Dayjs,
  [formPaths.amount]: number,
  [formPaths.currency]: Currency
}

type Props = SubItem & {
  onCancel: () => any
  onSubmit: (values: SubExtensionFormShape) => any
}

export default function PkgPaidExtensionModalContent({ onSubmit, onCancel, endDate }: Props) {
  const [form] = Form.useForm<SubExtensionFormShape>()
  const [ loading, setLoading ] = useState<boolean>(false)


  const onFinish = useCallback<GetProp<typeof Form<SubExtensionFormShape>, "onFinish">>(async values => {
    setLoading(true)
    onSubmit(values)
  }, [onSubmit])

  const descItems = useMemo<GetProp<typeof Descriptions, "items">>(() => {
    const baseDate = new Date(Math.max(new Date().getTime(), new Date(endDate).getTime()))
    const newEndDate = dayjs(baseDate).add(1, "y")
    return [
      {
        span: "filled",
        label: LABELS.subsPage.extend.currentExpires,
        children: dateDisplayFormat(dayjs(endDate))
      },
      {
        span: "filled",
        label: LABELS.subsPage.extend.willExtendTo,
        children: dateDisplayFormat(newEndDate)
      },
    ]
  }, [])

  return (
    <Form<SubExtensionFormShape>
      layout="vertical"
      validateMessages={{
        required: LABELS.formValidation.messages.required
      }}
      onFinish={onFinish}
      initialValues={{
        [formPaths.currency]: "EUR",
        [formPaths.date]: dayjs()
      }}
      form={form}
    >

      <Row gutter={20}>
        <Col span={12}>
          <Space.Compact block style={{ alignItems: "end" }}>
            <Form.Item name={formPaths.amount} style={{ flexGrow: 1 }} label={LABELS.subsPage.payment.amount} rules={[{ required: true }]}>
              <InputNumber
                min={0}
                style={{ width: "100%" }}
                controls={false}
                mode="spinner"
                precision={0}
              />
            </Form.Item>
            <Form.Item name={formPaths.currency} rules={[{ required: true }]}>
              <Select options={currOptions} style={{ minWidth: "80px" }} />
            </Form.Item>

          </Space.Compact>
        </Col>

        <Col span={12}>
          <Form.Item
            name={formPaths.date}
            label={LABELS.subsPage.payment.date}
            normalize={(v: Dayjs) => v && v.format("YYYY-MM-DD")}
            getValueProps={(v?: string) => ({ value: v && dayjs(v) })}
            rules={[{ required: true }]}
          >
            <DatePicker format={dateDisplayFormat} placeholder={LABELS.subsPage.payment.datePlaceholder} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>

      <Descriptions size="small" items={descItems} style={{marginBottom: 24}} />

      <Divider />

      <Flex justify="end" gap={16}>
        <Button color="default" variant="filled" onClick={onCancel}>{LABELS.subsPage.cancel}</Button>
        <Button type="primary" htmlType="submit" loading={loading}>{LABELS.subsPage.extend.submit}</Button>
      </Flex>
    </Form>
  )
}
