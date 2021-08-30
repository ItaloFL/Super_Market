import { Router } from 'express'
import { CreateUserController } from '@modules/accounts/UseCases/createUser/CreateUserController'
import { ProfileUserController } from '@modules/accounts/UseCases/profileUser/ProfileUserController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { UpdateUserController } from '@modules/accounts/UseCases/updateUser/UpdateUserController'



const usersRoutes = Router()

const createUserController = new CreateUserController()
const profileUserController = new ProfileUserController()
const updateUserController = new UpdateUserController()

usersRoutes.post("/", createUserController.handle)
usersRoutes.get("/profile", ensureAuthenticated,  profileUserController.handle)
usersRoutes.put("/update", ensureAuthenticated, updateUserController.handle)


export { usersRoutes }