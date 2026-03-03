import type { PropsWithChildren } from "react";

export function ClickGuard({children}: PropsWithChildren) {
  return (
    <div onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}>
      {children}
    </div>
  )
}