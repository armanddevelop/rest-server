"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("../controllers/users-controller");
const router = express_1.default.Router();
router.get("/getUser", users_controller_1.getUser);
router.post("/createUser", users_controller_1.createUser);
router.put("/editUser/:id", users_controller_1.editUser);
router.patch("/editInfoUser", users_controller_1.editInfoUser);
router.delete("/deleteUser", users_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map