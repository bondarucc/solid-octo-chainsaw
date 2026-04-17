import { UserAddOutlined, UserDeleteOutlined } from "@ant-design/icons"
import { Button, Col, Divider, Flex, Form, Input, Row, Typography, type FormProps } from "antd"
import { useCallback, useState } from "react"
import type { CreateSubRequestBody } from "../../../api/src/api/sub/types.ts"
import { createSub } from "../api/api.ts"
import AttractorSelector from "./AttractorSelector.tsx"
import CreatePkgForm from "./CreatePkgForm.tsx"
import CreateUserForm from "./CreateUserForm.tsx"
import useSubsTableContext from "./SubsTable/hooks/useSubsTableContext.ts"
import type { CreateSubFormShape } from "./types.ts"
import CreateSubForm from "./CreateSubForm.tsx"

function formValuesToRequestBody(formValues: CreateSubFormShape): CreateSubRequestBody {

  const { user, epg, m3uPlaylist, note, package: pkg, externalId, login, pwd, media, publicKey, attractor} = formValues
  if (!externalId) throw "Пустой сторонний ID"
  const userToSubmit = userValidateAndTransform(user)
  const pkgToSubmit = packageValidateAndTransform(pkg)
  const attractorToSubmit = attractorValidateAndTransform(attractor)
  return {
    user: userToSubmit,
    package: pkgToSubmit,
    externalId,
    login: login ?? undefined,
    pwd: pwd ?? undefined,
    note: note ?? undefined,
    m3uPlaylist: m3uPlaylist ?? undefined,
    epg: epg ?? undefined,
    media: media ?? undefined,
    publicKey: publicKey ?? undefined,
    attractor: attractorToSubmit
  }

}

function attractorValidateAndTransform({externalId, rewardType}: CreateSubFormShape["attractor"]): CreateSubRequestBody["attractor"]  {
  if (externalId && rewardType) return {
    externalId,
    rewardType
  }
  
}

function validatePkgFromToDates(dates: NonNullable<CreateSubFormShape["package"]>["activationPeriod"]): dates is [string, string] {
  return !!dates && !dates.some(date => !date)
}

function packageValidateAndTransform(pkg: CreateSubFormShape["package"]): CreateSubRequestBody["package"] {
  const { activationPeriod } = pkg ?? {}
  if (!pkg || !validatePkgFromToDates(activationPeriod)) {
    throw "Ошибка валидации пакета"
  }
  return {
    startDate: activationPeriod[0],
    endDate: activationPeriod[1],
    paymentAmount: pkg.paymentAmount ?? undefined,
    paymentCurr: pkg.paymentCurr ?? undefined,
    paymentDate: pkg.paymentDate ?? undefined,
    pkgType: pkg.pkgType ?? undefined,
    region: pkg.region ?? undefined
  }
}

function validateUserInput(user: NonNullable<CreateSubFormShape["user"]>): user is Required<typeof user> {
  return !Object.values(user).some(prop => !prop)
}

function userValidateAndTransform(user: CreateSubFormShape["user"]): CreateSubRequestBody["user"] {
  if (user == null || user == undefined) return undefined

  if (validateUserInput(user)) {
    return user
  } else throw "Ошибка валидации партнера"
}

export default function CreateSubModalContent({ onSuccess }: { onSuccess: () => void }) {
  const { closeModal } = useSubsTableContext()
  const [form] = Form.useForm<CreateSubFormShape>()
  const [validationError, setValidationError] = useState<string>()
  const [addUser, setAddUser] = useState<boolean>(false)

  const submit = useCallback<NonNullable<FormProps<CreateSubFormShape>["onFinish"]>>(async formValues => {
    console.log(formValues);
    try {
      const request = formValuesToRequestBody(formValues)
      console.log(request);
      try {
        await createSub(request)
        onSuccess()
        closeModal()
      } catch(e) {
        console.log(e);
      }


    } catch (e) {
      setValidationError(e as string)
    }


  }, [])


  return (
    <>
      <Form<CreateSubFormShape>
        form={form}
        onFinish={submit}
        validateMessages={{
          required: ""
        }}
        initialValues={{
          package: {
            paymentCurr: "EUR"
          },
          user: {
            role: "PARTNER"
          },
          attractor: {
            rewardType: "MONETARY"
          }

        }}
        layout="vertical"

      >
        <CreateSubForm mode="new"/>

        <Divider />
        <Typography.Title level={5}>Пакет</Typography.Title>
        <CreatePkgForm prefix={["package"]} mode="new" />

        <Divider />
        <Typography.Title level={5}>
          Партнер
          <Button
            type="text"
            onClick={() => setAddUser(!addUser)}
            icon={addUser ? <UserAddOutlined /> : <UserDeleteOutlined />}
            style={{ marginLeft: "10px" }}
          />
        </Typography.Title>

        {addUser && <CreateUserForm prefix={["user"]} />}

        <Typography.Text type="danger">
          {validationError}
        </Typography.Text>

        <Divider />
        <Flex justify="end" gap={16}>
          <Button color="default" variant="filled" onClick={closeModal}>Отмена</Button>
          <Button type="primary" htmlType="submit">Ок</Button>
        </Flex>
      </Form>
    </>
  )
}