import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Post from './post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post])], // imports là module này sẽ cần những module bên thứ 3 nào hoặc module trong he thống (authModule chẳng hạn)
  controllers: [PostsController],
  providers: [PostsService], //
})
export class PostsModule {}
