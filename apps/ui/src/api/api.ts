import type { CreateUserRequestBody, CreateUserResponseBody, GetUsersListResponseBody } from "../../../api/src/api/user/types.ts"
import type { CreateSubRequestBody, CreateSubResponseBody, GetAssignableSubsResponseBody, GetSingleSubResponseBody, GetSubAuditEventsResponseBody, GetSubsListResponseBody, SubUpdateRequestBody, SubUpdateResponseBody } from "../../../api/src/api/sub/types.ts"
import type { Filters } from "../components/SubsTable/FilteringPanel.tsx"
import type { GetMeResponseBody } from "../../../api/src/api/auth/types.ts"
import type { ReplaceDatesWithStrings } from "../helpers/types.ts"


async function fetchWrapper(url: string, options?: Parameters<typeof fetch>[1]) {
  const response = await fetch(`/api${url}`, options)

  return await response.json()
}

export async function login({ login, pwd }: { login: string, pwd: string }) {
  return await fetchWrapper(
    "/auth/login",
    { method: "POST", headers: [["Content-Type", "application/json"]], body: JSON.stringify({ login, pwd }) }
  )
}

export async function getMe(): Promise<GetMeResponseBody | {error: string}> {
  return await fetchWrapper(
    "/auth/me"
  )
}

export async function logout() {
  await fetchWrapper("/auth/logout", { method: "POST" })
}

export async function getPartnersList(): Promise<GetUsersListResponseBody> {
  const response: GetUsersListResponseBody = await fetchWrapper("/users")

  return response



}

export async function getFullSubsList(filter: Filters): Promise<GetSubsListResponseBody> {
  const query = new URLSearchParams(Object.entries(filter).filter(pair => Boolean(pair[1])))
  return fetchWrapper("/subs/full?" + query.toString())
  // console.log(response);
  // return response
}

export async function getAssignableSubs(): Promise<GetAssignableSubsResponseBody> {
  const response: GetAssignableSubsResponseBody
    = await fetchWrapper("/subs/assignable")

  return response
}

export async function createUser(body: CreateUserRequestBody): Promise<CreateUserResponseBody> {
  const response: CreateUserResponseBody
    = await fetchWrapper("/users", { method: "POST", body: JSON.stringify(body), headers: [["Content-Type", "application/json"]] })


  return response
}

export async function createSub(body: CreateSubRequestBody): Promise<CreateSubResponseBody> {
  const response: CreateSubResponseBody
    = await fetchWrapper("/subs", { method: "POST", body: JSON.stringify(body), headers: [["Content-Type", "application/json"]] })

  return response
}

export async function getSubAuditEvents(id: string): Promise<GetSubAuditEventsResponseBody> {
  const response: GetSubAuditEventsResponseBody
    = await fetchWrapper(`/subs/${id}/audit`)

  return response
}

export async function getMySubs() {
  return fetchWrapper(`subs/mySubs`)
}

export async function extendSubPkgBy1Year(id: string) {
  return fetchWrapper(`/subs/${id}/extend`)
}

export async function doRepayment(id: string, amount: number) {
  await fetchWrapper(`subs/${id}/repayment`, { method: "POST", body: JSON.stringify({ repaymentAmount: amount }), headers: [["Content-Type", "application/json"]] })

}

export async function getSubDetails(id: string): Promise<ReplaceDatesWithStrings<GetSingleSubResponseBody>> {
  return fetchWrapper(`/subs/${id}`)

}

export async function doUpdateSubDetails(id: string, data: SubUpdateRequestBody): Promise<SubUpdateResponseBody> {
  return fetchWrapper(
    `/subs/${id}`,
    { 
      method: "POST",
      body: JSON.stringify(data),
      headers: [["Content-Type", "application/json"]] 
    }
  )
}