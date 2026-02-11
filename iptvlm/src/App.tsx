// import './App.css'

import AuthProvider from "./AuthProvider/AuthProvider"
import DashboardRouter from "./Dashboard/DashboardRouter"

function App() {

  return (
    <>
      <AuthProvider>
        <DashboardRouter />
      </AuthProvider>
    </>
  )
}

export default App
