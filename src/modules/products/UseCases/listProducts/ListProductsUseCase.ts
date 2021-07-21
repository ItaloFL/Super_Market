import { IProductRepository } from "@modules/products/Repositories/IProductRepository";
import { Product } from "@modules/products/typeorm/infra/entities/Product";
import { inject, injectable } from "tsyringe";


@injectable()
export class ListProductsUseCase{

  constructor(
    @inject("ProductRepository")
    private productsRepository: IProductRepository
  ){}

  async execute(): Promise<Product[]>{

    const products = await this.productsRepository.list()

    return products
  }
}