/**
 * user/user.routes.ts
 *
 * @class userRouter
 */
import { Application, Request, Response, NextFunction } from "express";
import { UserController } from "./user.controller";

export class userRouter {

    public user_controller: UserController = new UserController();

    public routes(app: Application): void {
        /**
         * Index page
         */
        app.route('/')
            .get((req: Request, res: Response) => {
                res.render("views/index.ejs");
            })

        /**
         * GET /users
         */
        app.route('/users')
            .get((req: Request, res: Response, next: NextFunction) => {
                // middlewares
                console.log('Request from: ${req.originalURL}');
                console.log('Request type: ${req.method}');
            }, this.user_controller.getUsers)
            .post(this.user_controller.addNewUser);  // POST /users

        /**
         * GET /users/:id
         */
        app.route('/users/:id')
            .get(this.user_controller.getUserWithID) // GET
            .put(this.user_controller.updateUser)    // PATCH
            .delete(this.user_controller.deleteUser) // DELETE
    }
}
