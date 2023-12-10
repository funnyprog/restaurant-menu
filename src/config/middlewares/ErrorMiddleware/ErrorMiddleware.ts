import { ApiError } from "./ApiError"
import { NextFunction, Response, Request } from "express";

type UnknownError = {
    stack?: string,
    message: string
};

export const ErrorMiddleware = (
    err: ApiError | UnknownError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message });
    }
    return res.status(500).json({ message: err.message });
};