
/**
 * @class Application
 * @since 07-21-2019
 * @author Emma Campbell
 *
 * This is the Application 'wrapper'
 */
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import * as mongoose from "mongoose";

class App {

    public app: express.Application;
    private envFile = './.env';


    /*---------Constructor---------*/

    constructor () {

        //
        // ENV
        this.setEnv();

        //
        // MONGO
        this.connectToMongo();

        //
        // VIEWS
        this.setViewEngine();

        //
        // MIDDLEWARES
        this.configMiddleware();

        //
        // STATIC
        this.configStatic();


        //
        // ROUTES
        this.configRoutes();

    }

    /*-----------Methods------------*/

    private setEnv () {
        //
        // add NODE_ENV to path if !== 'production'
        if ( process.env.NODE_ENV !== 'production') {
            this.envFile += '.' + process.env.NODE_ENV;
        }

        //
        // set env from file
        dotenv.config({ path: this.envFile })
    }

    /**
     * Connect to Mongo
     */
    private connectToMongo () {
        //
        // Connect to mongo using mongoose
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            db : {
                safe : true,
            }
        });
    }

    /**
     * Set the view Engine
     */
    private setViewEngine () {

        //
        // configure ejs as view engine
        this.app.set("views", "../../views");
        this.app.set("view engine", "ejs");
    }

    /**
     * Configure Middleware
     */
    private configMiddleware () {

        //
        // adding logging
        this.app.use(logger('dev'));

        //
        // add body parser
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended : true }));

        //
        // adding cookie parser
        this.app.use(cookieParser());
    }

    /**
     * Configure static route
     */
    private configStatic () {
        //
        // Set static route for static folder
        this.app.use(express.static(path.join(__dirname, "../static")));
    }

    /**
     * Set routes
     */
    private configRoutes() {

        //
        // create Routes, and export its  configured express.Router;
        // new Routes(this.app);
    }
}

export default new App().app;
