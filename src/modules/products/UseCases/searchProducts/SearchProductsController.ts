import { Request, Response } from "express";
import { container } from "tsyringe";
import { SearchProductsUseCase } from "./SearchProductsUseCase";



export class SearchProductsController{

  async handle(request: Request, response: Response): Promise<Response>{

    const { productName } = request.params

    const searchProductsUseCase = container.resolve(SearchProductsUseCase)

    const product = await searchProductsUseCase.execute({
      productName
    })

    return response.status(200).json(product)
  }
}