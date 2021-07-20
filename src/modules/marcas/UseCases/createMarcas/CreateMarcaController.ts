import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMarcaUseCase } from "./CreateMarcaUseCase";


export class CreateMarcaController{

  async handle(request: Request, response: Response): Promise<Response>{

    const { name, description } = request.body

    const createMarcaUseCase = container.resolve(CreateMarcaUseCase)

    const marca = await createMarcaUseCase.execute({
      name,
      description
    })

    return response.status(201).json(marca) 
  }
}