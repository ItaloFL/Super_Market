import { classToClass } from "class-transformer";
import { IUserResponseDTO } from "../dtos/IUserResponseDTO";



export class UserMap{
  static toDTO({
    name,
    email,
    data_nascimento,
    sexo,
    telefone,
    CPF,
    endereço,
    CEP
  }: IUserResponseDTO){
    const user = classToClass({
      name,
      email,
      data_nascimento,
      sexo,
      telefone,
      CPF,
      endereço,
      CEP
    })
    return user
  }
}