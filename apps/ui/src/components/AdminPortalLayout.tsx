import { DesktopOutlined, FileTextOutlined, LogoutOutlined, QuestionCircleOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Flex, Layout, Menu, type GetProp } from "antd"
import { Link, Outlet, useLocation } from "react-router"
import useUserData from "../../src/hooks/useUserData"
import LABELS from "@labels"
import type { PropsWithChildren } from "react"


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

          <div style={{paddingInline: 4, display: "flex", flexDirection: "column", gap: 10}}>
            <ItemWrapper
              to="/faq"
              title="Справка"
            >
              <QuestionCircleOutlined />
            </ItemWrapper>
            <ItemWrapper
              to="/logout"
              // title={login}
              title={login}
            >
              <LogoutOutlined />
            </ItemWrapper>
          </div>
        </Flex>
      </Sider>
      <Content style={{ padding: 10, overflowY: "auto" }}>
        <Outlet />
      </Content>
    </Layout>
  )
}

function ItemWrapper({children, title, to}: PropsWithChildren & {title: string, to: string}) {
  return (
    <Link to={to}>
      <Button
        icon={children}
        block
        style={{ justifyContent: "start" }}
      >
        <span style={{ textOverflow: "ellipsis", overflow: "hidden"}}>
          {title}
        </span>
      </Button>
    </Link>
  )
}

export { AdminPortalLayout }
