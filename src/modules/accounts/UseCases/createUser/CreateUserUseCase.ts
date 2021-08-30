
import { AppError } from '@shared/errors/AppError'
import { hash } from 'bcryptjs'
import { inject, injectable } from 'tsyringe'

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { IUserRepository } from '../../Repositories/IUserRepository'
import { User } from '../../typeorm/infra/entities/User'



@injectable()
export class CreateUserUseCase{

  constructor(
    @inject("UserRepository")
    private userRepositoy: IUserRepository
  ){}

  async execute( {
    name,
    email,
    password,
    data_nascimento,
    telefone,
    CPF,
    sexo,
    avatar,
    isAdmin = false,
    endereço,
    CEP
  }: ICreateUserDTO): Promise<User>{

    const user = await this.userRepositoy.findByEmail(email)

    if(user){
      throw new AppError("Usuario existente, tente novamente com outras credenciais!")
    }

    if(password.length < 8){
      throw new AppError("Senha muito curta, tente novamente!")
    }

    const passwordHash = await hash(password, 8)

    const createdUser = await this.userRepositoy.create({
      name,
      email,
      password: passwordHash,
      data_nascimento,
      telefone,
      CPF,
      sexo,
      isAdmin,
      avatar,
      endereço,
      CEP
    })

    delete createdUser.password

    return createdUser
  }

}