import { useEffect } from "react"
import { Form, useActionData, useNavigate } from "react-router"
import useUserData from "../../hooks/useUserData"
import "./styles.css"

function LoginPage() {
  const message = useActionData<string>()
  const { userData } = useUserData()
  const navigate = useNavigate()

  useEffect(() => {
    if (userData) {
      const route = userData.role === "ADMIN" ? "admin" : "partner"
      navigate(`/${route}/dashboard`, { replace: true })
    }
  }, [userData, navigate])

  return (
    <div id="login_form">
      <Form method="post">
        <label>Login: <input name="login" required type="text" /></label>
        <label>Password: <input name="pwd" required type="password" /></label>
        <span>{message}</span>
        <button type="submit" style={{ userSelect: "none" }}>Login</button>
      </Form>
    </div>
  )
}

export default LoginPage