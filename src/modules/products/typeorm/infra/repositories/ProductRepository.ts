import { ICreateProductDTO } from "@modules/products/dtos/ICreateProductDTO";
import { IProductRepository } from "@modules/products/Repositories/IProductRepository";
import { getRepository, Like, Repository } from "typeorm";
import { Product } from "../entities/Product";



export class ProductRepository implements IProductRepository{
  
  private repository: Repository<Product>

  constructor(){
    this.repository = getRepository(Product)
  }
 
  async create({name, marca_id,  description, quantidade, valor, photo}: ICreateProductDTO): Promise<Product> {
    
    const product = this.repository.create({
      name,
      marca_id,
      description,
      quantidade,
      valor,
      photo
    })

    await this.repository.save(product)

    return product
  }

  async findById(id: string): Promise<Product> {
    return this.repository.findOne(id)
  }

  async findByName(name: string): Promise<Product> {
    return this.repository.findOne({
      name
    })
  }
  
  async list(): Promise<Product[]> {
    return await this.repository.find()
  }

  async search(productName?: string, marcaName?: string): Promise<Product[]> {
    
    const products = await this.repository.find({
      where:{
        productName: Like(`%${productName}%`),
        marcaName: Like(`%${marcaName}%`)
      },
      select: [
        "name",
        "description",
        "marca_id",
        "photo",
        "quantidade",
        "valor"
      ]
    })

    return products
  }
  
  
}