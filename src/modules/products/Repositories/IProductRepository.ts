import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { IUpdateProductDTO } from "../dtos/IUpdateProductDTO";
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
  search(name: string): Promise<Product[]>
  update(data: IUpdateProductDTO): Promise<Product>
}