import { useCallback, useEffect, useState } from "react";
// import {type Partner} from "../../../generated/prisma/client"

function PartnersTable() {
  const [ allPartners, setAllPartners ] = useState<any[]>()

  const getAllPartners = useCallback(async () => {
    const response = await fetch("/api/sec/partners")
    const allPartners = await response.json()
    setAllPartners(allPartners)
    
  }, [])

  useEffect(() => {
    getAllPartners()
  }, [])

  return (
    <table>
      {/* <thead>
        <h4>Полный список партнеров</h4>
      </thead> */}
      <tbody>
        <tr>
          <th>Login</th>
          <th>Внешний ID</th>
          <th>Действия</th>
        </tr>
        {
          allPartners?.map(partner => {
            return (
              <tr >
                <td>
                  {partner.login}
                </td>
                <td>
                  {partner.externalId}
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default PartnersTable