import {Router} from 'express'
import passport from "passport";
import {DishController} from "../../controllers";

const enum DishRouterEnum {
    CREATE = '/create',
    GET_ALL = '/all',
    GET_ONE = '/:id',
    UPDATE_ONE = '/:id',
    REMOVE_ONE = '/:id',
}

export const dishRouter = Router();

dishRouter.post(
    DishRouterEnum.CREATE,
    passport.authenticate('jwt', { session: false }),
    DishController.createDish
)

dishRouter.get(
    DishRouterEnum.GET_ALL,
    passport.authenticate('jwt', { session: false }),
    DishController.getAllDishes
)

dishRouter.get(
    DishRouterEnum.GET_ONE,
    passport.authenticate('jwt', { session: false }),
    DishController.getDish
)

dishRouter.put(
    DishRouterEnum.UPDATE_ONE,
    passport.authenticate('jwt', { session: false }),
    DishController.updateDish
)

dishRouter.delete(
    DishRouterEnum.REMOVE_ONE,
    passport.authenticate('jwt', { session: false }),
    DishController.removeDish
)
