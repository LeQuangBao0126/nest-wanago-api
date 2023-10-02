import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePost1696132204291 implements MigrationInterface {
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
                name: 'title',
                type: 'varchar',
                length: '255',
              },
              {
                name: 'content',
                type: 'varchar',
                length: '255',
                isNullable: true,
              },
              {
                name: 'user_id',
                type: 'int',
              },
            ],
          }),
          true,
        );
      }
      console.log(`Migration ${CreatePost1696132204291.name} done`);
    });
  }

  async down(queryRunner: QueryRunner): Promise<void> {}
}
