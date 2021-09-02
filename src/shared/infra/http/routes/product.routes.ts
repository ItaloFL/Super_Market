import { CreateProductController } from '@modules/products/UseCases/createProduct/CreateProductController'
import { ListProductsController } from '@modules/products/UseCases/listProducts/ListProductsController'
import { SearchProductsController } from '@modules/products/UseCases/searchProducts/SearchProductsController'
import { UpdateProductsController } from '@modules/products/UseCases/updateProduct/UpdateProductsController'
import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const productRoutes = Router()

const createProductController = new CreateProductController()
const listProductsController = new ListProductsController()
const searchProductsController = new SearchProductsController()
const updateProductsController = new UpdateProductsController()

productRoutes.post("/", ensureAuthenticated, createProductController.handle)
productRoutes.get("/list", ensureAuthenticated, listProductsController.handle)
productRoutes.get("/search/:productName", ensureAuthenticated, searchProductsController.handle)
productRoutes.put("/update/:id", ensureAuthenticated, updateProductsController.handle)


export { productRoutes }