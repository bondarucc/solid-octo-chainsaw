export type Report = {
  Create: {
    Request: {
      Query: {
        from: string,
        to: string
      }
    }
    Response: {
      totalIncome: number
      totalExpenses: number
      newSubs: number
      paidExtensions: number
      freeExtensions: number
    }
  }
}

