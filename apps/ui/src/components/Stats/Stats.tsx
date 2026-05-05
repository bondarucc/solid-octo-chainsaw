import { Card, Col, Row } from "antd";
import ReportConfigPanel from "./ReportConfigPanel";
import ReportDisplay from "./ReportDisplay";

export default function Stats() {
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