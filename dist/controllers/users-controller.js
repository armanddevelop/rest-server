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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.editInfoUser = exports.createUser = exports.editUser = exports.getUser = void 0;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { q, name = "no name", apikey, page = 1 } = req.query;
    try {
        res.json({
            msg: "GET hola patches",
            q,
            name,
            apikey,
            page,
        });
    }
    catch (error) {
        console.error("[getUserControllerError]: ", error);
    }
});
exports.getUser = getUser;
const editUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        res.json({
            msg: "PUT hola patches",
            id,
        });
    }
    catch (error) {
        console.error("[editUserControllerError]: ", error);
    }
});
exports.editUser = editUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body: { age, name }, } = req;
        res.json({
            msg: "POST hola patches",
            name,
            age,
        });
    }
    catch (error) {
        console.error("createUserControllerError]: ", error);
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
const deleteUser = (req, res) => {
    try {
        res.json({
            msg: "DELETE hola patches",
        });
    }
    catch (error) {
        console.error("deleteUserError]: ", error);
    }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users-controller.js.map