// import './App.css'

import { Button, Flex, Layout } from "antd"
import AuthProvider, { useAuthCtx } from "./components/AuthProvider/AuthProvider"
import DashboardRouter from "./components/Dashboard/DashboardRouter"
import { Suspense, useCallback, useEffect, type PropsWithChildren } from "react"
import { logout, login } from "./api/api"
import { Await, createBrowserRouter, Link, NavLink, Outlet, redirect, useLoaderData, useNavigate, useNavigation, useRouteLoaderData, } from "react-router";
import { RouterProvider } from "react-router/dom";
import LoginPage from "./components/AuthProvider/LoginPage"
import type { AuthContextShape } from "./components/AuthProvider/types"
import TopBar from "./components/TopBar"


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
    // shouldRevalidate: () => false,
    loader: async () => {
      const response = await fetch("/auth/me")
      console.log("AuthProvider loader");

      if (response.ok) {
        const { login, role, sub, externalId } = await response.json()
        return { login, role, externalId, totalPayableReward: sub.totalPayableReward } satisfies AuthContextShape

      }

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
        // path: "dashboard",
        element: (
          <>
            <TopBar />
            <div style={{ paddingInline: "12px", paddingTop: "12px", width: "100%", boxSizing: "border-box", overflow: "hidden" }}>
              <AuthProtectedRoute />
            </div>
          </>
        ),
        children: [
          {
            path: "dashboard",
            element: <DashboardRouter />
          }
        ]
      },
    ]
  },

])

function AuthProtectedRoute() {
  const userData = useRouteLoaderData<AuthContextShape>("root")
  const navigate = useNavigate()

  useEffect(() => {
    if (!userData) navigate("/login")
  }, [userData, navigate])


  return <Outlet />
}


function App() {
  return <RouterProvider router={router} />
}

export default App

