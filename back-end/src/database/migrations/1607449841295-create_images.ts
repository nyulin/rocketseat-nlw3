import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1607449841295 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "images",
      columns:[
        {
          name: "id",
          type: "integer",
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment"
        },
        {
          name: "path",
          type: "varchar"
        },
        {
          name: "id_orphanage",
          type: "integer"
        }
      ],
      foreignKeys:[
        {
          name: "ImageOrphanage",
          columnNames: ["id_orphanage"],
          referencedTableName: "orphanages",
          referencedColumnNames: ["id"],
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("images");
  }

}
