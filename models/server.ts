import express, { Express } from "express";
import cors from "cors";
import router from "../routes/user.routes";
import { dBConnection } from "../dataBase/config.db";

export class Server {
  private app: Express;

  constructor() {
    this.app = express();
    //database connection
    this.connectDB();
    //middlewares
    this.middlewares();
  }

  async connectDB() {
    await dBConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static("public"));
    //read body and parse it
    this.app.use(express.json());
  }
  routes(path: string = "") {
    path.length !== 0
      ? this.app.use(path, router)
      : this.app.use("/api/", router);
  }

  listen(PORT: string | number) {
    this.app.listen(PORT, () => {
      console.log("APP LISTEN IN THE URL http://localhost:" + PORT);
    });
  }
}
