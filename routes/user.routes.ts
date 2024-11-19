import express from "express";
import {
  getUser,
  editUser,
  createUser,
  editInfoUser,
  deleteUser,
} from "../controllers/users-controller";
import { editUserValidations, userValidations } from "../helpers/validations";
import { validateFields } from "../middlewares/validate-fields";

const router = express.Router();

router.get("/getUser", getUser);

router.post("/createUser", userValidations, validateFields, createUser);

router.put("/editUser/:id", editUserValidations, validateFields, editUser);

router.patch("/editInfoUser", editInfoUser);

router.delete("/deleteUser", deleteUser);

export default router;
