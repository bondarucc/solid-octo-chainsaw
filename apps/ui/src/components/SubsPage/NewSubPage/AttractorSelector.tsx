import { useCallback, useEffect, useMemo, useState } from "react"
import type { RewardType } from "@types"
import { getUsersList } from "../../../api/api"
import { Form, Radio, Select, type GetProp } from "antd"
import type { User } from "../../../../../api/generated/prisma"
import LABELS from "@labels"

export const attractorFormPaths = {
  attractor: "attractor",
  attractorRewardType: "attractorRewardType"
} as const

export type AttractorFormShape = {
  [attractorFormPaths.attractor]: User["login"]
  [attractorFormPaths.attractorRewardType]: RewardType
}



type OptionType = { value: string, tier: number, sub: string | null }

export default function AttractorSelector({ mode }: { mode: "new" | "edit" }) {
  const [usersList, setUsersList] = useState<Awaited<ReturnType<typeof getUsersList>>>([])
  const [rewardSelectorDisabled, setRewardSelectorDisabled] = useState<boolean>(false)
  const form = Form.useFormInstance()
  const selectedAttractor = Form.useWatch(attractorFormPaths.attractor)

  const onAttractorSelect = useCallback<GetProp<typeof Select<string, OptionType >, "onSelect">>((_, attractor) => {
    form.setFieldValue(attractorFormPaths.attractor, attractor.value)
    if (attractor.tier >= 5 || attractor.sub === null) {
      setRewardSelectorDisabled(true)
      form.setFieldValue(attractorFormPaths.attractorRewardType, "MONETARY")
    } else {
      setRewardSelectorDisabled(false)
    }
  }, [])

  const attractorIdOptions = useMemo<GetProp<typeof Select<string, OptionType>, "options">>(() => {
    return usersList.map(({ login, attractedSubs, subExternalId }) => {
      return {
        value: login,
        tier: attractedSubs.length,
        sub: subExternalId
      } satisfies OptionType
    })
  }, [usersList])

  const rewardTypeOptions: GetProp<typeof Radio.Group, "options"> = [
    {
      value: "PACKAGE_EXTENSION",
      label: LABELS.rewardType.PACKAGE_EXTENSION,
    },
    {
      value: "MONETARY",
      label: LABELS.rewardType.MONETARY
    }
  ]

  useEffect(() => {
    getUsersList().then(res => setUsersList(res))
  }, [])

  return (
    <div style={{ marginBottom: 12 }}>
      <Form.Item name={attractorFormPaths.attractor} label={LABELS.subsPage.createModal.attractor} style={{ marginBottom: 4 }}>
        <Select disabled={mode !== "new"} options={attractorIdOptions} onSelect={onAttractorSelect} showSearch allowClear optionLabelProp="value" />
      </Form.Item>
      {selectedAttractor && mode === "new" &&
        <Form.Item name={attractorFormPaths.attractorRewardType} rules={[{ required: true }]}>
          <Radio.Group
            disabled={rewardSelectorDisabled}
            options={rewardTypeOptions}
          />
        </Form.Item>
      }
    </div>
  )
}
