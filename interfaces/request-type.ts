import { Request } from "express";
import { Query } from "express-serve-static-core";
export interface TypedRequestBody<T> extends Request {
  body: T;
}
export interface TypeRequestQuery<T extends Query> extends Request {
  query: T;
}
