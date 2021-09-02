import { Router } from 'express'
import { authenticateRoutes } from './authenticate.routes'
import { carrinhoRoutes } from './carrinho.routes'
import { marcasRoutes } from './marca.routes'
import { productRoutes } from './product.routes'
import { usersRoutes } from './users.routes'


const routes = Router()

routes.use("/users", usersRoutes)
routes.use("/product", productRoutes)
routes.use("/marca", marcasRoutes)
routes.use(carrinhoRoutes)
routes.use(authenticateRoutes)



export { routes }