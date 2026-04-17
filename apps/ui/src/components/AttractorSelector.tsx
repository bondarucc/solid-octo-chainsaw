import { useCallback, useEffect, useMemo, useState } from "react"
import type { RewardType } from "../../../api/src/api/sub/types"
import { getFullSubsList } from "../api/api"
import { Form, Radio, Select, type GetProp } from "antd"

const rewardTypeOptions: { value: RewardType, label: string }[] = [
  {
    value: "PACKAGE_EXTENSION",
    label: "Продление пакета"
  },
  {
    value: "MONETARY",
    label: "Денежное вознаграждение"
  }
]

const rewardTypeFieldName = ["attractor", "rewardType"]
const attractorIdFieldName = ["attractor", "externalId"]
type OptionType = { value: string, label: string, tier: number }

export default function AttractorSelector({disabled}: {disabled: boolean}) {
  const [subsList, setSubsList] = useState<Awaited<ReturnType<typeof getFullSubsList>>>([])
  const [rewardSelectorDisabled, setRewardSelectorDisabled] = useState<boolean>(false)
  const form = Form.useFormInstance()
  const selectedAttractor = Form.useWatch(attractorIdFieldName)
  
  const onAttractorSelect = useCallback<GetProp<typeof Select<string, OptionType >, "onSelect">>((_, attractor) => {
    form.setFieldValue(attractorIdFieldName, attractor.value)
    if (attractor.tier >= 5) {
      setRewardSelectorDisabled(true)
      form.setFieldValue(rewardTypeFieldName, "MONETARY")
    } else {
      setRewardSelectorDisabled(false)
    }
  }, [])

  const attractorIdOptions = useMemo<GetProp<typeof Select<string, OptionType>, "options">>(() => {
    return subsList.map(sub => {
      return {
        label: sub.externalId,
        value: sub.externalId,
        tier: sub.attractedSubs.length
      }
    })
  }, [subsList])

  useEffect(() => {
    getFullSubsList({}).then(res => setSubsList(res))
  }, [])

  return (
    <div style={{ marginBottom: 12 }}>
      <Form.Item name={attractorIdFieldName} label="Реферал" style={{ marginBottom: 4 }}>
        <Select disabled={disabled} options={attractorIdOptions} onSelect={onAttractorSelect} showSearch={{ optionFilterProp: "label" }} allowClear />
      </Form.Item>
      {selectedAttractor && !disabled && <Form.Item name={rewardTypeFieldName} noStyle>
        <Radio.Group
          disabled={rewardSelectorDisabled}
          options={rewardTypeOptions}
        />
      </Form.Item>}
    </div>
  )
}