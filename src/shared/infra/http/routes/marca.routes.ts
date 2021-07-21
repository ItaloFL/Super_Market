import { CreateMarcaController } from '@modules/marcas/UseCases/createMarcas/CreateMarcaController'
import { ListMarcasController } from '@modules/marcas/UseCases/listMarcas/ListMarcasController'
import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'


const marcasRoutes = Router()

const createMarcaController = new CreateMarcaController()
const listMarcasController = new ListMarcasController()

marcasRoutes.post("/", ensureAuthenticated, createMarcaController.handle)
marcasRoutes.get("/list", ensureAuthenticated, listMarcasController.handle)


export { marcasRoutes }