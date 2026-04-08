import PartnersTable from "../PartnersTable/PartnersTable"
import SubsTableCtxProvider from "../SubsTable/ContextProvider"
import SubsTable from "../SubsTable/SubsTable"

function AdminDashboard() {


  return (
    <>
      {/* <PartnersTable /> */}
      <SubsTableCtxProvider>
        <SubsTable />
      </SubsTableCtxProvider>
    </>
  )
}

export default AdminDashboard