import { Request, Response } from "express";
import { container } from "tsyringe";
import { RefreshTokenUserUseCase } from "./RefreshTokenUserUseCase";




export class RefreshTokenUserController{

  async handle(request: Request, response: Response): Promise<Response>{

    const token = request.body.token || request.headers["x-access-token"] || request.query.token

    const refreshTokenUserUseCase = container.resolve(RefreshTokenUserUseCase)

    const refresh_token = await refreshTokenUserUseCase.execute(token)

    return response.json(refresh_token)
  }
}