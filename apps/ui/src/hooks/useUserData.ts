import { useRouteLoaderData } from "react-router";
import type { GetMeResponseBody } from "../../../api/src/api/auth/types";
import type { getMe } from "../api/api";

export default function useUserData() {
  const loaderData = useRouteLoaderData<Awaited<ReturnType<typeof getMe>>>("root")

  return {
    error: loaderData && "error" in loaderData ? loaderData.error : undefined,
    userData: !loaderData || "error" in loaderData ? undefined : loaderData
  }


}