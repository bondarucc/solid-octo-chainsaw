import { Button, Flex, Modal } from "antd";
import { useCallback, useState } from "react";
import CreatePartnerForm from "../CreatePartnerForm.tsx";
import { PlusCircleOutlined } from "@ant-design/icons";

export default function PartnersManagementPanel({onCreateSuccessful}: {onCreateSuccessful: () => void}) {
  const [openCreatePartnerModal, setOpenCreatePartnerModal] = useState<boolean>(false)
  const [onOk, setOnOk] = useState<() => void>()

  const onSuccess = useCallback(() => {
    setOpenCreatePartnerModal(false)
    onCreateSuccessful()
  }, [setOpenCreatePartnerModal, onCreateSuccessful])

  return (
    <>
      <Flex justify="end">
        <Button type="primary" icon={<PlusCircleOutlined style={{ fontSize: '18px'}}/>} onClick={() => setOpenCreatePartnerModal(true)} />
      </Flex>
      <Modal
        styles={{ container: { maxHeight: "80vh", overflowY: "auto" } }}
        closable={false}
        open={openCreatePartnerModal}
        onCancel={() => setOpenCreatePartnerModal(false)}
        okButtonProps={{ htmlType: "submit" }}
        onOk={onOk}
      >
        <CreatePartnerForm setHandler={setOnOk} onSuccess={onSuccess}/>
      </Modal>
    </>
  )
}