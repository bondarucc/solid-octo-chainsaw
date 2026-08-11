import type { CreateSubRequestBody } from "@types"
import { Divider, Form, notification, Typography, type GetProp } from "antd"
import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { useActionData, useNavigate, useNavigation, useSubmit, type ActionFunctionArgs } from "react-router"
import { createSub } from "../../../api/api.ts"
import CreatePkgForm, { type PkgFormShape } from "./CreatePkgForm.tsx"
import SubForm, { type SubFormShape } from "./SubForm.tsx"
import { LocalModal } from "../../LocalModal.tsx"
import LABELS from "@labels"

export type FormShape = PkgFormShape & SubFormShape

const formInitialValues: Partial<FormShape> = {
  paymentAmount: 120,
  paymentCurrency: "EUR",
  pkgType: "PREMIUM",
  paymentDate: dayjs(),
  activationPeriod: [dayjs(), dayjs().add(1, "y")]
}

export const createSubAction = async ({request}: ActionFunctionArgs) => {
  return createSub(await request.json())
}

function transform({ attractor, attractorRewardType, activationPeriod, paymentAmount, paymentCurrency, paymentDate, ...rest }: FormShape): CreateSubRequestBody {
  return {
    attractor: attractor
      ? { login: attractor, rewardType: attractorRewardType }
      : undefined,
    startDate: activationPeriod[0].toISOString(),
    endDate: activationPeriod[1].toISOString(),
    payment: {
      amount: paymentAmount,
      currency: paymentCurrency,
      date: paymentDate.toISOString()
    },
    ...rest
  }
}

export default function CreateSubModalContent() {
  const [form] = Form.useForm<FormShape>()
  const [modalOpen, setModalOpen] = useState<boolean>(true)
  const navigate = useNavigate()
  const submit = useSubmit()
  const { state } = useNavigation()
  const isSubmitting = state === "submitting"
  const actionData = useActionData<typeof createSubAction>()

  function closeModal() {
    setModalOpen(false)
  }

  const onFinish: GetProp<typeof Form<FormShape>, "onFinish"> = formValues => {
    submit(transform(formValues), { method: "POST", encType: "application/json" })
  }

  useEffect(() => {
    if (actionData) {
      if ("error" in actionData) {
        notification.error({
          showProgress: true,
          closable: true,
          title: LABELS.subsPage.operationFailed
        })
      } else {
        notification.success({
          showProgress: true,
          closable: true,
          title: LABELS.subsPage.createModal.success,
        })
        closeModal()
      }
    }
  }, [actionData])

  return (
    <LocalModal
      open={modalOpen}
      onCancel={closeModal}
      afterOpenChange={isOpen => !isOpen && navigate("/subs")}
      title={LABELS.subsPage.createModal.title}
      footer={originNode => originNode}
      okButtonProps={{ loading: isSubmitting }}
      okText={LABELS.subsPage.create}
      onOk={() => form.submit()}
      cancelText={LABELS.subsPage.cancel}
    >
      <Form
        form={form}
        onFinish={onFinish}
        style={{ overflowY: "auto", overflowX: "hidden", paddingRight: 6 }}
        validateMessages={{
          required: LABELS.formValidation.messages.required
        }}
        initialValues={formInitialValues}
        layout="vertical"
      >
        <SubForm mode="new" />

        <Divider />
        <Typography.Title level={5}>{LABELS.subsPage.createModal.pkgSectionTitle}</Typography.Title>
        <CreatePkgForm />

        <Divider />
      </Form>
    </LocalModal>
  )
}
