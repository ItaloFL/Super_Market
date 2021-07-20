import { CreateMarcaController } from '@modules/marcas/UseCases/createMarcas/CreateMarcaController'
import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'


const marcasRoutes = Router()

const createMarcaController = new CreateMarcaController()

marcasRoutes.post("/", ensureAuthenticated, createMarcaController.handle)


export { marcasRoutes }