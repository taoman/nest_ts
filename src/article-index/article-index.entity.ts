import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  CreateDateColumn,
} from 'typeorm';
@Entity('article')
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  avatar: string;
  @CreateDateColumn()
  create_time: Timestamp;
  @Column()
  content: string;
}
