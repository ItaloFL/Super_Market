import express, { NextFunction, Request, Response } from 'express'
import { AppError } from '@shared/errors/AppError'
import '../typeorm'
import 'express-async-errors'
import { routes } from './routes'
const server = express()
import 'dotenv/config'

import '../../containers'

server.use(express.json())


server.use(routes)

server.use((err: Error, request: Request, response: Response, next: NextFunction) => {

  if(err instanceof AppError){
    return response.status(err.statusCode).json({
      message: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: `Internal error server - ${err.message}`
  })
})

server.listen(3333, () => console.log("running in port 3333"))


export { server }