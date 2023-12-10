import {NextFunction, Request, Response} from "express";
import {UserService} from "../../services";

type LoginRequest = Request<{}, [], {email: string, password: string}>;

type CreateUserRequest = Request<{}, [], {email: string, username: string, password: string}>;

export const UserController = {
    createUser: async (req: CreateUserRequest, res: Response, next: NextFunction) => {
        try {
            return res.json(await UserService.createUser(req.body))
        } catch (e) {
            next(e)
        }
    },
    login: async (req: LoginRequest, res: Response, next: NextFunction) => {
        try {
            return res.json(await UserService.login(req.body))
        } catch (e) {
            next(e)
        }
    }
}