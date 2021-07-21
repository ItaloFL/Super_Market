import { Product } from "@modules/products/typeorm/infra/entities/Product";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListProductsUseCase } from "./ListProductsUseCase";



export class ListProductsController{

  async handle(request: Request, response: Response): Promise<Response>{

    const listProductsUseCase = container.resolve(ListProductsUseCase)

    const products = await listProductsUseCase.execute()

    return response.json(products)
  }
}