"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("../routes/user.routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        //middlewares
        this.middlewares();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.static("public"));
        //read body and parse it
        this.app.use(express_1.default.json());
    }
    routes(path = "") {
        path.length !== 0
            ? this.app.use(path, user_routes_1.default)
            : this.app.use("/api/", user_routes_1.default);
    }
    listen(PORT) {
        this.app.listen(PORT, () => {
            console.log("APP LISTEN IN THE URL http://localhost:" + PORT);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map