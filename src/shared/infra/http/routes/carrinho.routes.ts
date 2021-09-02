import { AddProductCarrinhoController } from '@modules/carrinho/UseCases/addProduct/AddProductCarrinhoController'
import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const carrinhoRoutes = Router()

const addProductCarrinhoController = new AddProductCarrinhoController()

carrinhoRoutes.post("/carrinho", ensureAuthenticated, addProductCarrinhoController.handle)


export { carrinhoRoutes }