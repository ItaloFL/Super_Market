import { IUsersTokensDTO } from "../dtos/IUsersTokensDTO";
import { UsersTokens } from "../typeorm/infra/entities/UsersTokens";



export interface IUsersTokensRepository{

  create({user_id, expires_date, refresh_token}: IUsersTokensDTO): Promise<UsersTokens>
  findByIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UsersTokens>
  deleteById(id: string): Promise<void>
}