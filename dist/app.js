"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const server_1 = require("./models/server");
const PORT = process.env.PORT || 8080;
const server = new server_1.Server();
server.listen(PORT);
server.routes("/api/users");
//# sourceMappingURL=app.js.map