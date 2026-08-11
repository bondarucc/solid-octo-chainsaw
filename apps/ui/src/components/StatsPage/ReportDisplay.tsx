import { Alert, Col, Divider, Empty, Row, Skeleton, Statistic, Typography } from "antd"
import dayjs from "dayjs"
import { Suspense } from "react"
import { Await, useAsyncError, useRouteLoaderData, useSearchParams } from "react-router"
import type { statsLoader } from "./StatsPage"
import type { GenerateReportResponseBody } from "@types"
import LABELS from "@labels"
import format from "string-template"
import dateDisplayFormat from "../../../src/helpers/dateDisplayFormat"

export default function ReportDisplay() {
  const [searchParams] = useSearchParams()
  const reportFrom = searchParams.get("from")
  const reportTo = searchParams.get("to")

  const reportData = useRouteLoaderData<typeof statsLoader>("stats")

  if (reportData) {
    return (
      <>
        <Typography.Title level={4} style={{ marginTop: 0 }}>
          {format(LABELS.statsPage.report.periodTitle, {
            from: dateDisplayFormat(dayjs(reportFrom)),
            to: dateDisplayFormat(dayjs(reportTo))
          })}
        </Typography.Title>
        <Divider />
        <Suspense key={`${reportFrom}${reportTo}`} fallback={<Skeleton active />}>
          <Await
            resolve={reportData.report}
            children={
              resolved => <ReportBody report={resolved}/>
            }
            errorElement={<ErrorBoundary />}
          />
        </Suspense>
      </>
    )
  }

  return (
    <Empty description={LABELS.statsPage.report.emptyState} />
  )
}

function ErrorBoundary() {
  const error = useAsyncError()

  const msg = error === "InvalidReportInput"
    ? LABELS.statsPage.report.errors.invalidPeriod
    : LABELS.statsPage.report.errors.generateFailed

  return <Alert type="error" showIcon title={msg} />
}

function ReportBody({ report: {data: {totalIncome, totalExpenses, paidExtensions, newSubs, freeExtensions, repayments}}}: { report: GenerateReportResponseBody }) {
  return (
    <Row gutter={[0, 32]}>
      <Col span={8}>
        <Statistic
          title={LABELS.statsPage.report.metrics.totalIncome}
          value={totalIncome}
          precision={2}
          prefix="EUR"
        />
      </Col>

      <Col span={8}>
        <Statistic
          title={LABELS.statsPage.report.metrics.totalExpenses}
          value={totalExpenses}
          precision={2}
          prefix="EUR"
        />
      </Col>

      <Col span={8}>
        <Statistic
          title={LABELS.statsPage.report.metrics.newSubs}
          value={`${newSubs.total} / ${newSubs.attractedBySmbdTotal} / EUR ${newSubs.cost}`}
        />
      </Col>

      <Col span={8}>
        <Statistic
          title={LABELS.statsPage.report.metrics.repayments}
          value={`${repayments.count} / EUR ${repayments.cost}`}
        />
      </Col>

      <Col span={8}>
        <Statistic
          title={LABELS.statsPage.report.metrics.paidExtensions}
          value={`${paidExtensions.count} / EUR ${paidExtensions.cost}`}
        />
      </Col>

      <Col span={8}>
        <Statistic
          title={LABELS.statsPage.report.metrics.freeExtensions}
          value={`${freeExtensions.count} / EUR ${freeExtensions.cost}`}
        />
      </Col>
    </Row>
  )
}
