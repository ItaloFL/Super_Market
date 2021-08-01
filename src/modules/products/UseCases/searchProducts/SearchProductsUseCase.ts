import { IProductRepository } from "@modules/products/Repositories/IProductRepository";
import { inject, injectable } from "tsyringe";


interface IRequest{
  productName: string
  marcaName: string
}

@injectable()
export class SearchProductsUseCase{

  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ){}

  async execute({ productName, marcaName }: IRequest){

    const product = await this.productRepository.search(productName, marcaName)

    return product
  }
}