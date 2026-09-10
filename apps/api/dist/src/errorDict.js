export class InternalError extends Error {
    toString() {
        return this.code;
    }
}
export class UnauthorizedError extends InternalError {
    code = "UnauthorizedError";
}
export class ForbiddenError extends InternalError {
    code = "ForbiddenError";
}
export class InvalidReportInput extends InternalError {
    code = "InvalidReportInput";
}
