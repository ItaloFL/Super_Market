import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1626480300216 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                       name: "id",
                       type: "uuid",
                       isPrimary: true 
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "password",
                        type: "varchar"
                    },
                    {
                        name: "data_nascimento",
                        type: "varchar"
                    },
                    {
                        name: "CPF",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "CNPJ",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "avatar",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "telefone",
                        type: "varchar"
                    },
                    {
                        name: "sexo",
                        type: "varchar"
                    },
                    {
                        name: "isAdmin",
                        type: "boolean"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
