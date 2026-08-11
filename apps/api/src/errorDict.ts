export abstract class InternalError extends Error {
  abstract code: String
  toString(): String {
    return this.code
  }
}

export class UnauthorizedError extends InternalError {
  code: String = "UnauthorizedError"
}

export class ForbiddenError extends InternalError {
  code: String = "ForbiddenError"
}

export class InvalidReportInput extends InternalError {
  code: String = "InvalidReportInput"
} 
