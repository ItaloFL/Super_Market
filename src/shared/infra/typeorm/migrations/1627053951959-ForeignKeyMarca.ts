import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class ForeignKeyMarca1627053951959 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey("products", new TableForeignKey({
            referencedTableName: "marca",
            referencedColumnNames: ["id"],
            columnNames: ["marca_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
