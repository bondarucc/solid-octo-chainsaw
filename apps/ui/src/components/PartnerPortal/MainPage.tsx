import { LogoutOutlined } from "@ant-design/icons"
import { FloatButton } from "antd"
import { Link } from "react-router"
import { getMySubs } from "../../api/api"
import { MyPkg } from "./MyPkg"
import { MyStats } from "./MyStats"
import { MySubsTable } from "./MySubsTable"

export const mySubsLoader = async () => {
  return await getMySubs()
}



export default function MainPage() {
  return (
    <div style={{ paddingTop: 24, paddingLeft: 24, maxHeight: "100vh", overflow: "auto", boxSizing: "border-box", paddingBottom: 70 }}>
      <MyStats />
      <MyPkg />
      <MySubsTable />
      
      <Link to={"/logout"}>
        <FloatButton
          shape="circle"
          icon={<LogoutOutlined />}
          style={{ bottom: 24 }}
        />
      </Link>
    </div>
  )
}




