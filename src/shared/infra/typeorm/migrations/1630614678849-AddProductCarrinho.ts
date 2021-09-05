import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AddProductCarrinho1630614678849 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "addProduct",
                columns: [
                    {
                        name: "name",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "photo",
                        type: "varchar"
                    },
                    {
                        name: "preco",
                        type: "numeric"
                    },
                    {
                        name: "quantidade",
                        type: "numeric"
                    },
                    {
                        name: "unipreco",
                        type: "numeric"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("addProduct")
    }

}
