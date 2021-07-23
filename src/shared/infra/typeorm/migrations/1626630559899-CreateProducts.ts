import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProduct1626584296299 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "products",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "marca_id",
                        type: "uuid"
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "valor",
                        type: "numeric"
                    },
                    {
                        name: "quantidade",
                        type: "varchar"
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "photo",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }  
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products")
    }

}
