import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import CreateSubForm from "../CreateSubForm.tsx";
import FilteringPanel from "./FilteringPanel.tsx";
import useSubsTableContext from "./hooks/useSubsTableContext.ts";





export default function SubsManagementPanel({ onCreateSuccessful }: { onCreateSuccessful: () => void }) {
  const {setModalConfig} = useSubsTableContext()
  // const [onOk, setOnOk] = useState<() => void>()
  // const [form] = Form.useForm<FormShape>()

  // const onSuccess = useCallback(() => {
  //   setOpenCreateSubModal(false)
  //   onCreateSuccessful()
  // }, [setOpenCreateSubModal,])

  return (
    <>
      <Flex justify="end" gap={16}>
        <FilteringPanel />
        <Button
         type="primary" 
         icon={<PlusCircleOutlined style={{ fontSize: '18px' }} />}
         onClick={() => setModalConfig({
          open: true,
          title: "Новый абонент",
          children: <CreateSubForm />
         })}
        />
      </Flex>

    </>
  )
}