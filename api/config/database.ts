// src/config/database.ts
import mongoose from "mongoose";

export class Database {

    public PORT: string;
    public HOST: string;
    public MONGO_URI: string;

    constructor(host: string, port: string) {
        this.PORT = port;
        this.HOST = host;
        this.MONGO_URI = "mongodb://" + this.HOST + ":" + this.PORT;
        this.config();
    }

    private config(): void {
        mongoose.Promise = global.Promise;
        mongoose.set('useCreateIndex', true);
        mongoose.set('useFindAndModify', true);
        mongoose.connect(this.MONGO_URI, { useNewUrlParser: true}).catch((err) => {
            console.log(err);
        });
    }
}

