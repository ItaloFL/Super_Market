import { IProductRepository } from "@modules/products/Repositories/IProductRepository";
import { inject, injectable } from "tsyringe";


interface IRequest{
  productName: string
}

@injectable()
export class SearchProductsUseCase{

  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ){}

  async execute({ productName }: IRequest){

    const product = await this.productRepository.search(productName)

    return product
  }
}