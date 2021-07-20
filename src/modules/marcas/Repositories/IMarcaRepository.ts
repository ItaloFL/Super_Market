import { ICreateMarcaDTO } from "../dtos/ICreateMarcaDTO";
import { Marca } from "../typeorm/infra/entities/Marca";


export interface IMarcaRepository{

  create({name, description}: ICreateMarcaDTO): Promise<Marca>
  findById(id: string): Promise<Marca>
  findByName(name: string): Promise<Marca>

}