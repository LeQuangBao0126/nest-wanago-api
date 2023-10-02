import { Body, Controller, Get, Post } from '@nestjs/common';
import CreateUserDto from './dto/createUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  creteNewUser(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }
}
