import * as mongoose from "mongoose";
import { userSchema } from "./user.model";
import { Request, Response } from "express";

const User = mongoose.model('User', userSchema);

export class UserController {

    public addNewUser (req: Request, res: Response) {
        let newUser = new User(req.body);

        newUser.save((err, user) => {
            if (err) {
                res.send(err);
            }

            res.send(user);
        });
    }


    public getUsers (req: Request, res: Response) {
        User.find({}, (err, user) => {
            if (err) {
                res.send(err);
            }

            res.json(user);
        });
    }


    public getUserWithID (req: Request, res: Response) {
        User.findById(req.params.id, (err, user) => {
            if (err) {
                res.send(err);
            }

            res.json(user);
        });
    }


    public updateUser (req: Request, res: Response) {
        User.findOneAndUpdate({ _id : req.params.id }, req.body, { new : true }, (err, user) => {
            if (err) {
                res.send(err);
            }

            res.json(user);
        });
    }


    public deleteUser (req: Request, res: Response) {
        User.remove({ _id : req.params.id }, (err, user) => {
            if (err) {
                res.send(err);
            }

            res.json(user);
        });
    }
    
}
/**
   /**
   /**
   *
   */
import { Schema, model } from "mongoose";


let schema: Schema  = new Schema({
    name     : String,
    email    : {
        type : String,
        unique: true,
    },
    password : {
        type : String,
        minlength : 8,
        maxlength : 28,
        required: true,
    },
    role : {
        enum: [
            'ADMIN',
            'USER'
        ]
    },
    tokens: Array,
});


   *
   */
import { Schema, model } from "mongoose";


let schema: Schema  = new Schema({
    name     : String,
    email    : {
        type : String,
        unique: true,
    },
    password : {
        type : String,
        minlength : 8,
        maxlength : 28,
        required: true,
    },
    role : {
        enum: [
            'ADMIN',
            'USER'
        ]
    },
    tokens: Array,
});


 *
 */
import { Schema, model } from "mongoose";


let schema: Schema  = new Schema({
    name     : String,
    email    : {
        type : String,
        unique: true,
    },
    password : {
        type : String,
        minlength : 8,
        maxlength : 28,
        required: true,
    },
    role : {
        enum: [
            'ADMIN',
            'USER'
        ]
    },
    tokens: Array,
});


