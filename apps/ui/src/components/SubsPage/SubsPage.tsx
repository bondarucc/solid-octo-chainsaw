import { Button, Card, Typography } from "antd"
import { getSubsList } from "../../api/api"
import SubsTable from "./SubsTable/SubsTable"
import { PlusCircleOutlined } from "@ant-design/icons"
import { Link, Outlet, type LoaderFunctionArgs } from "react-router"
import LABELS from "@labels"

export async function subsLoader({ request: { url } }: LoaderFunctionArgs) {
  const { searchParams } = new URL(url)
  
  const subs = await getSubsList(Object.fromEntries(searchParams.entries()))
  return {
    subs
  }
}

export function SubsPage() {
  return (
    <>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <Typography.Title level={4} style={{ margin: 0 }}>
          {LABELS.subsPage.pageTitle}
        </Typography.Title>
        <div>
          <Link to="new">
            <Button
              type="primary"
              icon={<PlusCircleOutlined />}
            >
              {LABELS.subsPage.addButton}
            </Button>
          </Link>
        </div>
      </header>
      <Card>
        <SubsTable />
      </Card>
      <Outlet />
    </>
  )
}
