"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("../controllers/users-controller");
const validations_1 = require("../helpers/validations");
const validate_fields_1 = require("../middlewares/validate-fields");
const router = express_1.default.Router();
router.get("/getUser", users_controller_1.getUser);
router.post("/createUser", validations_1.userValidations, validate_fields_1.validateFields, users_controller_1.createUser);
router.put("/editUser/:id", validations_1.editUserValidations, validate_fields_1.validateFields, users_controller_1.editUser);
router.patch("/editInfoUser", users_controller_1.editInfoUser);
router.delete("/deleteUser/:id", validations_1.deleteUserValidations, validate_fields_1.validateFields, users_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map