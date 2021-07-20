import { ICreateProductDTO } from "@modules/products/dtos/ICreateProductDTO";
import { IProductRepository } from "@modules/products/Repositories/IProductRepository";
import { Product } from "@modules/products/typeorm/infra/entities/Product";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateProductUseCase{

  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ){}

  async execute( { name, marca_id, description, quantidade, valor, photo }: ICreateProductDTO): Promise<Product>{

    const product = await this.productRepository.findByName(name)

    if(product){
      throw new AppError("Produto já existe, verifique novamente!")
    }

    const createdProduct = await this.productRepository.create({
      name,
      marca_id,
      description,
      quantidade,
      valor,
      photo
    })

    return createdProduct
  }
}