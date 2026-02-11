import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react"
import LoginForm from "./LoginForm"
import type { AuthContextShape } from "./types"

const AuthContext = createContext<AuthContextShape | null>(null)

function AuthProvider({ children }: PropsWithChildren) {
  const [ authContextValue, setAuthContextValue ] = useState<AuthContextShape | null>(null)
  useEffect(() => {
    async function fetchCurrentUser() {
      const response = await fetch("/api/auth/me")
      if (response.ok) {
        const jsonMe = await response.json()
        setAuthContextValue(jsonMe)

      }

    }
    fetchCurrentUser()

  }, [])

  return (
    <AuthContext.Provider value={authContextValue}>
      {authContextValue ? children : <LoginForm onSuccess={setAuthContextValue}/>}
    </AuthContext.Provider>
  )
}

export function useAuthCtx() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw "wrong tcx useage"

  return ctx
}

export default AuthProvider