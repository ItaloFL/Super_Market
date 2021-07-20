import { Router } from 'express'
import { CreateUserController } from '@modules/accounts/UseCases/createUser/CreateUserController'
import { ProfileUserController } from '@modules/accounts/UseCases/profileUser/ProfileUserController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'



const usersRoutes = Router()

const createUserController = new CreateUserController()
const profileUserController = new ProfileUserController

usersRoutes.post("/", createUserController.handle)
usersRoutes.get("/profile", ensureAuthenticated,  profileUserController.handle)


export { usersRoutes }