import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateHotDogTable1615919200337 implements MigrationInterface {
    name = 'CreateHotDogTable1615919200337'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: "hot_dogs",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "image",
            type: "varchar",
          }
        ]
      }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('hot_dogs');
    }
}
