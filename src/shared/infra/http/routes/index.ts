import { Router } from 'express'
import { authenticateRoutes } from './authenticate.routes'
import { marcasRoutes } from './marca.routes'
import { productRoutes } from './product.routes'
import { usersRoutes } from './users.routes'


const routes = Router()

routes.use("/users", usersRoutes)
routes.use("/product", productRoutes)
routes.use("/marca", marcasRoutes)
routes.use(authenticateRoutes)



export { routes }