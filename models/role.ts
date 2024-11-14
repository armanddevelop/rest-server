import { Schema, model } from "mongoose";
import { Role } from "../interfaces/role-interface";
const roleSchema = new Schema<Role>({
  role: {
    type: String,
    require: [true, "The role is requiere"],
  },
});
const RoleModel = model("Roles", roleSchema);

export const modelsRole = { RoleModel };
