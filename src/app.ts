import { Request, Response, NextFunction } from "express";
import express from "express";
import mongoose from "mongoose";

import logger from "morgan";
import dotenv from "dotenv";
import bodyParser from "body-parser";

const {
    MONGO_URI,
    NODE_ENV,
} = process.env;

export class App {

    public app: express.Application;

    /**
     * Constructor
     */
    constructor () {
        this.app = express();
        this.config();
    }


    /*-------------Configure------------*/
    private config() {
        this.configMiddleware();
        //this.connectMongo();
        //this.app.use(PORT);
    }


    /*-------------Methods--------------*/

    private configMiddleware() {

        if (NODE_ENV === 'dev') {
            this.app.use(logger('dev'));
        }

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded( { extended : true }));
    }

    private connectMongo () {
        mongoose.connect(MONGO_URI, { useNewUrlParser :  true});
    }
}

export default new App().app;
