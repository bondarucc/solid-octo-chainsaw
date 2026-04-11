import type { CreateUserRequestBody, CreateUserResponseBody, GetUsersListResponseBody } from "../../../api/src/api/user/types.ts"
import type { CreateSubRequestBody, CreateSubResponseBody, GetAssignableSubsResponseBody, GetSubAuditEventsResponseBody, GetSubsListResponseBody } from "../../../api/src/api/sub/types.ts"
import type { Filters } from "../components/SubsTable/FilteringPanel.tsx"

async function fetchWrapper(...args: Parameters<typeof fetch>) {
  const response = await fetch(...args)

  return await response.json()
}

export async function login({login, pwd}: {login: string, pwd: string}) {
  return await fetchWrapper(
    "api/auth/login",
    { method: "POST", headers: [["Content-Type", "application/json"]], body: JSON.stringify({ login, pwd }) }
  )
}

export async function logout() {
  await fetch("/api/auth/logout", {method: "POST"})
}

export async function getPartnersList(): Promise<GetUsersListResponseBody> {
  const response: GetUsersListResponseBody = await fetchWrapper("/api/sec/users")

  return response



}

export async function getFullSubsList(filter: Filters): Promise<GetSubsListResponseBody> {
  const query = new URLSearchParams(Object.entries(filter).filter(pair => Boolean(pair[1])))
  return fetchWrapper("/api/sec/subs?" + query.toString())
  // console.log(response);
  // return response
}

export async function getAssignableSubs(): Promise<GetAssignableSubsResponseBody> {
  const response: GetAssignableSubsResponseBody
    = await fetchWrapper("/api/sec/subs/assignable")

  return response
}

export async function createUser(body: CreateUserRequestBody): Promise<CreateUserResponseBody>{
  const response: CreateUserResponseBody
    = await fetchWrapper("/api/sec/users", {method: "POST", body: JSON.stringify(body), headers: [["Content-Type", "application/json"]]})


  return response
}

export async function createSub(body: CreateSubRequestBody): Promise<CreateSubResponseBody> {
  const response: CreateSubResponseBody
   = await fetchWrapper("/api/sec/subs", {method: "POST", body: JSON.stringify(body), headers: [["Content-Type", "application/json"]]})

  return response
}

export async function getSubAuditEvents(id: string): Promise<GetSubAuditEventsResponseBody> {
  const response: GetSubAuditEventsResponseBody
    = await fetchWrapper(`/api/sec/subs/${id}/audit`)

  return response
}

export async function getMySubs() {
  return fetchWrapper(`/api/subs`)
}

export async function extendSubPkgBy1Year(id: string) {
  return fetchWrapper(`/api/sec/subs/${id}/extend`)
}