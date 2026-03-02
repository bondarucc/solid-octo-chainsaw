import { Button, Col, Divider, Flex, Form, Input, Row, Select, Typography, type FormProps, type SelectProps } from "antd"
import { useCallback, useEffect, useMemo, useState } from "react"
import { Currency, Role } from "../../../api/generated/prisma/browser.ts"
import { createSub, getFullSubsList } from "../api/api"
import CreatePkgForm from "./CreatePkgForm"
import CreateUserForm from "./CreateUserForm"
import useSubsTableContext from "./SubsTable/hooks/useSubsTableContext.ts"
import type { CreateSubFormShape } from "./types.ts"
import type { CreateSubRequestBody } from "../../../api/src/api/sub/types.ts"

function formValuesToRequestBody(formValues: CreateSubFormShape): CreateSubRequestBody {

  const { user, epg, stalkerPortal, archive, playlist, note, package: pkg, attractorId, externalId, login, pwd } = formValues
  if (!externalId) throw "Пустой сторонний ID"
  const userToSubmit = userValidateAndTransform(user)
  const pkgToSubmit = packageValidateAndTransform(pkg)
  return {
    user: userToSubmit,
    package: pkgToSubmit,
    attractorId: attractorId ?? undefined,
    externalId,
    login: login ?? undefined,
    pwd: pwd ?? undefined,
    note: note ?? undefined,
    playlist: playlist ?? undefined,
    epg: epg ?? undefined,
    archive: archive ?? undefined,
    stalkerPortal: stalkerPortal ?? undefined,
    
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
    pkgType: pkg.pkgType ?? undefined
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

export default function CreateSubForm() {
  const [subsList, setSubsList] = useState<Awaited<ReturnType<typeof getFullSubsList>>>([])
  const { closeModal } = useSubsTableContext()
  const [form] = Form.useForm<CreateSubFormShape>()
  const [validationError, setValidationError] = useState<string>()

  useEffect(() => {
    getFullSubsList().then(res => setSubsList(res))
  }, [])

  const attractorIdOptions = useMemo<SelectProps["options"]>(() => {
    return subsList.map(sub => {
      return {
        label: sub.externalId,
        value: sub.id
      }
    })
  }, [subsList])

  const submit = useCallback<NonNullable<FormProps<CreateSubFormShape>["onFinish"]>>(async (formValues) => {
    console.log(formValues);
    try {
      const request = formValuesToRequestBody(formValues)
      console.log(request);
      try {
        await createSub(request)
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
        // requiredMark={false}
        form={form}
        onFinish={submit}
        validateMessages={{
          required: ""
        }}
        initialValues={{
          package: {
            paymentCurr: Currency.EUR
          },
          user: {
            role: Role.PARTNER
          }

        }}
        layout="vertical"

      >
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item 
              name="externalId" 
              label="Сторонний ID" 
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="attractorId" label="Реферал">
              <Select options={attractorIdOptions} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="login" label="Логин">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="pwd" label="Пароль">
              <Input.Password />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="epg" label="EPG">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="playlist" label="Плейлист">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="archive" label="Архив">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="stalkerPortal" label="Сталкер портал">
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="note" label="Заметки">
              <Input.TextArea autoSize={{ minRows: 2, maxRows: 6 }} />
            </Form.Item>
          </Col>

        </Row>

        <Divider />
        <Typography.Title level={5}>Пакет</Typography.Title>
        <CreatePkgForm prefix={["package"]} />

        <Divider />
        <Typography.Title level={5}>Партнер</Typography.Title>
        <CreateUserForm prefix={["user"]} />

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

