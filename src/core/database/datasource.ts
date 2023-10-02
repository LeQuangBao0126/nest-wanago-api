import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'nestjs',
  logging: true,
  poolSize: 100,
  migrations: [__dirname + '/migrations/*.entity{.ts,.js}'],
});
