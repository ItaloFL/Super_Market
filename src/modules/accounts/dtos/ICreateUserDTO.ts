

export interface ICreateUserDTO{

  id?: string
  name: string
  email: string
  password: string
  data_nascimento: string
  CPF?: string
  CNPJ?: string
  avatar?: string
  telefone: string
  sexo: string
  isAdmin: boolean
  endereço: string
  CEP: string
  
}