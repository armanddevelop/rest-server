import { Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { TypedRequestBody, User } from "../interfaces/user-interface";

export const validateFields = (
  req: TypedRequestBody<User>,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ msg: errors });
    return;
  }
  next();
};
