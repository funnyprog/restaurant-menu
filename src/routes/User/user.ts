import {Router} from 'express'
import {UserController} from "../../controllers";

const enum UserRouterEnum {
  CREATE = '/create',
  GET_ALL = '/all',
  GET_ONE = '/:id',
  UPDATE_ONE = '/:id',
  REMOVE_ONE = '/:id',

  LOGIN = '/login'
}

export const userRouter = Router();

userRouter.post(
    UserRouterEnum.CREATE,
    UserController.createUser
)

userRouter.post(
    UserRouterEnum.LOGIN,
    UserController.login
)
