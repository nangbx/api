import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { TableName } from '../utils/table-name';
import User from './user.entity';
import Attribute from './attribute.entity';
@Entity({ name: TableName.Device })
export default class Device {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ type: 'nvarchar' })
  name: string;

  @Column({ type: 'nvarchar', unique: true, nullable: false })
  slug: string;

  @Column({ type: 'varchar' })
  image: string;

  @Column({
    type: 'boolean',
    name: 'is_active',
    nullable: false,
    default: false,
  })
  isActive?: boolean;

  @Column({ name: 'created_at' })
  createdAt?: string;

  @Column({ name: 'updated_at' })
  updatedAt?: string;

  @ManyToOne((type) => User, (user) => user.devices, { cascade: true })
  @JoinColumn({ name: 'user_id' })
  user?: User;

  @Column({ name: 'user_id' })
  userId?: string;

  @OneToMany((type) => Attribute, (attribute) => attribute.device)
  attributes?: Attribute[];

  @Column({ name: 'allow_auto_update' })
  allowAutoUpdate?: boolean;
}
