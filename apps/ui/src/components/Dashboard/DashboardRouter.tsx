import { lazy } from "react"
import { useRouteLoaderData } from "react-router"
import type { AuthContextShape } from "../AuthProvider/types"

const LazyAdminDashboard = lazy(async () => {
  return import("./AdminDashboard")
})
const LazyPartnerDashboard = lazy(async () => {  
  return import("./PartnerDashboard")
})

function DashboardRouter() {
  const userData = useRouteLoaderData<AuthContextShape>("root")
  return userData?.role === "ADMIN"
    ? <LazyAdminDashboard />
    : <LazyPartnerDashboard />
}

export default DashboardRouter
