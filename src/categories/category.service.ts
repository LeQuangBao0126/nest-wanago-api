import { Injectable } from '@nestjs/common';
import CreateCategoryDto from './dto/createCategory.dto';
import UpdateCategoryDto from './dto/updateCategory.dto';
import CategoryNotFoundException from './exceptions/categoryNotFoundException.exception';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export default class CategoriesService {
  constructor(private databaseService: DatabaseService) {}

  getAllCategories() {
    return this.databaseService
      .getCategoryRepository()
      .find({ relations: ['posts'] });
  }

  async getCategoryById(id: number) {
    const category = await this.databaseService
      .getCategoryRepository()
      .findOne({
        where: {
          id,
        },
        relations: ['posts'],
      });
    if (category) {
      return category;
    }
    throw new CategoryNotFoundException(id);
  }

  async createCategory(category: CreateCategoryDto) {
    const newCategory = this.databaseService
      .getCategoryRepository()
      .create(category);
    await this.databaseService.getCategoryRepository().save(newCategory);
    return newCategory;
  }

  async updateCategory(id: number, category: UpdateCategoryDto) {
    await this.databaseService.getCategoryRepository().update(id, category);
    const updatedCategory = await this.databaseService
      .getCategoryRepository()
      .findOne({
        where: { id },
        relations: ['posts'],
      });
    if (updatedCategory) {
      return updatedCategory;
    }
    throw new CategoryNotFoundException(id);
  }

  async deleteCategory(id: number) {
    const deleteResponse = await this.databaseService
      .getCategoryRepository()
      .delete(id);
    if (!deleteResponse.affected) {
      throw new CategoryNotFoundException(id);
    }
  }
}
