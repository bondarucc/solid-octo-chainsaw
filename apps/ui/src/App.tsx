// import './App.css'

import { DesktopOutlined, FileTextOutlined, ReloadOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons"
import { Button, ConfigProvider, Layout, Menu, type GetProp, type MenuProps } from "antd"
import { useEffect, type PropsWithChildren } from "react"
import { createBrowserRouter, Link, Outlet, redirect, useLocation, useNavigate, useRouteError } from "react-router"
import { RouterProvider } from "react-router/dom"
import locale from 'antd/locale/ru_RU'

import { getMe, logout } from "./api/api"
import { auditLoader, AuditModalContent } from "./components/AuditModalContent"
import LoginPage, { loginAction } from "./components/LoginPage/LoginPage"
import PartnersPage, { usersAction, usersLoader } from "./components/PartnersPage/PartnersPage"
import StatsPage, { statsLoader } from "./components/StatsPage/StatsPage"
import CreateSubModalContent, { createSubAction } from "./components/SubsPage/NewSubPage/CreateSubModalContent"
import { subsLoader, SubsPage } from "./components/SubsPage/SubsPage"
import useUserData from "./hooks/useUserData"
import MainPage, { mySubsLoader } from "./components/PartnerPortal/MainPage"
import type { MenuItemType } from "antd/es/menu/interface"
import { activityJournalLoader, ActivityJournalPage } from "./components/ActivityJournalPage/ActivityJournalPage"
import { AdminPortalLayout } from "./components/AdminPortalLayout"
import { editPartnerAction, EditPartnerModalContent } from "./components/PartnersPage/EditPartnerModalContent"
import { editSubAction, EditSubModalContent } from "./components/SubsPage/EditSubModalContent"



const router = createBrowserRouter([
  {
    path: "logout",
    loader: async () => {
      await logout()
      throw redirect("/login")
    }
  },
  {
    loader: async ({ request: { url } }) => {
      const userData = await getMe()
      if ("error" in userData && !url.endsWith("login")) throw redirect("/login")

      if (!("error" in userData) && url.endsWith("login")) {
        throw redirect(userData.role === "PARTNER" ? "partner" : "partners")
      }
      return userData
    },
    id: "auth",
    errorElement: <ErrorBoundary />,
    shouldRevalidate: ({ formAction, actionResult }) => {
      if (formAction?.includes("login") && typeof actionResult !== "string") return true

      return false
    },
    element: <Outlet />,
    children: [
      {
        element: (
          <AdminRoleGuard>
            <AdminPortalLayout />
          </AdminRoleGuard>
        ),
        children: [
          {
            path: "partners",
            element: <PartnersPage />,
            id: "partners",
            loader: usersLoader,
            action: usersAction,
            children: [
              {
                path: ":objectId/audit",
                element: <AuditModalContent />,
                loader: auditLoader,
              },
              {
                path: ":login/edit",
                element: <EditPartnerModalContent />,
                action: editPartnerAction,
              },
            ]
          },
          {
            path: "subs",
            element: <SubsPage />,
            loader: subsLoader,
            id: "subs",
            children: [
              {
                path: "new",
                element: <CreateSubModalContent />,
                action: createSubAction
              },
              {
                path: ":externalId/edit",
                element: <EditSubModalContent />,
                action: editSubAction
              },
              {
                path: ":objectId/audit",
                element: <AuditModalContent />,
                loader: auditLoader,

              }
            ]
          },
          {
            path: "stats",
            loader: statsLoader,
            id: "stats",
            element: <StatsPage />,
          },
          {
            path: "activityJournal",
            element: <ActivityJournalPage />,
            loader: activityJournalLoader
          }
        ]
      },
      {
        path: "partner",
        element: <MainPage />,
        loader: mySubsLoader
      },
      {
        path: "login",
        element: <LoginPage />,
        action: loginAction
      },
    ]

  }
])

function AdminRoleGuard({ children }: PropsWithChildren) {
  const { role } = useUserData()
  const navigate = useNavigate()

  useEffect(() => {
    if (role !== "ADMIN") navigate("/partner")
  }, [role])

  if (role !== "ADMIN") return
  return children
}


function App() {

  return (
    <ConfigProvider locale={locale}>
      <RouterProvider router={router} />
    </ConfigProvider>
  )

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