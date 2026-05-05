import { UserOutlined } from "@ant-design/icons"
import { Avatar, Button, Divider, Flex, Typography } from "antd"
import { lazy, useCallback } from "react"
import { useRevalidator } from "react-router"
import { logout } from "../../api/api"
import useUserData from "../../hooks/useUserData"

const LazyAdminNavBar = lazy(() => import("./AdminNavBar"))

function TopBar() {
  const { revalidate } = useRevalidator();
  const logoutOnClick = useCallback(async () => {
    await logout()
    // navigate("/login")
    revalidate()
  }, [revalidate])

  const { userData } = useUserData()

  return (
    <div style={{ backgroundColor: "rgb(248, 236, 222)", height: "50px", paddingInline: "12px" }}>
      <Flex style={{ height: "100%" }} align="center">

        <div style={{ flexGrow: 1 }}>
          {
            userData?.role === "ADMIN" && <LazyAdminNavBar />
          }
        </div>

        <Avatar icon={<UserOutlined />} size="small" />
        <Typography.Text style={{ marginLeft: "4px" }}>
          {userData?.login}
        </Typography.Text>
        <Divider vertical style={{ borderColor: '#7cb305', marginLeft: "16px", marginRight: 0, top: 0 }} />
        <Button type="text" onClick={logoutOnClick} styles={{ root: { backgroundColor: "transparent" } }}>Выйти</Button>
      </Flex>
    </div>
  )
}

export default TopBar