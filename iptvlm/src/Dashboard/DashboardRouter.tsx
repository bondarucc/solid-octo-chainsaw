import { useAuthCtx } from "../AuthProvider/AuthProvider"
import AdminDashboard from "./AdminDashboard"
import PartnerDashboard from "./PartnerDashboard"

function DashboardRouter() {
  const authCtx = useAuthCtx()
  return authCtx.isAdm
    ? <AdminDashboard />
    : <PartnerDashboard />
}

export default DashboardRouter
