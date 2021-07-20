import { ICreateMarcaDTO } from "@modules/marcas/dtos/ICreateMarcaDTO";
import { IMarcaRepository } from "@modules/marcas/Repositories/IMarcaRepository";
import { Marca } from "@modules/marcas/typeorm/infra/entities/Marca";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateMarcaUseCase{

  constructor(
    @inject("MarcaRepository")
    private marcaRepository: IMarcaRepository
  ){}

  async execute( {name, description}: ICreateMarcaDTO): Promise<Marca>{

    const marca = await this.marcaRepository.findByName(name)

    if(marca){
      throw new AppError("Essa marca já existe!")
    }

    const createdMarca = await this.marcaRepository.create({
      name,
      description
    })

    return createdMarca
  }
}