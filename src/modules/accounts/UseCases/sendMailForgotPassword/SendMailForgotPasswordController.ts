import { Request, Response } from "express";
import { container } from "tsyringe";
import { SendMailForgotPasswordUseCase } from "./SendMailForgotPasswordUseCase";



export class SendMailForgotPasswordController{

  async handle(request: Request, response: Response): Promise<Response>{

    const sendMailForgotPasswordUseCase = container.resolve(SendMailForgotPasswordUseCase)

    await sendMailForgotPasswordUseCase.execute()

    return response.send()
  }
}