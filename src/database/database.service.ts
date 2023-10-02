import { Inject, Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import User from './entities/user.entity';
import Post from 'src/posts/post.entity';
import Address from './entities/address.entity';
import Category from './entities/category.entity';

@Injectable()
export class DatabaseService {
  constructor(@InjectDataSource() private dataSource: DataSource) {}

  isExistData() {
    return this.dataSource.isInitialized;
  }
  getUserRepository() {
    return this.dataSource.getRepository(User);
  }
  getPostRepository() {
    return this.dataSource.getRepository(Post);
  }
  getAddressRepository() {
    return this.dataSource.getRepository(Address);
  }
  getCategoryRepository() {
    return this.dataSource.getRepository(Category);
  }
}
