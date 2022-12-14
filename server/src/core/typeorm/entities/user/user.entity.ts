import { DateTime } from 'luxon';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DateTimeColumn } from '@/core/typeorm/columns';
import { Todo } from '../todo';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({ default: null })
  imagePath: string;

  @DateTimeColumn({ update: false })
  createdAt: DateTime;

  @DateTimeColumn()
  updatedAt: DateTime;

  @DateTimeColumn({ default: null })
  deletedAt: DateTime;

  @OneToMany(() => Todo, (e) => e.user)
  @JoinTable()
  todos: Todo[];

  @BeforeInsert()
  protected beforeInsert() {
    this.createdAt = DateTime.local();
    this.updatedAt = DateTime.local();
    this.deletedAt = null;
  }

  @BeforeUpdate()
  protected beforeUpdate() {
    this.updatedAt = DateTime.local();
  }
}
