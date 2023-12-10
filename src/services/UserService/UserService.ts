import {ApiError} from "../../config";
import {PrismaClient} from "@prisma/client";
import bcrypt from "bcryptjs";
import {TokenService} from "../TokenService/TokenService";

type TCreateUserParams = {
    email: string
    username: string
    password: string
}

type TLoginParams = {
    email: string
    password: string
}

const prisma = new PrismaClient()

export const UserService = {
    createUser: async (params: TCreateUserParams) => {
        if (!params.email) {
            throw ApiError.badRequest('Не указан email')
        } else if (!params.email) {
            throw ApiError.badRequest('Не указан email')
        } else if (!params.password) {
            throw ApiError.badRequest('Не указан password')
        }

        return await prisma.user.create({
            data: {
                email: params.email,
                username: params.username ?? '',
                password: bcrypt.hashSync(params.password, 3)
            },
            select: {
                id: true,
                email: true,
                username: true
            }
        })
    },
    login: async (params: TLoginParams) => {
        if (!params.email) {
            throw ApiError.badRequest('Не указан email')
        } else if (!params.password) {
            throw ApiError.badRequest('Не указан password')
        }

        const user = await prisma.user.findUnique({
            where: {
                email: params.email
            }
        })

        if (!user) {
            throw ApiError.notFound('Пользователь с таким email не найден')
        }

        const isValidPassword = bcrypt.compareSync(params.password, user.password);
        if (!isValidPassword) {
            throw ApiError.badRequest('Введён неправильный пароль');
        }

        return {
            id: user.id,
            email: user.email,
            username: user.username,
            token: TokenService.generateAccessToken(user.id)
        };
    }
}