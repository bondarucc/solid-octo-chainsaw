import { lazy } from "react"
import useUserData from "../../hooks/useUserData"

const LazyAdminDashboard = lazy(async () => {
  return import("./AdminDashboard")
})
const LazyPartnerDashboard = lazy(async () => {  
  return import("./PartnerDashboard")
})

function DashboardRouter() {
  const {userData} = useUserData()
  if (!userData) return
  return userData.role === "ADMIN"
    ? <LazyAdminDashboard />
    : <LazyPartnerDashboard />
}

export default DashboardRouter
