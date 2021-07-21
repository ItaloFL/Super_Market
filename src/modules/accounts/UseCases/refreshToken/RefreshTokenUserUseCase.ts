import auth from "@config/auth";
import { IUsersTokensRepository } from "@modules/accounts/Repositories/IUsersTokensRepository";
import { IDateProvider } from "@shared/containers/providers/IDateProvider";
import { AppError } from "@shared/errors/AppError";
import { verify, sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import 'dotenv/config'

interface IPayLoad{
  email: string
  sub: string
}

interface ITokenResponse{
  token: string
  refresh_token: string
}

@injectable()
export class RefreshTokenUserUseCase{

  constructor(
    @inject("UsersTokensRepository")
    private usersTokensRepository: IUsersTokensRepository,
    @inject("DateProvider")
    private dateProvider: IDateProvider
  ){}

  async execute(token: string): Promise<ITokenResponse>{

    const { email, sub } = verify(token, auth.secret_refresh_token) as IPayLoad

    const user_id = sub;

    const userToken = await this.usersTokensRepository.findByIdAndRefreshToken(
      user_id,
      token
    )

    if(!userToken){
      throw new AppError("Refresh Token não existe!")
    }

    await this.usersTokensRepository.deleteById(userToken.id)

    const refresh_token = sign({ email }, auth.secret_refresh_token,{
      subject: sub,
      expiresIn: auth.expires_in_refresh_token
    })

    const expires_date = this.dateProvider.addDays(auth.expires_refresh_token_days)

    await this.usersTokensRepository.create({
      expires_date,
      refresh_token,
      user_id
    })

    const newToken = sign({}, auth.secret_token,{
      subject: user_id,
      expiresIn: auth.expires_in_token
    })

    return {
      refresh_token,
      token: newToken
    }
  }

}