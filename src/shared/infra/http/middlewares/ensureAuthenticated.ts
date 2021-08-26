import auth from "@config/auth";
import { AppError } from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad{
  sub: string
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  
  const authHeader = request.headers.authorization

  if(!authHeader){
    throw new AppError("Token faltando ou invalido!")
  }

  const [, token] = authHeader.split(" ")

  try {
    const { sub: user_id} = verify(
      token,
      process.env.API_SECRET_KEY
    ) as IPayLoad

    request.user = {
      id: user_id,
  }

    next()
  } catch{
    throw new AppError("Token Invalido!")
  }
}