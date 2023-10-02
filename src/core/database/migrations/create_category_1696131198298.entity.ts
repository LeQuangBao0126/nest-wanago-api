import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCategory1696132204291 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.hasTable('categories').then(async (exist) => {
      if (!exist) {
        return queryRunner.createTable(
          new Table({
            name: 'categories',
            columns: [
              {
                name: 'id',
                type: 'bigint',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'name',
                type: 'varchar',
                length: '255',
              },
            ],
          }),
          true,
        );
      }
      console.log(`Migration ${CreateCategory1696132204291.name} done`);
    });
  }

  async down(queryRunner: QueryRunner): Promise<void> {}
}
