// src/models/user.ts
import mongoose from 'mongoose';

//make schema easier to access
const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        max: 28,
        min: 8,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
