import { Response } from "express";
import { container } from "tsyringe";
import { AddProductCarrinhoUseCase } from "./AddProductCarrinhoUseCase";



export class AddProductCarrinhoController{

  async handle(request: Request, response: Response): Promise<Response>{

    const addProductCarrinhoUseCase = container.resolve(AddProductCarrinhoUseCase)

    await addProductCarrinhoUseCase.execute()

    return response.send()
  }
}