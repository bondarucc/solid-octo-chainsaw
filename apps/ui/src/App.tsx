// import './App.css'

import { Button, Flex, Layout, Modal } from "antd"
import AuthProvider, { useAuthCtx } from "./components/AuthProvider/AuthProvider"
import DashboardRouter from "./components/Dashboard/DashboardRouter"
import { Suspense, useCallback, useEffect, type PropsWithChildren } from "react"
import { logout, login, getMe } from "./api/api"
import { Await, createBrowserRouter, Link, NavLink, Outlet, redirect, useLoaderData, useNavigate, useNavigation, useRouteError, useRouteLoaderData, } from "react-router";
import { RouterProvider } from "react-router/dom";
import LoginPage from "./components/AuthProvider/LoginPage"
import type { AuthContextShape } from "./components/AuthProvider/types"
import TopBar from "./components/TopBar"
import { ReloadOutlined } from "@ant-design/icons"
import useUserData from "./hooks/useUserData"



const router = createBrowserRouter([
  {
    path: "/",
    hydrateFallbackElement: "Loading...",
    // middleware: [
    //   async ({request}) => {
    //     request.
    //   }
    // ]
    id: "root",
    errorElement: <ErrorBoundary />,
    // shouldRevalidate: () => false,
    loader: async () => {      
      return await getMe()
    },
    element: <Outlet />,
    children: [
      {
        path: "login",
        element: <LoginPage />,

        action: async ({ request }) => {
          const formData = await request.formData()

          const username = formData.get("login") as string
          const pwd = formData.get("pwd") as string
          const result = await login({ login: username, pwd })
          if (result.error) return "Wrong login or password"
          throw redirect("/dashboard")
        }
      },
      {
        element: (
          <AuthProtectedRoute>
            <TopBar />
            <div style={{ paddingInline: "12px", paddingTop: "12px", width: "100%", boxSizing: "border-box", overflow: "hidden" }}>
              <Outlet />
            </div>
          </AuthProtectedRoute>
        ),
        children: [
          {
            path: "dashboard",
            element: <DashboardRouter />
          },
        ]
      },
    ]
  },

])

function AuthProtectedRoute({children}: PropsWithChildren) {
  const {userData, error} = useUserData()
  const navigate = useNavigate()  

  useEffect(() => {
    if (!userData || error) navigate("/login")
  }, [userData, navigate])


  return children
}


function App() {
  return <RouterProvider router={router} />
}

export default App

function ErrorBoundary() {
  const error = useRouteError()
  console.error(error)
  return (
    <div style={{ height: "100vh", display: "flex", flexFlow: "column nowrap", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",

        }}
      >
        <div
          style={{
            boxShadow: "0 0 8px 4px rgba(0,0,0,0.12)",
            borderRadius: "8px",
            textAlign: "center",
            padding: "24px",
          }}
        >

          <span>Что-то пошло не так</span>
          <br />
          <Link to="/dashboard">
            <Button icon={<ReloadOutlined />} style={{ marginTop: 24 }}>
              Перезагрузить
            </Button>

          </Link>
        </div>
      </div>

    </div>
  )
}