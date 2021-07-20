import { classToClass } from "class-transformer";
import { IUserResponseDTO } from "../dtos/IUserResponseDTO";



export class UserMap{
  static toDTO({
    name,
    email,
    data_nascimento,
    sexo,
    telefone,
    CNPJ,
    CPF
  }: IUserResponseDTO){
    const user = classToClass({
      name,
      email,
      data_nascimento,
      sexo,
      telefone,
      CNPJ,
      CPF
    })
    return user
  }
}