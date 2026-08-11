import { Button, DatePicker, Form, Select, Space, type GetProp } from "antd"
import type { Dayjs } from "dayjs"
import dayjs from "dayjs"
import { useCallback } from "react"
import { useSearchParams } from "react-router"
import LABELS from "@labels"

const { Item } = Form

const PERIODS = {
  LAST_WEEK: {
    label: LABELS.statsPage.configPanel.periods.LAST_WEEK,
    value: "LAST_WEEK"
  },
  LAST_MONTH: {
    label: LABELS.statsPage.configPanel.periods.LAST_MONTH,
    value: "LAST_MONTH"
  },
  LAST_3_MONTHS: {
    label: LABELS.statsPage.configPanel.periods.LAST_3_MONTHS,
    value: "LAST_3_MONTHS"
  },
  LAST_6_MONTHS: {
    label: LABELS.statsPage.configPanel.periods.LAST_6_MONTHS,
    value: "LAST_6_MONTHS"
  },
  LAST_YEAR: {
    label: LABELS.statsPage.configPanel.periods.LAST_YEAR,
    value: "LAST_YEAR"
  },
  YEAR: {
    label: LABELS.statsPage.configPanel.periods.YEAR,
    value: "YEAR",
  },
  MONTH: {
    label: LABELS.statsPage.configPanel.periods.MONTH,
    value: "MONTH"
  },
  CUSTOM: {
    label: LABELS.statsPage.configPanel.periods.CUSTOM,
    value: "CUSTOM"
  },

} as const

const periodSelectorOptions = [
  {
    label: LABELS.statsPage.configPanel.periodGroups.recent,
    options: [
      PERIODS.LAST_WEEK,
      PERIODS.LAST_MONTH,
      PERIODS.LAST_3_MONTHS,
      PERIODS.LAST_6_MONTHS,
      PERIODS.LAST_YEAR
    ]
  },
  {
    label: LABELS.statsPage.configPanel.periodGroups.specific,
    options: [
      PERIODS.YEAR,
      PERIODS.MONTH
    ]
  },
  PERIODS.CUSTOM
]

const FORM_FIELDS = {
  period: "period",
  month: "month",
  year: "year",
  custom: "custom"
} as const

type FormShape = {
  [FORM_FIELDS.period]: keyof typeof PERIODS
  [FORM_FIELDS.year]: Dayjs
  [FORM_FIELDS.month]: Dayjs
  [FORM_FIELDS.custom]: [Dayjs, Dayjs]
}

function formValuesToPeriod(values: FormShape): [Dayjs, Dayjs] | null {
  const today = dayjs()
  switch (values.period) {
    case "LAST_WEEK":
      return [
        today.subtract(1, "week"),
        today
      ]

    case "LAST_MONTH":
      return [
        today.subtract(1, "month"),
        today
      ]

    case "LAST_3_MONTHS":
      return [
        today.subtract(3, "month"),
        today
      ]
    case "LAST_6_MONTHS":
      return [
        today.subtract(6, "month"),
        today
      ]
    case "LAST_YEAR":
      return [
        today.subtract(1, "year"),
        today
      ]

    case "MONTH":
      return [
        values.month.startOf('month'),
        values.month.endOf('month')
      ]

    case "YEAR":
      return [
        values.year.startOf('year'),
        values.year.endOf('year')
      ]

    case "CUSTOM":
      return values.custom

    default:
      return null
  }

}

function useSelectedPeriod() {
  return Form.useWatch<FormShape[typeof FORM_FIELDS.period]>(FORM_FIELDS.period)
}

function CustomRangePicker() {
  const selectedPeriod = useSelectedPeriod()
  if (selectedPeriod !== PERIODS.CUSTOM.value) {
    return
  }
  return (
    <Item name={FORM_FIELDS.custom} rules={[{ required: true }]} >
      <DatePicker.RangePicker placeholder={[...LABELS.dateRangePlaceholders]} />
    </Item>
  )
}

function YearPicker() {
  const selectedPeriod = useSelectedPeriod()
  if (selectedPeriod !== PERIODS.YEAR.value) {
    return
  }

  return (
    <Item name={FORM_FIELDS.year} rules={[{ required: true }]}>
      <DatePicker.YearPicker
        placeholder={LABELS.statsPage.configPanel.placeholders.year}
      />
    </Item>
  )
}

function MonthPicker() {
  const selectedPeriod = useSelectedPeriod()
  if (selectedPeriod !== PERIODS.MONTH.value) {
    return
  }

  return (
    <Item name={FORM_FIELDS.month} rules={[{ required: true }]}>
      <DatePicker.MonthPicker
        placeholder={LABELS.statsPage.configPanel.placeholders.month}
      />
    </Item>
  )
}

export default function ReportConfigPanel() {
  const [_, setSearchParams] = useSearchParams()

  const onGenerate = useCallback<GetProp<typeof Form<FormShape>, "onFinish">>(values => {
    const period = formValuesToPeriod(values)
    if (period) setSearchParams({ from: period[0].format("YYYY-MM-DD"), to: period[1].format("YYYY-MM-DD") })
  }, [setSearchParams])

  return (
    <Form<FormShape>
      onFinish={onGenerate}
      validateMessages={{
        required: ""
      }}
    >
      <Item name={FORM_FIELDS.period} rules={[{ required: true }]}>
        <Select options={periodSelectorOptions} style={{ width: "100%" }} placeholder={LABELS.statsPage.configPanel.placeholders.period} />
      </Item>

      <CustomRangePicker />

      <Space.Compact>
        <YearPicker />
        <MonthPicker />
      </Space.Compact>

      <Button htmlType="submit">
        {LABELS.statsPage.configPanel.submit}
      </Button>

    </Form>
  )
}
