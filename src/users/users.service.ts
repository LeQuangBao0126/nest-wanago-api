import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';

import CreateUserDto from './dto/createUser.dto';

import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(
    private databaseService: DatabaseService, //@Inject() private databaseService: DatabaseService
  ) {}

  async getByEmail(email: string) {
    const user = await this.databaseService
      .getUserRepository()
      .findOne({ where: { email } });
    if (!user) {
      throw new HttpException(
        'User with this email does not exist',
        HttpStatus.NOT_FOUND,
      );
    }
    return user;
  }
  async getById(id: number) {
    const user = await this.databaseService
      .getUserRepository()
      .findOne({ where: { id } });
    if (!user) {
      throw new HttpException(
        'User with this id does not exist',
        HttpStatus.NOT_FOUND,
      );
    }
    return user;
  }
  async create(userData: CreateUserDto) {
    const foundUser = await this.databaseService.getUserRepository().findOneBy({
      email: userData.email,
    });
    if (foundUser) {
      throw new BadRequestException('email đã tồn tại. xin hãy tạo email khác');
    }
    try {
      const newUser = this.databaseService.getUserRepository().create(userData);
      await this.databaseService.getUserRepository().save(newUser);
      return newUser;
    } catch (err) {
      throw new InternalServerErrorException('Something when wrong');
    }
  }
}
