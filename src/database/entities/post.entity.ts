import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './user.entity';
import Category from './category.entity';

@Entity()
class Post {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public title: string;

  @Column()
  public content: string;

  @Column({ nullable: true }) // có thể null
  public category?: string;

  @Column()
  public userId: string;
  //@ManyToOne(type => User, (author: User) => author.posts)
  @ManyToOne((type) => User)
  public author: User;

  /**
   * Nhiều nhiều
   */
  // @ManyToMany(() => Category, (category: Category) => category.posts)
  // @JoinTable({})
  public categories: Category[];
}

export default Post;
