import { Col, Divider, Empty, Row, Skeleton, Statistic, Typography } from "antd"
import dayjs from "dayjs"
import { Suspense, useEffect, useState } from "react"
import { Await, useSearchParams } from "react-router"

type ReportShape = {
  totalSpendings: number
  totalEarnings: number
  newSubs: number
  paidSubExtensions: number
  freeSubExtensions: number
}

async function mockGetReport(from: string, to: string): Promise<ReportShape> {
  return new Promise(res => {
    setTimeout(() => {
      res({
        totalSpendings: Math.random() * 999,
        totalEarnings: Math.random() * 999,
        newSubs: Math.ceil(Math.random() * 20),
        paidSubExtensions: Math.ceil(Math.random() * 20),
        freeSubExtensions: Math.ceil(Math.random() * 20)
      })
    }, 2000)
  })
}

const FORMAT = "DD/MM/YYYY"

export default function ReportDisplay() {
  const [searchParams] = useSearchParams()
  const [pr, setPr] = useState<ReturnType<typeof mockGetReport>>()

  const reportFrom = searchParams.get("from")
  const reportTo = searchParams.get("to")
  const readyToGenerate = reportFrom && reportTo

  useEffect(() => {
    setPr(
      readyToGenerate
        ? mockGetReport(reportFrom, reportTo)
        : undefined
    )
  }, [searchParams.toString()])

  if (!readyToGenerate) {
    return (
      <Empty description="Выберите период и сгенерируйте отчет"/>
    )
  }

  return (
    <>
      <Typography.Title level={4} style={{ marginTop: 0 }}>
        {`Статистика за период с ${dayjs(reportFrom).format(FORMAT)} по ${dayjs(reportTo).format(FORMAT)} включительно`}
      </Typography.Title>
      <Divider />
      <Suspense fallback={<Skeleton />}>
        <Await
          resolve={pr}
          children={(resolved => {
            if (!resolved) return
            return (
              <Row gutter={[0, 32]}>
                <Col span={8}>
                  <Statistic
                    title="Общий приход"
                    value={resolved?.totalEarnings}
                    precision={2}
                    prefix="EUR"
                  />
                </Col>

                <Col span={8}>
                  <Statistic
                    title="Общий расход"
                    value={resolved?.totalSpendings}
                    precision={2}
                    prefix="EUR"
                  />
                </Col>

                <Col span={8}>
                  <Statistic
                    title="Новых абонентов"
                    value={resolved?.newSubs}
                  />
                </Col>

                <Col span={8}>
                  <Statistic
                    title="Платных продлений"
                    value={resolved?.paidSubExtensions}
                  />
                </Col>

                <Col span={8}>
                  <Statistic
                    title="Бесплатных продлений (6 мес)"
                    value={resolved?.freeSubExtensions}
                  />
                </Col>
              </Row>
            )
          })}
        />
      </Suspense>
    </>
  )
}