import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthenticationService } from './authentication.service';
import { LocalStrategy } from './local.strategy';
import { AuthenticationController } from './authentication.controller';

@Module({
  controllers: [AuthenticationController], // khai báo trong module này có 1 route handler
  providers: [AuthenticationService, LocalStrategy], // dùng provider để nó biết mà inject,
  imports: [UsersModule, PassportModule], // imports là module này sẽ cần những module bên thứ 3 nào hoặc module trong he thống (authModule chẳng hạn)
})
export class PostsModule {}
