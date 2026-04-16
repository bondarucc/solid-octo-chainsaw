import { Col, Form, Input, Row, Select, Tabs, type SelectProps } from "antd";
import { useEffect, useMemo, useState, type Dispatch, type SetStateAction } from "react";
import type { CreateUserRequestBody } from "../../../api/src/api/user/types.ts";
import { createUser, getAssignableSubs } from "../api/api.ts";

type FormShape = Omit<CreateUserRequestBody, "sub" | "subId"> & (
  | {
    subId: string
    sub?: never
  }
  | {
    subId?: never
    sub: Omit<NonNullable<CreateUserRequestBody["sub"]>, "package"> & {
      package: Omit<NonNullable<CreateUserRequestBody["sub"]>["package"], "startDate" | "endDate"> & {
        activationPeriod: [string, string]
      }
    }
  }
)

function formValuesToRequestBody(formValues: FormShape): CreateUserRequestBody {
  return {
    login: formValues.login,
    pwd: formValues.pwd,
    role: formValues.role,
    ...(formValues.subId !== undefined
      ? { subId: formValues.subId }
      : {
        sub: {
          ...formValues.sub,
          package: {
            ...formValues.sub.package,
            startDate: formValues.sub.package.activationPeriod[0],
            endDate: formValues.sub.package.activationPeriod[1],
            activationPeriod: undefined
          }
        }
      }
    )
  }
}


export default function CreatePartnerForm({ setHandler, onSuccess }: { onSuccess: () => void, setHandler: Dispatch<SetStateAction<(() => void) | undefined>> }) {
  const [form] = Form.useForm<FormShape>()
  useEffect(() => {
    setHandler(() => {
      return () => {
        console.log(JSON.stringify(form.getFieldsValue(), null, 2));
        form.validateFields().then((values) => console.log(JSON.stringify(formValuesToRequestBody(values), null, 2)))
        createUser(formValuesToRequestBody(form.getFieldsValue())).then(() => {
          onSuccess()
        })

      }
    })
  }, [setHandler, form])

  return (
    <Form
      requiredMark={false}
      form={form}
      validateMessages={{
        required: ""
      }}
      initialValues={{
        role: "PARTNER",
        sub: {
          package: {
            paymentCurr: "EUR"
          }
        }

      }}
      layout="vertical"

    >
      <Row gutter={20}>
        <Col span={12}>
          <Form.Item
            label="Логин"
            name={"login"}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Пароль" name="pwd" rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Роль" name="role" rules={[{ required: true }]}>

            <Select
              options={[
                { value: "ADMIN", label: "Админ" },
                { value: "PARTNER", label: "Партнер" }
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
      <SubLinkingSection />
    </Form>
  )
}

function SubLinkingSection() {
  const [assignableSubsList, setAssignableSubsList]
    = useState<Awaited<ReturnType<typeof getAssignableSubs>>>([])

  useEffect(() => {
    getAssignableSubs().then(res => setAssignableSubsList(res))
  }, [])

  const options = useMemo<SelectProps["options"]>(() => {
    return assignableSubsList.map(sub => {
      return {
        label: sub.externalId,
        value: sub.id
      }
    })
  }, [assignableSubsList])

  return (
    <Tabs
      tabBarExtraContent={{
        left: "Привязка абонента"
      }}
      animated={{ inkBar: true, tabPane: true }}
      defaultActiveKey="existing"
      centered
      destroyOnHidden
      items={[
        // {
        //   label: "Новый",
        //   key: "new",
        //   children: (
        //     <CreateSubForm />
        //   ),
        // },
        {
          label: "Существующий",
          key: "existing",
          children: (
            <Form.Item
              label={"Абонент"}
              name="subId"
              rules={[{ required: true }]}
            >
              <Select options={options} />
            </Form.Item>
          )
        }
      ]}
    />
  )
}