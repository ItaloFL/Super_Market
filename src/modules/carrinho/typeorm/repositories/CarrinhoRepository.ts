import { ICarrinhoDTO } from "@modules/carrinho/dtos/ICarrinhoDTO";
import { ICarrinhoRepository } from "@modules/carrinho/Repositories/ICarrinhosRepository";
import { Product } from "@modules/products/typeorm/infra/entities/Product";
import { getRepository, Repository } from "typeorm";




export class CarrinhoRepository implements ICarrinhoRepository{
  
  private repository: Repository<Product>

  constructor(){
    this.repository = getRepository(Product)
  }
  
  
  async addProduct( { name, photo, valor, quantidade } : ICarrinhoDTO): Promise<void> {

    const products = this.repository.create({
      name,
      photo,
      valor,
      quantidade,
    })

    await this.repository.save(products)
  }
  
  removeProduct(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  listProducts(): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }
  

}