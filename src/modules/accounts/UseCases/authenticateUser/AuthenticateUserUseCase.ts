import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../Repositories/IUserRepository";
import { sign } from 'jsonwebtoken'
import { compare } from "bcryptjs";
import { AppError } from "@shared/errors/AppError";

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
}

@injectable()
export class AuthenticateUserUseCase{

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ){}

  async execute( {email, password}: IRequest ): Promise<IResponse>{

    const user = await this.userRepository.findByEmail(email)
    
    if(!user){
      throw new AppError("Usuario ou senha incorretos!")
    }

    const passwordMatch = compare(user.password, password)

    if(!passwordMatch){
      throw new AppError("Usuario ou senha incorretos!")
    }

    const token = await sign({}, process.env.API_SECRET_KEY, {
      subject: user.id,
      expiresIn: "1d"
    })

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email
      }
    }

    return tokenReturn
  }
}