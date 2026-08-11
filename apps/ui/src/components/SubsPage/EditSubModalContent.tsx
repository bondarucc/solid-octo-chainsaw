import { useActionData, useNavigate, useNavigation, useParams, useRouteLoaderData, useSubmit, type ActionFunctionArgs } from "react-router";
import type { SubFormShape } from "./NewSubPage/SubForm";
import { ConfigProvider, DatePicker, Form, type FormProps } from "antd";
import { useEffect, useState } from "react";
import type { subsLoader } from "./SubsPage";
import { LocalModal } from "../LocalModal";
import format from "string-template";
import LABELS from "@labels";
import SubForm from "./NewSubPage/SubForm";
import { attractorFormPaths } from "./NewSubPage/AttractorSelector";
import dayjs, { Dayjs } from "dayjs";
import dateDisplayFormat from "../../../src/helpers/dateDisplayFormat";
import { doUpdateSub } from "../../../src/api/api";

export async function editSubAction({ params, request }: ActionFunctionArgs) {
  if (!params.externalId) return  
  const updatedSub = await doUpdateSub(params.externalId, await request.json());
  if ("error" in updatedSub) throw new Error(updatedSub.error)
  return updatedSub
}

type FormShape = SubFormShape

export function EditSubModalContent() {
  const [form] = Form.useForm<FormShape>()
  // const useActionData() \
  const { externalId } = useParams()
  const actionData = useActionData<typeof editSubAction>()
  const [modalOpen, setModalOpen] = useState<boolean>(true)
  const sub = useRouteLoaderData<typeof subsLoader>("subs")?.subs.find(sub => sub.externalId === externalId)
  const navigate = useNavigate()
  const submit = useSubmit()
  const { state } = useNavigation()
  const isSubmitting = state === "submitting"

  const formInitialData = sub && {
    ...sub,
    [attractorFormPaths.attractor]: sub.referalDetails?.attractorUserId
  }


  function closeModal() {
    setModalOpen(false)
  }

  const onFinish: FormProps<FormShape>["onFinish"] = function (v) {
    submit(v, { method: "POST", encType: "application/json" })
  }

  useEffect(() => {
    if (actionData) {
      setModalOpen(false)
    }
  }, [actionData])

  return (
    <>
      <LocalModal
        open={modalOpen}
        onCancel={closeModal}
        afterOpenChange={isOpen => !isOpen && navigate("..")}
        title={format(LABELS.subsPage.editModal.title, { externalId })}
        footer={originNode => originNode}
        okText={LABELS.saveButtonText}
        onOk={() => form.submit()}
        okButtonProps={{ loading: isSubmitting }}
      >
        <Form<FormShape>
          form={form}
          onFinish={onFinish}
          style={{ overflowY: "auto", overflowX: "hidden", paddingRight: 6 }}
          initialValues={formInitialData}
          layout="vertical"
        >
          <SubForm mode="edit" />
          <Form.Item
            label={LABELS.subsPage.editModal.pkgEndDate}
            name="endDate"
            normalize={(v: Dayjs) => v.toISOString()}
            getValueProps={v => ({ value: dayjs(v) })}
          >
            <DatePicker allowClear={false} format={dateDisplayFormat} />
          </Form.Item>
        </Form>
      </LocalModal>
    </>
  )
}