// src/models/user.ts
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

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
    google: {
        type: String,
    },
    password: {
        type: String,
        max: 28,
        min: 8,
        required: true
    },
    passwordResetToken: {
        type: String
    },
    passwordResetExpires: {
        type: Date
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    tokens: {
        type: Array,
    }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
