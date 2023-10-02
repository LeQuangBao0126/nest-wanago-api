import { Module } from '@nestjs/common';
import CategoriesController from './categories.controller';
import CategoriesService from './category.service';
import { DatabaseService } from 'src/database/database.service';

@Module({
  imports: [],
  providers: [CategoriesService, DatabaseService],
  controllers: [CategoriesController],
  exports: [CategoriesService],
})
class CategoriesModule {}

export default CategoriesModule;
