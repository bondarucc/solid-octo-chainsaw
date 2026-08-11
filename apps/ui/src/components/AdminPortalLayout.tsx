import { DesktopOutlined, FileTextOutlined, LogoutOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Flex, Layout, Menu, type GetProp } from "antd"
import { Link, Outlet, useLocation } from "react-router"
import useUserData from "../../src/hooks/useUserData"
import LABELS from "@labels"

const { Sider, Content } = Layout
type MenuItems = GetProp<typeof Menu, "items">
function AdminPortalLayout() {
  const { pathname } = useLocation()
  const { login } = useUserData()
  const items: MenuItems = [
    { key: '/partners', icon: <UserOutlined />, label: <Link to="/partners">{LABELS.adminPortal.nav.partners}</Link> },
    { key: '/subs', icon: <DesktopOutlined />, label: <Link to="/subs">{LABELS.adminPortal.nav.subs}</Link> },
    { key: '/stats', icon: <FileTextOutlined />, label: <Link to="/stats">{LABELS.adminPortal.nav.stats}</Link> },
    { key: '/activityJournal', icon: <UnorderedListOutlined />, label: <Link to="/activityJournal">{LABELS.adminPortal.nav.activityJournal}</Link> },
  ]

  const sel = items.find(i => i && i.key && pathname.startsWith(i.key.toString()))?.key?.toString()
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider >
        <Flex
          style={{ height: "100%", paddingBottom: 30 }}
          justify="space-between"
          orientation="vertical"
        >
          <Menu
            selectedKeys={sel ? [sel] : []}
            items={items}
            theme="dark"
          />

          <span style={{ paddingInline: 10, maxWidth: "100%", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", wordSpacing: 15 }}>
            <Link to={"/logout"}>
              <Button
                shape="circle"
                icon={<LogoutOutlined />}
                style={{ marginRight: 10 }}
              />
            </Link>
            {login}
          </span>
        </Flex>
      </Sider>
      <Content style={{ padding: 10, overflowY: "auto" }}>
        <Outlet />
      </Content>
    </Layout>
  )
}

export { AdminPortalLayout }
