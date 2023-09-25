import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';

@Module({
  controllers: [PostsController], // khai báo trong module này có 1 route handler
  providers: [PostsService], // dùng provider để nó biết mà inject,
  exports: [], // export service ra cho module khác xài .
  imports: [], // imports là module này sẽ cần những module bên thứ 3 nào hoặc module trong he thống (authModule chẳng hạn)
})
export class PostsModule {}
