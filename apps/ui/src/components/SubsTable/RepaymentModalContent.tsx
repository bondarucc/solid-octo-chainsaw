import { Button, Divider, Flex, InputNumber, type GetProp } from "antd";
import type { Sub } from "../../../../api/generated/prisma/index";
import useSubsTableContext from "./hooks/useSubsTableContext";
import { useCallback, useRef, useState } from "react";
import { doRepayment } from "../../api/api";

type RepaymentModalContentProps = Pick<Sub, "id" | "totalPayableReward"> & {
  onSuccess: () => void
}

export default function RepaymentModalContent({ id, totalPayableReward, onSuccess }: RepaymentModalContentProps) {

  const { closeModal } = useSubsTableContext()
  const [value, setvalue] = useState<number>(totalPayableReward)
  const [ loading, setLoading ] = useState<boolean>(false)

  const onOk = async () => {
    setLoading(true)
    await doRepayment(id, value)
    closeModal()
    onSuccess()
  }

  const okDisabled = value == 0 || value > totalPayableReward


  return (
    <>
      <InputNumber max={totalPayableReward} onChange={v => setvalue(v ?? 0)} controls={false} style={{ marginRight: 12 }} defaultValue={totalPayableReward} />
      Всего к оплате {totalPayableReward}
      <Divider />
      <Flex justify="end" gap={16}>
        <Button color="default" variant="filled" onClick={closeModal}>Отмена</Button>
        <Button type="primary" onClick={onOk} disabled={okDisabled} loading={loading}>Ок</Button>
      </Flex>
    </>
  )

}