import { useEffect } from "react"
import { useActionData, useNavigate, useNavigation, useSubmit, type ActionFunction, type ActionFunctionArgs } from "react-router"
import useUserData from "../../hooks/useUserData"
import "./styles.css"
import { login } from "../../api/api"
import { Alert, Button, Form, Input } from "antd"
import LABELS from "@labels"

export const loginAction: ActionFunction = async ({ request }) => {
  const result = await login(await request.json())
  if (result.error) return LABELS.loginPage.authFailed
}

function LoginPage() {
  const message = useActionData<string>()
  const submit = useSubmit()
  const {state} = useNavigation()

  return (
    <div id="login_form">
      <Form
        onFinish={v => submit(v, { method: "POST", encType: "application/json" })}
        validateMessages={{
          required: LABELS.formValidation.messages.required
        }}
        style={{width: 250}}
      >
        <Form.Item name="login" rules={[{ required: true }]}>
          <Input placeholder={LABELS.loginPage.form.login} />
        </Form.Item>
        <Form.Item name="pwd" rules={[{ required: true }]}>
          <Input.Password placeholder={LABELS.loginPage.form.pwd} />
        </Form.Item>
        {message && <Alert title={message} type="error" showIcon style={{marginBottom: 24, }}/>}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button htmlType="submit" loading={state!=="idle"}>{LABELS.loginPage.form.submit}</Button>
        </div>
      </Form>
    </div>
  )
}

export default LoginPage