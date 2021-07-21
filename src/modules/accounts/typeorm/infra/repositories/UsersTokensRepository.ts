import { IUsersTokensDTO } from "@modules/accounts/dtos/IUsersTokensDTO";
import { IUsersTokensRepository } from "@modules/accounts/Repositories/IUsersTokensRepository";
import { getRepository, Repository } from "typeorm";
import { UsersTokens } from "../entities/UsersTokens";



export class UsersTokensRepository implements IUsersTokensRepository{
  
  private repository: Repository<UsersTokens>

  constructor(){
    this.repository = getRepository(UsersTokens)
  }
  
  async create({ user_id, expires_date, refresh_token }: IUsersTokensDTO): Promise<UsersTokens> {
    
    const userToken =  this.repository.create({
      user_id,
      expires_date,
      refresh_token
    })

    await this.repository.save(userToken)

    return userToken;
  }

  async findByIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UsersTokens> {
    return await this.repository.findOne({
      user_id,
      refresh_token
    })
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id)
  }
  
  

  
}