// import './App.css'

import { Button } from "antd"
import AuthProvider, { useAuthCtx } from "./components/AuthProvider/AuthProvider"
import DashboardRouter from "./components/Dashboard/DashboardRouter"
import { useCallback } from "react"
import { logout } from "./api/api"

function App() {

  return (
    <>
      <AuthProvider>
        <Toolbar />
        <DashboardRouter />
      </AuthProvider>
    </>
  )
}

export default App

function Toolbar() {
  // const {} = useAuthCtx()
  const onClick = useCallback(async () => {
    await logout()

  }, [])
  return (
    <Button onClick={onClick}>Logout</Button>
  )
}