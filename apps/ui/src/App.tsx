// import './App.css'

import { ReloadOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { useEffect, type PropsWithChildren } from "react"
import { createBrowserRouter, Link, Navigate, Outlet, redirect, useNavigate, useRouteError } from "react-router"
import { RouterProvider } from "react-router/dom"
import { getMe, login } from "./api/api"
import LoginPage from "./components/AuthProvider/LoginPage"
import DashboardRouter from "./components/Dashboard/DashboardRouter"
import { InactivityGuard } from "./components/InactivityGuard"
import TopBar from "./components/TopBar/TopBar"
import Stats from "./components/Stats/Stats"
import useUserData from "./hooks/useUserData"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import PartnerDashboard from "./components/Dashboard/PartnerDashboard"



const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/login" replace />
  },
  {
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
        }
      },
      {
        element: (
          <AuthProtectedRoute>
            <InactivityGuard />
            <TopBar />
            <div style={{ paddingInline: "12px", paddingTop: "12px", width: "100%", boxSizing: "border-box", overflow: "hidden" }}>
              <Outlet />
            </div>
          </AuthProtectedRoute>
        ),
        children: [
          {
            path: "admin",
            element: <AdminRoleGuard><Outlet /></AdminRoleGuard>,
            children: [
              {
                path: "dashboard",
                element: <AdminDashboard />
              },
              {
                path: "stats",
                element: <Stats />
              }
            ]
          },
          {
            path: "partner/dashboard",
            element: <PartnerDashboard />
          }
        ]
      },
    ]
  },

])

function AuthProtectedRoute({ children }: PropsWithChildren) {
  const { userData, error } = useUserData()
  const navigate = useNavigate()

  useEffect(() => {
    if (!userData || error) navigate("/login")
  }, [userData, navigate])


  return children
}

function AdminRoleGuard({ children }: PropsWithChildren) {
  const { userData, error } = useUserData()
  const navigate = useNavigate()

  if (error || !userData || userData.role !== "ADMIN") navigate("/login")

  return children
}


function App() {

  return <>

    <RouterProvider router={router} />
  </>

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
          <Link to="/login">
            <Button icon={<ReloadOutlined />} style={{ marginTop: 24 }}>
              Перезагрузить
            </Button>

          </Link>
        </div>
      </div>

    </div>
  )
}