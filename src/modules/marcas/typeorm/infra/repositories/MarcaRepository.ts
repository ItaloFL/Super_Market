import { ICreateMarcaDTO } from "@modules/marcas/dtos/ICreateMarcaDTO";
import { IMarcaRepository } from "@modules/marcas/Repositories/IMarcaRepository";
import { getRepository, Repository } from "typeorm";
import { Marca } from "../entities/Marca";



export class MarcaRepository implements IMarcaRepository{
  
  private repository: Repository<Marca>

  constructor(){
    this.repository = getRepository(Marca)
  }
 
  async create({ name, description }: ICreateMarcaDTO): Promise<Marca> {
    
    const marca = this.repository.create({
      name,
      description
    })

    await this.repository.save(marca)

    return marca
  }

  async findById(id: string): Promise<Marca> {
    return await this.repository.findOne(id)
  }

  async findByName(name: string): Promise<Marca> {
    return await this.repository.findOne({
      name
    })
  }


}