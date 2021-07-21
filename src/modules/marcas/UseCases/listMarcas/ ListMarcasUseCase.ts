import { IMarcaRepository } from "@modules/marcas/Repositories/IMarcaRepository";
import { Marca } from "@modules/marcas/typeorm/infra/entities/Marca";
import { Product } from "@modules/products/typeorm/infra/entities/Product";
import { inject, injectable } from "tsyringe";


@injectable()
export class ListMarcasUseCase{

  constructor(
    @inject("MarcaRepository")
    private marcaRepository: IMarcaRepository
  ){}

  async execute(): Promise<Marca[]>{

    const marcas = await this.marcaRepository.list()

    return marcas
  }
}