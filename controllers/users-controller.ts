import { Request, Response } from "express";

import { modelsUser } from "../models/users";
import { User } from "../interfaces/user-interface";
import { TypedRequestBody, TypeRequestQuery } from "../interfaces/request-type";
import { encryptPass, isNumber } from "../helpers/userHelper";

const { UserModel } = modelsUser;

export const getUser = async (
  req: TypeRequestQuery<{ limit: string; from: string }>,
  res: Response
) => {
  try {
    const { limit = "5", from = "0" } = req.query;
    const isANumber = isNumber(limit) && isNumber(from);
    const paramsQuery = { state: true };
    if (isANumber) {
      const [documents, users] = await Promise.all([
        UserModel.countDocuments(paramsQuery),
        UserModel.find(paramsQuery).skip(Number(from)).limit(Number(limit)),
      ]);
      res.json({ documents, users });
    } else {
      res.status(400).json({ msg: "something go wrong review data" });
    }
  } catch (error) {
    console.error("[getUserControllerError]: ", error);
  }
};
export const editUser = async (req: TypedRequestBody<User>, res: Response) => {
  const { id } = req.params;
  const { google, email, ...rest } = req.body;

  try {
    if (rest.password) {
      rest.password = encryptPass(rest.password);
    }
    const userDb = await UserModel.findByIdAndUpdate(id, rest);
    res.json(userDb);
  } catch (error) {
    console.error("[editUserControllerError]: ", error);
  }
};

export const createUser = async (
  req: TypedRequestBody<User>,
  res: Response
) => {
  try {
    const {
      body: { name, email, password, role },
    } = req;

    const user = new UserModel({ name, email, password, role });
    user.password = encryptPass(password);
    await user.save();
    res.json({
      msg: "Success!!!",
      user,
    });
  } catch (error) {
    console.error("[createUserControllerError]: ", error);
    res.status(400).json({
      msg: "Faild to create User",
    });
  }
};

export const editInfoUser = async (req: Request, res: Response) => {
  try {
    res.json({
      msg: "PATCH hola patches",
    });
  } catch (error) {
    console.error("editInfoUserError]: ", error);
  }
};

export const deleteUser = (req: Request, res: Response) => {
  try {
    res.json({
      msg: "DELETE hola patches",
    });
  } catch (error) {
    console.error("deleteUserError]: ", error);
  }
};
