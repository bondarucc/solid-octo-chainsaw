import { InfoCircleOutlined } from "@ant-design/icons";
import { Flex, Statistic, Tooltip } from "antd";
import dayjs from "dayjs";
import { useLoaderData } from "react-router";
import type { mySubsLoader } from "./MainPage";
import useUserData from "../../hooks/useUserData";
import dateDisplayFormat from "../../../src/helpers/dateDisplayFormat";
import LABELS from "@labels";

export function MyStats() {
  const data = { ...useLoaderData<typeof mySubsLoader>(), ...useUserData() }, { createdAt } = data
  return (
    <Flex style={{ marginBottom: 36 }} justify="center" gap={36}>
      <Statistic
        title={<StatHeader type="createdAt" />}
        value={dateDisplayFormat(dayjs(createdAt))}
      />

      {
        ([
          "totalPayableReward",
          "totalRepayments",
          "totalEarnings",
          "customMonetaryRewardAmount"
        ] as const).map(k => {
          return (data[k] !== null &&
            <Statistic
              key={k}
              title={<StatHeader type={k} />}
              value={data[k]}
              precision={2}
              prefix="EUR"
            />
          )
        })
      }
    </Flex>
  )
}

function StatHeader({ type }: { type: keyof typeof LABELS["partnerPortal"]["myStats"] }) {
  const { header, hint } = LABELS.partnerPortal.myStats[type]

  return (
    <Flex gap={6}>
      {header}
      <Tooltip title={hint} ><InfoCircleOutlined /></Tooltip>
    </Flex>
  )
}