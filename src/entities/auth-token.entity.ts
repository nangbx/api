import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import User from './user.entity';
@Entity({ name: 'auth_tokens' })
export default class AuthToken {
  @PrimaryGeneratedColumn('increment')
  id?: string;

  @Column({ name: 'created_at' })
  createdAt?: string;

  @Column({ name: 'updated_at' })
  updatedAt?: string;

  @ManyToOne((type) => User, (user) => user.authTokens, { cascade: true })
  @JoinColumn({ name: 'user_id' })
  user?: User;

  @Column({ name: 'user_id' })
  userId?: string;

  @Column({ name: 'access_token' })
  accessToken: string;

  @Column({ name: 'device_token' })
  deviceToken: string;
}
