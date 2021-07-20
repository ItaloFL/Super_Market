import { CreateProductController } from '@modules/products/UseCases/createProduct/CreateProductController'
import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const productRoutes = Router()

const createProductController = new CreateProductController()

productRoutes.post("/", ensureAuthenticated, createProductController.handle)


export { productRoutes }