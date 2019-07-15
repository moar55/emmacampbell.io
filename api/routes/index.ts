/**
 * api/routes/index
 *
 * @author Emma Campbell
 * @since 07/15/2019
 */
import { Request, Response, Application } from "express";

export class IndexRoute {

    public routes(app: Application): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send("Index")
            })
    }
}
