import { AuthenticateUserController } from '@modules/accounts/UseCases/authenticateUser/AuthenticateUserController'
import { Router } from 'express'


const authenticateRoutes = Router()

const authenticateUserController = new AuthenticateUserController()

authenticateRoutes.post("/login", authenticateUserController.handle)


export { authenticateRoutes }