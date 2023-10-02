import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/createPost.dto';
import { UpdatePostDto } from './dto/updatePost.dto';
import { Repository } from 'typeorm';
import Post from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PostNotFoundException } from './exceptions/postNotFund.exception';
import { DatabaseService } from 'src/database/database.service';
import User from 'src/database/entities/user.entity';

@Injectable()
export class PostsService {
  constructor(private databaseService: DatabaseService) {}
  async getAllPosts() {
    return await this.databaseService.getPostRepository().find();
  }

  async getPostById(id: number) {
    const post = await this.databaseService.getPostRepository().findOne({
      where: { id },
      relations: ['author'],
    });
    if (post) {
      return post;
    }
    throw new PostNotFoundException(id);
  }

  async replacePost(id: number, post: UpdatePostDto) {
    await this.databaseService.getPostRepository().update(id, post);
    const updatedPost = await this.databaseService
      .getPostRepository()
      .findBy({ id });
    if (updatedPost) {
      return updatedPost;
    }
    throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
  }

  async createPost(post: CreatePostDto, user: User) {
    const newPost = this.databaseService.getPostRepository().create({
      ...post,
      author: user,
    });
    await this.databaseService.getPostRepository().save(newPost);
    return newPost;
  }

  async deletePost(id: number) {
    const deleteResponse = await this.databaseService
      .getPostRepository()
      .delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
  }
}
