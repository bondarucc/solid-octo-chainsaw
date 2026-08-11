import { useActionState, useEffect, useState } from "react";
import { LocalModal } from "../LocalModal";
import { useActionData, useNavigate, useNavigation, useParams, useRouteLoaderData, useSubmit, type ActionFunctionArgs } from "react-router";
import { Form, type FormProps } from "antd";
import { UserForm, type FormShape } from "./UserForm";
import type { usersLoader } from "./PartnersPage";
import format from "string-template";
import LABELS from "@labels";
import { doUpdateUser } from "../../../src/api/api";


export async function editPartnerAction({params, request}: ActionFunctionArgs) {
  if (!params.login) return
  const updatedUser = await doUpdateUser(params.login, await request.json());
  if ("error" in updatedUser) throw new Error(updatedUser.error)
  return updatedUser
}

export function EditPartnerModalContent() {
  const [form] = Form.useForm<FormShape>()
  // const useActionData() \
  const actionData = useActionData<typeof editPartnerAction>()
  const [modalOpen, setModalOpen] = useState<boolean>(true)
  const { users } = useRouteLoaderData<typeof usersLoader>("partners") ?? {}
  const { login } = useParams()
  const navigate = useNavigate()
  const submit = useSubmit()
  const { state } = useNavigation()
  const isSubmitting = state === "submitting"

  const userInitialData = users && users.find(user => user.login === login)

  if (!userInitialData) return

  function closeModal() {
    setModalOpen(false)
  }

  const onFinish: FormProps<FormShape>["onFinish"] = function(v) {
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
        title={format(LABELS.partnersPage.editModal.title, {login})}
        footer={originNode => originNode}
        okText={LABELS.saveButtonText}
        onOk={() => form.submit()}
        okButtonProps={{loading: isSubmitting}}
      >
        <Form<FormShape>
          form={form}
          onFinish={onFinish}
          style={{ overflowY: "auto", overflowX: "hidden", paddingRight: 6 }}
          initialValues={userInitialData}
          layout="vertical"
        >
          <UserForm mode="edit" />
        </Form>
      </LocalModal>
    </>
  )
}