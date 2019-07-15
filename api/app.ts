// src/app.ts
import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import { UserRoutes } from "./routes/user.routes";
import { Database } from "./config/database";

require('dotenv').config();

class App {

    public app: express.Application;
    public userRouter: UserRoutes = new UserRoutes();
    public db: Database;

    constructor() {
        this.app = express();
        this.config();
        this.userRouter.routes(this.app);

        this.db = new Database(process.env.DB_HOST, process.env.DB_PORT);
    }

    private config(): void {
        // suport application/json type post data
        this.app.use(bodyParser.json());

        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;
