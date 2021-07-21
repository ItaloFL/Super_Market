import { container } from 'tsyringe'
import { IUserRepository } from '@modules/accounts/Repositories/IUserRepository'
import { UserRepository } from '@modules/accounts/typeorm/infra/repositories/UserRepository'
import { ProductRepository } from '@modules/products/typeorm/infra/repositories/ProductRepository'
import { IProductRepository } from '@modules/products/Repositories/IProductRepository'
import { IMarcaRepository } from '@modules/marcas/Repositories/IMarcaRepository'
import { MarcaRepository } from '@modules/marcas/typeorm/infra/repositories/MarcaRepository'
import { IUsersTokensRepository } from '@modules/accounts/Repositories/IUsersTokensRepository'
import { UsersTokensRepository } from '@modules/accounts/typeorm/infra/repositories/UsersTokensRepository'
import { IDateProvider } from './providers/IDateProvider'
import { DateProvider } from './providers/implementations/DateProvider'



container.registerSingleton<IUserRepository>(
  "UserRepository",
  UserRepository
)

container.registerSingleton<IProductRepository>(
  "ProductRepository",
  ProductRepository
)

container.registerSingleton<IMarcaRepository>(
  "MarcaRepository",
  MarcaRepository
)

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
)

container.registerSingleton<IDateProvider>(
  "DateProvider",
  DateProvider
)

