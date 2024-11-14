import { check } from "express-validator";
import { Model } from "mongoose";
import { modelsRole } from "../models/role";
import { modelsUser } from "../models/users";
import { User } from "../interfaces/user-interface";
import { Role } from "../interfaces/role-interface";

const { RoleModel } = modelsRole;
const { UserModel } = modelsUser;

const _manageValidationsField = async <modelType>(
  value: string,
  field: string,
  model: Model<modelType>,
  msg: string
) => {
  let isDataExist;
  if (field === "email") {
    isDataExist = await model.findOne({ email: value });
    if (isDataExist) {
      throw new Error(msg);
    }
  } else if (field === "role") {
    isDataExist = await model.findOne({ role: value });
    if (!isDataExist) {
      throw new Error(msg);
    }
  }
};

export const userValidations = [
  check("name", "This field is mandatory").notEmpty(),
  check("name", "The field name must be min 4 characteres").isLength({
    min: 4,
  }),
  check(
    "password",
    "The password must be min 6 characteres and max 8 characteres"
  ).isLength({ min: 6, max: 8 }),
  check("password", "The password is mandatory").notEmpty(),
  check("email", "the email must be a valid email")
    .isEmail()
    .custom((email) =>
      _manageValidationsField<User>(
        email,
        "email",
        UserModel,
        "The email is duplicate"
      )
    ),
  check("role").custom((role) =>
    _manageValidationsField<Role>(
      role,
      "role",
      RoleModel,
      "The role is not valid"
    )
  ),
];
