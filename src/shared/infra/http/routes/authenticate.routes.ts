import { AuthenticateUserController } from '@modules/accounts/UseCases/authenticateUser/AuthenticateUserController'
import { RefreshTokenUserController } from '@modules/accounts/UseCases/refreshToken/RefreshTokenUserController'
import { Router } from 'express'


const authenticateRoutes = Router()

const authenticateUserController = new AuthenticateUserController()
const refreshTokenUserController = new RefreshTokenUserController()

authenticateRoutes.post("/login", authenticateUserController.handle)
authenticateRoutes.post("/refresh-token", refreshTokenUserController.handle)


export { authenticateRoutes }