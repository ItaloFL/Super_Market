import { ICarrinhoDTO } from "@modules/carrinho/dtos/ICarrinhoDTO";
import { ICarrinhoRepository } from "@modules/carrinho/Repositories/ICarrinhosRepository";
import { inject, injectable } from "tsyringe";


@injectable()
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