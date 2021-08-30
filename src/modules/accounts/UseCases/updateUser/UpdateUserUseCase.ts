import { IUserUpdateDTO } from "@modules/accounts/dtos/IUserUpdateDTO";
import { IUserRepository } from "@modules/accounts/Repositories/IUserRepository";
import { User } from "@modules/accounts/typeorm/infra/entities/User";
import { inject, injectable } from "tsyringe";



@injectable()
export class UpdateUserUseCase{

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ){}

  async execute({ name, email, data_nascimento, sexo, telefone, endereço, CEP} : IUserUpdateDTO): Promise<User>{
    
    const user = await this.userRepository.update({
      name,
      email,
      data_nascimento,
      sexo,
      telefone,
      endereço,
      CEP
    })

    delete user.password
    
    return user
  }
}