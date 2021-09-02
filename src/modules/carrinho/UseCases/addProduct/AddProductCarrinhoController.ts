import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddProductCarrinhoUseCase } from "./AddProductCarrinhoUseCase";



export class AddProductCarrinhoController{

  async handle(request: Request, response: Response): Promise<Response>{

    const { name, photo, quantidade, valor } = request.body

    const addProductCarrinhoUseCase = container.resolve(AddProductCarrinhoUseCase)

    const productIntoCarrinho = await addProductCarrinhoUseCase.execute({
      name,
      photo,
      quantidade,
      valor
    })

    return response.status(200).json(productIntoCarrinho)
  }
}