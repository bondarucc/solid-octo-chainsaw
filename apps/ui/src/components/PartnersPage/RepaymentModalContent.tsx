import { Alert, Button, Divider, Flex, Form, InputNumber } from "antd";
import type { User } from "../../../../api/generated/prisma/index";
import { useState } from "react";
import LABELS from "@labels";
import format from "string-template";

type RepaymentModalContentProps = Pick<User, "login" | "totalPayableReward"> & {
  onCancel: () => any
  onOk: (amount: number) => any
}

type FormShape = { amount: number }

export default function RepaymentModalContent({ totalPayableReward, onCancel, onOk }: RepaymentModalContentProps) {
  const [ loading, setLoading ] = useState<boolean>(false)
  function onFinish({amount}: FormShape) {
    setLoading(true)    
    onOk(amount)
  }

  return (
    <Form<FormShape>
      onFinish={onFinish}
      initialValues={{amount: totalPayableReward}}
    >
      <Form.Item
        noStyle
        name="amount"
        rules={[
          { required: true },
          { max: totalPayableReward, type: "number" }
        ]}
      >
        <InputNumber style={{ width: 110 }} prefix="EUR" controls={false} precision={2} />
      </Form.Item>
      <p style={{ fontSize: 12, color: "#666" }}>
        <i>{format(LABELS.partnersPage.repayment.form.hint, { amount: totalPayableReward.toFixed(2) })}</i>
      </p>
      <Divider />
      <Flex justify="end" gap={16}>
        <Button color="default" variant="filled" onClick={onCancel}>{LABELS.partnersPage.repayment.form.cancel}</Button>
        <Button type="primary" htmlType="submit" loading={loading}>{LABELS.partnersPage.repayment.form.submit}</Button>
      </Flex>
    </Form>
  )

}
