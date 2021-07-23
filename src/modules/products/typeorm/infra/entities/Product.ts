import { Marca } from "@modules/marcas/typeorm/infra/entities/Marca";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity("products")
export class Product{

  @PrimaryColumn()
  id: string

  @Column()
  name:string

  @ManyToOne(() => Marca)
  @JoinColumn({name: "marca_id"})
  marca: Marca

  @Column()
  marca_id: string

  @Column()
  description: string

  @Column()
  valor: number

  @Column()
  quantidade: string

  @Column()
  photo: string

  @CreateDateColumn()
  created_at: string

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }
  
}