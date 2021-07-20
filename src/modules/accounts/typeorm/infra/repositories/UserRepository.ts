import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../../Repositories/IUserRepository";
import { User } from "../entities/User";



export class UserRepository implements IUserRepository{
  
  private repository: Repository<User>

  constructor(){
    this.repository = getRepository(User)
  }
  async create({ name, email, password, sexo, telefone, isAdmin, data_nascimento, avatar, CNPJ, CPF }: ICreateUserDTO): Promise<User> {
  
    const user = this.repository.create({
      name,
      email,
      password,
      sexo,
      telefone,
      CNPJ,
      CPF,
      avatar,
      data_nascimento,
      isAdmin
    })

    await this.repository.save(user)

    return user
  }

  async findById(id: string): Promise<User> {
    return await this.repository.findOne(id)
  }

  async findByEmail(email: string): Promise<User> {
    return await this.repository.findOne({
      email
    })
  }


}