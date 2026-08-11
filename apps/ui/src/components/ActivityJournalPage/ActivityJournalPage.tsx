import type { GetActivityJournalResponseBody, SubDiffShape, UpdateUserRequestBody, UserDiffShape } from "@types"
import { Card, Collapse, DatePicker, Descriptions, Skeleton, Tag, Timeline, Typography, type GetProp, type TagProps } from "antd"
import dayjs from "dayjs"
import { Suspense, useMemo, type ComponentProps, type ReactNode } from "react"
import { Await, useAsyncValue, useLoaderData, useSearchParams, type LoaderFunctionArgs } from "react-router"
import format from "string-template"
import { getActivityJournal } from "../../../src/api/api"
import LABELS from "@labels"
import type { EntityUpdatedAuditEvent, Role } from "../../../../api/generated/prisma"
import { ArrowRightOutlined } from "@ant-design/icons"
import "./style.css"
import dateDisplayFormat from "../../../src/helpers/dateDisplayFormat"

export async function activityJournalLoader({ request }: LoaderFunctionArgs) {
  const { search, searchParams } = new URL(request.url)
  return {
    journalData: (!searchParams.has("from") || !searchParams.has("to"))
      ? undefined
      : getActivityJournal(search)
  }
}

export function ActivityJournalPage() {
  const { journalData } = useLoaderData<typeof activityJournalLoader>()

  const [searchParams, setSearchParams] = useSearchParams()

  const datePickerValue = useMemo<ComponentProps<typeof DatePicker.RangePicker>["value"]>(() => {
    const [from, to] = [searchParams.get("from"), searchParams.get("to")]
    if (from && to) return [dayjs(from), dayjs(to)]
  }, [searchParams])

  return (
    <>
      <header style={{ marginBottom: 12, textAlign: "center" }}>
        <Typography.Title style={{ marginRight: 20, display: "inline" }} level={5}>{LABELS.journal.pageTitle}</Typography.Title>
        <DatePicker.RangePicker
          placeholder={[...LABELS.dateRangePlaceholders]}
          value={datePickerValue}
          maxDate={dayjs()}
          onChange={(_, strings) => {
            setSearchParams({ from: strings[0], to: strings[1] })
          }}
        />
      </header>
      <Card >
        {
          journalData
            ? (
              <Suspense key={searchParams.toString()} fallback={<Skeleton active />}>
                <Await resolve={journalData}>
                  {({ data }) => {


                    if (!data.length) return LABELS.journal.emptyOutput

                    return <ActivityJournal data={data} />

                  }}
                </Await>
              </Suspense>
            )
            : LABELS.journal.emptyInput
        }
      </Card>
    </>
  )
}

function EventDescription({ event }: { event: GetActivityJournalResponseBody["data"][number] }) {
  return (
    <div>
      <Tag
        variant="outlined"
      >
        {event.data.createdByUserId}
      </Tag>
      <Description event={event} />
      {event.type === "DETAILS_UPDATED" &&
        <div style={{ marginTop: 12 }}>
          <DisplayEntityUpdatedEventDiff {...event.data} />
        </div>
      }
    </div>
  )
}

export function ActivityJournal({ data }: GetActivityJournalResponseBody) {
  const items: GetProp<typeof Timeline, "items"> = data.map(e => {
    const djs = dayjs(e.data.createdAt)
    return {
      title: (
        <>
          <span>{dateDisplayFormat(djs)}</span>
          <br />
          <span>{djs.format("HH:mm")}</span>
        </>
      ),
      content: <EventDescription event={e} />
    }
  })
  return <Timeline titleSpan={"115px"} items={items} />
}

function Description({ event }: { event: GetActivityJournalResponseBody["data"][number] }) {
  switch (event.type) {
    case "DETAILS_UPDATED":
      const { entityType, entityId } = event.data
      return format(LABELS.journal.journalEventDescriptions[event.type][entityType], { entityId })
    case "PAID_EXTENSION":
      const { subExternalId } = event.data
      const rewardDesc = event.data.urt_ae
        ? format(LABELS.journal.paidExtensionRewardDesctiptions, { rewardAmount: event.data.urt_ae.rewardAmount, attractorUserId: event.data.urt_ae.referalDetails.attractorUserId })
        : ""
      return format(LABELS.journal.journalEventDescriptions[event.type], { subExternalId }) + rewardDesc
    case "REPAYMENT_TRIGGERED":
      return format(LABELS.journal.journalEventDescriptions[event.type], event.data)
    case "USER_CREATED":
      return format(LABELS.journal.journalEventDescriptions[event.type], { login: event.data.login })
    case "SUB_CREATED":
      const { attractorUserId, spe_ae, urt_ae } = event.data.referalDetails ?? {}
      let rewardDetails: string = ""
      if (attractorUserId) {
        if (spe_ae) {
          rewardDetails = format(LABELS.journal.newSubRewardDescriptions.PACKAGE_EXTENSION, { ref: attractorUserId })
        } else if (urt_ae?.[0]) {
          rewardDetails = format(LABELS.journal.newSubRewardDescriptions.MONETARY, { ref: attractorUserId, reward: urt_ae?.[0].rewardAmount.toFixed(2) })
        } else throw "referal with no reward?"
      }

      return format(LABELS.journal.journalEventDescriptions[event.type], { externalId: event.data.externalId }) + rewardDetails
    default:
      return ""
  }
}

function castKeyType(key: string): key is keyof UserDiffShape & SubDiffShape {
  return true
}

function castRole(key: any): key is Role {
  return true
}

function DisplayTag({ attribute, value, color }: { attribute: string, value: any, color: TagProps["color"] }) {
  return (
    <Tag
      style={{
        minWidth: 0,
        textOverflow: "ellipsis",
        overflow: "hidden",
        // maxWidth: "calc(50% - 15px)"
      }}
      className="diffTag"
      color={color}
      variant="outlined"
    >
      {attribute === "role" && castRole(value) ? LABELS.roles[value] : value}
    </Tag>
  )
}

function formatValues(key: string, {prevValue, newValue}: {prevValue: any, newValue: any}): {prevValue: any, newValue: any} {
  if (key === "endDate") {
    return {
      prevValue: dateDisplayFormat(dayjs(prevValue)),
      newValue: dateDisplayFormat(dayjs(newValue)),
    }
  }

  return {
    prevValue, newValue
  }
}

function DisplayEntityUpdatedEventDiff({ diff, entityType }: Pick<EntityUpdatedAuditEvent, "diff" | "entityType">) {

  const items = useMemo(() => {
    const parsedDiff: UserDiffShape | SubDiffShape = JSON.parse(diff)
    return Object.entries(parsedDiff).map(([key, values]) => {
      const {prevValue, newValue} = formatValues(key, values)
      const displayPrevValueTag = prevValue !== null && prevValue !== ""
      const displayNewValueTag = newValue !== null && newValue !== ""
      const displayArrow = displayPrevValueTag && displayNewValueTag
      return {
        label: (LABELS.models[entityType === "SUB" ? "sub" : "partner"] as { [k: string]: string })[key],
        span: "filled" as const,
        children: (
          <div style={{ display: "flex", gap: 6, width: "100%" }}>
            {displayPrevValueTag && <DisplayTag attribute={key} value={prevValue} color={!displayNewValueTag ? "red" : undefined} />}
            {displayArrow && <ArrowRightOutlined />}
            {displayNewValueTag && <DisplayTag attribute={key} value={newValue} color={!displayPrevValueTag ? "green" : undefined} />}
          </div>
        )
      }
    })
  }, [diff, entityType])

  return (
    <Collapse
      size="small"
      items={[
        {
          key: "details",
          label: LABELS.journal.collapseEventDetails,
          children: (
            <>
              {/* {reason && <div style={{ backgroundColor: "#DEEFF5", display: "flex", gap: 8, padding: 8 }}>
              <InfoCircleOutlined />
              <div style={{ borderLeft: "1px solid black" }}></div>
              <span>{reason}</span>
            </div>} */}
              <Descriptions
                size="small"
                layout="vertical"
                items={items}
              />
            </>
          )
        }
      ]}
    />
  )
}