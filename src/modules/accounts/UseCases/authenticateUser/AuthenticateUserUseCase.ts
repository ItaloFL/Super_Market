import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../Repositories/IUserRepository";
import { sign } from 'jsonwebtoken'
import { compare } from "bcryptjs";
import { AppError } from "@shared/errors/AppError";
import auth from "@config/auth";
import { IDateProvider } from "@shared/containers/providers/IDateProvider";
import { IUsersTokensRepository } from "@modules/accounts/Repositories/IUsersTokensRepository";


interface IRequest{
  email: string,
  password: string
}

interface IResponse{
  token: string,
  user: {
    email: string
    name: string
  }
  refresh_token: string
}

@injectable()
export class AuthenticateUserUseCase{

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
    @inject("DateProvider")
    private dateProvider: IDateProvider,
    @inject("UsersTokensRepository")
    private usersTokensRepository: IUsersTokensRepository
  ){}

  async execute( {email, password}: IRequest ): Promise<IResponse>{

    const user = await this.userRepository.findByEmail(email)
    
    if(!user){
      throw new AppError("Usuario ou senha incorretos!")
    }

    const passwordMatch = await compare(user.password, password)

    if(!passwordMatch){
      throw new AppError("Usuario ou senha incorretos!")
    }

    const token = sign({}, process.env.API_SECRET_KEY, {
      subject: user.id,
      expiresIn: auth.expires_in_token
    })

    const refresh_token = sign({ email }, process.env.API_SECRET_KEY_REFRESH_TOKEN, {
      subject: user.id,
      expiresIn: auth.expires_in_refresh_token
    })

    const refresh_token_expires_date = this.dateProvider.addDays(auth.expires_refresh_token_days)

    await this.usersTokensRepository.create({
      user_id: user.id,
      refresh_token,
      expires_date: refresh_token_expires_date
    })

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email
      },
      refresh_token
    }

    return tokenReturn
  }
}