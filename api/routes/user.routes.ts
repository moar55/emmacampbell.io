// src/routes/routes.ts
import { Request, Response, Application } from "express";
import { UserController } from '../controllers/user.controller';

export class UserRoutes {

    // import our controls
    public Controller: UserController = new UserController();

    public  routes(app: Application): void {

        // Get index
        app.route('/')
            .get((req: Request, res: Response)=> {
                res.status(200).send({
                    message: 'Hello!'
                })
            })

        /**
         * Users route
         *
         * @returns list of all users
         * @param req express request
         * @param res express response
         */
        app.route('/users')
            .get(this.Controller.getUsers)
            .post(this.Controller.newUser)


        /**
         * Get user details
         *
         * @returns user json object
         * @param req express request
         * @param res express response
         */
        app.route('/users/:userId')
            .get(this.Controller.getUserById)
            .put(this.Controller.updateUser)
            .delete(this.Controller.deleteUser)
    }
}
