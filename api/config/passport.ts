// src/config/passport.ts
import passport from 'passport';
import passportLocal from 'passport-local';
import passportGoogle from 'passport-google';
import _ from "lodash";

import { User } from '../models/user';
import { Request, Response, NextFunction } from 'express';

const LocalStrategy = passportLocal.Strategy;
const GoogleStrategy = passportGoogle.Strategy;

passport.serializeUser<any, any>((user, done) => {
    done(undefined, user.id);
});

passport.deserializeUser((id, done) => {
    User.findOne(id, (err, user) => {
        done(err, user);
    });
});

/**
 * Sign in using Email and Password
 */
passport.use(new LocalStrategy({ username: "email" }, (email, password, done) => {
    User.findOne({ email: email.toLowerCase() }, (err, user: any) => {
        if (err) { return done(err); }
        if (!user) {
            return done(undefined, false, { message: "Email ${email} was not found in our database"});
        }
        user.comparePassword(password, (err: Error, isMatch: boolean) => {
            if (err) { return done(err); }
            if (isMatch) {
                return done(undefined, user);
            }
            return done(undefined, false, { message: "Password does not match our records."});
        });
    });
}));


/**
 * Log in Middleware
 */
export const isAuthenticated = ( req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated) {
        return next();
    }
    res.redirect("/login");
}


/**
 * Authorization Middleware
 */
export const isAuthorized = (req: Request, res: Response, next: NextFunction) => {
    const provider = req.path.split("/").slice(-1)[0];

    if (_.find(req.user.tokens, { kind: provider })) {
        next();
    } else {
        res.redirect('/auth/${provider}');
    }
};
