import { ICreateProductDTO } from "@modules/products/dtos/ICreateProductDTO";
import { IUpdateProductDTO } from "@modules/products/dtos/IUpdateProductDTO";
import { IProductRepository } from "@modules/products/Repositories/IProductRepository";
import { Product } from "@modules/products/typeorm/infra/entities/Product";
import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateProductsUseCase{

  constructor(
    @inject("ProductRepository")
    private productsRepository: IProductRepository
  ){}

  async execute({ name, valor, quantidade, marca_id, description, photo }: IUpdateProductDTO): Promise<Product>{

    const product = await this.productsRepository.update({
      name,
      valor,
      quantidade,
      marca_id,
      description,
      photo
    })
    
    return product
  }
}