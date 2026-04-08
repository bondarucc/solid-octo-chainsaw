import { Avatar, Button, Divider, Flex, Typography } from "antd"
import { useCallback } from "react"
import { useNavigate, useRouteLoaderData } from "react-router"
import { logout } from "../api/api"
import type { AuthContextShape } from "./AuthProvider/types"
import { UserOutlined } from "@ant-design/icons"

function TopBar() {
  const navigate = useNavigate()
  const logoutOnClick = useCallback(async () => {
    await logout()
    navigate("/login")
  }, [navigate])

  const userData = useRouteLoaderData<AuthContextShape>("root")

  return (
    <div style={{ backgroundColor: "rgb(248, 236, 222)", height: "50px", paddingInline: "12px" }}>
      <Flex justify="end" style={{ height: "100%" }} align="center">
        <Avatar icon={<UserOutlined />} size="small" style={{ marginLeft: "auto" }}/>
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