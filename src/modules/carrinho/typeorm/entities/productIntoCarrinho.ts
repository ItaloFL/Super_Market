import { Marca } from "@modules/marcas/typeorm/infra/entities/Marca"
import { Product } from "@modules/products/typeorm/infra/entities/Product"
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm"


@Entity("addProduct")
export class productIntoCarrinho{
  
  @PrimaryColumn()
  name: string

  @Column()
  photo: string

  @Column()
  preco: number

  @Column()
  quantidade: number

  @Column()
  unipreco: number
}