import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProductUseCase } from "./CreateProductUseCase";


export class CreateProductController{

  async handle(request: Request, response: Response): Promise<Response>{

    const { name, marca_id,  description, quantidade, valor, photo } = request.body

    const createProductUseCase = container.resolve(CreateProductUseCase)

    const product = await createProductUseCase.execute({
      name,
      marca_id,
      description,
      quantidade,
      valor,
      photo 
    })

    return response.status(201).json(product)
  }
}