import mongoose from 'mongoose';
import { UserSchema } from '../models/user';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);

export class UserController {

    /**
     * Create a new User
     *
     * @param req express request
     * @param res express response
     */
    public newUser(req: Request, res: Response) {
        let newUser = new User(req.body);

        newUser.save((err, user) => {

            if (err) {
                res.send(err);
            }

            res.json(user);
        });
    }

    /**
     * Get all existing Users
     *
     * @param req express request
     * @param res express response
     */
    public getUsers(req: Request, res: Response) {
        User.find({}, (err, user) => {
            if (err) {
                res.send(err);
            }

            res.json(user);
        });
    }


    /**
     * Find a user by their userID
     *
     * @param req express request
     * @param res express response
     */
    public getUserById(req: Request, res: Response) {

        User.findOne({ _id: req.body.id }, (err, user) => {
            if (err) {
                res.send(err);
            }

            res.json(user);
        });
    }

    /**
     * Find a user and update it
     *
     * @param req express request
     * @param res express response
     */
    public updateUser(req: Request, res: Response) {

        User.findOneAndUpdate({ _id: req.body.id }, req.body, { new: true }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });

    }



    /**
     * Finds a user via Id and deletes it
     *
     * @param req express request
     * @param res express response
     */
    public deleteUser(req: Request, res: Response) {
        User.findOneAndDelete({_id: req.body.id },
                              (err, user) => {
                                  if (err) {
                                      res.send(err);
                                  }

                                  res.json({ message: 'User deleted!'});
                              });
    }



}
