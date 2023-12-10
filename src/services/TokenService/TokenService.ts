import * as jwt from "jsonwebtoken";
import {JWT_TOKEN_SECRET} from "../../config";

export const TokenService = {
    generateAccessToken: (id: number) => jwt.sign(
        { id },
        JWT_TOKEN_SECRET as string,
        { expiresIn: '365d' })
}