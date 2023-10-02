import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Address from './address.entity';
import Post from './post.entity';

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ unique: true })
  public email: string;

  @Column()
  public name: string;

  @Column()
  public password: string;

  @Column()
  public address_id: string;

  public address: Address;

  public posts: Post[];
}

export default User;
