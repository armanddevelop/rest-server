import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { models } from "../models/users";
import { User, TypedRequestBody } from "../interfaces/user-interface";
import { encryptPass } from "../helpers/userHelper";

export const getUser = async (req: Request, res: Response) => {
  const { q, name = "no name", apikey, page = 1 } = req.query;
  try {
    res.json({
      msg: "GET hola patches",
      q,
      name,
      apikey,
      page,
    });
  } catch (error) {
    console.error("[getUserControllerError]: ", error);
  }
};
export const editUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    res.json({
      msg: "PUT hola patches",
      id,
    });
  } catch (error) {
    console.error("[editUserControllerError]: ", error);
  }
};

export const createUser = async (
  req: TypedRequestBody<User>,
  res: Response
) => {
  const { UserModel } = models;

  try {
    const {
      body: { name, email, password, role },
    } = req;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("errors ", errors);
      res.status(400).json({ msg: "some shit happends" });
      return;
    }
    const user = new UserModel({ name, email, password, role });
    const isEmailRegister = await UserModel.findOne({ email });
    if (isEmailRegister) {
      res.status(400).json({ msg: "Email already exist" });
      return;
    }
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
