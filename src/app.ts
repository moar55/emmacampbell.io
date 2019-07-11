// src/app.ts
import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import { UserRoutes } from "./routes/user.routes";

class App {

    public app: express.Application;
    public userRouter: UserRoutes = new UserRoutes();
    public mongoURL: string = "mongodb://localhost:27017/api";

    constructor() {
        this.app = express();
        this.config();
        this.userRouter.routes(this.app);
        this.mongoSetup();
    }

    private config(): void {
        // suport application/json type post data
        this.app.use(bodyParser.json());

        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.set('useCreateIndex', true);
        mongoose.set('useFindAndModify', true);
        mongoose.connect(this.mongoURL, { useNewUrlParser: true }, function(err) {
            if (err) {
                console.error("Unable to connect to mongodb");
            }
        });
    }
}

export default new App().app;
