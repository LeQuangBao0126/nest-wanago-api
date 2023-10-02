import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

import { UserController } from './user.controller';
import { DatabaseModule } from 'src/database/database.module';
import { DatabaseService } from 'src/database/database.service';

@Module({
  imports: [],
  providers: [UsersService, DatabaseService],
  exports: [UsersService],
  controllers: [UserController],
})
export class UsersModule {}
