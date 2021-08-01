import { Request, Response } from "express";
import { container } from "tsyringe";
import { SearchProductsUseCase } from "./SearchProductsUseCase";



export class SearchProductsController{

  async handle(request: Request, response: Response): Promise<Response>{

    const { productName, marcaName } = request.params

    const searchProductsUseCase = container.resolve(SearchProductsUseCase)

    await searchProductsUseCase.execute({
      productName,
      marcaName
    })

    return response.send()
  }
}