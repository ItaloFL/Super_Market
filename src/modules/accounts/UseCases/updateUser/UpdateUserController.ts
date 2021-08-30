import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "./UpdateUserUseCase";




export class UpdateUserController{

  async handle(request: Request, response: Response): Promise<Response>{

    const 
    { 
      name,
      email,
      data_nascimento,
      sexo,
      telefone,
      endereço,
      CEP
    }
    = request.body

    const updateUserUseCase = container.resolve(UpdateUserUseCase)

    const user = await updateUserUseCase.execute({
      name,
      email,
      data_nascimento,
      sexo,
      telefone,
      endereço,
      CEP
    })

    return response.status(200).json(user)
  }
}