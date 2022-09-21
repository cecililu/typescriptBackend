
import { ValidationError } from "express-validator";
import { CustomError } from "./CustomError";

export class RequestValidationError extends Error {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super("Invalid field props");

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  seralizeErrors() {
    return this.errors.map((each) => {
      return {
        message: each.msg,
        field: each.param,
      };
    });
  }
}
