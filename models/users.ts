import { Schema, model } from "mongoose";
import { User } from "../interfaces/user-interface";

const userSchema = new Schema<User>({
  name: {
    type: String,
    required: [true, "The field name is mandatory"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "The field email is mandatory"],
  },
  password: {
    type: String,
    required: [true, "The field password is mandatory"],
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    enum: ["ADMIN_ROLE", "USER_ROLE"],
  },
  state: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});
const UserModel = model("User", userSchema);
export const models = { UserModel };
