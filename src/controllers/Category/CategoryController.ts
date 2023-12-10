import {NextFunction, Response, Request} from "express";
import {CategoryService} from "../../services";

type CreateCategoryRequest = Request<{}, [], {
    slug: string
    name: string
    parentId?: number
}>;


export const CategoryController = {
    createCategory: async (req: CreateCategoryRequest, res: Response, next: NextFunction) => {
        try {
            return res.json(await CategoryService.createCategory(req.body))
        } catch (e) {
            next(e)
        }
    },
    getAllCategories: () => {},
    getCategory: () => {},
    updateCategory: () => {},
    removeCategory: () => {}
}