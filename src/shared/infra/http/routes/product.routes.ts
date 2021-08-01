import { CreateProductController } from '@modules/products/UseCases/createProduct/CreateProductController'
import { ListProductsController } from '@modules/products/UseCases/listProducts/ListProductsController'
import { SearchProductsController } from '@modules/products/UseCases/searchProducts/SearchProductsController'
import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const productRoutes = Router()

const createProductController = new CreateProductController()
const listProductsController = new ListProductsController()
const searchProductsController = new SearchProductsController()

productRoutes.post("/", ensureAuthenticated, createProductController.handle)
productRoutes.get("/list", ensureAuthenticated, listProductsController.handle)
productRoutes.get("/search", ensureAuthenticated, searchProductsController.handle)


export { productRoutes }