import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAddress1696132204291 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.hasTable('posts').then(async (exist) => {
      if (!exist) {
        return queryRunner.createTable(
          new Table({
            name: 'posts',
            columns: [
              {
                name: 'id',
                type: 'bigint',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'street',
                type: 'varchar',
                length: '255',
              },
              {
                name: 'city',
                type: 'varchar',
                length: '255',
              },
              {
                name: 'country',
                type: 'varchar',
                length: '255',
              },
            ],
          }),
          true,
        );
      }
      console.log(`Migration ${CreateAddress1696132204291.name} done`);
    });
  }

  async down(queryRunner: QueryRunner): Promise<void> {}
}
