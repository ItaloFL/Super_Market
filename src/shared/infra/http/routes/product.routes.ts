import { CreateProductController } from '@modules/products/UseCases/createProduct/CreateProductController'
import { ListProductsController } from '@modules/products/UseCases/listProducts/ListProductsController'
import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const productRoutes = Router()

const createProductController = new CreateProductController()
const listProductsController = new ListProductsController()

productRoutes.post("/", ensureAuthenticated, createProductController.handle)
productRoutes.get("/list", ensureAuthenticated, listProductsController.handle)


export { productRoutes }