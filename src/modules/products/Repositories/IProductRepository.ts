import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { Product } from "../typeorm/infra/entities/Product";



export interface IProductRepository{

  create(
  { name,
    marca_id,
    description,
    photo,
    quantidade,
    valor
  } : ICreateProductDTO): Promise<Product>

  findById(id: string): Promise<Product>
  findByName(name: string): Promise<Product>
  list(): Promise<Product[]>
}