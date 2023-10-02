import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUser1696131198298 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.hasTable('users').then(async (exist) => {
      if (!exist) {
        return queryRunner.createTable(
          new Table({
            name: 'users',
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
                isNullable: false,
              },
              {
                name: 'email',
                type: 'varchar',
                length: '255',
                isUnique: true,
              },
              {
                name: 'password',
                type: 'varchar',
                length: '255',
                isNullable: false,
              },
              {
                name: 'address_id',
                type: 'int',
                isNullable: true,
              },
            ],
          }),
          true,
        );
      }
      console.log(`Migration ${CreateUser1696131198298.name} done`);
    });
  }

  async down(queryRunner: QueryRunner): Promise<void> {}
}
