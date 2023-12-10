import {Router} from 'express'
import passport from "passport";
import {CategoryController} from "../../controllers";

const enum CategoryRouterEnum {
    CREATE = '/create',
    GET_ALL = '/all',
    GET_ONE = '/:id',
    UPDATE_ONE = '/:id',
    REMOVE_ONE = '/:id',
}

export const categoryRouter = Router();

categoryRouter.post(
    CategoryRouterEnum.CREATE,
    passport.authenticate('jwt', { session: false }),
    CategoryController.createCategory
)

categoryRouter.get(
    CategoryRouterEnum.GET_ALL,
    passport.authenticate('jwt', { session: false }),
    CategoryController.getAllCategories
)

categoryRouter.get(
    CategoryRouterEnum.GET_ONE,
    passport.authenticate('jwt', { session: false }),
    CategoryController.getCategory
)

categoryRouter.put(
    CategoryRouterEnum.UPDATE_ONE,
    passport.authenticate('jwt', { session: false }),
    CategoryController.updateCategory
)

categoryRouter.delete(
    CategoryRouterEnum.REMOVE_ONE,
    passport.authenticate('jwt', { session: false }),
    CategoryController.removeCategory
)
