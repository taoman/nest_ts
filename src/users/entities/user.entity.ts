import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  name: string;
  @Column()
  img_url: string;
  @Column()
  type_id: number;
}
