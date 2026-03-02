import { Button, Form, Input } from "antd";
import type { Sub } from "../../../../api/generated/prisma/browser.ts";
import useSubsTableContext from "./hooks/useSubsTableContext.ts";
import { useEffect } from "react";

export type Filters = {
  externalId?: string
}


export default function FilteringPanel() {
  const [form] = Form.useForm()
  const {filters, setFilters} = useSubsTableContext()

  useEffect(() => {
    form.setFieldsValue(filters)
  }, [filters])
  
  return (
    <>
      <Form form={form} >
        <Form.Item 
          name="externalId"
        >
          <Input.Search 
            // value={filters.externalId} 
            onSearch={() => {setFilters(form.getFieldsValue())}}

          />
        </Form.Item>
        {/* <Button >Poisk</Button> */}
      </Form>
    </>
  )
}