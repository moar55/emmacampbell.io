// app.ts
import express from 'express';
import bodyParser from 'body-parser';
import { IndexRoute } from './routes/index';

class App {

    public app: express.Application;
    public indxRouter: IndexRoute = new IndexRoute();

    constructor() {
        this.app = express();
        this.config();
        this.indxRouter.routes(this.app);
    }

    private config(): void {

        let app = this.app;

        // CONFIGURATIONS
        // |
        // |
        // V

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;
