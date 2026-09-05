import type { CreateRepaymentResponseBody, CreateSubRequestBody, CreateSubResponseBody, CreateUserRequestBody, CreateUserResponseBody, ExtendSubRequestBody, FilterSubsList, GenerateReportResponseBody, GetActivityJournalQuery, GetActivityJournalResponseBody, GetMySubsResponseBody, ListSubsResponseBody, ListUsersQueryShape, ListUsersResponseBody, SubPromotionRequestBody, SubPromotionResponseBody, UpdateSubRequestBody, UpdateSubResponseBody, UpdateUserRequestBody } from "@types"
import type { User } from "../../../api/generated/prisma/index"
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

export async function getMe(): Promise<GetMeResponseBody> {
  return await fetchWrapper(
    "/auth/me"
  )
}

export async function logout() {
  await fetchWrapper("/auth/logout", { method: "POST" })
}

export async function getUsersList(filter: ListUsersQueryShape | string = ""): Promise<ListUsersResponseBody> {
  const query = typeof filter === "object" 
    ? `?${new URLSearchParams(Object.entries(filter).filter(([_, v]) => !!v)).toString()}`
    : filter
  return fetchWrapper(`/users${query}`)
}

export async function getSubsList(filter: FilterSubsList): Promise<ListSubsResponseBody> {
  const query = new URLSearchParams(Object.entries(filter).filter(([_, v]) => !!v))
  return fetchWrapper("/subs/full?" + query.toString())
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

export async function getMySubs(): Promise<GetMySubsResponseBody> {
  return fetchWrapper(`/subs/mySubs`)
}

export async function extendSubPkgBy1Year(externalId: string, paymentDetails: ExtendSubRequestBody["paymentDetails"]) {
  return fetchWrapper(`/subs/${externalId}/extend`, { method: "POST", body: JSON.stringify({paymentDetails}), headers: [["Content-Type", "application/json"]] })
}

export async function doRepayment(login: string, amount: number): Promise<CreateRepaymentResponseBody | {error: string}> {
    return await fetchWrapper(`/users/${login}/repayment`, { method: "POST", body: JSON.stringify({ amount }), headers: [["Content-Type", "application/json"]] })
}

// export async function getSubDetails(id: string): Promise<ReplaceDatesWithStrings<GetSingleSubResponseBody>> {
//   return fetchWrapper(`/subs/${id}`)

// }

export async function doUpdateSub(externalId: string, data: UpdateSubRequestBody): Promise<UpdateSubResponseBody | {error: string}> {
  return fetchWrapper(
    `/subs/${externalId}`,
    { 
      method: "PUT",
      body: JSON.stringify(data),
      headers: [["Content-Type", "application/json"]] 
    }
  )
}

export async function generateReport(input: {from: string, to: string}): Promise<GenerateReportResponseBody> {
  const query = new URLSearchParams(input)
  const result = await fetchWrapper(`/report/generate?${query.toString()}`)
  if ("error" in result) throw result.error
  return result
}

export async function promoteSub(subExternalId: string, data: SubPromotionRequestBody): Promise<SubPromotionResponseBody> {
  return fetchWrapper(
    `/subs/${subExternalId}/promote`,
    { 
      method: "POST",
      body: JSON.stringify(data),
      headers: [["Content-Type", "application/json"]] 
    })
}

export async function getActivityJournal(query: string):Promise<GetActivityJournalResponseBody> {
  // const query = new URLSearchParams({from: from.toISOString(), to: to.toISOString()})

  return fetchWrapper(`/report/journal${query}`)
}

export async function doUpdateUser(login: User["login"], data: UpdateUserRequestBody): Promise<User | {error: string}> {
  return fetchWrapper(`/users/${login}`, { method: "PUT", body: JSON.stringify(data), headers: [["Content-Type", "application/json"]] })
}