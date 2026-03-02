import { useCallback, useRef, useState, type SubmitEvent } from "react"
import type { AuthContextShape } from "./types"
import "./styles.css"

function LoginForm({ onSuccess }: { onSuccess: (creds: AuthContextShape) => void }) {
  const loginRef = useRef<HTMLInputElement>(null)
  const pwdRef = useRef<HTMLInputElement>(null)
  const [errorMessage, setErrorMessage] = useState("")

  const onLoginClick = useCallback(async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const loginResult = await fetch(
      "api/auth/login",
      { method: "POST", headers: [["Content-Type", "application/json"]], body: JSON.stringify({ login: loginRef?.current?.value, pwd: pwdRef?.current?.value, }) }
    )
    // console.log(await loginResult.json());
    const jsonRes = await loginResult.json()
    console.log(jsonRes);
    
    
    loginResult.ok ? onSuccess({userId: jsonRes.id, isAdm: jsonRes.role === "ADMIN"}) : setErrorMessage("Wrong login or password")
  }, [])

  return (
    <div id="login_form">
      <form onSubmit={onLoginClick}>
        <label>Login: <input required ref={loginRef} type="text" /></label>
        <label>Password: <input required ref={pwdRef} type="text" /></label>
        <span>{errorMessage}</span>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm