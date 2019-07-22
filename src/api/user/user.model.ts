/**
 *
 */
import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const userSchema = new Schema({
    first: {
        type: String,
        required: "Enter a first name"
    },
    last : {
        type: String,
        required: "Enter a last name"
    },
    email : {
        type : String,
        unique : true,
        required: "Email cannot be blank"
    },
    password : {
        type: String,
        minlength: 8,
        maxlength: 28,
        required: "Password cannot be blank"
    },
    created : {
        type: Date,
        default: Date.now
    }
});
