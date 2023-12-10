import {Router} from "express";
import {userRouter} from './User/user'
import {categoryRouter} from './Category/category'
import {dishRouter} from './Dish/dish'

export const apiRouter = Router();

apiRouter.use('/user', userRouter)
apiRouter.use('/dish', dishRouter)
apiRouter.use('/category', categoryRouter)