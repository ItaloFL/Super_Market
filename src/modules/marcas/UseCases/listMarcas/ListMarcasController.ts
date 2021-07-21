import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListMarcasUseCase } from "./ ListMarcasUseCase";



export class ListMarcasController{

  async handle(request: Request, response: Response): Promise<Response>{

    const listMarcasUseCase = container.resolve(ListMarcasUseCase)

    const marcas = await listMarcasUseCase.execute()

    return response.json(marcas)
  }
}