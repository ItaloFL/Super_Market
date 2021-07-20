import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../typeorm/infra/entities/User";



export interface IUserRepository{


  create( 
    { name,
      email,
      password,
      sexo,
      telefone,
      isAdmin,
      data_nascimento,
      avatar,
      CNPJ,
      CPF 
    }
  : ICreateUserDTO): Promise<User>

  findById(id: string): Promise<User>
  findByEmail(email: string): Promise<User>

}