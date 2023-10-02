import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Post from './post.entity';
import { DatabaseService } from 'src/database/database.service';

@Module({
  imports: [], // imports là module này sẽ cần những module bên thứ 3 nào hoặc module trong he thống (authModule chẳng hạn)
  controllers: [PostsController],
  providers: [PostsService, DatabaseService], //
  exports: [PostsService],
})
export class PostsModule {}
