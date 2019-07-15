import { createSchema, Type, typedModel } from 'ts-mongoose';
import { NextFunction } from "express";
import bcrypt from "bcrypt";

const roles = ['ADMIN', 'USER'] as const;
const UserSchema = createSchema({

    email   : Type.string({
        required : true,
        unique   : true,
    }),
    first     : Type.string({ required : true }),
    last      : Type.string({ required : true }),
    role      : Type.string({ enum     : roles }),
    password  : Type.string({ required : true }),
    created   : Type.date({ default: Date.now as any}),
}, {
    statics  : {
        hashPassword: function() {
            this.password = bcrypt.hashSync(this.password, 10);
        },
        comparePassword: function(unencryptedPassword: string) {
            return bcrypt.compareSync(unencryptedPassword, this.password);
        }
    }
}, { timestamps : true });

const User = typedModel('User', UserSchema);
export default User;
