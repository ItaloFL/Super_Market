import { Product } from "@modules/products/typeorm/infra/entities/Product";
import { ICarrinhoDTO } from "../dtos/ICarrinhoDTO";



export interface ICarrinhoRepository{

  addProduct( data: ICarrinhoDTO ): Promise<void>
  removeProduct(): Promise<void>
  listProducts(): Promise<Product[]>  
}