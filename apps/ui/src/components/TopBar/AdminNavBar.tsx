import { Flex, Typography } from "antd";
import { Link } from "react-router";

export default function AdminNavBar() {
  return (
    <Flex justify="center" gap={24}>
      <Link to="/admin/dashboard" >
        <Typography.Text style={{}}>
          <u>
            Список абонентов
          </u>
        </Typography.Text>
      </Link>
      <Link to="/admin/stats" >
        <Typography.Text style={{}}>
          <u>
            Статистика
          </u>
        </Typography.Text>
      </Link>
    </Flex>
  )
}