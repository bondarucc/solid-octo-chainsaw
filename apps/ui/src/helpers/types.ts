export type RecursivePartial<T> = {
  [K in keyof T]?: T[K] extends {} | null ? RecursivePartial<T[K]> : T[K] | undefined
}

// TO BE IMPORTED FROM SHARED TYPES
export type ReplaceDatesWithStrings<T> = 
  T extends Date 
    ? Exclude<T, Date> | string
    : T extends Array<infer U>
      ? Array<ReplaceDatesWithStrings<U>>
      : T extends object
        ? { [K in keyof T]: ReplaceDatesWithStrings<T[K]> }
        : T