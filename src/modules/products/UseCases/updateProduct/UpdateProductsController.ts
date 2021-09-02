import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateProductsUseCase } from "./UpdateProductsUseCase";



export class UpdateProductsController{

  async handle(request: Request, response: Response): Promise<Response>{

    const { id } = request.params

    const { 
      name,
      valor,
      quantidade,
      marca_id,
      description,
      photo
    } = request.body

    const updateProductsUseCase = container.resolve(UpdateProductsUseCase)

    const product = await updateProductsUseCase.execute({
      id,
      name,
      valor,
      quantidade,
      marca_id,
      description,
      photo
    })

    return response.status(200).json(product)
  }
}