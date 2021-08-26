import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity("users")
export class User{
  
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  data_nascimento: string

  @Column()
  endereço: string

  @Column()
  CEP: string

  @Column()
  CPF: string

  @Column()
  CNPJ: string

  @Column()
  avatar: string

  @Column()
  isAdmin: boolean

  @Column()
  telefone: string

  @Column()
  sexo: string

  @CreateDateColumn()
  created_at: string

  @UpdateDateColumn()
  updated_at: string

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }
}