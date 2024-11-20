import { Request } from "express";
import { ParamsDictionary as Params, Query } from "express-serve-static-core";
export interface TypedRequestBody<T> extends Request {
  body: T;
}
export interface TypeRequestQuery<T extends Query> extends Request {
  query: T;
}

export interface TypeRequestParams<T extends Params> extends Request {
  params: T;
}
