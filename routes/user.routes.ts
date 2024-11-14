import express from "express";
import {
  getUser,
  editUser,
  createUser,
  editInfoUser,
  deleteUser,
} from "../controllers/users-controller";
import { check } from "express-validator";

const router = express.Router();

router.get("/getUser", getUser);

router.post(
  "/createUser",
  [check("email", "email is not valid").isEmail()],
  createUser
);

router.put("/editUser/:id", editUser);

router.patch("/editInfoUser", editInfoUser);

router.delete("/deleteUser", deleteUser);

export default router;
