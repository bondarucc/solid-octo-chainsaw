import { DesktopOutlined, UserOutlined } from "@ant-design/icons"
import type { GetActivityJournalResponseBody } from "@types"
import { Divider, Flex, Skeleton, type SkeletonProps } from "antd"
import { Suspense, useState, type FC } from "react"
import { Await, useLoaderData, useLocation, useNavigate, type LoaderFunctionArgs } from "react-router"
import { getActivityJournal } from "../api/api"
import { ActivityJournal } from "./ActivityJournalPage/ActivityJournalPage"
import { LocalModal } from "./LocalModal"
import LABELS from "@labels"

export const auditLoader = async ({ params, request }: LoaderFunctionArgs) => {
  const objectBy = new URL(request.url).pathname.includes("subs") ? "externalId" : "login"
  const { objectId } = params
  if (!objectId) throw "no obj id"
  return {
    auditEvents: getActivityJournal(`?${new URLSearchParams({ objectBy, objectId }).toString()}`)
  }
}

export function AuditModalContent() {
  const { auditEvents } = useLoaderData<typeof auditLoader>()
  const [modalOpen, setModalOpen] = useState<boolean>(true)
  const navigate = useNavigate()
  function closeModal() {
    setModalOpen(false)
  }

  return (
    <LocalModal
      open={modalOpen}
      onCancel={closeModal}
      afterOpenChange={isOpen => !isOpen && navigate("..")}
      title={<ModalTitle eventsPromise={auditEvents} />}
    >
      <AwaitResolvedEvents
        eventsPromise={auditEvents}
        Element={ActivityJournal}
      />
    </LocalModal>
  )
}

function Title({ subExternalId, userLogin }: GetActivityJournalResponseBody) {
  return (
    <div>
      {userLogin && (
        <><UserOutlined style={{marginRight: 6}} />{userLogin}</>
      )}
      {userLogin && subExternalId && <Divider vertical/>}
      {subExternalId && (
        <><DesktopOutlined style={{marginRight: 6}}/>{subExternalId}</>
      )}
    </div>
  )
}

function ModalTitle({ eventsPromise }: { eventsPromise: Promise<GetActivityJournalResponseBody> }) {
  return (
    <Flex gap={24} align="center">
      <span>{LABELS.auditModal.title}</span>
      <AwaitResolvedEvents eventsPromise={eventsPromise} Element={Title} skeletonProps={{ paragraph: false }} />
    </Flex>
  )
}

function AwaitResolvedEvents({ Element, eventsPromise, skeletonProps }: { eventsPromise: Promise<GetActivityJournalResponseBody>, Element: FC<GetActivityJournalResponseBody>, skeletonProps?: SkeletonProps }) {
  const { pathname } = useLocation()

  return (
    <Suspense key={pathname} fallback={<Skeleton active {...skeletonProps} />}>
      <Await resolve={eventsPromise}>
        {journalData => <Element {...journalData} />}
      </Await>
    </Suspense>

  )
}
