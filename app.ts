import "dotenv/config";
import { Server } from "./models/server";

const PORT = process.env.PORT || 8080;
const server = new Server();

server.listen(PORT);
server.routes("/api/users");
