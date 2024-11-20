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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("../routes/user.routes"));
const config_db_1 = require("../dataBase/config.db");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        //database connection
        this.connectDB();
        //middlewares
        this.middlewares();
    }
    connectDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_db_1.dBConnection)();
        });
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