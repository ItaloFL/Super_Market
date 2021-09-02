import { ICarrinhoDTO } from "@modules/carrinho/dtos/ICarrinhoDTO";
import { ICarrinhoRepository } from "@modules/carrinho/Repositories/ICarrinhosRepository";
import { IProductRepository } from "@modules/products/Repositories/IProductRepository";
import { inject } from "tsyringe";



export class AddProductCarrinhoUseCase{

  constructor(
    @inject("CarrinhoRepository")
    private carrinhoRepository: ICarrinhoRepository
  ){}

  async execute( { name, photo, quantidade, valor }: ICarrinhoDTO ){
    
    const productsIntoCarrinho = await this.carrinhoRepository.addProduct({
      name,
      photo,
      quantidade,
      valor
    })

    return productsIntoCarrinho
  }
}