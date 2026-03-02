import { useContext } from "react"
import { subsTableContext, type ContextShape } from "../ContextProvider.tsx"

export default function useSubsTableContext(): ContextShape {
  const ctx = useContext(subsTableContext)

  if (!ctx) throw "Empty subsTableContext context"

  return ctx
}