import { createContext, useContext, useEffect, useState } from "react"
import { Outlet, useLoaderData } from "react-router"
import type { AuthContextShape } from "./types"

const AuthContext = createContext<AuthContextShape | null>(null)

function AuthProvider() {
  const me = useLoaderData<AuthContextShape>()

  return (
    <AuthContext.Provider value={me}>
      AuthProvider
      <Outlet />
    </AuthContext.Provider>
  )
}

export function useAuthCtx() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw "wrong ctx useage"

  return ctx
}

export default AuthProvider