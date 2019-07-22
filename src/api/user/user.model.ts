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
    role : Role,
});

type Role = [
    "ADMIN",
    "USER"
];
