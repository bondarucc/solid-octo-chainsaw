import { Outlet, useActionData, type ActionFunctionArgs, type LoaderFunctionArgs } from "react-router";
import PartnersTable from "./PartnersTable/PartnersTable";
import { createUser, getUsersList } from "../../api/api";
import { Button, Card, Divider, Modal, notification, Typography } from "antd";
import CreateNewPartnerModalContent from "./CreateNewPartnerModalContent";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import LABELS from "@labels";

export async function usersLoader({request}: LoaderFunctionArgs) {
  const {search} = new URL(request.url)
  const users = await getUsersList(search)
  return {
    users
  }
}

export async function usersAction({ request }: ActionFunctionArgs) {
  return await createUser(await request.json())
}

export default function PartnersPage() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const actionData = useActionData<typeof usersAction>()

  useEffect(() => {
    actionData && "error" in actionData
      ? notification.error({ title: LABELS.partnersPage.operationFailed, showProgress: true })
      : setModalOpen(false)
  }, [actionData])

  return (
    <>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <Typography.Title level={4} style={{ margin: 0 }}>
          {LABELS.partnersPage.pageTitle}
        </Typography.Title>
        <div>
          <Button
            onClick={() => setModalOpen(true)}
            type="primary"
            icon={<PlusCircleOutlined />}
          >
            {LABELS.partnersPage.addButton}
          </Button>
        </div>
      </header>
      <Card>
        <PartnersTable />
      </Card>
      <Outlet />
      <Modal
        open={modalOpen}
        centered
        closable
        onCancel={() => setModalOpen(false)}
        footer={false}
        title={LABELS.partnersPage.createModal.title}
        destroyOnHidden
      >
        <Divider />
        <CreateNewPartnerModalContent />
      </Modal>
    </>
  )
}
