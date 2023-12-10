import {PrismaClient} from "@prisma/client";
import {ApiError} from "../../config";

type TCreateCategoryParams = {
    slug: string
    name: string
    parentId?: number
}

const prisma = new PrismaClient()


export const CategoryService = {
    createCategory: async (params: TCreateCategoryParams) => {
        if (!params.slug) {
            throw ApiError.badRequest('Не указан slug')
        } else if (!params.name) {
            throw ApiError.badRequest('Не указан name')
        }

        const data = {
            slug: params.slug,
            name: params.name,
            active: true
        }

        if (params.parentId) {

        }

        return await prisma.category.create({data})
    }
}