import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { User } from '../models/user';

class AuthController {
    static login = async (req: Request, res: Response) => {
        //check user and password
        let { username, password } = req.body;
        if (!(username && password)) {
            res.status(400).send();
        }

}
