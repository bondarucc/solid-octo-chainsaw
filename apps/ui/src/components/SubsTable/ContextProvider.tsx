import { createContext, useCallback, useState, type PropsWithChildren } from "react"
import type { Filters } from "./FilteringPanel.tsx"
import { Form, Modal, type FormInstance, type ModalProps } from "antd"

export type ContextShape = {
  filtersForm: FormInstance<Filters>
  setFilters: (filters: Filters) => void
  filters: Filters
  closeModal: () => void
  setModalConfig: (config: ModalConfig) => void
}

type ModalConfig = Pick<ModalProps, "children" | "title" | "open">

export const subsTableContext = createContext<ContextShape | null>(null)

export default function SubsTableCtxProvider({children}: PropsWithChildren) {
  // const [ filters, setFilters ] = useState<ContextShape["filters"]>({})
  const [form] = Form.useForm<Filters>()

  const [ modalConfig, setModalConfig ] = useState<ModalConfig>({open: false})
  const closeModal = useCallback(() => {
    setModalConfig({open: false})
  }, [setModalConfig])


  // console.log(filters);
  
  return (
    <subsTableContext.Provider 
      value={{
        filtersForm: form,
        closeModal,
        setModalConfig

      }}
    >
      {children}
      <Modal
        styles={{ container: { maxHeight: "80vh", overflowY: "auto" } }}
        closable={true}
        open={modalConfig.open}
        footer={false}
        
        title={modalConfig.title}
        mask={{closable: true, blur: true}}
        

        onCancel={() => closeModal()}
        // okButtonProps={{ htmlType: "submit" }}
        // onOk={onOk}
      >
        {modalConfig.children}

      </Modal>
    </subsTableContext.Provider>
  )
}