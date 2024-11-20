"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.editInfoUser = exports.createUser = exports.editUser = exports.getUser = void 0;
const users_1 = require("../models/users");
const userHelper_1 = require("../helpers/userHelper");
const { UserModel } = users_1.modelsUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { limit = "5", from = "0" } = req.query;
        const isANumber = (0, userHelper_1.isNumber)(limit) && (0, userHelper_1.isNumber)(from);
        const paramsQuery = { state: true };
        if (isANumber) {
            const [documents, users] = yield Promise.all([
                UserModel.countDocuments(paramsQuery),
                UserModel.find(paramsQuery).skip(Number(from)).limit(Number(limit)),
            ]);
            res.json({ documents, users });
        }
        else {
            res.status(400).json({ msg: "something go wrong review data" });
        }
    }
    catch (error) {
        console.error("[getUserControllerError]: ", error);
    }
});
exports.getUser = getUser;
const editUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { google, email } = _a, rest = __rest(_a, ["google", "email"]);
    try {
        if (rest.password) {
            rest.password = (0, userHelper_1.encryptPass)(rest.password);
        }
        const userDb = yield UserModel.findByIdAndUpdate(id, rest);
        res.json(userDb);
    }
    catch (error) {
        console.error("[editUserControllerError]: ", error);
    }
});
exports.editUser = editUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body: { name, email, password, role }, } = req;
        const user = new UserModel({ name, email, password, role });
        user.password = (0, userHelper_1.encryptPass)(password);
        yield user.save();
        res.json({
            msg: "Success!!!",
            user,
        });
    }
    catch (error) {
        console.error("[createUserControllerError]: ", error);
        res.status(400).json({
            msg: "Faild to create User",
        });
    }
});
exports.createUser = createUser;
const editInfoUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({
            msg: "PATCH hola patches",
        });
    }
    catch (error) {
        console.error("editInfoUserError]: ", error);
    }
});
exports.editInfoUser = editInfoUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield UserModel.findByIdAndUpdate(id, { state: false });
        res.json({
            user,
        });
    }
    catch (error) {
        console.error("deleteUserError]: ", error);
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=users-controller.js.map