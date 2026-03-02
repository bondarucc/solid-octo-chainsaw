import type { CreateUserRequestBody, CreateUserResponseBody, GetUsersListResponseBody } from "../../../api/src/api/user/types.ts"
import type { CreateSubRequestBody, CreateSubResponseBody, GetAssignableSubsResponseBody, GetSubsListResponseBody } from "../../../api/src/api/sub/types.ts"
import type { Filters } from "../components/SubsTable/FilteringPanel.tsx"

async function fetchWrapper(...args: Parameters<typeof fetch>) {
  const response = await fetch(...args)

  return await response.json()
}

export async function logout() {
  await fetchWrapper("/api/auth/logout", {method: "POST"})
}

export async function getPartnersList(): Promise<GetUsersListResponseBody> {
  const response: GetUsersListResponseBody = await fetchWrapper("/api/sec/users")

  return response



}

export async function getFullSubsList(filter?: Filters): Promise<GetSubsListResponseBody> {
  const query = filter?.externalId ? `?externalId=${filter.externalId}` : ""
  const response: GetSubsListResponseBody = await fetchWrapper("/api/sec/subs" + query)
  // console.log(response);
  
  return response
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