import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";



export class CreateUserController{

  async handle(request: Request, response: Response): Promise<Response>{

    const { 
      name,
      email,
      password,
      data_nascimento,
      telefone,
      CPF,
      sexo,
      avatar,
      isAdmin,
      endereço,
      CEP
    } = request.body

    const createUserUseCase = container.resolve(CreateUserUseCase)

    const user = await createUserUseCase.execute({
      name,
      email,
      password,
      data_nascimento,
      telefone,
      CPF,
      sexo,
      avatar,
      isAdmin,
      endereço,
      CEP
    })


    return response.status(201).json(user)
  }
}