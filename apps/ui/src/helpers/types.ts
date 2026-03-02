export type ReplaceDatesWithStrings<T> = {
  [K in keyof T]: Date extends T[K] ? Exclude<T[K], Date> | string : T[K]
}

export type RecursivePartial<T> = {
  [K in keyof T]?: T[K] extends {} | null ? RecursivePartial<T[K]> : T[K] | undefined
}
