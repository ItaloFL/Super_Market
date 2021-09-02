import { ICreateProductDTO } from "@modules/products/dtos/ICreateProductDTO";
import { IUpdateProductDTO } from "@modules/products/dtos/IUpdateProductDTO";
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

  async search(name?: string): Promise<Product[]> {
    
    const products = await this.repository.find({
      where:{
        name: Like(`%${name}%`),
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

  async update(data: IUpdateProductDTO): Promise<Product> {
    
    let product = await this.repository.findOne(data.id)

    product = {...product, ...data}

    const newProduct = await this.repository.save(product)

    return newProduct
  }
 
  
  
}