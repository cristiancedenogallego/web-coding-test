import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column({ default: true })
  happy: boolean;

  @Column({ default: true })
  healthy: boolean;

  @Column({ default: true })
  busy: boolean;
}
