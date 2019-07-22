import { Request, Response, NextFunction } from "express";
import * as express from "express";
import * as mongoose from "mongoose";

import * as logger from "morgan";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";

const {
    MONGO_URI,
    NODE_ENV,
    PORT
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
        this.connectMongo();
        this.app.use(PORT);
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
