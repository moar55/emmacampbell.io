/**
 * /config/routes.ts
 * @class Routes
 * @since 07-21-2019
 * @author Emma Campbell
 */
import { Router, Application, Request, Response, NextFunction } from "express";

export default class Routes {

    public router: Router;
    private app: Application;

    /*-----------Constructor----------*/
    constructor(app: Application) {
        //
        // set Router
        this.router = Router();

        //
        // set app
        this.app = app;

        //
        // set all routes
        this.setAllRoutes();

    }


    /*-----------Methods--------------*/

    /**
     * Set all app routes
     */
    setAllRoutes() {

        /*--------------Custom Routes--------------*/

        // @todo: userRouter
        // this.app.use('api/users', userRouter);

        /*--------------Main Routes----------------*/

        //
        // set index route
        this.setIndexRoute();
    }

    /**
     * Set the index route
     */
    private setIndexRoute() {
        this.app.route("/*").get(this.index);
    }


    /**
     * Main route
     */
    private index(req: Request, res: Response, next: NextFunction) {
        res.json({
            message : "hello!"
        });
    }
}
