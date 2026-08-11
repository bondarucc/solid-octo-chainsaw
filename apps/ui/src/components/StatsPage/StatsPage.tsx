import { Card, Col, Row } from "antd";
import ReportConfigPanel from "./ReportConfigPanel";
import ReportDisplay from "./ReportDisplay";
import { redirect, type ActionFunctionArgs, type LoaderFunctionArgs } from "react-router";
import { generateReport } from "../../api/api";
import type { GenerateReportResponseBody } from "@types";
import dayjs from "dayjs";

function isValidDate(date: any): date is string {
  return !!date && !!dayjs(date, "YYYY-MM-DD", true)
}

export async function statsLoader({ request: { url } }: LoaderFunctionArgs) {
  const { searchParams, pathname } = new URL(url)
  const { from, to } = {
    from: searchParams.get("from"),
    to: searchParams.get("to"),
  }

  if (!from && !to) return
  if (!from || !to) throw redirect(pathname)
  
  const report = generateReport({ from, to })
  return {
    report
  }

}

export default function StatsPage() {
  return (
    <>
      <Row gutter={16}>
        <Col span={6}>
          <Card >
            <ReportConfigPanel />
          </Card>
        </Col>
        <Col span={18}>
          <Card>
            <ReportDisplay />
          </Card>
        </Col>
      </Row>
    </>
  )
}