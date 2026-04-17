import { CloseCircleOutlined, EditOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, Typography } from "antd";
import { useCallback, useEffect, useState } from "react";
import CreatePkgForm from "./CreatePkgForm";
import { doUpdateSubDetails, getSubDetails } from "../api/api";
import dayjs from "dayjs";
import CreateSubForm from "./CreateSubForm";
import type { Package, Sub } from "../../../api/generated/prisma";
import type { ReplaceDatesWithStrings } from "../helpers/types";
import type { SubUpdateRequestBody } from "../../../api/src/api/sub/types";
import useSubsTableContext from "./SubsTable/hooks/useSubsTableContext";

interface ViewEditSubModalContentProps {
  subExternalId: string
  refresh: () => void
}

type FormShape = Pick<
  Sub,
  "login" | "pwd" | "epg" | "m3uPlaylist" | "media" | "publicKey" | "note"
> & {
  package: ReplaceDatesWithStrings<Pick<Package, "paymentAmount" | "paymentCurr" | "paymentDate" | "pkgType" | "region">> & {
    activationPeriod: [string | null, string | null] | null
  }
  reason: string | null
}

function formValuesToRequestBody(formValues: FormShape): SubUpdateRequestBody {
  const { epg, login, m3uPlaylist, media, note, package: pkg, publicKey, pwd, reason } = formValues
  const { activationPeriod, paymentAmount, paymentCurr, paymentDate, pkgType, region } = pkg
  if (!activationPeriod || !activationPeriod[0] || !activationPeriod[1]) throw null
  //trim
  return {
    epg,
    login,
    pwd,
    m3uPlaylist,
    media,
    note,
    publicKey,
    reason,
    package: {
      paymentAmount: paymentAmount ?? null,
      paymentCurr: paymentCurr ?? null,
      paymentDate,
      pkgType: pkgType ?? null,
      region: region ?? null,
      startDate: activationPeriod[0],
      endDate: activationPeriod[1]
    }
  }


}

export default function ViewEditSubModalContent({ subExternalId, refresh }: ViewEditSubModalContentProps) {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [form] = Form.useForm<FormShape>()
  const { closeModal } = useSubsTableContext()

  const [subDetails, setSubDetails] = useState<Awaited<ReturnType<typeof getSubDetails>>>()

  const resetForm = useCallback((sub: typeof subDetails) => {
    form.setFieldsValue({
      ...sub,
      package: {
        ...sub?.package,
        activationPeriod: [
          sub?.package?.startDate ?? null,
          sub?.package?.endDate ?? null
        ]
      }
    })
  }, [form])


  const onCancel = useCallback(() => {
    setEditMode(false)
    resetForm(subDetails)

  }, [resetForm, setEditMode, subDetails])

  const onSubmit = useCallback(async () => {
    const requestBody = formValuesToRequestBody(form.getFieldsValue())
    console.log(requestBody);
    await doUpdateSubDetails(subExternalId, requestBody)
    closeModal()
    refresh()
  }, [form, subExternalId])

  useEffect(() => {
    getSubDetails(subExternalId).then(sub => {
      setSubDetails(sub)
      resetForm(sub)

    })
  }, [subExternalId, setSubDetails, resetForm])

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onSubmit}
      style={{ display: "contents" }}
    >
      <header style={{ marginBottom: 24, display: "inline-flex", alignItems: "center", gap: 12 }}>

        <Typography.Title style={{ marginTop: 8 }} level={5}>{subExternalId}</Typography.Title>
        {!editMode && <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={() => setEditMode(true)}

        >
          Править
        </Button>}

        {editMode && <Button
          icon={<CloseCircleOutlined />}
          onClick={onCancel}
        >
          Отмена
        </Button>}

        {editMode && <Button
          icon={<SaveOutlined />}
          type="primary"
          htmlType="submit"


        >
          Сохранить
        </Button>}
      </header>

      <div style={{ overflowY: "auto", overflowX: "hidden", paddingRight: 6 }}>

        <Form.Item
          name="reason"
          label="Пояснение"
          style={{
            maxHeight: editMode ? 150 : 0,
            overflow: "hidden",
            transition: "all 0.5s ease-in-out",
            marginBottom: editMode ? 24 : 0
          }}
          
        >
          <Input.TextArea autoSize={{ minRows: 2, maxRows: 4 }} />
        </Form.Item>



        <CreateSubForm mode={editMode ? "edit" : "view"} />
        <Divider />
        <Typography.Title level={5}>Пакет</Typography.Title>
        <CreatePkgForm prefix={["package"]} mode={editMode ? "edit" : "view"} />


      </div>


    </Form>
  )
}