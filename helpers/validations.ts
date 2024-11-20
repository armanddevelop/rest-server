import { check, ValidationChain } from "express-validator";
import { Model, FilterQuery } from "mongoose";
import { modelsRole } from "../models/role";
import { modelsUser } from "../models/users";
import { User } from "../interfaces/user-interface";
import { Role } from "../interfaces/role-interface";

const { RoleModel } = modelsRole;
const { UserModel } = modelsUser;

const _manageValidationsField = async <myModel>(
  value: string,
  field: string,
  model: Model<myModel>
) => {
  let isDataExist = null;
  if (field === "email" || field === "role") {
    isDataExist = await model.findOne({
      [field]: value,
    } as FilterQuery<myModel>);
    if (isDataExist && field === "email")
      throw new Error(`The email ${value} is duplicate`);
    else if (!isDataExist && field === "role")
      throw new Error(`The role ${value} is not valid`);
  }
  if (field === "id") {
    isDataExist = await model.findById(value).where({ state: true });
    if (!isDataExist) {
      throw new Error(`The user with id:${value} does not exist`);
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
  check("email", "The email must be a valid email")
    .isEmail()
    .custom((email) =>
      _manageValidationsField<User>(email, "email", UserModel)
    ),
  check("role").custom((role) =>
    _manageValidationsField<Role>(role, "role", RoleModel)
  ),
];

export const editUserValidations = [
  check("id", "The id is not valid").isMongoId(),
  check("id").custom((id) =>
    _manageValidationsField<User>(id, "id", UserModel)
  ),
  check("role")
    .custom((role) => _manageValidationsField<Role>(role, "role", RoleModel))
    .optional(),
];

export const deleteUserValidations = [
  check("id", "The id is not valid").isMongoId(),
  check("id").custom((id) =>
    _manageValidationsField<User>(id, "id", UserModel)
  ),
];
