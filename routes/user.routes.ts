import express from "express";
import {
  getUser,
  editUser,
  createUser,
  editInfoUser,
  deleteUser,
} from "../controllers/users-controller";
import { userValidations } from "../helpers/validations";
import { validateFields } from "../middlewares/validate-fields";

const router = express.Router();

router.get("/getUser", getUser);

router.post("/createUser", userValidations, validateFields, createUser);

router.put("/editUser/:id", editUser);

router.patch("/editInfoUser", editInfoUser);

router.delete("/deleteUser", deleteUser);

export default router;
