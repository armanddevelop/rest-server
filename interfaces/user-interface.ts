import { Request } from "express";

interface IUser {
  name: string;
  email: string;
  password: string;
  role: string;
  img?: string;
  state?: boolean;
  google?: boolean;
}
export interface TypedRequestBody<T> extends Request {
  body: T;
}

export type User = IUser;
