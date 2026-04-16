import { Form, useActionData, useNavigate, useRouteLoaderData } from "react-router"
import "./styles.css"
import type { AuthContextShape } from "./types"
import { useEffect } from "react"
import useUserData from "../../hooks/useUserData"

function LoginPage() {
  const message = useActionData<string>()
  const {userData} = useUserData()
  const navigate = useNavigate()

  useEffect(() => {
    if (userData) navigate("/dashboard", {replace: true})
  }, [userData, navigate])
  

  return (
    <div id="login_form">
      <Form method="post">
        <label>Login: <input name="login" required type="text" /></label>
        <label>Password: <input name="pwd" required type="password" /></label>
        <span>{message}</span>
        <button type="submit">Login</button>
      </Form>
    </div>
  )
}

export default LoginPage